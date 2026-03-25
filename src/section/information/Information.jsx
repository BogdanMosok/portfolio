import React from 'react'

export default function Information() {
  return (
    <section className="information">
    <div className="container grid">
        <div className="information__text">
            <h2 className="information__title">Get the right information to&nbsp;the right person at&nbsp;the right time.</h2>
        </div>
        <ul className="list-reset information__list">
            <li className="information__item">
                <h3 className="information__subtitle">
                     For Leaders
                </h3>
                <p className="information__descr">
                    Set goals, forecast the impact of&nbsp;policy or&nbsp;practice changes, and track their outcomes across your agency.
                </p>
            </li>
            <li className="information__item">
                <h3 className="information__subtitle">
                     For Line Staff
                </h3>
                <p className="information__descr">
                    Track probation and parole outcomes, see what&rsquo;s leading to&nbsp;success, and reduce recidivism with our case management system.
                </p>
            </li>
            <li className="information__item">
                <h3 className="information__subtitle">
                     For the Public
                </h3>
                <p className="information__descr">
                    Use open source code, public data, interactive tools, and data visualizations to&nbsp;understand the state of&nbsp;incarceration, promote accountability, and conduct research.
                </p>
            </li>
            <li className="information__item">
                <h3 className="information__subtitle">
                     For Policymakers and Advocates
                </h3>
                <p className="information__descr">
                    Project the impact of&nbsp;policies on&nbsp;carceral, fiscal, and community outcomes. Understand where disparities begin, where they grow, and whether a&nbsp;policy is&nbsp;likely to&nbsp;increase or&nbsp;reduce them.
                </p>
            </li>
        </ul>
    </div>
</section>
  )
}
