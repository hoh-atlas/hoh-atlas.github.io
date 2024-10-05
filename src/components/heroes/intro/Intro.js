import "./Intro.css";
import Image from "../../shared/Image";
import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import H1 from "../../shared/H1";
import { allHeroes, heroClassNames, unitNames, colorNames, positionNames, attackTypeNames } from "../data";
import HeroIcon from "./HeroIcon";
import OneHero from "./OneHero";
import MultiSelectBox from "../../shared/MultiSelectBox";
import SearchBox from "../../shared/SearchBox";
import resources from "../../shared/data/resources";
import { useState, useEffect } from "react";

import cleopatra from "../../../images/heroes/intro/tutorial-host-cleopatra.webp";

const Intro = (props) => {
    const heroId = props.heroId;
    const [showFilters, setShowFilters] = useState(false);

    const sortedHeroes = allHeroes.slice().sort((a, b) => a.name.localeCompare(b.name));

    const classOptions = [...new Set(allHeroes.map(hero => hero.heroClass).filter(heroClass => heroClass))].map(heroClass => ({
        value: heroClass,
        label: heroClassNames[heroClass],
    }));

    const unitOptions = [...new Set(allHeroes.map(hero => hero.unit).filter(unit => unit))].map(unit => ({
        value: unit,
        label: unitNames[unit],
    }));

    const crestColorOptions = [...new Set(allHeroes.flatMap(hero =>
        hero.ascension ? Object.values(hero.ascension).flatMap(levels =>
            levels.flatMap(resource => 
                resources.find((dbResource) => dbResource.id === resource.resource && dbResource.category === 'crests_colors') ? resource.resource : []
            )
        ) : []
    ))].map(crestColor => ({
        value: crestColor,
        label: resources.find((dbResource) => dbResource.id === crestColor).name,
        image: resources.find((dbResource) => dbResource.id === crestColor).img,
    }));

    const crestFactionOptions = [...new Set(allHeroes.flatMap(hero =>
        hero.ascension ? Object.values(hero.ascension).flatMap(levels =>
            levels.flatMap(resource =>
                resources.find((dbResource) => dbResource.id === resource.resource && dbResource.category === 'crests_factions') ? resource.resource : []
            )
        ) : []
    ))].map(crestFaction => ({
        value: crestFaction,
        label: resources.find((dbResource) => dbResource.id === crestFaction).name,
    }));

    const colorOptions = [...new Set(allHeroes.map(hero => hero.color).filter(color => color))].map(color => ({
        value: color,
        label: colorNames[color],
    }));

    const ascensionMaterialOptions = [...new Set(allHeroes.flatMap(hero =>
        hero.ascension ? Object.values(hero.ascension).flatMap(levels =>
            levels.flatMap(resource =>
                resources.find((dbResource) => dbResource.id === resource.resource && dbResource.category === 'ascension_materials') ? resource.resource : []
            )
        ) : []
    ))].map(ascensionMaterial => ({
        value: ascensionMaterial,
        label: resources.find((dbResource) => dbResource.id === ascensionMaterial).name,
        image: resources.find((dbResource) => dbResource.id === ascensionMaterial).img,
    }));

    const positionOptions = [...new Set(allHeroes.map(hero => hero.position).filter(position => position))].map(position => ({
        value: position,
        label: positionNames[position],
    }));

    const attackTypeOptions = [...new Set(allHeroes.flatMap(hero => hero.attackType).filter(attackType => attackType))].map(attackType => ({
        value: attackType,
        label: attackTypeNames[attackType],
    }));    

    const [selectedClasses, setSelectedClasses] = useState([]);
    const [selectedUnits, setSelectedUnits] = useState([]);
    const [selectedCrestColors, setSelectedCrestColors] = useState([]);
    const [selectedCrestFactions, setSelectedCrestFactions] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedAscensionMaterials, setSelectedAscensionMaterials] = useState([]);
    const [selectedPositions, setSelectedPositions] = useState([]);
    const [selectedAttackTypes, setSelectedAttackTypes] = useState([]);
    const [searchedName, setSearchedName] = useState('');

    const updateUrlParams = (selectedClasses, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedAttackTypes) => {
        const urlParams = new URLSearchParams();
        selectedClasses?.forEach(classOption => {
            urlParams.append('class', classOption.value);
        });
        selectedUnits?.forEach(unitOption => {
            urlParams.append('unit', unitOption.value);
        });
        selectedCrestColors?.forEach(crestColorOption => {
            urlParams.append('crestColor', crestColorOption.value);
        });
        selectedCrestFactions?.forEach(crestFactionOption => {
            urlParams.append('crestFaction', crestFactionOption.value);
        });
        selectedColors?.forEach(colorOption => {
            urlParams.append('color', colorOption.value);
        });
        selectedAscensionMaterials?.forEach(ascensionMaterialOption => {
            urlParams.append('ascensionMaterial', ascensionMaterialOption.value);
        });
        selectedPositions?.forEach(positionOption => {
            urlParams.append('position', positionOption.value);
        });
        selectedAttackTypes?.forEach(attackTypeOption => {
            urlParams.append('attackType', attackTypeOption.value);
        });
    
        const hasFilters = selectedClasses?.length > 0 || selectedUnits?.length > 0 || selectedCrestColors?.length > 0 || selectedCrestFactions?.length > 0 || selectedColors?.length > 0 || selectedAscensionMaterials?.length > 0
            || selectedPositions?.length > 0 || selectedAttackTypes?.length > 0;
    
        const newUrl = hasFilters ? `${window.location.hash.split('?')[0]}?${urlParams.toString()}` : window.location.hash.split('?')[0];
        window.history.pushState({ path: newUrl }, '', newUrl);
    };

    const handleClassChange = (selectedOptions) => {
        setSelectedClasses(selectedOptions);
        updateUrlParams(selectedOptions, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedAttackTypes);
    };

    const handleUnitChange = (selectedOptions) => {
        setSelectedUnits(selectedOptions);
        updateUrlParams(selectedClasses, selectedOptions, selectedCrestColors, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedAttackTypes);
    };

    const handleCrestColorChange = (selectedOptions) => {
        setSelectedCrestColors(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedOptions, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedAttackTypes);
    };

    const handleCrestFactionChange = (selectedOptions) => {
        setSelectedCrestFactions(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedCrestColors, selectedOptions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedAttackTypes);
    };

    const handleColorChange = (selectedOptions) => {
        setSelectedColors(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedOptions, selectedAscensionMaterials, selectedPositions, selectedAttackTypes)
    }

    const handleAscensionMaterialChange = (selectedOptions) => {
        setSelectedAscensionMaterials(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedColors, selectedOptions, selectedPositions, selectedAttackTypes)
    }

    const handlePositionChange = (selectedOptions) => {
        setSelectedPositions(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedOptions, selectedAttackTypes);
    }

    const handleAttackTypeChange = (selectedOptions) => {
        setSelectedAttackTypes(selectedOptions);
        updateUrlParams(selectedClasses, selectedUnits, selectedCrestColors, selectedCrestFactions, selectedColors, selectedAscensionMaterials, selectedPositions, selectedOptions);
    }

    const handleSearch = (name) => {
        setSearchedName(name);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
        const classParams = urlParams.getAll('class');
        const unitParams = urlParams.getAll('unit');
        const crestColorParams = urlParams.getAll('crestColor');
        const crestFactionParams = urlParams.getAll('crestFaction');
        const colorParams = urlParams.getAll('color');
        const ascensionMaterialParams = urlParams.getAll('ascensionMaterial');
        const positionParams = urlParams.getAll('position');
        const attackTypeParams = urlParams.getAll('position');

        const foundClassOptions = classOptions.filter(option => classParams.includes(option.value));
        setSelectedClasses(foundClassOptions);

        const foundUnitOptions = unitOptions.filter(option => unitParams.includes(option.value));
        setSelectedUnits(foundUnitOptions);

        const foundCrestColorOptions = crestColorOptions.filter(option => crestColorParams.includes(option.value));
        setSelectedCrestColors(foundCrestColorOptions);

        const foundCrestFactionOptions = crestFactionOptions.filter(option => crestFactionParams.includes(option.value));
        setSelectedCrestFactions(foundCrestFactionOptions);

        const foundColorOptions = colorOptions.filter(option => colorParams.includes(option.value));
        setSelectedColors(foundColorOptions);

        const foundAscensionMaterialOptions = ascensionMaterialOptions.filter(option => ascensionMaterialParams.includes(option.value));
        setSelectedAscensionMaterials(foundAscensionMaterialOptions);

        const foundPositionOptions = positionOptions.filter(option => positionParams.includes(option.value));
        setSelectedPositions(foundPositionOptions);

        const foundAttackTypeOptions = attackTypeOptions.filter(option => attackTypeParams.includes(option.value));
        setSelectedAttackTypes(foundAttackTypeOptions);
    }, []);

    const getFilteredHeroes = () => {
        let filteredHeroes = sortedHeroes;
        
        if (selectedClasses.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero => selectedClasses.some(option => option.value === hero.heroClass));
        }

        if (selectedUnits.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero => selectedUnits.some(option => option.value === hero.unit));
        }

        if (selectedCrestColors.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero =>
                hero.ascension && Object.values(hero.ascension)
                    .flatMap(level => level)
                    .some(item =>
                        selectedCrestColors.some(crest =>
                            crest.value === item.resource
                        )
                    )
            );
        }

        if (selectedCrestFactions.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero =>
                hero.ascension && Object.values(hero.ascension)
                    .flatMap(level => level)
                    .some(item =>
                        selectedCrestFactions.some(crest =>
                            crest.value === item.resource
                        )
                    )
            );
        }

        if (selectedColors.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero => selectedColors.some(option => option.value === hero.color));
        }

        if (selectedAscensionMaterials.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero =>
                hero.ascension && Object.values(hero.ascension)
                    .flatMap(level => level)
                    .some(item =>
                        selectedAscensionMaterials.some(ascensionMaterial =>
                            ascensionMaterial.value === item.resource
                        )
                    )
            );
        }

        if (selectedPositions.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero => selectedPositions.some(option => option.value === hero.position));
        }

        if (selectedAttackTypes.length > 0) {
            filteredHeroes = filteredHeroes.filter(hero => 
                hero.attackType && Array.isArray(hero.attackType) &&
                selectedAttackTypes.some(option => 
                    hero.attackType.includes(option.value)
                )
            );
        }            

        filteredHeroes = filteredHeroes.filter((hero) =>
            hero.name.toLowerCase().includes(searchedName.toLowerCase())
        );

        return filteredHeroes;
    };

    const toggleFiltersVisibility = () => {
        setShowFilters(!showFilters);
    };

    const filteredHeroes = getFilteredHeroes();

    if (heroId) {
        return <OneHero tab={props.tab} id={heroId} filteredHeroes={filteredHeroes}/>
    }

    return (
        <>
            <Prologue imageSrc={cleopatra} alt={"Event"} maxHeight={"65px"}>
            Use the filters to refine your search and find heroes that match your preferred criteria. Whether you seek valiant knights, cunning rogues, powerful mages, or wise sages, you'll find them all here. 
            Filter by hero class, unit type, crest colors, and factions to tailor your adventure to your liking.
            </Prologue>
            <SectionDivider />
            <div className="select-boxes-container">
                <div className="select-box-column">
                    <H1 center={true}>Types</H1>
                    <MultiSelectBox
                    options={classOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedClasses}
                    onOptionsChange={handleClassChange}
                    placeholder="Hero Class"
                    style={{marginBottom: '10px'}}
                    />
                    <MultiSelectBox
                    options={unitOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedUnits}
                    onOptionsChange={handleUnitChange}
                    placeholder="Unit Type"
                    style={{marginBottom: '10px'}}
                    />
                    <MultiSelectBox
                    options={colorOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedColors}
                    onOptionsChange={handleColorChange}
                    placeholder="Color Type"
                    style={{marginBottom: '10px'}}
                    />
                </div>
                <div className="select-box-column">
                    <H1 center={true}>Materials</H1>
                    <MultiSelectBox
                    options={crestColorOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedCrestColors}
                    onOptionsChange={handleCrestColorChange}
                    placeholder="Crest Colors"
                    style={{marginBottom: '10px'}}
                    />
                    <MultiSelectBox
                    options={ascensionMaterialOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedAscensionMaterials}
                    onOptionsChange={handleAscensionMaterialChange}
                    placeholder="Ascension Materials"
                    style={{marginBottom: '10px'}}
                    />
                </div>
            </div>

            <div className="btn-container">
                <button onClick={toggleFiltersVisibility} className="btn">
                    {showFilters ? 'Hide More Filters' : 'Show More Filters'}
                </button>
            </div>

            {showFilters && (<div className="select-boxes-container">
                <div className="select-box-column">
                    <MultiSelectBox
                    options={positionOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedPositions}
                    onOptionsChange={handlePositionChange}
                    placeholder="Recommended Position"
                    style={{marginBottom: '10px'}}
                    />
                </div>
                <div className="select-box-column">
                    <MultiSelectBox
                    options={attackTypeOptions}
                    width={"80%"}
                    mobileWidth={"100%"}
                    height={"40px"}
                    color={"#F6F3EB"}
                    selectedOptions={selectedAttackTypes}
                    onOptionsChange={handleAttackTypeChange}
                    placeholder="Attack Type"
                    style={{marginBottom: '10px'}}
                    />
                </div>
            </div>)}
            {/* Maybe divide Attack Type into 2 categories: Damage Type and Tactical Type. Damage Type will have only Area Damage and Single Target, rest will be in Tactical Type. Tactical Type will be a new Select Box. */}

            <SectionDivider />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "15px", marginBottom: "15px" }}>
            </div>

            <div className="hero-category">
                <H1 center={true}>5-star heroes</H1>
                <div className="hero-grid">
                    {filteredHeroes
                        .filter(oneHero => oneHero.stars === 5)
                        .map(oneHero => (
                            <HeroIcon key={oneHero.id} tab={props.tab} hero={oneHero} />
                        ))}
                </div>
            </div>

            <div className="hero-category">
                <H1 center={true}>4-star heroes</H1>
                <div className="hero-grid">
                    {filteredHeroes
                        .filter(oneHero => oneHero.stars === 4)
                        .map(oneHero => (
                            <HeroIcon key={oneHero.id} tab={props.tab} hero={oneHero} />
                        ))}
                </div>
            </div>

            <div className="hero-category">
                <H1 center={true}>3-star heroes</H1>
                <div className="hero-grid">
                    {filteredHeroes
                        .filter(oneHero => oneHero.stars === 3)
                        .map(oneHero => (
                            <HeroIcon key={oneHero.id} tab={props.tab} hero={oneHero} />
                        ))}
                </div>
            </div>

            <div className="hero-category">
                <H1 center={true}>2-star heroes</H1>
                <div className="hero-grid">
                    {filteredHeroes
                        .filter(oneHero => oneHero.stars === 2)
                        .map(oneHero => (
                            <HeroIcon key={oneHero.id} tab={props.tab} hero={oneHero} />
                        ))}
                </div>
            </div>
        </>
    );
}

export default Intro;
