import { FC } from 'react'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'

import AppTextFieldProps from './types/interfaces/app-text-field.props'

import useStyles from './app-text-field.styles'

const AppTextField: FC<AppTextFieldProps> = (props) => {
  const {
    onChange,
    onBlur,
    name,
    value,
    ref,
    placeholder,
    type,
    endAdornment,
    errorMessage,
    inputProps,
    hasError = false,
    canHaveError = true,
  } = props

  const styles = useStyles({
    hasError,
  })

  const errorMessageTypography = canHaveError ? (
    <Typography
      variant='body2'
      sx={styles.errorMessageTypography}
    >
      {errorMessage}
    </Typography>
  ) : null

  return (
    <>
      <InputBase
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        value={value}
        ref={ref}
        placeholder={placeholder}
        type={type}
        endAdornment={endAdornment}
        sx={styles.inputBase}
        error={hasError}
        inputProps={inputProps}
      />
      {errorMessageTypography}
    </>
  )
}

export default AppTextField
