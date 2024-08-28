import React from 'react';
import { Link } from 'react-router-dom';
import "./MenuGrid.css";

import Navbar_Home from "../../../images/navbar/Navbar_Home.webp";
import Navbar_Campaign from "../../../images/navbar/Navbar_Campaign.webp";
import Navbar_Heroes from "../../../images/navbar/Navbar_Heroes.webp";
import Navbar_Resources from "../../../images/navbar/Navbar_Resources.webp";
import Navbar_AlliedCultures from "../../../images/navbar/Navbar_AlliedCultures.webp";

const MenuGrid = () => {
    const items = [
        { id: 1, text: "Campaign", icon: Navbar_Campaign, link: "/campaign" },
        { id: 2, text: "Heroes", icon: Navbar_Heroes, link: "/heroes" },
        { id: 3, text: "Resources", icon: Navbar_Resources, link: "/resources" },
        /*{ id: 4, text: "Events", icon: Navbar_Events, link: "/events" },
        { id: 5, text: "Item 5", icon: "", link: "" },
        { id: 6, text: "Item 6", icon: "", link: "" },*/
    ];

    return (
        <div className="menu-grid">
            {items.map(item => (
                <Link key={item.id} to={item.link} className="text-link-skin">
                    <div className="menu-item">
                        <span className="menu-text">{item.text}</span>
                        <img src={item.icon ? item.icon : "https://i.ibb.co/qdFQ48q/home.png"} alt="Icon" className="menu-icon" />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MenuGrid;
