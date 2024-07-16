import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    role: string
    token: string
    createdAt: string
    updatedAt: string
  }

  interface Session {
    user: {
      id: number
      firstName: string
      lastName: string
      email: string
      role: string
      token: string
      createdAt: string
      updatedAt: string
    }
  }
}
