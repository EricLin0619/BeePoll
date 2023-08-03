import PersonalDIDCard from "./card/personalDIDCard";
import Github from "./card/githubCard";
import { issueVc } from "../services/vc";
import { handleDidRegistration } from "../services/handleDidRegirtration";
import { addVcToDid } from "../services/addVcToDid";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useUser } from "@auth0/nextjs-auth0/client";
import AnchorLink from "./layout/anchorLink";
import { onCreate } from "../services/webAuthnUtils";

export default function Identity(props: any) {
  const user = useUser();
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
  }, [address, isConnected, did]);

  useEffect(() => {
    async function handleGetCredential() {
      console.log("create vc")
      const webAuthnId = await onCreate(did);
      console.log("webAuthnId", webAuthnId)
      const vcId = await issueVc(did, user.user, webAuthnId);
      const userSub = user.user?.sub as string;
      const data = await addVcToDid(address, vcId, userSub, webAuthnId)
      console.log(data)
    }

    console.log("github user", JSON.stringify(user, null, 2))
    if (did != "" && user.user != undefined) {
      handleGetCredential();
    }

  }, [address, did, user])


  return (
    <div className="dark:bg-slate-800">
      <div className="flex mt-10 w-1/2">
        <p className="font-mono text-black font-bold text-3xl ml-5  dark:text-white">
          IDENTITY
        </p>
        <a href="/BeePoll/api/auth/login" className="btn btn-outline h-1/3 p-1 btn-warning ml-auto">Get Credenital</a>
      </div>
      <div className="divider ml-5 mr-auto w-1/2 my-[0px]"></div>
      <div className="flex items-center mt-2">
        <div>
          <p className="font-mono text-black text-xl ml-5 mt-3 mb-7 dark:text-white">
            LINKED WALLET
          </p>
          <PersonalDIDCard handleCopyClick={props.handleCopyClick} did={did} />
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
    </div >
  );
}
