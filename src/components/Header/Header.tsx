import {BurgerButton, MainNavbar, UserNavbar} from "./index";
import useToggleNavbar from "../../hooks/useToggleNabar";
import "./Header.css";
import { useSearch, useThemeContext } from "../../hooks";

// TODO: intentar evitar el prop-drilling de getSearchTerm


export default function Header() {
  const { theme } = useThemeContext();
  const {setSearchTerm} = useSearch()
  const { clicked, toggleClicked } = useToggleNavbar();


  return (
    <header id="header" className={`header ${theme}`}>
      <div
        className="header__logo-container"
      >
        <a href="#">
          <h1 className="header__title">MI TIENDA</h1>
        </a>
      </div>
      <div className="header__nav-container">
        <div className={`header__nav-section_main  ${clicked ? "active" : ""}`}>
          <MainNavbar
            toggleClicked={toggleClicked}
            getSearchTerm={setSearchTerm}
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
