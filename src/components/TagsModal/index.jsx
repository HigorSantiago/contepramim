import "./TagsModal.css";

import { useEffect, useState } from 'react';
import { db } from "../../db/Firebase";
import { onValue, ref } from "firebase/database";

export default function TagsModal({ onConfirm, onClose }) {
    const [tags, setTags] = useState([])
    const [selectedTags, setSelectedTags] = useState([])

    useEffect(() => {
        const tagsRef = ref(db, 'tags');

        const unsubscribe = onValue(tagsRef, (snapshot) => {
            try {
                const data = snapshot.val();
                let comentariosArray = []

                if (data) {
                    comentariosArray = Object.keys(data).map(key => ({
                        id: key,
                        ...data[key]
                    }))
                }
                setTags(comentariosArray)

            } catch (err) {
                console.error('Erro ao carregar tags', err)
            }
        }, dbError => {
            console.error('Erro ao carregar tags', dbError);
        })

        return () => unsubscribe()
    }, [])

    const toggleTag = (tag) => {
        if (selectedTags.find(t => t.id === tag.id)) {
            setSelectedTags(selectedTags.filter(t => t.id !== tag.id));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    }

    const handleConfirm = () => {
        onConfirm(selectedTags);
        onClose()
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Selecione as Tags</h2>
                <p className="modal-subtitle">Clique para selecionar as Tags que melhor definem sua história</p>
                <div className="tag-container">
                    {tags.map(tag => (
                        <button
                            key={tag.id}
                            className={`tag-button ${selectedTags.includes(tag) ? 'selected' : ''}`}
                            onClick={() => toggleTag(tag)}
                        >
                            {tag.title}
                        </button>
                    ))}
                </div>
                <div className="modal-footer">
                    <a href="#" className="skip-link" onClick={handleConfirm}>Pular</a>
                    <button className="confirm-button" onClick={handleConfirm}>Pronto</button>
                </div>
            </div>
        </div>
    )
}