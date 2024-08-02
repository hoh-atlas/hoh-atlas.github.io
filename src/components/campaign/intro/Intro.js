import "./Intro.css";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import Image from "../../shared/Image";

import icon_battle from "../../../images/campaign/intro/icon-battle.webp";

const Intro = () => {


    return <>
        <Prologue imageSrc={icon_battle} alt="" maxHeight="80px">Aside from city building and Capital City quests, the other major component is the PvE military campaign through which player's engages the armies of famous leaders from the past, some of which become Commanders for your army.<br/>
    Beyond basic resources, acquiring regions on the Campaign map provides land expansions for the Capital City and Allied Culture cities as well as Commander Medals for upgrading Commanders to enhance their powers.</Prologue>

            <Image src="https://i.ibb.co/yyLnL27/scout-banner-feudal-age.png" alt="" roundedCorners={true} maxWidth={"30%"}/>
            <SectionDivider/>
        skuska nejakeho textu
    </>
}

export default Intro;