import "./Ranking.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import LeaderboardsRankings from "@/src/components/leaderboards-rankings/LeaderboardsRankings";

import allLeaderboards from "../data";
import leaderboardsData from "../_data/leaderboards";

const Ranking = (props) => {
  
    const getLeaderboard = () => {
        return allLeaderboards.find(oneLeaderboards => oneLeaderboards.id == props.selectedLeaderboard);
    }

    const leaderboard = getLeaderboard();
    const leaderboardData = leaderboardsData.find(leaderboardData => leaderboardData.id === leaderboard.codeName);

    const rankingComponent = leaderboardData.components.find(component => component["@type"] === "type.googleapis.com/LeaderboardPlayerResourceEventComponentDTO");
    const rewards = rankingComponent.rankingRewards;
  
    return (
        <>
            <Prologue imageSrc={"/leaderboards/ranking/Ranking04.webp"} alt={"Ranking"} maxHeight={"65px"} >
                The list of all rewards from the Leaderboard ranking
            </Prologue>

            <SectionDivider />

            <LeaderboardsRankings data={rewards} />
        </>
    );
  };
  
  export default Ranking;