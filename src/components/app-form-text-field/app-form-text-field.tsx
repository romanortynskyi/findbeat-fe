import { FC } from 'react'
import { Controller } from 'react-hook-form'

import AppFormTextFieldProps from './app-form-text-field.props'
import AppTextField from '../app-text-field/app-text-field'

const AppFormTextField: FC<AppFormTextFieldProps> = (props) => {
  const {
    inputProps,
    control,
    rules,
    availableValidationErrors,
  } = props

  const {
    name,
    placeholder,
    type = 'text',
    endAdornment,
  } = inputProps

  const renderAppTextField = (params: any) => {
    const { field, fieldState } = params

    const {
      onChange,
      onBlur,
      value,
      name,
      ref,
    } = field

    const isServerError = fieldState.error?.type === 'server'

    const getErrorMessage = () => {
      if (isServerError) {
        return availableValidationErrors[fieldState.error?.message]
      }

      return availableValidationErrors[fieldState.error?.type] || undefined
    }

    const hasError = !isServerError && getErrorMessage() !== undefined

    return (
      <AppTextField
        value={value}
        name={name}
        ref={ref}
        placeholder={placeholder}
        type={type}
        endAdornment={endAdornment}
        hasError={hasError}
        errorMessage={getErrorMessage()}
        onChange={onChange}
        onBlur={onBlur}
      />
    )
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={renderAppTextField}
    />
  )
}

export default AppFormTextField
