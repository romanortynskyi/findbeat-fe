const joinFormValidationErrors = (t: any) => ({
  email: {
    required: t('validationErrorMessages.email.required'),
    pattern: t('validationErrorMessages.email.pattern'),
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

export default joinFormValidationErrors
