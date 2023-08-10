import { writeContract, prepareWriteContract, readContract } from "@wagmi/core";
import { useNetwork } from "wagmi";
import { BytesLike, ethers } from "ethers";
import ABI from "./ABI.json";
import { zkproof } from "./verify";
const { buildPoseidon } = require("circomlibjs");

// const addressBook: any = {
//   "Goerli": "0xCEFbaE8c6afEdC5C5e312B34fd8993EfD076d130",
//   "Dojima": "0x1bcD4B2C0A368a9E4a09D7ee158B88a28A7B8872"
// }
// const { chain }: any = useNetwork();
// const contractAddress = chain !== undefined ? addressBook[chain!.name] as string: '';
const contractAddress = "0xCEFbaE8c6afEdC5C5e312B34fd8993EfD076d130"
const goerliId = 5;
const provider = new ethers.providers.JsonRpcProvider(
  "https://ethereum-goerli.publicnode.com"
);
const signer = new ethers.Wallet(
  process.env.NEXT_PUBLIC_PRIVATE_KEY as BytesLike,
  provider
);
const contract = new ethers.Contract(contractAddress, ABI, signer);
const hexToDecimal = (hex: string) => BigInt('0x' + hex).toString()

export async function registerUser(
  userAddress: string,
  poseidonHash: string
) {
  const data = contract.registerUser(userAddress, poseidonHash);
}

export async function vote(credentialHash: string, proposalId: number, accept: boolean) {
    const proof = await zkproof(credentialHash)

    const config = await prepareWriteContract({
      address: contractAddress,
      abi: ABI,
      chainId: goerliId,
      functionName: "vote",
      args: [proposalId, accept, proof],
    });
    await writeContract(config);
} // untest

export async function createProposal(name: string, endTime: number) {
  const config = await prepareWriteContract({
    address: contractAddress,
    abi: ABI,
    chainId: goerliId,
    functionName: "createProposals(string,uint256)",
    args: [name, endTime],
  });
  await writeContract(config);
}

export async function getResult(proposal: number) {
  const data = await readContract({
    address: contractAddress,
    abi: ABI,
    chainId: goerliId,
    functionName: "getResult(uint256)",
    args: [proposal],
  });
  return data;
}

export async function getBlockTime() {
  const data = await readContract({
    address: contractAddress,
    abi: ABI,
    chainId: goerliId,
    functionName: "getBlockTime()",
    args: [],
  });
  return data;
}

export async function getProposal(proposalId: number) {
  const data = await readContract({
    address: contractAddress,
    abi: ABI,
    chainId: goerliId,
    functionName: "proposals(uint256)",
    args: [proposalId],
  });
  return data;
}

export async function getProposalCount() {
  const data = await readContract({
    address: contractAddress,
    abi: ABI,
    chainId: goerliId,
    functionName: "totalProposals()",
    args: [],
  });
  return data;
}

export async function getProposals() {
  let proposals = [];
  const count = (await getProposalCount()) as number;
  for (let i = 0; i < count; i++) {
    const proposal = await getProposal(i);
    proposals.push(proposal);
  }
  return proposals;
}
