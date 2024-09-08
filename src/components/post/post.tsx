import { FC } from 'react'
import Box from '@mui/material/Box'

import PostProps from './types/interfaces/post.props'
import PostHeader from '../post-header'

const Post: FC<PostProps> = (props) => {
  const {
    id,
    headerProps,
  } = props

  const {
    user,
    place,
  } = headerProps

  return (
    <Box>
      <PostHeader
        user={user}
        place={place}
      />
    </Box>
  )
}

export default Post
