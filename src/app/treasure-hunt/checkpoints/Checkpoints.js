import "./Checkpoints.css";

import Prologue from "@/src/components/prologue/Prologue";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import Image from "@/src/components/image/Image";
import { checkpoints, difficulties } from "../data";
import TableCheckpoints from "./TableCheckpoints";
import H1 from "@/src/components/h1/H1";
import SelectBox from "@/src/components/select-box/SelectBox";
import { useState, useEffect } from "react";

const Checkpoints = (props) => {

    const heroId = props.heroId;

    const options = difficulties.map((oneDifficulty) => {
        return {value: oneDifficulty.id, label: `${oneDifficulty.id+1} - ${oneDifficulty.name}`, image: oneDifficulty.icon}
    });

    const [selectedOption, setSelectedOption] = useState(options[0]);

    useEffect(() => {
            const hashParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?') + 1));
            const selectedOptionParam = hashParams.get('difficulty');
            if (selectedOptionParam) {
                const foundOption = options.find(option => option.value == selectedOptionParam);
                if (foundOption) {
                    setSelectedOption(foundOption);
                }
            }
        }, []);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        const newUrl = `/treasure-hunt#checkpoints?difficulty=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    return <>
        <Prologue imageSrc={"/treasure-hunt/checkpoints/icon_mystery_chest_gold.webp"} alt={"Checkpoints"} maxHeight={"65px"} >
            Alliance Checkpoints are the main sequence of rewards in Alliance Treasure Hunt. Together with your alliance members, you collect points for each completed encounter.
            The number of points you receive depends on your current difficulty level. The higher the difficulty, the more you contribute to the shared rewards and the farther you can progress!<br/>
            Note: You can click on the customizations to preview their details!
        </Prologue>
        <SectionDivider />
        <H1 center={true}>Checkpoints</H1>

        <SelectBox
            options={options}
            width={"50%"}
            color={"#f2f1ed"}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
        />

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", marginBottom: "15px" }}>
            <Image src={"/treasure-hunt/checkpoints/icon_ath_encounter.webp"} maxHeight={'100px'}/>
        </div>
        <TableCheckpoints data={checkpoints} />
    </>
}

export default Checkpoints;