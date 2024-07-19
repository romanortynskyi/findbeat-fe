import { FC } from 'react'
import Avatar from '@mui/material/Avatar'

import styles from './app-avatar.styles'

const AppAvatar: FC<AppAvatarProps> = (props) => {
  const {
    width,
    height,
    src,
    isClickable,
  } = props

  return (
    <Avatar
      sx={styles.avatar({
        width,
        height,
        src,
        isClickable,
      })}
      src={src ?? '/default-user-image.png'}
    />
  )
}

export default AppAvatar
