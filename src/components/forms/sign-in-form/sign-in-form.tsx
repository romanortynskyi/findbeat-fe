import {
  FC,
  FormEventHandler,
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
import TextFieldType from '@/types/enums/text-field-type.enum'
import signInFormRules from './sign-in-form.rules'
import signInFormInputProps from './sign-in-form.input-props'
import signInFormValidationErrors from './sign-in-form.validation-errors'
import SignInFormProps from './types/interfaces/sign-in-form.props'

import styles from './sign-in-form.styles'

const SignInForm: FC<SignInFormProps> = (props) => {
  const { onSubmit, serverErrorMessage } = props

  const [isPasswordHidden, setIsPasswordHidden] = useState(true)

  const t = useTranslations('signIn')

  const { handleSubmit, control, setError, getFieldState } = useForm()

  useEffect(() => {
    if (serverErrorMessage) {
      setError('password', {
        type: 'server',
        message: serverErrorMessage,
      })
    }
  }, [serverErrorMessage])

  const passwordInputType = isPasswordHidden ? TextFieldType.Password : TextFieldType.Text

  const passwordButtonIcon = isPasswordHidden ? <VisibilityIcon /> : <VisibilityOffIcon />

  const onPasswordButtonClick = () => {
    setIsPasswordHidden((prev) => !prev)
  }

  const onFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    
    handleSubmit(onSubmit)()
  }

  const passwordInputEndAdornment = (
    <IconButton 
      sx={styles.passwordInputEndAdornmentButton}
      onClick={onPasswordButtonClick}
    >
      {passwordButtonIcon}
    </IconButton>
  )

  const passwordInputProps = signInFormInputProps(t).password({
    type: passwordInputType,
    endAdornment: passwordInputEndAdornment,
  })
  
  return (
    <form onSubmit={onFormSubmit}>
      <Box sx={styles.innerContainer}>
        <Box sx={styles.inputContainer}>
          <AppFormTextField
            inputProps={signInFormInputProps(t).email}
            rules={signInFormRules.email}
            control={control}
            availableValidationErrors={signInFormValidationErrors(t).email}
          />
        </Box>

        <Box sx={styles.inputContainer}>
          <AppFormTextField
            inputProps={passwordInputProps}
            rules={signInFormRules.password}
            control={control}
            availableValidationErrors={signInFormValidationErrors(t).password}
          />
        </Box>

        <Box sx={styles.submitButtonContainer}>
          <PrimaryButton
            text={t('signIn')}
            width='100%'
            type='submit'
          />
        </Box>

        <Box sx={styles.joinLinkContainer}>
          <Link
            style={{ color: '#FBFBFB', textDecoration: 'underline' }}
            href='/join'
          >
            {t('clickHereToJoin')}
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
