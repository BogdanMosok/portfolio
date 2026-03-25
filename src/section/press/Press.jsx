import React from 'react'
import Button from '../../components/button/Button'

export default function Press() {
    return (
        <section className="press">
            <div className="container">
                <div className="press__top">
                    <h2 className="press__title">
                        Recidiviz in&nbsp;the Press
                    </h2>
                    <Button className="btn press__link" href="#" target="_blank">See all</Button>
                </div>
                <ul className="list-reset press__list grid">
                    <li className="press__item">
                        <article className="press-card">
                            <div className="press-card__top">
                                <div className="press-card__author press-card__author--ted">Ted Talks</div>
                                <time dateTime="2022-02-02" className="press-card__date">2.22.22</time>
                            </div>
                            <h3 className="press-card__title">
                                <a href="#" className="press-card__link">
                                    Meet the 2022 class of&nbsp;TED Fellows
                                </a>
                            </h3>
                        </article>
                    </li>
                    <li className="press__item">
                        <article className="press-card">
                            <div className="press-card__top">
                                <div className="press-card__author press-card__author--coor">Correctional News</div>
                                <time dateTime="2022-02-02" className="press-card__date">2.2.22</time>
                            </div>
                            <h3 className="press-card__title">
                                <a href="#" className="press-card__link">
                                    New Partnership Aims to&nbsp;Help Transform Prison Conditions
                                </a>
                            </h3>
                        </article>
                    </li>
                    <li className="press__item">
                        <article className="press-card">
                            <div className="press-card__top">
                                <div className="press-card__author press-card__author--justice">Department of Justice</div>
                                <time dateTime="2022-26-01" className="press-card__date">1.26.22</time>
                            </div>
                            <h3 className="press-card__title">
                                <a href="#" className="press-card__link">
                                    Justice Department Establishes Initiative to&nbsp;Strengthen States&rsquo; Use of&nbsp;Criminal Justice Data
                                </a>
                            </h3>
                        </article>
                    </li>
                    <li className="press__item">
                        <article className="press-card">
                            <div className="press-card__top">
                                <div className="press-card__author press-card__author--nyt">The New York Times</div>
                                <time dateTime="2021-12-27" className="press-card__date">12.27.21</time>
                            </div>
                            <h3 className="press-card__title">
                                <a href="#" className="press-card__link">
                                    The 2021 Good Tech Awards
                                </a>
                            </h3>
                        </article>
                    </li>
                    <li className="press__item">
                        <article className="press-card">
                            <div className="press-card__top">
                                <div className="press-card__author press-card__author--corr1">Corrections1</div>
                                <time dateTime="2022-11-18" className="press-card__date">11.18.21</time>
                            </div>
                            <h3 className="press-card__title">
                                <a href="#" className="press-card__link">
                                    The 2021 Good Tech Awards
                                </a>
                            </h3>
                        </article>
                    </li>
                    <li className="press__item">
                        <article className="press-card">
                            <div className="press-card__top">
                                <div className="press-card__author press-card__author--crime">Right on Crime</div>
                                <time dateTime="2022-09-09" className="press-card__date">9.9.22</time>
                            </div>
                            <h3 className="press-card__title">
                                <a href="#" className="press-card__link">
                                    Together, We&nbsp;Can Make Mississippi Safer and Reentry-Ready
                                </a>
                            </h3>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    )
}
