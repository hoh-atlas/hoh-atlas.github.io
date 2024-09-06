import alliedCultures_intro from "../../images/allied-cultures/intro/icon_feature_eventcities.webp";
import quests_icon from "../../images/allied-cultures/quests/quests_icon.webp";
import buildings_icon from "../../images/allied-cultures/buildings/buildings_icon.webp";
import worldwonder_icon from "../../images/allied-cultures/world-wonder/worldwonder_icon.webp";

const sectionsDefinition = {
    page: "allied-cultures",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: alliedCultures_intro,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "quests",
            name: "Quests",
            img: quests_icon,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 3,
            url: "buildings",
            name: "Buildings",
            img: buildings_icon,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 4,
            url: "world-wonder",
            name: "World Wonder",
            img: worldwonder_icon,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 5,
            url: "strategies",
            name: "Strategies",
            img: "https://i.ibb.co/j3g6mfB/icon-unitstat-movementspeed.png",
            show: false,
            dynamicSegments: [],
        },
        {
            id: 6,
            url: "layouts",
            name: "Layouts",
            img: "https://i.ibb.co/zn3VD69/Technology-Roman-Empire-Urban-Management.png",
            show: false,
            dynamicSegments: [],
        },
    ]
}       

export default sectionsDefinition;