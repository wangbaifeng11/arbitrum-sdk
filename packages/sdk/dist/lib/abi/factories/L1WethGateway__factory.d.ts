import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { L1WethGateway, L1WethGatewayInterface } from "../L1WethGateway";
type L1WethGatewayConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class L1WethGateway__factory extends ContractFactory {
    constructor(...args: L1WethGatewayConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<L1WethGateway>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): L1WethGateway;
    connect(signer: Signer): L1WethGateway__factory;
    static readonly contractName: "L1WethGateway";
    readonly contractName: "L1WethGateway";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061200b806100206000396000f3fe6080604052600436106100e25760003560e01c806395fcea781161008557806395fcea781461021e578063a0c76a9614610233578063a7e28d4814610253578063bcf2e6eb14610273578063bd5f3e7d146102a2578063d2ce7d65146102c2578063f68a9082146102d5578063f887ea4014610303578063fb0e722b1461032357600080fd5b806301ffc9a7146100ee578063020a6058146101235780631459457a14610151578063146bf4b114610173578063247b2768146101ab5780632db09c1c146101cb5780632e567b36146101eb5780634fb1a07b146101fe57600080fd5b366100e957005b600080fd5b3480156100fa57600080fd5b5061010e6101093660046116d2565b610343565b60405190151581526020015b60405180910390f35b34801561012f57600080fd5b5061014361013e366004611711565b61037a565b60405190815260200161011a565b34801561015d57600080fd5b5061017161016c366004611741565b6103bf565b005b34801561017f57600080fd5b50600454610193906001600160a01b031681565b6040516001600160a01b03909116815260200161011a565b3480156101b757600080fd5b50600554610193906001600160a01b031681565b3480156101d757600080fd5b50600054610193906001600160a01b031681565b6101716101f93660046117f3565b61048e565b61021161020c366004611877565b6105f6565b60405161011a919061195e565b34801561022a57600080fd5b5061017161085b565b34801561023f57600080fd5b5061021161024e366004611a34565b6108d3565b34801561025f57600080fd5b5061019361026e366004611ab2565b61094d565b34801561027f57600080fd5b5061029361028e366004611acf565b61097e565b60405161011a93929190611ae8565b3480156102ae57600080fd5b506101716102bd366004611b1d565b610a37565b6102116102d0366004611bbb565b610c97565b3480156102e157600080fd5b506102f56102f0366004611c2d565b610cb5565b60405161011a929190611c85565b34801561030f57600080fd5b50600154610193906001600160a01b031681565b34801561032f57600080fd5b50600254610193906001600160a01b031681565b60006001600160e01b03198216634fb1a07b60e01b148061037457506301ffc9a760e01b6001600160e01b03198316145b92915050565b600082826040516020016103a19291909182526001600160a01b0316602082015260400190565b60405160208183030381529060405280519060200120905092915050565b6103ca858585610da5565b6001600160a01b0382166104165760405162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9862ae8aa8960931b60448201526064015b60405180910390fd5b6001600160a01b03811661045d5760405162461bcd60e51b815260206004820152600e60248201526d0929cac82989288be9864ae8aa8960931b604482015260640161040d565b600480546001600160a01b039384166001600160a01b03199182161790915560058054929093169116179055505050565b6002546001600160a01b031660006104a582610e58565b9050336001600160a01b038216146104f15760405162461bcd60e51b815260206004820152600f60248201526e4e4f545f46524f4d5f42524944474560881b604482015260640161040d565b60006104fc83610ebc565b6000549091506001600160a01b038083169116146105575760405162461bcd60e51b81526020600482015260186024820152774f4e4c595f434f554e544552504152545f4741544557415960401b604482015260640161040d565b6000806105648787610fda565b91509150805160001461058257506040805160208101909152600081525b61058d828a83610cb5565b50985061059b8b8a8a610ff5565b81896001600160a01b03168b6001600160a01b03167f891afe029c75c4f8c5855fc3480598bc5a53739344f6ae575bdb7ea2a79f56b38e8c6040516105e1929190611ca9565b60405180910390a45050505050505050505050565b6001546060906001600160a01b031633146106455760405162461bcd60e51b815260206004820152600f60248201526e2727aa2fa32927a6afa927aaaa22a960891b604482015260640161040d565b6000806060600080610665336001546001600160a01b0391821691161490565b1561067e576106748888611064565b90955092506106bb565b33945087878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050505b6106c483611080565b8151919550919350909150156107125760405162461bcd60e51b8152602060048201526013602482015272115615149057d110551057d11254d050931151606a1b604482015260640161040d565b6001600160a01b038e163b61075b5760405162461bcd60e51b815260206004820152600f60248201526e130c57d393d517d0d3d395149050d5608a1b604482015260640161040d565b60006107668f61094d565b90506001600160a01b0381166107b05760405162461bcd60e51b815260206004820152600f60248201526e1393d7d30c97d513d2d15397d4d155608a1b604482015260640161040d565b6107bb8f878e6110a6565b9b506107ca8f878f8f886108d3565b96506107dc8e878e8e8e88888e61111f565b9450505050818a6001600160a01b0316846001600160a01b03167fb8910b9960c443aac3240b98585384e3a6f109fbf6969e264c3f183d69aba7e18f8d604051610827929190611ca9565b60405180910390a4604080516020810184905201604051602081830303815290604052935050505098975050505050505050565b60006108857fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b9050336001600160a01b038216146108d05760405162461bcd60e51b815260206004820152600e60248201526d2727aa2fa32927a6afa0a226a4a760911b604482015260640161040d565b50565b60408051602081019091526000815260609063172b3d9b60e11b878787876108fb868961113d565b60405160240161090f959493929190611cc2565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915291505095945050505050565b6004546000906001600160a01b0383811691161461096d57506000919050565b50506005546001600160a01b031690565b6003602052600090815260409020805460018201805460ff8316936101009093046001600160a01b03169291906109b490611cfd565b80601f01602080910402602001604051908101604052809291908181526020018280546109e090611cfd565b8015610a2d5780601f10610a0257610100808354040283529160200191610a2d565b820191906000526020600020905b815481529060010190602001808311610a1057829003601f168201915b5050505050905083565b6000610a53888860405180602001604052806000815250610cb5565b509050336001600160a01b03821614610aa45760405162461bcd60e51b81526020600482015260136024820152722727aa2fa2ac2822a1aa22a22fa9a2a72222a960691b604482015260640161040d565b8315610ae45760405162461bcd60e51b815260206004820152600f60248201526e1393d7d110551057d0531313d5d151608a1b604482015260640161040d565b610b2688888888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061116992505050565b8115610c33576001600160a01b0386163b610b755760405162461bcd60e51b815260206004820152600f60248201526e1513d7d393d517d0d3d395149050d5608a1b604482015260640161040d565b604051630592e20760e41b81526000906001600160a01b0388169063592e207090610baa9085908d9089908990600401611d60565b6020604051808303816000875af1158015610bc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bed9190611d92565b905080610c315760405162461bcd60e51b81526020600482015260126024820152711514905394d1915497d213d3d2d7d190525360721b604482015260640161040d565b505b87866001600160a01b0316826001600160a01b03167f56735ccb9dc7d2222ce4177fc3aea44c33882e2a2c73e0fb1c6b93c9c13a04d48888888860008b8b905011604051610c85959493929190611db4565b60405180910390a45050505050505050565b6060610ca988888989898989896105f6565b98975050505050505050565b600060606000610cc5868661037a565b600081815260036020526040902080549192509060ff1615610d94578060000160019054906101000a90046001600160a01b031681600101808054610d0990611cfd565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3590611cfd565b8015610d825780601f10610d5757610100808354040283529160200191610d82565b820191906000526020600020905b815481529060010190602001808311610d6557829003601f168201915b50505050509050935093505050610d9d565b85859350935050505b935093915050565b610daf83836111b1565b6001600160a01b038216610df25760405162461bcd60e51b815260206004820152600a6024820152692120a22fa927aaaa22a960b11b604482015260640161040d565b6001600160a01b038116610e345760405162461bcd60e51b81526020600482015260096024820152680848288be929c849eb60bb1b604482015260640161040d565b600280546001600160a01b0319166001600160a01b03929092169190911790555050565b6000816001600160a01b031663e78cea926040518163ffffffff1660e01b8152600401602060405180830381865afa158015610e98573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103749190611df0565b600080610ec883610e58565b6001600160a01b031663ab5d89436040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f299190611df0565b90506000816001600160a01b03166380648b026040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8f9190611df0565b90506001600160a01b038116610fd35760405162461bcd60e51b81526020600482015260096024820152682727afa9a2a72222a960b91b604482015260640161040d565b9392505050565b60006060610fea83850185611e0d565b909590945092505050565b826001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b15801561103057600080fd5b505af1158015611044573d6000803e3d6000fd5b5061105f935050506001600160a01b03851690508383611273565b505050565b6000606061107483850185611e53565b915091505b9250929050565b6000606060008380602001905181019061109a9190611e8c565b90959094509092509050565b60006110bd6001600160a01b0385168430856112c9565b604051632e1a7d4d60e01b8152600481018390526001600160a01b03851690632e1a7d4d90602401600060405180830381600087803b1580156110ff57600080fd5b505af1158015611113573d6000803e3d6000fd5b50939695505050505050565b600061113089898989898988611307565b9998505050505050505050565b60608282604051602001611152929190611f0e565b604051602081830303815290604052905092915050565b60405162461bcd60e51b815260206004820152601b60248201527f5452414441424c455f455849545f54454d505f44495341424c45440000000000604482015260640161040d565b6001600160a01b0382166111fd5760405162461bcd60e51b81526020600482015260136024820152721253959053125117d0d3d55395115494105495606a1b604482015260640161040d565b6000546001600160a01b0316156112455760405162461bcd60e51b815260206004820152600c60248201526b1053149150511657d253925560a21b604482015260640161040d565b600080546001600160a01b039384166001600160a01b03199182161790915560018054929093169116179055565b61105f8363a9059cbb60e01b8484604051602401611292929190611ca9565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261134f565b6040516001600160a01b03808516602483015283166044820152606481018290526113019085906323b872dd60e01b90608401611292565b50505050565b600254600080549091610ca9916001600160a01b0391821691168a8a61132d8b34611f33565b8b60405180606001604052808b81526020018d81526020018c81525089611421565b60006113a4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114419092919063ffffffff16565b80519091501561105f57808060200190518101906113c29190611d92565b61105f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161040d565b600061113089898989898989600001518a602001518b604001518b611458565b606061145084846000856114ca565b949350505050565b60008061146d8c8c8c8c8c8c8c8c8c8c6115a5565b9050808b6001600160a01b03168a6001600160a01b03167fc1d1490cf25c3b40d600dfb27c7680340ed1ab901b7e8f3551280968a3b372b0866040516114b3919061195e565b60405180910390a49b9a5050505050505050505050565b60608247101561152b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161040d565b600080866001600160a01b031685876040516115479190611f54565b60006040518083038185875af1925050503d8060008114611584576040519150601f19603f3d011682016040523d82523d6000602084013e611589565b606091505b509150915061159a87838387611634565b979650505050505050565b60008a6001600160a01b031663679b6ded888c89898e8e8b8b8b6040518a63ffffffff1660e01b81526004016115e2989796959493929190611f70565b60206040518083038185885af1158015611600573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906116259190611fbc565b9b9a5050505050505050505050565b606083156116a357825160000361169c576001600160a01b0385163b61169c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161040d565b5081611450565b61145083838151156116b85781518083602001fd5b8060405162461bcd60e51b815260040161040d919061195e565b6000602082840312156116e457600080fd5b81356001600160e01b031981168114610fd357600080fd5b6001600160a01b03811681146108d057600080fd5b6000806040838503121561172457600080fd5b823591506020830135611736816116fc565b809150509250929050565b600080600080600060a0868803121561175957600080fd5b8535611764816116fc565b94506020860135611774816116fc565b93506040860135611784816116fc565b92506060860135611794816116fc565b915060808601356117a4816116fc565b809150509295509295909350565b60008083601f8401126117c457600080fd5b5081356001600160401b038111156117db57600080fd5b60208301915083602082850101111561107957600080fd5b60008060008060008060a0878903121561180c57600080fd5b8635611817816116fc565b95506020870135611827816116fc565b94506040870135611837816116fc565b93506060870135925060808701356001600160401b0381111561185957600080fd5b61186589828a016117b2565b979a9699509497509295939492505050565b60008060008060008060008060e0898b03121561189357600080fd5b883561189e816116fc565b975060208901356118ae816116fc565b965060408901356118be816116fc565b9550606089013594506080890135935060a0890135925060c08901356001600160401b038111156118ee57600080fd5b6118fa8b828c016117b2565b999c989b5096995094979396929594505050565b60005b83811015611929578181015183820152602001611911565b50506000910152565b6000815180845261194a81602086016020860161190e565b601f01601f19169290920160200192915050565b602081526000610fd36020830184611932565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156119af576119af611971565b604052919050565b60006001600160401b038211156119d0576119d0611971565b50601f01601f191660200190565b600082601f8301126119ef57600080fd5b8135611a026119fd826119b7565b611987565b818152846020838601011115611a1757600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215611a4c57600080fd5b8535611a57816116fc565b94506020860135611a67816116fc565b93506040860135611a77816116fc565b92506060860135915060808601356001600160401b03811115611a9957600080fd5b611aa5888289016119de565b9150509295509295909350565b600060208284031215611ac457600080fd5b8135610fd3816116fc565b600060208284031215611ae157600080fd5b5035919050565b83151581526001600160a01b0383166020820152606060408201819052600090611b1490830184611932565b95945050505050565b600080600080600080600060a0888a031215611b3857600080fd5b873596506020880135611b4a816116fc565b95506040880135611b5a816116fc565b945060608801356001600160401b0380821115611b7657600080fd5b611b828b838c016117b2565b909650945060808a0135915080821115611b9b57600080fd5b50611ba88a828b016117b2565b989b979a50959850939692959293505050565b600080600080600080600060c0888a031215611bd657600080fd5b8735611be1816116fc565b96506020880135611bf1816116fc565b955060408801359450606088013593506080880135925060a08801356001600160401b03811115611c2157600080fd5b611ba88a828b016117b2565b600080600060608486031215611c4257600080fd5b833592506020840135611c54816116fc565b915060408401356001600160401b03811115611c6f57600080fd5b611c7b868287016119de565b9150509250925092565b6001600160a01b038316815260406020820181905260009061145090830184611932565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0386811682528581166020830152841660408201526060810183905260a06080820181905260009061159a90830184611932565b600181811c90821680611d1157607f821691505b602082108103611d3157634e487b7160e01b600052602260045260246000fd5b50919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b0385168152836020820152606060408201526000611d88606083018486611d37565b9695505050505050565b600060208284031215611da457600080fd5b81518015158114610fd357600080fd5b606081526000611dc8606083018789611d37565b8281036020840152611ddb818688611d37565b91505082151560408301529695505050505050565b600060208284031215611e0257600080fd5b8151610fd3816116fc565b60008060408385031215611e2057600080fd5b8235915060208301356001600160401b03811115611e3d57600080fd5b611e49858286016119de565b9150509250929050565b60008060408385031215611e6657600080fd5b8235611e71816116fc565b915060208301356001600160401b03811115611e3d57600080fd5b60008060408385031215611e9f57600080fd5b8251915060208301516001600160401b03811115611ebc57600080fd5b8301601f81018513611ecd57600080fd5b8051611edb6119fd826119b7565b818152866020838501011115611ef057600080fd5b611f0182602083016020860161190e565b8093505050509250929050565b604081526000611f216040830185611932565b8281036020840152611b148185611932565b8082018082111561037457634e487b7160e01b600052601160045260246000fd5b60008251611f6681846020870161190e565b9190910192915050565b600061010060018060a01b03808c1684528a602085015289604085015280891660608501528088166080850152508560a08401528460c08401528060e084015261162581840185611932565b600060208284031215611fce57600080fd5b505191905056fea26469706673582212203eb790555bf25b015bdd98fec15ed3f0a86ab04d6dee64e75530d8eb9d522a7c64736f6c63430008100033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): L1WethGatewayInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): L1WethGateway;
}
export {};
