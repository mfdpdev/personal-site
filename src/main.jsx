import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Marquee from './components/Marquee'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <div className='mx-auto px-6 max-w-7xl'>
      <main className='pt-20'>
        <Hero />
        <About />
        <Timeline />
        <Marquee />
      </main>
      <Footer />
    </div>
  </StrictMode>
)
