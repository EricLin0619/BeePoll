import { useRouter } from "next/router";
export default function ProposalCard() {
  const router = useRouter();
  function handleClick() {
    router.push("/card");
  }
  return (
    <div className="card w-80 p-4 bg-[#fff5d7] shadow-md mt-3 cursor-pointer text-[#2E1503] " onClick={handleClick}>
      <div className="card-body">
        <div className="flex justify-center">
          <h2 className="card-title text-center">Cookies!</h2>
        </div>
        <p className="text-left text-[#2E1503]">We are using cookies for no reason.We are using cookies for no reason.</p>
        <div className="flex justify-between">
          <p className="text-xs text-left">Yes</p>
          <p className="text-xs text-right">10%</p>
        </div>
        <progress
          className="progress progress-error w-56"
          value={10}
          max="100"
        ></progress>
        <div className="flex justify-between">
          <p className="text-xs text-left">No</p>
          <p className="text-xs text-right">50%</p>
        </div>
        <progress
          className="progress progress-error w-56 text-[#FF5E6C]"
          value={50}
          max="100"
        ></progress>
        <div className="flex justify-between mt-4">
          <button className="btn btn-outline btn-primary w-20 border-2">Accept</button>
          <button className="btn btn-outline btn-secondary w-20 border-2">Deny</button>
        </div>
      </div>
    </div>
  );
}
