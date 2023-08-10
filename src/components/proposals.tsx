import ProposalCard from "./card/proposalCard";
import SelectBar from "./selectBar";
import { getProposals } from "../services/contractApi/contract";
import CreateProposalButton from "./button/createProposalButton";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function Proposals(props: any) {
  const [proposals, setProposals] = useState<any>([]);
  const [proposalStatus, setProposalStatus] = useState("")
  useEffect(() => {
    getProposals().then((res) => {
      setProposals(res);
    });
  }, []);

  return (
    <div className="mt-10">
      <div className="flex mt-10 w-1/2">
        <p className="font-mono text-black font-bold text-3xl ml-5 mt-3 dark:text-white">
          VOTING
        </p>
        <CreateProposalButton />
      </div>
      <div className="divider ml-5 mr-auto w-1/2 mt-0 mb-4"></div>
      <SelectBar setProposalStatus={setProposalStatus}/>
      <div className="mb-10 grid xl-[1320px] xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center">
        {proposals.map((proposal: any, index: number) => {
          let status = "Open"
          if(Date.now().valueOf() > new Date(dayjs.unix(proposal.endTime).format("MM/DD/YYYY HH:mm:ss")).valueOf()) {
            status = "Closed"
          }
          if(proposalStatus === status || proposalStatus === "All" || proposalStatus === "Status") {   
            return (
              <ProposalCard
                proposalId={index}
                creater={proposal.creater}
                proposalBody={proposal.name}
                acceptCount={proposal.acceptCount}
                denyCount={proposal.denyCount}
                endTime={proposal.endTime}
                credentialHash={props.credentialHash}
                status={status}
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
