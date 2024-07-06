import { FC } from 'react'
import InputBase from '@mui/material/InputBase'
import Typography from '@mui/material/Typography'

import AppTextFieldProps from './app-text-field.props'

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
  } = props

  const styles = useStyles({
    hasError: errorMessage !== undefined,
  })

  const errorMessageTypography = (
    <Typography
      variant='body2'
      sx={styles.errorMessageTypography}
    >
      {errorMessage}
    </Typography>
  )

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
        error={errorMessage !== undefined}
      />
      {errorMessageTypography}
    </>
  )
}

export default AppTextField
