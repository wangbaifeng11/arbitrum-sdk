import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface TestBytesParserInterface extends utils.Interface {
    contractName: "TestBytesParser";
    functions: {
        "bytesToString(bytes)": FunctionFragment;
        "bytesToUint8(bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "bytesToString", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "bytesToUint8", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "bytesToString", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bytesToUint8", data: BytesLike): Result;
    events: {};
}
export interface TestBytesParser extends BaseContract {
    contractName: "TestBytesParser";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TestBytesParserInterface;
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
        bytesToString(input: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            res: string;
        }>;
        bytesToUint8(input: BytesLike, overrides?: CallOverrides): Promise<[boolean, number]>;
    };
    bytesToString(input: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
        success: boolean;
        res: string;
    }>;
    bytesToUint8(input: BytesLike, overrides?: CallOverrides): Promise<[boolean, number]>;
    callStatic: {
        bytesToString(input: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            res: string;
        }>;
        bytesToUint8(input: BytesLike, overrides?: CallOverrides): Promise<[boolean, number]>;
    };
    filters: {};
    estimateGas: {
        bytesToString(input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        bytesToUint8(input: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bytesToString(input: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bytesToUint8(input: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
