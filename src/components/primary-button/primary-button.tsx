import { FC } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'

import PrimaryButtonProps from './primary-button.props'

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const {
    onClick,
    text,
    width,
    type,
    isLoading,
  } = props

  return (
    <LoadingButton
      variant='contained'
      onClick={onClick}
      sx={{
        width,
      }}
      type={type}
      loading={isLoading}
    >
      {text}
    </LoadingButton>
  )
}

export default PrimaryButton
