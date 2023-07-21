import { BiIdCard, BiWallet, BiCopy } from "react-icons/bi";
import { useState } from "react";

export default function PersonalDIDCard(props: any) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy =
      "0x873cD9D89eC101593468289A2bF8F5FB06c83A2F"; // 更改為您想複製的文字，或從狀態或屬性中取得

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000); // 顯示 "Copied!" 文字 2 秒後恢復初始狀態
    });
  };

  return (
    <div className="ml-4">
      <div className=" dark:border-white dark:border-solid dark:border-2 card w-[350px] p-2 light:bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-3 text-[#2E1503]">
        <div className="card-body"> 
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <img src="ethereum.png" className="w-16"></img>
              <span className="font-bold font-mono dark:text-white">Goerli</span>
            </div>
            <div className="ml-auto">
              <div className="mb-2">
                <div className="flex items-center">
                  <BiIdCard className="text-black dark:text-white w-5 h-auto mr-1" />
                  <span className="font-mono font-bold dark:text-white">Wallet Address</span>
                </div>
                <div className="flex items-center">
                  <p className="font-mono dark:text-white">0xe28D ... E623ff</p>
                  <BiCopy
                    className={`text-black w-5 h-auto ml-1 cursor-pointer dark:text-white ${
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
                  <BiWallet className="text-black dark:text-white w-5 h-auto mr-1" />
                  <span className="font-mono font-bold dark:text-white">DID</span>
                </div>
                <div className="flex items-center">
                  <p className="font-mono dark:text-white">did:hi ... #key-1</p>
                  <BiCopy
                    className={`text-black dark:text-white w-5 h-auto ml-1 cursor-pointer`}
                    onClick={() => {
                      props.handleCopyClick();
                      handleCopyClick();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
