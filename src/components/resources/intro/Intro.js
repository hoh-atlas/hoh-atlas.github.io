import "./Intro.css";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";

import icon_goldfood from "../../../images/resources/intro/icon-goldfood.webp";

const Intro = () => {

    return <>
        <Prologue imageSrc={icon_goldfood} alt={"Provinces"} maxHeight={"65px"}>Resources description</Prologue>
        <SectionDivider/>
        Main text
        which resources are limited and which are not
        how to increase the storage (by progressing to the next era or purchasing a premium)
    </>
}

export default Intro;