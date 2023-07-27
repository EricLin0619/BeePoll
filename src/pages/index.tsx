import Proposals from "../components/proposals";
import Identity from "../components/identity";
import CopySuccess from "../components/copySuccess";
import { useState } from "react";

function Page() {
  const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className="relative dark:bg-slate-800">
      {copied && <CopySuccess />}
      <Identity handleCopyClick={handleCopyClick} />
      <Proposals />
    </div>
  );
}

export default Page;
