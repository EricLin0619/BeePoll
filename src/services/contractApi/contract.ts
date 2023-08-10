import { writeContract, prepareWriteContract, readContract, getNetwork } from "@wagmi/core";
import { BytesLike, ethers } from "ethers";
import ABI from "./ABI.json";
import { zkproof } from "./verify";
const { buildPoseidon } = require("circomlibjs");

const contractAddress: any = {
  "Goerli": "0xCEFbaE8c6afEdC5C5e312B34fd8993EfD076d130",
  "dojima": "0x1bcD4B2C0A368a9E4a09D7ee158B88a28A7B8872"
}
// const { chain }: any = useNetwork();
// const contractAddress = chain !== undefined ? addressBook[chain!.name] as string: '';
// const contractAddress = "0xCEFbaE8c6afEdC5C5e312B34fd8993EfD076d130"
const goerliId = 5;
const provider = new ethers.providers.JsonRpcProvider(
  "https://ethereum-goerli.publicnode.com"
);
const dojimaProvider = new ethers.providers.JsonRpcProvider(
  "https://api-test.d11k.dojima.network:8545/"
);
const signer = new ethers.Wallet(
  process.env.NEXT_PUBLIC_PRIVATE_KEY as BytesLike,
  provider
);
const dojimaSigner = new ethers.Wallet(
  process.env.NEXT_PUBLIC_PRIVATE_KEY as BytesLike,
  dojimaProvider
);
const contract = new ethers.Contract(contractAddress.Goerli, ABI, signer);
const dojimaContract = new ethers.Contract(contractAddress.dojima, ABI, dojimaSigner);
const contractBook: any = {
  "Goerli": contract,
  "dojima": dojimaContract
}
const hexToDecimal = (hex: string) => BigInt('0x' + hex).toString()

export async function registerUser(
  userAddress: string,
  poseidonHash: string,
) {
  const {chain} = getNetwork();
  const contracts = contractBook[chain!.name]
  const data = contracts.registerUser(userAddress, poseidonHash);
}

export async function vote(credentialHash: string, proposalId: number, accept: boolean) {
    const proof = await zkproof(credentialHash)
    const {chain} = getNetwork();

    const config = await prepareWriteContract({
      address: contractAddress[chain!.name],
      abi: ABI,
      chainId: goerliId,
      functionName: "vote",
      args: [proposalId, accept, proof],
    });
    await writeContract(config);
} // untest

export async function createProposal(name: string, endTime: number) {
  const {chain} = getNetwork();

  const config = await prepareWriteContract({
    address: contractAddress[chain!.name],
    abi: ABI,
    chainId: goerliId,
    functionName: "createProposals(string,uint256)",
    args: [name, endTime],
  });
  await writeContract(config);
}

export async function getResult(proposal: number) {
  const {chain} = getNetwork();

  const data = await readContract({
    address: contractAddress[chain!.name],
    abi: ABI,
    chainId: goerliId,
    functionName: "getResult(uint256)",
    args: [proposal],
  });
  return data;
}

export async function getBlockTime() {
  const {chain} = getNetwork();

  const data = await readContract({
    address: contractAddress[chain!.name],
    abi: ABI,
    chainId: goerliId,
    functionName: "getBlockTime()",
    args: [],
  });
  return data;
}

export async function getProposal(proposalId: number) {
  const {chain} = getNetwork();
  const data = await readContract({
    // @ts-ignore
    address: contractAddress[chain!.name],
    abi: ABI,
    chainId: goerliId,
    functionName: "proposals(uint256)",
    args: [proposalId],
  });
  return data;
}

export async function getProposalCount() {
  const {chain} = getNetwork();

  const data = await readContract({
    address: contractAddress[chain!.name],
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
