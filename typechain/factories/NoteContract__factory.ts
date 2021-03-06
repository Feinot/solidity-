/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NoteContract, NoteContractInterface } from "../NoteContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getNote",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "acauntAddr",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            /* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NoteContract, NoteContractInterface } from "../NoteContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getNote",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "acauntAddr",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "surname",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "age",
            type: "uint256",
          },
        ],
        internalType: "struct NoteContract.Note",
        name: "_note",
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
        name: "_acauntAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_surname",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
    ],
    name: "newNote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "ownerShip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "address",
        name: "_acauntAddr",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_surname",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
    ],
    name: "updateNote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610884806100326000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063344929751461005c57806372054b3b146100715780638da5cb5b146100845780639e38ac15146100b4578063fc643efe146100c7575b600080fd5b61006f61006a366004610691565b6100e7565b005b61006f61007f366004610607565b61019c565b600054610097906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61006f6100c23660046105e6565b61027b565b6100da6100d53660046105e6565b6102c7565b6040516100ab919061079b565b6101008110806100f75750600081115b61013d5760405162461bcd60e51b81526020600482015260126024820152716167652069742773206e6f74207265616c2160701b60448201526064015b60405180910390fd5b33600090815260016020818152604090922080546001600160a01b0319166001600160a01b0388161781558551909261017c92840191908701906104af565b50825161019290600283019060208601906104af565b5060030155505050565b6000546001600160a01b031633146101c65760405162461bcd60e51b815260040161013490610755565b6101008110806101d65750600081115b6102175760405162461bcd60e51b81526020600482015260126024820152716167652069742773206e6f74207265616c2160701b6044820152606401610134565b6001600160a01b03858116600090815260016020818152604090922080546001600160a01b031916938816939093178355855161025a92918401918701906104af565b50825161027090600283019060208601906104af565b506003015550505050565b6000546001600160a01b031633146102a55760405162461bcd60e51b815260040161013490610755565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6102fb604051806080016040528060006001600160a01b031681526020016060815260200160608152602001600081525090565b6001600160a01b038083166000908152600160208181526040928390208351608081019094528054909416835290830180549293929184019161033d906107fd565b80601f0160208091040260200160405190810160405280929190818152602001828054610369906107fd565b80156103b65780601f1061038b576101008083540402835291602001916103b6565b820191906000526020600020905b81548152906001019060200180831161039957829003601f168201915b505050505081526020016002820180546103cf906107fd565b80601f01602080910402602001604051908101604052809291908181526020018280546103fb906107fd565b80156104485780601f1061041d57610100808354040283529160200191610448565b820191906000526020600020905b81548152906001019060200180831161042b57829003601f168201915b5050505050815260200160038201548152505090508060600151600014156104aa5760405162461bcd60e51b81526020600482015260156024820152741bd89a9958dd08191bd95cc81b9bdd08195e1a5cdd605a1b6044820152606401610134565b919050565b8280546104bb906107fd565b90600052602060002090601f0160209004810192826104dd5760008555610523565b82601f106104f657805160ff1916838001178555610523565b82800160010185558215610523579182015b82811115610523578251825591602001919060010190610508565b5061052f929150610533565b5090565b5b8082111561052f5760008155600101610534565b80356001600160a01b03811681146104aa57600080fd5b600082601f83011261056f578081fd5b813567ffffffffffffffff8082111561058a5761058a610838565b604051601f8301601f19908116603f011681019082821181831017156105b2576105b2610838565b816040528381528660208588010111156105ca578485fd5b8360208701602083013792830160200193909352509392505050565b6000602082840312156105f7578081fd5b61060082610548565b9392505050565b600080600080600060a0868803121561061e578081fd5b61062786610548565b945061063560208701610548565b9350604086013567ffffffffffffffff80821115610651578283fd5b61065d89838a0161055f565b94506060880135915080821115610672578283fd5b5061067f8882890161055f565b95989497509295608001359392505050565b600080600080608085870312156106a6578384fd5b6106af85610548565b9350602085013567ffffffffffffffff808211156106cb578485fd5b6106d78883890161055f565b945060408701359150808211156106ec578384fd5b506106f98782880161055f565b949793965093946060013593505050565b60008151808452815b8181101561072f57602081850181015186830182015201610713565b818111156107405782602083870101525b50601f01601f19169290920160200192915050565b60208082526026908201527f596f75206d75737420626520746865206f776e6572206f662074686520636f6e60408201526574726163742160d01b606082015260800190565b602080825282516001600160a01b031682820152820151608060408301526000906107c960a084018261070a565b90506040840151601f198483030160608501526107e6828261070a565b915050606084015160808401528091505092915050565b600181811c9082168061081157607f821691505b6020821081141561083257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220f23e5b1afa520ec6a51a854bcfa233739e25829209d4ae6c47d42e991558ec7f64736f6c63430008040033";

export class NoteContract__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NoteContract> {
    return super.deploy(overrides || {}) as Promise<NoteContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NoteContract {
    return super.attach(address) as NoteContract;
  }
  connect(signer: Signer): NoteContract__factory {
    return super.connect(signer) as NoteContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NoteContractInterface {
    return new utils.Interface(_abi) as NoteContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NoteContract {
    return new Contract(address, _abi, signerOrProvider) as NoteContract;
  }
}
