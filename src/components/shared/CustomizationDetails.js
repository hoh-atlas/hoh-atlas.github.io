import React from "react";
import { getItem } from "./utils";

const CustomizationDetails = ({ customization }) => {
    return (
        <div className="responsive-table-container" style={{ width: '90%' }}>
            <img 
                src={customization.img} 
                alt={customization.name} 
                style={{ display: 'block', margin: '0 auto', maxHeight: '100px', marginTop: '10px' }} 
            />
            
            <table style={{ width: '90%', margin: '20px auto' }}>
                <thead>
                    <tr>
                        <th colSpan="2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customization.production && <>
                            <tr>
                                <th>Production</th>
                                <td>{getItem(customization.production.resource)}</td>
                            </tr>
                            <tr>
                                <th>Time</th>
                                <td>{customization.production.time}</td>
                            </tr>
                            {
                                customization.production.amount && <>
                                    <tr>
                                        <th>Amount</th>
                                        <td>{customization.production.amount}</td>
                                    </tr>
                                </>
                            }
                        </>
                    }
                    {
                        customization.boost && <>
                            <tr>
                                <th>Boost</th>
                                <td>{getItem(customization.boost.type)} ({customization.boost.amount})</td>
                            </tr>
                        </>
                    }
                    <tr>
                        <th>Duration</th>
                        <td>{customization.duration}</td>
                    </tr>
                    <tr>
                        <th>Apply To</th>
                        <td>{customization.applyTo}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CustomizationDetails;
