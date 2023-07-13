import ProposalCard from "./proposalCard"
export default function Cards() {
  return (
    <div className="mb-5 grid grid-cols-4 gap-4 justify-items-center mt-6 mx-5">
      <ProposalCard/>
      <ProposalCard/>
      <ProposalCard/>
      <ProposalCard/>
    </div>
  )
}
