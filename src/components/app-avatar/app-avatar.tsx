import { FC } from 'react'
import Avatar from '@mui/material/Avatar'

import styles from './app-avatar.styles'

const AppAvatar: FC<AppAvatarProps> = (props) => {
  const {
    width,
    height,
    src,
    isClickable,
    hasBorder = false,
  } = props

  return (
    <Avatar
      sx={styles.avatar({
        width,
        height,
        src,
        isClickable,
        hasBorder,
      })}
      src={src ?? '/user-fallback-image.png'}
    />
  )
}

export default AppAvatar
