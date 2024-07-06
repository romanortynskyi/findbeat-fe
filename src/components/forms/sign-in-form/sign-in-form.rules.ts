import RegexPattern from '@/types/enums/regex-pattern.enum'

const signInFormRules = {
  email: {
    required: true,
    pattern: new RegExp(RegexPattern.Email),
  },
  password: {
    required: true,
    minLength: 6,
  },
}

export default signInFormRules
