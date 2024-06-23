import BurguerButton from "./BurguerButton";
import MainNavbar from "./MainNavbar";
import UserNavbar from "./UserNavbar";
import useToggleNavbar from "../../hooks/useToggleNabar";
import "./Header.css";
import { useThemeContext } from "../../hooks/useThemeContext";

// TODO: intentar evitar el prop-drilling de getSearchTerm

interface HeaderProps  {
  getSearchTerm:  (value: string) => void;
}



export default function Header({ getSearchTerm } : HeaderProps ) {
  const {theme} = useThemeContext();

  const { clicked, toggleClicked } = useToggleNavbar();


  return (
    <header id="header" className={`header ${theme}`}>
      <div className="header__logo-container">
        <h1 className="header__title">MI TIENDA</h1>
      </div>
      <div className="header__nav-container">
        <div className={`header__nav-section_main  ${clicked ? "active" : ''}`}>
          <MainNavbar toggleClicked={toggleClicked} getSearchTerm={getSearchTerm}  />
        </div>
       <UserNavbar />
      </div>
      <div className="burger__button">
        <BurguerButton clicked={clicked} toggleClicked={toggleClicked}/>
      </div>
    </header>
  );
}

