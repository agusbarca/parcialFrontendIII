import React from 'react'
import styles from './Form.module.css'

const Form = ({mascota, setMascota, setShow, setError}) => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(mascota.nombre[0] !== ' ' && mascota.nombre.length >= 3 && mascota.especie.length >=6 ){
      setShow(true)
      setError(false)
    } else {
      setError(true)
      setShow(false)
    }
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label className={styles.label}>Nombre:</label>
      <input className={styles.input} type="text" value={mascota.nombre} 
        onChange={(e) => setMascota({...mascota, nombre: e.target.value})}
      />
      <label className={styles.label}>Especie:</label>
      <input className={styles.input} type="text" value={mascota.especie} 
        onChange={(e) => setMascota({...mascota, especie: e.target.value})}
      />
      <button className={styles.button}>Enviar</button>
    </form>
  )
}

export default Form