import ProposalCard from "../components/proposalCard";

function Page() {
  return (
    <div className="grid grid-cols-4 gap-4 justify-items-center mt-3.5 mx-5">
      <ProposalCard/>
      <ProposalCard/>
      <ProposalCard/>
      <ProposalCard/>
      <ProposalCard/>
    </div>
  )
}

export default Page;
