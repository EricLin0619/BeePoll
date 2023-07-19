import { BiIdCard } from "react-icons/bi";
import GithubCredentialCard from "./card/githubCredentialCard";
export default function Credential() {
  return (
    <div className="mb-8">
      <div className="divider"></div>
      <div className="flex items-center justify-center">
        <BiIdCard className="text-black rounded-xl w-10 h-auto mr-1"/>
        <span className="text-2xl text-black font-bold">Credentials</span>
      </div>
      <div>
        <div className="flex flex-row-reverse">
          <button className="btn btn-outline btn-warning mr-8 mb-8">Get Credential</button>
        </div>
        <div className="grid grid-cols-4 justify-items-center">
          <GithubCredentialCard/>
          <GithubCredentialCard/>
          <GithubCredentialCard/>
          <GithubCredentialCard/>
        </div>
        
      </div>

    </div>

  )
}
