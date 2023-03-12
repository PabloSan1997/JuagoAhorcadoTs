import React from 'react'

import './App.css'
import { Entrada } from './componentes/Entrada'
import { Header } from './componentes/Header'
import { Mensajes } from './componentes/Mensajes'
import { Respuesta } from './componentes/Respuesta'
import { Muneco } from './muneco/Muneco'

function App() {
  return (
    <div className="App">
      <Header/>
      <Mensajes/>
      <Muneco/>
      <Respuesta/>
      <Entrada/>
    </div>
  )
}

export default App
