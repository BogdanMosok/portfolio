import React from 'react'
import Header from '../../components/header/Header'
import ContactForm from '../../section/contactform/ContactForm'
import Footer from '../../components/footer/Footer'

export default function Contacts() {
  return (
    <div>
        <Header/>
        <main>
            <ContactForm/>
        </main>
        <Footer/>
    </div>
  )
}
