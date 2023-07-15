import {} from "next/router";
import Countdown from "../components/countdown";
export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="card p-4 w-3/5 bg-[#fff5d7] border-[#2E1503] border-solid border-2 shadow-md mt-3 text-[#2E1503] ">
        <div className="card-body">
          <h2 className="card-title text-3xl mb-6">Vote #161</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="font-bold mb-3">DESCRIPTION</p>
              <p>
                We are using cookies for no reason. We are using cookies for no
                reason.We are using cookies for no reason.We are using cookies
                for no reason.
              </p>
            </div>
            <div>
              <p className="font-bold mb-3">CREATED BY</p>
              <div className="flex items-center">
                <img src="creeper.png" className="w-8 h-8 rounded-l-lg"/>
                <span className="bg-[#f9e547] text-[#65676a] font-bold rounded-r-lg pt-1 px-2 h-8">0xf73a…3249 </span>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold mb-3">VOTES</p>
            <div className="flex items-center">
              <div className=" rounded-full bg-success w-2 h-2 mr-2"></div>
              <span className="mr-4">Yes 50%</span>
              <progress
                className="progress progress-success w-56"
                value={50}
                max="100"
              ></progress>
            </div>
            <div className="flex items-center">
              <div className=" rounded-full bg-error w-2 h-2 mr-2"></div>
              <span className="mr-4">No 10%</span>
              <progress
                className="progress progress-error w-56"
                value={10}
                max="100"
              ></progress>
            </div>
            <p></p>
          </div>
          <Countdown />
        </div>
      </div>
    </div>
  );
}
