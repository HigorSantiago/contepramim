import { useEffect, useState } from "react"
import { getDatabase, ref, get } from "firebase/database"
import StoryCard from "../StoryCard"
import AppButton from "../AppButton"
import styles from "./HomeCards.module.css"

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
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Histórias Inspiradoras</h1>
        <AppButton to={`/stories`} variant="outline">Ver Mais</AppButton>
      </div>
      <div className={styles.carouselContainer}>
        {loading ? (
          <p className={styles.loading}>Carregando histórias...</p>
        ) : stories.length === 0 ? (
          <p className={styles.noStories}>Nenhuma história encontrada.</p>
        ) : (
          <div className={styles.carousel}>
            <div className={styles.track}>
              {stories.map(story => (
                <div key={story.id} className={styles.slide}>
                  <StoryCard story={story} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
