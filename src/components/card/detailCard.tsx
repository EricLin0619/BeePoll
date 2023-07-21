import { FaGithub, FaDiscord } from 'react-icons/fa';
import Countdown from "../countdown/countdown";
export default function DetailCard() {
  return (
    <div className="card dark:text-white dark:bg-slate-800 dark:border-white dark:border-solid dark:border-2 p-4 w-3/5 h-auto bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-[#2E1503] ">
      <div className="card-body">
        <h2 className="card-title text-3xl mb-6">Vote #161</h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <p className="font-bold mb-3">DESCRIPTION</p>
            <p>
              We are using cookies for no reason. We are using cookies for no
              reason.We are using cookies for no reason.We are using cookies for
              no reason.
            </p>
          </div>
          <div>
            <p className="font-bold mb-3">CREATED BY</p>
            <div className="flex items-center">
              <img
                src="creeper.png"
                className="w-8 h-8 rounded-l-lg"
                alt="creeper"
              />
              <span className="dark:bg-slate-950 dark:text-white bg-[#f9e547] text-[#65676a] font-bold rounded-r-lg pt-1 px-2 h-8">
                0xf73a…3249{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <p className="font-bold mb-3">VOTES</p>
            <div className="flex items-center">
              <div className=" rounded-full bg-success w-2 h-2 mr-2"></div>
              <span className="mr-4">Yes 60%</span>
              <progress
                className="progress progress-success w-56 dark:bg-slate-950"
                value={60}
                max="100"
              ></progress>
            </div>
            <div className="flex items-center">
              <div className=" rounded-full bg-error w-2 h-2 mr-2"></div>
              <span className="mr-4">No 40%</span>
              <progress
                className="progress progress-error w-56 dark:bg-slate-950"
                value={40}
                max="100"
              ></progress>
            </div>
          </div>
          <div>
            <p className="font-bold mb-3">REQUIREMENT</p>
            <div className="flex items-center">
              <FaGithub className="w-10 h-auto text-black dark:text-white" />
              <FaDiscord className="w-10 h-auto ml-4 text-black dark:text-white" />
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold mb-3">TIME LEFT</p>
          <Countdown />
        </div>
      </div>
    </div>
  );
}
