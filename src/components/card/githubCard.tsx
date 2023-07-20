import { BiIdCard, BiCopy } from "react-icons/bi";
import { FaGithub, FaRegClock } from "react-icons/fa";
import { useState } from "react";

export default function Github(props: any) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = "vc:hid:testnet:zGTu1XFubxPCkdi1GUNxNmSbqc57PzjZWbH4P18T1DrY"; // 更改為您想複製的文字，或從狀態或屬性中取得

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000); // 顯示 "Copied!" 文字 2 秒後恢復初始狀態
    });
  };

  return (
    <div className="bg-gradient-to-r from-[#42275a] to-[#734b6d] card w-[350px] p-2 text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="card-body">
        <div className="flex items-center">
          <div className="flex flex-col items-center">
            <FaGithub className="w-16 h-auto ml-auto mr-1" />
            <span className="font-bold font-mono">Github</span>
          </div>
          <div className="ml-auto">
            <div className="mb-2">
              <div className="flex items-center">
                <BiIdCard className="w-5 h-auto mr-1" />
                <span className="font-mono font-bold">Credentail ID</span>
              </div>
              <div className="flex items-center text-[#cccccc]">
                <p className="font-mono">vc:hid...ui6uC2</p>
                <BiCopy
                  className={`w-5 h-auto ml-1 cursor-pointer ${
                    copied ? "text-green-500" : ""
                  }`}
                  onClick={() => {
                    props.handleCopyClick();
                    handleCopyClick();
                  }}
                />
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
