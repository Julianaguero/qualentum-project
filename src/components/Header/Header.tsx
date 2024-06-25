import BurguerButton from "./BurguerButton";
import MainNavbar from "./MainNavbar";
import UserNavbar from "./UserNavbar";
import useToggleNavbar from "../../hooks/useToggleNabar";
import "./Header.css";
import { ThemeProps } from "../../types";

// TODO: intentar evitar el prop-drilling de getSearchTerm

interface HeaderProps {
  getSearchTerm: (value: string) => void;
  theme: ThemeProps;
  handleActivePage: (value: "cart" | "shop") => void;
}

export default function Header({
  getSearchTerm,
  theme,
  handleActivePage,
}: HeaderProps) {
  const { clicked, toggleClicked } = useToggleNavbar();

  return (
    <header id="header" className={`header ${theme}`}>
      <div
        className="header__logo-container"
      >
        <a href="#" onClick={() => handleActivePage("shop")}>
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
        <UserNavbar handleToggleActivePage={handleActivePage} />
      </div>
      <div className="burger__button">
        <BurguerButton clicked={clicked} toggleClicked={toggleClicked} />
      </div>
    </header>
  );
}
