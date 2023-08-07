import PersonalDIDCard from "./card/personalDIDCard";
import Github from "./card/githubCard";
import { issueVc } from "../services/vc";
import { handleDidRegistration } from "../services/handleDidRegirtration";
import { addVcToDid } from "../services/addVcToDid";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useUser } from "@auth0/nextjs-auth0/client";
import VerifyVcButton from "./button/verifyVcButton";
import AnchorLink from "./layout/anchorLink";
import { onCreate } from "../services/webAuthnUtils";
import { getAccessToken, resolveDid } from "../services/did";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";


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
      const didDocument = await resolveDid(did, await getAccessToken());
      if (didDocument?.didDocument?.service[0]?.serviceEndpoint === undefined) {
        console.log("create vc")
        const webAuthnId = await onCreate(did);
        console.log("webAuthnId", webAuthnId)
        const vcId = await issueVc(did, user.user, webAuthnId);
        const userSub = user.user?.sub as string;
        const data = await addVcToDid(address, vcId, userSub, webAuthnId)
        console.log(data)
      }
      else {
        console.log("vc already created")
        toast("Verifiable Credentials already created", { hideProgressBar: true, theme: 'dark' });
      }
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
        <div className="flex space-x-4 ml-auto">
          <VerifyVcButton />
          <Link
            href="/api/auth/login"
            className="btn btn-outline px-2 h-1/3 btn-warning"
          >
            Get Credenital
          </Link>
          <a
            href="api/auth/logout"
            className="btn btn-outline px-2 h-1/3 btn-warning"
          >
            Logout
          </a>
          <ToastContainer limit={2} />
        </div>
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
    </div>
  );
}