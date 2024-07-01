import {useCartContext, useThemeContext} from "../../hooks/";

import { LuShoppingCart, LuHeart, LuUser2 } from "react-icons/lu";
import { RiContrast2Fill, RiContrast2Line } from "react-icons/ri";

import "./UserNavbar.css";
import { sumItems } from "../../utils/shopUtils";



export default function UserNavbar() {
  const { theme, toggleTheme } = useThemeContext();
  const { cart } = useCartContext();



  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <a
            href="#"
            className="header__nav-link"
            aria-label="Link to shopping cart"
            onClick={toggleTheme}
          >
            {theme === "light" ? (
              <RiContrast2Fill className="header__nav-icons" aria-disabled />
            ) : (
              <RiContrast2Line className="header__nav-icons" aria-disabled />
            )}
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
             aria-label="Link to shopping cart"
          >
            <LuShoppingCart className="header__nav-icons" aria-disabled />

            {sumItems(cart) > 0 && <span className="cart__counter">{sumItems(cart)}</span>}
          </a>
        </li>
      </ul>
    </nav>
  );
}
