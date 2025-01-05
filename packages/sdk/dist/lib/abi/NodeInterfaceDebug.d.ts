import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace NodeInterfaceDebug {
    type RetryableInfoStruct = {
        timeout: BigNumberish;
        from: string;
        to: string;
        value: BigNumberish;
        beneficiary: string;
        tries: BigNumberish;
        data: BytesLike;
    };
    type RetryableInfoStructOutput = [
        BigNumber,
        string,
        string,
        BigNumber,
        string,
        BigNumber,
        string
    ] & {
        timeout: BigNumber;
        from: string;
        to: string;
        value: BigNumber;
        beneficiary: string;
        tries: BigNumber;
        data: string;
    };
}
export interface NodeInterfaceDebugInterface extends utils.Interface {
    contractName: "NodeInterfaceDebug";
    functions: {
        "getRetryable(bytes32)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getRetryable", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "getRetryable", data: BytesLike): Result;
    events: {};
}
export interface NodeInterfaceDebug extends BaseContract {
    contractName: "NodeInterfaceDebug";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NodeInterfaceDebugInterface;
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
        getRetryable(ticket: BytesLike, overrides?: CallOverrides): Promise<[
            NodeInterfaceDebug.RetryableInfoStructOutput
        ] & {
            retryable: NodeInterfaceDebug.RetryableInfoStructOutput;
        }>;
    };
    getRetryable(ticket: BytesLike, overrides?: CallOverrides): Promise<NodeInterfaceDebug.RetryableInfoStructOutput>;
    callStatic: {
        getRetryable(ticket: BytesLike, overrides?: CallOverrides): Promise<NodeInterfaceDebug.RetryableInfoStructOutput>;
    };
    filters: {};
    estimateGas: {
        getRetryable(ticket: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getRetryable(ticket: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
