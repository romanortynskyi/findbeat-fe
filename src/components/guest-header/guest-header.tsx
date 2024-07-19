import { FC } from 'react'
import Link from 'next/link'

import PrimaryButton from '../primary-button'
import GuestHeaderProps from './types/interfaces/guest-header.props'
import GenericHeader from '../generic-header'

const GuestHeader: FC<GuestHeaderProps> = (props) => {
  const { shouldHaveSignInLink = true } = props

  const signInLink = shouldHaveSignInLink ? (
    <Link href='/sign-in'>
      <PrimaryButton text='Sign in' onClick={() => {}} />
    </Link>
  ) : null

  return (
    <GenericHeader>
      {signInLink}
    </GenericHeader>
  )
}
export default GuestHeader
