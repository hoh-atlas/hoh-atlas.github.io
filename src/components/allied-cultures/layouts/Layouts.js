import "./Layouts.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";

import allAlliedCultures from "../data";

const Layouts = (props) => {

    const basePath = "allied-cultures";
    const pageName = "Allied Cultures - Layouts";
    
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const layouts = getAlliedCulture().layouts;
  
    return (
      <>
        <Prologue imageSrc={"https://i.ibb.co/zn3VD69/Technology-Roman-Empire-Urban-Management.png"} alt={"Event"} maxHeight={"65px"} >
          Layouts description
        </Prologue>
        <SectionDivider />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
          
        </div>
      </>
    );
}

export default Layouts;