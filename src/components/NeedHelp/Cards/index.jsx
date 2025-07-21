import React from 'react'
import styles from './CardsHelp.module.css'

const HelpCard = ({ category, name, bio }) => {
  return (
    <div className={styles.card}>
      <span className={styles.badge}>{category}</span>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{bio}</p>
      <a
        href="https://w.app/pruylt"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        >
        Clique para entrar em contato
        </a>

    </div>
  )
}

export default HelpCard
