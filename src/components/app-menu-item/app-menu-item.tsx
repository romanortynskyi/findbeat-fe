import { FC } from 'react'
import Link from 'next/link'
import Button from '@mui/material/Button'

import AppMenuItemProps from './types/interfaces/app-menu-item.props'

import styles from './app-menu-item.styles'

const AppMenuItem: FC<AppMenuItemProps> = (props) => {
  const {
    href,
    icon,
    title,
    isSelected,
  } = props

  return (
    <Link href={href} style={styles.link}>
      <Button
        sx={styles.button(isSelected)}
        startIcon={icon}
      >
        {title}
      </Button>
    </Link>
  )
}

export default AppMenuItem
