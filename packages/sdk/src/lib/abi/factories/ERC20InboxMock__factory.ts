/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC20InboxMock,
  ERC20InboxMockInterface,
} from "../ERC20InboxMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "l2CallValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxGas",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenTotalFeeAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ERC20InboxRetryableTicket",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxGas",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "InboxRetryableTicket",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "excessFeeRefundAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "callValueRefundAddress",
        type: "address",
      },
    ],
    name: "RefundAddresses",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
    ],
    name: "TicketData",
    type: "event",
  },
  {
    inputs: [],
    name: "activeOutbox",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bridge",
    outputs: [
      {
        internalType: "contract IBridge",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "l2CallValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSubmissionCost",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "excessFeeRefundAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "callValueRefundAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxFeePerGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenTotalFeeAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "createRetryableTicket",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "l2ToL1Sender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l2ToL1SenderMock",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nativeToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "seqNum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "setL2ToL1Sender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_nativeToken",
        type: "address",
      },
    ],
    name: "setMockNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600080546001600160a01b031916815560015534801561002357600080fd5b506105f5806100336000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806311b383ac146100885780632ab0188d146100ba578063549e8426146100ea57806380648b021461010b578063ab5d89431461011c578063c3de58c514610122578063c3ea457a1461012b578063e1758bd81461015b578063e78cea921461011c575b600080fd5b6100b86100963660046103bd565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b005b6000546100cd906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100fd6100f83660046103df565b61016e565b6040519081526020016100e1565b6000546001600160a01b03166100cd565b306100cd565b6100fd60015481565b6100b86101393660046103bd565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6002546100cd906001600160a01b031681565b600061017a85876104cb565b6101848b8b6104ea565b61018e91906104ea565b8410156101d55760405162461bcd60e51b815260206004820152601160248201527057524f4e475f544f4b454e5f56414c554560781b604482015260640160405180910390fd5b6040518981527f7efacbad201ebbc50ec0ce4b474c54b735a31b1bac996acff50df7de0314e8f99060200160405180910390a1604080516001600160a01b03808b168252891660208201527f70b37e3cd4440bad0fef84e97b8196e82fe9a1ba044f099cbac6cd7f79e8702f910160405180910390a17f4fa897d90c3f92ce45c5813070a53ce175b12d0521a8350113c1fc641ee8876f338c8c8989898989604051610288989796959493929190610503565b60405180910390a16002546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa1580156102d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fd919061056b565b9050801561037d5760025460405163a9059cbb60e01b815260016004820152602481018390526001600160a01b039091169063a9059cbb906044016020604051808303816000875af1158015610357573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037b9190610584565b505b6001805490600061038d836105a6565b909155509c9b505050505050505050505050565b80356001600160a01b03811681146103b857600080fd5b919050565b6000602082840312156103cf57600080fd5b6103d8826103a1565b9392505050565b6000806000806000806000806000806101208b8d0312156103ff57600080fd5b6104088b6103a1565b995060208b0135985060408b0135975061042460608c016103a1565b965061043260808c016103a1565b955060a08b0135945060c08b0135935060e08b013592506101008b013567ffffffffffffffff8082111561046557600080fd5b818d0191508d601f83011261047957600080fd5b81358181111561048857600080fd5b8e602082850101111561049a57600080fd5b6020830194508093505050509295989b9194979a5092959850565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156104e5576104e56104b5565b500290565b808201808211156104fd576104fd6104b5565b92915050565b600060018060a01b03808b168352808a166020840152508760408301528660608301528560808301528460a083015260e060c08301528260e08301526101008385828501376000838501820152601f909301601f191690910190910198975050505050505050565b60006020828403121561057d57600080fd5b5051919050565b60006020828403121561059657600080fd5b815180151581146103d857600080fd5b6000600182016105b8576105b86104b5565b506001019056fea26469706673582212203c924373429488a002591f9ed8218b69841cf53d93f03f38c357cea3538c439d64736f6c63430008100033";

type ERC20InboxMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20InboxMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20InboxMock__factory extends ContractFactory {
  constructor(...args: ERC20InboxMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20InboxMock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20InboxMock> {
    return super.deploy(overrides || {}) as Promise<ERC20InboxMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20InboxMock {
    return super.attach(address) as ERC20InboxMock;
  }
  connect(signer: Signer): ERC20InboxMock__factory {
    return super.connect(signer) as ERC20InboxMock__factory;
  }
  static readonly contractName: "ERC20InboxMock";
  public readonly contractName: "ERC20InboxMock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20InboxMockInterface {
    return new utils.Interface(_abi) as ERC20InboxMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20InboxMock {
    return new Contract(address, _abi, signerOrProvider) as ERC20InboxMock;
  }
}
