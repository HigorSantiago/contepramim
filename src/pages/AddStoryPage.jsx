import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TitleStorySection from "../components/TitleStorySection";
import ContentStorySection from "../components/ContentStorySection";
import TagsModal from "../components/TagsModal";
import { db } from "../db/Firebase";
import { push, ref, set } from "firebase/database";

export default function AddStoryPage() {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleTagConfirm = (tags) => {
        setSelectedTags(tags);

        handleSaveStory(tags)
    }

    const handleSaveStory = async (tagsParam) => {
        console.log(tagsParam, selectedTags)
        try {
            const storyData = {
                title,
                content,
                tags: tagsParam || selectedTags,
                timestamp: Date.now(),
            }

            const storiesRef = ref(db, 'stories');
            const newStoryRef = push(storiesRef)

            await set(newStoryRef, storyData)

            setTitle('')
            setContent('')
            setSelectedTags([])
            setStep(1)

            navigate(`/story/${newStoryRef.key}`)
        } catch (error) {
            console.log('Erro ao salvar história', error)
            alert('Erro ao salvar história!')
        }
    }

    return (
        <div className="add-story-page">
            {step === 1 && (
                <TitleStorySection
                    title={title}
                    setTitle={setTitle}
                    nextStep={() => setStep(2)}
                />
            )}

            {step == 2 && (
                <ContentStorySection
                    title={title}
                    setTitle={setTitle}
                    content={content}
                    setContent={setContent}
                    setShowModal={setShowModal}
                />
            )}

            {showModal && (
                <TagsModal
                    onConfirm={handleTagConfirm}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    )
}