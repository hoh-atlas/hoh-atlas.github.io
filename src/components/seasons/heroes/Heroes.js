import "./Heroes.css";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import TextBlock from "../../shared/TextBlock";
import H1 from "../../shared/H1";
import Image from "../../shared/Image";
import Icon from "../../shared/Icon";
import { getItem } from "../../shared/utils";
import allSeasons from "../data";
import { allHeroes } from "../../heroes/data";
import { createPathFromParameters } from "../../shared/utils";
import { Link } from "react-router-dom";

import icon_reward_season_pass from "../../../images/seasons/rewards/icon_reward_season_pass.webp";
import icon_silver_ticket from "../../../images/seasons/rewards/icon_silver_ticket.webp";
import icon_golden_ticket from "../../../images/seasons/rewards/icon_golden_ticket.webp";
import icon_seasonpass_progress from "../../../images/seasons/intro/icon_seasonpass_progress.webp";

const Heroes = (props) => {

    const getSeason = () => {
        return allSeasons.find(oneSeason => oneSeason.id == props.selectedSeason);
    }

    const season = getSeason();

    const hero1 = allHeroes.filter((oneHero) => oneHero.id === season.uniqueHeroes[0])[0];
    const hero2 = allHeroes.filter((oneHero) => oneHero.id === season.uniqueHeroes[1])[0];

    return <>
        <Prologue imageSrc={icon_reward_season_pass} alt={"Seasons"} maxHeight={"65px"}>
            This is an overview of featured heroes available in Arcanne Antimatter during this season.
        </Prologue>

        <SectionDivider/>
        <TextBlock>

            <H1 center={true}>Featured Heroes</H1>

            <div style={{ overflowX: 'auto', marginTop: '20px' }} className="responsive-table-container">
                <table style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th style={{ width: '50%' }}>
                                {hero1.name}
                            </th>
                            <th style={{ width: '50%' }}>
                                {hero2.name}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Image src={hero1.image} maxHeight={'400px'}/></td>
                            <td><Image src={hero2.image} maxHeight={'400px'}/></td>
                        </tr>
                        <tr>
                            <td>
                                <Link to={createPathFromParameters("heroes", "", hero1.id)} key={hero1.id} className="text-link hero-icon-container">
                                    <span>More details</span>
                                </Link>
                            </td>
                            <td>
                                <Link to={createPathFromParameters("heroes", "", hero2.id)} key={hero2.id} className="text-link hero-icon-container">
                                    <span>More details</span>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </TextBlock>
    </>
}

export default Heroes;