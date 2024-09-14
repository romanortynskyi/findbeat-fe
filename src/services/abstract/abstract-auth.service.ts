import { SignInResponse } from 'next-auth/react'

import SignInCommandInput from '@/types/interfaces/command-inputs/auth/sign-in.command-input'
import SignUpCommandInput from '@/types/interfaces/command-inputs/auth/sign-up.command-input'

abstract class AbstractAuthService {
  abstract signUp(input: SignUpCommandInput): Promise<SignInResponse | undefined>
  abstract signIn(input: SignInCommandInput): Promise<SignInResponse | undefined>
  abstract signOut(): Promise<void>
}

export default AbstractAuthService
