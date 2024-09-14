'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Box from '@mui/material/Box'

import GuestHeader from '@/components/guest-header'
import Path from '@/types/enums/path.enum'
import UserHeader from '@/components/user-header'
import HeaderProps from './types/interfaces/header.props'
import UserHeaderMenuActions from '@/components/user-header/types/interfaces/user-header-menu-actions'
import useSignOutUseCase from '@/hooks/use-case-hooks/auth/use-sign-out-use-case'

const Header: FC<HeaderProps> = (props) => {
  const { user } = props

  const pathname = usePathname()

  const signOutUseCase = useSignOutUseCase()

  const isSignInPage = pathname === Path.SignIn

  const userHeaderMenuActions: UserHeaderMenuActions = {
    onSignOut: async () => {
      await signOutUseCase.execute()
    },
  }

  const contentJSX = user ? (
    <UserHeader user={user} menuActions={userHeaderMenuActions} />
  ) : <GuestHeader shouldHaveSignInLink={!isSignInPage} />

  return (
    <Box>
      {contentJSX}
    </Box>
  )
}

export default Header
