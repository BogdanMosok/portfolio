import React from 'react';
import { NavLink } from 'react-router-dom';

// Импорт иконок и логотипа
import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import tw from '../../assets/logo-twitter.svg';
import fb from '../../assets/logo-fb-simple.svg';
import inst from '../../assets/logoinsta.svg';
import git from '../../assets/logo-github.svg';
import logo from '../../assets/Logo.svg';
import Button from '../button/Button';

// Данные для соцсетей
const HeaderSocial = [
    { id: 1, link: 'https://twitter.com', logo: tw, alt: 'twitter' },
    { id: 2, link: 'https://facebook.com', logo: fb, alt: 'facebook' },
    { id: 3, link: 'https://instagram.com', logo: inst, alt: 'instagram' },
    { id: 4, link: 'https://github.com', logo: git, alt: 'github' },
];

const HeaderNav = [
    { id: 1, navtext: 'Home', navlink: '/' },
    { id: 2, navtext: 'About', navlink: '/about' },
    { id: 3, navtext: 'Menu', navlink: '/menu' },
    { id: 4, navtext: 'Pages', navlink: '/pages' },
    { id: 5, navtext: 'Contact', navlink: '/contact' }
];

export default function Header() {
    return (
        <header className='header'>
            <div className="header__top">
                <div className="header__container container">
                    <div className="header__top-left">
                        <div className="header__left-contact">
                            <img src={phone} alt="phone" />
                            <a href="tel:+14148570107" className='header__left-link'>(414) 857 - 0107 </a>
                        </div>
                        <div className="header__left-contact">
                            <img src={mail} alt="mail" />
                            <a href="mailto:yummy@bistrobliss" className='header__left-link'>yummy@bistrobliss</a>
                        </div>
                    </div>
                    <div className="header__top-right">
                        <ul className="header__right-list list-reset">
                            {HeaderSocial.map((item) => (
                                <li key={item.id} className='header__right-item'>
                                    <a
                                        href={item.link}
                                        className="header__right-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={item.alt}
                                    >
                                        <img src={item.logo} alt={item.alt} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__container container">
                    <NavLink to="/" className="header__middle-logo">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    
                    <nav className='header__middle-nav'>
                        <ul className="header__middle-list list-reset">
                            {HeaderNav.map((item) => (
                                <li key={item.id} className='header__middle-item'>
                                    <NavLink
                                        to={item.navlink}
                                        end={item.navlink === '/'} 
                                        className={({ isActive }) =>
                                            `header__middle-link ${isActive ? 'active' : ''}`
                                        }
                                    >
                                        {item.navtext}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    
                    <Button className='header__middle-btn'>Book A Table</Button>
                </div>
            </div>
        </header>
    );
}