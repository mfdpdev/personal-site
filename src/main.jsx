import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <div className='px-6'>
      <main className='pt-20'>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  </StrictMode>
)
