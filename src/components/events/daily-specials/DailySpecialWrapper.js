import "./DailySpecialWrapper.css";

import resources from "../../shared/data/resources";
import chests from "../../shared/data/chests";
import { customizations } from "../../shared/data/customizations";
import H1 from "../../shared/H1";
import { getItemIcon, getItemData } from "../../shared/utils";
import CustomizationObject from "../../shared/CustomizationObject";

const DailySpecialWrapper = (props) => {

    const { dailySpecial, amount, note, day } = props;    
    const itemData = getItemData(dailySpecial);

    return (
        <>
            <div className="customization-object-container" style={{ width: '100%' }}>
                {/* If it's a resource */}
                {resources.some(item => item.id === dailySpecial) ? (
                    <>
                        <H1 center={true} style={{ marginTop: '10px' }}>Day {day}: {itemData.name}</H1>
                        <table style={{ width: '100%', marginTop: '10px' }}>
                            <tbody>
                                <tr>
                                    <th style={{ width: '20%' }}>
                                        Image
                                    </th>
                                    <th style={{ width: '20%' }}>
                                        Type
                                    </th>
                                    <th>
                                        Amount
                                    </th>
                                    {note && (
                                        <th style={{ width: '20%' }}>
                                            {note}
                                        </th>
                                    )}
                                </tr>
                                <tr>
                                    <td>
                                        <img src={itemData.img} style={{ maxHeight: '70px' }} />
                                    </td>
                                    <td style={{ width: '20%' }}>
                                        Resource
                                    </td>
                                    <td>
                                        {amount}x
                                    </td>
                                    {note && (
                                        <td style={{ width: '20%' }}>
                                            <small>{note}</small>
                                        </td>
                                    )}
                                </tr>
                            </tbody>
                        </table>
                    </>
                ) : chests.some(item => item.id === dailySpecial) ? (
                    <>
                        <H1 center={true} style={{ marginTop: '10px' }}>Day {day}: {itemData.name}</H1>
                        <table style={{ width: '100%', marginTop: '10px' }}>
                            <tbody>
                                <tr>
                                    <th style={{ width: '20%' }}>
                                        Image
                                    </th>
                                    <th style={{ width: '20%' }}>
                                        Type
                                    </th>
                                    <th>
                                        Possible Rewards
                                    </th>
                                    {note && (
                                        <th style={{ width: '20%' }}>
                                            Note
                                        </th>
                                    )}
                                </tr>
                                <tr>
                                    <td>
                                        <img src={itemData.img} style={{ maxHeight: '60px', verticalAlign: 'middle' }} />
                                    </td>
                                    <td>
                                        Chest
                                    </td>
                                    <td>
                                        {itemData.items.map((oneItem, index) => (
                                            <span key={oneItem.resource}>
                                                {oneItem.amount}x {getItemIcon(oneItem.resource)} ({oneItem.percentage}%)
                                                {index < itemData.items.length - 1 && " / "}
                                            </span>
                                        ))}
                                    </td>
                                    {note && (
                                        <td style={{ width: '20%' }}>
                                            <small>{note}</small>
                                        </td>
                                    )}
                                </tr>
                            </tbody>
                        </table>
                    </>
                ) : customizations.some(item => item.id === dailySpecial) ? (
                    <>
                        <H1 center={true} style={{ marginTop: '10px' }}>Day {day}: {itemData.name}</H1>
                        <CustomizationObject customization={itemData} showHeader={false} imageMaxHeight={"100px"}/>
                    </>
                ) : (
                    <div>No valid daily special found for Day {day}.</div>
                )}
            </div>
        </>
    );
}

export default DailySpecialWrapper;
