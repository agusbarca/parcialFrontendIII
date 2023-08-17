import React from 'react'
import styles from './Card.module.css'

const Card = ({mascota}) => {
  return (
    <div className={styles.cardContainer}>
      <h4 className={styles.cardText}>{mascota.nombre}, que buen nombre!</h4>
      <h3 className={styles.cardText}>Y soy fan del {mascota.especie} ;D </h3>
    </div>
  )
}

export default Card