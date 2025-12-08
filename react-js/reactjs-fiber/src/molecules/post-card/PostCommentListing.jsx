import React from 'react'
import PostComment from './PostComment'

const PostCommentsListing = () => {
  return (
    <div className='flex flex-col items-start gap-2'>
      <PostComment username="Bindu Reddy" commentText="Awesome! Content!"/>
      <PostComment username="Divya" commentText="omg!"/>
      <PostComment username="Raja" commentText="nice! Content!"/>
    </div>
  )
}

export default PostCommentsListing