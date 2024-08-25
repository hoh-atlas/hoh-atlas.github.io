import "./Intro.css";

import { useState, useEffect } from "react";

import SelectBox from "../../shared/SelectBox";
import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import H1 from "../../shared/H1";

import allAlliedCultures from "../data";

import events_intro from "../../../images/allied-cultures/intro/icon_feature_eventcities.webp";

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
            Allied Cultures are weekly events that bring additional questlines, new cultures to discover, buildings to construct, and resources to produce. Players build famous World Wonders and compete with
            other players in leagues.
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
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
            <img src={alliedCulture?.image} style={{ maxWidth: "300px" }} />
            <br/>
            This page is under the construction.
            </div>
        </>
    );
  };
  
  export default Intro;