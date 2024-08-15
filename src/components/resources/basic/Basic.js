import "./Basic.css";

import { leftJoinArrays } from "../../shared/utils";
import resources from "../../shared/data/resources";
import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import Icon from "../../shared/Icon";

import Food from '../../../images/resources/basic/food.webp';

const Basic = () => {

    const basicAdditionalData = [
        {id: "coins", description1: "Homes, Quests", description2: ""},
        {id: "food", description1: "Farms, Quests", description2: ""},
        {id: "research_point", description1: "Every 1 Hour, Campaign", description2: ""},
        {id: "gems", description1: "Purchase, Quests", description2: ""},
        {id: "xp_common", description1: "Campaign", description2: "Adds 100 Experience to your Hero"},
        {id: "xp_uncommon", description1: "Campaign, Hero Academy", description2: "Adds 300 Experience to your Hero"},
        {id: "xp_rare", description1: "Campaign", description2: "Adds 700 Experience to your Hero"},
        {id: "xp_epic", description1: "Campaign, Treasure Hunt", description2: "Adds 1500 Experience to your Hero"},
        {id: "xp_legendary", description1: "Campaign, Treasure Hunt", description2: "Adds 3000 Experience to your Hero"},
        {id: "xp_hero", description1: "Campaign, Treasure Hunt", description2: "Leveling Up your Heroes"},
        {id: "antimatter", description1: "Campaign, Quests", description2: "Powers the Time Portal"},
        {id: "antimatter_legendary", description1: "City Events, Fragments", description2: "Powers the Legendary Time Portal"},
        {id: "antimatter_egyptian", description1: "", description2: "Powers the Egyptian Time Portal"},
        {id: "antimatter_china", description1: "", description2: ""},
        {id: "antimatter_vikings", description1: "", description2: ""},
        {id: "antimatter_seasonpass", description1: "", description2: ""},
    ]

    const goodsExpanded = leftJoinArrays(basicAdditionalData, resources);

    const categoryPriorities = ["soft", "experiences", "antimatters"];

    const categorizedData = goodsExpanded.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    return <>
        <Prologue imageSrc={Food} alt={"Provinces"} maxHeight={"65px"}>
            These resources are crucial for your in-game progress. You need them to develop your city, unlock technologies in research, explore, evolve new heroes, and traverse through the realms of history and allied cultures.
        </Prologue>
        <SectionDivider/>
        {
            categoryPriorities.map((category) => (
                <table style={{width: '80%', marginBottom: '10px'}}>
                    <thead>
                        <tr>
                            <th colSpan={4}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Icon</th>
                            <th>Where to get</th>
                            <th>Usage</th>
                        </tr>
                        {
                            categorizedData[category].map((item) => (
                                <tr>
                                    <td style={{width: '30%'}}>{item.name}</td>
                                    <td style={{width: '10%'}}><Icon resource={resources.find((resource) => resource.id === item.id)}/></td>
                                    <td style={{width: '30%'}}>{item.description1}</td>
                                    <td style={{width: '30%'}}>{item.description2}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            ))
        }
    </>
}

export default Basic;