import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbAggregatorInterface extends utils.Interface {
    contractName: "ArbAggregator";
    functions: {
        "addBatchPoster(address)": FunctionFragment;
        "getBatchPosters()": FunctionFragment;
        "getDefaultAggregator()": FunctionFragment;
        "getFeeCollector(address)": FunctionFragment;
        "getPreferredAggregator(address)": FunctionFragment;
        "getTxBaseFee(address)": FunctionFragment;
        "setFeeCollector(address,address)": FunctionFragment;
        "setTxBaseFee(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addBatchPoster", values: [string]): string;
    encodeFunctionData(functionFragment: "getBatchPosters", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDefaultAggregator", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFeeCollector", values: [string]): string;
    encodeFunctionData(functionFragment: "getPreferredAggregator", values: [string]): string;
    encodeFunctionData(functionFragment: "getTxBaseFee", values: [string]): string;
    encodeFunctionData(functionFragment: "setFeeCollector", values: [string, string]): string;
    encodeFunctionData(functionFragment: "setTxBaseFee", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addBatchPoster", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBatchPosters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDefaultAggregator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFeeCollector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPreferredAggregator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTxBaseFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeCollector", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTxBaseFee", data: BytesLike): Result;
    events: {};
}
export interface ArbAggregator extends BaseContract {
    contractName: "ArbAggregator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbAggregatorInterface;
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
        addBatchPoster(newBatchPoster: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getBatchPosters(overrides?: CallOverrides): Promise<[string[]]>;
        getDefaultAggregator(overrides?: CallOverrides): Promise<[string]>;
        getFeeCollector(batchPoster: string, overrides?: CallOverrides): Promise<[string]>;
        getPreferredAggregator(addr: string, overrides?: CallOverrides): Promise<[string, boolean]>;
        getTxBaseFee(aggregator: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        setFeeCollector(batchPoster: string, newFeeCollector: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setTxBaseFee(aggregator: string, feeInL1Gas: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addBatchPoster(newBatchPoster: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getBatchPosters(overrides?: CallOverrides): Promise<string[]>;
    getDefaultAggregator(overrides?: CallOverrides): Promise<string>;
    getFeeCollector(batchPoster: string, overrides?: CallOverrides): Promise<string>;
    getPreferredAggregator(addr: string, overrides?: CallOverrides): Promise<[string, boolean]>;
    getTxBaseFee(aggregator: string, overrides?: CallOverrides): Promise<BigNumber>;
    setFeeCollector(batchPoster: string, newFeeCollector: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setTxBaseFee(aggregator: string, feeInL1Gas: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addBatchPoster(newBatchPoster: string, overrides?: CallOverrides): Promise<void>;
        getBatchPosters(overrides?: CallOverrides): Promise<string[]>;
        getDefaultAggregator(overrides?: CallOverrides): Promise<string>;
        getFeeCollector(batchPoster: string, overrides?: CallOverrides): Promise<string>;
        getPreferredAggregator(addr: string, overrides?: CallOverrides): Promise<[string, boolean]>;
        getTxBaseFee(aggregator: string, overrides?: CallOverrides): Promise<BigNumber>;
        setFeeCollector(batchPoster: string, newFeeCollector: string, overrides?: CallOverrides): Promise<void>;
        setTxBaseFee(aggregator: string, feeInL1Gas: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        addBatchPoster(newBatchPoster: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBatchPosters(overrides?: CallOverrides): Promise<BigNumber>;
        getDefaultAggregator(overrides?: CallOverrides): Promise<BigNumber>;
        getFeeCollector(batchPoster: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPreferredAggregator(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getTxBaseFee(aggregator: string, overrides?: CallOverrides): Promise<BigNumber>;
        setFeeCollector(batchPoster: string, newFeeCollector: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setTxBaseFee(aggregator: string, feeInL1Gas: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addBatchPoster(newBatchPoster: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBatchPosters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDefaultAggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFeeCollector(batchPoster: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPreferredAggregator(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTxBaseFee(aggregator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setFeeCollector(batchPoster: string, newFeeCollector: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setTxBaseFee(aggregator: string, feeInL1Gas: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
