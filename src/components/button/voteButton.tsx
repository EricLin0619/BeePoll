import { createProposal } from "../../services/vote";

export default function VoteButton() {
  return (
    <div className="ml-auto">
      <button
        className="btn btn-outline h-1/3 btn-warning px-2"
        onClick={() => {
          if (document) {
            (
              document.getElementById("my_modal_3") as HTMLFormElement
            ).showModal();
          }
        }}
      >
        New Vote
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box p-8">
          <h3 className="font-bold text-lg text-white">
            Create your proposal
          </h3>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Content"
              className="input input-bordered w-full my-4"
            />
            <input
              type="text"
              placeholder="End time"
              className="input input-bordered w-full my-4"
            />
          </div>
          <button className="btn btn-outline btn-success mb-2 mt-4 btn-warning px-2">
            CREATE
          </button>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
