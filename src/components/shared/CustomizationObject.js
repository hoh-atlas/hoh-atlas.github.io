import { getItem } from "./utils";
import { obtainableFrom } from "./data/customizations";

const CustomizationObject = ({ customization }) => {    

    const numberOfColumns = 4 + (customization.boost ? 1 : 0) + (customization.production ? 2 : 0) + (customization.production?.resources ? customization.production?.resources.length : 0);
    const numberOfBodyRows = customization.production ? 3 : 1;

    return ( 
        <>        

        <div className="customization-object-container" style={{ width: '100%' }}>
        <table style={{ width: '100%', marginTop: '10px' }}>
            <thead>
            <tr>
                <th colSpan={numberOfColumns} style={{ padding: '5px' }}>
                {customization.name}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th style={{ width: '25%' }}>Image</th>
                <th style={{ width: '15%' }}>Obtainable From</th>
                <th style={{ width: '10%' }}>Duration</th>
                {customization.boost && (
                    <th>Boost</th>
                )}
                {customization.production && (
                    <th colSpan={2}>Production</th>
                )}
                <th style={{ width: '15%' }}>Apply To</th>
            </tr>

            <tr>
                <td rowSpan={numberOfBodyRows}>
                    <img src={customization.img} style={{ maxHeight: '200px' }}/>
                </td>
                <td rowSpan={numberOfBodyRows}>
                    {Object.keys(obtainableFrom).reduce((acc, key) => customization.id.includes(key) ? obtainableFrom[key] : acc, null)}
                </td>
                <td rowSpan={numberOfBodyRows}>
                    {customization.duration}
                </td>
                {customization.boost && (
                    <td rowSpan={numberOfBodyRows} >
                        {getItem(customization.boost.type)} ({customization.boost.amount})
                    </td>
                )}
                {customization.production && (
                    <td colSpan={2}>
                        {customization.production.resource
                            ? getItem(customization.production.resource)
                            : customization.production.resources &&
                            customization.production.resources.map((resourceItem, index) => {
                                if (typeof resourceItem === 'string') {
                                return (
                                    <span key={resourceItem}>
                                    {getItem(resourceItem)}
                                    {index < customization.production.resources.length - 1 && " "}
                                    </span>
                                );
                                } else if (typeof resourceItem === 'object' && resourceItem.resource) {
                                return (
                                    <span key={resourceItem.resource}>
                                    {getItem(resourceItem.resource)} ({resourceItem.percentage}%)
                                    {index < customization.production.resources.length - 1 && " "}
                                    </span>
                                );
                                }
                                return null;
                            })
                        }
                    </td>
                )}
                <td rowSpan={numberOfBodyRows}>
                    {customization.applyTo}
                </td>
            </tr>
            {customization.production && (
                <tr>
                    <th style={{ height: '10px' }}>
                        Amount
                    </th>
                    <th>
                        Production Time
                    </th>
                </tr>
            )}
            {customization.production && (
                <tr>
                    <td>
                        {customization.production.amount}
                    </td>
                    <td>
                        {customization.production.time}
                    </td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
        </>
    );
};

export default CustomizationObject;