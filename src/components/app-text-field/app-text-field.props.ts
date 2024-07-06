import {
  ChangeEventHandler,
  FocusEventHandler,
  ReactNode,
  Ref,
} from 'react'

interface AppTextFieldProps {
  name: string
  ref: Ref<any>
  onChange: ChangeEventHandler<HTMLInputElement>
  value?: string
  placeholder?: string
  type?: string
  endAdornment?: ReactNode
  errorMessage?: string
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export default AppTextFieldProps
