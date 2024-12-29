import "./GrandPrizes.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import Image from "@/src/components/image/Image";
import TextBlock from "@/src/components/textblock/TextBlock";
import { getItemIcon, displayRewards, displayDynamicDefinition } from "@/src/shared-resources/utils/utils";
import _events from "../_data/events";

import allEvents from "../data";

const GrandPrizes = (props) => {
  
    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }

    const event = getEvent();

    let componentStates;
    let grandPrizes;
    if (_events[event.codeName]) {
        componentStates = _events[event.codeName][0]['componentStates'];
        grandPrizes = componentStates[Object.keys(componentStates).find(key => componentStates[key]["@type"] === "type.googleapis.com/SeasonPassEventDTO")]['definition']['checkpoints'];
    }
    
    return (
        <>
            <Prologue imageSrc={"/events/grand-prizes/EventPassGrandPriceChest.webp"} alt={"Events"} maxHeight={"65px"} >
                The lane of Grand Prizes is the main sequence of the event. The Free Lane is readily available for all, while the Premium Lane is only available after a one-time investment.<br/>
                Progress <img src={event.payback.image} style={{ maxHeight: '14px', verticalAlign: 'bottom' }}/> is obtained by playing the event's minigame.
            </Prologue>

            <SectionDivider />

            <TextBlock>

                <H1 center={true}>Grand Prizes</H1>

                <div style={{ overflowX: 'auto', marginTop: '20px' }} className="responsive-table-container">
                    <table style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th style={{ width: '5%' }}>
                                    #
                                </th>
                                <th style={{ width: '15%' }}>
                                    Costs
                                </th>
                                <th style={{ width: '40%' }}>
                                    Free Lane
                                </th>
                                <th style={{ width: '40%' }}>
                                    Premium Lane
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <td></td>
                                <td><Image src={"/events/grand-prizes/EventPassGrandPriceChest.webp"} maxHeight={'80px'}/></td>
                                <td><Image src={"/events/grand-prizes/EventPassPremiumPriceChest.webp"} maxHeight={'80px'}/></td>
                            </tr>
                            {
                                event.grandPrizes ? (
                                    event.grandPrizes.map((oneReward) => (
                                        <tr style={{ height: '70px' }} key={oneReward.id}>
                                            <th>{oneReward.id}</th>
                                            <td>{oneReward.cost} <img src={event.payback.image} style={{ maxHeight: '24px', verticalAlign: 'bottom' }}/></td>
                                            <td>{oneReward.free.amount}x {getItemIcon(oneReward.free.resource)}</td>
                                            <td>{oneReward.premium.amount}x {getItemIcon(oneReward.premium.resource)}</td>
                                        </tr>
                                    ))
                                ) : grandPrizes ? (
                                    grandPrizes.map((checkpoint, index) => (
                                        <tr style={{ height: '70px' }} key={index+1}>
                                            <th>{index+1}</th>
                                            <td>{checkpoint.requiredProgress} <img src={event.payback.image} style={{ maxHeight: '24px', verticalAlign: 'bottom' }}/></td>
                                            <td>{checkpoint.regularRewards[0].amount ? checkpoint.regularRewards[0].amount+"x" : ""} {checkpoint.regularRewards[0].dynamicDefinitionId 
                                                                                                    ? displayDynamicDefinition(checkpoint.regularRewards[0].dynamicDefinitionId) 
                                                                                                    : getItemIcon(checkpoint.regularRewards[0].resource || checkpoint.regularRewards[0].definition)}
                                                                                                </td>
                                            <td>{checkpoint.premiumRewards[0].amount ? checkpoint.premiumRewards[0].amount+"x" : ""} {checkpoint.premiumRewards[0].dynamicDefinitionId 
                                                                                                    ? displayDynamicDefinition(checkpoint.premiumRewards[0].dynamicDefinitionId) 
                                                                                                    : getItemIcon(checkpoint.premiumRewards[0].resource || checkpoint.premiumRewards[0].definition)}
                                                                                                </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" style={{ textAlign: 'center', height: '70px' }}>
                                            No event data available.
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </TextBlock>
            
        </>
    );
  };
  
  export default GrandPrizes;