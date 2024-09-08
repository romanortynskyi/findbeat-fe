import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import BriefUserDetailsProps from './types/interfaces/brief-user-details.props'

import styles from './brief-user-details.styles'
import AppAvatar from '../app-avatar'

const BriefUserDetails: FC<BriefUserDetailsProps> = (props) => {
  const {
    title,
    subtitle,
    imgSrc,
    textAfterName,
  } = props

  const avatarHasBorder = imgSrc === undefined

  return (
    <Box sx={styles.container}>
      <Box sx={styles.avatarContainer}>
        <AppAvatar
          width={50}
          height={50}
          isClickable={false}
          src={imgSrc}
          hasBorder={avatarHasBorder}
        />
      </Box>

      <Box sx={styles.rightContainer}>
        <Typography
          variant='h6'
          sx={styles.title}
        >
          {title}
        </Typography>
        <Typography
          variant='subtitle2'
          sx={styles.subtitle}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  )
}

export default BriefUserDetails
