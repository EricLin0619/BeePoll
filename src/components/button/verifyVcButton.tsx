import { useState } from "react";
import { onGet } from "../../services/did/webAuthnUtils";
import { toast } from "react-toastify";

export default function VerifyVcButton(props: any) {
  const [vc, setVc] = useState("");
  const handleButtonClick = async () => {
    if (document) {
      (
        document.getElementById("my_modal_2") as HTMLFormElement
      ).showModal();
    }
  }

  async function handleVerify() {
    const data = JSON.parse(vc);
    const localWebAuthnId = await onGet()
    const vcWebAuthnId = data.credentialDocument.credentialSubject.webAuthnId
    if (localWebAuthnId === vcWebAuthnId) {
      const inputs = data.credentialStatus.credentialHash
      props.setCredentialHash(inputs);
    }
    else {
      toast("Incorrect WebAuthnId", {
        hideProgressBar: true,
        theme: "dark",
        autoClose: 2000,
        toastId: "fail1",

      })
    }
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
            <textarea className="textarea textarea-bordered h-full w-full" placeholder="Your VC" onChange={(e) => { setVc(e.target.value) }}></textarea>
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