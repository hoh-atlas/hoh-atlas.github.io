import "./DailySpecials.css";

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
import Calendar from "./Calendar";
import DailySpecialWrapper from "./DailySpecialWrapper";

import allEvents from "../data";

import icon_event_building_progression_info from "../../../images/events/daily-specials/icon_event_building_progression_info.webp";
import calendar from "../../../images/events/daily-specials/calendar.webp";

const DailySpecials = (props) => {

    const basePath = "events";
    const pageName = "Events";
  
    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }

    const event = getEvent();
    
    return (
        <>
            <Prologue imageSrc={calendar} alt={"Events"} maxHeight={"65px"} >
                This is the calendar of prizes that appear as Daily Specials during the event. You can look ahead to see which prizes are awaiting you and save your Event Currency for the particular days.
            </Prologue>

            <SectionDivider />

            <H1 center={true}>Calendar</H1>

            <Calendar eventId={event.id}/>

            {
                event.dailySpecials.map((oneDailySpecial, index) => (
                    <DailySpecialWrapper resource={oneDailySpecial.resource} amount={oneDailySpecial.amount} day={index + 1}/>
                ))
            }
        </>
    );
  };
  
  export default DailySpecials;