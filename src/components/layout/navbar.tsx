import { ConnectKitButton } from "connectkit"
import { useRouter } from "next/router"
import Darkmode from "../darkmodeButton"
import { useAccount } from "wagmi"
import { createDid, getAccessToken, registerDid, resolveDid } from "../../services/did"
import { signMessage } from "@wagmi/core";
import { useEffect, useState } from "react"



export default function Navbar() {
  const router = useRouter()

  return (
    <div className="navbar bg-#fff5d7 dark:bg-slate-900 shadow-md p-0">
      <div className="navbar-start items-center flex">
        <img src="bee.png" className="object-cover w-24 ml-2" alt="logo"/>
        <a className="btn btn-ghost normal-case text-2xl font-bold p-0 font-mono dark:text-white text-black" onClick={()=>router.push('/')}>BeePoll</a>
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