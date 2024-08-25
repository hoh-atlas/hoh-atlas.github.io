import "./Strategies.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";

import allAlliedCultures from "../data";

const Strategies = (props) => {

    const basePath = "allied-cultures";
    const pageName = "Allied Cultures - Strategies";
  
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const strategies = getAlliedCulture().strategies;
  
    return (
      <>
        <Prologue imageSrc={"https://i.ibb.co/j3g6mfB/icon-unitstat-movementspeed.png"} alt={"Event"} maxHeight={"65px"} >
          Strategies description
        </Prologue>
        <SectionDivider />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
          
        </div>
      </>
    );
}

export default Strategies;