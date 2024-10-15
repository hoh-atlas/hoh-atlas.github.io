import "./Quests.css";

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
import OneQuestline from "../../allied-cultures/quests/OneQuestline";

import allEvents from "../data";
import sectionsDefinition from "../sectionsDefinition";

import quests_icon from "../../../images/events/quests/quests_icon.webp";

const Quests = (props) => {

    const basePath = "events";
    const pageName = "Events";
  
    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }

    const event = getEvent();
  
    return (
        <>
            <Prologue imageSrc={quests_icon} alt={"Events"} maxHeight={"65px"} >            
                Quests introduce players to the story of the event and offer a variety of rewards. They consist of rush quests and daily quests that appear at a pace of 4 per event day.
            </Prologue>

            <SectionDivider />

            <div className="questlines-container">
                {
                    event.questlines?.map((oneQuestline) => (
                        <OneQuestline questline={oneQuestline} headerColor={event.questlineColor} />
                    ))
                }
            </div>
        </>
    );
  };
  
  export default Quests;