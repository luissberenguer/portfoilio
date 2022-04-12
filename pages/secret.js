import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Secret() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Contenido secretísimo <br />
        Signed in as {session.user?.email || 'email desconocido'} <br />
        <p>Fíjate en tu informacion:</p>
        <p>Nombre: {session.user?.name}</p>
        {session.user?.image && (
          <div className="py-4">
            <Image
              className="rounded-full"
              src={`${session.user?.image}`}
              alt="user image"
              height={200}
              width={200}
            />
          </div>
        )}
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Acceso denegado <br />
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
