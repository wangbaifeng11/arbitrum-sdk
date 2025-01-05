import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DeployHelper, DeployHelperInterface } from "../DeployHelper";
type DeployHelperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DeployHelper__factory extends ContractFactory {
    constructor(...args: DeployHelperConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DeployHelper>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DeployHelper;
    connect(signer: Signer): DeployHelper__factory;
    static readonly contractName: "DeployHelper";
    readonly contractName: "DeployHelper";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061163a806100206000396000f3fe6080604052600436106100bd5760003560e01c80639ed2c6f01161006f5780639ed2c6f0146101bd578063acd7d02a146101d8578063d3a3faab146101f8578063d7c641e714610220578063db633c3e14610235578063dd0c625a14610142578063ef77e71a1461025157600080fd5b80631b9a680c146100c2578063290302ce146100ed5780632e7966411461012d5780634367d6521461014257806355e34a6b1461016b57806375ae22b51461019357806389cf8ae6146101a8575b600080fd5b3480156100ce57600080fd5b506100d7610279565b6040516100e491906107ef565b60405180910390f35b3480156100f957600080fd5b5061011573a990077c3205cbdf861e17fa532eeb069ce9ff9681565b6040516001600160a01b0390911681526020016100e4565b34801561013957600080fd5b506100d7610295565b34801561014e57600080fd5b5061015d662386f26fc1000081565b6040519081526020016100e4565b34801561017757600080fd5b5061011573bb6e024b9cffacb947a71991e386681b1cd1477d81565b34801561019f57600080fd5b506100d76102b4565b3480156101b457600080fd5b506100d76102d0565b3480156101c957600080fd5b5061015d6657c084e5f3c00081565b3480156101e457600080fd5b5061015d6101f336600461085c565b6102ef565b34801561020457600080fd5b50610115734c8d290a1b368ac4728d83a9e8321fc3af2b39b181565b61023361022e366004610888565b6103dd565b005b34801561024157600080fd5b5061015d67011c37937e08000081565b34801561025d57600080fd5b50610115733fab184622dc19b6109349b94811493bf2a4536281565b6040518060e0016040528060a8815260200161155d60a8913981565b60405180610a600160405280610a3c8152602001610930610a3c913981565b6040518060c001604052806081815260200161136c6081913981565b604051806101a0016040528061017081526020016113ed610170913981565b60405163a66b327d60e01b81526000600482018190524860248301529081906001600160a01b0385169063a66b327d9060440160206040518083038186803b15801561033a57600080fd5b505afa15801561034e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037291906108c9565b9050610380836152086108f8565b61038a9082610917565b6103959060046108f8565b67011c37937e080000662386f26fc100006103b76657c084e5f3c00082610917565b6103c19190610917565b6103cb9190610917565b6103d59190610917565b949350505050565b6000806001600160a01b0316836001600160a01b03161415905061043884662386f26fc10000733fab184622dc19b6109349b94811493bf2a453626040518060e0016040528060a8815260200161155d60a89139858761053b565b61047c846657c084e5f3c00073bb6e024b9cffacb947a71991e386681b1cd1477d604051806101a0016040528061017081526020016113ed6101709139858761053b565b6104bd84662386f26fc10000734c8d290a1b368ac4728d83a9e8321fc3af2b39b16040518060c001604052806081815260200161136c60819139858761053b565b6105028467011c37937e08000073a990077c3205cbdf861e17fa532eeb069ce9ff9660405180610a600160405280610a3c8152602001610930610a3c9139858761053b565b806105355760405133904780156108fc02916000818181858888f19350505050158015610533573d6000803e3d6000fd5b505b50505050565b60405163a66b327d60e01b8152600060048201819052486024830152906001600160a01b0388169063a66b327d9060440160206040518083038186803b15801561058457600080fd5b505afa158015610598573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105bc91906108c9565b905060006105cc836152086108f8565b6105d68389610917565b6105e09190610917565b905083156106ac57604051632a4f421360e11b81526001600160a01b03878116600483015260248201899052604482018490523360648301819052608483015261520860a483015260c4820185905260e48201839052610120610104830152600061012483015289169063549e84269061014401602060405180830381600087803b15801561066e57600080fd5b505af1158015610682573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a691906108c9565b50610766565b60405163679b6ded60e01b81526001600160a01b03878116600483015260248201899052604482018490523360648301819052608483015261520860a483015260c4820185905261010060e4830152600061010483015289169063679b6ded908390610124016020604051808303818588803b15801561072b57600080fd5b505af115801561073f573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061076491906108c9565b505b60405163b75436bb60e01b81526001600160a01b0389169063b75436bb906107929088906004016107ef565b602060405180830381600087803b1580156107ac57600080fd5b505af11580156107c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e491906108c9565b505050505050505050565b600060208083528351808285015260005b8181101561081c57858101830151858201604001528201610800565b8181111561082e576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b038116811461085957600080fd5b50565b6000806040838503121561086f57600080fd5b823561087a81610844565b946020939093013593505050565b60008060006060848603121561089d57600080fd5b83356108a881610844565b925060208401356108b881610844565b929592945050506040919091013590565b6000602082840312156108db57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610912576109126108e2565b500290565b6000821982111561092a5761092a6108e2565b50019056fe04f90a388085174876e800830c35008080b909e5608060405234801561001057600080fd5b506109c5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a5576000357c010000000000000000000000000000000000000000000000000000000090048063a41e7d5111610078578063a41e7d51146101d4578063aabbb8ca1461020a578063b705676514610236578063f712f3e814610280576100a5565b806329965a1d146100aa5780633d584063146100e25780635df8122f1461012457806365ba36c114610152575b600080fd5b6100e0600480360360608110156100c057600080fd5b50600160a060020a038135811691602081013591604090910135166102b6565b005b610108600480360360208110156100f857600080fd5b5035600160a060020a0316610570565b60408051600160a060020a039092168252519081900360200190f35b6100e06004803603604081101561013a57600080fd5b50600160a060020a03813581169160200135166105bc565b6101c26004803603602081101561016857600080fd5b81019060208101813564010000000081111561018357600080fd5b82018360208201111561019557600080fd5b803590602001918460018302840111640100000000831117156101b757600080fd5b5090925090506106b3565b60408051918252519081900360200190f35b6100e0600480360360408110156101ea57600080fd5b508035600160a060020a03169060200135600160e060020a0319166106ee565b6101086004803603604081101561022057600080fd5b50600160a060020a038135169060200135610778565b61026c6004803603604081101561024c57600080fd5b508035600160a060020a03169060200135600160e060020a0319166107ef565b604080519115158252519081900360200190f35b61026c6004803603604081101561029657600080fd5b508035600160a060020a03169060200135600160e060020a0319166108aa565b6000600160a060020a038416156102cd57836102cf565b335b9050336102db82610570565b600160a060020a031614610339576040805160e560020a62461bcd02815260206004820152600f60248201527f4e6f7420746865206d616e616765720000000000000000000000000000000000604482015290519081900360640190fd5b6103428361092a565b15610397576040805160e560020a62461bcd02815260206004820152601a60248201527f4d757374206e6f7420626520616e204552433136352068617368000000000000604482015290519081900360640190fd5b600160a060020a038216158015906103b85750600160a060020a0382163314155b156104ff5760405160200180807f455243313832305f4143434550545f4d4147494300000000000000000000000081525060140190506040516020818303038152906040528051906020012082600160a060020a031663249cb3fa85846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083815260200182600160a060020a0316600160a060020a031681526020019250505060206040518083038186803b15801561047e57600080fd5b505afa158015610492573d6000803e3d6000fd5b505050506040513d60208110156104a857600080fd5b5051146104ff576040805160e560020a62461bcd02815260206004820181905260248201527f446f6573206e6f7420696d706c656d656e742074686520696e74657266616365604482015290519081900360640190fd5b600160a060020a03818116600081815260208181526040808320888452909152808220805473ffffffffffffffffffffffffffffffffffffffff19169487169485179055518692917f93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db15391a450505050565b600160a060020a03818116600090815260016020526040812054909116151561059a5750806105b7565b50600160a060020a03808216600090815260016020526040902054165b919050565b336105c683610570565b600160a060020a031614610624576040805160e560020a62461bcd02815260206004820152600f60248201527f4e6f7420746865206d616e616765720000000000000000000000000000000000604482015290519081900360640190fd5b81600160a060020a031681600160a060020a0316146106435780610646565b60005b600160a060020a03838116600081815260016020526040808220805473ffffffffffffffffffffffffffffffffffffffff19169585169590951790945592519184169290917f605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a43509190a35050565b600082826040516020018083838082843780830192505050925050506040516020818303038152906040528051906020012090505b92915050565b6106f882826107ef565b610703576000610705565b815b600160a060020a03928316600081815260208181526040808320600160e060020a031996909616808452958252808320805473ffffffffffffffffffffffffffffffffffffffff19169590971694909417909555908152600284528181209281529190925220805460ff19166001179055565b600080600160a060020a038416156107905783610792565b335b905061079d8361092a565b156107c357826107ad82826108aa565b6107b85760006107ba565b815b925050506106e8565b600160a060020a0390811660009081526020818152604080832086845290915290205416905092915050565b6000808061081d857f01ffc9a70000000000000000000000000000000000000000000000000000000061094c565b909250905081158061082d575080155b1561083d576000925050506106e8565b61084f85600160e060020a031961094c565b909250905081158061086057508015155b15610870576000925050506106e8565b61087a858561094c565b909250905060018214801561088f5750806001145b1561089f576001925050506106e8565b506000949350505050565b600160a060020a0382166000908152600260209081526040808320600160e060020a03198516845290915281205460ff1615156108f2576108eb83836107ef565b90506106e8565b50600160a060020a03808316600081815260208181526040808320600160e060020a0319871684529091529020549091161492915050565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff161590565b6040517f01ffc9a7000000000000000000000000000000000000000000000000000000008082526004820183905260009182919060208160248189617530fa90519096909550935050505056fea165627a7a72305820377f4a2d4301ede9949f163f319021a6e9c687c292a5e2b2c4734c126b524e6c00291ba01820182018201820182018201820182018201820182018201820182018201820a0182018201820182018201820182018201820182018201820182018201820182004f87e8085174876e800830186a08080ad601f80600e600039806000f350fe60003681823780368234f58015156014578182fd5b80825250506014600cf31ba02222222222222222222222222222222222222222222222222222222222222222a0222222222222222222222222222222222222222222222222222222222222222204f9016c8085174876e8008303c4d88080b90154608060405234801561001057600080fd5b50610134806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80634af63f0214602d575b600080fd5b60cf60048036036040811015604157600080fd5b810190602081018135640100000000811115605b57600080fd5b820183602082011115606c57600080fd5b80359060200191846001830284011164010000000083111715608d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925060eb915050565b604080516001600160a01b039092168252519081900360200190f35b6000818351602085016000f5939250505056fea26469706673582212206b44f8a82cb6b156bfcc3dc6aadd6df4eefd204bc928a4397fd15dacf6d5320564736f6c634300060200331b8324700082247004f8a58085174876e800830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf31ba02222222222222222222222222222222222222222222222222222222222222222a02222222222222222222222222222222222222222222222222222222222222222a2646970667358221220dfdce194cbe562b9f840255ef9583b93661f7b9207b3a3de62915b1200cec7e864736f6c63430008090033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): DeployHelperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DeployHelper;
}
export {};
