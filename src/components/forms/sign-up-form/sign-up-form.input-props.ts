import SignUpFormInputPropsPasswordParams from "./types/interfaces/sign-up-form-input-props-password.params"

const signUpFormInputProps = (t: any) => ({
  email: {
    name: 'email',
    placeholder: t('email'),
  },
  firstName: {
    name: 'firstName',
    placeholder: t('firstName'),
  },
  lastName: {
    name: 'lastName',
    placeholder: t('lastName'),
  },
  password: ({ type, endAdornment }: SignUpFormInputPropsPasswordParams) => ({
    name: 'password',
    placeholder: t('password'),
    type,
    endAdornment,
  }),
})

export default signUpFormInputProps
