import "./Heroes.css";

import Image from "../../shared/Image";
import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import H1 from "../../shared/H1";

import allHeroes from "../data";

const Heroes = (props) => {

    const heroId = props.heroId;

    return <>
        <Prologue imageSrc={"https://i.ibb.co/nRvy33n/event-widget-backer-time-Paradox-2021.png"} alt={"Event"} maxHeight={"65px"} >
            Events happen throughout the year to celebrate special occasions, and
            in game players will get additional questlines, new resources to
            collect and try to gain a new building or upgrades. Events that last
            21 days or more will have 28 quests available on day 1 then 4 more
            quests will become available for each of the following days.
            </Prologue>
            <SectionDivider />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px",marginBottom: "15px" }}>
            </div>

        <Image src="https://i.ibb.co/z8N0BWD/Unit-Edison-fullbody.png" alt="" roundedCorners={false} maxWidth={"15%"}/>
        <Image src="https://i.ibb.co/PMJcVHB/hero-icon.png" alt="" />
        <Image src="https://i.ibb.co/WnBQXYq/icon-hero-star.png" alt="" />
    </>
}

export default Heroes;