import Container from "../components/shared/Container";

import { useParams } from "react-router-dom";

import layoutTreasureHunt from "../components/treasure-hunt/sectionsDefinition";
import Intro from "../components/treasure-hunt/intro/Intro";
import Encounters from "../components/treasure-hunt/encounters/Encounters";
import treasureHuntData from "../components/treasure-hunt/data";
import useOptionURL from "../components/shared/hooks/useOptionURL";
import SelectBox from "../components/shared/SelectBox";
import { Link } from "react-router-dom";

const TreasureHuntPage = (props) => {

    const basePath = "treasure-hunt";

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Treasure Hunt</Link> &gt; {props.tab.name}
        </span>
    ) : "Treasure Hunt";

    const options = treasureHuntData.map((oneDifficulty) => {
        return {value: oneDifficulty.id, label: `${oneDifficulty.name}`, image: `${oneDifficulty.icon}`}
    });

    const { selectedOption, handleOptionChange } = useOptionURL(options, "id");

    const renderSelectedTab = () => {
        switch (props.tab.url) {
            case "encounters":
                return <Encounters tab={props.tab} />
            default:
                return <Intro tab={props.tab} />;
        }
    };

    return <Container basePath={basePath} tabs={layoutTreasureHunt.tabs} pageName={pageName} selectBox={
        <SelectBox
            options={options}
            width={"400px"}
            height={"32px"}
            color={"#EFEADA"}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
            className="custom-selectbox"
        />
    }>
        {renderSelectedTab()}
    </Container>
}

export default TreasureHuntPage;