import ProposalCard from "./proposalCard"
export default function Cards() {
  return (
    <div className="mb-5 grid grid-cols-4 justify-items-center mt-6">
      <ProposalCard/>
      <ProposalCard/>
      <ProposalCard/>
      <ProposalCard/>
    </div>
  )
}
