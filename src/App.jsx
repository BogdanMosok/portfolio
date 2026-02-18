
import { Routes } from 'react-router'


import { Route } from 'react-router'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Hero from './pages/Hero/Hero'
import About from './pages/About/About'

import BestMenu from './pages/BestMenu/BestMenu'
import Achievements from './pages/Achievements/Achievements'
import Franchisee from './pages/Franchisee/Franchisee'
import ReviewsCard from './components/ReviewsCard/ReviewsCard.jsx';
import Support from './pages/Support/Support'
import FindUs from './pages/FindUs/FindUs'
import Footer from './components/Footer/Footer'


function App() {


  return (
    <div className='app'>
      <Header/>
      <Hero/>
      <About/>
      <BestMenu/>
      <Achievements/>
      <Franchisee/>
      <ReviewsCard/>
      <Support/>
      <FindUs/>
      <Footer/>
    </div>
  )
}

export default App
