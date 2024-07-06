'use client'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import Header from '../header'
import IntroContent from '../intro-content'

import styles from './intro.styles'

const Intro = () => {
  return (
    <Box>
      <Container sx={styles.muiContainer}>
        <Header />
      </Container>
      
      <IntroContent />
      <Box sx={{ backgroundColor: 'red', height: '100vh' }}>

      </Box>
    </Box>
  )
}

export default Intro
