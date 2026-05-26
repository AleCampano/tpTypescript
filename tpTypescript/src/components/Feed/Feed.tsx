import { useEffect, useState } from "react"
import { getCatImages } from "../../services/catApi"
import PostCard from "../PostCard/PostCard"
import PostModal from "../PostModal/PostModal"
import "./Feed.css"

interface CatApiResponse {
  id: string
  url: string
}

function Feed() {
  const [posts, setPosts] = useState<CatApiResponse[]>([])

  // Estado del modal
  const [selectedPost, setSelectedPost] =
    useState<CatApiResponse | null>(null)
    
  useEffect(() => {
    const obtenerGatos = async () => {
      const data = await getCatImages()

      setPosts(data)
    }

    obtenerGatos()
  }, [])

  return (
    <>
      <div className="feed-grid">
        {posts.map((post, index) => (
          <PostCard
            key={post.id}
            imageUrl={post.url}
            username={`GatoFana${index}`}
            likes={Math.floor(Math.random() * 1000)}
            caption="Mira mi gato, maravilloso jaja 😺"
            onOpenModal={() =>
              setSelectedPost(post)
            }
          />
        ))}
      </div>

      {selectedPost && (
        <PostModal
          imageUrl={selectedPost.url}
          username="Fanatico"
          likes={67}
          caption="Gato adorable 🐱"
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  )
}

export default Feed