import React from 'react'
import Button from '../../components/button/Button'

export default function Hero() {
  return (
     <section className="hero" >
      <div className="hero__container container grid">
        <div className="hero__content">
            <h1 className="hero__title">
                Every person who safely transitions back to&nbsp;the community is&nbsp;a&nbsp;step toward a&nbsp;better society.
            </h1>
            <p className="hero__descr">
                Criminal justice leaders use Recidiviz to&nbsp;get a&nbsp;real-time picture of&nbsp;their system, diagnose issues, and drive meaningful changes.
            </p>
            <Button href="#" className="hero__btn">
                See how it works
            </Button>
            </div>
      </div>
      <div className="container hero__bottom-container">
        <div className="hero__bottom">
            <h2 className="hero__subtitle">
                Trusted in:
            </h2>
            <ul className="list-reset hero__list grid">
                  <li className="hero__item">
                    <a href="#" className="hero__link">Idaho</a>
                  </li>
                   <li className="hero__item">
                    <a href="#" className="hero__link">Maine</a>
                  </li>
                   <li className="hero__item">
                    <a href="#" className="hero__link">Missouri</a>
                  </li>
                   <li className="hero__item">
                    <a href="#" className="hero__link">North Dakota</a>
                  </li>
                   <li className="hero__item">
                    <a href="#" className="hero__link">Pennsylvania</a>
                  </li>
                   <li className="hero__item">
                    <a href="#" className="hero__link">Tennessee</a>
                  </li>
            </ul>
        </div>
      </div> 
</section>
  )
}

