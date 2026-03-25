import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.svg';

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
   const menuRef = useRef(null);
   const burgerRef = useRef(null);

   useEffect(() => {
      function handleKeyDown(e) {
         if (e.key === 'Escape') setMenuOpen(false);
      }

      function handleClickOutside(e) {
         if (
            menuOpen &&
            menuRef.current &&
            !menuRef.current.contains(e.target) &&
            burgerRef.current &&
            !burgerRef.current.contains(e.target)
         ) {
            setMenuOpen(false);
         }
      }

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('keydown', handleKeyDown);
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [menuOpen]);

   useEffect(() => {
      if (menuOpen) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = '';
      }
   }, [menuOpen]);

   useEffect(() => {
      function handleResize() {
         if (window.innerWidth > 900 && menuOpen) {
            setMenuOpen(false);
         }
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, [menuOpen]);

   return (
      <header className="header header--position">
         <div className="container flex header__container">
            <a className="logo">
               <img src={logo} alt="Recidiviz logo" />
            </a>

            <button
               ref={burgerRef}
               className={`burger${menuOpen ? ' burger--active' : ''}`}
               aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
               aria-expanded={menuOpen}
               aria-controls="main-nav"
               data-burger
               onClick={() => setMenuOpen((v) => !v)}
            >
               <span className="burger__line"></span>
            </button>

            {menuOpen && (
               <div
                  className="menu-overlay"
                  onClick={() => setMenuOpen(false)}
               ></div>
            )}

            <div
               ref={menuRef}
               className={`menu${menuOpen ? ' menu--active' : ''}`}
               aria-hidden={!menuOpen}
            >
               <button
                  className="menu__close"
                  aria-label="Закрыть меню"
                  onClick={() => setMenuOpen(false)}
               >
                  &times;
               </button>

               <nav className="nav flex" title="Main navigation" data-menu>
                  <ul className="list-reset nav__list flex">
                     <li className="nav__item">
                        <a href="#" className="nav__link">States</a>
                     </li>
                     <li className="nav__item">
                        <a href="#" className="nav__link">Tools</a>
                     </li>
                     <li className="nav__item">
                        <a href="#" className="nav__link">People</a>
                     </li>
                     <li className="nav__item">
                        <a href="#" className="nav__link">Learn More</a>
                     </li>
                     <li className="nav__item">
                        <a href="#" className="nav__link">Donate</a>
                     </li>
                     <li className="nav__item">
                        <a href="#" className="nav__link">Log In</a>
                     </li>
                  </ul>
               </nav>
            </div>

            <nav className="nav flex desktop-nav" title="Main navigation" data-menu>
               <ul className="list-reset nav__list flex">
                  <li className="nav__item">
                     <a href="#" className="nav__link">States</a>
                  </li>
                  <li className="nav__item">
                     <a href="#" className="nav__link">Tools</a>
                  </li>
                  <li className="nav__item">
                     <a href="#" className="nav__link">People</a>
                  </li>
                  <li className="nav__item">
                     <a href="#" className="nav__link">Learn More</a>
                  </li>
                  <li className="nav__item">
                     <a href="#" className="nav__link">Donate</a>
                  </li>
               </ul>
               <a href="#" className="nav__link">Log In</a>
            </nav>

         </div>
      </header>
   );
}