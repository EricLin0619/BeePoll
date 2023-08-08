import { useRouter } from "next/router";
import { vote } from "../../services/vote";
import SmallCountdown from "../countdown/smallCountdown";
import { ProposalCard } from "../../type/type"

export default function ProposalCard(props: ProposalCard) {

  const router = useRouter();
  function handleClick() {
    router.push({
      pathname: '/card',
      query: { 
        proposalId: props.proposalId,
        proposalBody: props.proposalBody,
        acceptCount: props.acceptCount,
        denyCount: props.denyCount,
        creater: props.creater,
        endTime: props.endTime,
      }
    });
  }

  function calPercentage(accept: number, deny: number, _: boolean) {
    if (_ === true) {
      const result = roundToTwoDecimalPlaces(accept / (accept + deny)) * 100
      return result
    }
    const result = roundToTwoDecimalPlaces(deny / (accept + deny)) * 100
    return result
  }

  function roundToTwoDecimalPlaces(num: number): number {
    return Number(Number(num.toFixed(3)).toFixed(2));
  }

  function handleAccept(e: any) {
    vote(props.proposalId, true)
    e.stopPropagation();
  }

  function handleDeny(e: any) {
    vote(props.proposalId, false)
    e.stopPropagation();
  }

  return (
    <div
      className=" card dark:text-white dark:bg-slate-800 dark:border-white dark:border-solid dark:border-2 w-[350px] p-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-3 cursor-pointer text-[#2E1503] "
      onClick={handleClick}
    >
      <div className="card-body">
        <div className="flex items-center mb-2">
          <h2 className="card-title">{`VOTE # ${props.proposalId+1}`}</h2>
          <SmallCountdown />
        </div>
        <p className="text-left mb-4">
          {props.proposalBody}
        </p>
        <div className="flex justify-between">
          <p className="text-xs text-left font-bold">Yes</p>
          <p className="text-xs text-right font-bold">{`${calPercentage(props.acceptCount, props.denyCount, true)}%`}</p>
        </div>
        <progress
          className="progress progress-success w-auto dark:bg-slate-950"
          value={calPercentage(props.acceptCount, props.denyCount, true)}
          max="100"
        ></progress>
        <div className="flex justify-between">
          <p className="text-xs text-left font-bold">No</p>
          <p className="text-xs text-right font-bold">{`${calPercentage(props.acceptCount, props.denyCount, false)}%`}</p>
        </div>
        <progress
          className="progress progress-error w-auto dark:bg-slate-950 text-[#FF5E6C]"
          value={calPercentage(props.acceptCount, props.denyCount, false)}
          max="100"
        ></progress>
        <div className="flex justify-between mt-4">
          <button className="btn btn-outline btn-success w-20 border-2" onClick={handleAccept}>
            Accept
          </button>
          <button className="btn btn-outline btn-error w-20 border-2" onClick={handleDeny}>
            Deny
          </button>
        </div>
      </div>
    </div>
  );
}
