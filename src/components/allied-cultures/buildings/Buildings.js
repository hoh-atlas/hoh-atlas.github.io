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

import allAlliedCultures from "../data";
import resources from "../../shared/data/resources";

const Buildings = (props) => {

    const basePath = "allied-cultures";
    const pageName = "Allied Cultures - Buildings";
  
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const buildingCategories = getAlliedCulture().buildingCategories;
  
    return (
      <>
        <Prologue imageSrc={"https://i.ibb.co/DtgGzzS/Technology-Iberian-Era-Masia.png"} alt={"Event"} maxHeight={"65px"} >
            
        </Prologue>
        <SectionDivider />
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
            
        </div>

        <H1 center={true}>Home</H1>
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
                                  {level.costs[0].amount} <Icon resource={resources.find((resource) => resource.id === level.costs[0].resource)} />
                              </td>
                              <td>
                                  {level.construction.time}
                              </td>
                              <td rowSpan={2}>
                                  {level.production.amount} <Icon resource={resources.find((resource) => resource.id === level.production.resource)} /> / {level.production.time}
                              </td>
                              <td rowSpan={2}>
                                  {level.provided.worker_entity.amount} <Icon resource={resources.find((resource) => resource.id === level.provided.worker_entity.type)} />
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
                                  {level.construction.worker_entity.amount} <Icon resource={resources.find((resource) => resource.id === level.construction.worker_entity.type)} />
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
    );
}

export default Buildings;