import { SetStateAction } from 'react'

interface UseSignUpUseCaseParams {
  setServerErrorMessage: (value: SetStateAction<string | null>) => void
  setIsLoading: (value: SetStateAction<boolean>) => void
}

export default UseSignUpUseCaseParams
