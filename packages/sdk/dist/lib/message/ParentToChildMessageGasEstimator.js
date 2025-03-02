"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentToChildMessageGasEstimator = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const ethers_1 = require("ethers");
const Inbox__factory_1 = require("../abi/factories/Inbox__factory");
const NodeInterface__factory_1 = require("../abi/factories/NodeInterface__factory");
const constants_1 = require("../dataEntities/constants");
const errors_1 = require("../dataEntities/errors");
const networks_1 = require("../dataEntities/networks");
const retryableData_1 = require("../dataEntities/retryableData");
const lib_1 = require("../utils/lib");
/**
 * The default amount to increase the maximum submission cost. Submission cost is calculated
 * from (call data size * some const * parent chain base fee). So we need to provide some leeway for
 * base fee increase. Since submission fee is a small amount it isn't too bas for UX to increase
 * it by a large amount, and provide better safety.
 */
const DEFAULT_SUBMISSION_FEE_PERCENT_INCREASE = bignumber_1.BigNumber.from(300);
/**
 * When submitting a retryable we need to estimate what the gas price for it will be when we actually come
 * to execute it. Since the l2 price can move due to congestion we should provide some padding here
 */
const DEFAULT_GAS_PRICE_PERCENT_INCREASE = bignumber_1.BigNumber.from(500);
const defaultParentToChildMessageEstimateOptions = {
    maxSubmissionFeePercentIncrease: DEFAULT_SUBMISSION_FEE_PERCENT_INCREASE,
    // gas limit for Parent->Child messages should be predictable. If it isn't due to the nature
    // of the specific transaction, then the caller should provide a 'min' override
    gasLimitPercentIncrease: ethers_1.constants.Zero,
    maxFeePerGasPercentIncrease: DEFAULT_GAS_PRICE_PERCENT_INCREASE,
};
class ParentToChildMessageGasEstimator {
    constructor(childProvider) {
        this.childProvider = childProvider;
    }
    percentIncrease(num, increase) {
        return num.add(num.mul(increase).div(100));
    }
    applySubmissionPriceDefaults(maxSubmissionFeeOptions) {
        return {
            base: maxSubmissionFeeOptions === null || maxSubmissionFeeOptions === void 0 ? void 0 : maxSubmissionFeeOptions.base,
            percentIncrease: (maxSubmissionFeeOptions === null || maxSubmissionFeeOptions === void 0 ? void 0 : maxSubmissionFeeOptions.percentIncrease) ||
                defaultParentToChildMessageEstimateOptions.maxSubmissionFeePercentIncrease,
        };
    }
    applyMaxFeePerGasDefaults(maxFeePerGasOptions) {
        return {
            base: maxFeePerGasOptions === null || maxFeePerGasOptions === void 0 ? void 0 : maxFeePerGasOptions.base,
            percentIncrease: (maxFeePerGasOptions === null || maxFeePerGasOptions === void 0 ? void 0 : maxFeePerGasOptions.percentIncrease) ||
                defaultParentToChildMessageEstimateOptions.maxFeePerGasPercentIncrease,
        };
    }
    applyGasLimitDefaults(gasLimitDefaults) {
        return {
            base: gasLimitDefaults === null || gasLimitDefaults === void 0 ? void 0 : gasLimitDefaults.base,
            percentIncrease: (gasLimitDefaults === null || gasLimitDefaults === void 0 ? void 0 : gasLimitDefaults.percentIncrease) ||
                defaultParentToChildMessageEstimateOptions.gasLimitPercentIncrease,
            min: (gasLimitDefaults === null || gasLimitDefaults === void 0 ? void 0 : gasLimitDefaults.min) || ethers_1.constants.Zero,
        };
    }
    /**
     * Return the fee, in wei, of submitting a new retryable tx with a given calldata size.
     * @param parentProvider
     * @param parentBaseFee
     * @param callDataSize
     * @param options
     * @returns
     */
    async estimateSubmissionFee(parentProvider, parentBaseFee, callDataSize, options) {
        const defaultedOptions = this.applySubmissionPriceDefaults(options);
        const network = await (0, networks_1.getArbitrumNetwork)(this.childProvider);
        const inbox = Inbox__factory_1.Inbox__factory.connect(network.ethBridge.inbox, parentProvider);
        return this.percentIncrease(defaultedOptions.base ||
            (await inbox.calculateRetryableSubmissionFee(callDataSize, parentBaseFee)), defaultedOptions.percentIncrease);
    }
    /**
     * Estimate the amount of child chain gas required for putting the transaction in the L2 inbox, and executing it.
     * @param retryableData object containing retryable ticket data
     * @param senderDeposit we dont know how much gas the transaction will use when executing
     * so by default we supply a dummy amount of call value that will definately be more than we need
     * @returns
     */
    async estimateRetryableTicketGasLimit({ from, to, l2CallValue: l2CallValue, excessFeeRefundAddress, callValueRefundAddress, data, }, senderDeposit = ethers_1.utils.parseEther('1').add(l2CallValue)) {
        const nodeInterface = NodeInterface__factory_1.NodeInterface__factory.connect(constants_1.NODE_INTERFACE_ADDRESS, this.childProvider);
        return await nodeInterface.estimateGas.estimateRetryableTicket(from, senderDeposit, to, l2CallValue, excessFeeRefundAddress, callValueRefundAddress, data);
    }
    /**
     * Provides an estimate for the child chain maxFeePerGas, adding some margin to allow for gas price variation
     * @param options
     * @returns
     */
    async estimateMaxFeePerGas(options) {
        const maxFeePerGasDefaults = this.applyMaxFeePerGasDefaults(options);
        // estimate the child gas price
        return this.percentIncrease(maxFeePerGasDefaults.base || (await this.childProvider.getGasPrice()), maxFeePerGasDefaults.percentIncrease);
    }
    /**
     * Checks if the estimate is valid when compared with a new one
     * @param estimates Original estimate
     * @param reEstimates Estimate to compare against
     * @returns
     */
    static async isValid(estimates, reEstimates) {
        // L2 base fee and minimum submission cost which affect the success of the tx
        return (estimates.maxFeePerGas.gte(reEstimates.maxFeePerGas) &&
            estimates.maxSubmissionCost.gte(reEstimates.maxSubmissionCost));
    }
    /**
     * Get gas limit, gas price and submission price estimates for sending a Parent->Child message
     * @param retryableData Data of retryable ticket transaction
     * @param parentBaseFee Current parent chain base fee
     * @param parentProvider
     * @param options
     * @returns
     */
    async estimateAll(retryableEstimateData, parentBaseFee, parentProvider, options) {
        var _a, _b;
        const { data } = retryableEstimateData;
        const gasLimitDefaults = this.applyGasLimitDefaults(options === null || options === void 0 ? void 0 : options.gasLimit);
        const childNetwork = await (0, networks_1.getArbitrumNetwork)(this.childProvider);
        const decimals = await (0, lib_1.getNativeTokenDecimals)({
            parentProvider,
            childNetwork,
        });
        // estimate the child gas price
        const maxFeePerGasPromise = this.estimateMaxFeePerGas(options === null || options === void 0 ? void 0 : options.maxFeePerGas);
        // estimate the submission fee
        const maxSubmissionFeePromise = this.estimateSubmissionFee(parentProvider, parentBaseFee, ethers_1.utils.hexDataLength(data), options === null || options === void 0 ? void 0 : options.maxSubmissionFee);
        // estimate the gas limit
        const calculatedGasLimit = this.percentIncrease(gasLimitDefaults.base ||
            (await this.estimateRetryableTicketGasLimit(retryableEstimateData, (_a = options === null || options === void 0 ? void 0 : options.deposit) === null || _a === void 0 ? void 0 : _a.base)), gasLimitDefaults.percentIncrease);
        const [maxFeePerGas, maxSubmissionFee] = await Promise.all([
            maxFeePerGasPromise,
            maxSubmissionFeePromise,
        ]);
        // always ensure the max gas is greater than the min - this can be useful if we know that
        // gas estimation is bad for the provided transaction
        const gasLimit = calculatedGasLimit.gt(gasLimitDefaults.min)
            ? calculatedGasLimit
            : gasLimitDefaults.min;
        const deposit = ((_b = options === null || options === void 0 ? void 0 : options.deposit) === null || _b === void 0 ? void 0 : _b.base) ||
            (0, lib_1.scaleFrom18DecimalsToNativeTokenDecimals)({
                amount: gasLimit
                    .mul(maxFeePerGas)
                    .add(maxSubmissionFee)
                    .add(retryableEstimateData.l2CallValue),
                decimals,
            });
        return {
            gasLimit,
            maxSubmissionCost: maxSubmissionFee,
            maxFeePerGas,
            deposit,
        };
    }
    /**
     * Transactions that make a Parent->Child message need to estimate L2 gas parameters
     * This function does that, and populates those parameters into a transaction request
     * @param dataFunc
     * @param parentProvider
     * @param gasOverrides
     * @returns
     */
    async populateFunctionParams(
    /**
     * Function that will internally make a Parent->Child transaction
     * Will initially be called with dummy values to trigger a special revert containing
     * the real params. Then called again with the real params to form the final data to be submitted
     */
    dataFunc, 
    // ) => ParentToChildTransactionRequest['txRequest'],
    parentProvider, gasOverrides) {
        // get function data that should trigger a retryable data error
        const { data: nullData, to, value, from, } = dataFunc({
            gasLimit: retryableData_1.RetryableDataTools.ErrorTriggeringParams.gasLimit,
            maxFeePerGas: retryableData_1.RetryableDataTools.ErrorTriggeringParams.maxFeePerGas,
            maxSubmissionCost: bignumber_1.BigNumber.from(1),
        });
        let retryable;
        try {
            // get retryable data from the null call
            const res = await parentProvider.call({
                to: to,
                data: nullData,
                value: value,
                from: from,
            });
            retryable = retryableData_1.RetryableDataTools.tryParseError(res);
            if (!(0, lib_1.isDefined)(retryable)) {
                throw new errors_1.ArbSdkError(`No retryable data found in error: ${res}`);
            }
        }
        catch (err) {
            // ethersjs currently doesnt throw for custom solidity errors, so we shouldn't end up here
            // however we try to catch and parse the error anyway in case ethersjs changes
            // behaviour and we dont pick up on it
            retryable = retryableData_1.RetryableDataTools.tryParseError(err);
            if (!(0, lib_1.isDefined)(retryable)) {
                throw new errors_1.ArbSdkError('No retryable data found in error', err);
            }
        }
        // use retryable data to get gas estimates
        const baseFee = await (0, lib_1.getBaseFee)(parentProvider);
        const estimates = await this.estimateAll({
            from: retryable.from,
            to: retryable.to,
            data: retryable.data,
            l2CallValue: retryable.l2CallValue,
            excessFeeRefundAddress: retryable.excessFeeRefundAddress,
            callValueRefundAddress: retryable.callValueRefundAddress,
        }, baseFee, parentProvider, gasOverrides);
        // form the real data for the transaction
        const { data: realData, to: realTo, value: realValue, innerData, } = dataFunc({
            gasLimit: estimates.gasLimit,
            maxFeePerGas: estimates.maxFeePerGas,
            maxSubmissionCost: estimates.maxSubmissionCost,
        });
        console.log('%c innerData', 'color: #00A0E9; font-size: 26px; font-weight: blod;', innerData);
        return {
            estimates,
            innerData,
            retryable,
            data: realData,
            to: realTo,
            value: realValue,
        };
    }
}
exports.ParentToChildMessageGasEstimator = ParentToChildMessageGasEstimator;
