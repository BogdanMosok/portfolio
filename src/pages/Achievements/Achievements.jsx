import React from 'react'

export default function Achievements() {
    return (
        <section className='achievements'>
            <div className="achievements__container container">
                <h2 className="achievements__title">
                    We believe in making quality food
                </h2>
                <ul className="achievements__list">
                    <li className="achievements__item">
                        <span className="achievements__subtitle">
                            2M+
                        </span>
                        <p className="achievements__subdescr">
                            Happy Customers
                        </p>
                    </li>
                    <li className="achievements__item">
                        <span className="achievements__subtitle">
                            98%
                        </span>
                        <p className="achievements__subdescr">
                        Customer Satisfaction
                        </p>
                    </li>
                    <li className="achievements__item">
                        <span className="achievements__subtitle">
                            20+
                        </span>
                        <p className="achievements__subdescr">
                            Our Branches 
                        </p>
                    </li>
                    <li className="achievements__item">
                        <span className="achievements__subtitle">
                            100+
                        </span>
                        <p className="achievements__subdescr">
                            Total Employees 
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
