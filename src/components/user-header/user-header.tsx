'use client'

import {
  ChangeEventHandler,
  FC,
  useState,
} from 'react'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CloseIcon from '@mui/icons-material/Close'

import GenericHeader from '../generic-header'
import AppAutocomplete from '../app-autocomplete'
import UserHeaderProps from './types/interfaces/user-header.props'
import AppIconButton from '../app-icon-button'
import AppAvatar from '../app-avatar'

import styles from './user-header.styles'

const UserHeader: FC<UserHeaderProps> = (props) => {
  const { user } = props

  const { firstName, lastName } = user

  const fullName = `${firstName} ${lastName}`

  const t = useTranslations('user-header')

  const [autocompleteInputValue, setAutocompleteInputValue] = useState('')

  const onAutocompleteInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAutocompleteInputValue(event.target.value)
  }

  const endAdornment = autocompleteInputValue.length > 0 ? <CloseIcon sx={styles.autocompleteEndAdornmentIcon} /> : null

  return (
    <GenericHeader>
      <Box sx={styles.container}>
        <AppAutocomplete
          name='autocomplete'
          options={['a', 'b', 'c']}
          onInputChange={onAutocompleteInputChange}
          inputValue={autocompleteInputValue}
          canHaveError={false}
          placeholder={t('search')}
          startAdornment={<SearchIcon sx={styles.autocompleteStartAdornmentIcon} />}
          endAdornment={endAdornment}
        />

        <Box sx={styles.rightContainer}>
          <AppIconButton>
            <NotificationsIcon />
          </AppIconButton>

          <AppIconButton>
            <BookmarkIcon />
          </AppIconButton>

          <AppAvatar
            width={50}
            height={50}
            src={undefined}
            isClickable={false}
          />

          <Box sx={styles.profileMenuContainer}>
            <Typography>
              {fullName}
            </Typography>

            <KeyboardArrowDownIcon />
          </Box>
        </Box>
      </Box>
    </GenericHeader>
  )
}
export default UserHeader
