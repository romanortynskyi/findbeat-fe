'use client'

import { FC } from 'react'
import { usePathname } from 'next/navigation'

import GuestHeader from '@/components/guest-header'
import Path from '@/types/enums/path.enum'
import UserHeader from '@/components/user-header'
import HeaderProps from './types/interfaces/header.props'

const Header: FC<HeaderProps> = (props) => {
  const { user } = props

  const pathname = usePathname()

  const isSignInPage = pathname === Path.SignIn

  if (user && user.id > 0) {
    return <UserHeader user={user} />
  }

  return <GuestHeader shouldHaveSignInLink={!isSignInPage} />
}

export default Header
