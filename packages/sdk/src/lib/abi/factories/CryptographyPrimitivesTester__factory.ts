/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CryptographyPrimitivesTester,
  CryptographyPrimitivesTesterInterface,
} from "../CryptographyPrimitivesTester";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[25]",
        name: "input",
        type: "uint256[25]",
      },
    ],
    name: "keccakF",
    outputs: [
      {
        internalType: "uint256[25]",
        name: "",
        type: "uint256[25]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[2]",
        name: "inputChunk",
        type: "bytes32[2]",
      },
      {
        internalType: "bytes32",
        name: "hashState",
        type: "bytes32",
      },
    ],
    name: "sha256Block",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6116e861003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063ac90ed4614610045578063e479f5321461006e575b600080fd5b610058610053366004611503565b61008f565b604051610065919061158f565b60405180910390f35b61008161007c3660046115c1565b6100a6565b604051908152602001610065565b610097611488565b6100a0826100e9565b92915050565b60006100e26040518060400160405280856000600281106100c9576100c9611653565b6020908102919091015182528681015191015283610ce3565b9392505050565b6100f1611488565b6100f96114a7565b6101016114a7565b610109611488565b600060405180610300016040528060018152602001618082815260200167800000000000808a8152602001678000000080008000815260200161808b81526020016380000001815260200167800000008000808181526020016780000000000080098152602001608a81526020016088815260200163800080098152602001638000000a8152602001638000808b815260200167800000000000008b8152602001678000000000008089815260200167800000000000800381526020016780000000000080028152602001678000000000000080815260200161800a815260200167800000008000000a81526020016780000000800080818152602001678000000000008080815260200163800000018152602001678000000080008008815250905060005b6018811015610cd8576080878101516060808a01516040808c01516020808e01518e511890911890921890931889526101208b01516101008c015160e08d015160c08e015160a08f0151181818189089018190526101c08b01516101a08c01516101808d01516101608e01516101408f0151181818189289019283526102608b01516102408c01516102208d01516102008e01516101e08f015118181818918901919091526103008a01516102e08b01516102c08c01516102a08d01516102808e0151181818189288018390526001600160401b0360028202166001603f1b91829004179092188652510485600260200201516002026001600160401b03161785600060200201511884600160200201526001603f1b85600360200201518161035a5761035a611669565b0485600360200201516002026001600160401b03161785600160200201511884600260200201526001603f1b85600460200201518161039b5761039b611669565b0485600460200201516002026001600160401b031617856002600581106103c4576103c4611653565b602002015118606085015284516001603f1b9086516060808901519390920460029091026001600160401b031617909118608086810191825286518a5118808b5287516020808d018051909218825289516040808f0180519092189091528a518e8801805190911890528a51948e0180519095189094528901805160a08e0180519091189052805160c08e0180519091189052805160e08e018051909118905280516101008e0180519091189052516101208d018051909118905291880180516101408d018051909118905280516101608d018051909118905280516101808d018051909118905280516101a08d0180519091189052516101c08c018051909118905292870180516101e08c018051909118905280516102008c018051909118905280516102208c018051909118905280516102408c0180519091189052516102608b018051909118905281516102808b018051909118905281516102a08b018051909118905281516102c08b018051909118905281516102e08b018051909118905290516103008a01805190911890529084525163100000009060208901516001600160401b03641000000000909102169190041761010084015260408701516001603d1b9060408901516001600160401b03600890910216919004176101608401526060870151628000009060608901516001600160401b036502000000000090910216919004176102608401526080870151654000000000009060808901516001600160401b036204000090910216919004176102c084015260a08701516001603f1b900487600560200201516002026001600160401b0316178360026019811061063457610634611653565b602002015260c08701516210000081046001602c1b9091026001600160401b039081169190911760a085015260e0880151664000000000000081046104009091028216176101a08501526101008801516208000081046520000000000090910282161761020085015261012088015160048082029092166001603e1b909104176103008501526101408801516101408901516001600160401b036001603e1b909102169190041760808401526101608701516001603a1b906101608901516001600160401b036040909102169190041760e084015261018087015162200000906101808901516001600160401b036001602b1b90910216919004176101408401526101a08701516602000000000000906101a08901516001600160401b0361800090910216919004176102408401526101c08701516008906101c08901516001600160401b036001603d1b90910216919004176102a08401526101e0870151641000000000906101e08901516001600160401b03631000000090910216919004176020840152610200808801516102008901516001600160401b0366800000000000009091021691900417610120840152610220870151648000000000906102208901516001600160401b03630200000090910216919004176101808401526102408701516001602b1b906102408901516001600160401b036220000090910216919004176101e0840152610260870151610100906102608901516001600160401b03600160381b90910216919004176102e0840152610280870151642000000000906102808901516001600160401b036308000000909102169190041760608401526102a08701516001602c1b906102a08901516001600160401b0362100000909102169190041760c08401526102c08701516302000000906102c08901516001600160401b0364800000000090910216919004176101c08401526102e0870151600160381b906102e08901516001600160401b036101009091021691900417610220840152610300870151660400000000000090048760186020020151614000026001600160401b031617836014602002015282600a602002015183600560200201511916836000602002015118876000602002015282600b602002015183600660200201511916836001602002015118876001602002015282600c602002015183600760200201511916836002602002015118876002602002015282600d602002015183600860200201511916836003602002015118876003602002015282600e602002015183600960200201511916836004602002015118876004602002015282600f602002015183600a602002015119168360056020020151188760056020020152826010602002015183600b602002015119168360066020020151188760066020020152826011602002015183600c602002015119168360076020020151188760076020020152826012602002015183600d602002015119168360086020020151188760086020020152826013602002015183600e602002015119168360096020020151188760096020020152826014602002015183600f6020020151191683600a60200201511887600a602002015282601560200201518360106020020151191683600b60200201511887600b602002015282601660200201518360116020020151191683600c60200201511887600c602002015282601760200201518360126020020151191683600d60200201511887600d602002015282601860200201518360136020020151191683600e60200201511887600e602002015282600060200201518360146020020151191683600f60200201511887600f6020020152826001602002015183601560200201511916836010602002015118876010602002015282600260200201518360166020020151191683601160200201511887601160200201528260036020020151836017602002015119168360126020020151188760126020020152826004602002015183601860200201511916836013602002015118876013602002015282600560200201518360006020020151191683601460200201511887601460200201528260066020020151836001602002015119168360156020020151188760156020020152826007602002015183600260200201511916836016602002015118876016602002015282600860200201518360036020020151191683601760200201511887601760200201528260096020020151836004602002015119168360186020020151188760186020020152818160188110610cc657610cc6611653565b6020020151875118875260010161022f565b509495945050505050565b604080516108008101825263428a2f9881526371374491602082015263b5c0fbcf9181019190915263e9b5dba56060820152633956c25b60808201526359f111f160a082015263923f82a460c082015263ab1c5ed560e082015263d807aa986101008201526312835b0161012082015263243185be61014082015263550c7dc36101608201526372be5d746101808201526380deb1fe6101a0820152639bdc06a76101c082015263c19bf1746101e082015263e49b69c161020082015263efbe4786610220820152630fc19dc661024082015263240ca1cc610260820152632de92c6f610280820152634a7484aa6102a0820152635cb0a9dc6102c08201526376f988da6102e082015263983e515261030082015263a831c66d61032082015263b00327c861034082015263bf597fc761036082015263c6e00bf361038082015263d5a791476103a08201526306ca63516103c082015263142929676103e08201526327b70a85610400820152632e1b2138610420820152634d2c6dfc6104408201526353380d1361046082015263650a735461048082015263766a0abb6104a08201526381c2c92e6104c08201526392722c856104e082015263a2bfe8a161050082015263a81a664b61052082015263c24b8b7061054082015263c76c51a361056082015263d192e81961058082015263d69906246105a082015263f40e35856105c082015263106aa0706105e08201526319a4c116610600820152631e376c08610620820152632748774c6106408201526334b0bcb561066082015263391c0cb3610680820152634ed8aa4a6106a0820152635b9cca4f6106c082015263682e6ff36106e082015263748f82ee6107008201526378a5636f6107208201526384c87814610740820152638cc702086107608201526390befffa61078082015263a4506ceb6107a082015263bef9a3f76107c082015263c67178f26107e0820152600090610fb06114c5565b60005b60088163ffffffff1610156110495763ffffffff6020820260e003168660006020020151901c828263ffffffff1660408110610ff157610ff1611653565b63ffffffff92831660209182029290920191909152820260e003168660016020020151901c828260080163ffffffff166040811061103157611031611653565b63ffffffff9092166020929092020152600101610fb3565b5060106000805b60408363ffffffff1610156111db57600384600f850363ffffffff166040811061107c5761107c611653565b602002015163ffffffff16901c6110b385600f860363ffffffff16604081106110a7576110a7611653565b60200201516012611453565b6110dd86600f870363ffffffff16604081106110d1576110d1611653565b60200201516007611453565b18189150600a846002850363ffffffff16604081106110fe576110fe611653565b602002015163ffffffff16901c611135856002860363ffffffff166040811061112957611129611653565b60200201516013611453565b61115f866002870363ffffffff166040811061115357611153611653565b60200201516011611453565b1818905080846007850363ffffffff166040811061117f5761117f611653565b602002015183866010870363ffffffff16604081106111a0576111a0611653565b6020020151010101848463ffffffff16604081106111c0576111c0611653565b63ffffffff9092166020929092020152600190920191611050565b6111e36114e4565b600093505b60088463ffffffff16101561123a578360200260e00363ffffffff1688901c818563ffffffff166008811061121f5761121f611653565b63ffffffff90921660209290920201526001909301926111e8565b60008060008096505b60408763ffffffff161015611396576080840151611262906019611453565b608085015161127290600b611453565b6080860151611282906006611453565b18189450878763ffffffff166040811061129e5761129e611653565b6020020151898863ffffffff16604081106112bb576112bb611653565b6020020151608086015160a087015160c08801518219169116188787600760200201510101010192506112f684600060200201516016611453565b845161130390600d611453565b8551611310906002611453565b6040870180516020890180518a5160c08c01805163ffffffff90811660e08f015260a08e018051821690925260808e018051821690925260608e0180518e01821690925280861690915280831690955284811690925280831891909116911618929091189290921881810186810190931687526001999099019897509092509050611243565b600096505b60088763ffffffff1610156113f0578660200260e00363ffffffff168b901c848863ffffffff16600881106113d2576113d2611653565b60200201805163ffffffff920191909116905260019096019561139b565b60008097505b60088863ffffffff161015611443578760200260e00363ffffffff16858963ffffffff166008811061142a5761142a611653565b602002015160019099019863ffffffff16901b176113f6565b9c9b505050505050505050505050565b600061146082602061167f565b63ffffffff168363ffffffff16901b8263ffffffff168463ffffffff16901c17905092915050565b6040518061032001604052806019906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b6040518061080001604052806040906020820280368337509192915050565b6040518061010001604052806008906020820280368337509192915050565b600061032080838503121561151757600080fd5b83601f84011261152657600080fd5b6040518181018181106001600160401b038211171561155557634e487b7160e01b600052604160045260246000fd5b60405290830190808583111561156a57600080fd5b845b8381101561158457803582526020918201910161156c565b509095945050505050565b6103208101818360005b60198110156115b8578151835260209283019290910190600101611599565b50505092915050565b600080606083850312156115d457600080fd5b83601f8401126115e357600080fd5b604051604081018181106001600160401b038211171561161357634e487b7160e01b600052604160045260246000fd5b806040525080604085018681111561162a57600080fd5b855b8181101561164457803583526020928301920161162c565b50919691359550909350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600063ffffffff838116908316818110156116aa57634e487b7160e01b600052601160045260246000fd5b03939250505056fea264697066735822122079db04e60449ed09bb6c0649b9629678bc5b45a89ed9095af66d3cf29bbf98fe64736f6c63430008090033";

type CryptographyPrimitivesTesterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CryptographyPrimitivesTesterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CryptographyPrimitivesTester__factory extends ContractFactory {
  constructor(...args: CryptographyPrimitivesTesterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "CryptographyPrimitivesTester";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CryptographyPrimitivesTester> {
    return super.deploy(
      overrides || {}
    ) as Promise<CryptographyPrimitivesTester>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CryptographyPrimitivesTester {
    return super.attach(address) as CryptographyPrimitivesTester;
  }
  connect(signer: Signer): CryptographyPrimitivesTester__factory {
    return super.connect(signer) as CryptographyPrimitivesTester__factory;
  }
  static readonly contractName: "CryptographyPrimitivesTester";
  public readonly contractName: "CryptographyPrimitivesTester";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CryptographyPrimitivesTesterInterface {
    return new utils.Interface(_abi) as CryptographyPrimitivesTesterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CryptographyPrimitivesTester {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CryptographyPrimitivesTester;
  }
}
