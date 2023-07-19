import { BiIdCard, BiWallet, BiCopy } from "react-icons/bi";

export default function PersonalDIDCard() {
  return (
    <div className="ml-4">
      <div className="card w-[350px] p-2 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] mt-3 text-[#2E1503]">
        <div className="card-body">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <img src="ethereum.png" className="w-16"></img>
              <span className="font-bold font-mono">Goerli</span>
            </div>
            <div className="ml-auto">
              <div className="mb-2">
                <div className="flex items-center">
                  <BiIdCard className="text-black w-5 h-auto mr-1" />
                  <span className="font-mono font-bold">Wallet Address</span>
                </div>
                <div className="flex items-center">
                  <p className="font-mono">0xe28D ... E623ff</p>
                  <BiCopy className="text-black w-5 h-auto ml-1 cursor-pointer" />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <BiWallet className="text-black w-5 h-auto mr-1" />
                  <span className="font-mono font-bold">DID</span>
                </div>
                <div className="flex items-center">
                  <p className="font-mono">did:hi ... #key-1</p>
                  <BiCopy className="text-black w-5 h-auto ml-1 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
