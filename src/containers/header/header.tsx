'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'
import Box from '@mui/material/Box'

import GuestHeader from '@/components/guest-header'
import Path from '@/types/enums/path.enum'
import UserHeader from '@/components/user-header'
import HeaderProps from './types/interfaces/header.props'

const Header: FC<HeaderProps> = (props) => {
  const { user } = props

  const pathname = usePathname()

  const isSignInPage = pathname === Path.SignIn

  const contentJSX = user ? <UserHeader user={user} /> : <GuestHeader shouldHaveSignInLink={!isSignInPage} />

  return (
    <Box>
      {contentJSX}
    </Box>
  )
}

export default Header
