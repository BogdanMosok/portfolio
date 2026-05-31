import React from 'react'
import logo1 from '../../assets/Logo1.svg'
import twitf from '../../assets/twitf.svg'
import fbf from '../../assets/fbf.svg'
import instf from '../../assets/instf.svg'
import gitf from '../../assets/gitf.svg'
import footerright1 from '../../assets/footerright1.png'
import footerright2 from '../../assets/footerright2.png'
import footerright3 from '../../assets/footerright3.png'
import footerright4 from '../../assets/footerright4.png'

const FooterLeftItem = [
    {
        id: 1, image: twitf, link: 'https://twitter.com'
    },
    {
        id: 2, image: fbf, link: 'https://facebook.com'
    },
    {
        id: 3, image: instf, link: 'https://instagram.com'
    },
    {
        id: 4, image: gitf, link: 'https://github.com'
    },
];

const mainPages = ['Home', 'About', 'Menu', 'Pricing', 'Blog', 'Contact', 'Delivery'];
const utilityPages = ['Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More'];

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <div className="footer__row">
                    <div className="footer__left">
                        <a href="#/" className="footer__left-logo">
                            <img src={logo1} alt="" />
                        </a>
                        <p className="footer__left-descr">
                            In the new era of technology we look a <br/> in the future with certainty and pride to  for our company and.
                        </p>
                        <ul className="footer__left-list list-reset">
                            {FooterLeftItem.map((item) => (
                                <li key={item.id} className='footer__left-item'>
                                    <a href={item.link} className='footer__left-link'>
                                        <img src={item.image} alt="" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer__mid">
                        <div className="footer__mid-column">
                            <h3 className="footer__mid-title">
                                Pages
                            </h3>
                            <ul className="footer__mid-list list-reset">
                                {mainPages.map((page) => (
                                    <li key={page} className='footer__mid-item'>
                                        <a href={page} className='footer__mid-link'>{page}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer__mid-column">
                            <h3 className="footer__mid-title">
                                Utility Pages
                            </h3>
                            <ul className="footer__mid-list list-reset">
                                {utilityPages.map((page) => (
                                    <li key={page} className='footer__mid-item'>
                                        <a href={page}  className='footer__mid-link' >{page}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer__right">
                            <h3 className="footer__right-title">
                                Follow Us On Instagram
                            </h3>
                            <div className="footer__right-column">
                                <img src={footerright1} alt="" className='footer__right-img'/>
                                <img src={footerright2} alt="" className='footer__right-img'/>
                                <img src={footerright3} alt="" className='footer__right-img'/>
                                <img src={footerright4} alt="" className='footer__right-img'/>
                            </div>
                    </div>
                    <div className="footer__bottom">
                                <p className="footer__bottom-copyright">
                                    Copyright © 2023 Hashtag Developer. All Rights Reserved
                                </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
