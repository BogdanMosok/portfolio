import { useState } from 'react'

import Header from './components/header/Header'
import Hero from './section/hero/Hero'
import Steps from './section/steps/Steps'
import Approach from './section/approach/Approach'
import Info from './section/info/Info'
import Partners from './section/partners/Partners'
import graphics from '../src/assets/graphics.jpg'
import Information from './section/information/Information'
import Press from './section/press/Press'
import Where from './section/where/Where'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
        <Header></Header>
        <Hero></Hero>
        <Steps></Steps>
        <Approach></Approach>
        <Info></Info>
        <Partners></Partners>
        <div className="graphics">
        <img className="graphics" src={graphics} srcSet={graphics} alt="" aria-hidden="true"/>
        </div>
        <Information></Information>
        <Press></Press>
        <Where></Where>
        <Footer></Footer>
    </>
  )
}

export default App
