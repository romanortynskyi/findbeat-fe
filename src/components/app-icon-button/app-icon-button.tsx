import { FC } from 'react'
import IconButton from '@mui/material/IconButton'

import AppIconButtonProps from './types/interfaces/app-icon-button.props'

import styles from './app-icon-button.styles'

const AppIconButton: FC<AppIconButtonProps> = (props) => {
  const {
    children,
  } = props

  return (
    <IconButton sx={styles.iconButton}>
      {children}
    </IconButton>
  )
}

export default AppIconButton
