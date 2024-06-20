import React from "react";
import "./MainNavBar.css";

interface Props {
  toggleClicked: () => void;
  getSearchTerm: (value: string) => void;
}

const MainNavbar: React.FC<Props> = ({ toggleClicked, getSearchTerm }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    if (newSearch === " ") return;
    getSearchTerm(newSearch);
  };

  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav-list_main">
          <li className="header__nav-item_main">
            <a
              href="#"
              className="header__nav-link_main"
              onClick={toggleClicked}
            >
              Inicio
            </a>
          </li>
          <li className="header__nav-item_main">
            <a
              href="#"
              className="header__nav-link_main"
              onClick={toggleClicked}
            >
              Categorias
            </a>
          </li>
          <li className="header__nav-item_main">
            <a
              href="#"
              className="header__nav-link_main"
              onClick={toggleClicked}
            >
              Ofertas
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__input-container">
        <input
          type="text"
          name=""
          id=""
          className="header__input"
          placeholder="Buscar productos..."
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default MainNavbar;
