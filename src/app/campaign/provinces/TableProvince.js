import "../../../components/table/Table.css";

import React from "react";

import resources from "@/src/shared-resources/data/resources";
import { getItemIcon } from "../../../shared-resources/utils/utils";

const TableProvince = (props) => {

    const province = props.province;
    const encountersRewards = props.encounters.map(oneEncounter => oneEncounter['byDifficulty']['difficulty.Normal']['unlockFinish']['rewards']);
    let encounters = encountersRewards.map(encounter => {
        let firstTimeRewards = [];
        let rewards = [];
        encounter.map(reward => {
            if (reward["@type"] === "type.googleapis.com/ResourceRewardDTO") {
                let obj = {};
                obj['resource'] = reward['resource'];
                obj['amount'] = reward['amount'];
                firstTimeRewards.push(obj);
            } else if (reward["@type"] === "type.googleapis.com/IncreaseExpansionRightRewardDTO") {
                let obj = {};
                obj['resource'] = reward['city'];
                obj['amount'] = reward['regular'];
                firstTimeRewards.push(obj);
            } else if (reward["@type"] === "type.googleapis.com/MysteryChestRewardDTO") {
                reward.rewards.map((mysteryReward, index) => {
                    let obj = {};
                    obj['resource'] = mysteryReward['resource'];
                    obj['amount'] = mysteryReward['amount'];
                    obj['percentage'] = reward.chances[index];
                    rewards.push(obj);
                })
            }
        })
        return {'firstTimeRewards': firstTimeRewards, 'rewards': rewards};
    })
    encounters.map((oneEncounter, index) => {
        if (props.encounters[index].bannerResource !== undefined) {
            oneEncounter['special'] = true;
        }
        return oneEncounter;
    })

    const maxResourceColumns = Math.max(...encounters.map(encounter => encounter.rewards.length));

    return (
        <div style={{ overflowX: 'auto' }} className="responsive-table-container">
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ width: '25%' }}>Encounter</th>
                        <th colSpan={maxResourceColumns}>Rewards</th>
                        <th style={{ width: '25%' }}>First Victory Bonus</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        encounters.map((oneEncounter, index) => (
                            <React.Fragment key={index}>
                                <tr style={{ borderTop: '2px solid #e1cda4', borderBottom: '2px dotted #e1cda4'}}>
                                    <td rowSpan={2}>
                                        <div style={{backgroundImage: `url(${oneEncounter.special ? "/campaign/provinces/common_map_encounter_xp.webp" : "/campaign/provinces/common_map_encounter.webp"})`, width: '30px', height: '30px', display: 'flex', justifyContent: 'center', margin: '0px auto', color: 'white', fontWeight: 'bold', textShadow: 'rgb(0,0,0) 1px 1px 1px', zIndex: '2', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative'}}>
                                            <p style={{marginTop: '3px', marginRight: `${oneEncounter.special ? '8px' : '10px'}`, alignSelf: 'center', fontSize: '13px'}}>
                                                {index+1}
                                            </p>
                                        </div>
                                    </td>
                                    {
                                        oneEncounter.rewards.map((oneReward) => (
                                            <td style={{ width: ''+(50/maxResourceColumns)+'%' }}>{oneReward.amount} {getItemIcon(oneReward.resource)}</td>
                                        ))
                                    }
                                    {
                                        Array.from({ length: maxResourceColumns-oneEncounter.rewards.length }).map((_, index) => (
                                            <td style={{ width: ''+(50/maxResourceColumns)+'%' }}></td>
                                        ))
                                    }
                                    <td rowSpan={2}>
                                        {
                                            oneEncounter.firstTimeRewards.map((reward) => <div style={{ display: 'inline-flex', marginRight: '5px' }}>{reward.amount}&nbsp;{getItemIcon(reward.resource)}</div>)
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    {
                                        oneEncounter.rewards.map((oneReward) => (
                                            <td style={{ fontSize: '11px', color: '#916a17', borderTop: 'none !important' }}>{oneReward.percentage}%</td>
                                        ))
                                    }
                                    {
                                        Array.from({ length: maxResourceColumns-oneEncounter.rewards.length }).map((_, index) => (
                                            <td style={{ fontSize: '11px', color: '#916a17', borderTop: 'none !important' }}></td>
                                        ))
                                    }
                                </tr>
                            </React.Fragment>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );    
}

export default TableProvince;
