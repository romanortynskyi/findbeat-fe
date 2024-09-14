import { SetStateAction } from 'react'

interface UseSignInUseCaseParams {
  setServerErrorMessage: (value: SetStateAction<string | null>) => void
}

export default UseSignInUseCaseParams
