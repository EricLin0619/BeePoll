import PersonalDIDCard from "./card/personalDIDCard";
import Github from "./card/githubCard";
import { handleDidRegistration } from "../services/did/handleDidRegirtration";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { useUser } from "@auth0/nextjs-auth0/client";
import VerifyVcButton from "./button/verifyVcButton";
import {
  checkDidForMatchingGithubSub,
  getAccessToken,
  resolveDid,
} from "../services/did/did";
import RevealVcCard from "./card/revealVcCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import { handleGetCredential } from "../services/did/handleGetCredential";
import { useTheme } from "next-themes";
import { registerUser } from "../services/contractApi/contract";
const { buildPoseidon } = require("circomlibjs");

export default function Identity(props: any) {
  const githubUser = useUser();
  const { address, isConnected } = useAccount();
  const [did, setDid] = useState("");
  const [didDocument, setDidDocument] = useState<any>();
  const [webAuthnId, setWebAuthnId] = useState("");
  const [vcData, setVcData] = useState("");
  const { theme } = useTheme();
  const hexToDecimal = (hex: string) => BigInt("0x" + hex).toString();

  useEffect(() => {
    async function getDid() {
      const did = await handleDidRegistration(address);
      const didDocument = await resolveDid(did, await getAccessToken()).then(
        (res) => res?.didDocument
      );
      setDid(did);
      setDidDocument(didDocument);
    }

    if (isConnected) {
      getDid();
    }
  }, [address, isConnected, did]);

  const handleButtonClick = async () => {
    // const hasService = didDocument && didDocument["service"][0];
    // if (hasService) {
    //   toast("Credential Already Exists", {
    //     hideProgressBar: true,
    //     theme: theme === "dark" ? "dark" : "light",
    //     autoClose: 1000,
    //     toastId: "fail1",
    //   })
    //   return;
    // } else {
    //   router.push("/api/auth/login");
    // }
    router.push("/api/auth/login");
  };

  async function getVC(did: any, address: any, githubUser: any) {
    const res = await handleGetCredential(
      did,
      address as `0x${string}`,
      githubUser
    );
    const credentialHash = res.vc.credentialStatus.credentialHash;
    setVcData(JSON.stringify(res.vc));
    if (document) {
      (
        document.getElementById("my_modal_4") as HTMLFormElement
      ).showModal();
    }
    const poseidon = await buildPoseidon();
    const poseidonHash = poseidon.F.toString(
      poseidon([hexToDecimal(credentialHash)])
    );
    await registerUser(address as `0x${string}`, poseidonHash);
    setWebAuthnId(res.webAuthnId);
  }

  return (
    <div className="dark:bg-slate-800">
      <div className="flex mt-3">
        <ul className="steps mx-auto">
          <li className={githubUser ? `step step-primary w-28` : `step w-28`}>Github login</li>
          <li className={vcData ? `step step-primary w-28` : `step w-28`}>Get credential</li>
          <li className={props.credentialHash ? `step step-primary w-28` : `step w-28`}>Verify VC</li>
          <li className={`step w-28`}>Vote</li>
        </ul>
      </div>
      <RevealVcCard vcData={vcData} />
      <div className="flex mt-10 w-1/2">
        <p className="font-mono text-black font-bold text-3xl ml-5 pt-2 dark:text-white">
          IDENTITY
        </p>
        <div className="flex space-x-4 ml-auto">
          <VerifyVcButton setCredentialHash={props.setCredentialHash} />
          <div
            className="tooltip"
            data-tip={
              did === "" ? "Connect Wallet Before Getting Credential" : null
            }
          >
            <button
              className={"btn btn-outline px-2 h-1/3 btn-warning"}
              disabled={!did
              }
              onClick={() => {
                handleButtonClick()
              }}
            >
              Gihub Login
            </button>

            <button
              className={"btn btn-outline px-2 h-1/3 btn-warning"}
              disabled={!did
              }
              style={{ marginLeft: "10px" }}
              onClick={() => {
                getVC(did, address, githubUser)
              }}
            >
              Get Credential
            </button>
            {/* <Link href="/api/auth/logout"> logout </Link> */}
          </div>
          <ToastContainer />
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
              <span className="font-mono text-black text-xl ml-1 mt-3 mb-7 dark:text-white">
                CREDENTIALS
              </span>
            </div>
            <div className="flex items-center">
              <Github handleCopyClick={props.handleCopyClick} did={did} />
            </div>
          </div>
        </div>
    </div>
  );
}
