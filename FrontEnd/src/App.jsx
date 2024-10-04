import { useState } from 'react'
import './App.css'
import Hero from './Pages/Hero'
import Section from './Pages/Section'
import Section2 from './Pages/Section2'

function App() {
  const [count,setcount] = useState(0)

  return (
    <>
      <Hero />
      <Section />
      <Section2 />
    </>
  
  )
}

export default App
