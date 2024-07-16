import NextAuth, { User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

export const authOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }

      return Promise.resolve(token)
    },
    async session({ session, token }) {
      session.user = token.user

      return session
    },
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const response = await axios.post<User>('http://localhost:3000/auth/sign-in', {
          email: credentials?.email,
          password: credentials?.password,
        })

        if (response.status === 200) {
          return response.data
        }

        return null
      },
    }),
  ],
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
