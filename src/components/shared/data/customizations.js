
import ath_sugarcane_distillery from "../../../images/shared/customizations/ath_sugarcane_distillery.webp";
import ath_voodoo_head from "../../../images/shared/customizations/ath_voodoo_head.webp"
import ath_pirate_den from "../../../images/shared/customizations/ath_pirate_den.webp";
import ath_belltower_cottage from "../../../images/shared/customizations/ath_belltower_cottage.webp";
import ath_the_scallywags_shanty from "../../../images/shared/customizations/ath_the_scallywags_shanty.webp";
import ath_coconut_tree from "../../../images/shared/customizations/ath_coconut_tree.webp";
import ath_hammock_trees from "../../../images/shared/customizations/ath_hammock_trees.webp";
import ath_robber_crab from "../../../images/shared/customizations/ath_robber_crab.webp";
import ath_skull_home from "../../../images/shared/customizations/ath_skull_home.webp";
import ath_tropical_fruit_farm from "../../../images/shared/customizations/ath_tropical_fruit_farm.webp";
import ath_crows_inn from "../../../images/shared/customizations/ath_crows_inn.webp";
import ath_jolly_roger from "../../../images/shared/customizations/ath_jolly_roger.webp";
import ath_long_nine from "../../../images/shared/customizations/ath_long_nine.webp";
import ath_treasure_trove from "../../../images/shared/customizations/ath_treasure_trove.webp";
import ath_sparkling_fortune from "../../../images/shared/customizations/ath_sparkling_fortune.webp";

const customizations = [
    {
        id: "customization_ath_voodoo_head", 
        name: "Voodoo Head", 
        img: ath_voodoo_head, 
        production: {
            resource: "coins",
            time: "1d",
        },
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Little Culture Site"
    },
    {
        id: "customization_ath_sugarcane_distillery", 
        name: "Sugarcane Distillery", 
        img: ath_sugarcane_distillery, 
        production: {
            resource: "food",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Rural Farm"
    },
    {
        id: "customization_ath_pirate_den", 
        name: "Pirate Den", 
        img: ath_pirate_den, 
        production: {
            resource: "coins",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Small Home"
    },
    {
        id: "customization_ath_belltower_cottage", 
        name: "Belltower Cottage", 
        img: ath_belltower_cottage, 
        production: {
            resource: "goods",
            time: "1d",
            amount: 150
        },
        duration: "7d",
        applyTo: "Medium Home"
    },
    {
        id: "customization_ath_the_scallywags_shanty", 
        name: "The Scallywag's Shanty", 
        img: ath_the_scallywags_shanty, 
        production: {
            resource: "food",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Domestic Farm"
    },
    {
        id: "customization_ath_coconut_tree", 
        name: "Coconut Tree", 
        img: ath_coconut_tree, 
        production: {
            resource: "food",
            time: "1d",
        },
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Little Culture Site"
    },
    {
        id: "customization_ath_hammock_trees", 
        name: "Hammock Trees", 
        img: ath_hammock_trees,
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Compact Culture Site"
    },
    {
        id: "customization_ath_robber_crab", 
        name: "Robber Crab", 
        img: ath_robber_crab,
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Moderate Culture Site"
    },
    {
        id: "customization_ath_skull_home", 
        name: "Skull Home", 
        img: ath_skull_home, 
        production: {
            resource: "coins",
            time: "1d",
        },
        duration: "7d",
        applyTo: "Small Home"
    },
    {
        id: "customization_ath_tropical_fruit_farm", 
        name: "Tropical Fruit Farm", 
        img: ath_tropical_fruit_farm, 
        production: {
            resource: "research_point",
            time: "1d",
            amount: 1
        },
        duration: "7d",
        applyTo: "Rural Farm"
    },
    {
        id: "customization_ath_crows_inn", 
        name: "Crow's Inn", 
        img: ath_crows_inn,
        boost: {
            type: "food_bonus",
            amount: "5%"
        },
        duration: "7d",
        applyTo: "Domestic Farm"
    },
    {
        id: "customization_ath_jolly_roger", 
        name: "Jolly Roger", 
        img: ath_jolly_roger, 
        production: {
            resource: "goods",
            time: "1d",
            amount: 105
        },
        boost: {
            type: "culture_bonus",
            amount: "50%"
        },
        duration: "7d",
        applyTo: "Little Culture Site"
    },
    {
        id: "customization_ath_long_nine", 
        name: "Long Nine", 
        img: ath_long_nine,
        production: {
            resource: "goods",
            time: "1d",
            amount: 105
        },
        duration: "7d",
        applyTo: "Compact Culture Site"
    },
    {
        id: "customization_ath_treasure_trove", 
        name: "Treasure Trove", 
        img: ath_treasure_trove,
        boost: {
            type: "goods_bonus",
            amount: "5%"
        },
        duration: "7d",
        applyTo: "Compact Culture Site"
    },
    {
        id: "customization_ath_sparkling_fortune", 
        name: "Sparkling Fortune", 
        img: ath_sparkling_fortune,
        boost: {
            type: "coins_bonus",
            amount: "5%"
        },
        duration: "7d",
        applyTo: "Moderate Culture Site"
    },
]

export default customizations;