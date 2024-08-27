import icon_battle from "../../images/campaign/intro/icon-battle.webp";

const sectionsDefinition = {
    page: "campaign",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: icon_battle,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "provinces",
            name: "Provinces",
            img: "https://i.ibb.co/PZ7fb4t/icon-expansion-city-capital-land.png",
            show: true,
            dynamicSegments: [],
        },
    ]
}

export default sectionsDefinition;