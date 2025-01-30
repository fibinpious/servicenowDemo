import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Herosection'
import ServicesSection from './Components/ServiceSection'
import MainContent from './Components/MainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-[#007ea7] bg-gradient-to-br from-[#007ea7] to-[#80ced7] overflow-auto ">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <MainContent />
      </div>
    </>
  )
}

export default App
