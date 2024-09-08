'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FieldValues } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import SignInForm from '@/components/forms/sign-in-form'
import Header from '@/components/guest-header'
import ServerErrorCode from '@/types/enums/server-error-code.enum'

import styles from './styles'

const SignIn = () => {
  const router = useRouter()
  const t = useTranslations('signIn')

  const [serverErrorMessage, setServerErrorMessage] = useState<string | null>(null)

  const onSubmit = async (values: FieldValues) => {
    const { email, password } = values
    
    try {
      const { status } = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (status === 401) {
        setServerErrorMessage(ServerErrorCode.WrongEmailOrPassword)
      }

      else {
        router.replace('/')
        router.refresh()
      }
    }

    catch (error) {
      console.log(error)
    }
  }

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
          position: 'absolute',
        }}
        width={window.innerWidth}
        height={window.innerHeight}
      />

      <Box sx={styles.formContainer}>
        <Typography variant='h3' sx={styles.title}>
          {t('signIn')}
        </Typography>

        <SignInForm onSubmit={onSubmit} serverErrorMessage={serverErrorMessage} />
      </Box>
    </Box>
  )
}

export default SignIn
