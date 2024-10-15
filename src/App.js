import { HashRouter, Routes, Route} from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./pages/HomePage";
import CampaignPage from "./pages/CampaignPage";
import HeroesPage from "./pages/HeroesPage";
import TreasureHuntPage from "./pages/TreasureHuntPage";
import AlliedCulturesPage from "./pages/AlliedCulturesPage";
import ResourcesPage from "./pages/ResourcesPage";
import SeasonsPage from "./pages/SeasonsPage";
import EventsPage from "./pages/EventsPage";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import { createPathFromParameters } from "./components/shared/utils";
import ReactGA from "react-ga4";

import layoutHome from "./components/home/sectionsDefinition";
import layoutCampaign from "./components/campaign/sectionsDefinition";
import layoutHeroes from "./components/heroes/sectionsDefinition";
import layoutAlliedCultures from "./components/allied-cultures/sectionsDefinition";
import layoutTreasureHunt from "./components/treasure-hunt/sectionsDefinition";
import layoutResources from "./components/resources/sectionsDefinition";
import layoutSeasons from "./components/seasons/sectionsDefinition";
import layoutEvents from "./components/events/sectionsDefinition";

const App = () => {

	ReactGA.initialize("G-TH20891YX2");

	useEffect(() => {
		document.title = "Heroes of History - Atlas";
	}, []);
	
	return <HashRouter>
		<Routes>
			<Route path="/" element={ <SharedLayout /> }>

				{
					layoutHome.tabs.map( (homeTab) => {
						return <Route key={homeTab.id} path={`${homeTab.url}`} element={ homeTab.element || <HomePage tab={layoutHome.tabs[0]}/> }/>
					})
				}

				{/*<Route path={`${layoutCampaign.page}`} element={ <CampaignPage tab={layoutCampaign.tabs[0]}/> } />*/}
				{
					layoutCampaign.tabs.map( (campaignTab) => {
						return ( <>
							<Route key={campaignTab.id} path={createPathFromParameters(layoutCampaign.page, campaignTab.url)} element={ <CampaignPage tab={campaignTab}/> || <CampaignPage tab={layoutCampaign.tabs[0]}/> }/>
							{campaignTab.dynamicSegments.map( (dynamicSegment) => {
								return <Route path={createPathFromParameters(layoutCampaign.page, campaignTab.url, dynamicSegment)} element={ <CampaignPage tab={campaignTab} />} />
							})}
						</>
						)
					})
				}

				{
					layoutHeroes.tabs.map( (heroTab) => {
						return ( <>
							<Route key={heroTab.id} path={createPathFromParameters(layoutHeroes.page, heroTab.url)} element={ <HeroesPage tab={heroTab}/> || <HeroesPage tab={layoutHeroes.tabs[0]}/> }/>
							{heroTab.dynamicSegments.map( (dynamicSegment) => {
								return <Route path={createPathFromParameters(layoutHeroes.page, heroTab.url, dynamicSegment)} element={ <HeroesPage tab={heroTab} />} />
							})}
						</>
						)
					})
				}

				{
					layoutTreasureHunt.tabs.map( (treasureHuntTab) => {
						return ( <>
							<Route key={treasureHuntTab.id} path={createPathFromParameters(layoutTreasureHunt.page, treasureHuntTab.url)} element={ <TreasureHuntPage tab={treasureHuntTab}/> || <TreasureHuntPage tab={layoutTreasureHunt.tabs[0]}/> }/>
							{treasureHuntTab.dynamicSegments.map( (dynamicSegment) => {
								return <Route path={createPathFromParameters(layoutTreasureHunt.page, treasureHuntTab.url, dynamicSegment)} element={ <TreasureHuntPage tab={treasureHuntTab} />} />
							})}
						</>
						)
					})
				}

				{
					layoutAlliedCultures.tabs.map( (alliedCultureTab) => {
						return ( <>
							<Route key={alliedCultureTab.id} path={createPathFromParameters(layoutAlliedCultures.page, alliedCultureTab.url)} element={ <AlliedCulturesPage tab={alliedCultureTab}/> || <AlliedCulturesPage tab={layoutAlliedCultures.tabs[0]}/> }/>
							{alliedCultureTab.dynamicSegments.map( (dynamicSegment) => {
								return <Route path={createPathFromParameters(layoutAlliedCultures.page, alliedCultureTab.url, dynamicSegment)} element={ <AlliedCulturesPage tab={alliedCultureTab} />} />
							})}
						</>
						)
					})
				}

				{
					layoutResources.tabs.map( (resourcesTab) => {
						return ( <>
							<Route key={resourcesTab.id} path={createPathFromParameters(layoutResources.page, resourcesTab.url)} element={ <ResourcesPage tab={resourcesTab}/> || <ResourcesPage tab={layoutResources.tabs[0]}/> }/>
							{resourcesTab.dynamicSegments.map( (dynamicSegment) => {
								return <Route path={createPathFromParameters(layoutResources.page, resourcesTab.url, dynamicSegment)} element={ <ResourcesPage tab={resourcesTab} />} />
							})}
						</>
						)
					})
				}

				{
					layoutSeasons.tabs.map( (seasonTab) => {
						return ( <>
							<Route key={seasonTab.id} path={createPathFromParameters(layoutSeasons.page, seasonTab.url)} element={ <SeasonsPage tab={seasonTab}/> || <SeasonsPage tab={layoutSeasons.tabs[0]}/> }/>
							{seasonTab.dynamicSegments.map( (dynamicSegment) => {
								return <Route path={createPathFromParameters(layoutSeasons.page, seasonTab.url, dynamicSegment)} element={ <SeasonsPage tab={seasonTab} />} />
							})}
						</>
						)
					})
				}

				{
					layoutEvents.tabs.map( (eventTab) => {
						return ( <>
							<Route key={eventTab.id} path={createPathFromParameters(layoutEvents.page, eventTab.url)} element={ <EventsPage tab={eventTab}/> || <EventsPage tab={layoutEvents.tabs[0]}/> }/>
							{eventTab.dynamicSegments.map( (dynamicSegment) => {
								return <Route path={createPathFromParameters(layoutEvents.page, eventTab.url, dynamicSegment)} element={ <EventsPage tab={eventTab} />} />
							})}
						</>
						)
					})
				}
				
				<Route path="*" element={ <Error /> }/>
			</Route>
		</Routes>
	</HashRouter>
}

export default App;
//<Route path="/events/:movieId" element={ <OneMovie />} />
