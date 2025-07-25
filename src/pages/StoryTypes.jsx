import StoryTypeSection from "../components/StoryTypes/StoryTypeSection"
import { useState, useEffect } from "react"
import { getDatabase, get, ref } from "firebase/database";

export default function StoryTypes() {
    const [groupedStories, setGroupedStories] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getDatabase();
        const storiesRef = ref(db, "stories");
        const tagsRef = ref(db, "tags");

        Promise.all([get(storiesRef), get(tagsRef)]).then(([storiesSnap, tagsSnap]) => {
            const loadedStories = [];
            const loadedTags = [];

            if (storiesSnap.exists()) {
                const storiesData = storiesSnap.val();

                Object.entries(storiesData).forEach(([id, story]) => {
                    let tags = [];

                    if (Array.isArray(story.tags)) {
                        tags = story.tags.filter((tag) => tag != null);
                    } else if (typeof story.tags === "object") {
                        tags = Object.values(story.tags);
                    }

                    loadedStories.push({
                        id,
                        title: story.title,
                        content: story.content,
                        tags,
                    });
                });
            }

            if (tagsSnap.exists()) {
                const tagsData = tagsSnap.val();

                Object.entries(tagsData).forEach(([id, tag]) => {
                    loadedTags.push({ ...tag, id });
                });
            }
            setGroupedStories(groupStoriesByTagTitle(loadedTags, loadedStories))
            setLoading(false);
        })
    }, [])


    function groupStoriesByTagTitle(tags, stories) {
        const result = {};

        tags.forEach((tag) => {
            result[tag.title] = {
                tag,
                stories: [],
            };

            stories.forEach((story) => {
                const hasTag = story.tags.some((t) => t.id === tag.id);
                if (hasTag) {
                    result[tag.title].stories.push(story);
                }
            });
        });

        return result;
    }


    return (
        <>
            <a href="/" >Voltar para o Menu Principal</a>
            {Object.entries(groupedStories).map(([tagTitle, { tag, stories }]) => (
                <StoryTypeSection key={tagTitle} tag={tag} stories={stories} />
            ))}

        </>
    )
}