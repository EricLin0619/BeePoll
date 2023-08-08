import { BigNumber } from 'ethers'
const { buildPoseidon } = require('circomlibjs')
const { groth16 } = require('snarkjs')

export async function exportSolidity({ proof, publicSignals }: any) {
  const rawCallData: string = await groth16.exportSolidityCallData(proof, publicSignals);
  const tokens = rawCallData
    .replace(/["[\]\s]/g, "")
    .split(",")
    .map(BigNumber.from);
  const [a1, a2, b1, b2, b3, b4, c1, c2, ...inputs] = tokens;
  const a: [BigNumber, BigNumber] = [a1, a2] ;
  const b: [[BigNumber, BigNumber], [BigNumber, BigNumber]] = [
    [b1, b2],
    [b3, b4],
  ]
  const c: [BigNumber, BigNumber] = [c1, c2]
  return {
    a, b, c, inputs
  }
}

export async function generateProof(circuitInputs: any, filePathWASM: any, filePathZKEY: any) {
  const { proof, publicSignals } = await groth16.fullProve(
    circuitInputs,
    filePathWASM,
    filePathZKEY
  )
  const solidityProof = await exportSolidity({ proof, publicSignals })
  return solidityProof
}
const hexToDecimal = (hex: string) => BigInt('0x' + hex).toString()

async function main() {
  // generate VC hash
  const WASM_FILE_PATH = 'circuits/himitsu.wasm'
  const ZKEY_FILE_PATH = 'circuits/himitsu.zkey'
  
  // issuer send this hash
  const poseidon = await buildPoseidon()
  const inputs = "2f3a8a8c131bba754e7335ec416e6a83b711aa96d22b5b6a2de39a2730fb912a"
  const hash = poseidon.F.toString(poseidon([hexToDecimal(inputs)]))
  console.log('poseidon hash:', hash)
  
  const circuitInputs = {
    value: `0x${inputs}`,
    hash: hash,
  }

  const proofData = await generateProof(
    circuitInputs,
    WASM_FILE_PATH,
    ZKEY_FILE_PATH
  )
  console.log(`['${proofData.a[0]._hex}', '${proofData.a[1]._hex}']`)
  console.log(`[['${proofData.b[0][0]._hex}', '${proofData.b[0][1]._hex}'],['${proofData.b[1][0]._hex}', '${proofData.b[1][1]._hex}']]`)
  console.log(`['${proofData.c[0]._hex}', '${proofData.c[1]._hex}']`)
  console.log(`['${proofData.inputs[0]._hex}']`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
