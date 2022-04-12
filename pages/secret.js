import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Secret() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <p>Fijate esta es tu informacion:</p>
        <p>Nombre: {session.user?.name}</p>
        <div>
          <Image
            className="rounded-full"
            src={`${session.user?.image}`}
            alt="user image"
            height={300}
            width={300}
          />
        </div>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
