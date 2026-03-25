import React from 'react'
import approach1 from '../../assets/approach-1.jpg'
import approach2 from '../../assets/approach-2.jpg'
import Button from '../../components/button/Button'


export default function Approach() {
  return (
    <section className="approach">
    <div className="approach__top">
        <div className="container grid">
                <div className="approach__left">
                    <h2 className="approach__title">
                        A&nbsp;human&mdash;centered definition of&nbsp;success.
                    </h2>
                    <p className="approach__descr">
                        Our approach is&nbsp;shaped by&nbsp;the perspective and experience of&nbsp;people impacted by&nbsp;the justice system. Together, we&nbsp;are focused on&nbsp;restoring equity and supporting success in&nbsp;the community.
                    </p>
                    <Button className="btn-reset btn approach__btn" aria-label="Learn more about our approach">Our approach</Button>
                </div>
                <div className="approach__right">
                    <img src={approach1} alt="people" loading="lazy" width="235"  height="266" className="approach__image"/>
                    <img src={approach2} alt="people" loading="lazy" width="317"  height="262" className="approach__image"/>
                </div>
        </div>
    </div>
    <div className="approach__bottom">
        <div className="container">
            <ul className="list-reset approach__list grid">
                  <li className="approach__item">
                    <a href="#" className="approach__link approach__link--ted">TED Talks</a>
                  </li>
                   <li className="approach__item">
                    <a href="#" className="approach__link approach__link--nyt">The New York Times</a>
                  </li>
                   <li className="approach__item">
                    <a href="#" className="approach__link approach__link--scoop">StateScoop</a>
                  </li>
                   <li className="approach__item">
                    <a href="#" className="approach__link approach__link--press">Associated Press</a>
                  </li>
                   <li className="approach__item">
                    <a href="#" className="approach__link approach__link--time">Time</a>
                  </li>
                   <li className="approach__item">
                    <a href="#" className="approach__link approach__link--freethink">Freethink</a>
                  </li>
            </ul>
        </div>        
    </div>
</section>
  )
}
