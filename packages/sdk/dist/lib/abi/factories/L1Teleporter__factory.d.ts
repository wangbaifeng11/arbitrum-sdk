import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { L1Teleporter, L1TeleporterInterface } from "../L1Teleporter";
type L1TeleporterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class L1Teleporter__factory extends ContractFactory {
    constructor(...args: L1TeleporterConstructorParams);
    deploy(_l2ForwarderFactory: string, _l2ForwarderImplementation: string, _admin: string, _pauser: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<L1Teleporter>;
    getDeployTransaction(_l2ForwarderFactory: string, _l2ForwarderImplementation: string, _admin: string, _pauser: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): L1Teleporter;
    connect(signer: Signer): L1Teleporter__factory;
    static readonly contractName: "L1Teleporter";
    readonly contractName: "L1Teleporter";
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a0f38038062002a0f833981016040819052620000349162000139565b6000805460ff191681556001600160a01b03808616608052841660a0526200005d908362000093565b620000897f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a8262000093565b5050505062000196565b60008281526001602090815260408083206001600160a01b038516845290915290205460ff16620001185760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45b5050565b80516001600160a01b03811681146200013457600080fd5b919050565b600080600080608085870312156200015057600080fd5b6200015b856200011c565b93506200016b602086016200011c565b92506200017b604086016200011c565b91506200018b606086016200011c565b905092959194509250565b60805160a05161283e620001d1600039600081816104590152610daf0152600081816102c701528181610d730152611700015261283e6000f3fe6080604052600436106101295760003560e01c806363c2f61e116100a5578063a217fddf11610074578063e63ab1e911610059578063e63ab1e914610413578063ec7d4abd14610447578063fbabf0841461047b57600080fd5b8063a217fddf146103de578063d547741f146103f357600080fd5b806363c2f61e1461033b5780638456cb591461034e5780639045f6d41461036357806391d148541461038b57600080fd5b80632f2ff15d116100fc578063377f017a116100e1578063377f017a146102b55780633f4ba83a1461030e5780635c975abb1461032357600080fd5b80632f2ff15d1461027357806336568abe1461029557600080fd5b806301ffc9a71461012e578063082486be146101635780631660853214610204578063248a9ca314610234575b600080fd5b34801561013a57600080fd5b5061014e61014936600461219b565b61049b565b60405190151581526020015b60405180910390f35b34801561016f57600080fd5b5061018361017e366004612218565b610534565b60405161015a919060006101008201905073ffffffffffffffffffffffffffffffffffffffff8084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401525060a083015160a083015260c083015160c083015260e083015160e083015292915050565b34801561021057600080fd5b5061022461021f366004612252565b61087a565b60405161015a949392919061229e565b34801561024057600080fd5b5061026561024f366004612317565b6000908152600160208190526040909120015490565b60405190815260200161015a565b34801561027f57600080fd5b5061029361028e366004612330565b610974565b005b3480156102a157600080fd5b506102936102b0366004612330565b61099f565b3480156102c157600080fd5b506102e97f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161015a565b34801561031a57600080fd5b50610293610a57565b34801561032f57600080fd5b5060005460ff1661014e565b610293610349366004612252565b610a8c565b34801561035a57600080fd5b50610293610cca565b34801561036f57600080fd5b506102e973ca040eea1dc95e969d9dc07af75147987c83089781565b34801561039757600080fd5b5061014e6103a6366004612330565b600091825260016020908152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b3480156103ea57600080fd5b50610265600081565b3480156103ff57600080fd5b5061029361040e366004612330565b610cfc565b34801561041f57600080fd5b506102657f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a81565b34801561045357600080fd5b506102e97f000000000000000000000000000000000000000000000000000000000000000081565b34801561048757600080fd5b506102e9610496366004612355565b610d22565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061052e57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810191909152600061058760608501604086016123a0565b73ffffffffffffffffffffffffffffffffffffffff1663a7e28d486105af60208701876123a0565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401602060405180830381865afa158015610618573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063c91906123bd565b90506000808061066761065260208901896123a0565b61066260408a0160208b016123a0565b610e13565b9050600081600281111561067d5761067d61226f565b0361068b576000925061077f565b600181600281111561069f5761069f61226f565b036106ac5783925061077f565b6106bc60608801604089016123a0565b73ffffffffffffffffffffffffffffffffffffffff1663a7e28d486106e760408a0160208b016123a0565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401602060405180830381865afa158015610750573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077491906123bd565b92506101e087013591505b60405180610100016040528061079488610ec8565b73ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018860600160208101906107fa91906123a0565b73ffffffffffffffffffffffffffffffffffffffff16815260200161082560a08a0160808b016123a0565b73ffffffffffffffffffffffffffffffffffffffff1681526020016108526101808a016101608b016123da565b67ffffffffffffffff16815260e0890135602082015260400192909252509250505092915050565b60008060006108aa6040518060800160405280600081526020016000815260200160008152602001600081525090565b6108b385610f0a565b6108bf8560c001610ff5565b90506108e16108d160208701876123a0565b61066260408801602089016123a0565b9150806040015181602001516108f79190612433565b9350600082600281111561090d5761090d61226f565b036109285760608101516109219085612433565b935061096d565b600182600281111561093c5761093c61226f565b0361094d578060600151925061096d565b60608101511561096d5780516109639085612433565b9350806060015192505b9193509193565b600082815260016020819052604090912001546109908161110b565b61099a8383611115565b505050565b73ffffffffffffffffffffffffffffffffffffffff81163314610a49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b610a5382826111d4565b5050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a610a818161110b565b610a8961128f565b50565b610a9461130c565b600080600080610aa38561087a565b9350935093509350833414610aed576040517fb25102da00000000000000000000000000000000000000000000000000000000815260048101859052346024820152604401610a40565b6000610b1b610afb33610ec8565b610b0b6080890160608a016123a0565b61049660a08a0160808b016123a0565b90506001836002811115610b3157610b3161226f565b03610b8657838660a001351015610b81576040517fa0d383da0000000000000000000000000000000000000000000000000000000081526004810185905260a08701356024820152604401610a40565b610bf6565b6002836002811115610b9a57610b9a61226f565b03610bf6578315610bf657610bf6610bb860608801604089016123a0565b610bc86040890160208a016123a0565b8387610bdc6101408c016101208d016123da565b67ffffffffffffffff1660c08c01356101a08d013561137b565b610c0186838361160d565b337f762fcae5372ec0a8b89250dca23af574afcad1e9db4425b0a2d9e8f9e8a64ad0610c3060208901896123a0565b610c4060408a0160208b016123a0565b610c5060608b0160408c016123a0565b610c6060808c0160608d016123a0565b610c7060a08d0160808e016123a0565b6040805173ffffffffffffffffffffffffffffffffffffffff96871681529486166020860152928516848401529084166060840152909216608082015260a08a8101359082015290519081900360c00190a2505050505050565b7f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a610cf48161110b565b610a896118cd565b60008281526001602081905260409091200154610d188161110b565b61099a83836111d4565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166020808401919091528582168385015290841660608084019190915283518084039091018152608083019384905280519101207f000000000000000000000000000000000000000000000000000000000000000060b88301526f5af43d82803e903d91602b57fd5bf3ff60a48301527f00000000000000000000000000000000000000000000000000000000000000006094830152733d602d80600a3d3981f3363d3d373d3d3d363d7390925260d88101919091526037608c82012060f8820152605560c3909101206000905b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8316610e62576040517f83fe0edc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e855750600061052e565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ec05750600161052e565b50600261052e565b6000808273ffffffffffffffffffffffffffffffffffffffff163b11610eee578161052e565b731111000000000000000000000000000000001111820161052e565b73ca040eea1dc95e969d9dc07af75147987c830897610f2f60408301602084016123a0565b73ffffffffffffffffffffffffffffffffffffffff16148015610fbe57506101e0810135151580610f7b57506000610f6f610180830161016084016123da565b67ffffffffffffffff16115b80610fa157506000610f95610140830161012084016123da565b67ffffffffffffffff16115b80610fb057506101a081013515155b80610fbe575060e081013515155b15610a89576040517f870e439500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110206040518060800160405280600081526020016000815260200160008152602001600081525090565b813561103260808401606085016123da565b67ffffffffffffffff166110469190612446565b6110549060e0840135612433565b8152813561106860a08401608085016123da565b67ffffffffffffffff1661107c9190612446565b61108b90610100840135612433565b602082015281356110a260608401604085016123da565b67ffffffffffffffff166110b69190612446565b6110c49060c0840135612433565b604082015260208201356110de60c0840160a085016123da565b67ffffffffffffffff166110f29190612446565b61110190610120840135612433565b6060820152919050565b610a898133611928565b600082815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610a5357600082815260016020818152604080842073ffffffffffffffffffffffffffffffffffffffff8616808652925280842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b600082815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1615610a5357600082815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6112976119e2565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60005460ff1615611379576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401610a40565b565b61139d73ffffffffffffffffffffffffffffffffffffffff8716333087611a4e565b6040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff87811660048301526000919089169063bda009fe90602401602060405180830381865afa15801561140d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143191906123bd565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff80831660248301529192509088169063dd62ed3e90604401602060405180830381865afa1580156114a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114cb919061245d565b6000036115135761151373ffffffffffffffffffffffffffffffffffffffff8816827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b30565b73ffffffffffffffffffffffffffffffffffffffff8816634fb1a07b8361153a8688612446565b6115449190612433565b89898a8a8a8a8a6040518060200160405280600081525060405160200161156c9291906124e4565b6040516020818303038152906040526040518963ffffffff1660e01b815260040161159d97969594939291906124fd565b60006040518083038185885af11580156115bb573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611602919081019061258c565b505050505050505050565b61165f61162060608501604086016123a0565b61162d60208601866123a0565b8360a087013561164561016089016101408a016123da565b67ffffffffffffffff1660c08901356101c08a013561137b565b600061167160608501604086016123a0565b73ffffffffffffffffffffffffffffffffffffffff1663fb0e722b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156116bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116df91906123bd565b90508073ffffffffffffffffffffffffffffffffffffffff1663679b6ded477f000000000000000000000000000000000000000000000000000000000000000086604001514761172f919061264c565b61018089013587806117496101208d016101008e016123da565b60c08d01356117588e33610534565b60408051825173ffffffffffffffffffffffffffffffffffffffff90811660248301526020840151811660448301529183015182166064820152606083015182166084820152608083015190911660a482015260a082015160c482015260c082015160e482015260e09091015161010482015261012401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f27a01aa600000000000000000000000000000000000000000000000000000000179052517fffffffff0000000000000000000000000000000000000000000000000000000060e08c901b16815261188398979695949392919060040161265f565b60206040518083038185885af11580156118a1573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906118c6919061245d565b5050505050565b6118d561130c565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586112e23390565b600082815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff16610a535761196881611cb2565b611973836020611cd1565b6040516020016119849291906126d2565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a0000000000000000000000000000000000000000000000000000000008252610a4091600401612753565b60005460ff16611379576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f74207061757365640000000000000000000000006044820152606401610a40565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611b2a9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611f1b565b50505050565b801580611bd057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611baa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bce919061245d565b155b611c5c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610a40565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261099a9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611aa8565b606061052e73ffffffffffffffffffffffffffffffffffffffff831660145b60606000611ce0836002612446565b611ceb906002612433565b67ffffffffffffffff811115611d0357611d0361255d565b6040519080825280601f01601f191660200182016040528015611d2d576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110611d6457611d64612766565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110611dc757611dc7612766565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506000611e03846002612446565b611e0e906001612433565b90505b6001811115611eab577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611e4f57611e4f612766565b1a60f81b828281518110611e6557611e65612766565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611ea481612795565b9050611e11565b508315611f14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610a40565b9392505050565b6000611f7d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff1661202a9092919063ffffffff16565b9050805160001480611f9e575080806020019051810190611f9e91906127ca565b61099a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a40565b6060610e0b8484600085856000808673ffffffffffffffffffffffffffffffffffffffff16858760405161205e91906127ec565b60006040518083038185875af1925050503d806000811461209b576040519150601f19603f3d011682016040523d82523d6000602084013e6120a0565b606091505b50915091506120b1878383876120bc565b979650505050505050565b6060831561215257825160000361214b5773ffffffffffffffffffffffffffffffffffffffff85163b61214b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a40565b5081610e0b565b610e0b83838151156121675781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a409190612753565b6000602082840312156121ad57600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611f1457600080fd5b600061020082840312156121f057600080fd5b50919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610a8957600080fd5b600080610220838503121561222c57600080fd5b61223684846121dd565b9150610200830135612247816121f6565b809150509250929050565b6000610200828403121561226557600080fd5b611f1483836121dd565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8481526020810184905260e08101600384106122e3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8360408301528251606083015260208301516080830152604083015160a0830152606083015160c083015295945050505050565b60006020828403121561232957600080fd5b5035919050565b6000806040838503121561234357600080fd5b823591506020830135612247816121f6565b60008060006060848603121561236a57600080fd5b8335612375816121f6565b92506020840135612385816121f6565b91506040840135612395816121f6565b809150509250925092565b6000602082840312156123b257600080fd5b8135611f14816121f6565b6000602082840312156123cf57600080fd5b8151611f14816121f6565b6000602082840312156123ec57600080fd5b813567ffffffffffffffff81168114611f1457600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561052e5761052e612404565b808202811582820484141761052e5761052e612404565b60006020828403121561246f57600080fd5b5051919050565b60005b83811015612491578181015183820152602001612479565b50506000910152565b600081518084526124b2816020860160208601612476565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b828152604060208201526000610e0b604083018461249a565b600073ffffffffffffffffffffffffffffffffffffffff808a16835280891660208401528088166040840152508560608301528460808301528360a083015260e060c083015261255060e083018461249a565b9998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561259e57600080fd5b815167ffffffffffffffff808211156125b657600080fd5b818401915084601f8301126125ca57600080fd5b8151818111156125dc576125dc61255d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156126225761262261255d565b8160405282815287602084870101111561263b57600080fd5b6120b1836020830160208801612476565b8181038181111561052e5761052e612404565b600061010073ffffffffffffffffffffffffffffffffffffffff808c1684528a6020850152896040850152808916606085015280881660808501525067ffffffffffffffff861660a08401528460c08401528060e08401526126c38184018561249a565b9b9a5050505050505050505050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161270a816017850160208801612476565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351612747816028840160208801612476565b01602801949350505050565b602081526000611f14602083018461249a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000816127a4576127a4612404565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b6000602082840312156127dc57600080fd5b81518015158114611f1457600080fd5b600082516127fe818460208701612476565b919091019291505056fea264697066735822122062edd948ea0b4a823df8ba9b3baaf131d5b8431ef3454cee75f08901a78b071a64736f6c63430008170033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            components: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
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
    })[];
    static createInterface(): L1TeleporterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): L1Teleporter;
}
export {};
