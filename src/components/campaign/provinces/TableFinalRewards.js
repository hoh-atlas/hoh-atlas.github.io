import { getItem } from "../../shared/utils";

const TableFinalRewards = (props) => {

    const rewards = props.data.rewards;    

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
                                rewards.map((oneReward) => <div style={{ display: 'inline-flex', marginRight: '5px'}}>{oneReward.amount}&nbsp;{getItem(oneReward.resource)}</div>)
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableFinalRewards;