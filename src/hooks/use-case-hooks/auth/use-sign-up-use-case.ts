import { useMemo } from 'react'
import { useRouter } from 'next/navigation'

import ServerErrorCode from '@/types/enums/server-error-code.enum'
import SignUpCommandInput from '@/types/interfaces/command-inputs/auth/sign-up.command-input'
import UseSignUpUseCaseParams from '@/types/interfaces/hook-params/use-case-hook-params/auth/use-sign-up-use-case-params'
import SignUpCommand from '@/commands/implementations/auth/sign-up.command'
import { AxiosError } from 'axios'

const useSignUpUseCase = (params: UseSignUpUseCaseParams) => {
  const router = useRouter()
  const signUpCommand = useMemo(() => new SignUpCommand(), [])

  const { setServerErrorMessage, setIsLoading } = params

  const execute = async (input: SignUpCommandInput) => {
    try {
      setIsLoading(true)
      await signUpCommand.execute(input)

      const { result } = signUpCommand
      
      if (result) {
        const { status } = result

        if (status === 409) {
          setServerErrorMessage(ServerErrorCode.EmailAlreadyExists)
        }

        else {
          router.replace('/')
          router.refresh()
        }
      }
    }

    catch (error) {
      if (error instanceof AxiosError) {
        setServerErrorMessage(error.response?.data.code)
      }
      
    } 
    
    finally {
      setIsLoading(false)
    }
  }

  return { execute }
}

export default useSignUpUseCase
