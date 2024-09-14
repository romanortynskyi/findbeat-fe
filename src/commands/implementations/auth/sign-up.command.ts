import { SignInResponse } from 'next-auth/react'

import Command from '@/commands/abstract/command'
import AbstractAuthService from '@/services/abstract/abstract-auth.service'
import AuthService from '@/services/implementations/auth.service'
import SignUpCommandInput from '@/types/interfaces/command-inputs/auth/sign-up.command-input'

class SignUpCommand implements Command<SignUpCommandInput, SignInResponse | undefined> {
  result: SignInResponse | undefined
  authService: AbstractAuthService

  constructor() {
    this.authService = new AuthService()
  }

  async execute(input: SignUpCommandInput): Promise<void> {
    const result = await this.authService.signUp(input)

    this.result = result
  }
}

export default SignUpCommand
