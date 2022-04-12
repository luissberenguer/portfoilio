import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'
import Credentials from 'next-auth/providers/credentials'
import DiscordProvider from 'next-auth/providers/discord'
import TwitterProvider from 'next-auth/providers/twitter'
import GoogleProvider from 'next-auth/providers/google'
import CoinbaseProvider from 'next-auth/providers/coinbase'

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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
    }),
    CoinbaseProvider({
      clientId: process.env.COINBASE_CLIENT_ID,
      clientSecret: process.env.COINBASE_CLIENT_SECRET,
    }),
  ],
}

export default NextAuth(options)
