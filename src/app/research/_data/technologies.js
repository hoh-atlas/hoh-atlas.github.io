const technologies = [
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_LinenShirt",
        "name": "Linen Shirt",
        "age": "MinoanEra",
        "column": 2,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_LinenShirt",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Township"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-11",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-18400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-145",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-60",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "linen_shirt"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "MinoanEra"
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "tailor",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Compost",
        "name": "Compost",
        "age": "EarlyRome",
        "column": 9,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Compost",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_RationsEfficiency"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-26",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-99000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-1005",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-430",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "emerald",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Farm_Domestic_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_Arenas",
        "name": "Battle Grounds",
        "age": "MinoanEra",
        "column": 3,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_Arenas",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_MarbleBust"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-8",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-15500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-30",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-110",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "minoan_frescoes",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Infantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_HerbalAromas",
        "name": "Herbal Aromas",
        "age": "ClassicGreece",
        "column": 8,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_HerbalAromas",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_SwiftReload"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_AmbushTechniques"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Temples"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_BulwarkFormation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-20",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-51100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-750",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-320",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "greek_lyre",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Farm_Rural_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Toga",
        "name": "Toga",
        "age": "ClassicGreece",
        "column": 2,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Toga",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Agora"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-17",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-35100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-275",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-115",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "hematite",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "toga"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "ClassicGreece"
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "tailor",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_ByzantineSteeds",
        "name": "Byzantine Steeds",
        "age": "ByzantineEra",
        "column": 7,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_ByzantineSteeds",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_TheodosianWalls"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Polyculture"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-31",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-300000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-2430",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-1040",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Cavalry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_ImprovedReins",
        "name": "Improved Reins",
        "age": "AgeOfTheFranks",
        "column": 6,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_ImprovedReins",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Spades"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_BannerStandardization"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_BallisticInnovation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-58",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-457000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-4510",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-1940",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-19",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Cavalry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_DomesticatedGoats",
        "name": "Domesticated Goats",
        "age": "StoneAge",
        "column": 12,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_DomesticatedGoats",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_TheWheel"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_SacredSites"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-2",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-190",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Farm_Domestic_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_StoneAge_Capital_FruitTree_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_BronzeArtilleryGears",
        "name": "Bronze Artillery Gears",
        "age": "BronzeAge",
        "column": 12,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_BronzeArtilleryGears",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_BuildingTools"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_SilentDraw"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_BronzePlating"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-6850",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-80",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-35",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Siege_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_FruitTree_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_RuralCommunity",
        "name": "Rural Community",
        "age": "StoneAge",
        "column": 12,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_RuralCommunity",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_TheWheel"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_SacredSites"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-2",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-220",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amber",
                            "amount": "-1",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_Castillos",
        "name": "Castillos",
        "age": "IberianEra",
        "column": 1,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_Castillos",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Transhumance"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-53",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-816000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-2230",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-960",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Home_Small_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Farm_Rural_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_CultureSite_Moderate_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                            "baseData": {
                                "id": "Technology_IberianEra_Castillos_TransitionReward_1"
                            },
                            "target": "Building_IberianEra_City_CityHall_1",
                            "duration": "0s",
                            "start": {},
                            "complete": {},
                            "sourceGroup": "cityHall",
                            "cities": [
                                "City_Capital"
                            ],
                            "usesConstructionSlots": true
                        },
                        {
                            "@type": "type.googleapis.com/UnlockAgeRewardDTO",
                            "baseData": {
                                "id": "IberianEra",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Special_HeroAcademy_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_IberianEra_Castillos_SpecialReward01"
                            },
                            "resourceDefinitionId": "resource.coins",
                            "amount": "1500000"
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_IberianEra_Castillos_SpecialReward02"
                            },
                            "resourceDefinitionId": "resource.food",
                            "amount": "2500000"
                        },
                        {
                            "@type": "type.googleapis.com/HeroTreasureHuntUnlockDifficultyRewardDTO",
                            "baseData": {
                                "id": "Technology_IberianEra_Castillos_ATH_Difficulty_Unlock_1",
                                "hidden": true
                            },
                            "treasureHuntGroup": "TreasureHunt",
                            "unlockedDifficulty": 6
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_VillaUrbana",
        "name": "Villa Urbana",
        "age": "RomanEmpire",
        "column": 9,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_VillaUrbana",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_ImprovedStirrups"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-24",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-210000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-1300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-560",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Home_Small_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_ImprovedFletching",
        "name": "Improved Fletching",
        "age": "ClassicGreece",
        "column": 9,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_ImprovedFletching",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_HerbalAromas"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-15",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-53200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-740",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-235",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Ranged_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_Tailor",
        "name": "Tailor",
        "age": "BronzeAge",
        "column": 8,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_Tailor",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_EventCities"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-3400",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "wool"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "BronzeAge"
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "tailor",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_CouchedSpearTechnique",
        "name": "Couched Spear Technique",
        "age": "KingdomOfSicily",
        "column": 7,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_CouchedSpearTechnique",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Orchards"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-64",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1170000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-2020",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-870",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Cavalry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_TacticalHurling",
        "name": "Tactical Hurling",
        "age": "AgeOfTheFranks",
        "column": 6,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_TacticalHurling",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_BallisticInnovation"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_LinguaFranca"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-59",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-343000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-3740",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-1600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-19",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Ranged_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_WarMachines",
        "name": "War Machines",
        "age": "EarlyRome",
        "column": 6,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_WarMachines",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Marketplaces"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-23",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-75300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-1330",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-570",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "emerald",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Siege_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_BuildingTools",
        "name": "Building Knowledge",
        "age": "BronzeAge",
        "column": 11,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_BuildingTools",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_MantletShields"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-5",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-2450",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-60",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-25",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Home_Small_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_FruitTree_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_LinguaFranca",
        "name": "Lingua Franca",
        "age": "AgeOfTheFranks",
        "column": 5,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_LinguaFranca",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Caballarii"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-68",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-742000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-3310",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-1420",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-12",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Home_Small_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_LeatherLappets",
        "name": "Leather Lappets",
        "age": "IberianEra",
        "column": 12,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_LeatherLappets",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_SafetyMechanisms"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-63",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1240000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-3720",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-1590",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iberian_torc_necklace",
                            "amount": "-17",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Infantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_Almogavars",
        "name": "Almogavars",
        "age": "IberianEra",
        "column": 4,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_Almogavars",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_WaxSeal"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-48",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-979000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-2310",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-990",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Infantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_Masonry",
        "name": "Masonry",
        "age": "MinoanEra",
        "column": 4,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_Masonry",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_CompositeBow"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Arenas"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-12",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-20100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-95",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-185",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Home_Average_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "averageHome",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_CultureSite_Moderate_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "moderateCulture",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "premiumHome",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Insulae",
        "name": "Insulae",
        "age": "EarlyRome",
        "column": 3,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Insulae",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Siege"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-17",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-55900",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-780",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-335",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Home_Average_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_CultureSite_Moderate_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_ReinforcedHandles",
        "name": "Reinforced Handles",
        "age": "AgeOfTheFranks",
        "column": 10,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_ReinforcedHandles",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_SiegeEngineTactics"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-58",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-828000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-5280",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-2270",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-16",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Ranged_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_VegetableGardens",
        "name": "Vegetable Gardens",
        "age": "KingdomOfSicily",
        "column": 4,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_VegetableGardens",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Melites"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-59",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-999000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-2680",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-1150",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Farm_Rural_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Jovians",
        "name": "Jovians",
        "age": "ByzantineEra",
        "column": 4,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Jovians",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_SaracenArchers"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Catapult"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-36",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-343000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-980",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-420",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_HeavyInfantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Goatherds",
        "name": "Goatherds",
        "age": "AgeOfTheFranks",
        "column": 10,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Goatherds",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Scythes"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-59",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-571000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-5780",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-2480",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-16",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Farm_Domestic_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_AnimalHusbandry",
        "name": "Animal Husbandry",
        "age": "MinoanEra",
        "column": 8,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_AnimalHusbandry",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Screws"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-11",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-17600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-505",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-215",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "jasper",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Farm_Domestic_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "domesticFarm",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_CavePaintings",
        "name": "Cave Paintings",
        "age": "StoneAge",
        "column": 5,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_CavePaintings",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_Firemaker"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-1",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_CultureSite_Moderate_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_CultureSite_Premium_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "premiumCulture",
                                    "amount": 2
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "moderateCulture",
                                    "amount": 2
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_BronzePlating",
        "name": "Bronze Plating",
        "age": "BronzeAge",
        "column": 11,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_BronzePlating",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_MantletShields"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-6",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-4400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-60",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-25",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_HeavyInfantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_GoldOre_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_SilverRing",
        "name": "Silver Ring",
        "age": "ClassicGreece",
        "column": 2,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_SilverRing",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Agora"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-15",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-27700",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-135",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-60",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "hematite",
                            "amount": "-1",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "silver_ring"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "ClassicGreece"
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "artisan",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_FlightPathAnalysis",
        "name": "Flight Path Analysis",
        "age": "ByzantineEra",
        "column": 9,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_FlightPathAnalysis",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_CounterCavalryTactics"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_GregorianCalendar"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-37",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-300000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-1960",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-840",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Ranged_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_CeramicArmorcraft",
        "name": "Ceramic Armorcraft",
        "age": "MinoanEra",
        "column": 12,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_CeramicArmorcraft",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_LionheartedInfantry"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Administration"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-10",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-14200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-230",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "jasper",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_HeavyInfantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_BabyBoom",
        "name": "Baby Boom",
        "age": "StoneAge",
        "column": 10,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_BabyBoom",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_BearCult"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-120",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Home_Small_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_LionheartedInfantry",
        "name": "Lionhearted Infantry",
        "age": "MinoanEra",
        "column": 11,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_LionheartedInfantry",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Winch"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-10",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-22200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-330",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-140",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Infantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Trebuchets",
        "name": "Trebuchets",
        "age": "FeudalAge",
        "column": 3,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Trebuchets",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Barrel"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-45",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-866000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-3700",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-1590",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Siege_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_Forums",
        "name": "Forums",
        "age": "RomanEmpire",
        "column": 7,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_Forums",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_VillaRustica"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-26",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-136000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-1610",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-690",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "roman_cameo_ring",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Home_Small_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_CultureSite_Compact_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_TerrainMastery",
        "name": "Terrain Mastery",
        "age": "KingdomOfSicily",
        "column": 10,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_TerrainMastery",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_CloseFormationTactics"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-63",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1020000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-3530",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-1510",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-21",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Cavalry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Wingguards",
        "name": "Wing Guards",
        "age": "FeudalAge",
        "column": 10,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Wingguards",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_TimberFraming"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_SheepHerds"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-54",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-604000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-2070",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-890",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-15",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Infantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_ReinforcedFootwear",
        "name": "Reinforced Footwear",
        "age": "BronzeAge",
        "column": 9,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_ReinforcedFootwear",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_StoneMason"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-5",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-5150",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-65",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Infantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_Conservation",
        "name": "Conservation",
        "age": "KingdomOfSicily",
        "column": 10,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_Conservation",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_TacticalChambers"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-51",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-849000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-2100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-900",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-23",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Farm_Rural_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Concrete",
        "name": "Concrete",
        "age": "ClassicGreece",
        "column": 11,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Concrete",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_PhilosophicalDebates"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_AdvancedProjectiles"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-15",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-57500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-615",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-265",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "hematite",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Home_Average_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_Firemaker",
        "name": "Firemaker",
        "age": "StoneAge",
        "column": 4,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_Firemaker",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_SpearFighting"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-2",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Home_Small_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_UrbsAeterna",
        "name": "Urbs Aeterna",
        "age": "RomanEmpire",
        "column": 1,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_UrbsAeterna",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_SpearThrowMastery"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-33",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-170000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-1365",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-585",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Home_Small_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Farm_Rural_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Special_HeroAcademy_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "heroAcademy",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                            "baseData": {
                                "id": "Technology_RomanEmpire_UrbsAeterna_TransitionReward_1"
                            },
                            "target": "Building_RomanEmpire_City_CityHall_1",
                            "duration": "0s",
                            "start": {},
                            "complete": {},
                            "sourceGroup": "cityHall",
                            "cities": [
                                "City_Capital"
                            ],
                            "usesConstructionSlots": true
                        },
                        {
                            "@type": "type.googleapis.com/UnlockAgeRewardDTO",
                            "baseData": {
                                "id": "RomanEmpire",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_RomanEmpire_UrbsAeterna_SpecialReward01"
                            },
                            "resourceDefinitionId": "resource.coins",
                            "amount": "1000000"
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_RomanEmpire_UrbsAeterna_SpecialReward02"
                            },
                            "resourceDefinitionId": "resource.food",
                            "amount": "700000"
                        },
                        {
                            "@type": "type.googleapis.com/HeroTreasureHuntUnlockDifficultyRewardDTO",
                            "baseData": {
                                "id": "Technology_RomanEmpire_UrbsAeterna_ATH_Difficulty_Unlock_1",
                                "hidden": true
                            },
                            "treasureHuntGroup": "TreasureHunt",
                            "unlockedDifficulty": 2
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_OraclesGuidance",
        "name": "Oracles Guidance",
        "age": "MinoanEra",
        "column": 8,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_OraclesGuidance",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_GlyphicWarding"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-9",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-12100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-230",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-100",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Siege_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_Siege",
        "name": "Minoan Sling Launcher",
        "age": "MinoanEra",
        "column": 4,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_Siege",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Shepherding"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-8",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-18800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-175",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-125",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Siege_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Knights",
        "name": "Knights",
        "age": "FeudalAge",
        "column": 3,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Knights",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Herbs"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-45",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-504000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-2740",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-1180",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Cavalry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_ImprovedSails",
        "name": "Improved Sails",
        "age": "KingdomOfSicily",
        "column": 10,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_ImprovedSails",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Pavillons"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-45",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1150000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-3730",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-1600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-15",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Farm_Domestic_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_LightweightShields",
        "name": "Lightweight Shields",
        "age": "IberianEra",
        "column": 9,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_LightweightShields",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_DonkeyHerds"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-58",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1210000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-2970",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1280",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Infantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_StoneTablet",
        "name": "Stone Tablet",
        "age": "EarlyRome",
        "column": 3,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_StoneTablet",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Siege"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-26",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-66700",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-1105",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-475",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "emerald",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "stone_tablet"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "EarlyRome"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_Winch",
        "name": "Winch",
        "age": "MinoanEra",
        "column": 10,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_Winch",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Columns"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_DivinatoryStrategy"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-10",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-18000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-355",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-150",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "minoan_frescoes",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Farm_Rural_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Farm_Domestic_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_TributumCapitis",
        "name": "Tributum Capitis",
        "age": "EarlyRome",
        "column": 7,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_TributumCapitis",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_SwordMastery"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-23",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-71000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-980",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-420",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "emerald",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Home_Average_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Farm_Domestic_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_TerrainMapping",
        "name": "Terrain Mapping",
        "age": "EarlyRome",
        "column": 11,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_TerrainMapping",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Domus"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-19",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-73200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-1230",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-525",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_HeavyInfantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_CenturionCommand",
        "name": "Centurion Command",
        "age": "RomanEmpire",
        "column": 9,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_CenturionCommand",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_CenturionsAim"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-29",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-194000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-960",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-410",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "roman_cameo_ring",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_HeavyInfantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_StrongerFrames",
        "name": "Stronger Frames",
        "age": "BronzeAge",
        "column": 15,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_StrongerFrames",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_AncestralValor"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Stakes"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-5",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-11600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-170",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-70",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Home_Average_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_FruitTree_1",
                            "amount": 2
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_HeavyCrossbowDesigns",
        "name": "Heavy Crossbow Designs",
        "age": "KingdomOfSicily",
        "column": 11,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_HeavyCrossbowDesigns",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_TerrainMastery"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_ImprovedSails"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Conservation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-51",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-650000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-2520",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1080",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-17",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Ranged_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_BasketWeaving",
        "name": "Basket Weaving",
        "age": "MinoanEra",
        "column": 6,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_BasketWeaving",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_HeroAcademy"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-13",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-20100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-410",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-175",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Home_Small_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_CultureSite_Compact_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "compactCulture",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Manorialism",
        "name": "Manorialism",
        "age": "FeudalAge",
        "column": 8,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Manorialism",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_BattlefieldArtillery"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-58",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-544000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-2070",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-890",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_CultureSite_Little_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_SocialChange",
        "name": "Social Change",
        "age": "BronzeAge",
        "column": 9,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_SocialChange",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_SacredStones"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-6",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-5300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-55",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Home_Average_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_CultureSite_Moderate_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_GoldOre_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_AlloyedArrowheads",
        "name": "Alloyed Arrowheads",
        "age": "RomanEmpire",
        "column": 5,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_AlloyedArrowheads",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Swinery"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Turmae"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Ballistas"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-32",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-120000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-1055",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-450",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "roman_cameo_ring",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Ranged_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Salt",
        "name": "Salt",
        "age": "AgeOfTheFranks",
        "column": 3,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Salt",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Cartwheel"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-61",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-585000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-1310",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-560",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "salt"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "AgeOfTheFranks"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Feudalism",
        "name": "Feudalism",
        "age": "FeudalAge",
        "column": 1,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Feudalism",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_BattleAxeMastery"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_LegesSalica"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-46",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-826000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-3030",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-1300",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Home_Small_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Farm_Rural_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Special_HeroAcademy_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "heroAcademy",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                            "baseData": {
                                "id": "Technology_FeudalAge_Feudalism_TransitionReward_1"
                            },
                            "target": "Building_FeudalAge_City_CityHall_1",
                            "duration": "0s",
                            "start": {},
                            "complete": {},
                            "sourceGroup": "cityHall",
                            "cities": [
                                "City_Capital"
                            ],
                            "usesConstructionSlots": true
                        },
                        {
                            "@type": "type.googleapis.com/UnlockAgeRewardDTO",
                            "baseData": {
                                "id": "FeudalAge",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_FeudalAge_Feudalism_SpecialReward01"
                            },
                            "resourceDefinitionId": "resource.coins",
                            "amount": "1500000"
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_FeudalAge_Feudalism_SpecialReward02"
                            },
                            "resourceDefinitionId": "resource.food",
                            "amount": "2000000"
                        },
                        {
                            "@type": "type.googleapis.com/HeroTreasureHuntUnlockDifficultyRewardDTO",
                            "baseData": {
                                "id": "Technology_FeudalAge_Feudalism_ATH_Difficulty_Unlock_1",
                                "hidden": true
                            },
                            "treasureHuntGroup": "TreasureHunt",
                            "unlockedDifficulty": 5
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_Orchards",
        "name": "Orchards",
        "age": "KingdomOfSicily",
        "column": 6,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_Orchards",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Windmill"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-58",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-874000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-2240",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-960",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_CultureSite_Moderate_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_ImprovedHeaterShield",
        "name": "Improved Heater Shield",
        "age": "KingdomOfSicily",
        "column": 12,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_ImprovedHeaterShield",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_HeavyCrossbowDesigns"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-40",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-924000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-4200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-1800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-17",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_HeavyInfantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_BronzeAutomata",
        "name": "Bronze Automata",
        "age": "MinoanEra",
        "column": 12,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_BronzeAutomata",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_CretanQuivers"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-8",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-17600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-245",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-105",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "jasper",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Siege_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Forquier",
        "name": "Forquier",
        "age": "ByzantineEra",
        "column": 5,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Forquier",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Trapezites"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-35",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-309000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-1470",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-630",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "byzantine_ewer",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Farm_Domestic_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_Jinete",
        "name": "Jinete",
        "age": "IberianEra",
        "column": 5,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_Jinete",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_OrderOfCalatrava"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-41",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-769000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-2380",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-1020",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Cavalry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_DomesticPigs",
        "name": "Domestic Pigs",
        "age": "ClassicGreece",
        "column": 3,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_DomesticPigs",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Toga"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-16",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-38300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-70",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-175",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Farm_Domestic_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_CultureSite_Moderate_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_RearLivestock",
        "name": "Rear Livestock",
        "age": "EarlyRome",
        "column": 5,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_RearLivestock",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Sewerage"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Velites"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-19",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-66700",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-955",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-410",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Farm_Domestic_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_PolearmManeuvers",
        "name": "Polearm Maneuvers",
        "age": "FeudalAge",
        "column": 12,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_PolearmManeuvers",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_SinewBacking"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_RidgeAndFurrow"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-63",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-685000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-3330",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-1430",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-17",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_HeavyInfantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_ArmoredPanels",
        "name": "Armored Panels",
        "age": "KingdomOfSicily",
        "column": 6,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_ArmoredPanels",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Windmill"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-46",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-725000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-2760",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-1180",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Siege_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_TimberFraming",
        "name": "Timber Framing",
        "age": "FeudalAge",
        "column": 9,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_TimberFraming",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_HalberdMastery"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Manorialism"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-56",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-826000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-2070",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-890",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-15",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Home_Small_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_FrancArchers",
        "name": "Franc-Axethrowers",
        "age": "AgeOfTheFranks",
        "column": 3,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_FrancArchers",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Cartwheel"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-64",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-600000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-1530",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-660",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Ranged_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_SpearThrowMastery",
        "name": "Spear Throw Mastery",
        "age": "EarlyRome",
        "column": 12,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_SpearThrowMastery",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Watchtowers"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_TerrainMapping"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_SoilConservation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-17",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-110000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-1130",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-485",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "etruscan_bronze_mirror",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Ranged_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_TenantFarming",
        "name": "Tenant Farming",
        "age": "RomanEmpire",
        "column": 6,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_TenantFarming",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_AlloyedArrowheads"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-29",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-185000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-990",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-425",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Farm_Rural_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_CultureSite_Little_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_Chariot",
        "name": "Chariot",
        "age": "BronzeAge",
        "column": 4,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_Chariot",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_AbilityTraining"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-4350",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lapis_lazuli",
                            "amount": "-1",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "ruralFarm",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_FruitTree_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_SpearFighting",
        "name": "Spear Fighting",
        "age": "StoneAge",
        "column": 3,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_SpearFighting",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_Cultivation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-1",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Barracks_Infantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "infantryBarracks",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_QuickReloadSystem",
        "name": "Quick Reload System",
        "age": "RomanEmpire",
        "column": 9,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_QuickReloadSystem",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_ImprovedStirrups"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_CenturionsAim"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-30",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-181000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-1055",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-450",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Siege_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_BannerStandardization",
        "name": "Banner Standardization",
        "age": "AgeOfTheFranks",
        "column": 5,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_BannerStandardization",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Aristocracy"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Skirmishers"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-42",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-471000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-1840",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-790",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_HeavyInfantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_FlankAssault",
        "name": "Flank Assault",
        "age": "ClassicGreece",
        "column": 9,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_FlankAssault",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_HerbalAromas"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-17",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-43600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-405",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-175",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Cavalry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_LanceMastery",
        "name": "Lance Mastery",
        "age": "EarlyRome",
        "column": 9,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_LanceMastery",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_SiegeEngineering"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_RomanProvidence"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-24",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-114000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-830",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-355",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Cavalry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_HeroAcademy",
        "name": "Hero Academy",
        "age": "MinoanEra",
        "column": 5,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_HeroAcademy",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_HeavyInfantry"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Masonry"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Siege"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-12",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-13800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-205",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-160",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "minoan_frescoes",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Special_HeroAcademy_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "heroAcademy",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockQuestlineRewardDTO",
                            "baseData": {
                                "id": "Questline_MinoanEra_HeroAcademy",
                                "hidden": true
                            }
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Hoplites",
        "name": "Hoplites",
        "age": "ClassicGreece",
        "column": 5,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Hoplites",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Psiloi"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-12",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-34100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-275",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-115",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_HeavyInfantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_MarbleBust",
        "name": "Marble Bust",
        "age": "MinoanEra",
        "column": 2,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_MarbleBust",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Township"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-11",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-18000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-55",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-25",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "minoan_frescoes",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "marble_bust"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "MinoanEra"
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "stoneMason",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Carpentry",
        "name": "Carpentry",
        "age": "ClassicGreece",
        "column": 3,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Carpentry",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Toga"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-14",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-29800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-60",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-240",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Home_Average_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_ShockCharges",
        "name": "Shock Charges",
        "age": "IberianEra",
        "column": 9,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_ShockCharges",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_DonkeyHerds"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-59",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-676000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-3270",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-1400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iberian_torc_necklace",
                            "amount": "-15",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Cavalry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Spades",
        "name": "Spades",
        "age": "AgeOfTheFranks",
        "column": 5,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Spades",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Aristocracy"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-58",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-628000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-3460",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-1480",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Farm_Rural_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_CretanQuivers",
        "name": "Cretan Quivers",
        "age": "MinoanEra",
        "column": 11,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_CretanQuivers",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Winch"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-11",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-23000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-355",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-155",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Ranged_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_Legionary",
        "name": "Legionary",
        "age": "RomanEmpire",
        "column": 2,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_Legionary",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_UrbsAeterna"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-30",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-132000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-1300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-560",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_HeavyInfantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_MantletShields",
        "name": "Mantlet Shields",
        "age": "BronzeAge",
        "column": 10,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_MantletShields",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_SocialChange"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_ReinforcedFootwear"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_FarmUtensils"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-8000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-35",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lapis_lazuli",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Siege_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_DonkeyHerds",
        "name": "Donkey Herds",
        "age": "IberianEra",
        "column": 8,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_DonkeyHerds",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_HorseshoeArches"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_LatchMechanism"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Eyeglasses"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_ShieldBoss"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-61",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-769000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-3940",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-1690",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iberian_torc_necklace",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Farm_Domestic_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_DomicalVault",
        "name": "Domical Vault",
        "age": "ByzantineEra",
        "column": 11,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_DomicalVault",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Mortar"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_MobilityInnovations"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-45",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-300000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-2940",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-1260",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-26",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Home_Average_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_SacredSites",
        "name": "Sacred Sites",
        "age": "StoneAge",
        "column": 11,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_SacredSites",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_BabyBoom"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-2",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-170",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "compactCulture",
                                    "amount": 2
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_CompositeBow",
        "name": "Composite Bow",
        "age": "MinoanEra",
        "column": 3,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_CompositeBow",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Stables"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-11",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-15000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-90",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-40",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Ranged_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_Agriculture",
        "name": "Agriculture",
        "age": "StoneAge",
        "column": 8,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_Agriculture",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_GoatPens"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-2",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Farm_Rural_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "ruralFarm",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "moderateCulture",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_PvP",
        "name": "Arena",
        "age": "BronzeAge",
        "column": 16,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_PvP",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_StrongerFrames"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_SmallHolding"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-2",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-6850",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-45",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockFeatureRewardDTO",
                            "feature": "UnlockableFeatureConstant_PVP",
                            "baseData": {}
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_Boar_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_SacredStones",
        "name": "Sacred Stones",
        "age": "BronzeAge",
        "column": 8,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_SacredStones",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_EventCities"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-5150",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-25",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_CultureSite_Compact_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "compactCulture",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Home_Average_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "averageHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_Goods_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_PilumPrecision",
        "name": "Pilum Precision",
        "age": "EarlyRome",
        "column": 7,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_PilumPrecision",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_SwordMastery"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-27",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-60200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-930",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "etruscan_bronze_mirror",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Ranged_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_VillaRustica",
        "name": "Villa Rustica",
        "age": "RomanEmpire",
        "column": 6,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_VillaRustica",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_AlloyedArrowheads"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-30",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-173000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-1210",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-520",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "roman_cameo_ring",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Home_Average_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Farm_Domestic_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_AdvancedProjectiles",
        "name": "Advanced Projectiles",
        "age": "ClassicGreece",
        "column": 10,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_AdvancedProjectiles",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_ImprovedFletching"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-15",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-56400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-680",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-295",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Siege_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_Melites",
        "name": "Melites",
        "age": "KingdomOfSicily",
        "column": 3,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_Melites",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_SiegeTower"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Wardrobe"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-53",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-899000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-1260",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-540",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Cavalry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_CrossgroinedVault",
        "name": "Crossgroined Vault",
        "age": "ByzantineEra",
        "column": 7,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_CrossgroinedVault",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_ImprovedLorica"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-32",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-343000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-1260",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-540",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "byzantine_ewer",
                            "amount": "-12",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Home_Average_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_DivinatoryStrategy",
        "name": "Divinatory Strategy",
        "age": "MinoanEra",
        "column": 9,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_DivinatoryStrategy",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_OraclesGuidance"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-9",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-17100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-280",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-120",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "jasper",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Cavalry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_PotteryWheel",
        "name": "Pottery Wheel",
        "age": "AgeOfTheFranks",
        "column": 8,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_PotteryWheel",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_ArmorAdaptation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-48",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-386000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-3980",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-1710",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-21",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Home_Average_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Villers",
        "name": "Villers",
        "age": "AgeOfTheFranks",
        "column": 3,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Villers",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Ink"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-41",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-414000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-1090",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-470",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-5",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Home_Average_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Farm_Domestic_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_Administration",
        "name": "Administration",
        "age": "MinoanEra",
        "column": 11,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_Administration",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Winch"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-12",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-20100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-420",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-180",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "jasper",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Home_Average_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_EquestrianArtistry",
        "name": "Equestrian Artistry",
        "age": "MinoanEra",
        "column": 6,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_EquestrianArtistry",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_HeroAcademy"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-11",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-19200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-355",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-150",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Cavalry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_UrbanCombatProwess",
        "name": "Urban Combat Prowess",
        "age": "AgeOfTheFranks",
        "column": 9,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_UrbanCombatProwess",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_ProductionBoom"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-64",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-714000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-3280",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-1410",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_HeavyInfantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_CenturionsAim",
        "name": "Centurions Aim",
        "age": "RomanEmpire",
        "column": 8,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_CenturionsAim",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_EnhancedTorsion"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_FieldMedicines"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-26",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-210000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-900",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-385",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "roman_cameo_ring",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Ranged_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_WarPaint",
        "name": "War Paint",
        "age": "BronzeAge",
        "column": 17,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_WarPaint",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_PvP"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-5",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-6100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-195",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-85",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_HeavyInfantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_GoldOre_1",
                            "amount": 2
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Siege",
        "name": "Javelin Catapult",
        "age": "EarlyRome",
        "column": 2,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Siege",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Municipium"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-26",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-81800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-730",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-310",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Siege_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_TribalSettlement",
        "name": "Tribal Settlement",
        "age": "StoneAge",
        "column": 1,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_TribalSettlement",
                "start": {
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-1",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Home_Small_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                            "baseData": {
                                "id": "Technology_StoneAge_TribalSettlement_TransitionReward_1"
                            },
                            "target": "Building_StoneAge_City_CityHall_1",
                            "duration": "0s",
                            "start": {},
                            "complete": {},
                            "sourceGroup": "cityHall",
                            "cities": [
                                "City_Capital"
                            ],
                            "usesConstructionSlots": true
                        },
                        {
                            "@type": "type.googleapis.com/UnlockAgeRewardDTO",
                            "baseData": {
                                "id": "StoneAge",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 3
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "premiumHome",
                                    "amount": 2
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "resource": "premium",
                            "amount": "50"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_OrderOfCalatrava",
        "name": "Order of Calatrava",
        "age": "IberianEra",
        "column": 4,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_OrderOfCalatrava",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_WaxSeal"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-61",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-932000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-2970",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1280",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_HeavyInfantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_WaxSeal",
        "name": "Wax Seal",
        "age": "IberianEra",
        "column": 3,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_WaxSeal",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Saffron"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Door"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-58",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-769000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-2530",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1090",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iberian_torc_necklace",
                            "amount": "-5",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "wax_seal"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "IberianEra"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_SoilConservation",
        "name": "Soil Conservation",
        "age": "EarlyRome",
        "column": 11,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_SoilConservation",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Domus"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-20",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-94700",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-830",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-355",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "emerald",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Farm_Rural_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_RepurposedRuins",
        "name": "Repurposed Ruins",
        "age": "FeudalAge",
        "column": 5,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_RepurposedRuins",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_DomesticSheep"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_MythsAndLegends"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-68",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-927000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-3180",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-1370",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Home_Small_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_CultureSite_Large_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_SiegeEngineering",
        "name": "Siege Engineering",
        "age": "EarlyRome",
        "column": 8,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_SiegeEngineering",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_MarksOfHistory"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-19",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-108000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-905",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-385",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "etruscan_bronze_mirror",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Siege_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Domus",
        "name": "Domus",
        "age": "EarlyRome",
        "column": 10,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Domus",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_LanceMastery"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Compost"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-23",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-116000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-1255",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-540",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "etruscan_bronze_mirror",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Home_Average_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_RationsEfficiency",
        "name": "Rations Efficiency",
        "age": "EarlyRome",
        "column": 8,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_RationsEfficiency",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_TributumCapitis"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_PilumPrecision"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-27",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-71000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-855",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-365",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "emerald",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Infantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_BraceMechanism",
        "name": "Brace Mechanism",
        "age": "IberianEra",
        "column": 9,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_BraceMechanism",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_DonkeyHerds"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-45",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1000000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1930",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-830",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-17",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Siege_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_HorseshoeArches",
        "name": "Horseshoe Arches",
        "age": "IberianEra",
        "column": 7,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_HorseshoeArches",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_DomesticatedDonkeys"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_OrangePlantation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-43",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1070000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-4010",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-1720",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Home_Average_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Hastati",
        "name": "Hastati",
        "age": "EarlyRome",
        "column": 3,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Hastati",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_GoldLaurel"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-24",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-73200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-655",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-280",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Infantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_CultureSite_Compact_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_Tome",
        "name": "Tome",
        "age": "KingdomOfSicily",
        "column": 2,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_Tome",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_SicilianVilletta"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-46",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-749000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-2310",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-990",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-5",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "tome"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "KingdomOfSicily"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_MarksOfHistory",
        "name": "Marks of History",
        "age": "EarlyRome",
        "column": 7,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_MarksOfHistory",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_WarMachines"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-27",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-105000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-655",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-280",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_CultureSite_Little_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_Pavillons",
        "name": "Pavillons",
        "age": "KingdomOfSicily",
        "column": 9,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_Pavillons",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_RefinedChainmailCoifs"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-51",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-575000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-2530",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1090",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Home_Average_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_Patios",
        "name": "Patios",
        "age": "IberianEra",
        "column": 6,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_Patios",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Jinete"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-63",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1030000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-3270",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-1400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_CultureSite_Large_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_SacredGroves",
        "name": "Sacred Groves",
        "age": "BronzeAge",
        "column": 5,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_SacredGroves",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Chariot"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-6",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-4750",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lapis_lazuli",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_CultureSite_Little_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "littleCulture",
                                    "amount": 2
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_Alliances",
        "name": "Alliances",
        "age": "BronzeAge",
        "column": 2,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_Alliances",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Village"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1500",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockFeatureRewardDTO",
                            "baseData": {}
                        },
                        {
                            "@type": "type.googleapis.com/UnlockFeatureRewardDTO",
                            "feature": "UnlockableFeatureConstant_TREASURE_HUNT",
                            "baseData": {}
                        },
                        {
                            "@type": "type.googleapis.com/UnlockQuestlineRewardDTO",
                            "baseData": {
                                "id": "Questline_Alliances_JoinAlliance",
                                "hidden": true
                            }
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_CircusMaximus",
        "name": "Circus Maximus",
        "age": "RomanEmpire",
        "column": 10,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_CircusMaximus",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_CenturionCommand"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-34",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-210000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-960",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-410",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_CultureSite_Large_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_ReinforcedShields",
        "name": "Reinforced Shields",
        "age": "ClassicGreece",
        "column": 10,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_ReinforcedShields",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_FlankAssault"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-19",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-37300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-690",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-215",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "hematite",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Infantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Watchtowers",
        "name": "Watchtowers",
        "age": "EarlyRome",
        "column": 11,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Watchtowers",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Domus"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-19",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-64500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-1280",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-550",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "emerald",
                            "amount": "-12",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_CultureSite_Large_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_HeavyDrawWeight",
        "name": "Heavy Draw Weight",
        "age": "FeudalAge",
        "column": 6,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_HeavyDrawWeight",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_RepurposedRuins"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-51",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-906000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-2960",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-1270",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-17",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Ranged_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_OrangePlantation",
        "name": "Orange Plantation",
        "age": "IberianEra",
        "column": 6,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_OrangePlantation",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Masia"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-66",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-932000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-2450",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-1050",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iberian_torc_necklace",
                            "amount": "-12",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Farm_Rural_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_ImprovedSaddles",
        "name": "Improved Saddles",
        "age": "ClassicGreece",
        "column": 6,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_ImprovedSaddles",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Hoplites"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-20",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-50000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-530",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-230",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "greek_lyre",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Cavalry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Aristocracy",
        "name": "Aristocracy",
        "age": "AgeOfTheFranks",
        "column": 4,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Aristocracy",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Villers"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-54",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-643000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-1370",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-590",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-12",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_CultureSite_Little_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_AdvancedFodder",
        "name": "Advanced Fodder",
        "age": "AgeOfTheFranks",
        "column": 8,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_AdvancedFodder",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_ArmorAdaptation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-63",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-700000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-4230",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-1820",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Farm_Domestic_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_Door",
        "name": "Door",
        "age": "IberianEra",
        "column": 2,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_Door",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Castillos"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-54",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-489000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-3640",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-1560",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "door"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "IberianEra"
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_CultureSite_Little_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Sewerage",
        "name": "Sewerage",
        "age": "EarlyRome",
        "column": 4,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Sewerage",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Insulae"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_StoneTablet"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-24",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-71000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-1080",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-465",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "emerald",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Farm_Rural_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_SiegeEngineTactics",
        "name": "Siege Engine Tactics",
        "age": "AgeOfTheFranks",
        "column": 9,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_SiegeEngineTactics",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_PotteryWheel"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-41",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-557000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-5180",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-2220",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-21",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Siege_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_BattlefieldArtillery",
        "name": "Battlefield Artillery",
        "age": "FeudalAge",
        "column": 7,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_BattlefieldArtillery",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_HeavyDrawWeight"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_OpenFieldSystem"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_PeakedRoofs"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_SocketLangets"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-61",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-665000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-3400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-1460",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Siege_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_AuxillaRiders",
        "name": "Auxilla Riders",
        "age": "EarlyRome",
        "column": 3,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_AuxillaRiders",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Tunic"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-23",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-55900",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-375",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "etruscan_bronze_mirror",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Cavalry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_Prosperity",
        "name": "Prosperity",
        "age": "BronzeAge",
        "column": 18,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_Prosperity",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_BronzeEffigy"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-9300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-195",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-85",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockFeatureRewardDTO",
                            "feature": "UnlockableFeatureConstant_SEASON_PASS",
                            "baseData": {}
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Marketplaces",
        "name": "Marketplaces",
        "age": "EarlyRome",
        "column": 5,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Marketplaces",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Triarii"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Sewerage"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-19",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-92500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-705",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "etruscan_bronze_mirror",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Home_Small_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_Pedites",
        "name": "Pedites",
        "age": "KingdomOfSicily",
        "column": 3,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_Pedites",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Chili"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Tome"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-43",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-899000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-1470",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-630",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Infantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_LegesSalica",
        "name": "Leges Salica",
        "age": "AgeOfTheFranks",
        "column": 11,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_LegesSalica",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Patrimony"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_ReinforcedHandles"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-59",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-757000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-4370",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-1870",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Home_Average_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Siege",
        "name": "Hellenic Bolt Thrower",
        "age": "ClassicGreece",
        "column": 5,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Siege",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Education"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-13",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-37300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-410",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-175",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "greek_lyre",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Siege_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Education",
        "name": "Education",
        "age": "ClassicGreece",
        "column": 4,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Education",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Toxotai"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_DomesticPigs"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-15",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-37300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-380",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-165",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_CultureSite_Compact_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_Eyeglasses",
        "name": "Eyeglasses",
        "age": "IberianEra",
        "column": 7,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_Eyeglasses",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Patios"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-66",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1260000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-2600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1120",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Home_Small_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Psiloi",
        "name": "Psiloi",
        "age": "ClassicGreece",
        "column": 4,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Psiloi",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Carpentry"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Cataphract"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-15",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-42600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-590",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-250",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "hematite",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Infantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_BronzeEffigy",
        "name": "Bronze Effigy",
        "age": "BronzeAge",
        "column": 17,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_BronzeEffigy",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_PvP"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-7",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-3800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-210",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-90",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "littleCulture",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_MythsAndLegends",
        "name": "Myths and Legends",
        "age": "FeudalAge",
        "column": 4,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_MythsAndLegends",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Axemen"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_KingsGuard"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-51",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-504000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-3770",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-1620",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Home_Average_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_CultureSite_Compact_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_DomedSanctuary",
        "name": "Domed Sanctuary",
        "age": "KingdomOfSicily",
        "column": 8,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_DomedSanctuary",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_CouchedSpearTechnique"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-64",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-899000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-1790",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-770",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Home_Small_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_GambesonPadding",
        "name": "Gambeson Padding",
        "age": "IberianEra",
        "column": 11,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_GambesonPadding",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Botany"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-56",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-606000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-2600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1120",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-21",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_HeavyInfantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_SafetyMechanisms",
        "name": "Safety Mechanisms",
        "age": "IberianEra",
        "column": 11,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_SafetyMechanisms",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Destillation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-64",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1210000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-2450",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-1050",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Ranged_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_AdvancedTrebuchet",
        "name": "Advanced Trebuchet",
        "age": "IberianEra",
        "column": 5,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_AdvancedTrebuchet",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Almogavars"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-54",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-816000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-4240",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-1820",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iberian_torc_necklace",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Siege_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Longbowmen",
        "name": "Longbowmen",
        "age": "FeudalAge",
        "column": 2,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Longbowmen",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Feudalism"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-43",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-745000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-3030",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-1300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Ranged_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Scythes",
        "name": "Scythes",
        "age": "AgeOfTheFranks",
        "column": 9,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Scythes",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_AdvancedFodder"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-51",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-800000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-5220",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-2240",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-21",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Farm_Rural_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Ink",
        "name": "Ink",
        "age": "AgeOfTheFranks",
        "column": 2,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Ink",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_RegnumFrancorum"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-51",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-371000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-1390",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "ink"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "AgeOfTheFranks"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_GoldLaurel",
        "name": "Gold Laurel",
        "age": "EarlyRome",
        "column": 2,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_GoldLaurel",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Municipium"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-18",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-83900",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-755",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-325",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "emerald",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "gold_laurel"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "EarlyRome"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_Shepherding",
        "name": "Shepherding",
        "age": "MinoanEra",
        "column": 3,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_Shepherding",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_LinenShirt"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-8",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-14200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-30",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-110",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "jasper",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Farm_Domestic_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_CultureSite_Little_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "littleCulture",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "premiumCulture",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_KingsGuard",
        "name": "Kings Guard",
        "age": "FeudalAge",
        "column": 3,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_KingsGuard",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Manuscript"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-54",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-987000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-2590",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-1110",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_HeavyInfantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_SiegeTower",
        "name": "Siege Tower",
        "age": "KingdomOfSicily",
        "column": 2,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_SiegeTower",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_SicilianVilletta"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-61",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-475000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-2610",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-1120",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Siege_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_Wardrobe",
        "name": "Wardrobe",
        "age": "KingdomOfSicily",
        "column": 2,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_Wardrobe",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_SicilianVilletta"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-53",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-999000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-2530",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1090",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "wardrobe"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "KingdomOfSicily"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_TacticalChambers",
        "name": "Tactical Chambers",
        "age": "KingdomOfSicily",
        "column": 9,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_TacticalChambers",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_RefinedTools"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-56",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-874000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-2940",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-1260",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Siege_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_WaterCistern",
        "name": "Water Cistern",
        "age": "ByzantineEra",
        "column": 11,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_WaterCistern",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_ShieldedSaddles"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Tillage"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-40",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-343000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-2700",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-1160",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Farm_Domestic_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_SwiftReload",
        "name": "Swift Reload",
        "age": "ClassicGreece",
        "column": 7,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_SwiftReload",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_WindPrediction"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-17",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-54300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-405",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-175",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Siege_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_Herding",
        "name": "Herding",
        "age": "StoneAge",
        "column": 10,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_Herding",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_BearCult"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-100",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Farm_Domestic_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "domesticFarm",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_StoneAge_Capital_Boar_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_SicilianVilletta",
        "name": "Sicilian Villetta",
        "age": "KingdomOfSicily",
        "column": 1,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_SicilianVilletta",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_ImprovedCrewArrangement"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_DonkeyFarms"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-56",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-525000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-2010",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-860",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Home_Small_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Farm_Domestic_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_CultureSite_Compact_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                            "baseData": {
                                "id": "Technology_KingdomOfSicily_SicilianVilletta_TransitionReward_1"
                            },
                            "target": "Building_KingdomOfSicily_City_CityHall_1",
                            "duration": "0s",
                            "start": {},
                            "complete": {},
                            "sourceGroup": "cityHall",
                            "cities": [
                                "City_Capital"
                            ],
                            "usesConstructionSlots": true
                        },
                        {
                            "@type": "type.googleapis.com/UnlockAgeRewardDTO",
                            "baseData": {
                                "id": "KingdomOfSicily",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Special_HeroAcademy_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_KingdomOfSicily_SicilianVilletta_SpecialReward01"
                            },
                            "resourceDefinitionId": "resource.coins",
                            "amount": "2000000"
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_KingdomOfSicily_SicilianVilletta_SpecialReward02"
                            },
                            "resourceDefinitionId": "resource.food",
                            "amount": "4000000"
                        },
                        {
                            "@type": "type.googleapis.com/HeroTreasureHuntUnlockDifficultyRewardDTO",
                            "baseData": {
                                "id": "Technology_KingdomOfSicily_SicilianVilletta_ATH_Difficulty_Unlock_1",
                                "hidden": true
                            },
                            "treasureHuntGroup": "TreasureHunt",
                            "unlockedDifficulty": 7
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_Monastries",
        "name": "Monastries",
        "age": "KingdomOfSicily",
        "column": 12,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_Monastries",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_HeavyCrossbowDesigns"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-64",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1370000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-2690",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-1150",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Home_Average_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_GoatPens",
        "name": "Goat Pens",
        "age": "StoneAge",
        "column": 7,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_GoatPens",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_Rifts"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-2",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-50",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockFeatureRewardDTO",
                            "feature": "UnlockableFeatureConstant_BATTLE_SPEED_UP",
                            "baseData": {}
                        },
                        {
                            "@type": "type.googleapis.com/UnlockFeatureRewardDTO",
                            "feature": "UnlockableFeatureConstant_AUTO_BATTLE",
                            "baseData": {}
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Farm_Domestic_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "domesticFarm",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_StoneAge_Capital_GoldOre_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_SpiceMerchant",
        "name": "Spice Merchant",
        "age": "ByzantineEra",
        "column": 2,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_SpiceMerchant",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Byzantium"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-46",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-309000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-1200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-520",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "pepper"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "ByzantineEra"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Scribe",
        "name": "Scribe",
        "age": "ByzantineEra",
        "column": 2,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Scribe",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Byzantium"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-40",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-240000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-1090",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-470",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "byzantine_ewer",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "parchment"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "ByzantineEra"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_PastureImprovement",
        "name": "Pasture Improvement",
        "age": "RomanEmpire",
        "column": 11,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_PastureImprovement",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_UnderfloorHeating"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_ImprovedGladius"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_CircusMaximus"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-31",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-165000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-1580",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-675",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "roman_cameo_ring",
                            "amount": "-17",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Farm_Domestic_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_Princeps",
        "name": "Princeps",
        "age": "RomanEmpire",
        "column": 3,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_Princeps",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Legionary"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-29",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-140000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-1055",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-450",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Infantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_MysticBattleChants",
        "name": "Mystic Battle Chants",
        "age": "MinoanEra",
        "column": 8,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_MysticBattleChants",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_HawkeyeVision"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-11",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-20500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-440",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-190",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_HeavyInfantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_SaracenArchers",
        "name": "Saracen Archers",
        "age": "ByzantineEra",
        "column": 3,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_SaracenArchers",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_SpiceMerchant"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-30",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-249000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-250",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-110",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-5",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Ranged_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_SwordMastery",
        "name": "Sword Mastery",
        "age": "EarlyRome",
        "column": 6,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_SwordMastery",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_RearLivestock"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-25",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-77500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-1355",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-580",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "etruscan_bronze_mirror",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Infantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_ImprovedRoofTiles",
        "name": "Improved Roof Tiles",
        "age": "KingdomOfSicily",
        "column": 4,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_ImprovedRoofTiles",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Pedites"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-43",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-774000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-1940",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-830",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Home_Average_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_BattleAxeMastery",
        "name": "Battle Axe Mastery",
        "age": "AgeOfTheFranks",
        "column": 11,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_BattleAxeMastery",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_EliteRiderTraining"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Goatherds"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-33",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-428000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-5460",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-2340",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-26",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Infantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_PrecisionArmguards",
        "name": "Precision Armguards",
        "age": "ByzantineEra",
        "column": 6,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_PrecisionArmguards",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Architekton"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-40",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-275000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-1540",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-660",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-12",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Ranged_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Barrel",
        "name": "Barrel",
        "age": "FeudalAge",
        "column": 2,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Barrel",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Feudalism"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-46",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-705000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-1850",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-790",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "barrel"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "FeudalAge"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_AbilityTraining",
        "name": "Ability Training",
        "age": "BronzeAge",
        "column": 3,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_AbilityTraining",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Alliances"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-5",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-2450",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Infantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockQuestlineRewardDTO",
                            "baseData": {
                                "id": "Questline_BronzeAge_AbilityTraining",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_GoldOre_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_WheeledPlough",
        "name": "Wheeled Plough",
        "age": "ByzantineEra",
        "column": 8,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_WheeledPlough",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_CrossgroinedVault"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_ByzantineSteeds"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-37",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-378000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-1910",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-820",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-15",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Farm_Domestic_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_Cape",
        "name": "Cape",
        "age": "RomanEmpire",
        "column": 2,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_Cape",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_UrbsAeterna"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-28",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-111000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-865",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-370",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "roman_cameo_ring",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "cape"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "RomanEmpire"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_Rifts",
        "name": "Einstein's Portal",
        "age": "StoneAge",
        "column": 6,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_Rifts",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_CavePaintings"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_Cavalry"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-2",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-60",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amber",
                            "amount": "-1",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockFeatureRewardDTO",
                            "feature": "UnlockableFeatureConstant_RIFT",
                            "baseData": {}
                        },
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "resource": "rift_token_common",
                            "amount": "1"
                        },
                        {
                            "@type": "type.googleapis.com/ResourceRewardDTO",
                            "baseData": {
                                "id": "Technology_StoneAge_Rifts_SpecialReward01",
                                "hidden": true
                            },
                            "resource": "resource.hero_xp",
                            "amount": "100"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_ImprovedLorica",
        "name": "Improved Lorica",
        "age": "ByzantineEra",
        "column": 6,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_ImprovedLorica",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_PendentiveDome"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-47",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-378000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-1640",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-700",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "byzantine_ewer",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Infantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_Turmae",
        "name": "Turmae",
        "age": "RomanEmpire",
        "column": 4,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_Turmae",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Goblet"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-24",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-181000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-1455",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-625",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Cavalry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_Piazza",
        "name": "Piazza",
        "age": "KingdomOfSicily",
        "column": 13,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_Piazza",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Monastries"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_ImprovedHeaterShield"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_MarbleDecorations"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_ReinforcedKiteShield"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-41",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1220000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-2610",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-1120",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_CultureSite_Large_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_Masia",
        "name": "Masia",
        "age": "IberianEra",
        "column": 5,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_Masia",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Crossbowmen"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-46",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1050000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-2010",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-860",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Home_Average_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_CultureSite_Compact_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_WindPrediction",
        "name": "Wind Prediction",
        "age": "ClassicGreece",
        "column": 6,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_WindPrediction",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Siege"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-17",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-52200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-820",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-350",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "hematite",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Ranged_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_DonkeyFarms",
        "name": "Donkey Farms",
        "age": "IberianEra",
        "column": 13,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_DonkeyFarms",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_LeatherLappets"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_EquestrianExcellence"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-48",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-629000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-3200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1370",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-26",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Farm_Domestic_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_BallisticInnovation",
        "name": "Ballistic Innovation",
        "age": "AgeOfTheFranks",
        "column": 5,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_BallisticInnovation",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Skirmishers"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Caballarii"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-64",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-742000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-4330",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-1860",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Siege_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_CounterCavalryTactics",
        "name": "Counter Cavalry Tactics",
        "age": "ByzantineEra",
        "column": 8,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_CounterCavalryTactics",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_ByzantineSteeds"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-45",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-232000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-1960",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-840",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_HeavyInfantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_CavalrySpearmen",
        "name": "Cavalry Spearmen",
        "age": "BronzeAge",
        "column": 6,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_CavalrySpearmen",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Siege"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-5",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-4550",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Cavalry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_OatProduction",
        "name": "Oat Production",
        "age": "MinoanEra",
        "column": 3,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_OatProduction",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_IronPendant"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-9",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-18400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-30",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-75",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "jasper",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Farm_Rural_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Municipium",
        "name": "Municipium",
        "age": "EarlyRome",
        "column": 1,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Municipium",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_IntimidatingPresence"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Concrete"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-27",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-53800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-630",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-270",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Home_Small_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Farm_Rural_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Special_HeroAcademy_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                            "baseData": {
                                "id": "Technology_EarlyRome_Municipium_TransitionReward_1"
                            },
                            "target": "Building_EarlyRome_City_CityHall_1",
                            "duration": "0s",
                            "start": {},
                            "complete": {},
                            "sourceGroup": "cityHall",
                            "cities": [
                                "City_Capital"
                            ],
                            "usesConstructionSlots": true
                        },
                        {
                            "@type": "type.googleapis.com/UnlockAgeRewardDTO",
                            "baseData": {
                                "id": "EarlyRome",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_EarlyRome_Municipium_SpecialReward01"
                            },
                            "resourceDefinitionId": "resource.coins",
                            "amount": "1000000"
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_EarlyRome_Municipium_SpecialReward02"
                            },
                            "resourceDefinitionId": "resource.food",
                            "amount": "500000"
                        },
                        {
                            "@type": "type.googleapis.com/HeroTreasureHuntUnlockDifficultyRewardDTO",
                            "baseData": {
                                "id": "Technology_EarlyRome_Municipium_ATH_Difficulty_Unlock_1",
                                "hidden": true
                            },
                            "treasureHuntGroup": "TreasureHunt",
                            "unlockedDifficulty": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_Stables",
        "name": "Stables",
        "age": "MinoanEra",
        "column": 2,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_Stables",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Township"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-9",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-13000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-105",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-45",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Cavalry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Architekton",
        "name": "Architekton",
        "age": "ByzantineEra",
        "column": 5,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Architekton",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Jovians"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-40",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-223000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-1170",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_CultureSite_Large_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_PublicGardens",
        "name": "Public Gardens",
        "age": "RomanEmpire",
        "column": 9,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_PublicGardens",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_CenturionsAim"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-28",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-128000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-1580",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-675",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Farm_Rural_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_BronzeTippedSpears",
        "name": "Bronze Tipped Spears",
        "age": "BronzeAge",
        "column": 12,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_BronzeTippedSpears",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_BronzePlating"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Barn"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-7800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-45",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Cavalry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_TheodosianWalls",
        "name": "Theodosian Walls",
        "age": "ByzantineEra",
        "column": 6,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_TheodosianWalls",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Forquier"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-34",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-438000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-1870",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-800",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Home_Small_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_ReinforcedKiteShield",
        "name": "Reinforced Kite Shield",
        "age": "KingdomOfSicily",
        "column": 12,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_ReinforcedKiteShield",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_HeavyCrossbowDesigns"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-46",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-849000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-5040",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-2160",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-26",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Infantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_RefinedTools",
        "name": "Refined Tools",
        "age": "KingdomOfSicily",
        "column": 8,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_RefinedTools",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_ReinforcedNasalGuards"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-53",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1250000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-2980",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-1280",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Farm_Rural_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_ReinforcedNasalGuards",
        "name": "Reinforced Nasal Guards",
        "age": "KingdomOfSicily",
        "column": 7,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_ReinforcedNasalGuards",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_ArmoredPanels"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-40",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1100000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-3650",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-1570",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Ranged_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_Fountains",
        "name": "Fountains",
        "age": "RomanEmpire",
        "column": 3,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_Fountains",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Sagittarii"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-34",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-128000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-835",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-360",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_CultureSite_Moderate_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Math",
        "name": "Math",
        "age": "ClassicGreece",
        "column": 9,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Math",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_HerbalAromas"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-19",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-54300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-620",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-185",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "hematite",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Farm_Domestic_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_TribalMarksmanship",
        "name": "Tribal Marksmanship",
        "age": "BronzeAge",
        "column": 14,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_TribalMarksmanship",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_BronzeArtilleryGears"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_BronzeTippedSpears"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-5",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-10050",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-110",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-45",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Ranged_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_GoldOre_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_EnhancedTorsion",
        "name": "Enhanced Torsion",
        "age": "RomanEmpire",
        "column": 7,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_EnhancedTorsion",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_ShieldwallFortification"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-38",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-124000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-1580",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-675",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Siege_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_EventCities",
        "name": "Allied Culture Events",
        "age": "BronzeAge",
        "column": 7,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_EventCities",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_CavalrySpearmen"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Artisan"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-2",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-3500",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockFeatureRewardDTO",
                            "feature": "UnlockableFeatureConstant_EVENT_CITIES",
                            "baseData": {}
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_Slingshots",
        "name": "Slingshots",
        "age": "StoneAge",
        "column": 8,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_Slingshots",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_GoatPens"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-2",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-50",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amber",
                            "amount": "-1",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Barracks_Ranged_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "rangedBarracks",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_StoneAge_Capital_FruitTree_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_MobilityInnovations",
        "name": "Mobility Innovations",
        "age": "ByzantineEra",
        "column": 10,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_MobilityInnovations",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_FlightPathAnalysis"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-43",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-438000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-2450",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-1050",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "byzantine_ewer",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Siege_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_AmbushTechniques",
        "name": "Ambush Techniques",
        "age": "ClassicGreece",
        "column": 7,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_AmbushTechniques",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_WindPrediction"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_CropRotation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-16",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-49000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-480",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-205",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "greek_lyre",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Infantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_Screws",
        "name": "Screws",
        "age": "MinoanEra",
        "column": 7,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_Screws",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_BasketWeaving"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-8",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-12100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-325",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-140",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Home_Average_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_AdvancedCounterweights",
        "name": "Advanced Counterweights",
        "age": "ByzantineEra",
        "column": 7,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_AdvancedCounterweights",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_PrecisionArmguards"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-43",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-412000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-1880",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-810",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "byzantine_ewer",
                            "amount": "-12",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Siege_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Velites",
        "name": "Velites",
        "age": "EarlyRome",
        "column": 4,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Velites",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Hastati"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-21",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-86100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-1155",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-495",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Ranged_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Manuscript",
        "name": "Manuscript",
        "age": "FeudalAge",
        "column": 2,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Manuscript",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Feudalism"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-58",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-483000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-1780",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-760",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "manuscript"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "FeudalAge"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_IronPendant",
        "name": "Iron Pendant",
        "age": "MinoanEra",
        "column": 2,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_IronPendant",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Township"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-11",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-10500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-65",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-30",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "jasper",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "iron_pendant"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "MinoanEra"
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "artisan",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_Archery",
        "name": "Archery",
        "age": "BronzeAge",
        "column": 5,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_Archery",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Chariot"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-5500",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Ranged_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_GoldOre_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_Township",
        "name": "Township",
        "age": "MinoanEra",
        "column": 1,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_Township",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_ThunderingGallop"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Prosperity"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-10",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-10500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-90",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-40",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Home_Small_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                            "baseData": {
                                "id": "Technology_MinoanEra_Township_TransitionReward_1"
                            },
                            "target": "Building_MinoanEra_City_CityHall_1",
                            "duration": "0s",
                            "start": {},
                            "complete": {},
                            "sourceGroup": "cityHall",
                            "cities": [
                                "City_Capital"
                            ],
                            "usesConstructionSlots": true
                        },
                        {
                            "@type": "type.googleapis.com/UnlockAgeRewardDTO",
                            "baseData": {
                                "id": "MinoanEra",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "premiumHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockQuestlineRewardDTO",
                            "baseData": {
                                "id": "Questline_MinoanEra_BarracksUpgrade",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/UnlockQuestlineRewardDTO",
                            "baseData": {
                                "id": "Questline_Research_MinoanEra",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/UnlockQuestlineRewardDTO",
                            "baseData": {
                                "id": "Questline_CityBuilding_MinoanEra",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_MinoanEra_Capital_GoldOre_1",
                            "amount": 1
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_MinoanEra_Capital_FruitTree_1",
                            "amount": 1
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_MinoanEra_Capital_Boar_1",
                            "amount": 1
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_MinoanEra_Township_SpecialReward01"
                            },
                            "resourceDefinitionId": "resource.coins",
                            "amount": "500000"
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_MinoanEra_Township_SpecialReward02"
                            },
                            "resourceDefinitionId": "resource.food",
                            "amount": "100000"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_HorseshoeAlloys",
        "name": "Horseshoe Alloys",
        "age": "RomanEmpire",
        "column": 12,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_HorseshoeAlloys",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_PastureImprovement"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-34",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-169000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-1020",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-440",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Cavalry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_UnderfloorHeating",
        "name": "Underfloor Heating",
        "age": "RomanEmpire",
        "column": 10,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_UnderfloorHeating",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_VillaUrbana"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-36",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-140000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-1020",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-440",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-15",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Home_Average_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_GregorianCalendar",
        "name": "Gregorian Calendar",
        "age": "ByzantineEra",
        "column": 8,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_GregorianCalendar",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_AdvancedCounterweights"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-40",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-206000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-1720",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-740",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "byzantine_ewer",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_CultureSite_Little_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_Saffron",
        "name": "Saffron",
        "age": "IberianEra",
        "column": 2,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_Saffron",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Castillos"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-51",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1030000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-1560",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-670",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "saffron"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "IberianEra"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_RegnumFrancorum",
        "name": "Regnum Francorum",
        "age": "AgeOfTheFranks",
        "column": 1,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_RegnumFrancorum",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_WaterCistern"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_ChainmailReinforcement"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_DomicalVault"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-43",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-357000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-1830",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-780",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Home_Small_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Farm_Rural_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_CultureSite_Moderate_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Special_HeroAcademy_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                            "baseData": {
                                "id": "Technology_AgeOfTheFranks_RegnumFrancorum_TransitionReward_1"
                            },
                            "target": "Building_AgeOfTheFranks_City_CityHall_1",
                            "duration": "0s",
                            "start": {},
                            "complete": {},
                            "sourceGroup": "cityHall",
                            "cities": [
                                "City_Capital"
                            ],
                            "usesConstructionSlots": true
                        },
                        {
                            "@type": "type.googleapis.com/UnlockAgeRewardDTO",
                            "baseData": {
                                "id": "AgeOfTheFranks",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_AgeOfTheFranks_RegnumFrancorum_SpecialReward01"
                            },
                            "resourceDefinitionId": "resource.coins",
                            "amount": "500000"
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_AgeOfTheFranks_RegnumFrancorum_SpecialReward02"
                            },
                            "resourceDefinitionId": "resource.food",
                            "amount": "1000000"
                        },
                        {
                            "@type": "type.googleapis.com/HeroTreasureHuntUnlockDifficultyRewardDTO",
                            "baseData": {
                                "id": "Technology_AgeOfTheFranks_RegnumFrancorum_ATH_Difficulty_Unlock_1",
                                "hidden": true
                            },
                            "treasureHuntGroup": "TreasureHunt",
                            "unlockedDifficulty": 4
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_Destillation",
        "name": "Destillation",
        "age": "IberianEra",
        "column": 10,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_Destillation",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_LightweightShields"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_BraceMechanism"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-48",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-792000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-2450",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-1050",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iberian_torc_necklace",
                            "amount": "-17",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Home_Average_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_CropRotation",
        "name": "Crop Rotation",
        "age": "ClassicGreece",
        "column": 6,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_CropRotation",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Philosophy"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-18",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-43600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-345",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-150",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Farm_Rural_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Farm_Domestic_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_FamiliaRegis",
        "name": "Familia Regis",
        "age": "KingdomOfSicily",
        "column": 4,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_FamiliaRegis",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_ArmoredCrossbowmen"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-61",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-849000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-3500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-1500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_HeavyInfantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_ToledoSteel",
        "name": "Toledo Steel",
        "age": "IberianEra",
        "column": 11,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_ToledoSteel",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Botany"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-46",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-723000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-2310",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-990",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iberian_torc_necklace",
                            "amount": "-15",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Home_Small_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_Millstone",
        "name": "Millstone",
        "age": "MinoanEra",
        "column": 8,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_Millstone",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Screws"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-13",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-13800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-355",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-150",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Farm_Rural_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "ruralFarm",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Patrimony",
        "name": "Patrimony",
        "age": "AgeOfTheFranks",
        "column": 10,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Patrimony",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Scythes"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-66",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-671000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-7230",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-3100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-24",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Home_Small_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_Windmill",
        "name": "Windmill",
        "age": "KingdomOfSicily",
        "column": 5,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_Windmill",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_VegetableGardens"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_FamiliaRegis"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_ImprovedRoofTiles"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-40",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-675000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-3060",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-1310",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Farm_Domestic_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Castle",
        "name": "Castle",
        "age": "FeudalAge",
        "column": 11,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Castle",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Wingguards"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-66",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-906000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-4370",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-1870",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-15",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Home_Average_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_SocketLangets",
        "name": "Socket Langets",
        "age": "FeudalAge",
        "column": 6,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_SocketLangets",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_RepurposedRuins"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-59",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-564000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-2960",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-1270",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Infantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_MarbleDecorations",
        "name": "Marble Decorations",
        "age": "KingdomOfSicily",
        "column": 12,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_MarbleDecorations",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_HeavyCrossbowDesigns"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-53",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-999000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-2680",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-1150",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-24",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Home_Small_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_Cavalry",
        "name": "Cavalry Barracks",
        "age": "StoneAge",
        "column": 5,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_Cavalry",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_Firemaker"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-1",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Barracks_Cavalry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "cavalryBarracks",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_HeavyInfantry",
        "name": "Bronze Sentinel",
        "age": "BronzeAge",
        "column": 4,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_HeavyInfantry",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_AbilityTraining"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-2100",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_HeavyInfantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "heavyInfantryBarracks",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_Sagittarii",
        "name": "Sagittarii",
        "age": "RomanEmpire",
        "column": 2,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_Sagittarii",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_UrbsAeterna"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-33",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-115000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-1240",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-530",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Ranged_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_AncestralValor",
        "name": "Ancestral Valor",
        "age": "BronzeAge",
        "column": 14,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_AncestralValor",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_BronzeArtilleryGears"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-7",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-9300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-40",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Infantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_Goods_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Toxotai",
        "name": "Toxotai",
        "age": "ClassicGreece",
        "column": 3,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Toxotai",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_SilverRing"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-14",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-39400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-265",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "greek_lyre",
                            "amount": "-1",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Ranged_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_ProductionBoom",
        "name": "Production Boom",
        "age": "AgeOfTheFranks",
        "column": 8,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_ProductionBoom",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_ArmorAdaptation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-61",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-443000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-6550",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-2810",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-19",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_CultureSite_Large_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_SinewBacking",
        "name": "Sinew Backing",
        "age": "FeudalAge",
        "column": 11,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_SinewBacking",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Wingguards"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-63",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-685000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-2520",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-1080",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Ranged_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_TacticalCharge",
        "name": "Tactical Charge",
        "age": "EarlyRome",
        "column": 6,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_TacticalCharge",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Marketplaces"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-19",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-79600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-780",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-335",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_Cavalry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_ShieldBoss",
        "name": "Shield Boss",
        "age": "IberianEra",
        "column": 7,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_ShieldBoss",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_Patios"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-56",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1140000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-3870",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-1660",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-15",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_HeavyInfantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_Village",
        "name": "Village",
        "age": "BronzeAge",
        "column": 1,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_Village",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_DomesticatedGoats"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_RuralCommunity"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-6",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-750",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockFeatureRewardDTO",
                            "feature": "UnlockableFeatureConstant_EVENTS",
                            "baseData": {}
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Home_Small_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Farm_Rural_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                            "baseData": {
                                "id": "Technology_BronzeAge_Village_TransitionReward_1"
                            },
                            "target": "Building_BronzeAge_City_CityHall_1",
                            "duration": "0s",
                            "start": {},
                            "complete": {},
                            "sourceGroup": "cityHall",
                            "cities": [
                                "City_Capital"
                            ],
                            "usesConstructionSlots": true
                        },
                        {
                            "@type": "type.googleapis.com/UnlockAgeRewardDTO",
                            "baseData": {
                                "id": "BronzeAge",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "premiumHome",
                                    "amount": 2
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "premiumFarm",
                                    "amount": 2
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_GoldOre_1",
                            "amount": 1
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_FruitTree_1",
                            "amount": 1
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_Boar_1",
                            "amount": 1
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_BronzeAge_Village_SpecialReward01"
                            },
                            "resourceDefinitionId": "resource.coins",
                            "amount": "125000"
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_BronzeAge_Village_SpecialReward02"
                            },
                            "resourceDefinitionId": "resource.food",
                            "amount": "125000"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_ArmoredCrossbowmen",
        "name": "Armored Crossbowmen",
        "age": "KingdomOfSicily",
        "column": 3,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_ArmoredCrossbowmen",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Wardrobe"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Chili"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-63",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-600000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-1050",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-450",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Ranged_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_TrenchWarfare",
        "name": "Trench Warfare",
        "age": "ByzantineEra",
        "column": 9,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_TrenchWarfare",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_WheeledPlough"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_CounterCavalryTactics"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-37",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-472000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-1900",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-820",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-16",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Infantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Byzantium",
        "name": "Byzantium",
        "age": "ByzantineEra",
        "column": 1,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Byzantium",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_HorseshoeAlloys"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-39",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-266000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-1320",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-570",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Home_Small_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Farm_Rural_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_CultureSite_Moderate_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Special_HeroAcademy_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                            "baseData": {
                                "id": "Technology_ByzantineEra_Byzantium_TransitionReward_1"
                            },
                            "target": "Building_ByzantineEra_City_CityHall_1",
                            "duration": "0s",
                            "start": {},
                            "complete": {},
                            "sourceGroup": "cityHall",
                            "cities": [
                                "City_Capital"
                            ],
                            "usesConstructionSlots": true
                        },
                        {
                            "@type": "type.googleapis.com/UnlockAgeRewardDTO",
                            "baseData": {
                                "id": "ByzantineEra",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_ByzantineEra_Byzantium_SpecialReward01"
                            },
                            "resourceDefinitionId": "resource.coins",
                            "amount": "1000000"
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_ByzantineEra_Byzantium_SpecialReward02"
                            },
                            "resourceDefinitionId": "resource.food",
                            "amount": "1000000"
                        },
                        {
                            "@type": "type.googleapis.com/HeroTreasureHuntUnlockDifficultyRewardDTO",
                            "baseData": {
                                "id": "Technology_ByzantineEra_Byzantium_ATH_Difficulty_Unlock_1",
                                "hidden": true
                            },
                            "treasureHuntGroup": "TreasureHunt",
                            "unlockedDifficulty": 3
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Caballarii",
        "name": "Caballarii",
        "age": "AgeOfTheFranks",
        "column": 4,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Caballarii",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Salt"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_FrancArchers"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Halberds"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-69",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-671000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-2230",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-960",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "spessartine",
                            "amount": "-12",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Cavalry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_ArmorAdaptation",
        "name": "Armor Adaptation",
        "age": "AgeOfTheFranks",
        "column": 7,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_ArmorAdaptation",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_ImprovedReins"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_TacticalHurling"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-43",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-685000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-4330",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-1860",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Infantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_PeakedRoofs",
        "name": "Peaked Roofs",
        "age": "FeudalAge",
        "column": 6,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_PeakedRoofs",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_RepurposedRuins"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-59",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-806000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-3330",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-1430",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Home_Average_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_Stakes",
        "name": "Stakes",
        "age": "BronzeAge",
        "column": 14,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_Stakes",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_BronzeArtilleryGears"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-6",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-5700",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-120",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-50",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lapis_lazuli",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Home_Small_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_PolychromeInlays",
        "name": "Polychrome Inlays",
        "age": "KingdomOfSicily",
        "column": 7,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_PolychromeInlays",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_Orchards"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_ArmoredPanels"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-41",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-650000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-2160",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "chili",
                            "amount": "-930",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_CultureSite_Little_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_DomesticSheep",
        "name": "Domestic Sheep",
        "age": "FeudalAge",
        "column": 4,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_DomesticSheep",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Trebuchets"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Knights"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-64",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-564000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-2440",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-1050",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-16",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Farm_Domestic_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Cataphract",
        "name": "Cataphract",
        "age": "ClassicGreece",
        "column": 3,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Cataphract",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Column"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-9",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-39400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-110",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-245",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "hematite",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_Cavalry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_Siege",
        "name": "Slingstone Catapult",
        "age": "BronzeAge",
        "column": 5,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_Siege",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_HeavyInfantry"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-6",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-2100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "petroglyph",
                            "amount": "-1",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Siege_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "siegeBarracks",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_Crossbowmen",
        "name": "Crossbowmen",
        "age": "IberianEra",
        "column": 4,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_Crossbowmen",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_WaxSeal"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-50",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-699000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-3420",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-1470",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Ranged_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_FeedTrough",
        "name": "Feed Trough",
        "age": "BronzeAge",
        "column": 5,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_FeedTrough",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Chariot"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-5150",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Farm_Domestic_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_BronzeAge_Capital_Goods_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Trapezites",
        "name": "Trapezites",
        "age": "ByzantineEra",
        "column": 4,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Trapezites",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Bucellarii"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_SaracenArchers"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-39",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-360000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-740",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-320",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "byzantine_ewer",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Cavalry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_TrebuchetCommand",
        "name": "Trebuchet Command",
        "age": "FeudalAge",
        "column": 11,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_TrebuchetCommand",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Wingguards"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-50",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1010000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-4140",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-1780",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-24",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Siege_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_ThunderingGallop",
        "name": "Thundering Gallop",
        "age": "BronzeAge",
        "column": 18,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_ThunderingGallop",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_WarPaint"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-9",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-6100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-210",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-90",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "petroglyph",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Cavalry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_Columns",
        "name": "Columns",
        "age": "MinoanEra",
        "column": 9,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_Columns",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_MysticBattleChants"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_AnimalHusbandry"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_Millstone"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-8",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-15900",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-260",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-110",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Home_Small_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_LatchMechanism",
        "name": "Latch Mechanism",
        "age": "IberianEra",
        "column": 7,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_LatchMechanism",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_OrangePlantation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-59",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1070000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-2160",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-930",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iberian_torc_necklace",
                            "amount": "-12",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Ranged_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Temples",
        "name": "Temples",
        "age": "ClassicGreece",
        "column": 7,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Temples",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_CropRotation"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-13",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-43600",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-415",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-180",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "hematite",
                            "amount": "-7",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_CultureSite_Large_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Column",
        "name": "Column",
        "age": "ClassicGreece",
        "column": 2,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Column",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Agora"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-15",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-31900",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-45",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "hematite",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "column"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "ClassicGreece"
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "stoneMason",
                                    "remove": true
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_RidgeAndFurrow",
        "name": "Ridge and Furrow",
        "age": "FeudalAge",
        "column": 11,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_RidgeAndFurrow",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Wingguards"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-43",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1130000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-2220",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-950",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Farm_Rural_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_HeavyInfantry",
        "name": "Minotaur's Vanguard",
        "age": "MinoanEra",
        "column": 4,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_HeavyInfantry",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_OatProduction"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-12",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-11700",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-90",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-70",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_HeavyInfantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_ShieldwallFortification",
        "name": "Shieldwall Fortification",
        "age": "RomanEmpire",
        "column": 6,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_ShieldwallFortification",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_AlloyedArrowheads"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-26",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-140000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-1365",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-585",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_HeavyInfantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_ChainmailReinforcement",
        "name": "Chainmail Reinforcement",
        "age": "ByzantineEra",
        "column": 11,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_ChainmailReinforcement",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Tillage"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Mortar"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-47",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-240000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-1910",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-820",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "byzantine_ewer",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_HeavyInfantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_ImprovedStirrups",
        "name": "Improved Stirrups",
        "age": "RomanEmpire",
        "column": 8,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_ImprovedStirrups",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Forums"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-35",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-136000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-1520",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-650",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "roman_cameo_ring",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Cavalry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_Botany",
        "name": "Botany",
        "age": "IberianEra",
        "column": 10,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_Botany",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_ShockCharges"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-68",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1170000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-3870",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1660",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Farm_Rural_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Carpenter",
        "name": "Carpenter",
        "age": "ByzantineEra",
        "column": 2,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Carpenter",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Byzantium"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-41",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-223000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-950",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-410",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "planks"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "ByzantineEra"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_HawkeyeVision",
        "name": "Hawkeye Vision",
        "age": "MinoanEra",
        "column": 7,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_HawkeyeVision",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_BasketWeaving"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-9",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-13800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-310",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-130",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "jasper",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Ranged_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_TheWheel",
        "name": "The Wheel",
        "age": "StoneAge",
        "column": 11,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_TheWheel",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_Herding"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-3",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-150",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Farm_Rural_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_StoneAge_Capital_GoldOre_1",
                            "amount": 1
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_Cultivation",
        "name": "Cultivation",
        "age": "StoneAge",
        "column": 2,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_Cultivation",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_TribalSettlement"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-1",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_Farm_Rural_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "premiumFarm",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_PhilosophicalDebates",
        "name": "Philosophical Debates",
        "age": "ClassicGreece",
        "column": 10,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_PhilosophicalDebates",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Math"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-17",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-45800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-325",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-140",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "greek_lyre",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Home_Small_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_Mosaic",
        "name": "Mosaic",
        "age": "RomanEmpire",
        "column": 3,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_Mosaic",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Cape"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-30",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-161000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-1145",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-490",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "roman_cameo_ring",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "mosaic"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "RomanEmpire"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Philosophy",
        "name": "Philosophy",
        "age": "ClassicGreece",
        "column": 5,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Philosophy",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Education"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_Psiloi"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-16",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-31900",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-610",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-260",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Home_Small_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Home_Average_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_CultureSite_Little_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_MinoanEra_GlyphicWarding",
        "name": "Glyphic Warding",
        "age": "MinoanEra",
        "column": 7,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_MinoanEra_GlyphicWarding",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_EquestrianArtistry"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-12",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-11700",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-195",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-85",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "minoan_frescoes",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_MinoanEra_Barracks_Infantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_StoneAge_BearCult",
        "name": "Tribal Celebrations",
        "age": "StoneAge",
        "column": 9,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_StoneAge_BearCult",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_Agriculture"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_StoneAge_Slingshots"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-1",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-70",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amber",
                            "amount": "-1",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingRewardDTO",
                            "baseData": {
                                "id": "Building_StoneAge_CultureSite_Compact_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "compactCulture",
                                    "amount": 2
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_CarolingianCatapult",
        "name": "Carolingian Catapult",
        "age": "AgeOfTheFranks",
        "column": 2,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_CarolingianCatapult",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_RegnumFrancorum"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-58",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-300000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-2810",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-1200",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Siege_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_HalberdMastery",
        "name": "Halberd Mastery",
        "age": "FeudalAge",
        "column": 8,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_HalberdMastery",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_BattlefieldArtillery"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-43",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1070000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-2520",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-1080",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_HeavyInfantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_SmallHolding",
        "name": "Small Holding",
        "age": "BronzeAge",
        "column": 15,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_SmallHolding",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_TribalMarksmanship"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Plough"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-5",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-6850",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-170",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-75",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lapis_lazuli",
                            "amount": "-5",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Farm_Domestic_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "domesticFarm",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Skirmishers",
        "name": "Skirmishers",
        "age": "AgeOfTheFranks",
        "column": 4,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Skirmishers",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_Halberds"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-43",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-628000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-4740",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-2030",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Infantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_CultureSite_Compact_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Polyculture",
        "name": "Polyculture",
        "age": "ByzantineEra",
        "column": 6,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Polyculture",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Architekton"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-45",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-318000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-1310",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-560",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-12",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Farm_Rural_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Catapult",
        "name": "Catapult",
        "age": "ByzantineEra",
        "column": 3,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Catapult",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Scribe"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-41",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-249000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-390",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-170",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Siege_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_Goblet",
        "name": "Goblet",
        "age": "RomanEmpire",
        "column": 3,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_Goblet",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Cape"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-25",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-165000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-930",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-400",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "goblet"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "RomanEmpire"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Triarii",
        "name": "Triarii",
        "age": "EarlyRome",
        "column": 4,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Triarii",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_AuxillaRiders"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-24",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-62400",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-620",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-355",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "etruscan_bronze_mirror",
                            "amount": "-4",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_HeavyInfantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_Swinery",
        "name": "Swinery",
        "age": "RomanEmpire",
        "column": 4,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_Swinery",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Goblet"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Fountains"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-23",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-152000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-1210",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-520",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Home_Average_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Farm_Domestic_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_Agora",
        "name": "Agora",
        "age": "ClassicGreece",
        "column": 1,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_Agora",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_BronzeAutomata"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_MinoanEra_CeramicArmorcraft"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-11",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-37300",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iron_pendant",
                            "amount": "-205",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "linen_shirt",
                            "amount": "-90",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Home_Small_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Farm_Rural_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Special_HeroAcademy_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/InstantUpgradeRewardDTO",
                            "baseData": {
                                "id": "Technology_ClassicGreece_Agora_TransitionReward_1"
                            },
                            "target": "Building_ClassicGreece_City_CityHall_1",
                            "duration": "0s",
                            "start": {},
                            "complete": {},
                            "sourceGroup": "cityHall",
                            "cities": [
                                "City_Capital"
                            ],
                            "usesConstructionSlots": true
                        },
                        {
                            "@type": "type.googleapis.com/UnlockAgeRewardDTO",
                            "baseData": {
                                "id": "ClassicGreece",
                                "hidden": true
                            }
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_ClassicGreece_Capital_GoldOre_1",
                            "amount": 1
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_ClassicGreece_Capital_FruitTree_1",
                            "amount": 1
                        },
                        {
                            "@type": "type.googleapis.com/IncidentRewardDTO",
                            "hidden": true,
                            "city": "City_Capital",
                            "incident": "Incident_ClassicGreece_Capital_Boar_1",
                            "amount": 1
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_ClassicGreece_Agora_SpecialReward01"
                            },
                            "resourceDefinitionId": "resource.coins",
                            "amount": "600000"
                        },
                        {
                            "@type": "type.googleapis.com/StorageCapRewardDTO",
                            "baseData": {
                                "id": "Technology_ClassicGreece_Agora_SpecialReward02"
                            },
                            "resourceDefinitionId": "resource.food",
                            "amount": "300000"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Tillage",
        "name": "Tillage",
        "age": "ByzantineEra",
        "column": 10,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Tillage",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_TrenchWarfare"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-45",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-343000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-2940",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-1260",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Farm_Rural_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_Ballistas",
        "name": "Ballistas",
        "age": "RomanEmpire",
        "column": 4,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_Ballistas",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Princeps"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_Mosaic"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-33",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-161000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-1270",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-545",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-6",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Siege_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_CloseFormationTactics",
        "name": "Close Formation Tactics",
        "age": "KingdomOfSicily",
        "column": 9,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_CloseFormationTactics",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_DomedSanctuary"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-41",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-650000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tome",
                            "amount": "-4100",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-1760",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_Infantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_Chili",
        "name": "Chili",
        "age": "KingdomOfSicily",
        "column": 2,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_Chili",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_SicilianVilletta"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-46",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-999000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1420",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-610",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "arabesque_wood_carving",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "chili"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "KingdomOfSicily"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_BulwarkFormation",
        "name": "Bulwark Formation",
        "age": "ClassicGreece",
        "column": 7,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_BulwarkFormation",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_ImprovedSaddles"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-14",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-57500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-820",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-350",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_HeavyInfantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Cartwheel",
        "name": "Cartwheel",
        "age": "AgeOfTheFranks",
        "column": 2,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Cartwheel",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_RegnumFrancorum"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-59",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-457000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-2370",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-1020",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "cartwheel"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "AgeOfTheFranks"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_FieldMedicines",
        "name": "Field Medicines",
        "age": "RomanEmpire",
        "column": 7,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_FieldMedicines",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_TenantFarming"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-34",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-214000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-1240",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-530",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Infantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_EquestrianExcellence",
        "name": "Equestrian Excellence",
        "age": "IberianEra",
        "column": 12,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_EquestrianExcellence",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_ToledoSteel"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_GambesonPadding"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-56",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-723000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-3350",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-1440",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "aquamarine",
                            "amount": "-24",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Cavalry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_Plough",
        "name": "Plough",
        "age": "BronzeAge",
        "column": 14,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_Plough",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_BronzeTippedSpears"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-8",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-5500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-145",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-60",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "petroglyph",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Farm_Rural_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "averageHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_ImprovedCrewArrangement",
        "name": "Improved Crew Arrangement",
        "age": "IberianEra",
        "column": 13,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_ImprovedCrewArrangement",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_LeatherLappets"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_EquestrianExcellence"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-68",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1330000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-3420",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-1470",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iberian_torc_necklace",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Barracks_Siege_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_SheepHerds",
        "name": "Sheep Herds",
        "age": "FeudalAge",
        "column": 9,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_SheepHerds",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Manorialism"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_PlateBarding"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-48",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-604000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-2000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-860",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-16",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Farm_Domestic_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_RomanEmpire_ImprovedGladius",
        "name": "Improved Gladius",
        "age": "RomanEmpire",
        "column": 10,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_RomanEmpire_ImprovedGladius",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_QuickReloadSystem"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_RomanEmpire_PublicGardens"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-25",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-202000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "mosaic",
                            "amount": "-1395",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-595",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "amethyst",
                            "amount": "-16",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_RomanEmpire_Barracks_Infantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_Barn",
        "name": "Barn",
        "age": "BronzeAge",
        "column": 11,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_Barn",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_MantletShields"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-5200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-80",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-35",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lapis_lazuli",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Farm_Domestic_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "smallHome",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_OpenFieldSystem",
        "name": "Open Field System",
        "age": "FeudalAge",
        "column": 6,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_OpenFieldSystem",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_RepurposedRuins"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-66",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-584000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-1850",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-790",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Farm_Rural_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_SilentDraw",
        "name": "Silent Draw",
        "age": "BronzeAge",
        "column": 11,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_SilentDraw",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_MantletShields"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-7200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "alabaster_idol",
                            "amount": "-60",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "bronze_bracelet",
                            "amount": "-25",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Barracks_Ranged_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_Tunic",
        "name": "Tunic",
        "age": "EarlyRome",
        "column": 2,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_Tunic",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_Municipium"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-19",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-55900",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "column",
                            "amount": "-855",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "toga",
                            "amount": "-365",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "emerald",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "tunic"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "EarlyRome"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_RomanProvidence",
        "name": "Roman Providence",
        "age": "EarlyRome",
        "column": 8,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_RomanProvidence",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_FormationDrill"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-21",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-77500",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "gold_laurel",
                            "amount": "-905",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-385",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Home_Small_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_FarmUtensils",
        "name": "Farm Utensils",
        "age": "BronzeAge",
        "column": 9,
        "order": 4,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_FarmUtensils",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Tailor"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-3050",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wool",
                            "amount": "-65",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "petroglyph",
                            "amount": "-2",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_BronzeAge_Farm_Rural_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_EliteRiderTraining",
        "name": "Elite Rider Training",
        "age": "AgeOfTheFranks",
        "column": 10,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_EliteRiderTraining",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_UrbanCombatProwess"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-56",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-628000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-4150",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-1780",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "frankish_fibula",
                            "amount": "-16",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_Cavalry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Transhumance",
        "name": "Transhumance",
        "age": "FeudalAge",
        "column": 13,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Transhumance",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_PolearmManeuvers"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_KnightTraining"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-68",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1030000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-3630",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-1560",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-20",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Farm_Domestic_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_IberianEra_DomesticatedDonkeys",
        "name": "Domesticated Donkeys",
        "age": "IberianEra",
        "column": 6,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_IberianEra_DomesticatedDonkeys",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_IberianEra_AdvancedTrebuchet"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-41",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-746000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wax_seal",
                            "amount": "-3120",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "door",
                            "amount": "-1340",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "iberian_torc_necklace",
                            "amount": "-10",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_IberianEra_Farm_Domestic_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ClassicGreece_IntimidatingPresence",
        "name": "Intimidating Presence",
        "age": "ClassicGreece",
        "column": 11,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ClassicGreece_IntimidatingPresence",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ClassicGreece_ReinforcedShields"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-18",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-46800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "silver_ring",
                            "amount": "-460",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "marble_bust",
                            "amount": "-200",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "greek_lyre",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ClassicGreece_Barracks_HeavyInfantry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Axemen",
        "name": "Axemen",
        "age": "FeudalAge",
        "column": 3,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Axemen",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Longbowmen"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-63",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-604000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "salt",
                            "amount": "-2220",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-950",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Infantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_CultureSite_Moderate_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Bucellarii",
        "name": "Bucellarii",
        "age": "ByzantineEra",
        "column": 3,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Bucellarii",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Carpenter"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-37",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-326000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-370",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "goblet",
                            "amount": "-160",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-5",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Infantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_CultureSite_Compact_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_StoneMason",
        "name": "Stone Mason",
        "age": "BronzeAge",
        "column": 8,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_StoneMason",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_EventCities"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-5",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-5300",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "alabaster_idol"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "BronzeAge"
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "stoneMason",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_AgeOfTheFranks_Halberds",
        "name": "Halberds",
        "age": "AgeOfTheFranks",
        "column": 3,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_AgeOfTheFranks_Halberds",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_AgeOfTheFranks_CarolingianCatapult"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-53",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-528000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-2350",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-1010",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_AgeOfTheFranks_Barracks_HeavyInfantry_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_PlateBarding",
        "name": "Plate Barding",
        "age": "FeudalAge",
        "column": 8,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_PlateBarding",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_BattlefieldArtillery"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-59",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-806000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-3920",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "herbs",
                            "amount": "-1680",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-13",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Cavalry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_Mortar",
        "name": "Mortar",
        "age": "ByzantineEra",
        "column": 10,
        "order": 3,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_Mortar",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_FlightPathAnalysis"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_TrenchWarfare"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-50",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-266000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "parchment",
                            "amount": "-2210",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-950",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Home_Small_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_KingdomOfSicily_RefinedChainmailCoifs",
        "name": "Refined Chainmail Coifs",
        "age": "KingdomOfSicily",
        "column": 8,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_KingdomOfSicily_RefinedChainmailCoifs",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_KingdomOfSicily_PolychromeInlays"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-58",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-924000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "wardrobe",
                            "amount": "-1940",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "saffron",
                            "amount": "-830",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "lava_stone",
                            "amount": "-17",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_KingdomOfSicily_Barracks_HeavyInfantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_Herbs",
        "name": "Herbs",
        "age": "FeudalAge",
        "column": 2,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_Herbs",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Feudalism"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-53",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-564000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "ink",
                            "amount": "-2220",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cartwheel",
                            "amount": "-950",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "medieval_tapestry",
                            "amount": "-3",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "herbs"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "FeudalAge"
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_FeudalAge_KnightTraining",
        "name": "Knight Training",
        "age": "FeudalAge",
        "column": 12,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_FeudalAge_KnightTraining",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_Castle"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_FeudalAge_TrebuchetCommand"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-48",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-1190000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "barrel",
                            "amount": "-2150",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "manuscript",
                            "amount": "-920",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "agate",
                            "amount": "-26",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_FeudalAge_Barracks_Cavalry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_PendentiveDome",
        "name": "Pendentive Dome",
        "age": "ByzantineEra",
        "column": 5,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_PendentiveDome",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_Trapezites"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-50",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-386000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-860",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "cape",
                            "amount": "-370",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "opal",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Home_Average_1"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_BronzeAge_Artisan",
        "name": "Artisan",
        "age": "BronzeAge",
        "column": 6,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_BronzeAge_Artisan",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_FeedTrough"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_SacredGroves"
                        },
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_BronzeAge_Archery"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-4",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-2450",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockGoodRewardDTO",
                            "baseData": {
                                "id": "bronze_bracelet"
                            },
                            "cities": [
                                "City_Capital"
                            ],
                            "age": "BronzeAge"
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "moderateCulture",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {},
                            "limitsByGroup": [
                                {
                                    "group": "premiumCulture",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        {
                            "@type": "type.googleapis.com/IncreaseBuildingLimitRewardDTO",
                            "baseData": {
                                "hidden": true
                            },
                            "limitsByGroup": [
                                {
                                    "group": "artisan",
                                    "amount": 1
                                }
                            ],
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_ByzantineEra_ShieldedSaddles",
        "name": "Shielded Saddles",
        "age": "ByzantineEra",
        "column": 10,
        "order": 1,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_ByzantineEra_ShieldedSaddles",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_ByzantineEra_TrenchWarfare"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-32",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-309000",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "planks",
                            "amount": "-1720",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "pepper",
                            "amount": "-740",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "byzantine_ewer",
                            "amount": "-11",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_ByzantineEra_Barracks_Cavalry_3"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    },
    {
        "@type": "type.googleapis.com/TechnologyDefinitionDTO",
        "id": "Technology_EarlyRome_FormationDrill",
        "name": "Formation Drill",
        "age": "EarlyRome",
        "column": 7,
        "order": 2,
        "cityDefinitionId": "City_Capital",
        "components": [
            {
                "@type": "type.googleapis.com/ResearchComponentDTO",
                "id": "Research_Technology_EarlyRome_FormationDrill",
                "start": {
                    "requirements": [
                        {
                            "@type": "type.googleapis.com/ResearchRequirementDTO",
                            "id": "Technology_EarlyRome_TacticalCharge"
                        }
                    ],
                    "costs": [
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "research_points",
                            "amount": "-23",
                            "partiallyPayable": true,
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "coins",
                            "amount": "-96800",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "tunic",
                            "amount": "-655",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "stone_tablet",
                            "amount": "-280",
                            "fromResourceChange": true
                        },
                        {
                            "@type": "type.googleapis.com/ResourceDTO",
                            "definitionId": "emerald",
                            "amount": "-8",
                            "fromResourceChange": true
                        }
                    ]
                },
                "finish": {
                    "rewards": [
                        {
                            "@type": "type.googleapis.com/UnlockBuildingUpgradeRewardDTO",
                            "baseData": {
                                "id": "Building_EarlyRome_Barracks_HeavyInfantry_2"
                            },
                            "cities": [
                                "City_Capital"
                            ]
                        }
                    ]
                }
            }
        ]
    }
]

export default technologies;