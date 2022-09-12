import { useState } from 'react'
import './styles.css'
import Locations from './components/Locations'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Locations/>
      <Footer/>
    </div>
  )
}

export default App
