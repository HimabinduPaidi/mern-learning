import PostActionButtons from "../molecules/post-card/PostActionButtons"
import PostCaption from "../molecules/post-card/PostCaption"
import PostCommentCreator from "../molecules/post-card/PostCommentCreator"
import PostCommentsListing from "../molecules/post-card/PostCommentsListing"
import PostContent from "../molecules/post-card/PostContent"
import PostHeader from "../molecules/post-card/PostHeader"

const PostCard = () => {
  return (
    <article className="flex flex-col w-[400px] bg-pink-400">
        <PostHeader />
        <PostContent />
        <PostActionButtons />
        <PostCaption />
        <PostCommentsListing />
        <PostCommentCreator />
    </article>
  )
}

export default PostCard