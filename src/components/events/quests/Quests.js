import "./Quests.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import OneQuest from "./OneQuest";
import OneQuestline from "./OneQuestline";

import allEvents from "../data";

const Quests = (props) => {

    const basePath = "events";
    const pageName = "Events - Quests";

    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }
  
      return (
        <>
            <Prologue imageSrc={"https://i.ibb.co/Yphv4st/event-hud-icon-persian-2023-299042.png"} alt={"Event"} maxHeight={"65px"} >
                Quests description
            </Prologue>
            <SectionDivider />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
                {
                    getEvent().questlines?.map((oneQuestline) => (
                        <OneQuestline questline={oneQuestline} headerColor={"#329CB3"} />
                    ))
                }
            </div>
        </>
      );
}

export default Quests;