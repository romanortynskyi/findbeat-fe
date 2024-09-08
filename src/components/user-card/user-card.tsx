import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import AppAvatar from '../app-avatar'
import UserDetailsCounter from '../user-details-counter'
import UserCardProps from './types/interfaces/user-card.props'

import styles from './user-card.styles'

const UserCard: FC<UserCardProps> = (props) => {
  const {
    imgSrc,
    firstName,
    lastName,
    username,
    followersCount,
    followingCount,
    postsCount,
  } = props

  const avatarHasBorder = imgSrc === undefined

  const fullName = `${firstName} ${lastName}`

  return (
    <Box sx={styles.container}>
      <Box sx={styles.topContainer}>
        <Box sx={styles.avatarContainer}>
          <AppAvatar
            width={50}
            height={50}
            isClickable={false}
            src={imgSrc}
            hasBorder={avatarHasBorder}
          />
        </Box>

        <Box sx={styles.topRightContainer}>
          <Typography
            variant='h6'
            sx={styles.fullName}
          >{fullName}</Typography>
          <Typography
            variant='subtitle2'
            sx={styles.username}
          >@{username}</Typography>
        </Box>
      </Box>

      <Box sx={styles.bottomContainer}>
        <UserDetailsCounter
          count={followersCount}
          subtitle={'Followers'}
        />
        <UserDetailsCounter
          count={followingCount}
          subtitle={'Following'}
        />
        <UserDetailsCounter
          count={postsCount}
          subtitle={'Posts'}
        />
      </Box>
    </Box>
  )
}

export default UserCard
