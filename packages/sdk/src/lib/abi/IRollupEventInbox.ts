/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IRollupEventInboxInterface extends utils.Interface {
  contractName: "IRollupEventInbox";
  functions: {
    "bridge()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "rollup()": FunctionFragment;
    "rollupInitialized(uint256,string)": FunctionFragment;
    "updateRollupAddress()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "bridge", values?: undefined): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "rollup", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rollupInitialized",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRollupAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "bridge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rollup", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rollupInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRollupAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IRollupEventInbox extends BaseContract {
  contractName: "IRollupEventInbox";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRollupEventInboxInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bridge(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rollup(overrides?: CallOverrides): Promise<[string]>;

    rollupInitialized(
      chainId: BigNumberish,
      chainConfig: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateRollupAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bridge(overrides?: CallOverrides): Promise<string>;

  initialize(
    _bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rollup(overrides?: CallOverrides): Promise<string>;

  rollupInitialized(
    chainId: BigNumberish,
    chainConfig: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateRollupAddress(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bridge(overrides?: CallOverrides): Promise<string>;

    initialize(_bridge: string, overrides?: CallOverrides): Promise<void>;

    rollup(overrides?: CallOverrides): Promise<string>;

    rollupInitialized(
      chainId: BigNumberish,
      chainConfig: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRollupAddress(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    bridge(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rollup(overrides?: CallOverrides): Promise<BigNumber>;

    rollupInitialized(
      chainId: BigNumberish,
      chainConfig: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateRollupAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rollup(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rollupInitialized(
      chainId: BigNumberish,
      chainConfig: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateRollupAddress(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
