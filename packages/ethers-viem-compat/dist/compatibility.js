"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicClientToProvider = publicClientToProvider;
exports.viemTransactionReceiptToEthersTransactionReceipt = viemTransactionReceiptToEthersTransactionReceipt;
const ethers_1 = require("ethers");
// based on https://wagmi.sh/react/ethers-adapters#reference-implementation
function publicClientToProvider(publicClient) {
    const { chain } = publicClient;
    if (typeof chain === 'undefined') {
        throw new Error(`[publicClientToProvider] "chain" is undefined`);
    }
    const network = {
        chainId: chain.id,
        name: chain.name,
        ensAddress: chain.contracts?.ensRegistry?.address,
    };
    const transport = publicClient.transport;
    const url = transport.url ?? chain.rpcUrls.default.http[0];
    return new ethers_1.providers.StaticJsonRpcProvider(url, network);
}
function viemLogToEthersLog(log) {
    return {
        blockNumber: Number(log.blockNumber),
        blockHash: log.blockHash,
        transactionIndex: log.transactionIndex,
        removed: log.removed,
        address: log.address,
        data: log.data,
        topics: log.topics,
        transactionHash: log.transactionHash,
        logIndex: log.logIndex,
    };
}
function viemTransactionReceiptToEthersTransactionReceipt(receipt) {
    return {
        to: receipt.to,
        from: receipt.from,
        contractAddress: receipt.contractAddress,
        transactionIndex: receipt.transactionIndex,
        gasUsed: ethers_1.BigNumber.from(receipt.gasUsed),
        logsBloom: receipt.logsBloom,
        blockHash: receipt.blockHash,
        transactionHash: receipt.transactionHash,
        logs: receipt.logs.map(log => viemLogToEthersLog(log)),
        blockNumber: Number(receipt.blockNumber),
        // todo: if we need this we can add it later
        confirmations: -1,
        cumulativeGasUsed: ethers_1.BigNumber.from(receipt.cumulativeGasUsed),
        effectiveGasPrice: ethers_1.BigNumber.from(receipt.effectiveGasPrice),
        // all transactions that we care about are well past byzantium
        byzantium: true,
        type: Number(receipt.type),
        status: receipt.status === 'success' ? 1 : 0,
    };
}
