import { createProposal } from "../../services/vote";

export default function VoteButton() {
  return (
    <div className="ml-auto">
      <button
        className="btn btn-outline h-1/3 btn-warning px-2"
        onClick={() => {
          if (document) {
            (
              document.getElementById("my_modal_2") as HTMLFormElement
            ).showModal();
          }
        }}
      >
        New Vote
      </button>
      <dialog id="my_modal_2" className="modal">
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
              placeholder="endtime"
              className="input input-bordered w-full my-4"
            />
          </div>
          <button className="btn btn-outline btn-success my-2 btn-warning px-2">
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
