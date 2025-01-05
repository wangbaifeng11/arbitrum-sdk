import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ICloneableInterface extends utils.Interface {
    contractName: "ICloneable";
    functions: {
        "isMaster()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "isMaster", values?: undefined): string;
    decodeFunctionResult(functionFragment: "isMaster", data: BytesLike): Result;
    events: {};
}
export interface ICloneable extends BaseContract {
    contractName: "ICloneable";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICloneableInterface;
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
        isMaster(overrides?: CallOverrides): Promise<[boolean]>;
    };
    isMaster(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        isMaster(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        isMaster(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isMaster(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
