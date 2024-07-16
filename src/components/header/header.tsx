import { FC } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'

import Logo from '../logo'
import PrimaryButton from '../primary-button'

import styles from './header.styles'

const Header: FC<HeaderProps> = (props) => {
  const { shouldHaveSignInLink = true } = props

  const signInLink = shouldHaveSignInLink ? (
    <Link href='/sign-in'>
      <PrimaryButton text='Sign in' onClick={() => {}} />
    </Link>
  ) : null

  return (
    <Box sx={styles.container}>
      <Link
        style={{ color: '#FBFBFB', textDecoration: 'none' }}
        href='/'
      >
        <Logo />
      </Link>
      {signInLink}
    </Box>
  )
}
export default Header
