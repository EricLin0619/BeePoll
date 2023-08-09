import { useState } from "react";
import { registerUser } from "../../services/contractApi/contract";
import { useAccount } from "wagmi";
import { onGet } from "../../services/did/webAuthnUtils";
const { buildPoseidon } = require('circomlibjs')

export default function VerifyVcButton(props: any) {
  const [vc, setVc] = useState("");
  const hexToDecimal = (hex: string) => BigInt('0x' + hex).toString()
  const { address } = useAccount();
  const handleButtonClick = async () => {
    const localWebAuthnId = await onGet()
    console.log("localWebAuthnId", localWebAuthnId)
    if (document && localWebAuthnId) {
      (
        document.getElementById("my_modal_2") as HTMLFormElement
      ).showModal();
    }
  }

  async function handleVerify() {
    const data = JSON.parse(vc);
    const inputs = data.credentialStatus.credentialHash
    props.setCredentialHash(inputs);
    // const poseidonHash = poseidon.F.toString(poseidon([hexToDecimal(inputs)]))
    // await registerUser(address as `0x${string}`, poseidonHash)
  }

  return (
    <div>
      <button className="btn btn-outline px-2 btn-info" onClick={() => {
        handleButtonClick()
      }}>Verify VC</button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box p-8 h-1/2 flex flex-col">
          <h3 className="font-bold text-lg text-white">
            Please input your VC data
          </h3>
          <div className="mt-5 mb-6 h-full">
            <textarea className="textarea textarea-bordered h-full w-full" placeholder="Your VC" onChange={(e)=>{setVc(e.target.value)}}></textarea>
          </div>
          <button className="btn btn-outline btn-success btn-info px-2" onClick={handleVerify}>Verify</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}