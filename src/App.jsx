import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Menu from './pages/menu/Menu'
import Page from './pages/page/Pages'
import Contact from './pages/contact/Contacts'
import './style/main.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/Menu" element={<Menu />} /> 
        <Route path="/pages" element={<Page />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App