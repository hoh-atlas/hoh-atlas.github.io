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
import world_fair_2024 from "../../../images/events/intro/world_fair_2024_window.webp";

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
                with quests offering a new gameplay in your city and a truckload of resources like coins, goods,
                Victory Tickets and special customizations offering valuable benefits for your capital city buildings!

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
                    <>
                        <TextBlock>
                            The {event.name} features the merge mechanic, where the objective is to merge items on the board to level them up and fulfill orders on the left hand-side. After tapping the event banner, you will visit the main event window:
                        </TextBlock>

                        <Image src={world_fair_2024} maxHeight={'350px'} centered={true} spacing={true} roundedCorners={true}/>

                        <TextBlock>
                            Use {event.currency.name} <Icon resource={event.currency.image}/> to spawn pieces on the board: {event.mergeEventData.items[0].name}, {event.mergeEventData.items[1].name} and {event.mergeEventData.items[2].name}.
                            Each piece can be upgraded up to level 5 by merging two identical ones on the board. With a bit of luck, you may also receive a higher-level piece directly from the spawning process. 
                            Be aware that the respective cups may also generate pieces from other cups with a small chance, giving an element of randomness to the mechanic. Find all the available pieces in the table below:
                        </TextBlock>

                        <div style={{ overflowX: 'auto', marginTop: '20px', marginBottom: '20px' }}>
                            <table>
                                <tbody>
                                    {
                                        event.mergeEventData.items.map((onePiece) => (
                                            <tr>
                                                <td style={{ width: '40%' }}>{onePiece.name}</td>
                                                {
                                                    onePiece.levelsImages.map((oneLevelImage) => (
                                                        <td style={{ width: `${60/onePiece.levelsImages.length}%` }}><img src={oneLevelImage} style={{ height: '50px' }}/></td>
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <TextBlock>
                            Each task you complete gives you a predefined reward, {event.payback.name} <Icon resource={event.payback.image}/> and a chance to win the current Daily Special. To view all Daily Specials during the event,
                            visit the <b>Daily Specials</b> tab at the top of this page. If you don't win the Daily Special with a particular task, you will make progress toward the pity mechanic, 
                            which guarantees a 100% chance of receiving the Daily Special once it is full. {/*Below, you can find a list of all available tasks during this event.*/}
                        </TextBlock>                        
                    </>
                )
            }
        </>
    );
  };
  
  export default Intro;