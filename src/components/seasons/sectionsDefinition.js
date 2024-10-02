import icon_seasonpass_progress from "../../images/seasons/intro/icon_seasonpass_progress.webp";
import icon_reward_season_pass from "../../images/seasons/rewards/icon_reward_season_pass.webp";

const sectionsDefinition = {
    page: "seasons",
    tabs: [
        {
            id: 1,
            url: "",
            name: "Intro",
            img: icon_seasonpass_progress,
            show: true,
            dynamicSegments: [],
        },
        {
            id: 2,
            url: "rewards",
            name: "Rewards",
            img: icon_reward_season_pass,
            show: true,
            dynamicSegments: [],
        },
    ]
}

export default sectionsDefinition;