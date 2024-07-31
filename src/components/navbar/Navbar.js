import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { useState } from "react";

import logo from "../../images/hoh_logo.png";
import links from "./links";

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return <header>
        <nav>
            <div className="navigation">
                <div className="nav-header">
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <GiHamburgerMenu className="hamburger-icon"/>
                    </button>
                </div>
                <div className={`${showMenu ? "nav-list show" : "nav-list hide"}`}>
                    <ul>
                        {
                            links
                                .filter( (oneLink) => oneLink.show === true)
                                .map( (oneLink) => {
                                const {id, text, url, img} = oneLink;

                                return <li key={id}>
                                    <NavLink to={url} className={ ({isActive}) => isActive ? "activeLink" : "nonactiveLink"}>
                                        <img src={img} alt="" className="nav-icon" />
                                        {text}
                                    </NavLink>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </header>
}

export default Navbar;