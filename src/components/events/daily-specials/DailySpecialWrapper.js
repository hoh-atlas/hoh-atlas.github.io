import "./DailySpecialWrapper.css";

import resources from "../../shared/data/resources";
import chests from "../../shared/data/chests";
import H1 from "../../shared/H1";
import { getItem, getItemData } from "../../shared/utils";

const DailySpecialWrapper = (props) => {

    const { resource, amount, day } = props;    

    return (
        <>
        
            <div className="customization-object-container" style={{ width: '100%' }}>
                
                {
                    resources.some(item => item.id === resource) ? (
                        <>
                            <H1 center={true} style={{ marginTop: '10px' }}>Day {day}: {getItemData(resource).name}</H1>
                            <table style={{ width: '100%', marginTop: '10px' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '20%' }}>
                                            <img src={getItemData(resource).img} style={{ maxHeight: '80px' }}/>
                                        </td>
                                        <td style={{ width: '20%'}}>
                                            Resource
                                        </td>
                                        <td>
                                            {amount}x
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    ) : (
                        chests.some(item => item.id === resource) && (
                            <>
                                <H1 center={true} style={{ marginTop: '10px' }}>Day {day}: {getItemData(resource).name}</H1>
                                <table style={{ width: '100%', marginTop: '10px' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: '20%' }}>
                                                <img src={getItemData(resource).img} style={{ maxHeight: '80px' }}/>
                                            </td>
                                            <td style={{ width: '20%'}}>
                                                Chest
                                            </td>
                                            <td>
                                                {
                                                    getItemData(resource).items.map((oneItem, index) => (
                                                        <span key={oneItem.resource}>
                                                            {oneItem.amount}x {getItem(oneItem.resource)} ({oneItem.percentage}%)
                                                            {index < getItemData(resource).items.length - 1 && " / "}
                                                        </span>
                                                    ))
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        )
                    )
                }

            </div>
        
        </>
    )
}

export default DailySpecialWrapper;