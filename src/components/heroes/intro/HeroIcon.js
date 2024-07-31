import "./HeroIcon.css";
import Image from "../../shared/Image";
import { Link } from "react-router-dom";

import layoutHeroes from "../sectionsDefinition";
import { createPathFromParameters } from "../../shared/utils";

const HeroIcon = (props) => {

    return (
        <Link to={createPathFromParameters(layoutHeroes.page, props.tab.url, props.hero.id)} key={props.hero.id} className="text-link hero-icon-container">
            <Image src={props.hero.icon ? props.hero.icon : "https://i.ibb.co/h1tWDst/Unit-Unknown.png"} alt="" inline={false} maxWidth={'100px'} />
            <span>{props.hero.name}</span>
        </Link>
    );
}

export default HeroIcon;
