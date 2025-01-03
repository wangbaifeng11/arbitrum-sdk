import { TransactionReceipt as EthersTransactionReceipt } from '@ethersproject/abstract-provider';
import { providers } from 'ethers';
import { PublicClient, TransactionReceipt as ViemTransactionReceipt } from 'viem';
export declare function publicClientToProvider(publicClient: PublicClient): providers.StaticJsonRpcProvider;
export declare function viemTransactionReceiptToEthersTransactionReceipt(receipt: ViemTransactionReceipt): EthersTransactionReceipt;
