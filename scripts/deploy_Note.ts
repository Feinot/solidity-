import { NoteContract } from '../typechain'
import {ethers, run} from 'hardhat'
import {delay} from '../utils'

async function deployNoteContract() {
	const Note = await ethers.getContractFactory('NoteContract')
	console.log('starting deploying NoteContract...')
	const note = await Note.deploy() as NoteContract
	console.log('NoteContract deployed with address: ' + note.address)
	console.log('wait of deploying...')
	await note.deployed()
	console.log('wait of delay...')
	await delay(25000)
	console.log('Deployed!')
}

deployNoteContract()
.then(() => process.exit(0))
.catch(error => {
	console.error(error)
	process.exit(1)
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              import { NoteContract } from '../typechain'
import {ethers, run} from 'hardhat'
import {delay} from '../utils'

async function deployNoteContract() {
	const Note = await ethers.getContractFactory('NoteContract')
	console.log('starting deploying NoteContract...')
	const note = await Note.deploy() as NoteContract
	console.log('NoteContract deployed with address: ' + note.address)
	console.log('wait of deploying...')
	await note.deployed()
	console.log('wait of delay...')
	await delay(25000)
	console.log('Deployed!')
}

deployNoteContract()
.then(() => process.exit(0))
.catch(error => {
	console.error(error)
	process.exit(1)
})