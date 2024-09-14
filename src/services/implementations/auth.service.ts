import {
  signIn,
  signOut,
  SignInResponse,
} from 'next-auth/react'

import SignInCommandInput from '@/types/interfaces/command-inputs/auth/sign-in.command-input'
import AbstractAuthService from '../abstract/abstract-auth.service'
import SignUpCommandInput from '@/types/interfaces/command-inputs/auth/sign-up.command-input'
import AbstractHttpService from '../abstract/abstract-http.service'
import HttpService from './http.service'

class AuthService implements AbstractAuthService {
  httpService: AbstractHttpService

  constructor() {
    this.httpService = new HttpService()
  }

  async signUp(input: SignUpCommandInput): Promise<SignInResponse | undefined> {
    const {
      email,
      password,
    } = input

    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const signUpUri = `${apiUrl}/auth/sign-up` || ''

    await this.httpService.post(signUpUri, input)
    
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    return result
  }
  
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
