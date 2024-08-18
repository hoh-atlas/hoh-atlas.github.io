import resources from "../../shared/data/resources";
import Icon from "../../shared/Icon";

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
                                rewards.map((oneReward) => <div style={{ display: 'inline-flex', marginRight: '5px'}}>{oneReward.amount} <Icon resource={resources.find((resource) => resource.id === oneReward.resource)} /></div>)
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableFinalRewards;