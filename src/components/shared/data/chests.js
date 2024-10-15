import chest_color_crests_red_common_enhanced from "../../../images/shared/chests/chest_color_crests_red_common_enhanced.webp";

const chests = [
    {
        id: "chest_color_crests_red_common_enhanced", 
        name: "Chest with Red Crests", 
        img: chest_color_crests_red_common_enhanced, 
        items: [
            {
                resource: "red_crest_common",
                amount: 20,
                percentage: 50
            },
            {
                resource: "red_crest_enhanced",
                amount: 15,
                percentage: 50
            },
        ]
    },
]

export default chests;