import { FieldValues, SubmitHandler } from 'react-hook-form'

interface SignInFormProps {
  serverErrorMessage: string | null
  isLoading: boolean
  onSubmit: SubmitHandler<FieldValues>
}

export default SignInFormProps
