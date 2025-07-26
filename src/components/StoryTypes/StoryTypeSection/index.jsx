import StoryCard from '../../StoryCard'
import styles from './StoryTypeSection.module.css'

export default function StoryTypeSection({ tag, stories }) {
    return (
        <>
            <section className={styles.storyType}>
                <h1 className={styles.title}>Tipos de História <span
                    className={styles.tag}
                    style={{
                        backgroundColor: tag.colorBackground,
                        color: tag.colorText
                    }}
                    title={tag.description}
                >
                    {tag.title}
                </span></h1>
                <div className={styles.cardsGrid}>
                    {stories.length === 0 ? (
                        <p>Nenhuma História Encontada</p>
                    ) : (
                        stories.map(story => (
                            <StoryCard key={story.id} story={story} />
                        ))
                    )}
                </div>
            </section>
        </>
    )

}