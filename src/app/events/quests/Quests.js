import "./Quests.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import H1 from "@/src/components/h1/H1";
import { getItemIcon, displayRewards } from "@/src/shared-resources/utils/utils";
import OneQuestline from "@/src/components/quests/OneQuestline";
import { useState } from "react";
import SelectBox from "@/src/components/select-box/SelectBox";
import leaderboardsEvents from "../_data/leaderboardsEvents";
import LeaderboardsMilestones from "@/src/components/leaderboards-milestones/LeaderboardsMilestones";
import LeaderboardsRankings from "@/src/components/leaderboards-rankings/LeaderboardsRankings";

import allEvents from "../data";

const Quests = (props) => {
  
    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id == props.selectedEvent);
    }

    const event = getEvent();

    const options = event.leaderboards.map((oneLeaderboard) => {
        return {value: oneLeaderboard.id, label: `Leaderboard ${oneLeaderboard.id}: ${oneLeaderboard.startDate} - ${oneLeaderboard.endDate}`, image: event.questsIcon};
    });

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const leaderboardEvent = event.leaderboards.find((oneLeaderboard) => oneLeaderboard.id === selectedOption.value);
    const _leaderboardEvent = leaderboardsEvents.find(oneLeaderboardEvent => oneLeaderboardEvent.id === leaderboardEvent.codeName);

    const milestonesComponent = _leaderboardEvent.components.find(component => component["@type"] === "type.googleapis.com/RewardLaneEventComponentDTO");
    const rewards = Object.fromEntries(
        Object.entries(milestonesComponent.rewards)
            .sort(([keyA], [keyB]) => parseInt(keyA) - parseInt(keyB))
    );

    const rankingComponent = _leaderboardEvent.components.find(component => component["@type"] === "type.googleapis.com/LeaderboardPlayerResourceEventComponentDTO");
    const rankingRewards = rankingComponent.rankingRewards;

    const extractRewards = (rewardsArray) => {
        const extractedRewards = [];
        rewardsArray.forEach((reward) => {
            if (reward.resource) {
                extractedRewards.push({ type: "resource", value: reward.resource });
            } else if (reward.dynamicDefinitionId) {
                extractedRewards.push({ type: "dynamicDefinitionId", value: reward.dynamicDefinitionId });
            } else if (reward.selectionKit) {
                extractedRewards.push({ type: "selectionKit", value: reward.selectionKit});
            } else if (reward.rewards) {
                extractedRewards.push(...extractRewards(reward.rewards));
            }
        });
        return extractedRewards;
    };
  
    return (
        <>
            <Prologue imageSrc={event.questsIcon} alt={"Events"} maxHeight={"65px"} >            
                Quests introduce players to the story of the event and offer a variety of rewards. They consist of rush quests and daily quests that appear at a pace of 4 per event day.
            </Prologue>

            <SectionDivider />

            {
                event.questlines !== undefined ? (
                    <div className="questlines-container">
                        {
                            event.questlines?.map((oneQuestline) => (
                                <OneQuestline questline={oneQuestline} headerColor={event.questlineColor} />
                            ))
                        }
                    </div>
                ) : event.leaderboards !== undefined ? (
                    <>
                        <H1 center={true}>Leaderboards</H1><br/>

                        <SelectBox
                            options={options}
                            width={"50%"}
                            color={"#f2f1ed"}
                            selectedOption={selectedOption}
                            onOptionChange={handleOptionChange}
                        />

                        <LeaderboardsMilestones data={rewards} />

                        <LeaderboardsRankings data={rankingRewards} />
                    </>
                ) : (
                    <>
                        No data found.
                    </>
                )
            }
        </>
    );
  };
  
  export default Quests;