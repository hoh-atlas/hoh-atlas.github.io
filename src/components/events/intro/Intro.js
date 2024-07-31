import "./Intro.css";

import { useState, useEffect } from "react";

import SelectBox from "../../shared/SelectBox";
import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";

import allEvents from "../data";

const Intro = () => {

    const basePath = "events";
    const pageName = "Events";
  
    const options = allEvents.map((oneEvent) => {
        return {value: oneEvent.id, label: `${oneEvent.name}`, image: oneEvent.image}
    });

    const { selectedOption, handleOptionChange } = useOptionURL(options, "event");
  
    return (
        <>
            <Prologue imageSrc={"https://i.ibb.co/nRvy33n/event-widget-backer-time-Paradox-2021.png"} alt={"Event"} maxHeight={"65px"} >
            Events happen throughout the year to celebrate special occasions, and
            in game players will get additional questlines, new resources to
            collect and try to gain a new building or upgrades. Events that last
            21 days or more will have 28 quests available on day 1 then 4 more
            quests will become available for each of the following days.
            </Prologue>
            {/*<SelectBox
            options={options}
            width={"50%"}
            color={"#f2f1ed"}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
            />*/}
            <SectionDivider />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
            <img src={selectedOption?.image} style={{ maxWidth: "300px" }} />
            </div>
        </>
    );
  };
  
  export default Intro;