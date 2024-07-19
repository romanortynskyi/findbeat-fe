import NextAuth from 'next-auth'
import UserModel from './interfaces/models/user.model'

declare module 'next-auth' {

  interface Session {
    user: UserModel
  }
}
