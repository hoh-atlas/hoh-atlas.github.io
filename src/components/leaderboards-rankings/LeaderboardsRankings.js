import H1 from "../h1/H1";
import { displayRewards } from "@/src/shared-resources/utils/utils";

const LeaderboardsRankings = (props) => {

    const rankingRewards = props.data;

    return (
        <>
            <H1 center={true}>Ranking</H1>

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <small style={{ fontSize: '11px', color: '#916a17' }}>
                    <i>Note: These rewards vary depending on your current era. Be sure to set your era on the website using the dropdown menu in the navigation bar, to see the accurate data for your current in-game progress.</i>
                </small>
            </div>

            <div style={{ overflowX: 'auto', marginTop: '20px' }} className="responsive-table-container">
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '5%' }}>
                                Position
                            </th>
                            <th>
                                Rewards
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.entries(rankingRewards).map(([position, rewardData]) => {
                                return (
                                    <tr key={position}>
                                        <td>{position}</td>
                                        <td>
                                            {displayRewards(rewardData)}
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default LeaderboardsRankings;