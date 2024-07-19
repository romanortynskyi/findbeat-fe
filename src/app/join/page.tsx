'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import JoinForm from '@/components/forms/join-form'
import Header from '@/components/guest-header'

import styles from './styles'

const Join = () => {
  const t = useTranslations('join')

  return (
    <Box sx={styles.container}>
      <Image
        src='/electric-guitar.png'
        alt='auth-page-background'
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          transform: 'translateX(-30%)',
        }}
        width={window.innerWidth}
        height={window.innerHeight}
      />

      <Container sx={styles.headerContainer}>
        <Header shouldHaveSignInLink={false} />
      </Container>
      
      <Box sx={styles.formContainer}>
        <Typography variant='h3' sx={styles.title}>
          {t('join')}
        </Typography>

        <JoinForm onSubmit={(data) => console.log(data)} />
      </Box>
    </Box>
  )
}

export default Join
