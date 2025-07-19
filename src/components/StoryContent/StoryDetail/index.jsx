import styles from "./StoryDetail.module.css"

export default function StoryDetail({ story }) {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{story.title}</h1>

      <div className={styles.tags}>
        {story.tags?.map((tag, index) => (
          <span
            key={index}
            className={styles.tag}
            style={{
              backgroundColor: tag.colorBackground || '#E8F1FF',
              color: tag.colorText || '#206EFF'
            }}
          >
            {tag.title}
          </span>
        ))}
      </div>

      <p className={styles.content}>{story.content}</p>

      <footer className={styles.footer}>
        <p className={styles.author}>De pessoa anônima</p>
      </footer>
    </article>
  )
}
