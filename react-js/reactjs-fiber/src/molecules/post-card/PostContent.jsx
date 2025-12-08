import PostImage from "../../assets/img.png";
import IconButton from "../../atoms/IconButton";
import { User } from 'lucide-react';

const PostContent = () => {
  return (
    <div className="relative w-full h-[500px] bg-amber-300">
      <img src={PostImage} alt="Post Image" className="object-cover h-full w-full" />
      <IconButton className="absolute bottom-2 left-2">
        <User />
      </IconButton>
    </div>
  )
}

export default PostContent;