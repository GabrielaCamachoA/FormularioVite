import './App.css'
import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [email, setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [completado, setCompletado] = useState(false)

  function onSubmit(event) {
    event.preventDefault();
    setCompletado(true);
  }

  return (
    <>
    { completado == false ? <form onSubmit={onSubmit}>
    <label>
      Nombre
      <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} required/>
    </label>
    <label>
      Apellido
      <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} />
    </label>
    <label>
      Email 
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
    </label>
    <label>
      Mensaje:
      <textarea value={mensaje} onChange={(event) => setMensaje(event.target.value)}></textarea>
    </label>
    <input type="submit" value="Submit" />
  </form> : <div className='newContainer'>
    <div className="datos">
    <h2>Datos</h2>
    </div>
    <p className='nameFull'>{nombre} {apellido}</p>
    <p>{email}</p>
    <p className='mensaje'>{mensaje}</p>
    <hr />
    <button onClick={() => setCompletado(false)}>🚮</button>
    </div>}
    <div className='container-thanks'>
  <h2>Thank <br /> You.</h2>
  <p>Nos pondremos en contacto pronto!</p>
  </div>
    </>
  )
}

export default App
