import Navbar_Home from "../../images/navbar/Navbar_Home.webp";
import Navbar_Campaign from "../../images/navbar/Navbar_Campaign.webp";
import Navbar_Heroes from "../../images/navbar/Navbar_Heroes.webp";
import Navbar_Resources from "../../images/navbar/Navbar_Resources.webp";
import Navbar_AlliedCultures from "../../images/navbar/Navbar_AlliedCultures.webp";
import Navbar_TreasureHunt from "../../images/navbar/Navbar_TreasureHunt.webp";
import Navbar_Seasons from "../../images/navbar/Navbar_Seasons.webp";

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
        url: "/allied-cultures",
        text: "Allied Cultures",
        img: Navbar_AlliedCultures,
        show: true,
    },
    {
        id: 5,
        url: "/treasure-hunt",
        text: "Treasure Hunt",
        img: Navbar_TreasureHunt,
        show: true,
    },
    {
        id: 6,
        url: "/seasons",
        text: "Seasons",
        img: Navbar_Seasons,
        show: true,
    },
    {
        id: 7,
        url: "/resources",
        text: "Resources",
        img: Navbar_Resources,
        show: true,
    },
    {
        id: 8,
        url: "/tesla-storms",
        text: "Tesla Storms",
        img: "https://i.ibb.co/nRvy33n/event-widget-backer-time-Paradox-2021.png",
        show: false,
    },
]

export default links;