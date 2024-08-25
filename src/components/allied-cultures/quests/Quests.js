import "./Quests.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import OneQuest from "./OneQuest";
import OneQuestline from "./OneQuestline";

import allAlliedCultures from "../data";

const Quests = (props) => {

    const basePath = "allied-cultures";
    const pageName = "Allied Cultures - Quests";

    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }
  
      return (
        <>
            <Prologue imageSrc={"https://i.ibb.co/Yphv4st/event-hud-icon-persian-2023-299042.png"} alt={"Event"} maxHeight={"65px"} >
                Quests introduce players to the story of the allied culture and offer a variety of rewards.
            </Prologue>
            <SectionDivider />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
                {
                    getAlliedCulture().questlines?.map((oneQuestline) => (
                        <OneQuestline questline={oneQuestline} headerColor={getAlliedCulture().questlineColor} />
                    ))
                }
            </div>
        </>
      );
}

export default Quests;