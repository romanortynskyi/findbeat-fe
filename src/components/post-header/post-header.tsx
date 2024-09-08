import { FC } from 'react'
import Box from '@mui/material/Box'

import PostHeaderProps from './types/interfaces/post-header.props'
import BriefUserDetails from '../brief-user-details'

const PostHeader: FC<PostHeaderProps> = (props) => {
  const {
    user,
    place,
  } = props

  const {
    username,
    image,
  } = user

  const {
    locality,
    country,
  } = place

  const fullLocation = `${locality}, ${country}`

  return (
    <Box>
      <BriefUserDetails
        title={username}
        subtitle={fullLocation}
        imgSrc={image?.src}
      />
    </Box>
  )
}

export default PostHeader
