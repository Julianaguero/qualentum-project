import {BurgerButton, MainNavbar, UserNavbar} from "./index";
import useToggleNavbar from "../../hooks/useToggleNabar";
import "./Header.css";
import { useThemeActions } from "../../hooks";
import { Link } from "react-router-dom";


export default function Header() {
  const { theme } = useThemeActions();
  const { clicked, toggleClicked } = useToggleNavbar();

  return (
    <header id="header" className={`header ${theme}`}>
      <div
        className="header__logo-container"
      >
        <Link to="/">
          <h1 className="header__title">MI TIENDA</h1>
        </Link>
      </div>
      <div className="header__nav-container">
        <div className={`header__nav-section_main  ${clicked ? "active" : ""}`}>
          <MainNavbar
            toggleClicked={toggleClicked}
          />
        </div>
        <UserNavbar/>
      </div>
      <div className="burger__button">
        <BurgerButton clicked={clicked} toggleClicked={toggleClicked} />
      </div>
    </header>
  );
}
