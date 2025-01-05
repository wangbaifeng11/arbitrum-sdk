import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbOwnerInterface extends utils.Interface {
    contractName: "ArbOwner";
    functions: {
        "addChainOwner(address)": FunctionFragment;
        "getAllChainOwners()": FunctionFragment;
        "getInfraFeeAccount()": FunctionFragment;
        "getNetworkFeeAccount()": FunctionFragment;
        "isChainOwner(address)": FunctionFragment;
        "releaseL1PricerSurplusFunds(uint256)": FunctionFragment;
        "removeChainOwner(address)": FunctionFragment;
        "scheduleArbOSUpgrade(uint64,uint64)": FunctionFragment;
        "setAmortizedCostCapBips(uint64)": FunctionFragment;
        "setBrotliCompressionLevel(uint64)": FunctionFragment;
        "setChainConfig(string)": FunctionFragment;
        "setInfraFeeAccount(address)": FunctionFragment;
        "setL1BaseFeeEstimateInertia(uint64)": FunctionFragment;
        "setL1PricePerUnit(uint256)": FunctionFragment;
        "setL1PricingEquilibrationUnits(uint256)": FunctionFragment;
        "setL1PricingInertia(uint64)": FunctionFragment;
        "setL1PricingRewardRate(uint64)": FunctionFragment;
        "setL1PricingRewardRecipient(address)": FunctionFragment;
        "setL2BaseFee(uint256)": FunctionFragment;
        "setL2GasBacklogTolerance(uint64)": FunctionFragment;
        "setL2GasPricingInertia(uint64)": FunctionFragment;
        "setMaxTxGasLimit(uint64)": FunctionFragment;
        "setMinimumL2BaseFee(uint256)": FunctionFragment;
        "setNetworkFeeAccount(address)": FunctionFragment;
        "setPerBatchGasCharge(int64)": FunctionFragment;
        "setSpeedLimit(uint64)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addChainOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "getAllChainOwners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInfraFeeAccount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNetworkFeeAccount", values?: undefined): string;
    encodeFunctionData(functionFragment: "isChainOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "releaseL1PricerSurplusFunds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeChainOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "scheduleArbOSUpgrade", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setAmortizedCostCapBips", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setBrotliCompressionLevel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setChainConfig", values: [string]): string;
    encodeFunctionData(functionFragment: "setInfraFeeAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "setL1BaseFeeEstimateInertia", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setL1PricePerUnit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setL1PricingEquilibrationUnits", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setL1PricingInertia", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setL1PricingRewardRate", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setL1PricingRewardRecipient", values: [string]): string;
    encodeFunctionData(functionFragment: "setL2BaseFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setL2GasBacklogTolerance", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setL2GasPricingInertia", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxTxGasLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMinimumL2BaseFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setNetworkFeeAccount", values: [string]): string;
    encodeFunctionData(functionFragment: "setPerBatchGasCharge", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setSpeedLimit", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addChainOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllChainOwners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInfraFeeAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNetworkFeeAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isChainOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "releaseL1PricerSurplusFunds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeChainOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scheduleArbOSUpgrade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAmortizedCostCapBips", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBrotliCompressionLevel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setInfraFeeAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setL1BaseFeeEstimateInertia", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setL1PricePerUnit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setL1PricingEquilibrationUnits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setL1PricingInertia", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setL1PricingRewardRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setL1PricingRewardRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setL2BaseFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setL2GasBacklogTolerance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setL2GasPricingInertia", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxTxGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinimumL2BaseFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNetworkFeeAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPerBatchGasCharge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSpeedLimit", data: BytesLike): Result;
    events: {
        "OwnerActs(bytes4,address,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnerActs"): EventFragment;
}
export type OwnerActsEvent = TypedEvent<[
    string,
    string,
    string
], {
    method: string;
    owner: string;
    data: string;
}>;
export type OwnerActsEventFilter = TypedEventFilter<OwnerActsEvent>;
export interface ArbOwner extends BaseContract {
    contractName: "ArbOwner";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbOwnerInterface;
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
        addChainOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllChainOwners(overrides?: CallOverrides): Promise<[string[]]>;
        getInfraFeeAccount(overrides?: CallOverrides): Promise<[string]>;
        getNetworkFeeAccount(overrides?: CallOverrides): Promise<[string]>;
        isChainOwner(addr: string, overrides?: CallOverrides): Promise<[boolean]>;
        releaseL1PricerSurplusFunds(maxWeiToRelease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeChainOwner(ownerToRemove: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        scheduleArbOSUpgrade(newVersion: BigNumberish, timestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAmortizedCostCapBips(cap: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBrotliCompressionLevel(level: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setChainConfig(chainConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setInfraFeeAccount(newInfraFeeAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setL1BaseFeeEstimateInertia(inertia: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setL1PricePerUnit(pricePerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setL1PricingEquilibrationUnits(equilibrationUnits: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setL1PricingInertia(inertia: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setL1PricingRewardRate(weiPerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setL1PricingRewardRecipient(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setL2BaseFee(priceInWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setL2GasBacklogTolerance(sec: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setL2GasPricingInertia(sec: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxTxGasLimit(limit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMinimumL2BaseFee(priceInWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setNetworkFeeAccount(newNetworkFeeAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPerBatchGasCharge(cost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSpeedLimit(limit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addChainOwner(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllChainOwners(overrides?: CallOverrides): Promise<string[]>;
    getInfraFeeAccount(overrides?: CallOverrides): Promise<string>;
    getNetworkFeeAccount(overrides?: CallOverrides): Promise<string>;
    isChainOwner(addr: string, overrides?: CallOverrides): Promise<boolean>;
    releaseL1PricerSurplusFunds(maxWeiToRelease: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeChainOwner(ownerToRemove: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    scheduleArbOSUpgrade(newVersion: BigNumberish, timestamp: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAmortizedCostCapBips(cap: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBrotliCompressionLevel(level: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setChainConfig(chainConfig: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setInfraFeeAccount(newInfraFeeAccount: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setL1BaseFeeEstimateInertia(inertia: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setL1PricePerUnit(pricePerUnit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setL1PricingEquilibrationUnits(equilibrationUnits: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setL1PricingInertia(inertia: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setL1PricingRewardRate(weiPerUnit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setL1PricingRewardRecipient(recipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setL2BaseFee(priceInWei: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setL2GasBacklogTolerance(sec: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setL2GasPricingInertia(sec: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxTxGasLimit(limit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMinimumL2BaseFee(priceInWei: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setNetworkFeeAccount(newNetworkFeeAccount: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPerBatchGasCharge(cost: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSpeedLimit(limit: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addChainOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;
        getAllChainOwners(overrides?: CallOverrides): Promise<string[]>;
        getInfraFeeAccount(overrides?: CallOverrides): Promise<string>;
        getNetworkFeeAccount(overrides?: CallOverrides): Promise<string>;
        isChainOwner(addr: string, overrides?: CallOverrides): Promise<boolean>;
        releaseL1PricerSurplusFunds(maxWeiToRelease: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        removeChainOwner(ownerToRemove: string, overrides?: CallOverrides): Promise<void>;
        scheduleArbOSUpgrade(newVersion: BigNumberish, timestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setAmortizedCostCapBips(cap: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setBrotliCompressionLevel(level: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setChainConfig(chainConfig: string, overrides?: CallOverrides): Promise<void>;
        setInfraFeeAccount(newInfraFeeAccount: string, overrides?: CallOverrides): Promise<void>;
        setL1BaseFeeEstimateInertia(inertia: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setL1PricePerUnit(pricePerUnit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setL1PricingEquilibrationUnits(equilibrationUnits: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setL1PricingInertia(inertia: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setL1PricingRewardRate(weiPerUnit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setL1PricingRewardRecipient(recipient: string, overrides?: CallOverrides): Promise<void>;
        setL2BaseFee(priceInWei: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setL2GasBacklogTolerance(sec: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setL2GasPricingInertia(sec: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxTxGasLimit(limit: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMinimumL2BaseFee(priceInWei: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setNetworkFeeAccount(newNetworkFeeAccount: string, overrides?: CallOverrides): Promise<void>;
        setPerBatchGasCharge(cost: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setSpeedLimit(limit: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnerActs(bytes4,address,bytes)"(method?: BytesLike | null, owner?: string | null, data?: null): OwnerActsEventFilter;
        OwnerActs(method?: BytesLike | null, owner?: string | null, data?: null): OwnerActsEventFilter;
    };
    estimateGas: {
        addChainOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllChainOwners(overrides?: CallOverrides): Promise<BigNumber>;
        getInfraFeeAccount(overrides?: CallOverrides): Promise<BigNumber>;
        getNetworkFeeAccount(overrides?: CallOverrides): Promise<BigNumber>;
        isChainOwner(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        releaseL1PricerSurplusFunds(maxWeiToRelease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeChainOwner(ownerToRemove: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        scheduleArbOSUpgrade(newVersion: BigNumberish, timestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAmortizedCostCapBips(cap: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBrotliCompressionLevel(level: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setChainConfig(chainConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setInfraFeeAccount(newInfraFeeAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setL1BaseFeeEstimateInertia(inertia: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setL1PricePerUnit(pricePerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setL1PricingEquilibrationUnits(equilibrationUnits: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setL1PricingInertia(inertia: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setL1PricingRewardRate(weiPerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setL1PricingRewardRecipient(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setL2BaseFee(priceInWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setL2GasBacklogTolerance(sec: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setL2GasPricingInertia(sec: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxTxGasLimit(limit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMinimumL2BaseFee(priceInWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setNetworkFeeAccount(newNetworkFeeAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPerBatchGasCharge(cost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSpeedLimit(limit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addChainOwner(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllChainOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getInfraFeeAccount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNetworkFeeAccount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isChainOwner(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        releaseL1PricerSurplusFunds(maxWeiToRelease: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeChainOwner(ownerToRemove: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        scheduleArbOSUpgrade(newVersion: BigNumberish, timestamp: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAmortizedCostCapBips(cap: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBrotliCompressionLevel(level: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setChainConfig(chainConfig: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setInfraFeeAccount(newInfraFeeAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setL1BaseFeeEstimateInertia(inertia: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setL1PricePerUnit(pricePerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setL1PricingEquilibrationUnits(equilibrationUnits: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setL1PricingInertia(inertia: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setL1PricingRewardRate(weiPerUnit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setL1PricingRewardRecipient(recipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setL2BaseFee(priceInWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setL2GasBacklogTolerance(sec: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setL2GasPricingInertia(sec: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxTxGasLimit(limit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMinimumL2BaseFee(priceInWei: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setNetworkFeeAccount(newNetworkFeeAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPerBatchGasCharge(cost: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSpeedLimit(limit: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
