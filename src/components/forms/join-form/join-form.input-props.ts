import JoinFormInputPropsPasswordParams from "./types/interfaces/join-form-input-props-password.params"

const joinFormInputProps = (t: any) => ({
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
  password: ({ type, endAdornment }: JoinFormInputPropsPasswordParams) => ({
    name: 'password',
    placeholder: t('password'),
    type,
    endAdornment,
  }),
})

export default joinFormInputProps
