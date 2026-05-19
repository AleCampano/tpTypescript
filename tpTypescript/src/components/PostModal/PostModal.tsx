import "./PostModal.css"

interface Props {
  imageUrl: string
  username: string
  likes: number
  caption: string
  onClose: () => void
}

function PostModal({
  imageUrl,
  username,
  likes,
  caption,
  onClose,
}: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imageUrl} alt="cat" />

        <div className="modal-info">
          <h2>{username}</h2>

          <p>{caption}</p>

          <span>{likes} likes</span>

          <div className="comments">
            <p>🐱 Que gato mas maravilloso</p>
            <p>😺 Me encanta 💙💛</p>
          </div>

          <button onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostModal