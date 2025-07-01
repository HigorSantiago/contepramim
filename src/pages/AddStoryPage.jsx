import { useState } from "react";
import TitleStorySection from "../components/TitleStorySection";
import ContentStorySection from "../components/ContentStorySection";
import TagsModal from "../components/TagsModal";

export default function AddStoryPage() {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleTagConfirm = (tags) => {
        setSelectedTags(tags);

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