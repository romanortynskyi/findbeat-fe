import RegexPattern from '@/types/enums/regex-pattern.enum'

const signUpFormRules = {
  email: {
    required: true,
    pattern: new RegExp(RegexPattern.Email),
  },
  firstName: {
    required: true,
  },
  lastName: {
    required: true,
  },
  password: {
    required: true,
    minLength: 6,
  },
}

export default signUpFormRules
