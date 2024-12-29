import "./Provinces.css";

import { useState, useEffect } from "react";
import allProvinces from "../data";
import Prologue from "@/src/components/prologue/Prologue";
import SelectBox from "@/src/components/select-box/SelectBox";
import TableProvince from "./TableProvince";
import SectionDivider from "@/src/components/section-divider/SectionDivider";
import TableFinalRewards from "./TableFinalRewards";
import encounters from "../_data/encounters";

const Provinces = () => {

    const optionsColors = {"Panganea":"#76cc66", "DesertDelta":"#d1b077", "EasternValley":"#48805f", "VolcanicJungle":"#669829", "FrozenFjord":"#489bb7"};

    const options = allProvinces.map((oneProvince) => {
        return {value: oneProvince.id, label: `${oneProvince.id} - ${oneProvince.name}`, dotColor: optionsColors[oneProvince?.location]}
    });

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const getProvince = (option) => {
        return allProvinces.find(oneProvince => oneProvince.id == option.value);
    }

    function getProvinceInLocationOrder(provinceId) {
        const province = allProvinces.find(p => p.id === provinceId);
        if (province) {
            const location = province.location;
            const provincesInSameLocation = allProvinces.filter(p => p.location === location);
            return provincesInSameLocation.findIndex(p => p.id === provinceId) + 1;
        } else {
            return -1;
        }
    }

    const provinceEncounters = encounters.filter((oneEncounter) => {
        const selectedProvince = getProvince(selectedOption);
        const provinceOrder = getProvinceInLocationOrder(selectedProvince.id, allProvinces);
        const match = oneEncounter.id.match(/(\d+)/);
        const encounterOrder = match ? parseInt(match[1], 10) : null;
        return oneEncounter.id.includes(selectedProvince.location) && encounterOrder === provinceOrder;
    }).sort((a, b) => {
        const matchA = a.id.match(/(\d+)$/);
        const matchB = b.id.match(/(\d+)$/);
        const orderA = matchA ? parseInt(matchA[1], 10) : null;
        const orderB = matchB ? parseInt(matchB[1], 10) : null;
        return orderA - orderB;
    });

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(window.location.hash.indexOf('?') + 1));
        const selectedOptionParam = hashParams.get('region');
        if (selectedOptionParam) {
            const foundOption = options.find(option => option.value == selectedOptionParam);
            if (foundOption) {
                setSelectedOption(foundOption);
            }
        }
    }, []);

    const handleOptionChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        const newUrl = `/campaign#provinces?region=${selectedOption.value}`;
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    return <>
        <Prologue imageSrc={"/campaign/provinces/icon_expansion_city_capital_land.webp"} alt={"Provinces"} maxHeight={"65px"}>
            This is an overview of all Regions and their possible rewards.
        </Prologue>

        <SelectBox
            options={options}
            width={"50%"}
            color={"#f2f1ed"}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
        />

        <SectionDivider/>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", marginBottom: "15px" }}>
            <img src={getProvince(selectedOption)?.img} style={{ maxHeight: '200px', maxWidth: '90%' }} />
        </div>

        <TableProvince province={getProvince(selectedOption)} encounters={provinceEncounters} />

        <TableFinalRewards province={getProvince(selectedOption)} orderInLocation={getProvinceInLocationOrder(getProvince(selectedOption).id)} />
    </>
}

export default Provinces;