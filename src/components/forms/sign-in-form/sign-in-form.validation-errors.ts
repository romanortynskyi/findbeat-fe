const signInFormValidationErrors = (t: any) => ({
  email: {
    required: t('validationErrorMessages.email.required'),
    pattern: t('validationErrorMessages.email.pattern'),
  },
  password: {
    required: t('validationErrorMessages.password.required'),
    minLength: t('validationErrorMessages.password.minLength'),
  },
})

export default signInFormValidationErrors
