import { MouseEventHandler } from 'react'

interface PrimaryButtonProps {
  text: string
  isLoading: boolean
  width?: number | string,
  type?: 'button' | 'submit',
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default PrimaryButtonProps
