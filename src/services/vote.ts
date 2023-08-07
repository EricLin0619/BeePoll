// import { writeContract, prepareWriteContract, readContract } from '@wagmi/core'
// import ABI from "../contractABI/vote.json"

// const contractAddress = "0x0000"
// const goerliId = 5

// export async function createProposal(name: string, time: number) {
//     const config = await prepareWriteContract({
//       address: contractAddress,
//       abi: ABI,
//       chainId: goerliId,
//       functionName: 'createProposals(string,uint256)',
//       args: [
//         name,
//         time
//       ],
//     })
//     await writeContract(config)
// }

// export async function vote(proposal: number, accept: boolean) {
//     const config = await prepareWriteContract({
//       address: contractAddress,
//       abi: ABI,
//       chainId: goerliId,
//       functionName: 'vote(uint256,bool)',
//       args: [
//         proposal,
//         accept
//       ]
//     })
//     await writeContract(config)
// }

// export async function getResult(proposal: number) {
//     const data = await readContract({
//         address: contractAddress,
//         abi: ABI,
//         chainId: goerliId,
//         functionName: 'getResult(uint256)',
//         args: [
//             proposal
//         ]
//     })
//     return data
// }

// export async function getBlockTime() {
//     const data = await readContract({
//         address: contractAddress,
//         abi: ABI,
//         chainId: goerliId,
//         functionName: 'getBlockTime()',
//     })
//     return data
// }