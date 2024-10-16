import "./Strategies.css";

import { useState, useEffect} from "react";

import Prologue from "../../shared/Prologue";
import SelectBox from "../../shared/SelectBox";
import SectionDivider from "../../shared/SectionDivider";
import useOptionURL from "../../shared/hooks/useOptionURL";
import { getItem } from "../../shared/utils";
import Image from "../../shared/Image";
import TextBlock from "../../shared/TextBlock";
import H1 from "../../shared/H1";
import LayoutsBook from "../layouts/LayoutsBook";

import allAlliedCultures from "../data";

import strategies_icon from "../../../images/allied-cultures/strategies/icon_unitstat_movementspeed.webp";
import layout_1_sector_1 from "../../../images/allied-cultures/strategies/layout_1_sector_1.webp";
import layout_1_sector_2 from "../../../images/allied-cultures/strategies/layout_1_sector_2.webp";
import layout_1_sector_3 from "../../../images/allied-cultures/strategies/layout_1_sector_3.webp";
import layout_2_sector_1 from "../../../images/allied-cultures/strategies/layout_2_sector_1.webp";
import layout_2_sector_2 from "../../../images/allied-cultures/strategies/layout_2_sector_2.webp";
import layout_2_sector_3 from "../../../images/allied-cultures/strategies/layout_2_sector_3.webp";
import layout_3_sector_1 from "../../../images/allied-cultures/strategies/layout_3_sector_1.webp";
import layout_3_sector_2 from "../../../images/allied-cultures/strategies/layout_3_sector_2.webp";
import layout_3_sector_3 from "../../../images/allied-cultures/strategies/layout_3_sector_3.webp";
import layout_4_sector_1 from "../../../images/allied-cultures/strategies/layout_4_sector_1.webp";
import layout_4_sector_2 from "../../../images/allied-cultures/strategies/layout_4_sector_2.webp";
import layout_4_sector_3 from "../../../images/allied-cultures/strategies/layout_4_sector_3.webp";
import sketch_1 from "../../../images/allied-cultures/strategies/sketch_1.webp";
import sketch_2 from "../../../images/allied-cultures/strategies/sketch_2.webp";
import sketch_3 from "../../../images/allied-cultures/strategies/sketch_3.webp";
import sketch_4 from "../../../images/allied-cultures/strategies/sketch_4.webp";
import sketch_5 from "../../../images/allied-cultures/strategies/sketch_5.webp";

const Strategies = (props) => {

    const basePath = "allied-cultures";
    const pageName = "Allied Cultures - Strategies";
    
    const getAlliedCulture = () => {
        return allAlliedCultures.find(oneAlliedCulture => oneAlliedCulture.id == props.selectedAlliedCulture);
    }

    const alliedCulture = getAlliedCulture();

    const egyptCultures = ["egypt_cheops_pyramid", "egypt_great_sphinx", "egypt_abu_simbel"];
    const chinaCultures = ["china_terracotta_army", "china_great_wall", "china_forbidden_city"];
  
    return (
      <>
        <Prologue imageSrc={strategies_icon} alt={"Strategies"} maxHeight={"65px"} >
          This is an overview of strategies and layouts to help you efficiently progress in the Allied Culture and rank among the top players in the Leagues.
          Follow the flow from top to bottom, as the layout of your Allied City will evolve over time.
        </Prologue>
        
        <SectionDivider />

            <H1 center={true}>Strategies & Layouts</H1>

            <Image src={alliedCulture?.image} alt="" spacing={true} maxHeight={'150px'}/>

            {
                egyptCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        No content available at the moment.

                    </TextBlock>
                ) : chinaCultures.includes(alliedCulture.id) ? (
                    <TextBlock>
                        When the Allied Culture event begins, you should keep the following goals in mind:

                        <ul>
                            <li>Build as many Small Houses as possible to produce a lot of Wu Zhu {getItem("wu_zhu")} and replace them with Medium Houses later to obtain more Workers {getItem("china_worker")}</li>
                            <li>Find the shortest way to Kaolin Quarries, as they will produce a highly demanded Kaolin {getItem("kaolin")} later in the event</li>
                            <li>On your way to Kaolin Quarries, unlock almost all the available Moth Glades</li>
                            <li>Sell the first Medium House required by the questline as soon as you complete the quest</li>
                            <li>Prioritize finishing the research tree before leveling your workshops</li>
                            <li>Short productions are more effective than long ones, so the shorter you choose, the faster you will progress</li>
                            <li>This guide will help you compete with Gold League players by maximizing the effectiveness of your city. To achieve that, you still need to play regularly of course</li>
                        </ul>

                        In the picture below, you can find the sketch of the China city right at the beginning:

                        <Image src={sketch_1} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Your first goal should be to upgrade the World Wonder to level 7, in order to obtain the necessary expansions required to reach the second bridge. At level 7, you will have
                        11 expansions available in total. As soon as you unlock any of them, start placing it right away to create the path shown below.

                        <Image src={sketch_2} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        During this process, spam the free space with Small Houses
                        and build one of each of the following production buildings: Rice Farm, Thread Processor, Silk Workshop. Keep all production buildings at level 1, while focusing on leveling up Small Houses as high as possible.<br/><br/>

                        As you can see, with this number of expansions, you will be able to reach the first Koaolin Quarry. Also, do not forget to construct the bridges on your way as soon as you get close to them!
                        The layout below will show you the current state:

                        <LayoutsBook header={"Layout 1"} images={[layout_1_sector_1,layout_1_sector_2,layout_1_sector_3]} />

                        Keep in mind - when at any point you unlock the 'Dedicated Workforce' technology in research, continue researching technologies only in the top branch. The goal is to unlock Small House and Kaolin Quarry upgrades first, so
                        do not research 'Iron Plough' technology before you research 'Urban Management'.<br/><br/>
                        
                        In the meantime, you need to unlock more expansions and for that you will need to upgrade the World Wonder to level 13. To keep leveling the World Wonder efficiently, it's time to upgrade your Rice Farm, Thread Processor and Silk Workshop
                        buildings to level 2. After you reach level 13, start placing the new expansions as follows:

                        <Image src={sketch_3} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        All Kaolin Quarries are now available (start constructing and upgrading them!) and your World Wonder is at level 13. Your focus now is to complete the research tree and in the meantime,
                        add more production buildings into your city. In total, you should now have 3x Thread Processor, 2x Silk Workshop and 3x Rice Farm.
                        Suggested layout for this state is below:

                        <LayoutsBook header={"Layout 2"} images={[layout_2_sector_1,layout_2_sector_2,layout_2_sector_3]} />

                        Keep upgrading Small Houses to level 5. When your World Wonder reach level 17 and you get new expansions, place them as follows:

                        <Image src={sketch_4} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        Fill this space with more production buildings, so that you have 4x Thread Processor and 3x Silk Workshop. Also add more Rice Farms. Add these buildings by replacing Small Houses,
                        but only after you've completed the research tree. Suggested layout for this state:

                        <LayoutsBook header={"Layout 3"} images={[layout_3_sector_1,layout_3_sector_2,layout_3_sector_3]} />

                        The reason why you can remove most of the Small Houses after you finish teh research tree is that you won't need so much Wu Zhu {getItem("wu_zhu")} anymore. Rearrange the city so that you include Clay Processors
                        and Porcelain Workshops. Some of the removed Small Houses replace with Medium Houses, which provide more Workers {getItem("china_worker")} per tile. It's sufficient to keep them at level 1.
                        When you reach level 24, unlock the following expansions:

                        <Image src={sketch_5} alt="" roundedCorners={false} spacing={true} maxHeight={'300px'}/>

                        After you own this last set of free expansions, you can utilize the following effective layout:

                        <LayoutsBook header={"Layout 4"} images={[layout_4_sector_1,layout_4_sector_2,layout_4_sector_3]} />

                        This layout includes in total 8x Rice Farm, 4x Thread Processor, 3x Silk Workshop, 6x Clay Processor and 2x Porcelain Workshop (all at level 6). You can maintain this setup until the end of the event,
                        or in the later stages, you may choose to add more Clay Processors and Porcelain Workshops at the expense of Thread Processors and Silk Workshops, if porcelain becomes your limiting resource in the final phases of the event.

                    </TextBlock>
                ) : null
            }
      </>
    );
}

export default Strategies;