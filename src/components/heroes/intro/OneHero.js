import "./OneHero.css";
import "../../shared/Table.css";

import { Link, useParams } from "react-router-dom";
import React from "react";

import { createPathFromParameters } from "../../shared/utils";

import { allHeroes, levelsExperiences, heroClassIcons, unitIcons, backdrops, heroClassNames, unitNames, colorIcons, colorNames } from "../data";
import layoutHeroes from "../sectionsDefinition";
import Image from "../../shared/Image";
import H1 from "../../shared/H1";
import Prologue from "../../shared/Prologue";
import Icon from "../../shared/Icon";
import resources from "../../shared/data/resources";
import SectionDivider from "../../shared/SectionDivider";
import { getItem } from "../../shared/utils";

import icon_star from "../../../images/heroes/intro/icon_star.webp";

const OneHero = (props) => {

    const {heroId} = useParams();

    const hero = allHeroes.find( (oneHero) => {
        return oneHero.id == heroId;
    })

    if (hero === undefined) {
        return <div>
            <Link to={createPathFromParameters(layoutHeroes.page, props.tab.url)}>Back to All Heroes</Link>
            <p>Hero not found</p>
        </div>
    }

    const {id, name, image, icon, backdrop, stars, heroClass, unit, color, abilityIcon, ascension, abilityName, abilityDescription, ability} = hero;

    const currentIndex = props.filteredHeroes.findIndex(item => item.id === id);
    const leftHero = currentIndex > 0 ? props.filteredHeroes[currentIndex - 1] : null;
    const rightHero = currentIndex < props.filteredHeroes.length - 1 ? props.filteredHeroes[currentIndex + 1] : null;

    /*backgroundImage: `url(${backdrops[backdrop]})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            
                            background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%);
margin-top: 
                    <Image src={backdrops[backdrop]} style={{background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%)'}}   />*/

    return <div>
        <table style={{ width: '70%', marginBottom: '20px' }}>
            <thead>
                <tr>
                    <th>Previous</th>
                    <th></th>
                    <th>Next</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{width: '10%', maxWidth: '10%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                        {leftHero && <Link to={createPathFromParameters(layoutHeroes.page, props.tab.url, leftHero.id)} className="text-link"><Image src={leftHero.icon} maxWidth={'70px'}/>{leftHero.name}</Link>}
                    </td>
                    <td
                        style={{
                            width: '80%',
                            backgroundImage: `url(${backdrops[backdrop]})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                    </td>
                    <td style={{width: '10%', maxWidth: '10%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                        {rightHero && <Link to={createPathFromParameters(layoutHeroes.page, props.tab.url, rightHero.id)} className="text-link"><Image src={rightHero.icon} maxWidth={'70px'}/>{rightHero.name}</Link>}
                    </td>
                </tr>
            </tbody>
        </table>
        <SectionDivider></SectionDivider>
        <H1 center>{name}</H1>
        <Image src={icon} maxWidth={'100px'} marginTop={'10px'}/>
        <table style={{ width: '90%', marginTop: '20px' }}>
            <thead>
                <tr>
                    <th colSpan={5}>General Stats</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{ width: '30%'}} rowSpan="5">
                        <Image src={image} maxHeight={"350px"} />
                    </td>
                </tr>
                <tr>
                    <th style={{ width: '17.5%', height: '20px', lineHeight: '15px' }}>Hero Class</th>
                    <th style={{ width: '17.5%', height: '15px', lineHeight: '15px' }}>Unit Type</th>
                    <th style={{ width: '17.5%', height: '15px', lineHeight: '15px' }}>Color</th>
                    <th style={{ width: '17.5%', height: '15px', lineHeight: '15px' }}>Rarity</th>
                </tr>
                <tr>
                    <td style={{ width: '17.5%', height: '120px'}}>
                        <Image src={heroClassIcons[heroClass]} maxHeight={'50px'}/>
                        {heroClassNames[heroClass]}
                    </td>
                    <td style={{ width: '17.5%', height: '120px'}}>
                        <Image src={unitIcons[unit]} maxHeight={'50px'}/>
                        {unitNames[unit]}
                    </td>
                    <td style={{ width: '17.5%', height: '120px'}}>
                        <Image src={colorIcons[color]} maxHeight={'50px'}/>
                        {colorNames[color]}
                    </td>
                    <td style={{ width: '17.5%', height: '120px'}}>
                        {[...Array(stars)].map( () => (
                            <Image src={icon_star} inline={true} maxWidth={'30px'}/>
                        ))}
                        <br/>
                        {stars === 5 ? "Legendary" : stars === 4 ? "Epic" : stars === 3 ? "Rare" : stars === 2 ? "Uncommon" : stars === 1 ? "Common" : "No Stars"}
                    </td>
                </tr>
                <tr>
                    <th colSpan={4} style={{ width: '23%', height: '20px', lineHeight: '15px' }}>
                        Ability: {abilityName}
                    </th>
                </tr>
                <tr>
                    <td>
                        <Image src={abilityIcon} maxWidth={'100px'}/>
                    </td>
                    <td colSpan={3}>
                        <span dangerouslySetInnerHTML={{ __html: abilityDescription }} />
                    </td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan={5}>Ascension</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Level</th>
                    <th colSpan={4}>Required Materials</th>
                </tr>
                {
                    ascension && Object.entries(ascension).map(([level, requirements]) => (
                        <tr>
                            <td>{parseInt(level)} &gt; {parseInt(level) + 10}</td>
                            <td colSpan={4}>
                                {
                                    ascension[parseInt(level)].map((requirement) => {
                                        return (
                                            <div key={level + 1} style={{ display: 'inline-block', marginRight: '10px' }}>
                                                {requirement.amount}x {getItem(requirement.resource)}
                                            </div>
                                        )
                                    })
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            <thead>
                <tr>
                    <th colSpan={5}>Ability: {abilityName}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Level</th>
                    <th colSpan={4}>Bonuses</th>
                </tr>
                {
                    ability && ability.map((level, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td colSpan={4}>{level.replaceAll(",", ", ")}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
}

export default OneHero;