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

    const contractAddress = fs.readFileSync(`scripts/address/${hre.network.name}/HimitsuVerifier.json`)
    const himitsuAddress = JSON.parse(contractAddress.toString())

    const feeData = await hre.ethers.provider.getFeeData()
    const contractFactory = await hre.ethers.getContractFactory('contracts/BeePoll.sol:BeePoll')
    // if you mint in constructor, you need to add value in deploy function
    const deployContract = await contractFactory.connect(signer).deploy(himitsuAddress.main, {
      maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
      maxFeePerGas: feeData.maxFeePerGas,
      gasLimit: 4000000,
    })
    console.log(`BeePoll.sol deployed to ${deployContract.address}`)

    const address = {
      main: deployContract.address,
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, 'BeePoll.json', addressData)

    await deployContract.deployed()
    
    if (verify) {
      console.log('verifying contract...')
      await deployContract.deployTransaction.wait(5)
      try {
        await hre.run('verify:verify', {
          address: deployContract.address,
          constructorArguments: [himitsuAddress.main],
          contract: 'contracts/BeePoll.sol:BeePoll',
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  )

  task('deploy:himitsu', 'Deploy contract himitsu')
  .addFlag('verify', 'Validate contract after deploy')
  .setAction(async ({verify}, hre) => {
    await hre.run('compile')
    const [signer] = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory('contracts/HimitsuVerifier.sol:Verifier')
    // if you mint in constructor, you need to add value in deploy function
    const feeData = await hre.ethers.provider.getFeeData()
    const deployContract = await contractFactory.connect(signer).deploy({
      maxPriorityFeePerGas: feeData.maxPriorityFeePerGas,
      maxFeePerGas: feeData.maxFeePerGas,
      gasLimit: 4000000,
    })
    console.log(`HimitsuVerifier.sol deployed to ${deployContract.address}`)

    const address = {
      main: deployContract.address,
    }
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, 'HimitsuVerifier.json', addressData)

    await deployContract.deployed()
    
    if (verify) {
      console.log('verifying contract...')
      await deployContract.deployTransaction.wait(5)

      try {
        await hre.run('verify:verify', {
          address: deployContract.address,
          constructorArguments: [],
          contract: 'contracts/HimitsuVerifier.sol:Verifier',
        })
      } catch (e) {
        console.log(e)
      }
    }
  },
  )
