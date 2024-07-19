import { ChangeEventHandler } from 'react'

interface AppAutocompleteProps<OptionType> {
  options: OptionType[]
  canHaveError: boolean
  onInputChange: ChangeEventHandler<HTMLInputElement>
  name?: string
  placeholder?: string
}

export default AppAutocompleteProps
