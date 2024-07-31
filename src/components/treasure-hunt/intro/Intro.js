import "./Intro.css";

import Image from "../../shared/Image";
import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import H1 from "../../shared/H1";

const Intro = (props) => {

    return <>
        <Prologue imageSrc={"https://i.ibb.co/YRG9Spn/ath-attempt.png"} alt={"Treasure Hunt"} maxHeight={"65px"} >
            Alliance Treasure Hunt (ATH) is a weekly event that give the players an opportunity to gain rewards.<br/>
            The treasure hunt involves encounters with pirates where an option to battle or negotiate with them allows the player to move along the path.<br/>
            Each battle or negotiation requires compasses which are gained every 90 minutes.<br/>
            You have the opportunity to unlock treasure hunt themed customizations which can improve happiness, unit boosts, coin production, food production and more.<br/>
        </Prologue>
        <SectionDivider />
        <Image src={"https://i.ibb.co/p07cG2b/deco-battle-mode-banner-ath.png"} maxWidth={"600px"} />
    </>
}

export default Intro;