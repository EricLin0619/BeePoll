import ProposalCard from "./card/proposalCard"
export default function Proposals() {
  return (
    <div className="mb-10 grid grid-cols-4 justify-items-center mt-12">
      <ProposalCard/>
      <ProposalCard/>
      <ProposalCard/>
      <ProposalCard/>
    </div>
  )
}
