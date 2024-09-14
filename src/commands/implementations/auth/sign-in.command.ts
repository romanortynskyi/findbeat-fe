import Command from '@/commands/abstract/command'
import SignInCommandInput from '@/types/interfaces/command-inputs/auth/sign-in.command-input'
import AbstractAuthService from '@/services/abstract/abstract-auth.service'
import AuthService from '@/services/implementations/auth.service'
import { SignInResponse } from 'next-auth/react'

class SignInCommand implements Command<SignInCommandInput, SignInResponse | undefined> {
  result: SignInResponse | undefined
  authService: AbstractAuthService

  constructor() {
    this.authService = new AuthService()
  }

  async execute(input: SignInCommandInput): Promise<void> {
    const result = await this.authService.signIn(input)

    this.result = result
  }
}

export default SignInCommand
