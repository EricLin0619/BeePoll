import fs from 'fs'
import { task } from 'hardhat/config'
import { writeFileSync } from '../helpers/pathHelper'

task('upgrade', 'Upgrade implementation contract to proxy')
  .addParam('contract')
  .setAction(async ({ contract }, hre) => {
    await hre.run('compile')
    // Upgrading
    if (!fs.existsSync(`scripts/address/${hre.network.name}/proxyContract.json`)) {
      console.log('Not detected proxyContract json, need to deploy proxy and implementation contract first')
      return
    }
    const contractAddress = fs.readFileSync(`scripts/address/${hre.network.name}/proxyContract.json`)

    const address = JSON.parse(contractAddress.toString())
    const updateContract = await hre.ethers.getContractFactory(contract)

    console.log('Upgrading Proxy...')
    const upgraded = await hre.upgrades.upgradeProxy(address.proxy, updateContract)
    console.log('Waiting for two blocks of confirmation...')
    await upgraded.deployTransaction.wait(2)

    console.log(`Implementation Contract upgraded to ${upgraded.address}`)
    const implementationAddress = await hre.upgrades.erc1967.getImplementationAddress(upgraded.address)
    console.log(`New Implementation Contract deployed to ${implementationAddress}`)

    // Update proxyContract.json
    address.implAddr = implementationAddress
    const addressData = JSON.stringify(address)
    writeFileSync(`scripts/address/${hre.network.name}/`, 'proxyContract.json', addressData)
  },
  )
