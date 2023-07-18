import { useRouter } from "next/router";
import SmallCountdown from "./smallCountdown";

export default function ProposalCard() {
  const router = useRouter();
  function handleClick() {
    router.push("/card");
  }
  return (
    <div className="card w-[350px] p-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-3 cursor-pointer text-[#2E1503] " onClick={handleClick}>
      <div className="card-body">
        <div className="flex items-center">
          <h2 className="card-title">Vote #161</h2>
          <SmallCountdown />
        </div>
        <p className="text-left text-[#2E1503]">We are using cookies for no reason. We are using cookies for no reason.</p>
        <div className="flex justify-between">
          <p className="text-xs text-left font-bold">Yes</p>
          <p className="text-xs text-right font-bold">60%</p>
        </div>
        <progress
          className="progress progress-success w-auto"
          value={60}
          max="100"
        ></progress>
        <div className="flex justify-between">
          <p className="text-xs text-left font-bold">No</p>
          <p className="text-xs text-right font-bold">40%</p>
        </div>
        <progress
          className="progress progress-error w-auto text-[#FF5E6C]"
          value={40}
          max="100"
        ></progress>
        <div className="flex justify-between mt-4">
          <button className="btn btn-outline btn-success w-20 border-2">Accept</button>
          <button className="btn btn-outline btn-error w-20 border-2">Deny</button>
        </div>
      </div>
    </div>
  );
}
