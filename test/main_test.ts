
import { ethers} from "hardhat";

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import BigNumber from "bignumber.js";
import hre, { network } from "hardhat";
import { Contract, Signer } from "ethers";
import { Artifact, HardhatRuntimeEnvironment } from "hardhat/types";
import { Address } from "cluster";
import { Test } from "mocha";

const W
import { ethers} from "hardhat";

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect;
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import BigNumber from "bignumber.js";
import hre, { network } from "hardhat";
import { Contract, Signer } from "ethers";
import { Artifact, HardhatRuntimeEnvironment } from "hardhat/types";
import { Address } from "cluster";
import { Test } from "mocha";

const Web3 = require("web3");

const web3 = new Web3(
    hre.network.provider
);



describe("NoteContract", async () => {
    let accounts : SignerWithAddress[]
    let note : Contract
    beforeEach(async () => {
        accounts = await ethers.getSigners(); // Получение массива тестовых аккаунтов 
        const Note = await (ethers.getContractFactory("NoteContract",accounts[0]));
        note = await Note.deploy(); //Деплой  
    });

    it('STEP 1: newNote and getNote succes', async () => {
        await note.newNote(accounts[1].address , "Alex" , "Demianenko" , 20) ; //вызываем функцию newNote 
        
        let arr : any = [accounts[1].address , "Alex" , "Demianenko" , 20 ] ; //Создали массив с которым мы должны сравнить полученные данные 
        const noteInfo = await note.getNote(accounts[0].address)
        for (var i = 0; i < noteInfo.length - 1 ; i++) {
            expect(noteInfo[i]).to.equal(arr[i]);
        }
       
    })
    it('STEP 2: newNote fail', async () => {
        // почему то не всегда работает await expect , у меня получилось только в некоторых тестах , это можно увидеть дальше 
        try {
            await note.newNote(accounts[1].address , "Alex" , "Demianenko" , 0) ;
        }
        catch(e: any) {
            expect(e.message).to.equal("age it's not real!") 
        }
    })
    it('STEP 3: newNote fail', async () => {
        try {
            await note.newNote(accounts[1].address , "Alex" , "Demianenko" , 256) ;
        }
        catch(e: any) {
            expect(e.message).to.equal("age it's not real!") 
        }
    })

    it('STEP 4: updateNote succes', async () => {
        await note.newNote(accounts[1].address , "Alex" , "Demianenko" , 20) ; 
        await note.updateNote(accounts[0].address , accounts[1].address , "User" , "Test",30) ;
        let arr : any = [accounts[1].address , "User" , "Test" , 30 ] ; 
        const noteInfo = await note.getNote(accounts[0].address)
        for (var i = 0; i < noteInfo.length - 1 ; i++) {
            expect(noteInfo[i]).to.equal(arr[i]);
        }
       
    })

    it('STEP 5: updateNote fail', async () => {
        await note.connect(accounts[1]).newNote(accounts[2].address , "Alex" , "Demianenko" , 20) ; 
        await expect(note.connect(accounts[1]).updateNote(accounts[1].address , accounts[1].address , "User" , "Test",30)).to.be.revertedWith("You must be the owner of the contract!");
    })
    it('STEP 6: updateNote fail', async () => {
        try {
            await note.connect(accounts[1]).newNote(accounts[2].address , "Alex" , "Demianenko" , 20) ; 
            await note.updateNote(accounts[0].address , accounts[1].address , "User" , "Test",256) ;
        }
        catch(e: any) {
            expect(e.message).to.equal("age it's not real!") 
        }
    })
    
    it('STEP 7: getNote fail', async () => {
        await expect(note.getNote(accounts[1].address)).to.be.revertedWith("object does not exist");
 
    })
    
    it('STEP 8: ownerShip  succes', async () => {
        await note.ownerShip(accounts[1].address)
        expect(await note.owner()).to.equal(accounts[1].address) ; 
 
    })

    it('STEP 9: ownerShip  fail', async () => {
        await expect(note.connect(accounts[1]).ownerShip(accounts[1].address)).to.be.revertedWith("You must be the owner of the contract!")
    })
    

});
