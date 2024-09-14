import { useMemo } from 'react'
import { useRouter } from 'next/navigation'

import UseSignInUseCaseParams from '@/types/interfaces/hook-params/use-case-hook-params/auth/use-sign-in-use-case-params'
import SignInCommandInput from '@/types/interfaces/command-inputs/auth/sign-in.command-input'
import SignInCommand from '@/commands/implementations/auth/sign-in.command'
import ServerErrorCode from '@/types/enums/server-error-code.enum'

const useSignInUseCase = (params: UseSignInUseCaseParams) => {
  const router = useRouter()
  const signInCommand = useMemo(() => new SignInCommand(), [])

  const { setServerErrorMessage } = params

  const execute = async (input: SignInCommandInput) => {
    try {
      await signInCommand.execute(input)

      const { result } = signInCommand
      
      if (result) {
        const { status } = result

        if (status === 401) {
          setServerErrorMessage(ServerErrorCode.WrongEmailOrPassword)
        }

        else {
          router.replace('/')
          router.refresh()
        }
      }
    }

    catch (error) {
      console.log(error)
    } 
  }

  return { execute }
}

export default useSignInUseCase
