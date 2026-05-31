import React from 'react'
import Button from '../../components/button/Button'

export default function HeroHome() {
  return (
    <section className='herohome'>
        <div className="herohome__container container">
                <h1 className="herohome__title">
                    Best food for <br/>your taste
                </h1>
                <p className="herohome__descr">
                    Discover delectable cuisine and unforgettable moments<br/> in our welcoming, culinary haven.
                </p>
                <div className="herohome__btn">
                <Button className='herohome__btn-order'> Book A Table</Button>
                <Button className='herohome__btn-menu'> Explore Menu</Button>
                </div>
        </div>
    </section>
  )
}
