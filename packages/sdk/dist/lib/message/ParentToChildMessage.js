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
exports.EthDepositMessage = exports.ParentToChildMessageWriter = exports.ParentToChildMessageReaderClassic = exports.ParentToChildMessageReader = exports.ParentToChildMessage = exports.EthDepositMessageStatus = exports.ParentToChildMessageStatus = void 0;
const bignumber_1 = require("@ethersproject/bignumber");
const bytes_1 = require("@ethersproject/bytes");
const address_1 = require("@ethersproject/address");
const keccak256_1 = require("@ethersproject/keccak256");
const ArbRetryableTx__factory_1 = require("../abi/factories/ArbRetryableTx__factory");
const constants_1 = require("../dataEntities/constants");
const signerOrProvider_1 = require("../dataEntities/signerOrProvider");
const errors_1 = require("../dataEntities/errors");
const ethers_1 = require("ethers");
const ChildTransaction_1 = require("./ChildTransaction");
const lib_1 = require("../utils/lib");
const eventFetcher_1 = require("../utils/eventFetcher");
const logger_1 = require("@ethersproject/logger");
const networks_1 = require("../dataEntities/networks");
var ParentToChildMessageStatus;
(function (ParentToChildMessageStatus) {
    /**
     * The retryable ticket has yet to be created
     */
    ParentToChildMessageStatus[ParentToChildMessageStatus["NOT_YET_CREATED"] = 1] = "NOT_YET_CREATED";
    /**
     * An attempt was made to create the retryable ticket, but it failed.
     * This could be due to not enough submission cost being paid by the Parent transaction
     */
    ParentToChildMessageStatus[ParentToChildMessageStatus["CREATION_FAILED"] = 2] = "CREATION_FAILED";
    /**
     * The retryable ticket has been created but has not been redeemed. This could be due to the
     * auto redeem failing, or if the params (max chain gas price) * (max chain gas) = 0 then no auto
     * redeem tx is ever issued. An auto redeem is also never issued for ETH deposits.
     * A manual redeem is now required.
     */
    ParentToChildMessageStatus[ParentToChildMessageStatus["FUNDS_DEPOSITED_ON_CHILD"] = 3] = "FUNDS_DEPOSITED_ON_CHILD";
    /**
     * The retryable ticket has been redeemed (either by auto, or manually) and the
     * chain transaction has been executed
     */
    ParentToChildMessageStatus[ParentToChildMessageStatus["REDEEMED"] = 4] = "REDEEMED";
    /**
     * The message has either expired or has been canceled. It can no longer be redeemed.
     */
    ParentToChildMessageStatus[ParentToChildMessageStatus["EXPIRED"] = 5] = "EXPIRED";
})(ParentToChildMessageStatus || (exports.ParentToChildMessageStatus = ParentToChildMessageStatus = {}));
var EthDepositMessageStatus;
(function (EthDepositMessageStatus) {
    /**
     * ETH is not deposited on Chain yet
     */
    EthDepositMessageStatus[EthDepositMessageStatus["PENDING"] = 1] = "PENDING";
    /**
     * ETH is deposited successfully on Chain
     */
    EthDepositMessageStatus[EthDepositMessageStatus["DEPOSITED"] = 2] = "DEPOSITED";
})(EthDepositMessageStatus || (exports.EthDepositMessageStatus = EthDepositMessageStatus = {}));
class ParentToChildMessage {
    /**
     * The submit retryable transactions use the typed transaction envelope 2718.
     * The id of these transactions is the hash of the RLP encoded transaction.
     * @param childChainId
     * @param fromAddress the aliased address that called the Parent inbox as emitted in the bridge event.
     * @param messageNumber
     * @param parentBaseFee
     * @param destAddress
     * @param childCallValue
     * @param parentCallValue
     * @param maxSubmissionFee
     * @param excessFeeRefundAddress refund address specified in the retryable creation. Note the Parent inbox aliases this address if it is a Parent smart contract. The user is expected to provide this value already aliased when needed.
     * @param callValueRefundAddress refund address specified in the retryable creation. Note the Parent inbox aliases this address if it is a Parent smart contract. The user is expected to provide this value already aliased when needed.
     * @param gasLimit
     * @param maxFeePerGas
     * @param data
     * @returns
     */
    static calculateSubmitRetryableId(childChainId, fromAddress, messageNumber, parentBaseFee, destAddress, childCallValue, parentCallValue, maxSubmissionFee, excessFeeRefundAddress, callValueRefundAddress, gasLimit, maxFeePerGas, data) {
        const formatNumber = (value) => {
            return ethers_1.ethers.utils.stripZeros(value.toHexString());
        };
        const chainId = bignumber_1.BigNumber.from(childChainId);
        const msgNum = bignumber_1.BigNumber.from(messageNumber);
        const fields = [
            formatNumber(chainId),
            (0, bytes_1.zeroPad)(formatNumber(msgNum), 32),
            fromAddress,
            formatNumber(parentBaseFee),
            formatNumber(parentCallValue),
            formatNumber(maxFeePerGas),
            formatNumber(gasLimit),
            // when destAddress is 0x0, arbos treat that as nil
            destAddress === ethers_1.ethers.constants.AddressZero ? '0x' : destAddress,
            formatNumber(childCallValue),
            callValueRefundAddress,
            formatNumber(maxSubmissionFee),
            excessFeeRefundAddress,
            data,
        ];
        // arbitrum submit retry transactions have type 0x69
        const rlpEnc = ethers_1.ethers.utils.hexConcat([
            '0x69',
            ethers_1.ethers.utils.RLP.encode(fields),
        ]);
        return ethers_1.ethers.utils.keccak256(rlpEnc);
    }
    static fromEventComponents(chainSignerOrProvider, chainId, sender, messageNumber, parentBaseFee, messageData) {
        return signerOrProvider_1.SignerProviderUtils.isSigner(chainSignerOrProvider)
            ? new ParentToChildMessageWriter(chainSignerOrProvider, chainId, sender, messageNumber, parentBaseFee, messageData)
            : new ParentToChildMessageReader(chainSignerOrProvider, chainId, sender, messageNumber, parentBaseFee, messageData);
    }
    constructor(chainId, sender, messageNumber, parentBaseFee, messageData) {
        this.chainId = chainId;
        this.sender = sender;
        this.messageNumber = messageNumber;
        this.parentBaseFee = parentBaseFee;
        this.messageData = messageData;
        this.retryableCreationId = ParentToChildMessage.calculateSubmitRetryableId(chainId, sender, messageNumber, parentBaseFee, messageData.destAddress, messageData.l2CallValue, messageData.l1Value, messageData.maxSubmissionFee, messageData.excessFeeRefundAddress, messageData.callValueRefundAddress, messageData.gasLimit, messageData.maxFeePerGas, messageData.data);
    }
}
exports.ParentToChildMessage = ParentToChildMessage;
class ParentToChildMessageReader extends ParentToChildMessage {
    constructor(childProvider, chainId, sender, messageNumber, parentBaseFee, messageData) {
        super(chainId, sender, messageNumber, parentBaseFee, messageData);
        this.childProvider = childProvider;
    }
    /**
     * Try to get the receipt for the retryable ticket creation.
     * This is the Chain transaction that creates the retryable ticket.
     * If confirmations or timeout is provided, this will wait for the ticket to be created
     * @returns Null if retryable has not been created
     */
    async getRetryableCreationReceipt(confirmations, timeout) {
        if (!this.retryableCreationReceipt) {
            this.retryableCreationReceipt = await (0, lib_1.getTransactionReceipt)(this.childProvider, this.retryableCreationId, confirmations, timeout);
        }
        return this.retryableCreationReceipt || null;
    }
    /**
     * When retryable tickets are created, and gas is supplied to it, an attempt is
     * made to redeem the ticket straight away. This is called an auto redeem.
     * @returns TransactionReceipt of the auto redeem attempt if exists, otherwise null
     */
    async getAutoRedeemAttempt() {
        const creationReceipt = await this.getRetryableCreationReceipt();
        if (creationReceipt) {
            const chainReceipt = new ChildTransaction_1.ChildTransactionReceipt(creationReceipt);
            const redeemEvents = chainReceipt.getRedeemScheduledEvents();
            if (redeemEvents.length === 1) {
                return await this.childProvider.getTransactionReceipt(redeemEvents[0].retryTxHash);
            }
            else if (redeemEvents.length > 1) {
                throw new errors_1.ArbSdkError(`Unexpected number of redeem events for retryable creation tx. ${creationReceipt} ${redeemEvents}`);
            }
        }
        return null;
    }
    /**
     * Receipt for the successful chain transaction created by this message.
     * @returns TransactionReceipt of the first successful redeem if exists, otherwise the current status of the message.
     */
    async getSuccessfulRedeem() {
        var _a;
        const chainNetwork = await (0, networks_1.getArbitrumNetwork)(this.childProvider);
        const eventFetcher = new eventFetcher_1.EventFetcher(this.childProvider);
        const creationReceipt = await this.getRetryableCreationReceipt();
        if (!(0, lib_1.isDefined)(creationReceipt)) {
            // retryable was never created, or not created yet
            // therefore it cant have been redeemed or be expired
            return { status: ParentToChildMessageStatus.NOT_YET_CREATED };
        }
        if (creationReceipt.status === 0) {
            return { status: ParentToChildMessageStatus.CREATION_FAILED };
        }
        // check the auto redeem first to avoid doing costly log queries in the happy case
        const autoRedeem = await this.getAutoRedeemAttempt();
        if (autoRedeem && autoRedeem.status === 1) {
            return {
                childTxReceipt: autoRedeem,
                status: ParentToChildMessageStatus.REDEEMED,
            };
        }
        if (await this.retryableExists()) {
            // the retryable was created and still exists
            // therefore it cant have been redeemed or be expired
            return {
                status: ParentToChildMessageStatus.FUNDS_DEPOSITED_ON_CHILD,
            };
        }
        // from this point on we know that the retryable was created but does not exist,
        // so the retryable was either successfully redeemed, or it expired
        // the auto redeem didnt exist or wasnt successful, look for a later manual redeem
        // to do this we need to filter through the whole lifetime of the ticket looking
        // for relevant redeem scheduled events
        let increment = 1000;
        let fromBlock = await this.childProvider.getBlock(creationReceipt.blockNumber);
        let timeout = fromBlock.timestamp +
            ((_a = chainNetwork.retryableLifetimeSeconds) !== null && _a !== void 0 ? _a : constants_1.SEVEN_DAYS_IN_SECONDS);
        const queriedRange = [];
        const maxBlock = await this.childProvider.getBlockNumber();
        while (fromBlock.number < maxBlock) {
            const toBlockNumber = Math.min(fromBlock.number + increment, maxBlock);
            // using fromBlock.number would lead to 1 block overlap
            // not fixing it here to keep the code simple
            const outerBlockRange = { from: fromBlock.number, to: toBlockNumber };
            queriedRange.push(outerBlockRange);
            const redeemEvents = await eventFetcher.getEvents(ArbRetryableTx__factory_1.ArbRetryableTx__factory, contract => contract.filters.RedeemScheduled(this.retryableCreationId), {
                fromBlock: outerBlockRange.from,
                toBlock: outerBlockRange.to,
                address: constants_1.ARB_RETRYABLE_TX_ADDRESS,
            });
            const successfulRedeem = (await Promise.all(redeemEvents.map(e => this.childProvider.getTransactionReceipt(e.event.retryTxHash)))).filter(r => (0, lib_1.isDefined)(r) && r.status === 1);
            if (successfulRedeem.length > 1)
                throw new errors_1.ArbSdkError(`Unexpected number of successful redeems. Expected only one redeem for ticket ${this.retryableCreationId}, but found ${successfulRedeem.length}.`);
            if (successfulRedeem.length == 1)
                return {
                    childTxReceipt: successfulRedeem[0],
                    status: ParentToChildMessageStatus.REDEEMED,
                };
            const toBlock = await this.childProvider.getBlock(toBlockNumber);
            if (toBlock.timestamp > timeout) {
                // Check for LifetimeExtended event
                while (queriedRange.length > 0) {
                    const blockRange = queriedRange.shift();
                    const keepaliveEvents = await eventFetcher.getEvents(ArbRetryableTx__factory_1.ArbRetryableTx__factory, contract => contract.filters.LifetimeExtended(this.retryableCreationId), {
                        fromBlock: blockRange.from,
                        toBlock: blockRange.to,
                        address: constants_1.ARB_RETRYABLE_TX_ADDRESS,
                    });
                    if (keepaliveEvents.length > 0) {
                        timeout = keepaliveEvents
                            .map(e => e.event.newTimeout.toNumber())
                            .sort()
                            .reverse()[0];
                        break;
                    }
                }
                // the retryable no longer exists, but we've searched beyond the timeout
                // so it must have expired
                if (toBlock.timestamp > timeout)
                    break;
                // It is possible to have another keepalive in the last range as it might include block after previous timeout
                while (queriedRange.length > 1)
                    queriedRange.shift();
            }
            const processedSeconds = toBlock.timestamp - fromBlock.timestamp;
            if (processedSeconds != 0) {
                // find the increment that cover ~ 1 day
                increment = Math.ceil((increment * 86400) / processedSeconds);
            }
            fromBlock = toBlock;
        }
        // we know from earlier that the retryable no longer exists, so if we havent found the redemption
        // we know that it must have expired
        return { status: ParentToChildMessageStatus.EXPIRED };
    }
    /**
     * Has this message expired. Once expired the retryable ticket can no longer be redeemed.
     * @deprecated Will be removed in v3.0.0
     * @returns
     */
    async isExpired() {
        return await this.retryableExists();
    }
    async retryableExists() {
        const currentTimestamp = bignumber_1.BigNumber.from((await this.childProvider.getBlock('latest')).timestamp);
        try {
            const timeoutTimestamp = await this.getTimeout();
            // timeoutTimestamp returns the timestamp at which the retryable ticket expires
            // it can also return revert if the ticket chainTx does not exist
            return currentTimestamp.lte(timeoutTimestamp);
        }
        catch (err) {
            if (err instanceof Error &&
                err.code ===
                    logger_1.Logger.errors.CALL_EXCEPTION &&
                err.errorName === 'NoTicketWithID') {
                return false;
            }
            throw err;
        }
    }
    async status() {
        return (await this.getSuccessfulRedeem()).status;
    }
    /**
     * Wait for the retryable ticket to be created, for it to be redeemed, and for the chainTx to be executed.
     * Note: The terminal status of a transaction that only does an eth deposit is FUNDS_DEPOSITED_ON_CHILD as
     * no Chain transaction needs to be executed, however the terminal state of any other transaction is REDEEMED
     * which represents that the retryable ticket has been redeemed and the Chain tx has been executed.
     * @param confirmations Amount of confirmations the retryable ticket and the auto redeem receipt should have
     * @param timeout Amount of time to wait for the retryable ticket to be created
     * Defaults to 15 minutes, as by this time all transactions are expected to be included on Chain. Throws on timeout.
     * @returns The wait result contains a status, and optionally the chainTxReceipt.
     * If the status is "REDEEMED" then a chainTxReceipt is also available on the result.
     * If the status has any other value then chainTxReceipt is not populated.
     */
    async waitForStatus(confirmations, timeout) {
        const chosenTimeout = (0, lib_1.isDefined)(timeout) ? timeout : constants_1.DEFAULT_DEPOSIT_TIMEOUT;
        // try to wait for the retryable ticket to be created
        const _retryableCreationReceipt = await this.getRetryableCreationReceipt(confirmations, chosenTimeout);
        if (!_retryableCreationReceipt) {
            if (confirmations || chosenTimeout) {
                throw new errors_1.ArbSdkError(`Timed out waiting to retrieve retryable creation receipt: ${this.retryableCreationId}.`);
            }
            else {
                throw new errors_1.ArbSdkError(`Retryable creation receipt not found ${this.retryableCreationId}.`);
            }
        }
        return await this.getSuccessfulRedeem();
    }
    /**
     * The minimium lifetime of a retryable tx
     * @returns
     */
    static async getLifetime(childProvider) {
        const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, childProvider);
        return await arbRetryableTx.getLifetime();
    }
    /**
     * Timestamp at which this message expires
     * @returns
     */
    async getTimeout() {
        const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, this.childProvider);
        return await arbRetryableTx.getTimeout(this.retryableCreationId);
    }
    /**
     * Address to which CallValue will be credited to on Chain if the retryable ticket times out or is cancelled.
     * The Beneficiary is also the address with the right to cancel a Retryable Ticket (if the ticket hasn’t been redeemed yet).
     * @returns
     */
    getBeneficiary() {
        const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, this.childProvider);
        return arbRetryableTx.getBeneficiary(this.retryableCreationId);
    }
}
exports.ParentToChildMessageReader = ParentToChildMessageReader;
class ParentToChildMessageReaderClassic {
    constructor(childProvider, chainId, messageNumber) {
        const bitFlip = (num) => num.or(bignumber_1.BigNumber.from(1).shl(255));
        this.messageNumber = messageNumber;
        this.childProvider = childProvider;
        this.retryableCreationId = (0, keccak256_1.keccak256)((0, bytes_1.concat)([
            (0, bytes_1.zeroPad)(bignumber_1.BigNumber.from(chainId).toHexString(), 32),
            (0, bytes_1.zeroPad)(bitFlip(this.messageNumber).toHexString(), 32),
        ]));
        this.autoRedeemId = (0, keccak256_1.keccak256)((0, bytes_1.concat)([
            (0, bytes_1.zeroPad)(this.retryableCreationId, 32),
            (0, bytes_1.zeroPad)(bignumber_1.BigNumber.from(1).toHexString(), 32),
        ]));
        this.childTxHash = (0, keccak256_1.keccak256)((0, bytes_1.concat)([
            (0, bytes_1.zeroPad)(this.retryableCreationId, 32),
            (0, bytes_1.zeroPad)(bignumber_1.BigNumber.from(0).toHexString(), 32),
        ]));
    }
    calculateChainDerivedHash(retryableCreationId) {
        return (0, keccak256_1.keccak256)((0, bytes_1.concat)([
            (0, bytes_1.zeroPad)(retryableCreationId, 32),
            // BN 0 meaning Chain TX
            (0, bytes_1.zeroPad)(bignumber_1.BigNumber.from(0).toHexString(), 32),
        ]));
    }
    /**
     * Try to get the receipt for the retryable ticket creation.
     * This is the Chain transaction that creates the retryable ticket.
     * If confirmations or timeout is provided, this will wait for the ticket to be created
     * @returns Null if retryable has not been created
     */
    async getRetryableCreationReceipt(confirmations, timeout) {
        if (!this.retryableCreationReceipt) {
            this.retryableCreationReceipt = await (0, lib_1.getTransactionReceipt)(this.childProvider, this.retryableCreationId, confirmations, timeout);
        }
        return this.retryableCreationReceipt || null;
    }
    async status() {
        const creationReceipt = await this.getRetryableCreationReceipt();
        if (!(0, lib_1.isDefined)(creationReceipt)) {
            return ParentToChildMessageStatus.NOT_YET_CREATED;
        }
        if (creationReceipt.status === 0) {
            return ParentToChildMessageStatus.CREATION_FAILED;
        }
        const chainDerivedHash = this.calculateChainDerivedHash(this.retryableCreationId);
        const chainTxReceipt = await this.childProvider.getTransactionReceipt(chainDerivedHash);
        if (chainTxReceipt && chainTxReceipt.status === 1) {
            return ParentToChildMessageStatus.REDEEMED;
        }
        return ParentToChildMessageStatus.EXPIRED;
    }
}
exports.ParentToChildMessageReaderClassic = ParentToChildMessageReaderClassic;
class ParentToChildMessageWriter extends ParentToChildMessageReader {
    constructor(chainSigner, chainId, sender, messageNumber, parentBaseFee, messageData) {
        super(chainSigner.provider, chainId, sender, messageNumber, parentBaseFee, messageData);
        this.chainSigner = chainSigner;
        if (!chainSigner.provider)
            throw new errors_1.ArbSdkError('Signer not connected to provider.');
    }
    /**
     * Manually redeem the retryable ticket.
     * Throws if message status is not ParentToChildMessageStatus.FUNDS_DEPOSITED_ON_CHILD
     */
    async redeem(overrides) {
        const status = await this.status();
        if (status === ParentToChildMessageStatus.FUNDS_DEPOSITED_ON_CHILD) {
            const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, this.chainSigner);
            const redeemTx = await arbRetryableTx.redeem(this.retryableCreationId, Object.assign({}, overrides));
            return ChildTransaction_1.ChildTransactionReceipt.toRedeemTransaction(ChildTransaction_1.ChildTransactionReceipt.monkeyPatchWait(redeemTx), this.childProvider);
        }
        else {
            throw new errors_1.ArbSdkError(`Cannot redeem as retryable does not exist. Message status: ${ParentToChildMessageStatus[status]} must be: ${ParentToChildMessageStatus[ParentToChildMessageStatus.FUNDS_DEPOSITED_ON_CHILD]}.`);
        }
    }
    /**
     * Cancel the retryable ticket.
     * Throws if message status is not ParentToChildMessageStatus.FUNDS_DEPOSITED_ON_CHILD
     */
    async cancel(overrides) {
        const status = await this.status();
        if (status === ParentToChildMessageStatus.FUNDS_DEPOSITED_ON_CHILD) {
            const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, this.chainSigner);
            return await arbRetryableTx.cancel(this.retryableCreationId, overrides);
        }
        else {
            throw new errors_1.ArbSdkError(`Cannot cancel as retryable does not exist. Message status: ${ParentToChildMessageStatus[status]} must be: ${ParentToChildMessageStatus[ParentToChildMessageStatus.FUNDS_DEPOSITED_ON_CHILD]}.`);
        }
    }
    /**
     * Increase the timeout of a retryable ticket.
     * Throws if message status is not ParentToChildMessageStatus.FUNDS_DEPOSITED_ON_CHILD
     */
    async keepAlive(overrides) {
        const status = await this.status();
        if (status === ParentToChildMessageStatus.FUNDS_DEPOSITED_ON_CHILD) {
            const arbRetryableTx = ArbRetryableTx__factory_1.ArbRetryableTx__factory.connect(constants_1.ARB_RETRYABLE_TX_ADDRESS, this.chainSigner);
            return await arbRetryableTx.keepalive(this.retryableCreationId, overrides);
        }
        else {
            throw new errors_1.ArbSdkError(`Cannot keep alive as retryable does not exist. Message status: ${ParentToChildMessageStatus[status]} must be: ${ParentToChildMessageStatus[ParentToChildMessageStatus.FUNDS_DEPOSITED_ON_CHILD]}.`);
        }
    }
}
exports.ParentToChildMessageWriter = ParentToChildMessageWriter;
/**
 * A message for Eth deposits from Parent to Child
 */
class EthDepositMessage {
    static calculateDepositTxId(childChainId, messageNumber, fromAddress, toAddress, value) {
        const formatNumber = (numberVal) => {
            return ethers_1.ethers.utils.stripZeros(numberVal.toHexString());
        };
        const chainId = bignumber_1.BigNumber.from(childChainId);
        const msgNum = bignumber_1.BigNumber.from(messageNumber);
        // https://github.com/OffchainLabs/go-ethereum/blob/07e017aa73e32be92aadb52fa327c552e1b7b118/core/types/arb_types.go#L302-L308
        const fields = [
            formatNumber(chainId),
            (0, bytes_1.zeroPad)(formatNumber(msgNum), 32),
            (0, address_1.getAddress)(fromAddress),
            (0, address_1.getAddress)(toAddress),
            formatNumber(value),
        ];
        // arbitrum eth deposit transactions have type 0x64
        const rlpEnc = ethers_1.ethers.utils.hexConcat([
            '0x64',
            ethers_1.ethers.utils.RLP.encode(fields),
        ]);
        return ethers_1.ethers.utils.keccak256(rlpEnc);
    }
    /**
     * Parse the data field in
     * event InboxMessageDelivered(uint256 indexed messageNum, bytes data);
     * @param eventData
     * @returns destination and amount
     */
    static parseEthDepositData(eventData) {
        // https://github.com/OffchainLabs/nitro/blob/aa84e899cbc902bf6da753b1d66668a1def2c106/contracts/src/bridge/Inbox.sol#Chain42
        // ethers.defaultAbiCoder doesnt decode packed args, so we do a hardcoded parsing
        const addressEnd = 2 + 20 * 2;
        const to = (0, address_1.getAddress)('0x' + eventData.substring(2, addressEnd));
        const value = bignumber_1.BigNumber.from('0x' + eventData.substring(addressEnd));
        return { to, value };
    }
    /**
     * Create an EthDepositMessage from data emitted in event when calling ethDeposit on Inbox.sol
     * @param childProvider
     * @param messageNumber The message number in the Inbox.InboxMessageDelivered event
     * @param senderAddr The sender address from Bridge.MessageDelivered event
     * @param inboxMessageEventData The data field from the Inbox.InboxMessageDelivered event
     * @returns
     */
    static async fromEventComponents(childProvider, messageNumber, senderAddr, inboxMessageEventData) {
        const chainId = (await childProvider.getNetwork()).chainId;
        const { to, value } = EthDepositMessage.parseEthDepositData(inboxMessageEventData);
        return new EthDepositMessage(childProvider, chainId, messageNumber, senderAddr, to, value);
    }
    /**
     *
     * @param childProvider
     * @param childChainId
     * @param messageNumber
     * @param to Recipient address of the ETH on Chain
     * @param value
     */
    constructor(childProvider, childChainId, messageNumber, from, to, value) {
        this.childProvider = childProvider;
        this.childChainId = childChainId;
        this.messageNumber = messageNumber;
        this.from = from;
        this.to = to;
        this.value = value;
        this.childTxHash = EthDepositMessage.calculateDepositTxId(childChainId, messageNumber, from, to, value);
    }
    async status() {
        const receipt = await this.childProvider.getTransactionReceipt(this.childTxHash);
        if (receipt === null)
            return EthDepositMessageStatus.PENDING;
        else
            return EthDepositMessageStatus.DEPOSITED;
    }
    async wait(confirmations, timeout) {
        const chosenTimeout = (0, lib_1.isDefined)(timeout) ? timeout : constants_1.DEFAULT_DEPOSIT_TIMEOUT;
        if (!this.childTxReceipt) {
            this.childTxReceipt = await (0, lib_1.getTransactionReceipt)(this.childProvider, this.childTxHash, confirmations, chosenTimeout);
        }
        return this.childTxReceipt || null;
    }
}
exports.EthDepositMessage = EthDepositMessage;
