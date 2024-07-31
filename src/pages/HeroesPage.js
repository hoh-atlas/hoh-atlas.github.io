import Container from "../components/shared/Container";
import { useParams, Link } from "react-router-dom";
import layoutHeroes from "../components/heroes/sectionsDefinition";
import Intro from "../components/heroes/intro/Intro";
import Heroes from "../components/heroes/heroes/Heroes";
import { allHeroes } from "../components/heroes/data";

const HeroesPage = (props) => {
    const basePath = "heroes";
    const { heroId } = useParams();

    const hero = allHeroes.find(oneHero => oneHero.id == heroId);
    const heroName = hero ? hero.name : "";

    const pageName = heroName ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Heroes</Link> &gt; {heroName}
        </span>
    ) : "Heroes";

    const renderSelectedTab = () => {
        switch (props.tab.url) {
            case "guide":
                return <Heroes tab={props.tab} />
            default:
                return <Intro tab={props.tab} heroId={heroId} />;
        }
    };

    return (
        <Container basePath={basePath} tabs={layoutHeroes.tabs} pageName={pageName}>
            {renderSelectedTab()}
        </Container>
    );
}

export default HeroesPage;
