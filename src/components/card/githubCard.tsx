import { BiIdCard, BiCopy } from "react-icons/bi";
import { FaGithub, FaRegClock } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { BsCheckLg } from "react-icons/bs";
import { useAccount } from "wagmi";
import { formatAddress } from "../../services/utils";
import { useState, useEffect } from "react";
import { resolveDid, getAccessToken } from "../../services/did";
import { getVc } from "../../services/vc";

export default function Github(props: any) {
  const [copied, setCopied] = useState(false);
  const { address, isConnected } = useAccount();
  const [vc, setVc] = useState({
    id: "",
    issuanceDate: "",
    expirationDate: "",
  });
  const explorer = "https://explorer.hypersign.id/hypersign-testnet/revocationRegistry/"+vc.id;

  useEffect(() => {
    async function getVcId() {
      const token = await getAccessToken();
      const res = await resolveDid(props.did, token);
      if (res?.didDocument?.service[0]?.serviceEndpoint === undefined) {
        setVc({
          id: "",
          issuanceDate: "",
          expirationDate: "",
        });
        return console.log("no serviceEndpoint");
      }

      const vc = await getVc(res?.didDocument?.service[0]?.serviceEndpoint);
      setVc({
        id: vc.claim.id,
        issuanceDate: vc.issuanceDate,
        expirationDate: vc.expirationDate,
      });
    }

    getVcId();
  }, [isConnected, props.did, address]);

  const handleCopyClick = () => {
    const textToCopy = vc.id; // 更改為您想複製的文字，或從狀態或屬性中取得

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
            {vc.id !== "" && isConnected ? (
              <>
                <FaGithub className="w-16 h-auto ml-auto mr-1" />
                <span className="mt-2 font-bold font-mono">Github</span>
              </>
            ) : (
              <>
                <LuUser className="w-16 h-auto ml-auto mr-1" />
              </>
            )}
          </div>
          <div className="ml-auto">
            <div className="mb-2">
              <div className="flex items-center">
                <BiIdCard className="w-5 h-auto mr-1" />
                <span className="font-mono font-bold">Credentail ID</span>
              </div>
              <div className="flex items-center text-[#cccccc]">
                {vc.id !== "" && isConnected ? (
                  <>
                    <p className="font-mono">
                      {formatAddress(vc.id as string)}
                    </p>
                    {!copied ? (
                      <BiCopy
                        className={`w-5 h-auto ml-1 cursor-pointer`}
                        onClick={() => {
                          props.handleCopyClick();
                          handleCopyClick();
                        }}
                      />
                    ) : (
                      <BsCheckLg className="text-green-500 w-5 h-auto ml-1" />
                    )}
                  </>
                ) : (
                  <p className="font-mono">...</p>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <FaRegClock className="w-5 h-auto mr-1" />
                <p className="font-mono font-bold">Duration</p>
              </div>
              {vc.id !== "" && isConnected ? (
                <p className="font-mono tracking-tight text-[#cccccc]">
                  {`${vc?.issuanceDate?.slice(
                    0,
                    10
                  )}~${vc?.expirationDate?.slice(0, 10)}`}
                </p>
              ) : (
                <p className="font-mono">...</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {vc.id !== "" && isConnected && (
        <a href={explorer} target="_blank" rel="noreferrer">
          <p className="font-mono absolute bottom-0.5 right-2 text-[#cccccc] text-sm">more...</p>
        </a>
      )}
    </div>
  );
}
