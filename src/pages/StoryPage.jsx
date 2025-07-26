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

  return (
    loading ? (
      <p>Carregando História</p>
    ) : !story ? (
      <p>História não encontrada</p>
    ) : (
      <StoryContent story={story} />
    )
  )
}
