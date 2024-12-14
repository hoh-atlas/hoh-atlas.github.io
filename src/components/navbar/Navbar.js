// Navbar.js

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import logo from "../../images/shared/logo.webp";
import links from "./links";
import dropdownItems from "./dropdownItems";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownEra from "./DropdownEra"; // Import the new DropdownEra component

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header onClick={() => setShowMenu(false)}>
      <nav>
        <div className="navigation">
          <div className="nav-header">
            <NavLink to="/">
              <img src={logo} alt="Logo" />
            </NavLink>

            <DropdownEra dropdownItems={dropdownItems} />

            <button onClick={() => setShowMenu(!showMenu)}>
              <GiHamburgerMenu className="hamburger-icon" />
            </button>
          </div>

          <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
            <ul>
              {links
                .filter((oneLink) => oneLink.show === true)
                .map((oneLink) => {
                  const { id, text, url, img } = oneLink;

                  return (
                    <li key={id}>
                      <NavLink
                        to={url}
                        className={({ isActive }) =>
                          isActive ? "activeLink" : "nonactiveLink"
                        }
                      >
                        <img src={img} alt="" className="nav-icon" />
                        {text}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
