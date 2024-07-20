import {
  ChangeEventHandler,
  FocusEventHandler,
  ReactNode,
  Ref,
} from 'react'
import { InputBaseComponentProps } from '@mui/material/InputBase'

interface AppTextFieldProps {  
  onChange: ChangeEventHandler<HTMLInputElement>
  name?: string
  ref?: Ref<any>
  value?: string
  placeholder?: string
  type?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
  hasError?: boolean
  errorMessage?: string
  canHaveError?: boolean
  inputProps?: InputBaseComponentProps
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export default AppTextFieldProps
