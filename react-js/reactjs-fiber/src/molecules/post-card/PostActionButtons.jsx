import { Bookmark, Heart, MessageCircle, Send } from 'lucide-react'
import IconButton from '../../atoms/IconButton'

const PostActionButtons = () => {
  return (
    <div className='flex items-center justify-between p-3'>
      <div className='flex items-center gap-1'>
        <IconButton>
          <Heart />
        </IconButton>
        <IconButton>
          <MessageCircle />
        </IconButton>
        <IconButton>
          <Send />
        </IconButton>
      </div>

      <IconButton>
        <Bookmark />
      </IconButton>
    </div>
  )
}

export default PostActionButtons