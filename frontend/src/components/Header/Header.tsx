import NavBar from '../NavBar/NavBar'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import cart from '../../assets/cart.svg'
import logout from '../../assets/logout.svg'

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__left">
        <a  className="header__logo">
            <img src={logo} alt="GreenShop Logo"/>
        </a>
        <NavBar />
        </div>
        <div className="header__right">
            <button className="header__search btn-reset">
                <img src={search} alt="Search Icon"/>
            </button>
            <button className="header__cart btn-reset">
                <img src={cart} alt="Cart Icon"/>
            </button>
          <div className="header__auth-actions">
            <button
              type="button"
              className="header__logout btn-reset"
              aria-label="Logout"
            >
              <img src={logout} alt="" width="20" height="20"/>
            </button>

            <button
              type="button"
              className="header__login btn-reset"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}


export default Header

