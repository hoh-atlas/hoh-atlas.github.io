import "./WorldWonder.css";
import "../../shared/Table.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import Icon from "../../shared/Icon";
import resources from "../../shared/data/resources";

import allAlliedCultures from "../data";

const WorldWonder = (props) => {

    const basePath = "allied-cultures";
    const pageName = "Allied Cultures - World Wonder";

    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const wonder = getAlliedCulture().wonder;
  
    return (
      <>
          <Prologue imageSrc={"https://i.ibb.co/2Ndt3D9/Technology-Age-Of-The-Franks-Sacred-Shrines.png"} alt={"Event"} maxHeight={"65px"} >
              The World Wonder defines the main progress of the allied culture. Produce the necessary resources, upgrade the Wonder, collect rewards, and compete with other players in leagues.<br/>
              Each level of the World Wonder increases the production of one of the allied culture's resources, accelerating your progress.
          </Prologue>
          <SectionDivider />
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
              <img src={wonder?.image} style={{ maxWidth: "300px" }} />
          </div>
          <table style={{ width: '90%' }}>
              <thead>
                  <tr>
                      <th style={{ width: '15%' }}>
                          Level
                      </th>
                      <th style={{ width: '35%' }}>
                          Costs
                      </th>
                      <th style={{ width: '25%' }}>
                          Boost
                      </th>
                      <th style={{ width: '25%' }}>
                          Rewards
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {
                      wonder?.levels.map( (level) => (
                          <>
                              <tr>
                                  <td>
                                      {level.level}
                                  </td>
                                  <td>
                                      {
                                          level.requirements?.map( (requirement) => (
                                              <>
                                                  {requirement.amount}x
                                                  {' '}
                                                  <Icon resource={resources.find((resource) => resource.id === requirement.resource)} />
                                                  {' '}
                                              </>
                                          ))
                                      }
                                  </td>
                                  <td>
                                      {
                                          level.bonuses?.map( (bonus) => (
                                              <>
                                                  {bonus.amount}%
                                                  {' '}
                                                  <Icon resource={resources.find((resource) => resource.id === bonus.resource)} />
                                                  {' '}
                                              </>
                                          ))
                                      }
                                  </td>
                                  <td>
                                      {
                                          level.reward && (
                                              <>
                                                  {level.reward?.amount}x
                                                  {' '}
                                                  <Icon resource={resources.find((resource) => resource.id === level.reward?.resource)} />
                                                  {' '}
                                              </>
                                          )
                                      }
                                  </td>
                              </tr>
                          </>
                      ))
                  }
              </tbody>
          </table>
      </>
    );
}

export default WorldWonder;