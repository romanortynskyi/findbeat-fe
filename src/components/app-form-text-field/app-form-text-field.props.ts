import { Control, FieldValues } from 'react-hook-form'

import AppFormTextFieldInputProps from './types/interfaces/app-form-text-field-input.props'

interface AppFormTextFieldProps {
  inputProps: AppFormTextFieldInputProps
  control: Control<FieldValues>
  rules: any
  availableValidationErrors: any
}

export default AppFormTextFieldProps
