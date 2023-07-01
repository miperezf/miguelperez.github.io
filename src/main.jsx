import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import Navbar from './Navbar.jsx'
import Mains from './Mains.jsx'
import Skills from './Skills.jsx'
import Proyectos from './Proyectos.jsx'
import Contacto from './Contacto.jsx'
import Footer from './Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Mains/>
    <Skills/>
    <Proyectos/>
    <Contacto/>
    <Footer/>
  </React.StrictMode>,
)
