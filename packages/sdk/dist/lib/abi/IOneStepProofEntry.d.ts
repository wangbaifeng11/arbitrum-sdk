import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type ExecutionContextStruct = {
    maxInboxMessagesRead: BigNumberish;
    bridge: string;
};
export type ExecutionContextStructOutput = [BigNumber, string] & {
    maxInboxMessagesRead: BigNumber;
    bridge: string;
};
export interface IOneStepProofEntryInterface extends utils.Interface {
    contractName: "IOneStepProofEntry";
    functions: {
        "proveOneStep((uint256,address),uint256,bytes32,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "proveOneStep", values: [ExecutionContextStruct, BigNumberish, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "proveOneStep", data: BytesLike): Result;
    events: {};
}
export interface IOneStepProofEntry extends BaseContract {
    contractName: "IOneStepProofEntry";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOneStepProofEntryInterface;
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
        proveOneStep(execCtx: ExecutionContextStruct, machineStep: BigNumberish, beforeHash: BytesLike, proof: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            afterHash: string;
        }>;
    };
    proveOneStep(execCtx: ExecutionContextStruct, machineStep: BigNumberish, beforeHash: BytesLike, proof: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        proveOneStep(execCtx: ExecutionContextStruct, machineStep: BigNumberish, beforeHash: BytesLike, proof: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        proveOneStep(execCtx: ExecutionContextStruct, machineStep: BigNumberish, beforeHash: BytesLike, proof: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        proveOneStep(execCtx: ExecutionContextStruct, machineStep: BigNumberish, beforeHash: BytesLike, proof: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
