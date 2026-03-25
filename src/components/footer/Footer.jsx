import React from 'react'
import logofooter from '../../assets/logo-footer.svg'

export default function Footer() {
  return (
    <footer className="footer">
  <div className="footer__top">  
    <div className="container grid">
      <div className="footer__column">
        <h2 className="footer__title">
          Company
        </h2>
        <ul className="list-reset footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">About</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Team</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Supporters</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Diversity</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Blog</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Press</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Careers</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Contact</a>
          </li>
        </ul>
      </div>
            <div className="footer__column">
        <h2 className="footer__title">
          Product
        </h2>
        <ul className="list-reset footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">Our Approach</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Corrections Leaders</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Corrections Staff</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Policy Impact</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Public Data</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Security</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Testimonials</a>
          </li>
        </ul>
      </div>
            <div className="footer__column">
        <h2 className="footer__title">
          States
        </h2>
        <ul className="list-reset footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">Overview</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Idaho</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Maine</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Michigan</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Missouri</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">North Dakota</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Pennsylvania</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Tennessee</a>
          </li>
        </ul>
      </div>
            <div className="footer__column">
        <h2 className="footer__title">
          Network
        </h2>
        <ul className="list-reset footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">Twitter</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Medium</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">GitHub</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">LinkedIn</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">Blog</a>
          </li>
        </ul>
      </div>
  </div>
</div>
<div className="footer__bottom">
  <div className="container footer__bottom-container">
    <a  className="footer__logo">
      <img src={logofooter} alt="footer-logo" width="24" height="24"/>
    </a>
    <div className="footer__text">
      <ul className="footer__sublist list-reset">
        <li className="footer__sublist-item">
          <a href="#" className="footer__sublist-link">
            Terms of Service
          </a>
        </li>
        <li className="footer__sublist-item">
          <a href="#" className="footer__sublist-link">
            Privacy
          </a>
        </li>
        <li className="footer__sublist-item">
          <a href="#" className="footer__sublist-link">
            Responsible Disclosure
          </a>
        </li>
      </ul>
      <div className="footer__bottom-text">
      <div className="footer__copy">Copyright © 2017</div>
      <div className="footer__rights">-2022, Recidiviz. All Rights Reserved.</div>
      </div>
    </div>
  </div>
</div>
</footer>

  )
}
