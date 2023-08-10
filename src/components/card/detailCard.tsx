import { FaGithub, FaDiscord } from "react-icons/fa";
import { BsFingerprint } from "react-icons/bs";
import Countdown from "../countdown/countdown";
import { ProposalCard } from "../../type/type";
import { formatAddress } from "../../services/utils";
import { vote } from "../../services/contractApi/contract";

export default function DetailCard(props: ProposalCard) {
  function calPercentage() {
    if (Number(props.denyCount) === 0 && Number(props.acceptCount) === 0) return "no vote";
    if (Number(props.acceptCount) === 0 || undefined) return 100;
    if (Number(props.denyCount) === 0 || undefined) return 0;
    const result = roundToTwoDecimalPlaces(
      (Number(props.denyCount) /
        (Number(props.acceptCount) + Number(props.denyCount))) *
        100
    );
    return result;
  }

  function roundToTwoDecimalPlaces(num: number): number {
    return Number(Number(num.toFixed(3)).toFixed(2));
  }
  function handleAccept(e: any) {
    vote(props.credentialHash, Number(props.proposalId), true);
    e.stopPropagation();
  }

  function handleDeny(e: any) {
    vote(props.credentialHash, Number(props.proposalId), false);
    e.stopPropagation();
  }

  return (
    <div className="card dark:text-white dark:bg-slate-800 dark:border-white dark:border-solid dark:border-2 p-4 w-3/5 h-auto bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-[#2E1503] ">
      <div className="card-body">
        <h2 className="card-title text-3xl mb-6">{`VOTE # ${
          Number(props.proposalId) + 1
        }`}</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <p className="font-bold mb-3">DESCRIPTION</p>
            <p>{props.proposalBody}</p>
          </div>
          <div>
            <p className="font-bold mb-3">CREATED BY</p>
            <div className="flex items-center">
              <img
                src="creeper.png"
                className="w-8 h-8 rounded-l-lg"
                alt="creeper"
              />
              <span className="dark:bg-slate-900 dark:text-white bg-[#f9e547] text-[#65676a] font-bold rounded-r-lg pt-1 px-2 h-8">
                {formatAddress(props.creater)}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <p className="font-bold mb-3">VOTES</p>
            <div className="flex items-center">
              <div className=" rounded-full bg-success w-2 h-2 mr-2"></div>
              <span className="w-9">Yes</span>
              <span className="mr-4 w-9 text-right">{`${calPercentage() === "no vote" ? 0 : 100 - Number(calPercentage())}%`}</span>
              <progress
                className="progress progress-success w-56 dark:bg-slate-950"
                value={calPercentage() === "no vote" ? 0 : 100 - Number(calPercentage())}
                max="100"
              ></progress>
            </div>
            <div className="flex items-center">
              <div className=" rounded-full bg-error w-2 h-2 mr-2"></div>
              <span className="w-9">No</span>
              <span className="mr-4 text-right w-9">{`${calPercentage() === "no vote" ? 0 : calPercentage()}%`}</span>
              <progress
                className="progress progress-error w-56 dark:bg-slate-950"
                value={calPercentage() === "no vote" ? 0 : calPercentage()}
                max="100"
              ></progress>
            </div>
          </div>
          <div>
            <p className="font-bold mb-3">REQUIREMENT</p>
            <div className="flex items-center">
              <FaGithub className="w-10 h-auto text-black dark:text-white" />
              <BsFingerprint className="w-10 h-auto ml-4 text-black dark:text-white" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold mb-3">TIME LEFT</p>
            {props.status === "Closed" ? (
              <span className="text-xl font-bold">Proposal Ended</span>
            ) : (
              <Countdown endTime={props.endTime} />
            )}
          </div>
          <div className="flex flex-row-reverse mt-4">
            {props.status === "Closed" ? null : (
              <>
                <button
                  className="btn btn-outline btn-success w-20 border-2 mt-auto ml-4 mb-1"
                  onClick={handleAccept}
                >
                  Accept
                </button>
                <button
                  className="btn btn-outline btn-error w-20 border-2 mt-auto ml-4 mb-1"
                  onClick={handleDeny}
                >
                  Deny
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
