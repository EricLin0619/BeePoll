import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function GithubAuth() {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      console.log(session);
    }
  },[status, session])

  return (
    <div>
      <button
        className="btn btn-outline h-1/2 p-1 btn-warning ml-4 mb-4"
        onClick={() => {
          signIn("github");
        }}
      >
        githubAuth
      </button>
    </div>
  );
}
