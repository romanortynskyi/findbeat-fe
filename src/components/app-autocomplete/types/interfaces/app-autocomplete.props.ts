import { ChangeEventHandler, ReactNode } from 'react'

interface AppAutocompleteProps<OptionType> {
  options: OptionType[]
  canHaveError: boolean
  onInputChange: ChangeEventHandler<HTMLInputElement>
  inputValue: string
  name?: string
  placeholder?: string
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

export default AppAutocompleteProps
