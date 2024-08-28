import "./Intro.css";

import Image from "../../shared/Image";
import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import H1 from "../../shared/H1";
import TextBlock from "../../shared/TextBlock";

import icon_ath_attempt from "../../../images/treasure-hunt/intro/icon_ath_attempt.webp";
import deco_battle_mode_banner_ath from "../../../images/treasure-hunt/intro/deco_battle_mode_banner_ath.webp";

const Intro = (props) => {

    return <>
        <Prologue imageSrc={icon_ath_attempt} alt={"Treasure Hunt"} maxHeight={"65px"} >
        Alliance Treasure Hunt (ATH) is a weekly event that gives players the opportunity to earn special rewards.<br/>
        Your heroes embark on an adventure to a tropical island to battle against pirates. Each battle requires compasses, which are gained every 90 minutes.<br/>
        Rewards include premium items such as Fountain of Youth tokens, Mastery Points, and a truckload of customizations for your city buildings.
        </Prologue>
        <SectionDivider />
        <H1 center={true}>Treasure Hunt</H1>
        <Image src={deco_battle_mode_banner_ath} alt="" roundedCorners={true} spacing={true} width={'400px'}/>
        <TextBlock centered={true}>
            More content will be added soon!
        </TextBlock>
    </>
}

export default Intro;