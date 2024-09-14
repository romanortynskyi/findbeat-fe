import {
  signIn,
  signOut,
  SignInResponse,
} from 'next-auth/react'

import SignInCommandInput from '@/types/interfaces/command-inputs/auth/sign-in.command-input'
import AbstractAuthService from '../abstract/abstract-auth.service'

class AuthService implements AbstractAuthService {
  async signIn(input: SignInCommandInput): Promise<SignInResponse | undefined> {
    const { email, password } = input

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    return result
  }

  async signOut(): Promise<void> {
    await signOut()
  }
}

export default AuthService
