import React, { useState } from "react";
import { navLinks } from "../../utils/constants";
import "./MainNavBar.css";
import { Link } from "react-router-dom";

interface Props {
  toggleClicked: () => void;
  getSearchTerm: (value: string) => void;
}

const MainNavbar: React.FC<Props> = ({ toggleClicked, getSearchTerm }) => {

  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    if (newSearch === " ") return;
    getSearchTerm(newSearch);
    setSearchTerm(newSearch)
  };

  return (
    <>
      <nav className="header__nav">
        <ul className="header__nav-list_main">
          {navLinks.map(({name, href}) => {
            return (
              <li className="header__nav-item_main" key={name}>
                <Link
                  to={href}
                  className="header__nav-link_main"
                  onClick={toggleClicked}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="header__input-container">
        <input
          type="text"
          className="header__input"
          value={searchTerm}
          placeholder="Buscar productos..."
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default MainNavbar;
