import { useSession, signIn, signOut } from "next-auth/react"
export default function Login() {
  const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user?.email} <br />
                <button className="btn btn-outline-secondary" onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button className="btn" onClick={() => signIn()}>Sign in</button>
        </>
    )
}
