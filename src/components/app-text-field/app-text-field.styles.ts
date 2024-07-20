import AppTextFieldStylesParams from './types/interfaces/app-text-field-styles.params'

const useStyles = ({ hasError }: AppTextFieldStylesParams) => ({
  inputBase: {
    height: 40,
    backgroundColor: 'white.main',
    width: 340,
    borderRadius: 20,
    color: 'basic.grey',
    pl: 2,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'transparent',
    input: {
      '&::placeholder': {
        color: 'basic.grey',
      },
    },
    '&.Mui-error': {
      borderColor: 'error.400',
    },
    '&.Mui-focused': {
      borderColor: hasError ? 'error.400' : 'primary.main',
    },
  },
  errorMessageTypography: {
    height: 20,
    color: 'error.400',
  },
})

export default useStyles
