import {BurgerButton, MainNavbar, UserNavbar} from "./index";
import useToggleNavbar from "../../hooks/useToggleNabar";
import "./Header.css";
import { ThemeProps } from "../../types";

// TODO: intentar evitar el prop-drilling de getSearchTerm

interface HeaderProps {
  getSearchTerm: (value: string) => void;
  theme: ThemeProps;
}

export default function Header({
  getSearchTerm,
  theme,
}: HeaderProps) {
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
            getSearchTerm={getSearchTerm}
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
