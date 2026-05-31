import React from 'react'

import statstimg from '../../assets/statstimg.png'

export default function Stats() {
    return (
        <section className='stats'>
            <div className="stats__container container">
                <div className="stats__left">
                    <h2 className="stats__title">
                        A little information <br /> for our valuable guest
                    </h2>
                    <p className="stats__descr">At place, we believe that dining is not just about food, but also about the <br/> overall experience. Our staff, renowned for their warmth and dedication,<br/> strives to make every visit an unforgettable event.</p>
                    <ul className="stats__list list-reset">
                        <li className="stats__item">
                            <span className='stats__number'>3</span>
                            <span className='stats__text'>Locations</span>
                        </li>
                        <li className="stats__item">
                            <span className='stats__number'>1995</span>
                            <span className='stats__text'>Founded</span>
                        </li>
                        <li className="stats__item">
                            <span className='stats__number'>65+</span>
                            <span className='stats__text'>Staff Members</span>
                        </li>
                        <li className="stats__item">
                            <span className='stats__number'>100%</span>
                            <span className='stats__text'>Satisfied Customers</span>
                        </li>
                    </ul>
                </div>
                <div className="stats__right">
                    <img src={statstimg} alt="" width={555} height={680}/>
                </div>
            </div>
        </section>
    )
}
