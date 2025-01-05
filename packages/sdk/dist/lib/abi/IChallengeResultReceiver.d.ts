import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IChallengeResultReceiverInterface extends utils.Interface {
    contractName: "IChallengeResultReceiver";
    functions: {
        "completeChallenge(uint256,address,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "completeChallenge", values: [BigNumberish, string, string]): string;
    decodeFunctionResult(functionFragment: "completeChallenge", data: BytesLike): Result;
    events: {};
}
export interface IChallengeResultReceiver extends BaseContract {
    contractName: "IChallengeResultReceiver";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IChallengeResultReceiverInterface;
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
        completeChallenge(challengeIndex: BigNumberish, winner: string, loser: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    completeChallenge(challengeIndex: BigNumberish, winner: string, loser: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        completeChallenge(challengeIndex: BigNumberish, winner: string, loser: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        completeChallenge(challengeIndex: BigNumberish, winner: string, loser: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        completeChallenge(challengeIndex: BigNumberish, winner: string, loser: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
