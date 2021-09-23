import { task } from 'hardhat/config'

task('updateNote', 'Updimport { task } from 'hardhat/config'

task('updateNote', 'Update note')
    .addParam('note', 'note address')
    .addParam('user', 'user address')
	.setAction(async ({ note, user  }, { ethers }) => {
		let acauntAddr = "0x4e555E396e58D8dDF90a83dd3AcD52a266BeaAEd"
		let name = "Alex"
		let surname = "Test"
		let age = 50
		const contract = await ethers.getContractAt('NoteContract', note)
		await contract.updateNote(user ,acauntAddr,name, surname, age)
		console.log("Update note success ")
	})

