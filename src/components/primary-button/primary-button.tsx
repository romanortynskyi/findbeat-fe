import { FC } from 'react'
import Button from '@mui/material/Button'

import PrimaryButtonProps from './primary-button.props'

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const {
    onClick,
    text,
    width,
    type,
  } = props

  return (
    <Button
      variant='contained'
      onClick={onClick}
      sx={{
        width,
      }}
      type={type}
    >
      {text}
    </Button>
  )
}

export default PrimaryButton
