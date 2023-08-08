import ProposalCard from "./card/proposalCard";
import SelectBar from "./selectBar";
import { createProposal, getProposals } from "../services/vote";
import VoteButton from "./button/voteButton";
import { useState, useEffect } from "react";

export default function Proposals() {
  const [proposals, setProposals] = useState<any>([]);
  useEffect(() => {
    getProposals().then((res) => {
      setProposals(res);
    });
  });

  return (
    <div className="mt-10">
      <div className="flex mt-10 w-1/2">
        <p className="font-mono text-black font-bold text-3xl ml-5 mt-3 dark:text-white">
          VOTING
        </p>
        <VoteButton/>
      </div>
      <div className="divider ml-5 mr-auto w-1/2 mt-0 mb-4"></div>
      <SelectBar />
      <div className="mb-10 grid xl-[1320px] xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">
        {proposals.map((proposal: any, index: number) => {
          return (
            <ProposalCard
              proposalId={index}
              creater={proposal.creater}
              proposalBody={proposal.name}
              acceptCount={proposal.acceptCount}
              denyCount={proposal.denyCount}
              endTime={proposal.endTime}
            />
          );
        })}
      </div>
    </div>
  );
}
