import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getDatabase, ref, get } from "firebase/database"
import StoryContent from "../components/StoryContent"

export default function StoryPage() {
  const { id } = useParams()
  const [story, setStory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getDatabase()
    const storyRef = ref(db, `stories/${id}`)

    get(storyRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val()

        // Se tags não for array, converte pra array com 1 elemento
        const tags = Array.isArray(data.tags) ? data.tags : [data.tags]

        setStory({
          title: data.title,
          content: data.content,
          tags
        })
      } else {
        setStory(null)
      }
      setLoading(false)
    })
  }, [id])

  if (loading) return <p>Carregando história...</p>
  if (!story) return <p>História não encontrada.</p>

  return <StoryContent story={story} />
}
