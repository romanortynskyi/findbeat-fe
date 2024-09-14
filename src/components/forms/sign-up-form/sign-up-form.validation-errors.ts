import ServerErrorCode from '@/types/enums/server-error-code.enum'

const signUpFormValidationErrors = (t: any) => ({
  email: {
    required: t('validationErrorMessages.email.required'),
    pattern: t('validationErrorMessages.email.pattern'),
    [ServerErrorCode.EmailAlreadyExists]: t(`validationErrorMessages.email.${ServerErrorCode.EmailAlreadyExists}`),
  },
  firstName: {
    required: t('validationErrorMessages.firstName.required'),
  },
  lastName: {
    required: t('validationErrorMessages.lastName.required'),
  },
  password: {
    required: t('validationErrorMessages.password.required'),
    minLength: t('validationErrorMessages.password.minLength'),
  },
})

export default signUpFormValidationErrors
