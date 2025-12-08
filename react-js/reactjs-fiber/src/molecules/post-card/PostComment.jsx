
const PostComment = (props) => {
    const {username, commentText} = props
  return (
    <p className="whitespace-pre-wrap break-all">
        <span className="mr-2 font-semibold">{username}</span>
        <span>{commentText}</span>
    </p>
  )
}

export default PostComment