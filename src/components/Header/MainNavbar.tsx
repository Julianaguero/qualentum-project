import React from "react";
import { navLinks } from "../../utils/data";
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
          {navLinks.map(({name, href}) => {
            return (
              <li className="header__nav-item_main" key={name}>
                <a
                  href={href}
                  className="header__nav-link_main"
                  onClick={toggleClicked}
                >
                  {name}
                </a>
              </li>
            );
          })}
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
