import React from 'react'

import './estilos/App.css'
import { Entrada } from './componentes/Entrada'
import { Header } from './componentes/Header'
import { Mensajes } from './componentes/Mensajes'
import { Respuesta } from './componentes/Respuesta'
import { Muneco } from './muneco/Muneco'

function App() {
  return (
    <div className="App">
      <Header />
      <Mensajes />
      <Muneco />
      <div className="interaccion">
        <Respuesta />
        <Entrada />
      </div>
    </div>
  )
}

export default App
