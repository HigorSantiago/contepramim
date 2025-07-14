import { useEffect, useState } from "react"
import { getDatabase, ref, get } from "firebase/database"
import StoryCard from "../StoryCard"
import "./HomeCards.css"

export default function HomeCards() {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getDatabase()
    const storiesRef = ref(db, "stories")

    get(storiesRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val()

        const loadedStories = Object.entries(data).map(([id, story]) => {
          let tags = []

          
          if (Array.isArray(story.tags)) {
            tags = story.tags.filter(tag => tag != null) 
          } else if (typeof story.tags === "object") {
            tags = Object.values(story.tags)
          }

          return {
            id,
            title: story.title,
            content: story.content,
            tags
          }
        })

        setStories(loadedStories)
      }

      setLoading(false)
    })
  }, [])

  return (
    <section className="cards">
      <h1 className="montserrat-semibold">Histórias Inspiradoras</h1>
      <div className="carousel">
        <div className="carousel-track">
          {loading && <p>Carregando histórias...</p>}
          {!loading && stories.length === 0 && <p>Nenhuma história encontrada.</p>}
          {stories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  )
}
