import React from "react";
import DetailCard from "../components/card/detailCard";
import NoCard from "../components/card/noCard";
import YesCard from "../components/card/yesCard";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { proposalId, proposalBody, acceptCount, denyCount, creater, endTime, credentialHash } = router.query as any;

  return (
    <div className="flex justify-center my-10 dark:bg-slate-800">
      <DetailCard 
      proposalId={proposalId}
      creater={creater}
      proposalBody={proposalBody}
      acceptCount={acceptCount}
      denyCount={denyCount}
      endTime={endTime}
      credentialHash={credentialHash}
      />
      <div>
        <YesCard />
        <NoCard />
      </div>
    </div>
  );
}
