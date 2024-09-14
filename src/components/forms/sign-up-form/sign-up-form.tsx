import {
  FC,
  useState,
  useEffect,
} from 'react'
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
import SignInFormProps from './types/interfaces/sign-up-form.props'

import TextFieldType from '@/types/enums/text-field-type.enum'
import signUpFormRules from './sign-up-form.rules'
import signUpFormInputProps from './sign-up-form.input-props'
import signUpFormValidationErrors from './sign-up-form.validation-errors'

import styles from './sign-up-form.styles'

const SignInForm: FC<SignInFormProps> = (props) => {
  const {
    onSubmit,
    isLoading,
    serverErrorMessage,
  } = props

  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const t = useTranslations('signUp')

  const {
    handleSubmit,
    control,
    setError,
  } = useForm()

  const passwordInputType = isPasswordHidden ? TextFieldType.Password : TextFieldType.Text

  const passwordButtonIcon = isPasswordHidden ? <VisibilityIcon /> : <VisibilityOffIcon />

  const onPasswordButtonClick = () => {
    setIsPasswordHidden((prev) => !prev)
  }

  useEffect(() => {console.log(serverErrorMessage)
    if (serverErrorMessage) {
      setError('email', {
        type: 'server',
        message: serverErrorMessage,
      })
    }
  }, [serverErrorMessage])

  const passwordInputEndAdornment = (
    <IconButton 
      sx={styles.passwordInputEndAdornmentButton}
      onClick={onPasswordButtonClick}
    >
      {passwordButtonIcon}
    </IconButton>
  )

  const passwordInputProps = signUpFormInputProps(t).password({
    type: passwordInputType,
    endAdornment: passwordInputEndAdornment,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={styles.innerContainer}>
        <Box sx={styles.inputContainer}>
          <AppFormTextField
            inputProps={signUpFormInputProps(t).email}
            rules={signUpFormRules.email}
            control={control}
            availableValidationErrors={signUpFormValidationErrors(t).email}
          />
        </Box>

        <Box sx={styles.inputContainer}>
          <AppFormTextField
            inputProps={signUpFormInputProps(t).firstName}
            rules={signUpFormRules.firstName}
            control={control}
            availableValidationErrors={signUpFormValidationErrors(t).firstName}
          />
        </Box>

        <Box sx={styles.inputContainer}>
          <AppFormTextField
            inputProps={signUpFormInputProps(t).lastName}
            rules={signUpFormRules.lastName}
            control={control}
            availableValidationErrors={signUpFormValidationErrors(t).lastName}
          />
        </Box>

        <Box sx={styles.inputContainer}>
          <AppFormTextField
            inputProps={passwordInputProps}
            rules={signUpFormRules.password}
            control={control}
            availableValidationErrors={signUpFormValidationErrors(t).password}
          />
        </Box>

        <Box sx={styles.submitButtonContainer}>
          <PrimaryButton
            text={t('join')}
            width='100%'
            type='submit'
            isLoading={isLoading}
          />
        </Box>

        <Box sx={styles.signInLinkContainer}>
          <Link
            style={{ color: '#FBFBFB', textDecoration: 'underline' }}
            href='/sign-in'
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
