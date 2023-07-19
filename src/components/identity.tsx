import PersonalDIDCard from "./card/personalDIDCard"
import Github from "./card/githubCard"
import DiscordCard from "./card/discordCard"
export default function Identity() {
  return (
    <div className="flex items-center mt-10">
      <div>
        <p className="font-mono text-black font-bold text-xl ml-5 mt-3 mb-7">LINKED WALLET</p>
        <PersonalDIDCard />
      </div>

      <div className="ml-7">
        <div className="flex items-center">
          <span className="font-mono text-black font-bold text-xl ml-2 mb-4">CREDENTIALS</span>
          <button className="btn btn-outline p-1 btn-warning ml-4 mb-4">Get Credential</button>
        </div>
        <div className="flex items-center">
          <Github />
          <DiscordCard/>
        </div>
      </div>
    </div>
  )
}
