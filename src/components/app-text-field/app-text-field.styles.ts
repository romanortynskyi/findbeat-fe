import AppTextFieldStylesParams from './types/interfaces/app-text-field-styles.params'

const useStyles = ({ hasError }: AppTextFieldStylesParams) => ({
  inputBase: {
    height: 40,
    backgroundColor: 'white.main',
    width: 340,
    borderRadius: 20,
    color: 'basic.grey',
    pl: 2,
    input: {
      '&::placeholder': {
        color: 'basic.grey',
      },
    },
    '&.Mui-error': {
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: 'error.400',
    },
    '&.Mui-focused': {
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: hasError ? 'error.400' : 'primary.main',
    },
  },
  errorMessageTypography: {
    height: 20,
    color: 'error.400',
  },
})

export default useStyles
