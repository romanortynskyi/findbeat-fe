import ServerErrorCode from "@/types/enums/server-error-code.enum"

const signInFormValidationErrors = (t: any) => ({
  email: {
    required: t('validationErrorMessages.email.required'),
    pattern: t('validationErrorMessages.email.pattern'),
  },
  password: {
    required: t('validationErrorMessages.password.required'),
    minLength: t('validationErrorMessages.password.minLength'),
    [ServerErrorCode.WrongEmailOrPassword]: t(`validationErrorMessages.password.${ServerErrorCode.WrongEmailOrPassword}`),
  },
})

export default signInFormValidationErrors
