import { task } from 'hardhat/config'

task('getNote', 'get note')
    .addParam('note', 'note address')
    .addParam('user', 'user address')
	.setAction(async ({ note, user }, { ethers }) => {
		const contract = await ethers.getContractAt('NoteContract', note)
		const info = await contract.getNote(user)
		console.log("get info about not succes : " + info.toString())
	})

                                                                                      import { task } from 'hardhat/config'

task('getNote', 'get note')
    .addParam('note', 'note address')
    .addParam('user', 'user address')
	.setAction(async ({ note, user }, { ethers }) => {
		const contract = await ethers.getContractAt('NoteContract', note)
		const info = await contract.getNote(user)
		console.log("get info about not succes : " + info.toString())
	})

