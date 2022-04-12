import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'

const options = {
  debug: true,
  session: {},
  jwt: {},
  providers: [
    Credentials({
      name: 'Luis',
      credentials: {
        password: {
          type: 'password',
          label: 'A la de una, a la de dos y a la de...',
        },
      },
      async authorize(credentials) {
        // conectarnos a la API
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/luis`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-type': 'application/json' },
        })
        // retornar el usaurio o null
        const user = await res.json()
        console.log(user)
        // transformar la respuesta a JSON
        if (res.ok && user) {
          return user
        }

        return null
      },
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
}

export default NextAuth(options)
