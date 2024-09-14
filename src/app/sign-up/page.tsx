'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FieldValues } from 'react-hook-form'

import SignUpCommandInput from '@/types/interfaces/command-inputs/auth/sign-up.command-input'
import SignUpForm from '@/components/forms/sign-up-form'
import Header from '@/components/guest-header'
import useSignUpUseCase from '@/hooks/use-case-hooks/auth/use-sign-up-use-case'

import styles from './styles'
const SignUp = () => {
  const t = useTranslations('signUp')

  const [serverErrorMessage, setServerErrorMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUpUseCase = useSignUpUseCase({ setServerErrorMessage, setIsLoading })

  const onSubmit = async (values: FieldValues) => {
    await signUpUseCase.execute(values as SignUpCommandInput)
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
        }}
        width={window.innerWidth}
        height={window.innerHeight}
      />

      <Box sx={styles.formContainer}>
        <Typography variant='h3' sx={styles.title}>
          {t('join')}
        </Typography>

        <SignUpForm
          onSubmit={onSubmit}
          isLoading={isLoading}
          serverErrorMessage={serverErrorMessage}
        />
      </Box>
    </Box>
  )
}

export default SignUp
