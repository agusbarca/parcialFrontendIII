import { useState } from 'react'
import './App.css'
import Form from './Components/Form/Form'
import Card from './Components/Card/Card'

function App() {

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  
  const [mascota, setMascota] = useState({
    nombre: '',
    especie: '',
  })

  return (
    <div className='App'>
      <h1 style={{color: 'brown'}}>¿Tenes mascota?</h1>
      <Form mascota={mascota} setMascota={setMascota} setShow={setShow} setError={setError} />
      {show && <Card mascota={mascota}/>}
      {error && <h4 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h4>}
    </div>
  )
}

export default App
