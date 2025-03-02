import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../abi/common';
export type ConfigDataStruct = {
    wasmModuleRoot: BytesLike;
    requiredStake: BigNumberish;
    challengeManager: string;
    confirmPeriodBlocks: BigNumberish;
    nextInboxPosition: BigNumberish;
};
export type ConfigDataStructOutput = [
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber
] & {
    wasmModuleRoot: string;
    requiredStake: BigNumber;
    challengeManager: string;
    confirmPeriodBlocks: BigNumber;
    nextInboxPosition: BigNumber;
};
export type BeforeStateDataStruct = {
    prevPrevAssertionHash: BytesLike;
    sequencerBatchAcc: BytesLike;
    configData: ConfigDataStruct;
};
export type BeforeStateDataStructOutput = [
    string,
    string,
    ConfigDataStructOutput
] & {
    prevPrevAssertionHash: string;
    sequencerBatchAcc: string;
    configData: ConfigDataStructOutput;
};
export type GlobalStateStruct = {
    bytes32Vals: [BytesLike, BytesLike];
    u64Vals: [BigNumberish, BigNumberish];
};
export type GlobalStateStructOutput = [
    [
        string,
        string
    ],
    [
        BigNumber,
        BigNumber
    ]
] & {
    bytes32Vals: [string, string];
    u64Vals: [BigNumber, BigNumber];
};
export type AssertionStateStruct = {
    globalState: GlobalStateStruct;
    machineStatus: BigNumberish;
    endHistoryRoot: BytesLike;
};
export type AssertionStateStructOutput = [
    GlobalStateStructOutput,
    number,
    string
] & {
    globalState: GlobalStateStructOutput;
    machineStatus: number;
    endHistoryRoot: string;
};
export type AssertionInputsStruct = {
    beforeStateData: BeforeStateDataStruct;
    beforeState: AssertionStateStruct;
    afterState: AssertionStateStruct;
};
export type AssertionInputsStructOutput = [
    BeforeStateDataStructOutput,
    AssertionStateStructOutput,
    AssertionStateStructOutput
] & {
    beforeStateData: BeforeStateDataStructOutput;
    beforeState: AssertionStateStructOutput;
    afterState: AssertionStateStructOutput;
};
export type AssertionNodeStruct = {
    firstChildBlock: BigNumberish;
    secondChildBlock: BigNumberish;
    createdAtBlock: BigNumberish;
    isFirstChild: boolean;
    status: BigNumberish;
    configHash: BytesLike;
};
export type AssertionNodeStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    number,
    string
] & {
    firstChildBlock: BigNumber;
    secondChildBlock: BigNumber;
    createdAtBlock: BigNumber;
    isFirstChild: boolean;
    status: number;
    configHash: string;
};
export declare namespace IRollupCore {
    type StakerStruct = {
        amountStaked: BigNumberish;
        latestStakedAssertion: BytesLike;
        index: BigNumberish;
        isStaked: boolean;
        withdrawalAddress: string;
    };
    type StakerStructOutput = [
        BigNumber,
        string,
        BigNumber,
        boolean,
        string
    ] & {
        amountStaked: BigNumber;
        latestStakedAssertion: string;
        index: BigNumber;
        isStaked: boolean;
        withdrawalAddress: string;
    };
}
export interface BoldRollupUserLogicInterface extends utils.Interface {
    contractName: 'BoldRollupUserLogic';
    functions: {
        '_stakerMap(address)': FunctionFragment;
        'addToDeposit(address,address,uint256)': FunctionFragment;
        'amountStaked(address)': FunctionFragment;
        'anyTrustFastConfirmer()': FunctionFragment;
        'baseStake()': FunctionFragment;
        'bridge()': FunctionFragment;
        'chainId()': FunctionFragment;
        'challengeGracePeriodBlocks()': FunctionFragment;
        'challengeManager()': FunctionFragment;
        'computeAssertionHash(bytes32,((bytes32[2],uint64[2]),uint8,bytes32),bytes32)': FunctionFragment;
        'confirmAssertion(bytes32,bytes32,((bytes32[2],uint64[2]),uint8,bytes32),bytes32,(bytes32,uint256,address,uint64,uint64),bytes32)': FunctionFragment;
        'confirmPeriodBlocks()': FunctionFragment;
        'fastConfirmAssertion(bytes32,bytes32,((bytes32[2],uint64[2]),uint8,bytes32),bytes32)': FunctionFragment;
        'fastConfirmNewAssertion(((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32)': FunctionFragment;
        'genesisAssertionHash()': FunctionFragment;
        'getAssertion(bytes32)': FunctionFragment;
        'getAssertionCreationBlockForLogLookup(bytes32)': FunctionFragment;
        'getFirstChildCreationBlock(bytes32)': FunctionFragment;
        'getSecondChildCreationBlock(bytes32)': FunctionFragment;
        'getStaker(address)': FunctionFragment;
        'getStakerAddress(uint64)': FunctionFragment;
        'getValidators()': FunctionFragment;
        'inbox()': FunctionFragment;
        'initialize(address)': FunctionFragment;
        'isFirstChild(bytes32)': FunctionFragment;
        'isPending(bytes32)': FunctionFragment;
        'isStaked(address)': FunctionFragment;
        'isValidator(address)': FunctionFragment;
        'latestConfirmed()': FunctionFragment;
        'latestStakedAssertion(address)': FunctionFragment;
        'loserStakeEscrow()': FunctionFragment;
        'minimumAssertionPeriod()': FunctionFragment;
        'newStake(uint256,address)': FunctionFragment;
        'newStakeOnNewAssertion(uint256,((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32,address)': FunctionFragment;
        'outbox()': FunctionFragment;
        'owner()': FunctionFragment;
        'paused()': FunctionFragment;
        'proxiableUUID()': FunctionFragment;
        'reduceDeposit(uint256)': FunctionFragment;
        'removeWhitelistAfterFork()': FunctionFragment;
        'removeWhitelistAfterValidatorAfk()': FunctionFragment;
        'returnOldDeposit()': FunctionFragment;
        'returnOldDepositFor(address)': FunctionFragment;
        'rollupDeploymentBlock()': FunctionFragment;
        'rollupEventInbox()': FunctionFragment;
        'sequencerInbox()': FunctionFragment;
        'stakeOnNewAssertion(((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32)': FunctionFragment;
        'stakeToken()': FunctionFragment;
        'stakerCount()': FunctionFragment;
        'totalWithdrawableFunds()': FunctionFragment;
        'validateAssertionHash(bytes32,((bytes32[2],uint64[2]),uint8,bytes32),bytes32,bytes32)': FunctionFragment;
        'validateConfig(bytes32,(bytes32,uint256,address,uint64,uint64))': FunctionFragment;
        'validatorAfkBlocks()': FunctionFragment;
        'validatorWalletCreator()': FunctionFragment;
        'validatorWhitelistDisabled()': FunctionFragment;
        'wasmModuleRoot()': FunctionFragment;
        'withdrawStakerFunds()': FunctionFragment;
        'withdrawableFunds(address)': FunctionFragment;
        'withdrawalAddress(address)': FunctionFragment;
    };
    encodeFunctionData(functionFragment: '_stakerMap', values: [string]): string;
    encodeFunctionData(functionFragment: 'addToDeposit', values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'amountStaked', values: [string]): string;
    encodeFunctionData(functionFragment: 'anyTrustFastConfirmer', values?: undefined): string;
    encodeFunctionData(functionFragment: 'baseStake', values?: undefined): string;
    encodeFunctionData(functionFragment: 'bridge', values?: undefined): string;
    encodeFunctionData(functionFragment: 'chainId', values?: undefined): string;
    encodeFunctionData(functionFragment: 'challengeGracePeriodBlocks', values?: undefined): string;
    encodeFunctionData(functionFragment: 'challengeManager', values?: undefined): string;
    encodeFunctionData(functionFragment: 'computeAssertionHash', values: [BytesLike, AssertionStateStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: 'confirmAssertion', values: [
        BytesLike,
        BytesLike,
        AssertionStateStruct,
        BytesLike,
        ConfigDataStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: 'confirmPeriodBlocks', values?: undefined): string;
    encodeFunctionData(functionFragment: 'fastConfirmAssertion', values: [BytesLike, BytesLike, AssertionStateStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: 'fastConfirmNewAssertion', values: [AssertionInputsStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: 'genesisAssertionHash', values?: undefined): string;
    encodeFunctionData(functionFragment: 'getAssertion', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'getAssertionCreationBlockForLogLookup', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'getFirstChildCreationBlock', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'getSecondChildCreationBlock', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'getStaker', values: [string]): string;
    encodeFunctionData(functionFragment: 'getStakerAddress', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'getValidators', values?: undefined): string;
    encodeFunctionData(functionFragment: 'inbox', values?: undefined): string;
    encodeFunctionData(functionFragment: 'initialize', values: [string]): string;
    encodeFunctionData(functionFragment: 'isFirstChild', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'isPending', values: [BytesLike]): string;
    encodeFunctionData(functionFragment: 'isStaked', values: [string]): string;
    encodeFunctionData(functionFragment: 'isValidator', values: [string]): string;
    encodeFunctionData(functionFragment: 'latestConfirmed', values?: undefined): string;
    encodeFunctionData(functionFragment: 'latestStakedAssertion', values: [string]): string;
    encodeFunctionData(functionFragment: 'loserStakeEscrow', values?: undefined): string;
    encodeFunctionData(functionFragment: 'minimumAssertionPeriod', values?: undefined): string;
    encodeFunctionData(functionFragment: 'newStake', values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: 'newStakeOnNewAssertion', values: [BigNumberish, AssertionInputsStruct, BytesLike, string]): string;
    encodeFunctionData(functionFragment: 'outbox', values?: undefined): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
    encodeFunctionData(functionFragment: 'proxiableUUID', values?: undefined): string;
    encodeFunctionData(functionFragment: 'reduceDeposit', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'removeWhitelistAfterFork', values?: undefined): string;
    encodeFunctionData(functionFragment: 'removeWhitelistAfterValidatorAfk', values?: undefined): string;
    encodeFunctionData(functionFragment: 'returnOldDeposit', values?: undefined): string;
    encodeFunctionData(functionFragment: 'returnOldDepositFor', values: [string]): string;
    encodeFunctionData(functionFragment: 'rollupDeploymentBlock', values?: undefined): string;
    encodeFunctionData(functionFragment: 'rollupEventInbox', values?: undefined): string;
    encodeFunctionData(functionFragment: 'sequencerInbox', values?: undefined): string;
    encodeFunctionData(functionFragment: 'stakeOnNewAssertion', values: [AssertionInputsStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: 'stakeToken', values?: undefined): string;
    encodeFunctionData(functionFragment: 'stakerCount', values?: undefined): string;
    encodeFunctionData(functionFragment: 'totalWithdrawableFunds', values?: undefined): string;
    encodeFunctionData(functionFragment: 'validateAssertionHash', values: [BytesLike, AssertionStateStruct, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: 'validateConfig', values: [BytesLike, ConfigDataStruct]): string;
    encodeFunctionData(functionFragment: 'validatorAfkBlocks', values?: undefined): string;
    encodeFunctionData(functionFragment: 'validatorWalletCreator', values?: undefined): string;
    encodeFunctionData(functionFragment: 'validatorWhitelistDisabled', values?: undefined): string;
    encodeFunctionData(functionFragment: 'wasmModuleRoot', values?: undefined): string;
    encodeFunctionData(functionFragment: 'withdrawStakerFunds', values?: undefined): string;
    encodeFunctionData(functionFragment: 'withdrawableFunds', values: [string]): string;
    encodeFunctionData(functionFragment: 'withdrawalAddress', values: [string]): string;
    decodeFunctionResult(functionFragment: '_stakerMap', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'addToDeposit', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'amountStaked', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'anyTrustFastConfirmer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'baseStake', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'bridge', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'chainId', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'challengeGracePeriodBlocks', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'challengeManager', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'computeAssertionHash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'confirmAssertion', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'confirmPeriodBlocks', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fastConfirmAssertion', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'fastConfirmNewAssertion', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'genesisAssertionHash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAssertion', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getAssertionCreationBlockForLogLookup', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getFirstChildCreationBlock', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getSecondChildCreationBlock', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getStaker', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getStakerAddress', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'getValidators', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'inbox', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isFirstChild', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isPending', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isStaked', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'isValidator', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'latestConfirmed', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'latestStakedAssertion', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'loserStakeEscrow', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'minimumAssertionPeriod', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'newStake', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'newStakeOnNewAssertion', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'outbox', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'proxiableUUID', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'reduceDeposit', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'removeWhitelistAfterFork', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'removeWhitelistAfterValidatorAfk', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'returnOldDeposit', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'returnOldDepositFor', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'rollupDeploymentBlock', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'rollupEventInbox', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'sequencerInbox', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'stakeOnNewAssertion', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'stakeToken', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'stakerCount', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'totalWithdrawableFunds', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'validateAssertionHash', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'validateConfig', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'validatorAfkBlocks', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'validatorWalletCreator', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'validatorWhitelistDisabled', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'wasmModuleRoot', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdrawStakerFunds', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdrawableFunds', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'withdrawalAddress', data: BytesLike): Result;
    events: {
        'AdminChanged(address,address)': EventFragment;
        'AssertionConfirmed(bytes32,bytes32,bytes32)': EventFragment;
        'AssertionCreated(bytes32,bytes32,tuple,bytes32,uint256,bytes32,uint256,address,uint64)': EventFragment;
        'BeaconUpgraded(address)': EventFragment;
        'Initialized(uint8)': EventFragment;
        'Paused(address)': EventFragment;
        'RollupChallengeStarted(uint64,address,address,uint64)': EventFragment;
        'RollupInitialized(bytes32,uint256)': EventFragment;
        'Unpaused(address)': EventFragment;
        'Upgraded(address)': EventFragment;
        'UpgradedSecondary(address)': EventFragment;
        'UserStakeUpdated(address,address,uint256,uint256)': EventFragment;
        'UserWithdrawableFundsUpdated(address,uint256,uint256)': EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: 'AdminChanged'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'AssertionConfirmed'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'AssertionCreated'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'BeaconUpgraded'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Initialized'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RollupChallengeStarted'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'RollupInitialized'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'Upgraded'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'UpgradedSecondary'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'UserStakeUpdated'): EventFragment;
    getEvent(nameOrSignatureOrTopic: 'UserWithdrawableFundsUpdated'): EventFragment;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], {
    previousAdmin: string;
    newAdmin: string;
}>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export type AssertionConfirmedEvent = TypedEvent<[
    string,
    string,
    string
], {
    assertionHash: string;
    blockHash: string;
    sendRoot: string;
}>;
export type AssertionConfirmedEventFilter = TypedEventFilter<AssertionConfirmedEvent>;
export type AssertionCreatedEvent = TypedEvent<[
    string,
    string,
    AssertionInputsStructOutput,
    string,
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber
], {
    assertionHash: string;
    parentAssertionHash: string;
    assertion: AssertionInputsStructOutput;
    afterInboxBatchAcc: string;
    inboxMaxCount: BigNumber;
    wasmModuleRoot: string;
    requiredStake: BigNumber;
    challengeManager: string;
    confirmPeriodBlocks: BigNumber;
}>;
export type AssertionCreatedEventFilter = TypedEventFilter<AssertionCreatedEvent>;
export type BeaconUpgradedEvent = TypedEvent<[string], {
    beacon: string;
}>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export type InitializedEvent = TypedEvent<[number], {
    version: number;
}>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export type RollupChallengeStartedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber
], {
    challengeIndex: BigNumber;
    asserter: string;
    challenger: string;
    challengedAssertion: BigNumber;
}>;
export type RollupChallengeStartedEventFilter = TypedEventFilter<RollupChallengeStartedEvent>;
export type RollupInitializedEvent = TypedEvent<[
    string,
    BigNumber
], {
    machineHash: string;
    chainId: BigNumber;
}>;
export type RollupInitializedEventFilter = TypedEventFilter<RollupInitializedEvent>;
export type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export type UpgradedEvent = TypedEvent<[string], {
    implementation: string;
}>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export type UpgradedSecondaryEvent = TypedEvent<[
    string
], {
    implementation: string;
}>;
export type UpgradedSecondaryEventFilter = TypedEventFilter<UpgradedSecondaryEvent>;
export type UserStakeUpdatedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], {
    user: string;
    withdrawalAddress: string;
    initialBalance: BigNumber;
    finalBalance: BigNumber;
}>;
export type UserStakeUpdatedEventFilter = TypedEventFilter<UserStakeUpdatedEvent>;
export type UserWithdrawableFundsUpdatedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    user: string;
    initialBalance: BigNumber;
    finalBalance: BigNumber;
}>;
export type UserWithdrawableFundsUpdatedEventFilter = TypedEventFilter<UserWithdrawableFundsUpdatedEvent>;
export interface BoldRollupUserLogic extends BaseContract {
    contractName: 'BoldRollupUserLogic';
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BoldRollupUserLogicInterface;
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
        _stakerMap(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            boolean,
            string
        ] & {
            amountStaked: BigNumber;
            latestStakedAssertion: string;
            index: BigNumber;
            isStaked: boolean;
            withdrawalAddress: string;
        }>;
        addToDeposit(stakerAddress: string, expectedWithdrawalAddress: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        amountStaked(staker: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        anyTrustFastConfirmer(overrides?: CallOverrides): Promise<[string]>;
        baseStake(overrides?: CallOverrides): Promise<[BigNumber]>;
        bridge(overrides?: CallOverrides): Promise<[string]>;
        chainId(overrides?: CallOverrides): Promise<[BigNumber]>;
        challengeGracePeriodBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        challengeManager(overrides?: CallOverrides): Promise<[string]>;
        computeAssertionHash(prevAssertionHash: BytesLike, state: AssertionStateStruct, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        confirmAssertion(assertionHash: BytesLike, prevAssertionHash: BytesLike, confirmState: AssertionStateStruct, winningEdgeId: BytesLike, prevConfig: ConfigDataStruct, inboxAcc: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        fastConfirmAssertion(assertionHash: BytesLike, parentAssertionHash: BytesLike, confirmState: AssertionStateStruct, inboxAcc: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fastConfirmNewAssertion(assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        genesisAssertionHash(overrides?: CallOverrides): Promise<[string]>;
        getAssertion(assertionHash: BytesLike, overrides?: CallOverrides): Promise<[AssertionNodeStructOutput]>;
        getAssertionCreationBlockForLogLookup(assertionHash: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getFirstChildCreationBlock(assertionHash: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getSecondChildCreationBlock(assertionHash: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<[IRollupCore.StakerStructOutput]>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getValidators(overrides?: CallOverrides): Promise<[string[]]>;
        inbox(overrides?: CallOverrides): Promise<[string]>;
        initialize(_stakeToken: string, overrides?: CallOverrides): Promise<[void]>;
        isFirstChild(assertionHash: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isPending(assertionHash: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<[boolean]>;
        isValidator(validator: string, overrides?: CallOverrides): Promise<[boolean]>;
        latestConfirmed(overrides?: CallOverrides): Promise<[string]>;
        latestStakedAssertion(staker: string, overrides?: CallOverrides): Promise<[string]>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<[string]>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
        newStake(tokenAmount: BigNumberish, _withdrawalAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'newStakeOnNewAssertion(uint256,((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32,address)'(tokenAmount: BigNumberish, assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, _withdrawalAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        'newStakeOnNewAssertion(uint256,((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32)'(tokenAmount: BigNumberish, assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        outbox(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        reduceDeposit(target: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeWhitelistAfterFork(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeWhitelistAfterValidatorAfk(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        returnOldDeposit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        returnOldDepositFor(stakerAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rollupDeploymentBlock(overrides?: CallOverrides): Promise<[BigNumber]>;
        rollupEventInbox(overrides?: CallOverrides): Promise<[string]>;
        sequencerInbox(overrides?: CallOverrides): Promise<[string]>;
        stakeOnNewAssertion(assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        stakeToken(overrides?: CallOverrides): Promise<[string]>;
        stakerCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalWithdrawableFunds(overrides?: CallOverrides): Promise<[BigNumber]>;
        validateAssertionHash(assertionHash: BytesLike, state: AssertionStateStruct, prevAssertionHash: BytesLike, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        validateConfig(assertionHash: BytesLike, configData: ConfigDataStruct, overrides?: CallOverrides): Promise<[void]>;
        validatorAfkBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<[string]>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<[boolean]>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<[string]>;
        withdrawStakerFunds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawableFunds(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawalAddress(staker: string, overrides?: CallOverrides): Promise<[string]>;
    };
    _stakerMap(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        BigNumber,
        boolean,
        string
    ] & {
        amountStaked: BigNumber;
        latestStakedAssertion: string;
        index: BigNumber;
        isStaked: boolean;
        withdrawalAddress: string;
    }>;
    addToDeposit(stakerAddress: string, expectedWithdrawalAddress: string, tokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
    anyTrustFastConfirmer(overrides?: CallOverrides): Promise<string>;
    baseStake(overrides?: CallOverrides): Promise<BigNumber>;
    bridge(overrides?: CallOverrides): Promise<string>;
    chainId(overrides?: CallOverrides): Promise<BigNumber>;
    challengeGracePeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    challengeManager(overrides?: CallOverrides): Promise<string>;
    computeAssertionHash(prevAssertionHash: BytesLike, state: AssertionStateStruct, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<string>;
    confirmAssertion(assertionHash: BytesLike, prevAssertionHash: BytesLike, confirmState: AssertionStateStruct, winningEdgeId: BytesLike, prevConfig: ConfigDataStruct, inboxAcc: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    confirmPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    fastConfirmAssertion(assertionHash: BytesLike, parentAssertionHash: BytesLike, confirmState: AssertionStateStruct, inboxAcc: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fastConfirmNewAssertion(assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    genesisAssertionHash(overrides?: CallOverrides): Promise<string>;
    getAssertion(assertionHash: BytesLike, overrides?: CallOverrides): Promise<AssertionNodeStructOutput>;
    getAssertionCreationBlockForLogLookup(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getFirstChildCreationBlock(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getSecondChildCreationBlock(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getStaker(staker: string, overrides?: CallOverrides): Promise<IRollupCore.StakerStructOutput>;
    getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getValidators(overrides?: CallOverrides): Promise<string[]>;
    inbox(overrides?: CallOverrides): Promise<string>;
    initialize(_stakeToken: string, overrides?: CallOverrides): Promise<void>;
    isFirstChild(assertionHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isPending(assertionHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    isStaked(staker: string, overrides?: CallOverrides): Promise<boolean>;
    isValidator(validator: string, overrides?: CallOverrides): Promise<boolean>;
    latestConfirmed(overrides?: CallOverrides): Promise<string>;
    latestStakedAssertion(staker: string, overrides?: CallOverrides): Promise<string>;
    loserStakeEscrow(overrides?: CallOverrides): Promise<string>;
    minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;
    newStake(tokenAmount: BigNumberish, _withdrawalAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'newStakeOnNewAssertion(uint256,((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32,address)'(tokenAmount: BigNumberish, assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, _withdrawalAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    'newStakeOnNewAssertion(uint256,((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32)'(tokenAmount: BigNumberish, assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    outbox(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    reduceDeposit(target: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeWhitelistAfterFork(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeWhitelistAfterValidatorAfk(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    returnOldDeposit(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    returnOldDepositFor(stakerAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rollupDeploymentBlock(overrides?: CallOverrides): Promise<BigNumber>;
    rollupEventInbox(overrides?: CallOverrides): Promise<string>;
    sequencerInbox(overrides?: CallOverrides): Promise<string>;
    stakeOnNewAssertion(assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    stakeToken(overrides?: CallOverrides): Promise<string>;
    stakerCount(overrides?: CallOverrides): Promise<BigNumber>;
    totalWithdrawableFunds(overrides?: CallOverrides): Promise<BigNumber>;
    validateAssertionHash(assertionHash: BytesLike, state: AssertionStateStruct, prevAssertionHash: BytesLike, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<void>;
    validateConfig(assertionHash: BytesLike, configData: ConfigDataStruct, overrides?: CallOverrides): Promise<void>;
    validatorAfkBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    validatorWalletCreator(overrides?: CallOverrides): Promise<string>;
    validatorWhitelistDisabled(overrides?: CallOverrides): Promise<boolean>;
    wasmModuleRoot(overrides?: CallOverrides): Promise<string>;
    withdrawStakerFunds(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawableFunds(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    withdrawalAddress(staker: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _stakerMap(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            boolean,
            string
        ] & {
            amountStaked: BigNumber;
            latestStakedAssertion: string;
            index: BigNumber;
            isStaked: boolean;
            withdrawalAddress: string;
        }>;
        addToDeposit(stakerAddress: string, expectedWithdrawalAddress: string, tokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        anyTrustFastConfirmer(overrides?: CallOverrides): Promise<string>;
        baseStake(overrides?: CallOverrides): Promise<BigNumber>;
        bridge(overrides?: CallOverrides): Promise<string>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        challengeGracePeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        challengeManager(overrides?: CallOverrides): Promise<string>;
        computeAssertionHash(prevAssertionHash: BytesLike, state: AssertionStateStruct, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<string>;
        confirmAssertion(assertionHash: BytesLike, prevAssertionHash: BytesLike, confirmState: AssertionStateStruct, winningEdgeId: BytesLike, prevConfig: ConfigDataStruct, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<void>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        fastConfirmAssertion(assertionHash: BytesLike, parentAssertionHash: BytesLike, confirmState: AssertionStateStruct, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<void>;
        fastConfirmNewAssertion(assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        genesisAssertionHash(overrides?: CallOverrides): Promise<string>;
        getAssertion(assertionHash: BytesLike, overrides?: CallOverrides): Promise<AssertionNodeStructOutput>;
        getAssertionCreationBlockForLogLookup(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getFirstChildCreationBlock(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getSecondChildCreationBlock(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<IRollupCore.StakerStructOutput>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getValidators(overrides?: CallOverrides): Promise<string[]>;
        inbox(overrides?: CallOverrides): Promise<string>;
        initialize(_stakeToken: string, overrides?: CallOverrides): Promise<void>;
        isFirstChild(assertionHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isPending(assertionHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<boolean>;
        isValidator(validator: string, overrides?: CallOverrides): Promise<boolean>;
        latestConfirmed(overrides?: CallOverrides): Promise<string>;
        latestStakedAssertion(staker: string, overrides?: CallOverrides): Promise<string>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<string>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        newStake(tokenAmount: BigNumberish, _withdrawalAddress: string, overrides?: CallOverrides): Promise<void>;
        'newStakeOnNewAssertion(uint256,((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32,address)'(tokenAmount: BigNumberish, assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, _withdrawalAddress: string, overrides?: CallOverrides): Promise<void>;
        'newStakeOnNewAssertion(uint256,((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32)'(tokenAmount: BigNumberish, assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        outbox(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        reduceDeposit(target: BigNumberish, overrides?: CallOverrides): Promise<void>;
        removeWhitelistAfterFork(overrides?: CallOverrides): Promise<void>;
        removeWhitelistAfterValidatorAfk(overrides?: CallOverrides): Promise<void>;
        returnOldDeposit(overrides?: CallOverrides): Promise<void>;
        returnOldDepositFor(stakerAddress: string, overrides?: CallOverrides): Promise<void>;
        rollupDeploymentBlock(overrides?: CallOverrides): Promise<BigNumber>;
        rollupEventInbox(overrides?: CallOverrides): Promise<string>;
        sequencerInbox(overrides?: CallOverrides): Promise<string>;
        stakeOnNewAssertion(assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        stakeToken(overrides?: CallOverrides): Promise<string>;
        stakerCount(overrides?: CallOverrides): Promise<BigNumber>;
        totalWithdrawableFunds(overrides?: CallOverrides): Promise<BigNumber>;
        validateAssertionHash(assertionHash: BytesLike, state: AssertionStateStruct, prevAssertionHash: BytesLike, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<void>;
        validateConfig(assertionHash: BytesLike, configData: ConfigDataStruct, overrides?: CallOverrides): Promise<void>;
        validatorAfkBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<string>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<boolean>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<string>;
        withdrawStakerFunds(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawableFunds(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawalAddress(staker: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        'AdminChanged(address,address)'(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        'AssertionConfirmed(bytes32,bytes32,bytes32)'(assertionHash?: BytesLike | null, blockHash?: null, sendRoot?: null): AssertionConfirmedEventFilter;
        AssertionConfirmed(assertionHash?: BytesLike | null, blockHash?: null, sendRoot?: null): AssertionConfirmedEventFilter;
        'AssertionCreated(bytes32,bytes32,tuple,bytes32,uint256,bytes32,uint256,address,uint64)'(assertionHash?: BytesLike | null, parentAssertionHash?: BytesLike | null, assertion?: null, afterInboxBatchAcc?: null, inboxMaxCount?: null, wasmModuleRoot?: null, requiredStake?: null, challengeManager?: null, confirmPeriodBlocks?: null): AssertionCreatedEventFilter;
        AssertionCreated(assertionHash?: BytesLike | null, parentAssertionHash?: BytesLike | null, assertion?: null, afterInboxBatchAcc?: null, inboxMaxCount?: null, wasmModuleRoot?: null, requiredStake?: null, challengeManager?: null, confirmPeriodBlocks?: null): AssertionCreatedEventFilter;
        'BeaconUpgraded(address)'(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        'Initialized(uint8)'(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        'Paused(address)'(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        'RollupChallengeStarted(uint64,address,address,uint64)'(challengeIndex?: BigNumberish | null, asserter?: null, challenger?: null, challengedAssertion?: null): RollupChallengeStartedEventFilter;
        RollupChallengeStarted(challengeIndex?: BigNumberish | null, asserter?: null, challenger?: null, challengedAssertion?: null): RollupChallengeStartedEventFilter;
        'RollupInitialized(bytes32,uint256)'(machineHash?: null, chainId?: null): RollupInitializedEventFilter;
        RollupInitialized(machineHash?: null, chainId?: null): RollupInitializedEventFilter;
        'Unpaused(address)'(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
        'Upgraded(address)'(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
        'UpgradedSecondary(address)'(implementation?: string | null): UpgradedSecondaryEventFilter;
        UpgradedSecondary(implementation?: string | null): UpgradedSecondaryEventFilter;
        'UserStakeUpdated(address,address,uint256,uint256)'(user?: string | null, withdrawalAddress?: string | null, initialBalance?: null, finalBalance?: null): UserStakeUpdatedEventFilter;
        UserStakeUpdated(user?: string | null, withdrawalAddress?: string | null, initialBalance?: null, finalBalance?: null): UserStakeUpdatedEventFilter;
        'UserWithdrawableFundsUpdated(address,uint256,uint256)'(user?: string | null, initialBalance?: null, finalBalance?: null): UserWithdrawableFundsUpdatedEventFilter;
        UserWithdrawableFundsUpdated(user?: string | null, initialBalance?: null, finalBalance?: null): UserWithdrawableFundsUpdatedEventFilter;
    };
    estimateGas: {
        _stakerMap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        addToDeposit(stakerAddress: string, expectedWithdrawalAddress: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        amountStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        anyTrustFastConfirmer(overrides?: CallOverrides): Promise<BigNumber>;
        baseStake(overrides?: CallOverrides): Promise<BigNumber>;
        bridge(overrides?: CallOverrides): Promise<BigNumber>;
        chainId(overrides?: CallOverrides): Promise<BigNumber>;
        challengeGracePeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        challengeManager(overrides?: CallOverrides): Promise<BigNumber>;
        computeAssertionHash(prevAssertionHash: BytesLike, state: AssertionStateStruct, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        confirmAssertion(assertionHash: BytesLike, prevAssertionHash: BytesLike, confirmState: AssertionStateStruct, winningEdgeId: BytesLike, prevConfig: ConfigDataStruct, inboxAcc: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        fastConfirmAssertion(assertionHash: BytesLike, parentAssertionHash: BytesLike, confirmState: AssertionStateStruct, inboxAcc: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fastConfirmNewAssertion(assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        genesisAssertionHash(overrides?: CallOverrides): Promise<BigNumber>;
        getAssertion(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAssertionCreationBlockForLogLookup(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getFirstChildCreationBlock(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getSecondChildCreationBlock(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getValidators(overrides?: CallOverrides): Promise<BigNumber>;
        inbox(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_stakeToken: string, overrides?: CallOverrides): Promise<BigNumber>;
        isFirstChild(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isPending(assertionHash: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        isValidator(validator: string, overrides?: CallOverrides): Promise<BigNumber>;
        latestConfirmed(overrides?: CallOverrides): Promise<BigNumber>;
        latestStakedAssertion(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<BigNumber>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;
        newStake(tokenAmount: BigNumberish, _withdrawalAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'newStakeOnNewAssertion(uint256,((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32,address)'(tokenAmount: BigNumberish, assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, _withdrawalAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        'newStakeOnNewAssertion(uint256,((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32)'(tokenAmount: BigNumberish, assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        outbox(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        reduceDeposit(target: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeWhitelistAfterFork(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeWhitelistAfterValidatorAfk(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        returnOldDeposit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        returnOldDepositFor(stakerAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rollupDeploymentBlock(overrides?: CallOverrides): Promise<BigNumber>;
        rollupEventInbox(overrides?: CallOverrides): Promise<BigNumber>;
        sequencerInbox(overrides?: CallOverrides): Promise<BigNumber>;
        stakeOnNewAssertion(assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        stakeToken(overrides?: CallOverrides): Promise<BigNumber>;
        stakerCount(overrides?: CallOverrides): Promise<BigNumber>;
        totalWithdrawableFunds(overrides?: CallOverrides): Promise<BigNumber>;
        validateAssertionHash(assertionHash: BytesLike, state: AssertionStateStruct, prevAssertionHash: BytesLike, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        validateConfig(assertionHash: BytesLike, configData: ConfigDataStruct, overrides?: CallOverrides): Promise<BigNumber>;
        validatorAfkBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<BigNumber>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<BigNumber>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawStakerFunds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawableFunds(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawalAddress(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _stakerMap(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addToDeposit(stakerAddress: string, expectedWithdrawalAddress: string, tokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        amountStaked(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        anyTrustFastConfirmer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        baseStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bridge(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        challengeGracePeriodBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        challengeManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        computeAssertionHash(prevAssertionHash: BytesLike, state: AssertionStateStruct, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        confirmAssertion(assertionHash: BytesLike, prevAssertionHash: BytesLike, confirmState: AssertionStateStruct, winningEdgeId: BytesLike, prevConfig: ConfigDataStruct, inboxAcc: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        confirmPeriodBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fastConfirmAssertion(assertionHash: BytesLike, parentAssertionHash: BytesLike, confirmState: AssertionStateStruct, inboxAcc: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fastConfirmNewAssertion(assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        genesisAssertionHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssertion(assertionHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssertionCreationBlockForLogLookup(assertionHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFirstChildCreationBlock(assertionHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSecondChildCreationBlock(assertionHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStaker(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getStakerAddress(stakerNum: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getValidators(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_stakeToken: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isFirstChild(assertionHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPending(assertionHash: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isStaked(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidator(validator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestConfirmed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestStakedAssertion(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        loserStakeEscrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minimumAssertionPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        newStake(tokenAmount: BigNumberish, _withdrawalAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'newStakeOnNewAssertion(uint256,((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32,address)'(tokenAmount: BigNumberish, assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, _withdrawalAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        'newStakeOnNewAssertion(uint256,((bytes32,bytes32,(bytes32,uint256,address,uint64,uint64)),((bytes32[2],uint64[2]),uint8,bytes32),((bytes32[2],uint64[2]),uint8,bytes32)),bytes32)'(tokenAmount: BigNumberish, assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        outbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reduceDeposit(target: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeWhitelistAfterFork(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeWhitelistAfterValidatorAfk(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        returnOldDeposit(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        returnOldDepositFor(stakerAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rollupDeploymentBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rollupEventInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        sequencerInbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakeOnNewAssertion(assertion: AssertionInputsStruct, expectedAssertionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        stakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakerCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalWithdrawableFunds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateAssertionHash(assertionHash: BytesLike, state: AssertionStateStruct, prevAssertionHash: BytesLike, inboxAcc: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateConfig(assertionHash: BytesLike, configData: ConfigDataStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorAfkBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorWhitelistDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wasmModuleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawStakerFunds(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawableFunds(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawalAddress(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
