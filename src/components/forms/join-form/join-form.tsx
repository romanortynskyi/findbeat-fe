import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useTranslations } from 'next-intl'

import PrimaryButton from '@/components/primary-button'
import SocialButton from '@/components/social-button'
import AppFormTextField from '@/components/app-form-text-field/app-form-text-field'
import SignInFormProps from './types/interfaces/join-form.props'

import TextFieldType from '@/types/enums/text-field-type.enum'
import joinFormRules from './join-form.rules'
import joinFormInputProps from './join-form.input-props'
import joinFormValidationErrors from './join-form.validation-errors'

import styles from './join-form.styles'

const SignInForm: FC<SignInFormProps> = (props) => {
  const { onSubmit } = props

  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const t = useTranslations('join')

  const { handleSubmit, control } = useForm()

  const passwordInputType = isPasswordHidden ? TextFieldType.Password : TextFieldType.Text

  const passwordButtonIcon = isPasswordHidden ? <VisibilityIcon /> : <VisibilityOffIcon />

  const onPasswordButtonClick = () => {
    setIsPasswordHidden((prev) => !prev)
  }

  const passwordInputEndAdornment = (
    <IconButton 
      sx={styles.passwordInputEndAdornmentButton}
      onClick={onPasswordButtonClick}
    >
      {passwordButtonIcon}
    </IconButton>
  )

  const passwordInputProps = joinFormInputProps(t).password({
    type: passwordInputType,
    endAdornment: passwordInputEndAdornment,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={styles.innerContainer}>
        <Box sx={styles.inputContainer}>
          <AppFormTextField
            inputProps={joinFormInputProps(t).email}
            rules={joinFormRules.email}
            control={control}
            availableValidationErrors={joinFormValidationErrors(t).email}
          />
        </Box>

        <Box sx={styles.inputContainer}>
          <AppFormTextField
            inputProps={joinFormInputProps(t).firstName}
            rules={joinFormRules.firstName}
            control={control}
            availableValidationErrors={joinFormValidationErrors(t).firstName}
          />
        </Box>

        <Box sx={styles.inputContainer}>
          <AppFormTextField
            inputProps={joinFormInputProps(t).lastName}
            rules={joinFormRules.lastName}
            control={control}
            availableValidationErrors={joinFormValidationErrors(t).lastName}
          />
        </Box>

        <Box sx={styles.inputContainer}>
          <AppFormTextField
            inputProps={passwordInputProps}
            rules={joinFormRules.password}
            control={control}
            availableValidationErrors={joinFormValidationErrors(t).password}
          />
        </Box>

        <Box sx={styles.submitButtonContainer}>
          <PrimaryButton
            text={t('join')}
            width='100%'
            type='submit'
          />
        </Box>

        <Box sx={styles.joinLinkContainer}>
          <Link
            style={{ color: '#FBFBFB', textDecoration: 'underline' }}
            href='/signIn'
          >
            {t('clickHereToSignIn')}
          </Link>
        </Box>

        <Divider sx={styles.divider} />

        <Box sx={styles.socialButtonsContainer}>
          <SocialButton
            imgSrc='/google-logo.png'
            alt='Google Logo'
            onClick={() => {}}
          />

          <SocialButton
            imgSrc='/facebook-logo.png'
            alt='Facebook Logo'
            onClick={() => {}}
          />

          <SocialButton
            imgSrc='/spotify-logo.png'
            alt='Spotify Logo'
            onClick={() => {}}
          />
        </Box>
      </Box>
    </form>
  )
}

export default SignInForm
