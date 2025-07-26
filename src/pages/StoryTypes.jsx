import StoryTypeSection from "../components/StoryTypes/StoryTypeSection"
import { useState, useEffect } from "react"
import { getDatabase, get, ref } from "firebase/database"
import { useSearchParams } from "react-router-dom"

export default function StoryTypes() {
    const [groupedStories, setGroupedStories] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()
    const tagIdFilter = searchParams.get("tagId")

    useEffect(() => {
        const db = getDatabase()
        const storiesRef = ref(db, "stories")
        const tagsRef = ref(db, "tags")

        Promise.all([get(storiesRef), get(tagsRef)]).then(([storiesSnap, tagsSnap]) => {
            const loadedStories = []
            const loadedTags = []

            if (storiesSnap.exists()) {
                const storiesData = storiesSnap.val()

                Object.entries(storiesData).forEach(([id, story]) => {
                    let tags = []

                    if (Array.isArray(story.tags)) {
                        tags = story.tags.filter((tag) => tag != null)
                    } else if (typeof story.tags === "object") {
                        tags = Object.values(story.tags)
                    }

                    loadedStories.push({
                        id,
                        title: story.title,
                        content: story.content,
                        tags,
                    })
                })
            }

            if (tagsSnap.exists()) {
                const tagsData = tagsSnap.val()

                Object.entries(tagsData).forEach(([id, tag]) => {
                    loadedTags.push({ ...tag, id })
                })
            }

            const filteredTags = tagIdFilter
                ? loadedTags.filter(tag => tag.id === tagIdFilter)
                : loadedTags

            setGroupedStories(groupStoriesByTagTitle(filteredTags, loadedStories))
            setLoading(false)
        })
    }, [tagIdFilter])


    function groupStoriesByTagTitle(tags, stories) {
        const result = {}

        tags.forEach((tag) => {
            result[tag.title] = {
                tag,
                stories: [],
            }

            stories.forEach((story) => {
                const hasTag = story.tags.some((t) => t.id === tag.id)
                if (hasTag) {
                    result[tag.title].stories.push(story)
                }
            })
        })

        return result
    }


    return (
        <>
            <div className="container" style={{ margin: "42px 64px", padding: 0 }}>
                <a href="/" className="backLink">Voltar para o Menu Principal</a>
                {loading ? (
                    <p>Carregando Histórias...</p>
                ) : groupedStories.length === 0 ? (
                    <p>Nenhuma História Encontrada.</p>
                ) : (
                    Object.entries(groupedStories).map(([tagTitle, { tag, stories }]) => (
                        <StoryTypeSection key={tagTitle} tag={tag} stories={stories} />
                    ))
                )}
            </div>
        </>
    )
}