import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbitrumEnabledTokenInterface extends utils.Interface {
    contractName: "ArbitrumEnabledToken";
    functions: {
        "isArbitrumEnabled()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "isArbitrumEnabled", values?: undefined): string;
    decodeFunctionResult(functionFragment: "isArbitrumEnabled", data: BytesLike): Result;
    events: {};
}
export interface ArbitrumEnabledToken extends BaseContract {
    contractName: "ArbitrumEnabledToken";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbitrumEnabledTokenInterface;
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
        isArbitrumEnabled(overrides?: CallOverrides): Promise<[number]>;
    };
    isArbitrumEnabled(overrides?: CallOverrides): Promise<number>;
    callStatic: {
        isArbitrumEnabled(overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        isArbitrumEnabled(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        isArbitrumEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
