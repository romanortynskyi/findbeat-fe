import { FC } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'

import Logo from '../logo'
import GenericHeaderProps from './types/interfaces/generic-header.props'

import styles from './generic-header.styles'

const GuestHeader: FC<GenericHeaderProps> = (props) => {
  const { children } = props

  return (
    <Box sx={styles.container}>
      <Link
        style={{ color: '#FBFBFB', textDecoration: 'none' }}
        href='/'
      >
        <Logo />
      </Link>
      
      {children}
    </Box>
  )
}
export default GuestHeader
