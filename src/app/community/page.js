"use client";
import layoutCommunity from "./sectionsDefinition";
import Container from "@/src/components/container/Container";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import Intro from "./intro/Intro";
import VideoCreators from "./video-creators/VideoCreators";
import PrivacyPolicy from "./privacy-policy/PrivacyPolicy";
import { updateMeta } from "@/src/shared-resources/utils/utils";
import { useEffect } from "react";

const CommunityPage = () => {

  	const basePath = "community";

  	const selectedTab = useTabHandler(layoutCommunity);

	useEffect(() => {
		updateMeta("Community", selectedTab, basePath);
	}, [selectedTab]);

	const pageName = selectedTab.url ? (
        <span>
            <a href={`/${basePath}`} className="text-link-white">Community</a> &gt; {selectedTab.name}
        </span>
    ) : "Community";

  	const renderSelectedTab = () => {
    	switch (selectedTab.url) {
            case "privacy-policy":
                return <PrivacyPolicy />;
            case "video-creators":
                return <VideoCreators />;
			default:
				return <Intro />;
    	}
  	};

  	return (
		<>
			<head>
				<title>Community | Heroes of History Wiki</title>
				<meta 
					name="description" 
					content="Learn how to get in touch with thousands of other players of Heroes of History!" 
				/>
			</head>
			<Container basePath={basePath} tabs={layoutCommunity.tabs} selectedTab={selectedTab} pageName={pageName}>
				{renderSelectedTab()}
			</Container>
		</>
  	);
};

export default CommunityPage;
