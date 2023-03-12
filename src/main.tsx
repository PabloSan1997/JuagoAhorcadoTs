import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProvedorContexto } from './context/context'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProvedorContexto>
      <App />
    </ProvedorContexto>
  </React.StrictMode>,
)
