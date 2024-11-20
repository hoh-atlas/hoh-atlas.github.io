import icon_chest_teslacrests_2_blue from "../../../images/shared/chests/icon_chest_teslacrests_2_blue.webp";
import icon_chest_teslacrests_2_green from "../../../images/shared/chests/icon_chest_teslacrests_2_green.webp";
import icon_chest_teslacrests_2_purple from "../../../images/shared/chests/icon_chest_teslacrests_2_purple.webp";
import icon_chest_teslacrests_2_red from "../../../images/shared/chests/icon_chest_teslacrests_2_red.webp";
import icon_chest_teslacrests_2_yellow from "../../../images/shared/chests/icon_chest_teslacrests_2_yellow.webp";
import icon_chest_teslacrests_3_blue from "../../../images/shared/chests/icon_chest_teslacrests_3_blue.webp";
import icon_chest_teslacrests_3_green from "../../../images/shared/chests/icon_chest_teslacrests_3_green.webp";
import icon_chest_teslacrests_3_purple from "../../../images/shared/chests/icon_chest_teslacrests_3_purple.webp";
import icon_chest_teslacrests_3_red from "../../../images/shared/chests/icon_chest_teslacrests_3_red.webp";
import icon_chest_teslacrests_3_yellow from "../../../images/shared/chests/icon_chest_teslacrests_3_yellow.webp";

const chests = [
    {
        id: "chest_color_crests_red_common_enhanced_superior", 
        name: "Chest with Red Crests", 
        img: icon_chest_teslacrests_3_red,
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
        img: icon_chest_teslacrests_3_blue,
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
    {
        id: "chest_color_crests_yellow_common_enhanced_superior", 
        name: "Chest with Yellow Crests", 
        img: icon_chest_teslacrests_3_yellow,
        items: [
            {
                resource: "yellow_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "yellow_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "yellow_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_color_crests_purple_common_enhanced_superior", 
        name: "Chest with Purple Crests", 
        img: icon_chest_teslacrests_3_purple,
        items: [
            {
                resource: "purple_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "purple_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "purple_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
    {
        id: "chest_color_crests_green_common_enhanced_superior", 
        name: "Chest with Green Crests", 
        img: icon_chest_teslacrests_3_green,
        items: [
            {
                resource: "green_crest_common",
                amount: 20,
                percentage: 33
            },
            {
                resource: "green_crest_enhanced",
                amount: 15,
                percentage: 33
            },
            {
                resource: "green_crest_superior",
                amount: 10,
                percentage: 33
            },
        ]
    },
]

export default chests;