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
  // Estado donde guardamos los posts
  const [posts, setPosts] = useState<CatApiResponse[]>([])

  // Estado del modal
  const [selectedPost, setSelectedPost] =
    useState<CatApiResponse | null>(null)

  // useEffect se ejecuta cuando carga el componente
  useEffect(() => {
    const fetchCats = async () => {
      const data = await getCatImages()

      setPosts(data)
    }

    fetchCats()
  }, [])

  return (
    <>
      <div className="feed-grid">
        {posts.map((post, index) => (
          <PostCard
            key={post.id}
            imageUrl={post.url}
            username={`cat_user_${index}`}
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
          username="cat_user"
          likes={120}
          caption="Gato adorable 🐱"
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  )
}

export default Feed