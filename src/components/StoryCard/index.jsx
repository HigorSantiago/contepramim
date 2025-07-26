import { Link } from "react-router-dom"
import styles from "./StoryCard.module.css"

export default function StoryCard({ story }) {
  return (
    <Link to={`/story/${story.id}`} className={styles.link}>
      <div className={styles.card}>
        <h2 className={styles.title}>{story.title}</h2>

        <p className={styles.content}>
          {story.content.length > 150
            ? story.content.slice(0, 75) + "..."
            : story.content}
        </p>

        <div className={styles.tags}>
          {story.tags &&
            story.tags.map((tag, index) => (
              <span
                key={index}
                className={styles.tag}
                style={{
                  backgroundColor: tag.colorBackground,
                  color: tag.colorText
                }}
                title={tag.description}
              >
                {tag.title}
              </span>
            ))}
        </div>

        <p className={styles.author}>De pessoa anônima</p>
      </div>
    </Link>
  )
}
