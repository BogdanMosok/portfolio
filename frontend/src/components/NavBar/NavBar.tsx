
const NavBarItem: string[] = ['Home', 'Shop', 'Plant Care', 'Blogs'];

export default function NavBar() {
  return (
    <nav className="header__nav">
        <ul className="header__list list-reset">
          {NavBarItem.map((item) => (
            <li key={item} className="header__item">
              <a href="#" className="header__link">
                {item}
              </a>
            </li>
          ))}
        </ul>
    </nav>
  )
}
