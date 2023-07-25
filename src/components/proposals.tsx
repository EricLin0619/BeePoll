import ProposalCard from "./card/proposalCard"
import SelectBar from "./selectBar"

export default function Proposals() {
  return (
    <div className="mt-10">
      <div className="flex mt-10 w-1/2">
        <p className="font-mono text-black font-bold text-3xl ml-5 mt-3 dark:text-white">VOTING</p>
        <button className="btn btn-outline h-1/3 p-1 btn-warning ml-auto ">
          New Vote
        </button>
      </div>
      <div className="divider ml-5 mr-auto w-1/2 mt-0 mb-4"></div> 
      <SelectBar/>
      <div className="mb-10 grid xl-[1320px] xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">
        <ProposalCard/>
        <ProposalCard/>
        <ProposalCard/>
        <ProposalCard/>
      </div>
      
    </div>
  )
}
