import "./Customizations.css";

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
import { customizations } from "../../shared/data/customizations";
import CustomizationObject from "../../shared/CustomizationObject";

import allEvents from "../data";

import icon_selection_kit_customizations_generic from "../../../images/events/customizations/icon_selection_kit_customizations_generic.webp";

const Customizations = (props) => {

    const basePath = "events";
    const pageName = "Events";
  
    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }

    const event = getEvent();

    var eventCustomizations;

    if (props.customizationId) {
        eventCustomizations = customizations.filter((customization) => customization.id === props.customizationId);
    } else {
        eventCustomizations = customizations.filter((customization) => customization.id.includes(event.id));
    }

    return (
        <>
            <Prologue imageSrc={icon_selection_kit_customizations_generic} alt={"Events"} maxHeight={"65px"} >
                This is the list of all new customizations introduced during this event.
            </Prologue>

            <SectionDivider />

            <H1 center={true}>Customizations</H1>

            {eventCustomizations.map((oneCustomization) => (
                <CustomizationObject customization={oneCustomization} />
            ))}
        </>
    );
  };
  
  export default Customizations;