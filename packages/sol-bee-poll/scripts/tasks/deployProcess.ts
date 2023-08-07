import fs from 'fs'
import { task } from 'hardhat/config'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { writeFileSync } from '../helpers/pathHelper'

task('deploy:contract', 'Deploy contract')
  .addParam('contract')
  .setAction(async ({ contract }, hre) => {
    await hre.run('compile')
    const [signer] = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory(contract)
    // if you mint in constructor, you need to add value in deploy function
    const deployContract = await contractFactory.connect(signer).deploy()
    console.log(`TestToken.sol deployed to ${deployContract.address}`)

    const address = {
      main: deployContract.address,
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, 'mainContract.json', addressData)

    await deployContract.deployed()
  },
  )

task('deploy:beepoll', 'Deploy contract')
  .addFlag('verify', 'Validate contract after deploy')
  .setAction(async ({verify}, hre) => {
    await hre.run('compile')
    const [signer] = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory('contracts/BeePoll.sol:BeePoll')
    // if you mint in constructor, you need to add value in deploy function
    const deployContract = await contractFactory.connect(signer).deploy()
    console.log(`BeePoll.sol deployed to ${deployContract.address}`)

    const address = {
      main: deployContract.address,
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, 'BeePoll.json', addressData)

    const deployTX = await deployContract.deployed()
    deployTX.wait(3)
    if (verify) {
      console.log('verifying contract...')
      try {
        await hre.run('verify:verify', {
          address: deployContract.address,
          constructorArguments: [],
          contract: 'contracts/BeePoll.sol:BeePoll',
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  )
