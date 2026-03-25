import React from 'react'
import partneers1 from '../../assets/partners-1.jpg'
import partneers2 from '../../assets/partners-2.jpg'
import partneers3 from '../../assets/partners-3.jpg'
import partneers4 from '../../assets/partners-4.jpg'
import partneers5 from '../../assets/partners-5.jpg'
import partneers6 from '../../assets/partners-6.jpg'

export default function Partners() {
  return (
       <section className="partners">
        <div className="container partners__container flex">
        <h2 className="partners__title">Partners</h2>
        <ul className="list-reset partners__list">
            <li className="partners__item">
                <a href="#" target="_blank" className="partners__link">
                    <img src={partneers1} loading="lazy"  width="160" height="67" alt="reform logo" className="partners__logo"/>
                </a>
            </li>
            <li className="partners__item">
                <a href="#" target="_blank" className="partners__link">
                    <img src={partneers2} loading="lazy"  width="160" height="67" alt="Schmidt Futures logo" className="partners__logo"/>
                </a>
            </li>
                    <li className="partners__item">
                <a href="#" target="_blank" className="partners__link">
                    <img src={partneers3} loading="lazy"  width="160" height="67" alt="Right on crime logo" className="partners__logo"/>
                </a>
            </li>
                    <li className="partners__item">
                <a href="#" target="_blank" className="partners__link">
                    <img src={partneers4}  loading="lazy"  width="160" height="67" alt="Mozzilla logo" className="partners__logo"/>
                </a>
            </li>
                    <li className="partners__item">
                <a href="#" target="_blank" className="partners__link">
                    <img src={partneers5} loading="lazy"  width="160" height="67" alt="Aclu logo" className="partners__logo"/>
                </a>
            </li>
                    <li className="partners__item">
                <a href="#" target="_blank" className="partners__link">
                    <img src={partneers6} loading="lazy"  width="160" height="67" alt="y logo" className="partners__logo"/>
                </a>
            </li>
        </ul>
        <a href="#" className="partners__more">See all</a>
        </div>
    </section>
  )   
}
