import Container from "../components/shared/Container";

import layoutHome from "../components/home/sectionsDefinition";
import Intro from "../components/home/intro/Intro";
import { Link } from "react-router-dom";

const HomePage = (props) => {

    const basePath = "";

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Campaign</Link> &gt; {props.tab.name}
        </span>
    ) : "Heroes of History - Atlas";

    const renderSelectedTab = () => {
        switch (props.tab.url) {
            default:
                return <Intro tab={props.tab} />;
        }
    };

    return <Container basePath={basePath} tabs={layoutHome.tabs} pageName={pageName}>
        {renderSelectedTab()}
    </Container>
}

export default HomePage;