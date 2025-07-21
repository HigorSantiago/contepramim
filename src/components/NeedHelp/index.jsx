import { useEffect, useState } from 'react'
import { getDatabase, ref, get } from 'firebase/database'
import HelpCard from './Cards'
import styles from './NeedHelp.module.css'

export default function NeedHelp() {
  const [professionals, setProfessionals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getDatabase()
    const professionalsRef = ref(db, 'professionals')

    get(professionalsRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val()

        const loadedProfessionals = Object.entries(data).map(([id, prof]) => ({
          id,
          name: prof.name,
          category: prof.category,
          bio: prof.bio
        }))

        setProfessionals(loadedProfessionals)
      }

      setLoading(false)
    }).catch(error => {
      console.error('Erro ao buscar profissionais:', error)
      setLoading(false)
    })
  }, [])

  return (
    <section className={styles.container}>
      <a href="/" className={styles.backLink}>Voltar para o Menu Principal</a>
      <h1 className={styles.title}>Precisa de uma ajuda profissional?</h1>
      <p className={styles.subtitle}>
        Conte com profissionais capacitados nas mais diferentes áreas para te ajudar
      </p>

      {loading ? (
        <p className={styles.loading}>Carregando profissionais...</p>
      ) : professionals.length === 0 ? (
        <p className={styles.noResults}>Nenhum profissional encontrado.</p>
      ) : (
        <div className={styles.cardsGrid}>
          {professionals.map((prof) => (
            <HelpCard
              key={prof.id}
              category={prof.category}
              name={prof.name}
              bio={prof.bio}
            />
          ))}
        </div>
      )}
    </section>
  )
}
