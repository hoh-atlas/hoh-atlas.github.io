import "./Checkpoints.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import Image from "@/src/components/image/Image";
import { difficulties } from "../data";
import H1 from "@/src/components/h1/H1";
import SelectBox from "@/src/components/select-box/SelectBox";
import { useState, useEffect } from "react";
import { getItemIcon, getItemData, getFromLocalStorage, displayRewards, displayDynamicDefinition } from "@/src/shared-resources/utils/utils";
import _checkpoints from "../_data/checkpoints";

const Checkpoints = (props) => {

    const heroId = props.heroId;

    const options = difficulties.map((oneDifficulty) => {
        return {value: oneDifficulty.id, label: `${oneDifficulty.id+1} - ${oneDifficulty.name}`, image: oneDifficulty.icon}
    });

    const [selectedOption, setSelectedOption] = useState(options.find(option => option.value == getFromLocalStorage("ath_difficulty")));

    useEffect(() => {
            const hashParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?') + 1));
            const selectedOptionParam = hashParams.get('difficulty');
            if (selectedOptionParam) {
                const foundOption = options.find(option => option.value == selectedOptionParam);
                if (foundOption) {
                    setSelectedOption(foundOption);
                }
            }
        }, []);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        localStorage.setItem("ath_difficulty", selectedOption.value);
        const newUrl = `/treasure-hunt#checkpoints?difficulty=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    const sortedCheckpoints = _checkpoints.sort((a, b) => {
        const getMilestoneValue = id => parseInt(id.split('_').pop(), 10);
        return getMilestoneValue(a.id) - getMilestoneValue(b.id);
    });
    
    const maxRewards = Math.max(
        ..._checkpoints.map(checkpoint => checkpoint.rewards[0]?.rewards?.length || 0)
    );

    return <>
        <Prologue imageSrc={"/treasure-hunt/checkpoints/icon_mystery_chest_gold.webp"} alt={"Checkpoints"} maxHeight={"65px"} >
            Alliance Checkpoints are the main sequence of rewards in Alliance Treasure Hunt. Together with your alliance members, you collect points for each completed encounter.
            The number of points you receive depends on your current difficulty level. The higher the difficulty, the more you contribute to the shared rewards and the farther you can progress!<br/>
            Note: You can click on the customizations to preview their details!
        </Prologue>
        <SectionDivider />
        <H1 center={true} style={{ marginBottom: '20px' }}>Checkpoints</H1>

        <SelectBox
            options={options}
            width={"50%"}
            color={"#f2f1ed"}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
        />

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", marginBottom: "15px" }}>
            <Image src={"/treasure-hunt/checkpoints/icon_mystery_chest_gold.webp"} maxHeight={'60px'}/>
        </div>
        
        <div style={{ overflowX: 'auto' }} className="responsive-table-container">
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ width: '20%' }}>
                            Requirement<br/><Image src={"/treasure-hunt/checkpoints/icon_ath_encounter.webp"} maxHeight={'28px'}/>
                        </th>
                        <th colSpan={maxRewards} style={{ width: '80%' }}>
                            Rewards<br/><Image src={"/treasure-hunt/checkpoints/icon_mystery_chest_gold.webp"} maxHeight={'28px'}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedCheckpoints.map((oneCheckpoint, checkpointIndex) => {
                            const milestone = parseInt(oneCheckpoint.id.split('_').pop(), 10);
                            const chestRewards = oneCheckpoint.rewards[0];
                            let chances = chestRewards.chances;
                            if (!chances) {
                                chances = [100];
                            }
                            const rewards = chestRewards.rewards;
                            const updatedRewards = rewards.map(reward => {
                                if (reward.id && reward.id.includes("Reward_AllAge_CollectorBuildings")) {
                                    const updatedReward = {
                                        ...reward,
                                        resource: "puzzle_piece"
                                    }
                                    delete updatedReward.rewards;
                                    delete updatedReward.id;
                                    return updatedReward;
                                } else if (reward.rewards && reward.rewards.length > 0) {
                                    const dynamicDefId = reward.rewards[0].rewards[0].dynamicDefinitionId;
                                    const updatedReward = {
                                        ...reward,
                                        dynamicDefinitionId: dynamicDefId
                                    };
                                    delete updatedReward.rewards;
                                    delete updatedReward.id;
                                    return updatedReward;
                                }
                                return reward;
                            });
                            return (
                                <>
                                    <tr key={`row-${checkpointIndex}-main`} style={{ borderTop: '2px solid #e1cda4', borderBottom: '2px dotted #e1cda4'}}>
                                        <td rowSpan={2} style={{ width: '20%'}} >
                                            {milestone}
                                        </td>
                                        {
                                            updatedRewards.map((oneReward) => (
                                                <td style={{ width: `${80/maxRewards}%` }}>
                                                    {oneReward.dynamicDefinitionId ? `` : oneReward.amount !== undefined ? `${oneReward.amount}x` : ''} {oneReward.dynamicDefinitionId 
                                                                            ? displayDynamicDefinition(oneReward.dynamicDefinitionId) 
                                                                            : getItemIcon(oneReward.resource  || oneReward.definition || oneReward.id)}
                                                </td>
                                            ))
                                        }
                                        {Array.from({ length: maxRewards - updatedRewards.length }, (_, idx) => (
                                            <td key={`empty-${idx}`}></td>
                                        ))}
                                    </tr>
                                    <tr>
                                        {
                                            chances.map((oneChance) => (
                                                <td style={{ fontSize: '11px', color: '#916a17', borderTop: 'none !important' }}>
                                                    {oneChance}%
                                                </td>
                                            ))
                                        }
                                        {Array.from({ length: maxRewards - updatedRewards.length }, (_, idx) => (
                                            <td key={`empty-${idx}`} style={{ fontSize: '11px', color: '#916a17', borderTop: 'none !important' }}></td>
                                        ))}
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default Checkpoints;