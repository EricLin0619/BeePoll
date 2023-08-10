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

  useEffect(() => {
    async function getVC() {
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

    const githubSub = githubUser.user?.sub;
    const isValid = address != undefined && did != "" && githubSub != undefined;
    const hasService = didDocument && didDocument["service"][0] ? true : false;

    if (isValid) {
      // checkDidForMatchingGithubSub(did, githubSub).then((checkResult) => {
      //   if (checkResult) {
      //     toast("GitHub Account Already Associated with Another DID", {
      //       hideProgressBar: true,
      //       theme: theme === "dark" ? "dark" : "light",
      //       autoClose: 1000,
      //       toastId: "fail1",
      //     });
      //   }
      // });

      // if (!hasService) {
      //   console.log("github user ", githubUser.user?.name);
      //   getVC();
      // }
      getVC()
    }
  }, [handleButtonClick, theme]);

  return (
    <div className="dark:bg-slate-800">
      <RevealVcCard vcData={vcData}/>
      <div className="flex mt-10 w-1/2">
        <p className="font-mono text-black font-bold text-3xl ml-5  dark:text-white">
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
              style={{
                opacity: did === "" ? 0.8 : 1,
                backgroundColor: theme === "dark" ? "#1e293b" : "#fdfdfd",
              }}
              disabled={!did
              }
              onClick={() => {
                handleButtonClick();
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
