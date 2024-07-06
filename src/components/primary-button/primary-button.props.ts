import { MouseEventHandler } from 'react'

interface PrimaryButtonProps {
  text: string
  width?: number | string,
  type?: 'button' | 'submit',
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default PrimaryButtonProps
