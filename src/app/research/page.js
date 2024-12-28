"use client";
import layoutResearch from "./sectionsDefinition";
import Container from "@/src/components/container/Container";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import Intro from "./intro/Intro";
import { updateMeta } from "@/src/shared-resources/utils/utils";
import { useEffect } from "react";

const ResearchPage = () => {

  	const basePath = "research";

  	const selectedTab = useTabHandler(layoutResearch);

	useEffect(() => {
		updateMeta("Research", selectedTab, basePath);
	}, [selectedTab]);

	const pageName = selectedTab.url ? (
        <span>
            <a href={`/${basePath}`} className="text-link-white">Research</a> &gt; {selectedTab.name}
        </span>
    ) : "Research";

  	const renderSelectedTab = () => {
    	switch (selectedTab.url) {
			default:
				return <Intro />;
    	}
  	};

  	return (
		<>
			<head>
				<title>Research | Wiki</title>
				<meta 
					name="description" 
					content="Explore the research calculator! Calculate the remaining costs for your current era in the game!" 
				/>
			</head>
			<Container basePath={basePath} tabs={layoutResearch.tabs} selectedTab={selectedTab} pageName={pageName}>
				{renderSelectedTab()}
			</Container>
		</>
  	);
};

export default ResearchPage;
