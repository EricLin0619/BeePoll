export default function VerifyVcButton() {
    return (
      <div>
        {/* Open the modal using ID.showModal() method */}
        {/* onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_2") as HTMLFormElement
              ).showModal();
            }
          }} */}
        <button className="btn btn-outline px-2 btn-info" onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_2") as HTMLFormElement
              ).showModal();
            }
          }}>Verify VC</button>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box p-8">
            <h3 className="font-bold text-lg text-white">
              Please input your VC data
            </h3>
            <div className="mt-2">
              <input
                type="text"
                placeholder="VC ID"
                className="input input-bordered w-full my-4"
              />
              <input
                type="text"
                placeholder="name"
                className="input input-bordered w-full my-4"
              />
              <input
                type="text"
                placeholder="nickname"
                className="input input-bordered w-full my-4"
              />
              <input
                type="text"
                placeholder="picture"
                className="input input-bordered w-full my-4"
              />
              <input
                type="text"
                placeholder="sub"
                className="input input-bordered w-full my-4"
              />
            </div>
            <button className="btn btn-outline btn-success my-2 btn-info px-2">Verify</button>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    );
  }