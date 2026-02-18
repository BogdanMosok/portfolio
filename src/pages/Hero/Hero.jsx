import React from 'react'
import Button from '../../components/Button/Button'


export default function Hero() {
  return (
    <section className='hero'>
        <div className="hero__container container">
            <h1 className="hero__title">
                Welcome! <br/> We Made Delicious <br/> Food for You
            </h1>
            <p className="hero__descr">
                Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. 
            </p>
            <div className="hero__btn orderbutton ">
            <Button className= "hero__btn ">
                Order Online
            </Button>
            </div>
        </div>
    </section>
  )
}
