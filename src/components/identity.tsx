import PersonalDIDCard from "./card/personalDIDCard";
import Github from "./card/githubCard";
import DiscordCard from "./card/discordCard";
import { issueVc, getVc } from "../services/vc";
import { handleDidRegistration } from "../services/handleDidRegirtration";
import { resolveDid, getAccessToken } from "../services/did";
import { addVcToDid } from "../services/addVcToDid";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { log } from "console";

export default function Identity(props: any) {
  async function handleGetCredential() {
    const vcId = await issueVc(did);
    const data = await addVcToDid(address, vcId)
    console.log(data)
  }

  const { address, isConnected } = useAccount();
  const [did, setDid] = useState("");

  useEffect(() => {
    async function getDid() {
      const did = await handleDidRegistration(address);
      setDid(did);
    }
    if (isConnected) {
      getDid();
    }
  }, [address, isConnected,did]);


  return (
    <div className="dark:bg-slate-800">
      <div className="flex mt-10 w-1/2">
        <p className="font-mono text-black font-bold text-3xl ml-5  dark:text-white">
          IDENTITY
        </p>
        <button className="btn btn-outline h-1/3 p-1 btn-warning ml-auto" onClick={handleGetCredential}>
          Get Credential
        </button>
      </div>
      <div className="divider ml-5 mr-auto w-1/2 my-[0px]"></div>
      <div className="flex items-center mt-2">
        <div>
          <p className="font-mono text-black text-xl ml-5 mt-3 mb-7 dark:text-white">
            LINKED WALLET
          </p>
          <PersonalDIDCard handleCopyClick={props.handleCopyClick} did= {did}/>
        </div>
        <div className="ml-7">
          <div className="flex items-center">
            <span className="font-mono text-black text-xl ml-5 mt-3 mb-7 dark:text-white">
              CREDENTIALS
            </span>
          </div>
          <div className="flex items-center">
            <Github handleCopyClick={props.handleCopyClick} did={did} />
            {/* <DiscordCard handleCopyClick={props.handleCopyClick} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
