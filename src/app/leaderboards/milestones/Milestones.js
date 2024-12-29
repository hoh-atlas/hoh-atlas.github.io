import "./Milestones.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import LeaderboardsMilestones from "@/src/components/leaderboards-milestones/LeaderboardsMilestones";

import allLeaderboards from "../data";
import leaderboardsData from "../_data/leaderboards";

const Milestones = (props) => {
  
    const getLeaderboard = () => {
        return allLeaderboards.find(oneLeaderboards => oneLeaderboards.id == props.selectedLeaderboard);
    }

    const leaderboard = getLeaderboard();
    const leaderboardData = leaderboardsData.find(leaderboardData => leaderboardData.id === leaderboard.codeName);

    const milestonesComponent = leaderboardData.components.find(component => component["@type"] === "type.googleapis.com/RewardLaneEventComponentDTO");
    const rewards = Object.fromEntries(
        Object.entries(milestonesComponent.rewards)
            .sort(([keyA], [keyB]) => parseInt(keyA) - parseInt(keyB))
    );

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
            <Prologue imageSrc={"/leaderboards/intro/icon_ranking_points.webp"} alt={"Milestones"} maxHeight={"65px"} >
                The list of all rewards from the Leaderboard milestones
            </Prologue>

            <SectionDivider />

            <LeaderboardsMilestones data={rewards} />

        </>
    );
  };
  
  export default Milestones;