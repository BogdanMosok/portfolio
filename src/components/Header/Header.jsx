import { useState } from "react";
import Navbar from '../Navbar/Navbar'
import search from '../../assets/search.svg'
import cart from '../../assets/Cart icon.svg'
import Button from '../Button/Button'
import { RxHamburgerMenu } from "react-icons/rx";



export default function Header() {

    const [active, setActive] = useState(false);

  return (
    <header className='header'>
        <div className="header__container container">
                            <div className='header__smartmenu'>
                    <RxHamburgerMenu className={active ? "header__burger active" : "header__burger "}
                            onClick={() => setActive(!active)}

                    />
                   
                </div>
                <Navbar active={active} />
                <div className="header__right">
                    <div className="header__right-cart">
                        <img src={cart} alt=""/>
                        <div className="header__right-dot" data-caunter><span >0</span></div>
                    </div>
                    <img src={search} alt="" className='header__right-search'/>
                    <div className="header__btn">
                    <Button >
                        Become a Member
                    </Button>
                    </div>
                </div>

        </div>
    </header>
  )
}
