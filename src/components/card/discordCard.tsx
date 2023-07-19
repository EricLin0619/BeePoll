import { BiIdCard, BiCopy } from "react-icons/bi";
import { FaDiscord, FaRegClock } from "react-icons/fa";
export default function DiscordCard() {
  return (
    <div className="ml-7 bg-gradient-to-r from-[#42275a] to-[#734b6d] card w-[350px] p-2 text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="card-body">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <FaDiscord className="w-16 h-auto ml-auto mr-1" />
            <span className="font-bold font-mono">Discord</span>
          </div>
          <div className="ml-auto">
            <div className="mb-2">
              <div className="flex items-center">
                <BiIdCard className="w-5 h-auto mr-1" />
                <span className="font-mono font-bold">Credentail ID</span>
              </div>
              <div className="flex items-center text-[#cccccc]">
                <p className="font-mono">vc:hid...ui6uC2</p>
                <BiCopy className="w-5 h-auto ml-1 cursor-pointer" />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <FaRegClock className="w-5 h-auto mr-1" />
                <p className="font-mono font-bold">Duration</p>
              </div>
              <p className="font-mono tracking-tight text-[#cccccc]">
                2027/7/18 ~ 2027/7/18
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
