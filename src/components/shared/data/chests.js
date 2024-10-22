import chest_color_crests_red_common_enhanced from "../../../images/shared/chests/chest_color_crests_red_common_enhanced.webp";

const chests = [
    {
        id: "chest_color_crests_red_common_enhanced_superior", 
        name: "Chest with Red Crests", 
        img: chest_color_crests_red_common_enhanced, 
        representingIcons: ["red_crest_common", "red_crest_enhanced", "red_crest_superior"],
        items: [
            {
                resource: "red_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "red_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "red_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_color_crests_blue_common_enhanced_superior", 
        name: "Chest with Blue Crests", 
        img: "", 
        representingIcons: ["blue_crest_common", "blue_crest_enhanced", "blue_crest_superior"],
        items: [
            {
                resource: "blue_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "blue_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "blue_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
]

export default chests;