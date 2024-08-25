import Navbar_Home from "../../images/navbar/Navbar_Home.webp";
import Navbar_Campaign from "../../images/navbar/Navbar_Campaign.webp";
import Navbar_Heroes from "../../images/navbar/Navbar_Heroes.webp";
import Navbar_Resources from "../../images/navbar/Navbar_Resources.webp";
import Navbar_Events from "../../images/navbar/Navbar_Events.webp";

const links = [
    {
        id: 1,
        url: "/",
        text: "Home",
        img: Navbar_Home,
        show: true,
    },
    {
        id: 2,
        url: "/campaign",
        text: "Campaign",
        img: Navbar_Campaign,
        show: true,
    },
    {
        id: 3,
        url: "/heroes",
        text: "Heroes",
        img: Navbar_Heroes,
        show: true,
    },
    {
        id: 4,
        url: "/treasure-hunt",
        text: "Treasure Hunt",
        img: "https://i.ibb.co/6WdfMX6/ath-attempt.png",
        show: false,
    },
    {
        id: 5,
        url: "/allied-cultures",
        text: "Allied Cultures",
        img: Navbar_Events,
        show: true,
    },
    {
        id: 6,
        url: "/tesla-storms",
        text: "Tesla Storms",
        img: "https://i.ibb.co/nRvy33n/event-widget-backer-time-Paradox-2021.png",
        show: false,
    },
    {
        id: 7,
        url: "/resources",
        text: "Resources",
        img: Navbar_Resources,
        show: true,
    },
]

export default links;