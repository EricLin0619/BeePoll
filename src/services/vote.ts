export { }
import { writeContract, prepareWriteContract, readContract } from '@wagmi/core'
import ABI from "./ABI.json"

const contractAddress = "0x6ced59dBEB7308790AD62DEfBd24bd1cE71c78c7"
const goerliId = 5

export async function createProposal(name: string, time: number) {
    const config = await prepareWriteContract({
      address: contractAddress,
      abi: ABI,
      chainId: goerliId,
      functionName: 'createProposals(string,uint256)',
      args: [
        name,
        time
      ],
    })
    await writeContract(config)
}

export async function vote(proposal: number, accept: boolean) {
    const config = await prepareWriteContract({
      address: contractAddress,
      abi: ABI,
      chainId: goerliId,
      functionName: 'vote(uint256,bool)',
      args: [
        proposal,
        accept
      ]
    })
    await writeContract(config)
}

export async function getResult(proposal: number) {
    const data = await readContract({
        address: contractAddress,
        abi: ABI,
        chainId: goerliId,
        functionName: 'getResult(uint256)',
        args: [
            proposal
        ]
    })
    return data
}

export async function getBlockTime() {
    const data = await readContract({
        address: contractAddress,
        abi: ABI,
        chainId: goerliId,
        functionName: 'getBlockTime()',
        args: []
    })
    return data
}

export async function getProposal(proposalId: number) {
    const data = await readContract({
        address: contractAddress,
        abi: ABI,
        chainId: goerliId,
        functionName: 'proposals(uint256)',
        args: [
            proposalId
        ]
    })
    return data
}

export async function getProposalCount() {
    const data = await readContract({
        address: contractAddress,
        abi: ABI,
        chainId: goerliId,
        functionName: 'totalProposals()',
        args: []
    })
    return data
}

export async function getProposals() {
    let proposals = []
    const count = await getProposalCount() as number
    for (let i = 0; i < count; i++) {
        const proposal = await getProposal(i)
        proposals.push(proposal)
    }
    return proposals
}