import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { MeliApp } from './meliApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MeliApp />
    </BrowserRouter>
  </React.StrictMode>,
)
