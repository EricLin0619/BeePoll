import { ConnectKitButton } from "connectkit"
import KeplrWallet from "./keplrWallet"
import { useRouter } from "next/router"
import Login from "./login"

export default function Navbar() {
  const router = useRouter()
  return (
    <div className="navbar bg-#fff5d7 shadow-md p-0">
      <div className="navbar-start">
        <img src="bee.png" className="object-cover w-24 ml-10" alt="logo"/>
        <a className="btn btn-ghost normal-case text-2xl p-0 text-black" onClick={()=>router.push('/')}>BeePoll</a>
      </div>
      <div className="navbar-center hidden lg:flex">
      </div>
      <div className="navbar-end mr-5">
        <div>
          <ConnectKitButton/>
          {/* <Login/> */}
        </div>
      </div>
    </div>
  )
}