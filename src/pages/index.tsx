import Proposals from "../components/proposals";
import Identity from "../components/identity";
import CopySuccess from "../components/copySuccess";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

function Page() {
  const [copied, setCopied] = useState(false);
  const [credentialHash, setCredentialHash] = useState("");
  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  const { isLoading } = useUser();
  return (
    <div className="relative dark:bg-slate-800">
      {copied && <CopySuccess />}
      <Identity handleCopyClick={handleCopyClick} setCredentialHash={setCredentialHash} credentialHash={credentialHash}/>
      <Proposals credentialHash={credentialHash}/>
    </div>
  );
}

export default Page;
