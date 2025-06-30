import { useState } from "react";
import TitleStorySection from "../components/TitleStorySection";
import ContentStorySection from "../components/ContentStorySection";

export default function AddStoryPage() {
    const [step, setStep] = useState(1);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [showModal, setShowModal] = useState(false);

    return (
        <>
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
            />
        )}
        </>
    )
}