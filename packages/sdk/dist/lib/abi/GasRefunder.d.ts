import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GasRefunderInterface extends utils.Interface {
    contractName: "GasRefunder";
    functions: {
        "allowContracts(address[])": FunctionFragment;
        "allowRefundees(address[])": FunctionFragment;
        "allowedContracts(address)": FunctionFragment;
        "allowedRefundees(address)": FunctionFragment;
        "commonParams()": FunctionFragment;
        "disallowContracts(address[])": FunctionFragment;
        "disallowRefundees(address[])": FunctionFragment;
        "disallower()": FunctionFragment;
        "onGasSpent(address,uint256,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setCalldataCost(uint8)": FunctionFragment;
        "setDisallower(address)": FunctionFragment;
        "setExtraGasMargin(uint32)": FunctionFragment;
        "setMaxGasCost(uint64)": FunctionFragment;
        "setMaxGasTip(uint64)": FunctionFragment;
        "setMaxRefundeeBalance(uint128)": FunctionFragment;
        "setMaxSingleGasUsage(uint32)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdraw(address,uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "allowContracts", values: [string[]]): string;
    encodeFunctionData(functionFragment: "allowRefundees", values: [string[]]): string;
    encodeFunctionData(functionFragment: "allowedContracts", values: [string]): string;
    encodeFunctionData(functionFragment: "allowedRefundees", values: [string]): string;
    encodeFunctionData(functionFragment: "commonParams", values?: undefined): string;
    encodeFunctionData(functionFragment: "disallowContracts", values: [string[]]): string;
    encodeFunctionData(functionFragment: "disallowRefundees", values: [string[]]): string;
    encodeFunctionData(functionFragment: "disallower", values?: undefined): string;
    encodeFunctionData(functionFragment: "onGasSpent", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setCalldataCost", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setDisallower", values: [string]): string;
    encodeFunctionData(functionFragment: "setExtraGasMargin", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxGasCost", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxGasTip", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxRefundeeBalance", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxSingleGasUsage", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "allowContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowRefundees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedRefundees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commonParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disallowContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disallowRefundees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disallower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onGasSpent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCalldataCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDisallower", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExtraGasMargin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxGasCost", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxGasTip", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxRefundeeBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxSingleGasUsage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "CommonParameterSet(uint8,uint256)": EventFragment;
        "ContractAllowedSet(address,bool)": EventFragment;
        "Deposited(address,uint256)": EventFragment;
        "DisallowerSet(address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "RefundGasCostsDenied(address,address,uint8,uint256)": EventFragment;
        "RefundedGasCosts(address,address,bool,uint256,uint256,uint256)": EventFragment;
        "RefundeeAllowedSet(address,bool)": EventFragment;
        "Withdrawn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CommonParameterSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractAllowedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DisallowerSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundGasCostsDenied"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundedGasCosts"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RefundeeAllowedSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}
export type CommonParameterSetEvent = TypedEvent<[
    number,
    BigNumber
], {
    parameter: number;
    value: BigNumber;
}>;
export type CommonParameterSetEventFilter = TypedEventFilter<CommonParameterSetEvent>;
export type ContractAllowedSetEvent = TypedEvent<[
    string,
    boolean
], {
    addr: string;
    allowed: boolean;
}>;
export type ContractAllowedSetEventFilter = TypedEventFilter<ContractAllowedSetEvent>;
export type DepositedEvent = TypedEvent<[
    string,
    BigNumber
], {
    sender: string;
    amount: BigNumber;
}>;
export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;
export type DisallowerSetEvent = TypedEvent<[string], {
    addr: string;
}>;
export type DisallowerSetEventFilter = TypedEventFilter<DisallowerSetEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type RefundGasCostsDeniedEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber
], {
    refundee: string;
    contractAddress: string;
    reason: number;
    gas: BigNumber;
}>;
export type RefundGasCostsDeniedEventFilter = TypedEventFilter<RefundGasCostsDeniedEvent>;
export type RefundedGasCostsEvent = TypedEvent<[
    string,
    string,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber
], {
    refundee: string;
    contractAddress: string;
    success: boolean;
    gas: BigNumber;
    gasPrice: BigNumber;
    amountPaid: BigNumber;
}>;
export type RefundedGasCostsEventFilter = TypedEventFilter<RefundedGasCostsEvent>;
export type RefundeeAllowedSetEvent = TypedEvent<[
    string,
    boolean
], {
    addr: string;
    allowed: boolean;
}>;
export type RefundeeAllowedSetEventFilter = TypedEventFilter<RefundeeAllowedSetEvent>;
export type WithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], {
    initiator: string;
    destination: string;
    amount: BigNumber;
}>;
export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;
export interface GasRefunder extends BaseContract {
    contractName: "GasRefunder";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GasRefunderInterface;
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
        allowContracts(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowRefundees(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        allowedContracts(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        allowedRefundees(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        commonParams(overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            BigNumber,
            BigNumber,
            number
        ] & {
            maxRefundeeBalance: BigNumber;
            extraGasMargin: number;
            calldataCost: number;
            maxGasTip: BigNumber;
            maxGasCost: BigNumber;
            maxSingleGasUsage: number;
        }>;
        disallowContracts(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        disallowRefundees(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        disallower(overrides?: CallOverrides): Promise<[string]>;
        onGasSpent(refundee: string, gasUsed: BigNumberish, calldataSize: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setCalldataCost(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDisallower(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setExtraGasMargin(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxGasCost(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxGasTip(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxRefundeeBalance(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxSingleGasUsage(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(destination: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    allowContracts(addresses: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowRefundees(addresses: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    allowedContracts(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    allowedRefundees(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    commonParams(overrides?: CallOverrides): Promise<[
        BigNumber,
        number,
        number,
        BigNumber,
        BigNumber,
        number
    ] & {
        maxRefundeeBalance: BigNumber;
        extraGasMargin: number;
        calldataCost: number;
        maxGasTip: BigNumber;
        maxGasCost: BigNumber;
        maxSingleGasUsage: number;
    }>;
    disallowContracts(addresses: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    disallowRefundees(addresses: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    disallower(overrides?: CallOverrides): Promise<string>;
    onGasSpent(refundee: string, gasUsed: BigNumberish, calldataSize: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setCalldataCost(newValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDisallower(addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setExtraGasMargin(newValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxGasCost(newValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxGasTip(newValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxRefundeeBalance(newValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxSingleGasUsage(newValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(destination: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowContracts(addresses: string[], overrides?: CallOverrides): Promise<void>;
        allowRefundees(addresses: string[], overrides?: CallOverrides): Promise<void>;
        allowedContracts(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        allowedRefundees(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        commonParams(overrides?: CallOverrides): Promise<[
            BigNumber,
            number,
            number,
            BigNumber,
            BigNumber,
            number
        ] & {
            maxRefundeeBalance: BigNumber;
            extraGasMargin: number;
            calldataCost: number;
            maxGasTip: BigNumber;
            maxGasCost: BigNumber;
            maxSingleGasUsage: number;
        }>;
        disallowContracts(addresses: string[], overrides?: CallOverrides): Promise<void>;
        disallowRefundees(addresses: string[], overrides?: CallOverrides): Promise<void>;
        disallower(overrides?: CallOverrides): Promise<string>;
        onGasSpent(refundee: string, gasUsed: BigNumberish, calldataSize: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setCalldataCost(newValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setDisallower(addr: string, overrides?: CallOverrides): Promise<void>;
        setExtraGasMargin(newValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxGasCost(newValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxGasTip(newValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxRefundeeBalance(newValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxSingleGasUsage(newValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        withdraw(destination: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CommonParameterSet(uint8,uint256)"(parameter?: BigNumberish | null, value?: null): CommonParameterSetEventFilter;
        CommonParameterSet(parameter?: BigNumberish | null, value?: null): CommonParameterSetEventFilter;
        "ContractAllowedSet(address,bool)"(addr?: string | null, allowed?: boolean | null): ContractAllowedSetEventFilter;
        ContractAllowedSet(addr?: string | null, allowed?: boolean | null): ContractAllowedSetEventFilter;
        "Deposited(address,uint256)"(sender?: null, amount?: null): DepositedEventFilter;
        Deposited(sender?: null, amount?: null): DepositedEventFilter;
        "DisallowerSet(address)"(addr?: string | null): DisallowerSetEventFilter;
        DisallowerSet(addr?: string | null): DisallowerSetEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "RefundGasCostsDenied(address,address,uint8,uint256)"(refundee?: string | null, contractAddress?: string | null, reason?: BigNumberish | null, gas?: null): RefundGasCostsDeniedEventFilter;
        RefundGasCostsDenied(refundee?: string | null, contractAddress?: string | null, reason?: BigNumberish | null, gas?: null): RefundGasCostsDeniedEventFilter;
        "RefundedGasCosts(address,address,bool,uint256,uint256,uint256)"(refundee?: string | null, contractAddress?: string | null, success?: boolean | null, gas?: null, gasPrice?: null, amountPaid?: null): RefundedGasCostsEventFilter;
        RefundedGasCosts(refundee?: string | null, contractAddress?: string | null, success?: boolean | null, gas?: null, gasPrice?: null, amountPaid?: null): RefundedGasCostsEventFilter;
        "RefundeeAllowedSet(address,bool)"(addr?: string | null, allowed?: boolean | null): RefundeeAllowedSetEventFilter;
        RefundeeAllowedSet(addr?: string | null, allowed?: boolean | null): RefundeeAllowedSetEventFilter;
        "Withdrawn(address,address,uint256)"(initiator?: null, destination?: null, amount?: null): WithdrawnEventFilter;
        Withdrawn(initiator?: null, destination?: null, amount?: null): WithdrawnEventFilter;
    };
    estimateGas: {
        allowContracts(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowRefundees(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        allowedContracts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        allowedRefundees(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        commonParams(overrides?: CallOverrides): Promise<BigNumber>;
        disallowContracts(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        disallowRefundees(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        disallower(overrides?: CallOverrides): Promise<BigNumber>;
        onGasSpent(refundee: string, gasUsed: BigNumberish, calldataSize: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setCalldataCost(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDisallower(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setExtraGasMargin(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxGasCost(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxGasTip(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxRefundeeBalance(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxSingleGasUsage(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(destination: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowContracts(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowRefundees(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        allowedContracts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowedRefundees(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        commonParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disallowContracts(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        disallowRefundees(addresses: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        disallower(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onGasSpent(refundee: string, gasUsed: BigNumberish, calldataSize: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setCalldataCost(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDisallower(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setExtraGasMargin(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxGasCost(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxGasTip(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxRefundeeBalance(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxSingleGasUsage(newValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(destination: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
