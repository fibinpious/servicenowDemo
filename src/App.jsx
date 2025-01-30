import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import ServicesSection from './Components/ServiceSection'
import MainContent from './Components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen overflow-auto ">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <MainContent />
      </div>
    </>
  )
}

export default App
