import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'

import Logo from '../logo'
import GenericHeaderProps from './types/interfaces/generic-header.props'

import styles from './generic-header.styles'

const GuestHeader: ForwardRefExoticComponent<
  Omit<GenericHeaderProps, 'ref'> & RefAttributes<HTMLElement | null>
> = forwardRef((props, ref) => {
  const { children } = props

  return (
    <Box sx={styles.container} ref={ref}>
      <Link
        style={{ color: '#FBFBFB', textDecoration: 'none' }}
        href='/'
      >
        <Logo />
      </Link>
      
      {children}
    </Box>
  )
})

export default GuestHeader
