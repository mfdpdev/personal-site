import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Certificates from './pages/Certificates'
import CV from './pages/CV'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/curriculum-vitae' element={<CV />} />
          <Route path='/certificates'>
            <Route path=':id' element={<Certificates />} />
          </Route>
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
