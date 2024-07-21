import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import styles from './user-details-counter.styles'

const UserDetailsCounter: FC<UserDetailsCounterProps> = (props) => {
  const { count, subtitle } = props

  return (
    <Box sx={styles.container}>
      <Typography variant='subtitle1'>{count}</Typography>
      <Typography variant='subtitle1'>{subtitle}</Typography>
    </Box>
  )
}

export default UserDetailsCounter
