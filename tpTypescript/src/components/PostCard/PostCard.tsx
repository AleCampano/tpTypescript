import { useState } from "react"
import "./PostCard.css"

interface Props {
  imageUrl: string
  username: string
  likes: number
  caption: string
  onOpenModal: () => void
}

function PostCard({
  imageUrl,
  username,
  likes,
  caption,
  onOpenModal,
}: Props) 
{
  const [liked, setLiked] = useState(false)

  return (
    <div className="post-card">
      <img
        src={imageUrl}
        alt="cat"
        className="post-image"
        onClick={onOpenModal}
      />

      <div className="post-content">
        <h3>{username}</h3>

        <p>{caption}</p>

        <div className="post-footer">
          <button onClick={() => setLiked(!liked)}>
            {liked ? "❤️" : "🤍"}
          </button>

          <span>
            {liked ? likes + 1 : likes} likes
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostCard