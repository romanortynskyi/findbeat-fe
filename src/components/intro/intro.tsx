'use client'

import { FC } from 'react'
import Box from '@mui/material/Box'

import IntroContent from '../intro-content'

import styles from './intro.styles'

const Intro: FC = () => {
  return (
    <Box>
      <IntroContent />
      
      <Box sx={{ backgroundColor: 'red', height: '100vh' }}>

      </Box>
    </Box>
  )
}

export default Intro
