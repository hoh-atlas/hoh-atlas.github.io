import React from "react";
import { getItemIcon, getItemData, formatDuration, displayRewards, displayDynamicDefinition } from "@/src/shared-resources/utils/utils";
import customizationsApplyTo from "@/src/shared-resources/data/customizationsApplyTo";

const CustomizationDetails = ({ customization, customizationImage }) => {
    
    let duration = formatDuration(customization.duration);
    let applyTo = customization.buildingGroup;
    let productionComponent = customization.components.find(oneComponent => oneComponent["@type"] === "type.googleapis.com/ProductionComponentDTO");

    return (
        <div className="responsive-table-container" style={{ width: '90%' }}>
            <img 
                src={customizationImage} 
                alt={customization.name} 
                style={{ display: 'block', margin: '0 auto', maxHeight: '100px', marginTop: '10px' }} 
            />
            
            <table style={{ maxWidth: '90%', margin: '20px auto' }}>
                <thead>
                    <tr>
                        <th colSpan="2">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productionComponent && <>
                            <tr>
                                <th style={{ width: '60%' }}>Production</th>
                                <td>
                                    {productionComponent.finish.rewards 
                                        ? displayRewards(productionComponent.finish) 
                                        : productionComponent.finish.dynamicChangeDefinitionId 
                                        ? displayDynamicDefinition(productionComponent.finish.dynamicChangeDefinitionId)
                                        : null}
                                </td>
                            </tr>
                            <tr>
                                <th>Production Time</th>
                                <td>{formatDuration(productionComponent.duration)}</td>
                            </tr>
                            <tr>
                                <th>Duration</th>
                                <td>{duration}</td>
                            </tr>
                            <tr>
                                <th>Apply To</th>
                                <td>{customizationsApplyTo[applyTo]}</td>
                            </tr>
                        </>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CustomizationDetails;
