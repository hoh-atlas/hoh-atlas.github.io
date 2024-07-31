import React from 'react';
import { Link } from 'react-router-dom';
import "./MenuGrid.css";

const MenuGrid = () => {
    const items = [
        { id: 1, text: "Campaign", icon: "https://i.ibb.co/74Cw5tN/Navbar-Campaign2.png", link: "/campaign" },
        { id: 2, text: "Heroes", icon: "https://i.ibb.co/zGq00Qm/Navbar-Heroes2.png", link: "/heroes" },
        { id: 3, text: "Resources", icon: "https://i.ibb.co/bKJKp6m/Navbar-Resources2.png", link: "/resources" },
        /*{ id: 4, text: "Item 4", icon: "", link: "" },
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
