import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Hero from './components/Hero'
import CharacterList from './components/CharactersList'
import Footer from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <CharacterList/>
    <Footer />
  </React.StrictMode>,
)
