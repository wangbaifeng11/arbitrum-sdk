/*
 * Copyright 2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-env node */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminErc20Bridger = exports.Erc20Bridger = void 0;
const constants_1 = require("@ethersproject/constants");
const logger_1 = require("@ethersproject/logger");
const ethers_1 = require("ethers");
const L1GatewayRouter__factory_1 = require("../abi/factories/L1GatewayRouter__factory");
const L2GatewayRouter__factory_1 = require("../abi/factories/L2GatewayRouter__factory");
const L1WethGateway__factory_1 = require("../abi/factories/L1WethGateway__factory");
const L2ArbitrumGateway__factory_1 = require("../abi/factories/L2ArbitrumGateway__factory");
const ERC20__factory_1 = require("../abi/factories/ERC20__factory");
const L2GatewayToken__factory_1 = require("../abi/factories/L2GatewayToken__factory");
const ICustomToken__factory_1 = require("../abi/factories/ICustomToken__factory");
const IArbToken__factory_1 = require("../abi/factories/IArbToken__factory");
const ParentToChildMessageGasEstimator_1 = require("../message/ParentToChildMessageGasEstimator");
const signerOrProvider_1 = require("../dataEntities/signerOrProvider");
const networks_1 = require("../dataEntities/networks");
const errors_1 = require("../dataEntities/errors");
const constants_2 = require("../dataEntities/constants");
const eventFetcher_1 = require("../utils/eventFetcher");
const assetBridger_1 = require("./assetBridger");
const ParentTransaction_1 = require("../message/ParentTransaction");
const ChildTransaction_1 = require("../message/ChildTransaction");
const transactionRequest_1 = require("../dataEntities/transactionRequest");
const utils_1 = require("ethers/lib/utils");
const retryableData_1 = require("../dataEntities/retryableData");
const lib_1 = require("../utils/lib");
const L2ERC20Gateway__factory_1 = require("../abi/factories/L2ERC20Gateway__factory");
const calldata_1 = require("../utils/calldata");
/**
 * Bridger for moving ERC20 tokens back and forth between parent-to-child
 */
class Erc20Bridger extends assetBridger_1.AssetBridger {
    /**
     * Bridger for moving ERC20 tokens back and forth between parent-to-child
     */
    constructor(childNetwork) {
        super(childNetwork);
        (0, networks_1.assertArbitrumNetworkHasTokenBridge)(childNetwork);
        this.childNetwork = childNetwork;
    }
    /**
     * Instantiates a new Erc20Bridger from a child provider
     * @param childProvider
     * @returns
     */
    static async fromProvider(childProvider) {
        return new Erc20Bridger(await (0, networks_1.getArbitrumNetwork)(childProvider));
    }
    /**
     * Get the address of the parent gateway for this token
     * @param erc20ParentAddress
     * @param parentProvider
     * @returns
     */
    async getParentGatewayAddress(erc20ParentAddress, parentProvider) {
        await this.checkParentNetwork(parentProvider);
        return await L1GatewayRouter__factory_1.L1GatewayRouter__factory.connect(this.childNetwork.tokenBridge.parentGatewayRouter, parentProvider).getGateway(erc20ParentAddress);
    }
    /**
     * Get the address of the child gateway for this token
     * @param erc20ParentAddress
     * @param childProvider
     * @returns
     */
    async getChildGatewayAddress(erc20ParentAddress, childProvider) {
        await this.checkChildNetwork(childProvider);
        return await L2GatewayRouter__factory_1.L2GatewayRouter__factory.connect(this.childNetwork.tokenBridge.childGatewayRouter, childProvider).getGateway(erc20ParentAddress);
    }
    /**
     * Creates a transaction request for approving the custom gas token to be spent by the relevant gateway on the parent network
     * @param params
     */
    async getApproveGasTokenRequest(params) {
        if (this.nativeTokenIsEth) {
            throw new Error('chain uses ETH as its native/gas token');
        }
        const txRequest = await this.getApproveTokenRequest(params);
        // just reuse the approve token request but direct it towards the native token contract
        return Object.assign(Object.assign({}, txRequest), { to: this.nativeToken });
    }
    /**
     * Approves the custom gas token to be spent by the relevant gateway on the parent network
     * @param params
     */
    async approveGasToken(params) {
        if (this.nativeTokenIsEth) {
            throw new Error('chain uses ETH as its native/gas token');
        }
        await this.checkParentNetwork(params.parentSigner);
        const approveGasTokenRequest = this.isApproveParams(params)
            ? await this.getApproveGasTokenRequest(Object.assign(Object.assign({}, params), { parentProvider: signerOrProvider_1.SignerProviderUtils.getProviderOrThrow(params.parentSigner) }))
            : params.txRequest;
        return params.parentSigner.sendTransaction(Object.assign(Object.assign({}, approveGasTokenRequest), params.overrides));
    }
    /**
     * Get a tx request to approve tokens for deposit to the bridge.
     * The tokens will be approved for the relevant gateway.
     * @param params
     * @returns
     */
    async getApproveTokenRequest(params) {
        // you approve tokens to the gateway that the router will use
        const gatewayAddress = await this.getParentGatewayAddress(params.erc20ParentAddress, signerOrProvider_1.SignerProviderUtils.getProviderOrThrow(params.parentProvider));
        const iErc20Interface = ERC20__factory_1.ERC20__factory.createInterface();
        const data = iErc20Interface.encodeFunctionData('approve', [
            gatewayAddress,
            params.amount || Erc20Bridger.MAX_APPROVAL,
        ]);
        return {
            to: params.erc20ParentAddress,
            data,
            value: ethers_1.BigNumber.from(0),
        };
    }
    isApproveParams(params) {
        return params.erc20ParentAddress != undefined;
    }
    /**
     * Approve tokens for deposit to the bridge. The tokens will be approved for the relevant gateway.
     * @param params
     * @returns
     */
    async approveToken(params) {
        await this.checkParentNetwork(params.parentSigner);
        const approveRequest = this.isApproveParams(params)
            ? await this.getApproveTokenRequest(Object.assign(Object.assign({}, params), { parentProvider: signerOrProvider_1.SignerProviderUtils.getProviderOrThrow(params.parentSigner) }))
            : params.txRequest;
        return await params.parentSigner.sendTransaction(Object.assign(Object.assign({}, approveRequest), params.overrides));
    }
    /**
     * Get the child network events created by a withdrawal
     * @param childProvider
     * @param gatewayAddress
     * @param parentTokenAddress
     * @param fromAddress
     * @param filter
     * @returns
     */
    async getWithdrawalEvents(childProvider, gatewayAddress, filter, parentTokenAddress, fromAddress, toAddress) {
        await this.checkChildNetwork(childProvider);
        const eventFetcher = new eventFetcher_1.EventFetcher(childProvider);
        const events = (await eventFetcher.getEvents(L2ArbitrumGateway__factory_1.L2ArbitrumGateway__factory, contract => contract.filters.WithdrawalInitiated(null, // parentToken
        fromAddress || null, // _from
        toAddress || null // _to
        ), Object.assign(Object.assign({}, filter), { address: gatewayAddress }))).map(a => (Object.assign({ txHash: a.transactionHash }, a.event)));
        return parentTokenAddress
            ? events.filter(log => log.l1Token.toLocaleLowerCase() ===
                parentTokenAddress.toLocaleLowerCase())
            : events;
    }
    /**
     * Does the provided address look like a weth gateway
     * @param potentialWethGatewayAddress
     * @param parentProvider
     * @returns
     */
    async looksLikeWethGateway(potentialWethGatewayAddress, parentProvider) {
        try {
            const potentialWethGateway = L1WethGateway__factory_1.L1WethGateway__factory.connect(potentialWethGatewayAddress, parentProvider);
            await potentialWethGateway.callStatic.l1Weth();
            return true;
        }
        catch (err) {
            if (err instanceof Error &&
                err.code ===
                    logger_1.Logger.errors.CALL_EXCEPTION) {
                return false;
            }
            else {
                throw err;
            }
        }
    }
    /**
     * Is this a known or unknown WETH gateway
     * @param gatewayAddress
     * @param parentProvider
     * @returns
     */
    async isWethGateway(gatewayAddress, parentProvider) {
        const wethAddress = this.childNetwork.tokenBridge.parentWethGateway;
        if (this.childNetwork.isCustom) {
            // For custom network, we do an ad-hoc check to see if it's a WETH gateway
            if (await this.looksLikeWethGateway(gatewayAddress, parentProvider)) {
                return true;
            }
            // ...otherwise we directly check it against the config file
        }
        else if (wethAddress === gatewayAddress) {
            return true;
        }
        return false;
    }
    /**
     * Get the child network token contract at the provided address
     * Note: This function just returns a typed ethers object for the provided address, it doesn't
     * check the underlying form of the contract bytecode to see if it's an erc20, and doesn't ensure the validity
     * of any of the underlying functions on that contract.
     * @param childProvider
     * @param childTokenAddr
     * @returns
     */
    getChildTokenContract(childProvider, childTokenAddr) {
        return L2GatewayToken__factory_1.L2GatewayToken__factory.connect(childTokenAddr, childProvider);
    }
    /**
     * Get the parent token contract at the provided address
     * Note: This function just returns a typed ethers object for the provided address, it doesnt
     * check the underlying form of the contract bytecode to see if it's an erc20, and doesn't ensure the validity
     * of any of the underlying functions on that contract.
     * @param parentProvider
     * @param parentTokenAddr
     * @returns
     */
    getParentTokenContract(parentProvider, parentTokenAddr) {
        return ERC20__factory_1.ERC20__factory.connect(parentTokenAddr, parentProvider);
    }
    /**
     * Get the corresponding child network token address for the provided parent network token
     * @param erc20ParentAddress
     * @param parentProvider
     * @returns
     */
    async getChildErc20Address(erc20ParentAddress, parentProvider) {
        await this.checkParentNetwork(parentProvider);
        const parentGatewayRouter = L1GatewayRouter__factory_1.L1GatewayRouter__factory.connect(this.childNetwork.tokenBridge.parentGatewayRouter, parentProvider);
        return await parentGatewayRouter.functions
            .calculateL2TokenAddress(erc20ParentAddress)
            .then(([res]) => res);
    }
    /**
     * Get the corresponding parent network address for the provided child network token
     * Validates the returned address against the child network router to ensure it is correctly mapped to the provided erc20ChildChainAddress
     * @param erc20ChildChainAddress
     * @param childProvider
     * @returns
     */
    async getParentErc20Address(erc20ChildChainAddress, childProvider) {
        await this.checkChildNetwork(childProvider);
        // child network WETH contract doesn't have the parentAddress method on it
        if (erc20ChildChainAddress.toLowerCase() ===
            this.childNetwork.tokenBridge.childWeth.toLowerCase()) {
            return this.childNetwork.tokenBridge.parentWeth;
        }
        const arbERC20 = L2GatewayToken__factory_1.L2GatewayToken__factory.connect(erc20ChildChainAddress, childProvider);
        const parentAddress = await arbERC20.functions
            .l1Address()
            .then(([res]) => res);
        // check that this l1 address is indeed registered to this child token
        const childGatewayRouter = L2GatewayRouter__factory_1.L2GatewayRouter__factory.connect(this.childNetwork.tokenBridge.childGatewayRouter, childProvider);
        const childAddress = await childGatewayRouter.calculateL2TokenAddress(parentAddress);
        if (childAddress.toLowerCase() !== erc20ChildChainAddress.toLowerCase()) {
            throw new errors_1.ArbSdkError(`Unexpected parent address. Parent address from token is not registered to the provided child address. ${parentAddress} ${childAddress} ${erc20ChildChainAddress}`);
        }
        return parentAddress;
    }
    /**
     * Whether the token has been disabled on the router
     * @param parentTokenAddress
     * @param parentProvider
     * @returns
     */
    async isDepositDisabled(parentTokenAddress, parentProvider) {
        await this.checkParentNetwork(parentProvider);
        const parentGatewayRouter = L1GatewayRouter__factory_1.L1GatewayRouter__factory.connect(this.childNetwork.tokenBridge.parentGatewayRouter, parentProvider);
        return ((await parentGatewayRouter.l1TokenToGateway(parentTokenAddress)) ===
            constants_2.DISABLED_GATEWAY);
    }
    applyDefaults(params) {
        return Object.assign(Object.assign({}, params), { excessFeeRefundAddress: params.excessFeeRefundAddress || params.from, callValueRefundAddress: params.callValueRefundAddress || params.from, destinationAddress: params.destinationAddress || params.from });
    }
    /**
     * Get the call value for the deposit transaction request
     * @param depositParams
     * @returns
     */
    getDepositRequestCallValue(depositParams) {
        // the call value should be zero when paying with a custom gas token,
        // as the fee amount is packed inside the last parameter (`data`) of the call to `outboundTransfer`, see `getDepositRequestOutboundTransferInnerData`
        if (!this.nativeTokenIsEth) {
            return ethers_1.constants.Zero;
        }
        // we dont include the child call value for token deposits because
        // they either have 0 call value, or their call value is withdrawn from
        // a contract by the gateway (weth). So in both of these cases the child call value
        // is not actually deposited in the value field
        return depositParams.gasLimit
            .mul(depositParams.maxFeePerGas)
            .add(depositParams.maxSubmissionCost);
    }
    /**
     * Get the `data` param for call to `outboundTransfer`
     * @param depositParams
     * @returns
     */
    getDepositRequestOutboundTransferInnerData(depositParams, decimals) {
        if (!this.nativeTokenIsEth) {
            return utils_1.defaultAbiCoder.encode(['uint256', 'bytes', 'uint256'], [
                // maxSubmissionCost
                depositParams.maxSubmissionCost, // will be zero
                // callHookData
                '0x',
                // nativeTokenTotalFee
                (0, lib_1.scaleFrom18DecimalsToNativeTokenDecimals)({
                    amount: depositParams.gasLimit
                        .mul(depositParams.maxFeePerGas)
                        .add(depositParams.maxSubmissionCost), // will be zero
                    decimals,
                }),
            ]);
        }
        return utils_1.defaultAbiCoder.encode(['uint256', 'bytes'], [
            // maxSubmissionCost
            depositParams.maxSubmissionCost,
            // callHookData
            '0x',
        ]);
    }
    /**
     * Get the arguments for calling the deposit function
     * @param params
     * @returns
     */
    async getDepositRequest(params) {
        await this.checkParentNetwork(params.parentProvider);
        await this.checkChildNetwork(params.childProvider);
        const defaultedParams = this.applyDefaults(params);
        const { amount, destinationAddress, erc20ParentAddress, parentProvider, childProvider, retryableGasOverrides, } = defaultedParams;
        const parentGatewayAddress = await this.getParentGatewayAddress(erc20ParentAddress, parentProvider);
        let tokenGasOverrides = retryableGasOverrides;
        // we also add a hardcoded minimum gas limit for custom gateway deposits
        if (parentGatewayAddress === this.childNetwork.tokenBridge.parentCustomGateway) {
            if (!tokenGasOverrides)
                tokenGasOverrides = {};
            if (!tokenGasOverrides.gasLimit)
                tokenGasOverrides.gasLimit = {};
            if (!tokenGasOverrides.gasLimit.min) {
                tokenGasOverrides.gasLimit.min =
                    Erc20Bridger.MIN_CUSTOM_DEPOSIT_GAS_LIMIT;
            }
        }
        const decimals = await (0, lib_1.getNativeTokenDecimals)({
            parentProvider,
            childNetwork: this.childNetwork,
        });
        const depositFunc = (depositParams) => {
            depositParams.maxSubmissionCost =
                params.maxSubmissionCost || depositParams.maxSubmissionCost;
            const iGatewayRouter = L1GatewayRouter__factory_1.L1GatewayRouter__factory.createInterface();
            const innerData = this.getDepositRequestOutboundTransferInnerData(depositParams, decimals);
            const functionData = defaultedParams.excessFeeRefundAddress !== defaultedParams.from
                ? iGatewayRouter.encodeFunctionData('outboundTransferCustomRefund', [
                    erc20ParentAddress,
                    defaultedParams.excessFeeRefundAddress,
                    destinationAddress,
                    amount,
                    depositParams.gasLimit,
                    depositParams.maxFeePerGas,
                    innerData,
                ])
                : iGatewayRouter.encodeFunctionData('outboundTransfer', [
                    erc20ParentAddress,
                    destinationAddress,
                    amount,
                    depositParams.gasLimit,
                    depositParams.maxFeePerGas,
                    innerData,
                ]);
            return {
                innerData: innerData,
                data: functionData,
                to: this.childNetwork.tokenBridge.parentGatewayRouter,
                from: defaultedParams.from,
                value: this.getDepositRequestCallValue(depositParams),
            };
        };
        const gasEstimator = new ParentToChildMessageGasEstimator_1.ParentToChildMessageGasEstimator(childProvider);
        const estimates = await gasEstimator.populateFunctionParams(depositFunc, parentProvider, tokenGasOverrides);
        console.log('%c estimates new', 'color: #00A0E9; font-size: 26px; font-weight: blod;', estimates);
        return {
            estimates: estimates,
            txRequest: {
                to: this.childNetwork.tokenBridge.parentGatewayRouter,
                data: estimates.data,
                value: estimates.value,
                from: params.from,
            },
            retryableData: Object.assign(Object.assign({}, estimates.retryable), estimates.estimates),
            isValid: async () => {
                const reEstimates = await gasEstimator.populateFunctionParams(depositFunc, parentProvider, tokenGasOverrides);
                return ParentToChildMessageGasEstimator_1.ParentToChildMessageGasEstimator.isValid(estimates.estimates, reEstimates.estimates);
            },
        };
    }
    /**
     * Execute a token deposit from parent to child network
     * @param params
     * @returns
     */
    async deposit(params) {
        var _a;
        await this.checkParentNetwork(params.parentSigner);
        // Although the types prevent should alert callers that value is not
        // a valid override, it is possible that they pass it in anyway as it's a common override
        // We do a safety check here
        if ((_a = params.overrides) === null || _a === void 0 ? void 0 : _a.value) {
            throw new errors_1.ArbSdkError('Parent call value should be set through `l1CallValue` param');
        }
        const parentProvider = signerOrProvider_1.SignerProviderUtils.getProviderOrThrow(params.parentSigner);
        const erc20ParentAddress = (0, transactionRequest_1.isParentToChildTransactionRequest)(params)
            ? (0, calldata_1.getErc20ParentAddressFromParentToChildTxRequest)(params)
            : params.erc20ParentAddress;
        const isRegistered = await this.isRegistered({
            erc20ParentAddress,
            parentProvider,
            childProvider: params.childProvider,
        });
        if (!isRegistered) {
            const parentChainId = (await parentProvider.getNetwork()).chainId;
            throw new Error(`Token ${erc20ParentAddress} on chain ${parentChainId} is not registered on the gateways`);
        }
        const tokenDeposit = (0, transactionRequest_1.isParentToChildTransactionRequest)(params)
            ? params
            : await this.getDepositRequest(Object.assign(Object.assign({}, params), { parentProvider, from: await params.parentSigner.getAddress() }));
        const tx = await params.parentSigner.sendTransaction(Object.assign(Object.assign({}, tokenDeposit.txRequest), params.overrides));
        return ParentTransaction_1.ParentTransactionReceipt.monkeyPatchContractCallWait(tx);
    }
    /**
     * Get the arguments for calling the token withdrawal function
     * @param params
     * @returns
     */
    async getWithdrawalRequest(params) {
        const to = params.destinationAddress;
        const routerInterface = L2GatewayRouter__factory_1.L2GatewayRouter__factory.createInterface();
        const functionData = 
        // we need to do this since typechain doesnt seem to correctly create
        // encodeFunctionData for functions with overrides
        routerInterface.encodeFunctionData('outboundTransfer(address,address,uint256,bytes)', [
            params.erc20ParentAddress,
            to,
            params.amount,
            '0x',
        ]);
        return {
            txRequest: {
                data: functionData,
                to: this.childNetwork.tokenBridge.childGatewayRouter,
                value: ethers_1.BigNumber.from(0),
                from: params.from,
            },
            // todo: do proper estimation
            estimateParentGasLimit: async (parentProvider) => {
                if (await (0, lib_1.isArbitrumChain)(parentProvider)) {
                    // values for L3 are dependent on the L1 base fee, so hardcoding can never be accurate
                    // however, this is only an estimate used for display, so should be good enough
                    //
                    // measured with token withdrawals from Rari then added some padding
                    return ethers_1.BigNumber.from(8000000);
                }
                const parentGatewayAddress = await this.getParentGatewayAddress(params.erc20ParentAddress, parentProvider);
                // The WETH gateway is the only deposit that requires callvalue in the Child user-tx (i.e., the recently un-wrapped ETH)
                // Here we check if this is a WETH deposit, and include the callvalue for the gas estimate query if so
                const isWeth = await this.isWethGateway(parentGatewayAddress, parentProvider);
                // measured 157421 - add some padding
                return isWeth ? ethers_1.BigNumber.from(190000) : ethers_1.BigNumber.from(160000);
            },
        };
    }
    /**
     * Withdraw tokens from child to parent network
     * @param params
     * @returns
     */
    async withdraw(params) {
        if (!signerOrProvider_1.SignerProviderUtils.signerHasProvider(params.childSigner)) {
            throw new errors_1.MissingProviderArbSdkError('childSigner');
        }
        await this.checkChildNetwork(params.childSigner);
        const withdrawalRequest = (0, transactionRequest_1.isChildToParentTransactionRequest)(params)
            ? params
            : await this.getWithdrawalRequest(Object.assign(Object.assign({}, params), { from: await params.childSigner.getAddress() }));
        const tx = await params.childSigner.sendTransaction(Object.assign(Object.assign({}, withdrawalRequest.txRequest), params.overrides));
        return ChildTransaction_1.ChildTransactionReceipt.monkeyPatchWait(tx);
    }
    /**
     * Checks if the token has been properly registered on both gateways. Mostly useful for tokens that use a custom gateway.
     *
     * @param {Object} params
     * @param {string} params.erc20ParentAddress
     * @param {Provider} params.parentProvider
     * @param {Provider} params.childProvider
     * @returns
     */
    async isRegistered({ erc20ParentAddress, parentProvider, childProvider, }) {
        const parentStandardGatewayAddressFromChainConfig = this.childNetwork.tokenBridge.parentErc20Gateway;
        const parentGatewayAddressFromParentGatewayRouter = await this.getParentGatewayAddress(erc20ParentAddress, parentProvider);
        // token uses standard gateway; no need to check further
        if (parentStandardGatewayAddressFromChainConfig.toLowerCase() ===
            parentGatewayAddressFromParentGatewayRouter.toLowerCase()) {
            return true;
        }
        const childTokenAddressFromParentGatewayRouter = await this.getChildErc20Address(erc20ParentAddress, parentProvider);
        const childGatewayAddressFromChildRouter = await this.getChildGatewayAddress(erc20ParentAddress, childProvider);
        const childTokenAddressFromChildGateway = await L2ERC20Gateway__factory_1.L2ERC20Gateway__factory.connect(childGatewayAddressFromChildRouter, childProvider).calculateL2TokenAddress(erc20ParentAddress);
        return (childTokenAddressFromParentGatewayRouter.toLowerCase() ===
            childTokenAddressFromChildGateway.toLowerCase());
    }
}
exports.Erc20Bridger = Erc20Bridger;
Erc20Bridger.MAX_APPROVAL = constants_1.MaxUint256;
Erc20Bridger.MIN_CUSTOM_DEPOSIT_GAS_LIMIT = ethers_1.BigNumber.from(275000);
/**
 * Admin functionality for the token bridge
 */
class AdminErc20Bridger extends Erc20Bridger {
    percentIncrease(num, increase) {
        return num.add(num.mul(increase).div(100));
    }
    getApproveGasTokenForCustomTokenRegistrationRequest(params) {
        if (this.nativeTokenIsEth) {
            throw new Error('chain uses ETH as its native/gas token');
        }
        const iErc20Interface = ERC20__factory_1.ERC20__factory.createInterface();
        const data = iErc20Interface.encodeFunctionData('approve', [
            params.erc20ParentAddress,
            params.amount || Erc20Bridger.MAX_APPROVAL,
        ]);
        return {
            data,
            value: ethers_1.BigNumber.from(0),
            to: this.nativeToken,
        };
    }
    async approveGasTokenForCustomTokenRegistration(params) {
        if (this.nativeTokenIsEth) {
            throw new Error('chain uses ETH as its native/gas token');
        }
        await this.checkParentNetwork(params.parentSigner);
        const approveGasTokenRequest = this.isApproveParams(params)
            ? this.getApproveGasTokenForCustomTokenRegistrationRequest(Object.assign(Object.assign({}, params), { parentProvider: signerOrProvider_1.SignerProviderUtils.getProviderOrThrow(params.parentSigner) }))
            : params.txRequest;
        return params.parentSigner.sendTransaction(Object.assign(Object.assign({}, approveGasTokenRequest), params.overrides));
    }
    /**
     * Register a custom token on the Arbitrum bridge
     * See https://developer.offchainlabs.com/docs/bridging_assets#the-arbitrum-generic-custom-gateway for more details
     * @param parentTokenAddress Address of the already deployed parent token. Must inherit from https://developer.offchainlabs.com/docs/sol_contract_docs/md_docs/arb-bridge-peripherals/tokenbridge/ethereum/icustomtoken.
     * @param childTokenAddress Address of the already deployed child token. Must inherit from https://developer.offchainlabs.com/docs/sol_contract_docs/md_docs/arb-bridge-peripherals/tokenbridge/arbitrum/iarbtoken.
     * @param parentSigner The signer with the rights to call `registerTokenOnL2` on the parent token
     * @param childProvider Arbitrum rpc provider
     * @returns
     */
    async registerCustomToken(parentTokenAddress, childTokenAddress, parentSigner, childProvider) {
        if (!signerOrProvider_1.SignerProviderUtils.signerHasProvider(parentSigner)) {
            throw new errors_1.MissingProviderArbSdkError('parentSigner');
        }
        await this.checkParentNetwork(parentSigner);
        await this.checkChildNetwork(childProvider);
        const parentProvider = parentSigner.provider;
        const parentSenderAddress = await parentSigner.getAddress();
        const parentToken = ICustomToken__factory_1.ICustomToken__factory.connect(parentTokenAddress, parentSigner);
        const childToken = IArbToken__factory_1.IArbToken__factory.connect(childTokenAddress, childProvider);
        // sanity checks
        await parentToken.deployed();
        await childToken.deployed();
        if (!this.nativeTokenIsEth) {
            const nativeTokenContract = ERC20__factory_1.ERC20__factory.connect(this.nativeToken, parentProvider);
            const allowance = await nativeTokenContract.allowance(parentSenderAddress, parentToken.address);
            const maxFeePerGasOnChild = (await childProvider.getFeeData())
                .maxFeePerGas;
            const maxFeePerGasOnChildWithBuffer = this.percentIncrease(maxFeePerGasOnChild, ethers_1.BigNumber.from(500));
            // hardcode gas limit to 60k
            const estimatedGasFee = ethers_1.BigNumber.from(60000).mul(maxFeePerGasOnChildWithBuffer);
            if (allowance.lt(estimatedGasFee)) {
                throw new Error(`Insufficient allowance. Please increase spending for: owner - ${parentSenderAddress}, spender - ${parentToken.address}.`);
            }
        }
        const parentAddressFromChild = await childToken.l1Address();
        if (parentAddressFromChild !== parentTokenAddress) {
            throw new errors_1.ArbSdkError(`child token does not have parent address set. Set address: ${parentAddressFromChild}, expected address: ${parentTokenAddress}.`);
        }
        const nativeTokenDecimals = await (0, lib_1.getNativeTokenDecimals)({
            parentProvider,
            childNetwork: this.childNetwork,
        });
        const from = await parentSigner.getAddress();
        const encodeFuncData = (setTokenGas, setGatewayGas, maxFeePerGas) => {
            // if we set maxFeePerGas to be the error triggering param then it will
            // always trigger for the setToken call and never make it ti setGateways
            // so we here we just use the gas limit to trigger retryable data
            const doubleFeePerGas = maxFeePerGas.eq(retryableData_1.RetryableDataTools.ErrorTriggeringParams.maxFeePerGas)
                ? retryableData_1.RetryableDataTools.ErrorTriggeringParams.maxFeePerGas.mul(2)
                : maxFeePerGas;
            const setTokenDeposit = setTokenGas.gasLimit
                .mul(doubleFeePerGas)
                .add(setTokenGas.maxSubmissionCost);
            const setGatewayDeposit = setGatewayGas.gasLimit
                .mul(doubleFeePerGas)
                .add(setGatewayGas.maxSubmissionCost);
            const data = parentToken.interface.encodeFunctionData('registerTokenOnL2', [
                childTokenAddress,
                setTokenGas.maxSubmissionCost,
                setGatewayGas.maxSubmissionCost,
                setTokenGas.gasLimit,
                setGatewayGas.gasLimit,
                doubleFeePerGas,
                (0, lib_1.scaleFrom18DecimalsToNativeTokenDecimals)({
                    amount: setTokenDeposit,
                    decimals: nativeTokenDecimals,
                }),
                (0, lib_1.scaleFrom18DecimalsToNativeTokenDecimals)({
                    amount: setGatewayDeposit,
                    decimals: nativeTokenDecimals,
                }),
                parentSenderAddress,
            ]);
            return {
                data,
                value: this.nativeTokenIsEth
                    ? setTokenDeposit.add(setGatewayDeposit)
                    : ethers_1.BigNumber.from(0),
                to: parentToken.address,
                from,
            };
        };
        const gEstimator = new ParentToChildMessageGasEstimator_1.ParentToChildMessageGasEstimator(childProvider);
        const setTokenEstimates2 = await gEstimator.populateFunctionParams((params) => encodeFuncData({
            gasLimit: params.gasLimit,
            maxSubmissionCost: params.maxSubmissionCost,
        }, {
            gasLimit: retryableData_1.RetryableDataTools.ErrorTriggeringParams.gasLimit,
            maxSubmissionCost: ethers_1.BigNumber.from(1),
        }, params.maxFeePerGas), parentProvider);
        const setGatewayEstimates2 = await gEstimator.populateFunctionParams((params) => encodeFuncData({
            gasLimit: setTokenEstimates2.estimates.gasLimit,
            maxSubmissionCost: setTokenEstimates2.estimates.maxSubmissionCost,
        }, {
            gasLimit: params.gasLimit,
            maxSubmissionCost: params.maxSubmissionCost,
        }, params.maxFeePerGas), parentProvider);
        const registerTx = await parentSigner.sendTransaction({
            to: parentToken.address,
            data: setGatewayEstimates2.data,
            value: setGatewayEstimates2.value,
        });
        return ParentTransaction_1.ParentTransactionReceipt.monkeyPatchWait(registerTx);
    }
    /**
     * Get all the gateway set events on the Parent gateway router
     * @param parentProvider The provider for the parent network
     * @param filter An object containing fromBlock and toBlock to filter events
     * @returns An array of GatewaySetEvent event arguments
     */
    async getParentGatewaySetEvents(parentProvider, filter) {
        await this.checkParentNetwork(parentProvider);
        const parentGatewayRouterAddress = this.childNetwork.tokenBridge.parentGatewayRouter;
        const eventFetcher = new eventFetcher_1.EventFetcher(parentProvider);
        return (await eventFetcher.getEvents(L1GatewayRouter__factory_1.L1GatewayRouter__factory, t => t.filters.GatewaySet(), Object.assign(Object.assign({}, filter), { address: parentGatewayRouterAddress }))).map(a => a.event);
    }
    /**
     * Get all the gateway set events on the child gateway router
     * @param childProvider The provider for the child network
     * @param filter An object containing fromBlock and toBlock to filter events
     * @param customNetworkChildGatewayRouter Optional address of the custom network child gateway router
     * @returns An array of GatewaySetEvent event arguments
     * @throws {ArbSdkError} If the network is custom and customNetworkChildGatewayRouter is not provided
     */
    async getChildGatewaySetEvents(childProvider, filter, customNetworkChildGatewayRouter) {
        if (this.childNetwork.isCustom && !customNetworkChildGatewayRouter) {
            throw new errors_1.ArbSdkError('Must supply customNetworkChildGatewayRouter for custom network ');
        }
        await this.checkChildNetwork(childProvider);
        const childGatewayRouterAddress = customNetworkChildGatewayRouter ||
            this.childNetwork.tokenBridge.childGatewayRouter;
        const eventFetcher = new eventFetcher_1.EventFetcher(childProvider);
        return (await eventFetcher.getEvents(L2GatewayRouter__factory_1.L2GatewayRouter__factory, t => t.filters.GatewaySet(), Object.assign(Object.assign({}, filter), { address: childGatewayRouterAddress }))).map(a => a.event);
    }
    /**
     * Register the provided token addresses against the provided gateways
     * @param parentSigner
     * @param childProvider
     * @param tokenGateways
     * @returns
     */
    async setGateways(parentSigner, childProvider, tokenGateways, options) {
        if (!signerOrProvider_1.SignerProviderUtils.signerHasProvider(parentSigner)) {
            throw new errors_1.MissingProviderArbSdkError('parentSigner');
        }
        await this.checkParentNetwork(parentSigner);
        await this.checkChildNetwork(childProvider);
        const from = await parentSigner.getAddress();
        const parentGatewayRouter = L1GatewayRouter__factory_1.L1GatewayRouter__factory.connect(this.childNetwork.tokenBridge.parentGatewayRouter, parentSigner);
        const setGatewaysFunc = (params) => {
            return {
                data: parentGatewayRouter.interface.encodeFunctionData('setGateways', [
                    tokenGateways.map(tG => tG.tokenAddr),
                    tokenGateways.map(tG => tG.gatewayAddr),
                    params.gasLimit,
                    params.maxFeePerGas,
                    params.maxSubmissionCost,
                ]),
                from,
                value: params.gasLimit
                    .mul(params.maxFeePerGas)
                    .add(params.maxSubmissionCost),
                to: parentGatewayRouter.address,
            };
        };
        const gEstimator = new ParentToChildMessageGasEstimator_1.ParentToChildMessageGasEstimator(childProvider);
        const estimates = await gEstimator.populateFunctionParams(setGatewaysFunc, parentSigner.provider, options);
        const res = await parentSigner.sendTransaction({
            to: estimates.to,
            data: estimates.data,
            value: estimates.estimates.deposit,
        });
        return ParentTransaction_1.ParentTransactionReceipt.monkeyPatchContractCallWait(res);
    }
}
exports.AdminErc20Bridger = AdminErc20Bridger;
