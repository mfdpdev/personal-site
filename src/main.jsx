import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Topic from './components/Topic'
import Certificate from './components/Certificate'
import Uses from './components/Uses'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import CV from './components/CV'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={
            <>
              <Hero />
              <About />
              <Timeline />
              <Marquee />
              <Projects />
              <Certificate />
              <Topic />
              <Uses />
            </>
          } />

          <Route path='/curriculum-vitae' element={<CV />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
