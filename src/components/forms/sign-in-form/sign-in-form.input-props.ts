import SignInFormInputPropsPasswordParams from "./types/interfaces/sign-in-form-input-props-password.params"

const signInFormInputProps = (t: any) => ({
  email: {
    name: 'email',
    placeholder: t('email'),
  },
  password: ({ type, endAdornment }: SignInFormInputPropsPasswordParams) => ({
    name: 'password',
    placeholder: t('password'),
    type,
    endAdornment,
  }),
})

export default signInFormInputProps
