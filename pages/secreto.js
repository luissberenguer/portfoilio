import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Secreto() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <PageSEO
          title={`Proyectos - ${siteMetadata.author}`}
          description={siteMetadata.description}
        />
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Página Secreta
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Has conseguido identificarte correctamente
            </p>
          </div>
          <div className="container flex justify-center py-12">
            <div className="-m-4 flex flex-col  flex-wrap justify-center ">
              <p>Nombre: {session.user?.name}</p>
              <p>Email: {session.user?.email}</p>
              {session.user?.image && (
                <div className="flex justify-center py-4 ">
                  <Image
                    className="rounded-full"
                    src={`${session.user?.image}`}
                    alt="user image"
                    height={200}
                    width={200}
                  />
                </div>
              )}
              <button
                onClick={() => signOut()}
                className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <PageSEO
          title={`Proyectos - ${siteMetadata.author}`}
          description={siteMetadata.description}
        />
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Página Secreta
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Para acceder a este contenido debes identificarte primero (extrañamente no funciona en
              producción)
            </p>
          </div>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              <button
                onClick={() => signIn()}
                className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
