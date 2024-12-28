"use client";

import { useEffect } from "react";
import Container from "@/src/components/container/Container";
import layoutHeroes from "../sectionsDefinition";
import Intro from "./intro/Intro";
import { allHeroes } from "../data";
import { useTabHandler } from "@/src/components/tabs/useTabHandler";
import { useRouter } from "next/navigation";
import { updateMeta } from "@/src/shared-resources/utils/utils";

const HeroPage = ({ params }) => {
    if (JSON.parse(params.value) === null) {
        return null;
    }
    const { heroId } = JSON.parse(params.value);
    const basePath = "heroes";

    const selectedTab = useTabHandler(layoutHeroes);

    let filteredHeroes = [];
    if (typeof window !== "undefined") {
        const storedHeroIds = JSON.parse(localStorage.getItem('filteredHeroes') || '[]');
        filteredHeroes = storedHeroIds.map(heroId => allHeroes.find(hero => hero.id === heroId)).filter(Boolean);
    }

    const hero = allHeroes.find((oneHero) => oneHero.id === heroId);

    useEffect(() => {
        updateMeta("Heroes", selectedTab, basePath);
    }, [selectedTab]);

    const router = useRouter();

    useEffect(() => {
        if (!hero) {
        router.replace(`/${basePath}`);
        }
    }, [hero, router]);

    if (!hero) {
        return null;
    }

    const heroName = hero.name;

    const pageName = (
        <span>
        <a href={`/${basePath}`} className="text-link-white">Heroes</a> &gt; {heroName}
        </span>
    );

    const renderSelectedTab = () => {
        switch (selectedTab.url) {
        default:
            return <Intro heroId={heroId} filteredHeroes={filteredHeroes} />;
        }
    };

    return (
        <>
            <head>
                <title>Heroes | Wiki</title>
                <meta 
                    name="description" 
                    content="Discover all the heroes in the game. Find their abilities, upgrade costs, ascension materials and much more!" 
                />
            </head>
            <Container basePath={basePath} tabs={layoutHeroes.tabs} pageName={pageName}>
            {renderSelectedTab()}
            </Container>
        </>
    );
};

export default HeroPage;
