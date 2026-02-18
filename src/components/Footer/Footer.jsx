import React from 'react'
import visa from '../../assets/Visa.svg'
import mastercard from '../../assets/Mastercard.svg'
import america from '../../assets/american.svg'
import icon1 from '../../assets/Icon1.svg'
import icon2 from '../../assets/Icon2.svg'
import icon3 from '../../assets/Icon3.svg'
import icon4 from '../../assets/Icon4.svg'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <div className="footer__row">
                    <div className="footer__top">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <h3 className="footer__title">
                                    Our Products
                                </h3>
                                <a href="#/" className="footer__link">
                                    Our menus
                                </a>
                                <a href="#/" className="footer__link">
                                    Our burgers
                                </a>
                                <a href="#/" className="footer__link">
                                    Our times sides
                                </a>
                                <a href="#/" className="footer__link">
                                    Our naandwiches
                                </a>
                            </li>
                            <li className="footer__item">
                                <h3 className="footer__title">
                                    legal information
                                </h3>
                                <a href="#/" className="footer__link">
                                    Legal Notice
                                </a>
                            </li>
                            <li className="footer__item">
                                <h3 className="footer__title">
                                    Contact us
                                </h3>
                                <a href="#/" className="footer__link">
                                    Contacts
                                </a>
                                <a href="#/" className="footer__link">
                                    Our addresses
                                </a>
                                <a href="#/" className="footer__link">
                                    Become a Times Square franchisee
                                </a>
                            </li>
                            <li className="footer__item">
                                <h3 className="footer__title">
                                    We accept
                                </h3>
                                <div className="footer__mastervisa">
                                    <a href="#/" className="footer__link">
                                        <img src={mastercard} alt="" />
                                    </a>
                                    <a href="#/" className="footer__link">
                                        <img src={visa} alt="" />
                                    </a>
                                </div>
                                <a href="#/" className="footer__link">
                                    <img src={america} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__line"></div>
                    <div className="footer__bottom">
                        <ul className="footer__bottom-list">
                            <li className="footer__bottom-item">
                                <a href="#/" className="footer__bottom-link">
                                    <img src={icon1} alt=""/>
                                </a>
                            </li>
                            <li className="footer__bottom-item">
                                <a href="#/" className="footer__bottom-link">
                                    <img src={icon2} alt=""/>
                                </a>
                            </li>
                            <li className="footer__bottom-item">
                                <a href="#/" className="footer__bottom-link">
                                    <img src={icon3} alt=""/>
                                </a>
                            </li>
                            <li className="footer__bottom-item">
                                <a href="#/" className="footer__bottom-link">
                                    <img src={icon4} alt=""/>
                                </a>
                            </li>
                        </ul>
                        <span className="footer__bottom-copyright">
                            © 2024 Nayef All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
