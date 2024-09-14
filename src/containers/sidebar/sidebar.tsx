'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'

import SidebarProps from './types/interfaces/sidebar.props'
import Path from '@/types/enums/path.enum'
import UserCard from '@/components/user-card'
import AppMenu from '@/components/app-menu'
import getAppMenuItems from '@/utils/get-app-menu-items'

import styles from './sidebar.styles'

const Sidebar: FC<SidebarProps> = (props) => {
  const { children, user } = props

  const pathname = usePathname()

  const t = useTranslations('sidebar')

  const appMenuItems = getAppMenuItems(t)

  const selectedMenuItemIndex = appMenuItems.findIndex((item) => item.href === pathname)

  if (pathname === Path.SignIn) {
    return children
  }

  if (pathname === Path.SignUp) {
    return children
  }

  if (user === null) {
    return children
  }

  return (
    <Box sx={styles.container}>
      <aside>
        <Box sx={styles.userCardContainer}>
          <UserCard
            imgSrc={user.image?.src}
            firstName={user.firstName}
            lastName={user.lastName}
            username={user.username}
            postsCount={0}
            followingCount={0}
            followersCount={0}
          />
        </Box>

        <AppMenu
          selectedIndex={selectedMenuItemIndex}
          items={appMenuItems}
        />
      </aside>

      {children}
    </Box>
  )
}

export default Sidebar
