import { BiIdCard, BiWallet, BiCopy } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import { useAccount } from "wagmi";
import { formatAddress } from "../../services/utils";
import { useTheme } from "next-themes";

export default function PersonalDIDCard({ handleCopyClick, did }: any) {
  const [addressCopied, setAddressCopied] = useState(false);
  const [didCopied, setDidCopied] = useState(false);
  const { address, isConnected } = useAccount();
  const { theme } = useTheme();
  const explorer =
    "https://explorer.hypersign.id/hypersign-testnet/identity/" + did;

  const handleCopyAddress = () => {
    const textToCopy = address; // 更改為您想複製的文字，或從狀態或屬性中取得
    navigator.clipboard.writeText(textToCopy as string).then(() => {
      setAddressCopied(true);
      setTimeout(() => {
        setAddressCopied(false);
      }, 1000);
    });
  };

  const handleCopyDID = () => {
    const textToCopy = did;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setDidCopied(true);
      setTimeout(() => {
        setDidCopied(false);
      }, 1000);
    });
  };

  return (
    <>
      {isConnected ? (
        <div className="ml-4">
          <div className="realtive dark:border-white dark:border-solid dark:border-2 card w-[350px] p-2 light:bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-3 text-[#2E1503]">
            <div className="card-body">
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <img
                    src="https://github.com/EricLin0619/BeePoll/blob/gh-pages/ethereum.png?raw=true"
                    className="w-16"
                  ></img>
                  <span className="mt-2 font-bold font-mono dark:text-white">
                    Goerli
                  </span>
                </div>
                <div className="ml-auto">
                  <div className="mb-2">
                    <div className="flex items-center">
                      <BiIdCard className="text-black dark:text-white w-5 h-auto mr-1" />
                      <span className="font-mono font-bold dark:text-white">
                        Wallet Address
                      </span>
                    </div>
                    <div className="flex items-center">
                      <p className={`font-mono dark:text-white`}>
                        {formatAddress(address as string)}
                      </p>
                      {!addressCopied ? (
                        <BiCopy
                          className={`text-black w-5 h-auto ml-1 cursor-pointer dark:text-white`}
                          onClick={() => {
                            handleCopyClick();
                            handleCopyAddress();
                          }}
                        />
                      ) : (
                        <BsCheckLg className="text-green-500 w-5 h-auto ml-1" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <BiWallet className="text-black dark:text-white w-5 h-auto mr-1" />
                      <span className="font-mono font-bold dark:text-white">
                        DID
                      </span>
                    </div>
                    <div className="flex items-center">
                      <p className={`font-mono dark:text-white`}>
                        {did ? formatAddress(did as string) : "..."}
                      </p>
                      {!didCopied ? (
                        <BiCopy
                          className={`text-black w-5 h-auto ml-1 cursor-pointer dark:text-white`}
                          onClick={() => {
                            handleCopyClick();
                            handleCopyDID();
                          }}
                        />
                      ) : (
                        <BsCheckLg className="text-green-500 w-5 h-auto ml-1" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href={explorer} target="_blank" rel="noreferrer">
              <p className="font-mono absolute bottom-0.5 right-2 text-black text-sm dark:text-white">more...</p>
            </a>
          </div>
        </div>
      ) : (
        <div className="ml-4">
          <div className=" dark:border-white dark:border-solid dark:border-2 card w-[350px] p-2 light:bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-3 text-[#2E1503]">
            <div className="card-body">
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  {theme === "dark" ? (
                    <img src="whiteChain.png" className="w-16"></img>
                  ) : (
                    <img src="blackChain.png" className="w-16"></img>
                  )}
                </div>
                <div className="ml-auto">
                  <div className="mb-2">
                    <div className="flex items-center">
                      <BiIdCard className="text-black dark:text-white w-5 h-auto mr-1" />
                      <span className="font-mono font-bold dark:text-white">
                        Wallet Address
                      </span>
                    </div>
                    <div className="flex items-center">
                      <p className="font-mono dark:text-white">...</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <BiWallet className="text-black dark:text-white w-5 h-auto mr-1" />
                      <span className="font-mono font-bold dark:text-white">
                        DID
                      </span>
                    </div>
                    <div className="flex items-center">
                      <p className="font-mono dark:text-white">...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
