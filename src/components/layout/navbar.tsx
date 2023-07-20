import { ConnectKitButton } from "connectkit"
import { useRouter } from "next/router"
import Darkmode from "../darkmode"
import { useAccount } from "wagmi"
import { useEffect } from "react"
import { createDid, registerDID } from "../../services/did"

import { signMessage } from "@wagmi/core";
import React from "react"
export default function Navbar() {
  const router = useRouter()
  const { address, isConnected } = useAccount()

  React.useEffect(() => {
    if (isConnected && address) {
      createDid(address).then((didDocument) => {
        const message = JSON.stringify(didDocument)
        signMessage({ message }).then((signature) => {
          registerDID(didDocument, signature).then((res) => {
            console.log(res)
          })
        })
      })
    }
  }, [address, isConnected])


  return (
    <div className="navbar bg-#fff5d7 shadow-md p-0">
      <div className="navbar-start items-center flex">
        <img src="bee.png" className="object-cover w-24 ml-2" alt="logo"/>
        <a className="btn btn-ghost normal-case text-2xl font-bold p-0 font-mono text-black" onClick={()=>router.push('/')}>BeePoll</a>
      </div>
      <div className="navbar-center hidden lg:flex">
      </div>
      <div className="navbar-end mr-5">
        <div className="flex items-center">
          <Darkmode />
          <ConnectKitButton />
        </div>
      </div>
    </div>
  )
}