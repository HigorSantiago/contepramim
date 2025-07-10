import styles from "./TagsModal.module.css";
import AppButton from "../AppButton";
import { IoIosClose } from "react-icons/io";


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

        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <IoIosClose size={28} onClick={onClose} className={styles.closeButton} />
                <h2 className={styles.modalTitle}>Selecione as Tags</h2>
                <p className={styles.modalSubtitle}>
                    Clique para selecionar as Tags que melhor definem sua história
                </p>
                <div className={styles.tagContainer}>
                    {tags.map(tag => (
                        <button
                            key={tag.id}
                            className={styles.tagButton}
                            style={{
                                backgroundColor: selectedTags.includes(tag) ? tag.colorBackground : '',
                                color: selectedTags.includes(tag) ? tag.colorText : '',
                            }}
                            onClick={() => toggleTag(tag)}
                        >
                            {tag.title}
                        </button>
                    ))}
                </div>
                <div className={styles.modalFooter}>
                    <AppButton variant="outline" onClick={handleConfirm} size="small">Pular</AppButton>
                    <AppButton onClick={handleConfirm} size="small">Pronto</AppButton>
                </div>
            </div>
        </div >
    );

}