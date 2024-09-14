import Command from '@/commands/abstract/command'
import AbstractAuthService from '@/services/abstract/abstract-auth.service'
import AuthService from '@/services/implementations/auth.service'

class SignOutCommand implements Command<undefined, undefined> {
  result: undefined
  authService: AbstractAuthService

  constructor() {
    this.authService = new AuthService()
  }

  async execute(): Promise<void> {
    await this.authService.signOut()

  }
}

export default SignOutCommand
