import { FieldValues, SubmitHandler } from 'react-hook-form'

interface SignInFormProps {
  onSubmit: SubmitHandler<FieldValues>
  serverErrorMessage: string | null
}

export default SignInFormProps
