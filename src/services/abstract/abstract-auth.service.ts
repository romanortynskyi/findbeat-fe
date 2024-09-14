import SignInCommandInput from '@/types/interfaces/command-inputs/auth/sign-in.command-input'
import { SignInResponse } from 'next-auth/react'

abstract class AbstractAuthService {
  abstract signIn(input: SignInCommandInput): Promise<SignInResponse | undefined>
  abstract signOut(): Promise<void>
}

export default AbstractAuthService
