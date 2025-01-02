import "./Encounters.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import Image from "@/src/components/image/Image";
import { difficulties } from "../data";
import H1 from "@/src/components/h1/H1";
import SelectBox from "@/src/components/select-box/SelectBox";
import { useState, useEffect } from "react";
import { getItemIcon, getItemData, getFromLocalStorage, displayRewards, displayDynamicDefinition } from "@/src/shared-resources/utils/utils";
import athRewards from "../_data/athRewards";

const Encounters = (props) => {

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
        const newUrl = `/treasure-hunt#encounters?difficulty=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    let sortedAthRewards = athRewards
        .filter(reward => {
            const difficulty = getFromLocalStorage("ath_difficulty");
            return reward.id.startsWith(`reward.TreasureHunt_${difficulty}_`) &&
                /^\d+$/.test(reward.id.split('_').pop());
        })
        .sort((a, b) => {
            const [aPart, bPart] = [a.id.split('_'), b.id.split('_')];
            const [aSecond, aThird] = [parseInt(aPart[2]), parseInt(aPart[3])];
            const [bSecond, bThird] = [parseInt(bPart[2]), parseInt(bPart[3])];
            
            if (aSecond === bSecond) {
                return aThird - bThird;
            } else {
                return aSecond - bSecond;
            }
    });
    sortedAthRewards = sortedAthRewards.filter(reward => reward.id !== "reward.TreasureHunt_0_3_20");
    sortedAthRewards.push(athRewards.find(reward => reward.id === "reward.TreasureHunt_0_3_20_a"));
    
    const maxRewards = Math.max(
        ...sortedAthRewards.map(reward => reward.rewards[0]?.rewards?.length || 0)
    );

    return <>
        <Prologue imageSrc={"/treasure-hunt/checkpoints/icon_ath_encounter.webp"} alt={"Checkpoints"} maxHeight={"65px"} >
            Encounters
        </Prologue>
        <SectionDivider />
        <H1 center={true} style={{ marginBottom: '20px' }}>Encounters</H1>

        <SelectBox
            options={options}
            width={"50%"}
            color={"#f2f1ed"}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
        />

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", marginBottom: "15px" }}>
            <Image src={"/treasure-hunt/checkpoints/icon_ath_encounter.webp"} maxHeight={'100px'}/>
        </div>
        
        <div style={{ overflowX: 'auto' }} className="responsive-table-container">
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th style={{ width: '20%' }}>Encounter</th>
                        <th colSpan={maxRewards} style={{ width: '80%' }}>Rewards</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedAthRewards.map((oneReward, index) => {
                            const rewards = oneReward.rewards[0].rewards;
                            let chances = oneReward.rewards[0].chances;
                            if (!chances) {
                                chances = [100];
                            }
                            console.log(oneReward)
                            return (
                                <>
                                    <tr>
                                        <td rowSpan={2}>{index+1}</td>
                                        {
                                            rewards.map((reward) => (
                                                <td>{reward.amount}x {getItemIcon(reward.resource || reward.definition || reward.id)}</td>
                                            ))
                                        }
                                        {Array.from({ length: maxRewards - rewards.length }, (_, idx) => (
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
                                        {Array.from({ length: maxRewards - chances.length }, (_, idx) => (
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

export default Encounters;