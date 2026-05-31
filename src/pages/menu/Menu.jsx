import React from 'react'
import Header from '../../components/header/Header'
import HeroMenu from '../../section/hero/HeroMenu'
import Partners from '../../section/partners/Partners'
import Footer from '../../components/footer/Footer'

export default function Menu() {
  return (
    <div>
        <Header/>
        <main>
            <HeroMenu/>
            <Partners/>
        </main>
        <Footer/>
    </div>
  )
}
