import "./Intro.css";

import { useState, useEffect } from "react";

import SelectBox from "../../shared/SelectBox";
import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import H1 from "../../shared/H1";
import Image from "../../shared/Image";
import TextBlock from "../../shared/TextBlock";
import Icon from "../../shared/Icon";
import { getItem } from "../../shared/utils";

import allAlliedCultures from "../data";
import resources from "../../shared/data/resources";

import events_intro from "../../../images/allied-cultures/intro/icon_feature_eventcities.webp";
import egypt_city from "../../../images/allied-cultures/intro/egypt_city.webp";
import irrigation_3 from "../../../images/shared/resources/irrigation_3.webp";
import china_city from "../../../images/allied-cultures/intro/china_city.webp";
import china_bridge from "../../../images/allied-cultures/intro/china_bridge.webp";
import egypt_bridge from "../../../images/allied-cultures/intro/egypt_bridge.webp";

const Intro = (props) => {

    const basePath = "allied-cultures";
    const pageName = "Allied Cultures";
  
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const alliedCulture = getAlliedCulture();

    const egyptCultures = ["egypt_cheops_pyramid", "egypt_great_sphinx"];
    const chinaCultures = ["china_terracotta_army", "china_great_wall", "china_forbidden_city"];
  
    return (
        <>
            <Prologue imageSrc={events_intro} alt={"Allied Cultures"} maxHeight={"65px"} >
                Allied Cultures are weekly events that unlock a special playfield, allowing players to build a city representing an allied culture. 
                Each event features a questline that provides an immersive introduction to the culture, along with exclusive buildings to construct, resources to produce, and valuable rewards to earn.<br/>
                Every Allied Culture event is centered around a distinct World Wonder. Upgrading this World Wonder enables players to earn special rewards and advance in Leagues, 
                where they compete with thousands of players worldwide.
            </Prologue>

            <SectionDivider />

            <H1 center={true}>{alliedCulture.name}</H1>

            <Image src={alliedCulture?.image} alt="" spacing={true} maxHeight={'150px'}/>

            {
                egyptCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        {alliedCulture.name} is one of the weekly events in the theme of Egypt culture. The World Wonder is the {alliedCulture.wonder.name} - a majestic structure located next to the allied city. 
                        It contains 50 levels, each offering a unique reward including a special bonus for collecting {alliedCulture.wonder.boostedResources.map((resource, index) => (
                            <>
                                {index > 0 && index === alliedCulture.wonder.boostedResources.length - 1 ? ' and ' : index > 0 ? ', ' : ''}
                                {resource.name} {getItem(resource.id)}
                            </>
                        ))}
                        &nbsp;that helps you to progress in the Allied Culture faster.

                        <Image src={egypt_city} alt="" roundedCorners={true} spacing={true} maxHeight={'300px'}/>

                        The core buildings include Houses (Small, Medium and Luxurious) that provide Egypt Workers {getItem("egypt_worker")} and
                        Deben {getItem("deben")}. Production buildings consist of the Papyrus Field, which produces Papyrus {getItem("papyrus")} and
                        the Gold Mine, which yields Gold Ore {getItem("gold_ore")}. These resources are essential for creating the final event products: 
                        Papyrus Scrolls {getItem("papyrus_scroll")} and Ankhs {getItem("ankh")}, 
                        which are produced in the Papyrus Press and Goldsmith buildings, respectively. Starting from level 4, these production buildings can also create 
                        Ceremonial Dresses {getItem("ceremonial_dress")} and Golden Masks {getItem("golden_mask")},
                        necessary for upgrading the Cheops Pyramid from level 21 onward.

                        <Image src={irrigation_3} alt="" spacing={true} maxHeight={'100px'}/>
                        
                        An important part of Egypt Culture is the irrigation system - a similar to the culture you know from your capital city. You can find a range of irrigation buildings in the Buildings Menu.
                        Place these buildings next to your production buildings and make their output increase permanently!

                        <Image src={egypt_bridge} alt="" roundedCorners={true} spacing={true} maxHeight={'200px'}/>

                        Another vital water source is the Nile River, which flows through the center of your Egyptian city, providing free irrigation. To construct buildings on the opposite side of the Nile, you'll need to build a bridge. 
                        This is crucial not only for completing the questline but also for efficiently producing resources at higher levels of your World Wonder. The construction process consists of 3 phases, each requiring Deben and some time.

                        <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
                            <table style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>Nile Bridge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Level</th>
                                        <th>Requirements</th>
                                        <th>Time</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>5000 {getItem("deben")}</td>
                                        <td>30m</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>30000 {getItem("deben")}</td>
                                        <td>2h</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>60000 {getItem("deben")}</td>
                                        <td>6h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        Visit the <b>Quests</b> tab to see all the quests that await you, the <b>Buildings</b> tab to find an overview of all buildings and their productions, and the <b>World Wonder</b> tab to find all the requirements, rewards and
                        bonuses of the {alliedCulture.wonder.name}!
                    </TextBlock>
                ) : chinaCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        {alliedCulture.name} is one of the weekly events in the theme of China culture. The World Wonder is the {alliedCulture.wonder.name} - a majestic structure located next to the allied city. 
                        It contains 50 levels, each offering a unique reward including a special bonus for collecting {alliedCulture.wonder.boostedResources.map((resource, index) => (
                            <>
                                {index > 0 && index === alliedCulture.wonder.boostedResources.length - 1 ? ' and ' : index > 0 ? ', ' : ''}
                                {resource.name} {getItem(resource.id)}
                            </>
                        ))}
                        &nbsp;that helps you to progress in the Allied Culture faster.

                        <Image src={china_city} alt="" roundedCorners={true} spacing={true} maxHeight={'300px'}/>

                        The core buildings include Houses (Small, Medium and Luxurious) that provide China Workers {getItem("china_worker")} and
                        Wu Zhu {getItem("wu_zhu")}. Production buildings consist of the Rice Farm, which produces Rice {getItem("rice")} and
                        2 special buildings that are obtainable only by unlocking the expansions in the allied city - Moth Glade and Kaolin Quarry, producing Moth Cocoon {getItem("moth_cocoon")} and
                        Kaolin {getItem("kaolin")}, respectively. Secondary production buildings include Thread Processor, which produces Threads {getItem("silk_threads")} and
                        Clay Processor, which produces Clay {getItem("clay")}. These resources are essential for creating the final event products:
                        Silk {getItem("silk")} and Porcelain {getItem("porcelain")}, which are produced in the Silk Workshop and Porcelain Workshop,
                        respectively. The production chain leading to Porcelain is unlocked later in the research of the allied city and is required to upgrade the World Wonder from level 21 onward.

                        <Image src={china_bridge} alt="" roundedCorners={true} spacing={true} maxHeight={'200px'}/>

                        China does not contain a cultural system. Instead, the challenge lies in managing space and solving a puzzle-like mechanic. This is due to the large building shapes and the relatively small area available to fit them into. To expand your city, you need to
                        repair 2 bridges on the way. Each has 3 stages of construction:
                        
                        <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
                            <table style={{ marginTop: '20px', marginBottom: '20px' }}>
                                <thead>
                                    <tr>
                                        <th colSpan={3}>Southern Bridge</th>
                                        <th colSpan={3}>Eastern Bridge</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Level</th>
                                        <th>Requirements</th>
                                        <th>Time</th>
                                        <th>Level</th>
                                        <th>Requirements</th>
                                        <th>Time</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>1500 {getItem("wu_zhu")}</td>
                                        <td>1m</td>
                                        <td>1</td>
                                        <td>5000 {getItem("wu_zhu")}</td>
                                        <td>30m</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2500 {getItem("wu_zhu")}</td>
                                        <td>10m</td>
                                        <td>2</td>
                                        <td>15000 {getItem("wu_zhu")}</td>
                                        <td>1h</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>5000 {getItem("wu_zhu")}</td>
                                        <td>1h</td>
                                        <td>3</td>
                                        <td>30000 {getItem("wu_zhu")}</td>
                                        <td>2h</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        Visit the <b>Quests</b> tab to see all the quests that await you, the <b>Buildings</b> tab to find an overview of all buildings and their productions, and the <b>World Wonder</b> tab to find all the requirements, rewards and
                        bonuses of the {alliedCulture.wonder.name}!
                    </TextBlock>
                ) : null
            }

            <H1 center={true}>Allied Cultures in general</H1>

            <Image src={events_intro} alt="" spacing={true} maxHeight={'150px'}/>

            <TextBlock>
                Allied Cultures are weekly events where you build a temporary city, accessible via a banner in the bottom-left corner of your screen. These events start on Thursday at 2 PM (CET) and end the following Tuesday at 2 PM (CET).
                After the event is over, next time you start developing your city from scratch and have the possibility to collect all the prizes again!<br/><br/>
                Currently, the game features two Allied Cities: Egypt and China. Each city hosts three distinct events, each centered around different World Wonders. Depending on the event and the featured World Wonder, 
                a unique resource from the Allied City will be boosted, offering varied strategies for city development each time.<br/><br/>
                The currently known sequence of Allied Cultures is as follows: 'The Trade Exhibition' (featuring Egypt and the Abu Simbel wonder), 'Guardian of Heritage' (featuring China and the Great Wall wonder), 
                and 'The Grand Celebration' (featuring Egypt and the Cheops Pyramid wonder). Explore all available Allied Cultures using the Select Box at the top of this page.
            </TextBlock>
        </>
    );
  };
  
  export default Intro;