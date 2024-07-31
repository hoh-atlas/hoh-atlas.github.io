import "./Strategies.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";

import allEvents from "../data";

const Strategies = (props) => {

    const basePath = "events";
    const pageName = "Events - Strategies";
  
    const options = allEvents.map((oneEvent) => {
        return {value: oneEvent.id, label: `${oneEvent.name}`, image: oneEvent.image}
    });

    const { selectedOption, handleOptionChange } = useOptionURL(options, "event");
  
    return (
      <>
        <Prologue imageSrc={"https://i.ibb.co/j3g6mfB/icon-unitstat-movementspeed.png"} alt={"Event"} maxHeight={"65px"} >
          Strategies description
        </Prologue>
        <SectionDivider />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
          <img src={"https://i.ibb.co/GW4SLwD/great-sphinx.png"} style={{ maxWidth: "300px" }} />
        </div>
      </>
    );
}

export default Strategies;