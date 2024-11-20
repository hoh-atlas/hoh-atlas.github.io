import "./Intro.css";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import H1 from "../../shared/H1";
import TextBlock from "../../shared/TextBlock";

import technology_alliance_members from "../../../images/community/intro/technology_alliance_members.webp";

const Intro = () => {


    return <>
        <Prologue imageSrc={technology_alliance_members} alt="" maxHeight="80px">
            Community text
        </Prologue>

        <SectionDivider/>
        <TextBlock>

            <H1 center={true}>Community</H1>

        </TextBlock>
    </>
}

export default Intro;