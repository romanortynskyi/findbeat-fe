'use client'

import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import styles from './styles'
import Link from 'next/link'
import PrimaryButton from '../primary-button'
import { Chat } from '@mui/icons-material'

const IntroContent = () => {
  return (
    <Box sx={{ height: 'calc(100% - 100px)' }}>
      <Image
        src='/intro.png'
        alt='intro'
        style={{
          height: 'calc(100vh - 100px)',
          width: '100%',
          objectFit: 'cover',
        }}
        width={window.innerWidth}
        height={window.innerHeight - 100}
      />

      <Typography
        sx={styles.title}
        variant='h1'
      >
        Lorem ipsum
      </Typography>
      <Typography
        sx={styles.subtitle}
        variant='subtitle1'
      >
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
      </Typography>

      <Box sx={styles.joinContainer}>
        <Typography variant='subtitle1' sx={styles.newToFindbeat}>
          New to FINDBEAT?
        </Typography>

        <Link href='/join'>
          <PrimaryButton text='Join' onClick={() => {}} />
        </Link>
      </Box>

      <Box sx={styles.bottomContainer}>
        <Typography variant='subtitle1'>
          1,903,234 musicians have found their collaborators here!
        </Typography>

        <IconButton sx={styles.chatButton}>
          <Chat sx={styles.chatIcon} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default IntroContent
