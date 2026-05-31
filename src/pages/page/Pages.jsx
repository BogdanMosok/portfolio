import React from 'react'
import Header from '../../components/header/Header'
import HeroPages from '../../section/hero/HeroPages'
import Footer from '../../components/footer/Footer'

export default function Pages() {
  return (
    <div>
        <Header/>
        <main>
            <HeroPages/>
        </main>
        <Footer/>
    </div>
  )
}
