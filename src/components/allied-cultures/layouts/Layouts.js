import "./Layouts.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import { getItem } from "../../shared/utils";
import Image from "../../shared/Image";
import TextBlock from "../../shared/TextBlock";
import H1 from "../../shared/H1";
import LayoutsBook from "./LayoutsBook";

import allAlliedCultures from "../data";

import layouts_icon from "../../../images/allied-cultures/layouts/Technology_Roman_Empire_Urban_Management.webp";
import layout_1_sector_1 from "../../../images/allied-cultures/strategies/layout_1_sector_1.webp";
import layout_1_sector_2 from "../../../images/allied-cultures/strategies/layout_1_sector_2.webp";
import layout_2_sector_1 from "../../../images/allied-cultures/strategies/layout_2_sector_1.webp";
import layout_2_sector_2 from "../../../images/allied-cultures/strategies/layout_2_sector_2.webp";
import layout_2_sector_3 from "../../../images/allied-cultures/strategies/layout_2_sector_3.webp";
import layout_3_sector_1 from "../../../images/allied-cultures/strategies/layout_3_sector_1.webp";
import layout_3_sector_2 from "../../../images/allied-cultures/strategies/layout_3_sector_2.webp";
import layout_3_sector_3 from "../../../images/allied-cultures/strategies/layout_3_sector_3.webp";
import layout_4_sector_1 from "../../../images/allied-cultures/strategies/layout_4_sector_1.webp";
import layout_4_sector_2 from "../../../images/allied-cultures/strategies/layout_4_sector_2.webp";
import layout_4_sector_3 from "../../../images/allied-cultures/strategies/layout_4_sector_3.webp";

const Layouts = (props) => {
    // virtual-graph-paper dot com
    const basePath = "allied-cultures";
    const pageName = "Allied Cultures - Layouts";
    
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const alliedCulture = getAlliedCulture();

    const egyptCultures = ["egypt_cheops_pyramid", "egypt_great_sphinx", "egypt_abu_simbel"];
    const chinaCultures = ["china_terracotta_army", "china_great_wall", "china_forbidden_city"];
  
    return (
      <>
        <Prologue imageSrc={layouts_icon} alt={"Strategies"} maxHeight={"65px"} >
            This guide is a subset of the information provided in the <b>Strategies</b> tab. It will help you to more easily follow the suggested layouts for your Allied City. To read more comprehensive
            guide, including details explaining the progress of the Allied Culture, visit the <b>Strategies</b> tab.
        </Prologue>
        
        <SectionDivider />

            <H1 center={true}>Layouts</H1>

            <Image src={alliedCulture?.image} alt="" spacing={true} maxHeight={'150px'}/>

            {
                egyptCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        No content available at the moment.

                    </TextBlock>
                ) : chinaCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        <ul><li>Layout up to level 13 of the World Wonder:</li></ul>

                        <LayoutsBook header={"Layout 1"} images={[layout_1_sector_1,layout_1_sector_2]} />

                        <ul><li>Layout up to level 17 of the World Wonder (discovered Kaolin Quarries and more production buildings):</li></ul>

                        <LayoutsBook header={"Layout 2"} images={[layout_2_sector_1,layout_2_sector_2,layout_2_sector_3]} />

                        <ul><li>Layout after the research is completed (more production buildings):</li></ul>

                        <LayoutsBook header={"Layout 3"} images={[layout_3_sector_1,layout_3_sector_2,layout_3_sector_3]} />

                        <ul><li>Layout after level 24 of the World Wonder (once all free expansions are available):</li></ul>

                        <LayoutsBook header={"Layout 4"} images={[layout_4_sector_1,layout_4_sector_2,layout_4_sector_3]} />

                        This layout includes in total 8x Rice Farm, 4x Thread Processor, 3x Silk Workshop, 6x Clay Processor and 2x Porcelain Workshop (all at level 6). You may keep with this setup until the end of the event.

                    </TextBlock>
                ) : null
            }
      </>
    );
}

export default Layouts;