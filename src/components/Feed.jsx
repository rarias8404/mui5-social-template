import React from 'react'
import { Box } from '@mui/material'
import Post from './Post'
import Share from './Share'

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed
