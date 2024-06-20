import { LuShoppingCart, LuHeart, LuUser2 } from "react-icons/lu";
import "./UserNavbar.css"


export default function UserNavbar() {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <a
            href="#"
            className="header__nav-link"
            aria-label="Link to shopping cart"
          >
            <LuShoppingCart className="header__nav-icons" aria-disabled />
          </a>
        </li>
        <li className="header__nav-item">
          <a
            href="#"
            className="header__nav-link"
            aria-label="Link to my fav products"
          >
            <LuHeart className="header__nav-icons" aria-disabled />
          </a>
        </li>
        <li className="header__nav-item">
          <a
            href="#"
            className="header__nav-link"
            aria-label="Link to user login or preferences"
          >
            <LuUser2 className="header__nav-icons" aria-disabled />
          </a>
        </li>
      </ul>
    </nav>
  );
}
