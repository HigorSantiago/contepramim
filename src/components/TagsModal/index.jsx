import "./TagsModal.css";

import { useState } from 'react';

const TagsModal = ({ onConfirm, onClose }) => {
    const [selectedTags, setSelectedTags] = useState([]);

    const tags = [
        { id: 1, title: "Emocionante", color: "blue" },
        { id: 2, title: "Cotidano", color: "green" },
        { id: 3, title: "Amor", color: "red" },
        { id: 4, title: "Amizade", color: "cyan" },
        { id: 5, title: "Amor", color: "red" }

    ]

    const toggleTag = (tag) => {
        if (selectedTags.find(t => t.id === tag.id)) {
            setSelectedTags(selectedTags.filter(t => t.id !== tag.id));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

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
    );
};

export default TagsModal;
