import { FC } from 'react'
import Image from 'next/image'
import IconButton from '@mui/material/IconButton'

import SocialButtonProps from './types/interfaces/social-button.props'

const SocialButton: FC<SocialButtonProps> = (props) => {
  const {
    onClick,
    imgSrc,
    alt,
  } = props

  return (
    <IconButton
      sx={{
        backgroundColor: 'basic.white',
        width: 65,
        height: 65,
        borderRadius: '20px !important',
        '&:hover': {
          backgroundColor: 'white.dark',
        },
      }}
      onClick={onClick}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={40}
        height={40}
      />
    </IconButton>
  )
}

export default SocialButton
