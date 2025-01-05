/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AddressMappingTest,
  AddressMappingTestInterface,
} from "../AddressMappingTest";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "TxToL1",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "getL1AddressTest",
    outputs: [
      {
        internalType: "address",
        name: "l1Address",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060c78061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063dac3dea914602d575b600080fd5b604760383660046063565b61111061111160901b01190190565b6040516001600160a01b03909116815260200160405180910390f35b600060208284031215607457600080fd5b81356001600160a01b0381168114608a57600080fd5b939250505056fea26469706673582212207f4ba200c3bf493bad903c37c302d4ee944fdf05b387adcaeaed4692f9977c9264736f6c63430008100033";

type AddressMappingTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressMappingTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddressMappingTest__factory extends ContractFactory {
  constructor(...args: AddressMappingTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AddressMappingTest";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AddressMappingTest> {
    return super.deploy(overrides || {}) as Promise<AddressMappingTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AddressMappingTest {
    return super.attach(address) as AddressMappingTest;
  }
  connect(signer: Signer): AddressMappingTest__factory {
    return super.connect(signer) as AddressMappingTest__factory;
  }
  static readonly contractName: "AddressMappingTest";
  public readonly contractName: "AddressMappingTest";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressMappingTestInterface {
    return new utils.Interface(_abi) as AddressMappingTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AddressMappingTest {
    return new Contract(address, _abi, signerOrProvider) as AddressMappingTest;
  }
}
