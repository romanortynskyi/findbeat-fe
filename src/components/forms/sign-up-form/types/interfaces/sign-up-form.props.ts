import { FieldValues, SubmitHandler } from 'react-hook-form'

interface SignUpFormProps {
  isLoading: boolean
  serverErrorMessage: string | null
  onSubmit: SubmitHandler<FieldValues>
}

export default SignUpFormProps
