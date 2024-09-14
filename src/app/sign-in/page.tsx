'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FieldValues } from 'react-hook-form'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import useSignInUseCase from '@/hooks/use-case-hooks/auth/use-sign-in-use-case'
import SignInCommandInput from '@/types/interfaces/command-inputs/auth/sign-in.command-input'
import SignInForm from '@/components/forms/sign-in-form'

import styles from './styles'

const SignIn = () => {
  const t = useTranslations('signIn')

  const [serverErrorMessage, setServerErrorMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signInUseCase = useSignInUseCase({ setServerErrorMessage, setIsLoading })

  const onSubmit = async (values: FieldValues) => {
    await signInUseCase.execute(values as SignInCommandInput)
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

        <SignInForm
          onSubmit={onSubmit}
          serverErrorMessage={serverErrorMessage}
          isLoading={isLoading}
        />
      </Box>
    </Box>
  )
}

export default SignIn
