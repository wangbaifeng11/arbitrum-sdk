import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface MessageTesterInterface extends utils.Interface {
    contractName: "MessageTester";
    functions: {
        "accumulateInboxMessage(bytes32,bytes32)": FunctionFragment;
        "messageHash(uint8,address,uint64,uint64,uint256,uint256,bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "accumulateInboxMessage", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "messageHash", values: [
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "accumulateInboxMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "messageHash", data: BytesLike): Result;
    events: {};
}
export interface MessageTester extends BaseContract {
    contractName: "MessageTester";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MessageTesterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        accumulateInboxMessage(inbox: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        messageHash(messageType: BigNumberish, sender: string, blockNumber: BigNumberish, timestamp: BigNumberish, inboxSeqNum: BigNumberish, gasPriceL1: BigNumberish, messageDataHash: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    };
    accumulateInboxMessage(inbox: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<string>;
    messageHash(messageType: BigNumberish, sender: string, blockNumber: BigNumberish, timestamp: BigNumberish, inboxSeqNum: BigNumberish, gasPriceL1: BigNumberish, messageDataHash: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        accumulateInboxMessage(inbox: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<string>;
        messageHash(messageType: BigNumberish, sender: string, blockNumber: BigNumberish, timestamp: BigNumberish, inboxSeqNum: BigNumberish, gasPriceL1: BigNumberish, messageDataHash: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        accumulateInboxMessage(inbox: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        messageHash(messageType: BigNumberish, sender: string, blockNumber: BigNumberish, timestamp: BigNumberish, inboxSeqNum: BigNumberish, gasPriceL1: BigNumberish, messageDataHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        accumulateInboxMessage(inbox: BytesLike, message: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        messageHash(messageType: BigNumberish, sender: string, blockNumber: BigNumberish, timestamp: BigNumberish, inboxSeqNum: BigNumberish, gasPriceL1: BigNumberish, messageDataHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
