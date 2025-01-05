/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IL1Teleporter, IL1TeleporterInterface } from "../IL1Teleporter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "provided",
        type: "uint256",
      },
    ],
    name: "IncorrectValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "provided",
        type: "uint256",
      },
    ],
    name: "InsufficientFeeToken",
    type: "error",
  },
  {
    inputs: [],
    name: "NonZeroFeeTokenAmount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "l1Token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "l3FeeTokenL1Addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "l1l2Router",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "l2l3RouterOrInbox",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Teleported",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "l1Token",
            type: "address",
          },
          {
            internalType: "address",
            name: "l3FeeTokenL1Addr",
            type: "address",
          },
          {
            internalType: "address",
            name: "l1l2Router",
            type: "address",
          },
          {
            internalType: "address",
            name: "l2l3RouterOrInbox",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "l2GasPriceBid",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l3GasPriceBid",
                type: "uint256",
              },
              {
                internalType: "uint64",
                name: "l2ForwarderFactoryGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "l1l2FeeTokenBridgeGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "l1l2TokenBridgeGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "l2l3TokenBridgeGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint256",
                name: "l2ForwarderFactoryMaxSubmissionCost",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l1l2FeeTokenBridgeMaxSubmissionCost",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l1l2TokenBridgeMaxSubmissionCost",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l2l3TokenBridgeMaxSubmissionCost",
                type: "uint256",
              },
            ],
            internalType: "struct IL1Teleporter.RetryableGasParams",
            name: "gasParams",
            type: "tuple",
          },
        ],
        internalType: "struct IL1Teleporter.TeleportParams",
        name: "params",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "buildL2ForwarderParams",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "l2Token",
            type: "address",
          },
          {
            internalType: "address",
            name: "l3FeeTokenL2Addr",
            type: "address",
          },
          {
            internalType: "address",
            name: "routerOrInbox",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gasPriceBid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxSubmissionCost",
            type: "uint256",
          },
        ],
        internalType: "struct IL2Forwarder.L2ForwarderParams",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "l1Token",
            type: "address",
          },
          {
            internalType: "address",
            name: "l3FeeTokenL1Addr",
            type: "address",
          },
          {
            internalType: "address",
            name: "l1l2Router",
            type: "address",
          },
          {
            internalType: "address",
            name: "l2l3RouterOrInbox",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "l2GasPriceBid",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l3GasPriceBid",
                type: "uint256",
              },
              {
                internalType: "uint64",
                name: "l2ForwarderFactoryGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "l1l2FeeTokenBridgeGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "l1l2TokenBridgeGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "l2l3TokenBridgeGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint256",
                name: "l2ForwarderFactoryMaxSubmissionCost",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l1l2FeeTokenBridgeMaxSubmissionCost",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l1l2TokenBridgeMaxSubmissionCost",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l2l3TokenBridgeMaxSubmissionCost",
                type: "uint256",
              },
            ],
            internalType: "struct IL1Teleporter.RetryableGasParams",
            name: "gasParams",
            type: "tuple",
          },
        ],
        internalType: "struct IL1Teleporter.TeleportParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "determineTypeAndFees",
    outputs: [
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeTokenAmount",
        type: "uint256",
      },
      {
        internalType: "enum TeleportationType",
        name: "teleportationType",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "l1l2FeeTokenBridgeCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "l1l2TokenBridgeCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "l2ForwarderFactoryCost",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "l2l3TokenBridgeCost",
            type: "uint256",
          },
        ],
        internalType: "struct IL1Teleporter.RetryableGasCosts",
        name: "costs",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "routerOrInbox",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "l2ForwarderAddress",
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
    name: "l2ForwarderFactory",
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
    name: "l2ForwarderImplementation",
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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "l1Token",
            type: "address",
          },
          {
            internalType: "address",
            name: "l3FeeTokenL1Addr",
            type: "address",
          },
          {
            internalType: "address",
            name: "l1l2Router",
            type: "address",
          },
          {
            internalType: "address",
            name: "l2l3RouterOrInbox",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "l2GasPriceBid",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l3GasPriceBid",
                type: "uint256",
              },
              {
                internalType: "uint64",
                name: "l2ForwarderFactoryGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "l1l2FeeTokenBridgeGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "l1l2TokenBridgeGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "l2l3TokenBridgeGasLimit",
                type: "uint64",
              },
              {
                internalType: "uint256",
                name: "l2ForwarderFactoryMaxSubmissionCost",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l1l2FeeTokenBridgeMaxSubmissionCost",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l1l2TokenBridgeMaxSubmissionCost",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "l2l3TokenBridgeMaxSubmissionCost",
                type: "uint256",
              },
            ],
            internalType: "struct IL1Teleporter.RetryableGasParams",
            name: "gasParams",
            type: "tuple",
          },
        ],
        internalType: "struct IL1Teleporter.TeleportParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "teleport",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IL1Teleporter__factory {
  static readonly abi = _abi;
  static createInterface(): IL1TeleporterInterface {
    return new utils.Interface(_abi) as IL1TeleporterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IL1Teleporter {
    return new Contract(address, _abi, signerOrProvider) as IL1Teleporter;
  }
}
