import { task } from 'hardhat/config'

task('newNote', 'Creating a new note')
    .addParam('note', 'note address')
	.setAction(async ({ note }, { ethers }) => {
		let acauntAddr = "0x4e555E396e58D8dDF90a83dd3AcD52a266BeaAEd"
		let name = "Alex"
		let surname = "Demianenko"
		let age = 20
		const contract = await ethers.getContractAt('NoteContract', note)
		await contract.newNote(acauntAddr,name, surname, age)
		console.log("Created a new note succes")
	})

                                                                                                                                                                          import { task } from 'hardhat/config'

task('newNote', 'Creating a new note')
    .addParam('note', 'note address')
	.setAction(async ({ note }, { ethers }) => {
		let acauntAddr = "0x4e555E396e58D8dDF90a83dd3AcD52a266BeaAEd"
		let name = "Alex"
		let surname = "Demianenko"
		let age = 20
		const contract = await ethers.getContractAt('NoteContract', note)
		await contract.newNote(acauntAddr,name, surname, age)
		console.log("Created a new note succes")
	})

