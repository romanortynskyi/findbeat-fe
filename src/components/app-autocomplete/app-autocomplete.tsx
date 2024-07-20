import { FC, useRef } from 'react'
import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete'

import AppAutocompleteProps from './types/interfaces/app-autocomplete.props'
import AppTextField from '../app-text-field/app-text-field'

const AppAutocomplete: FC<AppAutocompleteProps<unknown>> = <OptionType, >(props: AppAutocompleteProps<OptionType>) => {
  const {
    name,
    placeholder,
    inputValue,
    onInputChange,
    options,
    canHaveError,
    startAdornment,
    endAdornment,
  } = props

  const textFieldRef = useRef(null)

  return (
    <Autocomplete
      options={options}
      inputValue={inputValue}
      renderInput={(params: AutocompleteRenderInputParams) => (
        <AppTextField
          ref={textFieldRef}
          name={name}
          onChange={onInputChange}
          canHaveError={canHaveError}
          placeholder={placeholder}
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          {...params}
        />
      )}
    />
  )
}

export default AppAutocomplete
