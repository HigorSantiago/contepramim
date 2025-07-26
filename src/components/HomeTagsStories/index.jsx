import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getDatabase, ref, get } from "firebase/database"
import "./HomeTagsStories.css"

export default function HomeTagsStories() {
    const [tags, setTags] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getDatabase()
        const tagsRef = ref(db, "tags")

        get(tagsRef).then(snapshot => {
            if (snapshot.exists()) {
                const data = snapshot.val()
                const loadedTags = Object.entries(data).map(([id, tag]) => ({
                    id,
                    title: tag.title,
                    description: tag.description,
                    color: tag.colorText
                }))
                setTags(loadedTags)
            }
            setLoading(false)
        })
    }, [])

    return (
        <section className="historys">
            <h1 className="montserrat-semibold">Aqui, cada história encontra seu lugar e sua voz.</h1>
            <ul className="history-list">
                {loading && <p>Carregando categorias...</p>}
                {tags.map(tag => (
                    <li key={tag.id} className="history-item">
                        <img src="/img/icons/heart.svg" alt="" />
                        <div className="history-text">
                            <h2 className={`montserrat-semibold`} style={{ color: tag.color }}>{tag.title}</h2>
                            <p className="montserrat-medium">{tag.description}</p>
                        </div>
                        <Link to={`stories?tagId=${tag.id}`} className={`ver-mais montserrat-medium`} style={{ color: tag.color }}>
                            Clique para ver mais
                        </Link>
                    </li>
                ))}

            </ul>
        </section>
    )
}