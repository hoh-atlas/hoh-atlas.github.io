"use client";
import layoutCampaign from "./sectionsDefinition";
import Container from "@/src/components/container/Container";
import Intro from "./intro/Intro";
import Provinces from "./provinces/Provinces";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import { updateMeta } from "@/src/shared-resources/utils/utils";
import { useEffect } from "react";

const CampaignPage = () => {

  	const basePath = "campaign";

  	const selectedTab = useTabHandler(layoutCampaign);

	useEffect(() => {
		updateMeta("Campaign", selectedTab, basePath);
	}, [selectedTab]);

	const pageName = selectedTab.url ? (
        <span>
            <a href={`/${basePath}`} className="text-link-white">Campaign</a> &gt; {selectedTab.name}
        </span>
    ) : "Campaign";

  	const renderSelectedTab = () => {
    	switch (selectedTab.url) {
			case "provinces":
				return <Provinces />;
			default:
				return <Intro />;
    	}
  	};

  	return (
		<>
			<head>
				<title>Campaign | Wiki</title>
				<meta 
					name="description" 
					content="Discover the full campaign of the game. Find all the provinces, rewards and much more!" 
				/>
			</head>
			<Container basePath={basePath} tabs={layoutCampaign.tabs} selectedTab={selectedTab} pageName={pageName}>
				{renderSelectedTab()}
			</Container>
		</>
  	);
};

export default CampaignPage;
