import fs from 'fs'
import { task } from 'hardhat/config'

task('verify:contract', 'Verify deployed contract')
  .addParam('file')
  .addParam('contract')
  .setAction(async ({ file, contract }, hre) => {
    try {
      const contractAddress = fs.readFileSync(`scripts/address/${hre.network.name}/mainContract.json`)
      const addressData = JSON.parse(contractAddress.toString())
      await hre.run('verify:verify', {
        address: addressData.main,
        constructorArguments: [],
        contract: `contracts/${file}.sol:${contract}`,
      })
    } catch (e) {
      console.log(e)
    }
  },
  )
  
  task('verify:beepoll', 'Verify deployed contract')
  .setAction(async (_, hre) => {
    try {
      const contractAddress = fs.readFileSync(`scripts/address/${hre.network.name}/BeePoll.json`)
      const addressData = JSON.parse(contractAddress.toString())
      await hre.run('verify:verify', {
        address: addressData.main,
        constructorArguments: [],
        contract: 'contracts/BeePoll.sol:BeePoll',
      })
    } catch (e) {
      console.log(e)
    }
  },
  )
