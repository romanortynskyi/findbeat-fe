import { FC, useRef } from 'react'
import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'

import AppAutocompleteProps from './types/interfaces/app-autocomplete.props'
import AppTextField from '../app-text-field/app-text-field'

const AppAutocomplete: FC<AppAutocompleteProps<unknown>> = <OptionType, >(props: AppAutocompleteProps<OptionType>) => {
  const {
    name,
    placeholder,
    onInputChange,
    options,
    canHaveError,
  } = props

  const textFieldRef = useRef(null)

  return (
    <Autocomplete
      options={options}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <AppTextField
          ref={textFieldRef}
          name={name}
          onChange={onInputChange}
          canHaveError={canHaveError}
          placeholder={placeholder}
          {...params}
        />
      )}
    />
  )
}

export default AppAutocomplete
