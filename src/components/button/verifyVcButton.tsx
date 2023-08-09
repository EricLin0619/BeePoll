import { onGet } from "../../services/webAuthnUtils";

export default function VerifyVcButton() {

  const handleButtonClick = async () => {
    const localWebAuthnId = await onGet()
    console.log("localWebAuthnId", localWebAuthnId)
    if (document && localWebAuthnId) {
      (
        document.getElementById("my_modal_2") as HTMLFormElement
      ).showModal();
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
            <textarea className="textarea textarea-bordered h-full w-full" placeholder="Your VC"></textarea>
          </div>
          <button className="btn btn-outline btn-success btn-info px-2">Verify</button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}