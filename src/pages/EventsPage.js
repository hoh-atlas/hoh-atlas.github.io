import { useState, useEffect } from "react";

import Container from "../components/shared/Container";
import SelectBox from "../components/shared/SelectBox";
import useOptionURL from "../components/shared/hooks/useOptionURL";
import Quests from "../components/events/quests/Quests";
import { Link } from "react-router-dom";

import layoutEvents from "../components/events/sectionsDefinition";
import allEvents from "../components/events/data";
import Intro from "../components/events/intro/Intro";
import WorldWonder from "../components/events/worldwonder/WorldWonder";
import Strategies from "../components/events/strategies/Strategies";
import Buildings from "../components/events/buildings/Buildings";
import Layouts from "../components/events/layouts/Layouts";

const EventsPage = (props) => {

    const basePath = "events";

    const pageName = props.tab.url ? (
        <span>
            <Link to={`/${basePath}`} className="text-link-white">Events</Link> &gt; {props.tab.name}
        </span>
    ) : "Events";
  
    const options = allEvents.map((oneEvent) => {
        return {value: oneEvent.id, label: `${oneEvent.name}`, image: oneEvent.image}
    });

    const { selectedOption, handleOptionChange } = useOptionURL(options, "id");

    const selectedEvent = selectedOption.value;

    const renderSelectedTab = () => {
      switch (props.tab.url) {
          case "quests":
              return <Quests tab={props.tab} selectedEvent={selectedEvent} />;
          case "buildings":
              return <Buildings tab={props.tab} selectedEvent={selectedEvent} />;
          case "world-wonder":
            return <WorldWonder tab={props.tab} selectedEvent={selectedEvent} />;
          case "strategies":
            return <Strategies tab={props.tab} selectedEvent={selectedEvent} />;
          case "layouts":
            return <Layouts tab={props.tab} selectedEvent={selectedEvent} />;
          default:
              return <Intro tab={props.tab} />;
      }
  };
  
    return (
      <Container basePath={basePath} tabs={layoutEvents.tabs} pageName={pageName} selectBox={
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
    );
  };
  
  export default EventsPage;