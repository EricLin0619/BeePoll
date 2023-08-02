import PersonalDIDCard from "./card/personalDIDCard";
import Github from "./card/githubCard";
import DiscordCard from "./card/discordCard";
import { issueVc, getVc } from "../services/vc";
import { handleDidRegistration } from "../services/handleDidRegirtration";
import { resolveDid, getAccessToken } from "../services/did";
import { addVcToDid } from "../services/addVcToDid";
import { useState, useEffect, FormEvent } from "react";
import { useAccount } from "wagmi";
import { log } from "console";
import { useRouter } from "next/router";
import { supported, create, get } from "@github/webauthn-json";
import { generateChallenge } from "../services/utils";

//如果有vc ，就不用再指紋辨識了
export default function Identity(props: any) {
  const router = useRouter();

  const onCreate = async () => {
    const credential = await create({
      publicKey: {
        challenge: generateChallenge(),
        rp: {
          name: "next-webauthn",
          // TODO: Change
          id: "ericlin0619.github.io",
        },
        user: {
          id: window.crypto.randomUUID(),
          name: "test",
          displayName: "test" as string,
        },

        pubKeyCredParams: [{ alg: -7, type: "public-key" }],
        timeout: 60000,
        attestation: "direct",
        authenticatorSelection: {
          residentKey: "required",
          userVerification: "required",
        },
      },
    });
    console.log("create credential", JSON.stringify(credential, null, 2))
    return credential.id;
  }

  const onGet = async (event: FormEvent) => {
    event.preventDefault();

    const credential = await get({
      publicKey: {
        challenge: generateChallenge(),//generateChallenge(),
        timeout: 60000,
        userVerification: "required",
        rpId: "ericlin0619.github.io",
      },
    });

    console.log("credential", JSON.stringify(credential, null, 2))
  };



  const { address, isConnected } = useAccount();
  const [did, setDid] = useState("");

  async function handleGetCredential() {
    const didDoc = await resolveDid(did, await getAccessToken());
    const webAuthnId = await onCreate();
    if (didDoc?.didDocument?.service[0] === undefined) {
      console.log("create vc")
      const webAuthnId = await onCreate();
      console.log("webAuthnId", webAuthnId)
      const vcId = await issueVc(did, webAuthnId);
      const data = await addVcToDid(address, vcId, webAuthnId)
      console.log(data)
    }
    else {
      console.log("already have vc")
      console.log("did services:", didDoc?.didDocument?.service[0])
    }


  }

  useEffect(() => {
    async function getDid() {
      const did = await handleDidRegistration(address);
      setDid(did);
    }
    if (isConnected) {
      getDid();
    }
  }, [address, isConnected, did]);


  return (
    <div className="dark:bg-slate-800">
      <div className="flex mt-10 w-1/2">
        <p className="font-mono text-black font-bold text-3xl ml-5  dark:text-white">
          IDENTITY
        </p>
        <button className="btn btn-outline h-1/3 p-1 btn-warning ml-auto" onClick={onGet}>
          use webAuthn
        </button>
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
