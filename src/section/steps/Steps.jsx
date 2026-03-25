import React from 'react'

export default function Steps() {
  return (
    <section className="steps">
    <div className="container">
        <h2 className="steps__title">
            We&nbsp;are a&nbsp;non-profit that partners with state criminal justice agencies to&nbsp;advance their use of&nbsp;data and reduce incarceration.
        </h2>
        <ul className="list-reset steps__list flex">
            <li className="steps__item">
                <p className="steps__descr">
                   intake an&nbsp;agency&rsquo;s disjointed data
                </p>
            </li>
           <li className="steps__item steps__item--line" aria-hidden="true"></li>
            <li className="steps__item">
                <p className="steps__descr">
                    deploy tools for all levels of&nbsp;decision making
                </p>
            </li>
            <li className="steps__item steps__item--line" aria-hidden="true"></li>
            <li className="steps__item">
                <p className="steps__descr">
                    improve outcomes for justice-impacted individuals
                </p>
            </li>
        </ul>
    </div>
</section>
  )
}
