import React from 'react'
import Header from '../../components/header/Header'
import HealthFood from '../../components/healthyfood/HealthFood'
import healthab from '../../assets/healthab.png'
import Advantages from '../../section/advantages/Advantages';
import Stats from '../../section/stats/Stats';
import TestimonialsSection from '../../section/testimonialssection/TestimonialsSection';
import Footer from '../../components/footer/Footer';

const myContacts = {
    phone: "(414) 857 - 0107",
    email: "happytummy@restaurant.com",
    address: "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
  };

  const myDescription = [
    "Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.",
    "At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event."
  ];

export default function About() {
  return (
    <div>
        <Header/>
        <main>
        <HealthFood
            image={healthab}
            title="We provide healthy
            food for your family."
            description={myDescription}
            contactinfo={myContacts}
            showButton={false} 
        />
        <Advantages/>
        <Stats/>
        <TestimonialsSection/>
    </main>
            <Footer/>
    </div>
  )
}
