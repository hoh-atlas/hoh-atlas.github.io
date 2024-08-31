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

import allAlliedCultures from "../data";
import resources from "../../shared/data/resources";

import events_intro from "../../../images/allied-cultures/intro/icon_feature_eventcities.webp";
import egypt_city from "../../../images/allied-cultures/intro/egypt_city.webp";
import irrigation_3 from "../../../images/shared/resources/irrigation_3.webp";

const Intro = (props) => {

    const basePath = "allied-cultures";
    const pageName = "Allied Cultures";
  
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const alliedCulture = getAlliedCulture();
  
    return (
        <>
            <Prologue imageSrc={events_intro} alt={"Allied Cultures"} maxHeight={"65px"} >
                Allied Cultures are weekly events that unlock a special playfield, allowing players to build a city representing an allied culture. 
                Each event features a questline that provides an immersive introduction to the culture, along with exclusive buildings to construct, resources to produce, and valuable rewards to earn.<br/>
                Every Allied Culture event is centered around a distinct World Wonder. Upgrading this World Wonder enables players to earn special rewards and advance in Leagues, 
                where they compete with thousands of players worldwide.
            </Prologue>
            {/*<SelectBox
            options={options}
            width={"50%"}
            color={"#f2f1ed"}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
            />*/}
            <SectionDivider />
            <H1 center={true}>{alliedCulture.name}</H1>
            <Image src={alliedCulture?.image} alt="" spacing={true} maxHeight={'150px'}/>
            {
                alliedCulture.id === "egypt_cheops_pyramid" ? (
                    <TextBlock>
                        {alliedCulture.name} is one of the weekly events in the theme of Egypt culture. The World Wonder is the Cheops Pyramid - a majestic structure located on the north-east side of the allied city. 
                        It contains 50 levels, each offering a unique reward including a special bonus for collecting Deben <Icon resource={resources.find((resource) => resource.id === "deben")}/> that 
                        helps you to progress in the Allied Culture faster.

                        <Image src={egypt_city} alt="" roundedCorners={true} spacing={true} maxHeight={'300px'}/>

                        The core buildings include Houses (Small and Medium) that provide Egypt Workers <Icon resource={resources.find((resource) => resource.id === "egypt_worker")}/> and
                        Deben <Icon resource={resources.find((resource) => resource.id === "deben")}/>. Production buildings consist of the Papyrus Field, which produces Papyrus <Icon resource={resources.find((resource) => resource.id === "papyrus")}/> and
                        the Gold Mine, which yields Gold Ore <Icon resource={resources.find((resource) => resource.id === "gold_ore")}/>. These resources are essential for creating the final event products: 
                        Papyrus Scrolls <Icon resource={resources.find((resource) => resource.id === "papyrus_scroll")}/> and Ankhs <Icon resource={resources.find((resource) => resource.id === "ankh")}/>, 
                        which are produced in the Papyrus Press and Goldsmith buildings, respectively. Starting from level 4, these production buildings can also create 
                        Ceremonial Dresses <Icon resource={resources.find((resource) => resource.id === "ceremonial_dress")}/> and Golden Masks <Icon resource={resources.find((resource) => resource.id === "golden_mask")}/>,
                        necessary for upgrading the Cheops Pyramid from level 20 onward.

                        <Image src={irrigation_3} alt="" spacing={true} maxHeight={'100px'}/>
                        
                        An important part of Egypt Culture is the irrigation system - a similar to the culture you know from your capital city. You can find a range of irrigation buildings in the Buildings Menu.
                        Place these buildings next to your production buildings and make their output increase permanently!<br/>
                        Another vital water source is the Nile River, which flows through the center of your Egyptian city, providing free irrigation. To construct buildings on the opposite side of the Nile, you'll need to build a bridge. 
                        This is crucial not only for completing the questline but also for efficiently producing resources at higher levels of your World Wonder.<br/><br/>
                        Visit the <b>Quests</b> tab to see all the quests that await you, the <b>Buildings</b> tab to find an overview of all buildings and their productions, and the <b>World Wonder</b> tab to find all the requirements, rewards and
                        bonuses of the Cheops Pyramid!
                    </TextBlock>
                ) : alliedCulture.id === "china_great_wall" ? (
                    <TextBlock>
                        
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