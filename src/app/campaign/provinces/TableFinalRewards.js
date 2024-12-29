import { getItemIcon } from "@/src/shared-resources/utils/utils";
import regionsFinalRewards from "../_data/regionsFinalRewards";

const TableFinalRewards = (props) => {

    const province = props.province;
    const orderInLocation = props.orderInLocation;

    const region = regionsFinalRewards.find(item => item.id === `region.${province.location}_${orderInLocation}`);
    const regionRewards = region['byDifficulty']['difficulty.Normal']['finish']['rewards'];

    return (
        <div style={{ overflowX: 'auto' }} className="responsive-table-container">
            <table style={{ marginTop: '20px', width: '100%' }}>
                <thead>
                    <tr>
                        <th>
                            Final Rewards
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {
                                regionRewards.map((oneReward) => (
                                    <div style={{ display: 'inline-flex', marginRight: '5px' }}>
                                        {oneReward.amount || oneReward.regular}&nbsp;
                                        {oneReward.resource ? getItemIcon(oneReward.resource) : getItemIcon(oneReward.city)}
                                    </div>
                                ))                                
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableFinalRewards;