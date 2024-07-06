'use client'

import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import SignInForm from '@/components/forms/sign-in-form'
import Header from '@/components/header'

import styles from './styles'
import { useTranslations } from 'next-intl'

const SignIn = () => {
  const t = useTranslations('signIn')

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
          {t('signIn')}
        </Typography>

        <SignInForm onSubmit={(data) => console.log(data)} />
      </Box>
    </Box>
  )
}

export default SignIn
