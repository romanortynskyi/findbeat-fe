import { FC } from 'react'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'

import getAppMenuItems from '@/utils/get-app-menu-items'
import AppMenuItem from '../app-menu-item/app-menu-item'
import AppMenuProps from './types/interfaces/app-menu.props'

import styles from './app-menu.styles'

const AppMenu: FC<AppMenuProps> = (props) => {
  const { selectedIndex, items } = props

  const getItemStyle = (index: number) => {
    const isLast = index === items.length - 1

    return isLast ? styles.lastItemContainer : styles.itemContainer
  }

  const itemsJSX = items.map((item, index) => (
    <Box sx={getItemStyle(index)}>
      <AppMenuItem
        {...item}
        isSelected={selectedIndex === index}
      />
    </Box>
  ))

  return (
    <Box sx={styles.container}>
      {itemsJSX}
    </Box>
  )
}

export default AppMenu
