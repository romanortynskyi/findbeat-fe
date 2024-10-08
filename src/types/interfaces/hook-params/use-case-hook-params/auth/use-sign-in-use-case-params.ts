import { SetStateAction } from 'react'

interface UseSignInUseCaseParams {
  setServerErrorMessage: (value: SetStateAction<string | null>) => void
  setIsLoading: (value: SetStateAction<boolean>) => void
}

export default UseSignInUseCaseParams
