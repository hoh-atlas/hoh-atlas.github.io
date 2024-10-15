import "./Intro.css";

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
import Card from "../../shared/Card";
import CardContainer from "../../shared/CardContainer";

import allEvents from "../data";

import icon_event_world_fair_tokens from "../../../images/events/intro/icon_event_world_fair_tokens.webp";
import EventBackgroundWorldFair from "../../../images/events/intro/EventBackgroundWorldFair.webp";

const Intro = (props) => {

    const basePath = "events";
    const pageName = "Events";
  
    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }

    const event = getEvent();
  
    return (
        <>
            <Prologue imageSrc={getEvent().image} alt={"Events"} maxHeight={"65px"} >
                Throughout the year, special occasions are marked by events within the game, offering players additional questlines.
                By collecting new event resources, players can trade them for rewards, including antimatters, coins, food, customizations, and more.
                Events last for several weeks and offer multiple questlines that challenge players in various features in the game.
            </Prologue>

            <SectionDivider />

            <H1 center={true}>{event.name}</H1>

            <Image src={event.headerImage} maxHeight={'90px'} centered={true} spacing={true}/>

            <TextBlock>

                {event.name} is a special event running for several weeks! To participate, you need to unlock the Village technology at the start of the Bronze Age. {event.questgiverName} will be arriving 
                with quests offering a new gameplay in your city and a truckload of resources like coins {getItem("coins")}, goods {getItem("goods")},
                Victory Tickets {getItem("victory_ticket")} and special customizations offering valuable benefits for your capital city buildings!

            </TextBlock>

            <CardContainer 
                card1={
                    <Card title={"<b>Schedule on Live Servers</b>"} centered backgroundImage={EventBackgroundWorldFair} blurred={false} footer={event.startDate + " - " + event.endDate}></Card>
                }
                style={{ marginTop: '20px', marginBottom: '20px' }}
            >
            </CardContainer>

            <TextBlock>

                <Icon resource={event.currency.image}/> <b>{event.currency.name}</b> are collected by completing event quests and by logging in daily. You can purchase more of them with Gems. They are used to spawn
                inventions on the board in the main event window.<br/><br/>

                <Icon resource={event.payback.image}/> <b>{event.payback.name}</b> is collected by fulfulling orders on the left-hand side. Merge pieces on the board to create the inventions required in the tasks. {event.payback.name} defines
                your progress on the Grand Prizes lane.

            </TextBlock>

            <H1 center={true}>Mechanics</H1>

            {
                "merge_event" === event.type && (
                    <TextBlock>
                        More about this will be added soon.
                    </TextBlock>
                )
            }
        </>
    );
  };
  
  export default Intro;