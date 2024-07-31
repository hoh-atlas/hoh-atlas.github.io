import "./Layouts.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";

import allEvents from "../data";

const Layouts = (props) => {

    const basePath = "events";
    const pageName = "Events - Layouts";
  
    const options = allEvents.map((oneEvent) => {
        return {value: oneEvent.id, label: `${oneEvent.name}`, image: oneEvent.image}
    });

    const { selectedOption, handleOptionChange } = useOptionURL(options, "event");
  
    return (
      <>
        <Prologue imageSrc={"https://i.ibb.co/zn3VD69/Technology-Roman-Empire-Urban-Management.png"} alt={"Event"} maxHeight={"65px"} >
          Layouts description
        </Prologue>
        <SectionDivider />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
          <img src={"https://i.ibb.co/GW4SLwD/great-sphinx.png"} style={{ maxWidth: "300px" }} />
        </div>
      </>
    );
}

export default Layouts;