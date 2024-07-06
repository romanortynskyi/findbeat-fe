import { ReactNode } from 'react'

interface AppFormTextFieldInputProps {
  name: string
  placeholder: string
  type?: 'text' | 'password'
  endAdornment?: ReactNode
}

export default AppFormTextFieldInputProps
