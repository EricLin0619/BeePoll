import { BiIdCard, BiWallet, BiCopy } from "react-icons/bi";
import { useState } from "react";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { handleDidRegistration } from "../../services/handleDidRegirtration";
import { formatAddress } from "../../services/utils";

export default function PersonalDIDCard(props: any) {
  const [addressCopied, setAddressCopied] = useState(false);
  const [didCopied, setDidCopied] = useState(false);
  const [did, setDid] = useState("");
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      handleDidRegistration(address).then((did) => {
        setDid(did);
      });
    }
  }, [address, isConnected]);

  const handleCopyAddress = () => {
    const textToCopy = did; // 更改為您想複製的文字，或從狀態或屬性中取得

    navigator.clipboard.writeText(textToCopy).then(() => {
      setAddressCopied(true);
      setTimeout(() => {
        setAddressCopied(false);
      }, 1000);
    });
  };

  const handleCopyDID = () => {
    const textToCopy = "0x873cD9D89eC101593468289A2bF8F5FB06c83A2F";
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
          <div className=" dark:border-white dark:border-solid dark:border-2 card w-[350px] p-2 light:bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-3 text-[#2E1503]">
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
                      <p className="font-mono dark:text-white">
                        {formatAddress(address as string)}
                      </p>
                      <BiCopy
                        className={`text-black w-5 h-auto ml-1 cursor-pointer dark:text-white ${
                          addressCopied ? "text-green-500" : ""
                        }`}
                        onClick={() => {
                          props.handleCopyClick();
                          handleCopyAddress();
                        }}
                      />
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
                      <p className="font-mono dark:text-white">
                        {did ? formatAddress(address as string) : null}
                      </p>
                      <BiCopy
                        className={`text-black w-5 h-auto ml-1 cursor-pointer dark:text-white ${
                          didCopied ? "text-green-500" : ""
                        }`}
                        onClick={() => {
                          props.handleCopyClick();
                          handleCopyDID();
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-4">
          <div className=" dark:border-white dark:border-solid dark:border-2 card w-[350px] p-2 light:bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-3 text-[#2E1503]">
            <div className="card-body">
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <img
                    src="https://github.com/EricLin0619/BeePoll/blob/gh-pages/ethereum.png?raw=true"
                    className="w-16"
                  ></img>
                  <span className="font-bold font-mono dark:text-white">
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
