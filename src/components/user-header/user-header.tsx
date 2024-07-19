'use client'

import { FC } from 'react'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import NotificationsIcon from '@mui/icons-material/Notifications'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import GenericHeader from '../generic-header'
import AppAutocomplete from '../app-autocomplete'
import UserHeaderProps from './types/interfaces/user-header.props'
import AppIconButton from '../app-icon-button'

import styles from './user-header.styles'
import AppAvatar from '../app-avatar'

const UserHeader: FC<UserHeaderProps> = (props) => {
  const { user } = props

  const { firstName, lastName } = user

  const fullName = `${firstName} ${lastName}`

  const t = useTranslations('user-header')

  return (
    <GenericHeader>
      <Box sx={styles.container}>
        <AppAutocomplete
          name='autocomplete'
          options={['a', 'b', 'c']}
          onInputChange={() => {}}
          canHaveError={false}
          placeholder={t('search')}
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
