'use client'

import {
  ChangeEventHandler,
  FC,
  useState,
  useRef,
} from 'react'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
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

  const headerRef = useRef<HTMLElement | null>(null)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const isMenuOpen = anchorEl !== null

  const [autocompleteInputValue, setAutocompleteInputValue] = useState('')

  const onAutocompleteInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAutocompleteInputValue(event.target.value)
  }

  const onFullNameClick = () => {
    setAnchorEl(headerRef.current)
  }

  const onMenuClose = () => {
    setAnchorEl(null)
  }

  const endAdornment = autocompleteInputValue.length > 0 ? <CloseIcon sx={styles.autocompleteEndAdornmentIcon} /> : null

  return (
    <GenericHeader ref={headerRef}>
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

          <Box sx={styles.profileMenuContainer} onClick={onFullNameClick}>
            <Typography sx={styles.fullName}>
              {fullName}
            </Typography>

            <KeyboardArrowDownIcon sx={styles.keyboardArrowDownIcon} />
          </Box>

          <Menu
            open={isMenuOpen}
            anchorEl={anchorEl}
            onClose={onMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoFocus={false}
          >
            <MenuItem>hello</MenuItem>
            <MenuItem>world</MenuItem>
          </Menu>
        </Box>
      </Box>
    </GenericHeader>
  )
}
export default UserHeader
