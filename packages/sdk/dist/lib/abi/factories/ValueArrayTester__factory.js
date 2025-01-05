"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueArrayTester__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "test",
        outputs: [],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610731806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f8a8fd6d14610030575b600080fd5b61003861003a565b005b6040805160026020820181815260808301845260009383929083015b604080518082019091526000808252602082015281526020019060019003908161005657505090528051519091506002146100c45760405162461bcd60e51b815260206004820152600960248201526829aa20a92a2fa622a760b91b60448201526064015b60405180910390fd5b6100db60006100d360016103c2565b8391906103f5565b6100ea60016100d360026103c2565b6100fe6100f760036103c2565b829061041c565b80515160031461013b5760405162461bcd60e51b8152602060048201526008602482015267282aa9a42fa622a760c11b60448201526064016100bb565b60005b81515181101561020c5760006101548383610510565b905060008151600681111561016b5761016b61066f565b146101a85760405162461bcd60e51b815260206004820152600d60248201526c505553485f56414c5f5459504560981b60448201526064016100bb565b6101b382600161069b565b8160200151146101f95760405162461bcd60e51b8152602060048201526011602482015270505553485f56414c5f434f4e54454e545360781b60448201526064016100bb565b5080610204816106b3565b91505061013e565b50600061021882610548565b905060008151600681111561022f5761022f61066f565b1461026b5760405162461bcd60e51b815260206004820152600c60248201526b504f505f5245545f5459504560a01b60448201526064016100bb565b80602001516003146102b25760405162461bcd60e51b815260206004820152601060248201526f504f505f5245545f434f4e54454e545360801b60448201526064016100bb565b8151516002146102ee5760405162461bcd60e51b81526020600482015260076024820152662827a82fa622a760c91b60448201526064016100bb565b60005b8251518110156103bd5760006103078483610510565b905060008151600681111561031e5761031e61066f565b1461035a5760405162461bcd60e51b815260206004820152600c60248201526b504f505f56414c5f5459504560a01b60448201526064016100bb565b61036582600161069b565b8160200151146103aa5760405162461bcd60e51b815260206004820152601060248201526f504f505f56414c5f434f4e54454e545360801b60448201526064016100bb565b50806103b5816106b3565b9150506102f1565b505050565b604080518082019091526000808252602082015250604080518082019091526000815263ffffffff909116602082015290565b808360000151838151811061040c5761040c6106ce565b6020026020010181905250505050565b81515160009061042d90600161069b565b67ffffffffffffffff81111561044557610445610659565b60405190808252806020026020018201604052801561048a57816020015b60408051808201909152600080825260208201528152602001906001900390816104635790505b50905060005b8351518110156104e65783518051829081106104ae576104ae6106ce565b60200260200101518282815181106104c8576104c86106ce565b602002602001018190525080806104de906106b3565b915050610490565b508181846000015151815181106104ff576104ff6106ce565b602090810291909101015290915250565b60408051808201909152600080825260208201528251805183908110610538576105386106ce565b6020026020010151905092915050565b60408051808201909152600080825260208201528151805161056c906001906106e4565b8151811061057c5761057c6106ce565b602002602001015190506000600183600001515161059a91906106e4565b67ffffffffffffffff8111156105b2576105b2610659565b6040519080825280602002602001820160405280156105f757816020015b60408051808201909152600080825260208201528152602001906001900390816105d05790505b50905060005b815181101561065257835180518290811061061a5761061a6106ce565b6020026020010151828281518110610634576106346106ce565b6020026020010181905250808061064a906106b3565b9150506105fd565b5090915290565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156106ae576106ae610685565b500190565b60006000198214156106c7576106c7610685565b5060010190565b634e487b7160e01b600052603260045260246000fd5b6000828210156106f6576106f6610685565b50039056fea26469706673582212202acf49f5bbd26486ef855e2fe94f59b6f316d9b57dcfa18e0aaf50ebcb90bc9a64736f6c63430008090033";
const isSuperArgs = (xs) => xs.length > 1;
class ValueArrayTester__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
        this.contractName = "ValueArrayTester";
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ValueArrayTester__factory = ValueArrayTester__factory;
ValueArrayTester__factory.bytecode = _bytecode;
ValueArrayTester__factory.abi = _abi;
