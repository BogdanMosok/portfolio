import Logo from '../../assets/Logo.svg'

export default function Navbar({ active }) {

  return (
    <div className="header__row">
      <div className='header__left'>
        <nav className={`header__nav ${active ? "active" : ""}`}>
          <ul className="header__list">
            <li className="header__item">
              <a href="#/" className="header__link">Welcome</a>
            </li>
            <li className="header__item">
              <a href="#/" className="header__link">Our Menu</a>
            </li>
            <li className="header__item">
              <a href="#/" className="header__link">Franchise</a>
            </li>
            <li className="header__item">
              <a href="#/" className="header__link">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__clogo">
        <a href="#/" className="header__logo">
          <img src={Logo} alt="" />
        </a>
      </div>
    </div>
  )
}
