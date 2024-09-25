import "./Buildings.css";
import "../../shared/Table.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import H1 from "../../shared/H1";
import Image from "../../shared/Image";
import Icon from "../../shared/Icon";
import { getItem } from "../../shared/utils";

import allAlliedCultures from "../data";
import resources from "../../shared/data/resources";
import buildings_icon from "../../../images/allied-cultures/buildings/buildings_icon.webp";

const Buildings = (props) => {

    const basePath = "allied-cultures";
    const pageName = "Allied Cultures - Buildings";
  
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const buildingCategories = getAlliedCulture().buildingCategories;
  
    return (
      <>
        <Prologue imageSrc={buildings_icon} alt={"Event"} maxHeight={"65px"} >
            Use research of the Allied Culture to unlock exclusive buildings. These buildings offer unique workers and produce special resources essential for advancing within the Allied Culture.
        </Prologue>
        <SectionDivider />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
            
        </div>

        {buildingCategories.home && (
            <>
                <H1 center={true}>{buildingCategories.home.categoryName}</H1>
                <div className="scroll">
                    {buildingCategories.home && <table style={{ width: '90%', marginTop: '10px' }}>
                        {buildingCategories.home.buildings.map( (building, index) => (
                        <>
                        <thead>
                            <tr>
                                <th colSpan={8}>
                                    {building.name}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th>
                                    Level
                                </th>
                                <th>
                                    Size
                                </th>
                                <th>
                                    Costs
                                </th>
                                <th>
                                    Construction
                                </th>
                                <th>
                                    Production
                                </th>
                                <th>
                                    Provided
                                </th>
                                <th>
                                    Cap
                                </th>
                            </tr>
                            {building.levels.map( (level, index) => (
                                <>
                                <tr>
                                    <td rowSpan={2}>
                                        <Image src={level.image} />
                                    </td>
                                    <td rowSpan={2}>
                                        {index+1}
                                    </td>
                                    <td rowSpan={2}>
                                        {building.size}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.costs[0].amount} {getItem(level.costs[0].resource)}
                                    </td>
                                    <td>
                                        {level.construction.time}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.production.amount} {getItem(level.production.resource)} / {level.production.time}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.provided.worker_entity.amount} {getItem(level.provided.worker_entity.type)}
                                    </td>
                                    {
                                        index === 0 && (
                                                        <td rowSpan={building.levels.length*2}>
                                                            {building.cap}
                                                        </td>
                                                        )
                                    }
                                    
                                </tr>
                                <tr>
                                    <td>
                                        {level.construction.worker_entity.amount} {getItem(level.construction.worker_entity.type)}
                                    </td>
                                </tr>
                                </>
                            ))}
                        </tbody>
                        </>
                        ))
                        }
                    </table> }
                </div>
            </>
        )}

        {buildingCategories.production && (
            <>
                <H1 center={true} style={{ marginTop: '10px' }}>{buildingCategories.production.categoryName}</H1>
                <div className="scroll">
                    {buildingCategories.production && <table style={{ width: '90%', marginTop: '10px' }}>
                        {buildingCategories.production.buildings.map( (building, index) => (
                        <>
                        <thead>
                            <tr>
                                <th colSpan={7}>
                                    {building.name}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th>
                                    Level
                                </th>
                                <th>
                                    Size
                                </th>
                                <th>
                                    Costs
                                </th>
                                <th>
                                    Construction
                                </th>
                                <th>
                                    Production
                                </th>
                                <th>
                                    Cap
                                </th>
                            </tr>
                            {building.levels.map( (level, index) => (
                                <>
                                <tr>
                                    <td rowSpan={2}>
                                        <Image src={level.image} />
                                    </td>
                                    <td rowSpan={2}>
                                        {index+1}
                                    </td>
                                    <td rowSpan={2}>
                                        {building.size}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.costs[0].amount} {getItem(level.costs[0].resource)}
                                    </td>
                                    <td>
                                        {level.construction.time}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.production.amount} {getItem(level.production.resource)} / {level.production.time}
                                    </td>
                                    {
                                        index === 0 && (
                                                        <td rowSpan={building.levels.length*2}>
                                                            {building.cap}
                                                        </td>
                                                        )
                                    }
                                    
                                </tr>
                                <tr>
                                    <td>
                                        {level.construction.worker_entity.amount} {getItem(level.construction.worker_entity.type)}
                                    </td>
                                </tr>
                                </>
                            ))}
                        </tbody>
                        </>
                        ))
                        }
                    </table> }
                </div>
            </>
        )}

        {buildingCategories.papyrus_field && (
            <>
                <H1 center={true} style={{ marginTop: '10px' }}>{buildingCategories.papyrus_field.categoryName}</H1>
                <div className="scroll">
                    {buildingCategories.papyrus_field && <table style={{ width: '90%', marginTop: '10px' }}>
                        {buildingCategories.papyrus_field.buildings.map( (building, index) => (
                        <>
                        <thead>
                            <tr>
                                <th colSpan={7}>
                                    {building.name}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th>
                                    Level
                                </th>
                                <th>
                                    Size
                                </th>
                                <th>
                                    Costs
                                </th>
                                <th>
                                    Construction
                                </th>
                                <th>
                                    Production
                                </th>
                                <th>
                                    Cap
                                </th>
                            </tr>
                            {building.levels.map( (level, index) => (
                                <>
                                <tr>
                                    <td rowSpan={2}>
                                        <Image src={level.image} />
                                    </td>
                                    <td rowSpan={2}>
                                        {index+1}
                                    </td>
                                    <td rowSpan={2}>
                                        {building.size}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.costs[0].amount} {getItem(level.costs[0].resource)}
                                    </td>
                                    <td>
                                        {level.construction.time}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.production.amount} {getItem(level.production.resource)} / {level.production.time}
                                    </td>
                                    {
                                        index === 0 && (
                                                        <td rowSpan={building.levels.length*2}>
                                                            {building.cap}
                                                        </td>
                                                        )
                                    }
                                    
                                </tr>
                                <tr>
                                    <td>
                                        {level.construction.worker_entity.amount} {getItem(level.construction.worker_entity.type)}
                                    </td>
                                </tr>
                                </>
                            ))}
                        </tbody>
                        </>
                        ))
                        }
                    </table> }
                </div>
            </>
        )}

        {buildingCategories.gold_mine && (
            <>
                <H1 center={true} style={{ marginTop: '10px' }}>{buildingCategories.gold_mine.categoryName}</H1>
                <div className="scroll">
                    {buildingCategories.gold_mine && <table style={{ width: '90%', marginTop: '10px' }}>
                        {buildingCategories.gold_mine.buildings.map( (building, index) => (
                        <>
                        <thead>
                            <tr>
                                <th colSpan={7}>
                                    {building.name}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th>
                                    Level
                                </th>
                                <th>
                                    Size
                                </th>
                                <th>
                                    Costs
                                </th>
                                <th>
                                    Construction
                                </th>
                                <th>
                                    Production
                                </th>
                                <th>
                                    Cap
                                </th>
                            </tr>
                            {building.levels.map( (level, index) => (
                                <>
                                <tr>
                                    <td rowSpan={2}>
                                        <Image src={level.image} />
                                    </td>
                                    <td rowSpan={2}>
                                        {index+1}
                                    </td>
                                    <td rowSpan={2}>
                                        {building.size}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.costs[0].amount} {getItem(level.costs[0].resource)}
                                    </td>
                                    <td>
                                        {level.construction.time}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.production.amount} {getItem(level.production.resource)} / {level.production.time}
                                    </td>
                                    {
                                        index === 0 && (
                                                        <td rowSpan={building.levels.length*2}>
                                                            {building.cap}
                                                        </td>
                                                        )
                                    }
                                    
                                </tr>
                                <tr>
                                    <td>
                                        {level.construction.worker_entity.amount} {getItem(level.construction.worker_entity.type)}
                                    </td>
                                </tr>
                                </>
                            ))}
                        </tbody>
                        </>
                        ))
                        }
                    </table> }
                </div>
            </>
        )}

        {buildingCategories.workshop && (
            <>
                <H1 center={true} style={{ marginTop: '10px' }}>{buildingCategories.workshop.categoryName}</H1>
                <div className="scroll">
                    {buildingCategories.workshop && <table style={{ width: '90%', marginTop: '10px' }}>
                        {buildingCategories.workshop.buildings.map( (building, index) => (
                        <>
                        <thead>
                            <tr>
                                <th colSpan={7}>
                                    {building.name}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th>
                                    Level
                                </th>
                                <th>
                                    Size
                                </th>
                                <th>
                                    Costs
                                </th>
                                <th>
                                    Construction
                                </th>
                                <th>
                                    Production
                                </th>
                                <th>
                                    Cap
                                </th>
                            </tr>
                            {building.levels.map( (level, index) => (
                                <>
                                <tr>
                                    <td rowSpan={2}>
                                        <Image src={level.image} />
                                    </td>
                                    <td rowSpan={2}>
                                        {index+1}
                                    </td>
                                    <td rowSpan={2}>
                                        {building.size}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.costs[0].amount} {getItem(level.costs[0].resource)}
                                    </td>
                                    <td>
                                        {level.construction.time}
                                    </td>
                                    <td rowSpan={2}>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    textAlign: 'center',
                                                    width: '100%',
                                                }}
                                            >
                                                {
                                                    level.productions.map((production, index) => (
                                                        <div
                                                            key={index}
                                                            style={{
                                                                flex: 1,
                                                            }}
                                                        >
                                                            {production.amount} {getItem(production.resource)} / {production.time}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                    </td>
                                    {
                                        index === 0 && (
                                                        <td rowSpan={building.levels.length*2}>
                                                            {building.cap}
                                                        </td>
                                                        )
                                    }
                                    
                                </tr>
                                <tr>
                                    <td>
                                        {level.construction.worker_entity.amount} {getItem(level.construction.worker_entity.type)}
                                    </td>
                                </tr>
                                </>
                            ))}
                        </tbody>
                        </>
                        ))
                        }
                    </table> }
                </div>
            </>
        )}

        {buildingCategories.irrigation && (
            <>
                <H1 center={true} style={{ marginTop: '10px' }}>{buildingCategories.irrigation.categoryName}</H1>
                <div className="scroll">
                    {buildingCategories.irrigation && <table style={{ width: '90%', marginTop: '10px' }}>
                        {buildingCategories.irrigation.buildings.map( (building, index) => (
                        <>
                        <thead>
                            <tr>
                                <th colSpan={8}>
                                    {building.name}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th>
                                    Level
                                </th>
                                <th>
                                    Size
                                </th>
                                <th>
                                    Costs
                                </th>
                                <th>
                                    Construction
                                </th>
                                <th>
                                    Provided
                                </th>
                                <th>
                                    Cap
                                </th>
                            </tr>
                            {building.levels.map( (level, index) => (
                                <>
                                <tr>
                                    <td rowSpan={2}>
                                        <Image src={level.image} />
                                    </td>
                                    <td rowSpan={2}>
                                        {index+1}
                                    </td>
                                    <td rowSpan={2}>
                                        {building.size}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.costs[0].amount} {getItem(level.costs[0].resource)}
                                    </td>
                                    <td>
                                        {level.construction.time}
                                    </td>
                                    <td rowSpan={2}>
                                        {level.provided.culture.amount} {getItem(level.provided.culture.type)} in {level.provided.culture.range} {level.provided.culture.range > 1 ? "tiles" : "tile"}
                                    </td>
                                    {
                                        index === 0 && (
                                                        <td rowSpan={building.levels.length*2}>
                                                            {building.cap}
                                                        </td>
                                                        )
                                    }
                                    
                                </tr>
                                <tr>
                                    <td>
                                        {level.construction.worker_entity.amount} {getItem(level.construction.worker_entity.type)}
                                    </td>
                                </tr>
                                </>
                            ))}
                        </tbody>
                        </>
                        ))
                        }
                    </table> }
                </div>
            </>
        )}

      </>
    );
}

export default Buildings;