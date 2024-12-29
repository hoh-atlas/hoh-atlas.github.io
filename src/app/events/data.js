const allEvents = [
    {
        id: "winter_event_2024",
        codeName: "WinterEvent2024",
        name: "Winter Event 2024",
        image: "/events/intro/icon_event_winter_tokens.webp",
        startDate: "December 11th 2024",
        endDate: "January 8th 2025",
        betaStartDate: "November 27th 2024",
        banner: "/events/intro/EventBackgroundWinterEvent.webp",
        headerImage: "/events/intro/EventHeaderWinterEvent.webp",
        questgiverName: "Winter town",
        windowImage: "/events/intro/winter_event_2024_window.webp",
        type: "chest_event",
        chestEventData: {
            chests: {
                1: [
                    {
                        costs: 90,
                        payback: 1,
                        resource: "antimatter_common_part",
                        amount: 1,
                        dailySpecialPercentage: 5
                    },
                    {
                        costs: 90,
                        payback: 1,
                        resource: "coins",
                        amount: "N",
                        dailySpecialPercentage: 5
                    },
                    {
                        costs: 90,
                        payback: 1,
                        resource: "goods",
                        amount: "N",
                        dailySpecialPercentage: 5
                    },
                    {
                        costs: 90,
                        payback: 1,
                        resource: "victory_ticket",
                        amount: 1,
                        dailySpecialPercentage: 5
                    },
                    {
                        costs: 90,
                        payback: 1,
                        resource: "chest_teslacrests_common",
                        amount: 4,
                        dailySpecialPercentage: 5
                    },
                ],
                2: [
                    {
                        costs: 180,
                        payback: 2,
                        resource: "chest_teslacrests_enhanced",
                        amount: 6,
                        dailySpecialPercentage: 10
                    },
                    {
                        costs: 180,
                        payback: 2,
                        resource: "coins",
                        amount: "N",
                        dailySpecialPercentage: 10
                    },
                    {
                        costs: 180,
                        payback: 2,
                        resource: "victory_ticket",
                        amount: 2,
                        dailySpecialPercentage: 10
                    },
                    {
                        costs: 180,
                        payback: 2,
                        resource: "antimatter_common_part",
                        amount: 2,
                        dailySpecialPercentage: 10
                    },
                ],
                3: [
                    {
                        costs: 270,
                        payback: 3,
                        resource: "goods",
                        amount: "N",
                        dailySpecialPercentage: 15
                    },
                    {
                        costs: 270,
                        payback: 3,
                        resource: "antimatter_common_part",
                        amount: 3,
                        dailySpecialPercentage: 15
                    },
                    {
                        costs: 270,
                        payback: 3,
                        resource: "chest_teslacrests_superior",
                        amount: 9,
                        dailySpecialPercentage: 15
                    },
                    {
                        costs: 270,
                        payback: 3,
                        resource: "victory_ticket",
                        amount: 3,
                        dailySpecialPercentage: 15
                    },
                    {
                        costs: 270,
                        payback: 3,
                        resource: "ambrosia",
                        amount: 1,
                        dailySpecialPercentage: 15
                    },
                ]
            }
        },
        currency: {
            name: "Snowflakes",
            image: "/events/intro/icon_event_winter_tokens.webp",
            description: "are collected by spending Stamina in the Leaderboard. You can purchase more of them with Gems. They are used to open presents in the main event window."
        },
        payback: {
            name: "Candles",
            image: "/events/grand-prizes/icon_event_winter_grand_prize_progress.webp",
            description: "are collected by opening presents. You can purchase more of them with Gems. They are used to illuminate the houses of wintery town and define your progress on the Grand Prizes lane."
        },
        questsIcon: "/events/intro/icon_snowflake_competion_leaderboard_chest.webp",
        leaderboards: [
            {
                id: 1,
                codeName: "event.LeaderboardEvent_Winter_1",
                startDate: "December 11th 2024",
                endDate: "December 18th 2024",
            },
            {
                id: 2,
                codeName: "event.LeaderboardEvent_Winter_1",
                startDate: "December 18th 2024",
                endDate: "December 25th 2024",
            },
            {
                id: 3,
                codeName: "event.LeaderboardEvent_Winter_1",
                startDate: "December 25th 2024",
                endDate: "January 1st 2025",
            },
            {
                id: 4,
                codeName: "event.LeaderboardEvent_Winter_4",
                startDate: "January 1st 2025",
                endDate: "January 8th 2025",
            },
        ],
        dailySpecials: [
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "BuildingCustomization_EventWinter_CultureSite_Compact",
                amount: 1,
            },
            {
                resource: "Dac_TeslaCrests_Purple_20",
                amount: 1,
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "Dac_Reward_AscensionMaterial_DeviceTimeSpace",
                amount: 1,
            },
            {
                resource: "BuildingCustomization_EventWinter_Home_Small",
                amount: 1
            },
            {
                resource: "BuildingCustomization_EventWinter_CultureSite_Little",
                amount: 1
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "Dac_Reward_AscensionMaterial_Herbology",
                amount: 1,
            },
            {
                resource: "Dac_TeslaCrests_Green_20",
                amount: 1,
            },
            {
                resource: "Dac_Reward_AscensionMaterial_BattleInsignia",
                amount: 1,
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "BuildingCustomization_EventWinter_CultureSite_Compact",
                amount: 1
            },
            {
                resource: "Dac_TeslaCrests_Yellow_20",
                amount: 1,
            },
            {
                resource: "BuildingCustomization_EventWinter_CultureSite_Moderate",
                amount: 1
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "Dac_TeslaCrests_Blue_20",
                amount: 1,
            },
            {
                resource: "Dac_Reward_AscensionMaterial_Herbology",
                amount: 1,
            },
            {
                resource: "BuildingCustomization_EventWinter_CultureSite_Little",
                amount: 1
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "Dac_Reward_AscensionMaterial_DeviceTimeSpace",
                amount: 1,
            },
            {
                resource: "BuildingCustomization_EventWinter_CultureSite_Compact",
                amount: 1
            },
            {
                resource: "Dac_TeslaCrests_Red_20",
                amount: 1,
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "Dac_Reward_AscensionMaterial_BattleInsignia",
                amount: 1,
            },
            {
                resource: "BuildingCustomization_EventWinter_CultureSite_Little",
                amount: 1
            },
            {
                resource: "BuildingCustomization_EventWinter_Home_Small",
                amount: 1
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
        ],
    },
    {
        id: "world_fair_2024",
        codeName: "WorldFair2024",
        name: "World Fair 2024",
        image: "/events/intro/icon_event_world_fair_tokens.webp",
        startDate: "October 23th 2024",
        endDate: "November 13th 2024",
        betaStartDate: "October 15th 2024",
        banner: "/events/intro/EventBackgroundWorldFair.webp",
        headerImage: "/events/quests/Questgiver_BenjaminFranklin.webp",
        questgiverName: "Benjamin Franklin",
        windowImage: "/events/intro/world_fair_2024_window.webp",
        type: "merge_event",
        mergeEventData: {
            items: [
                {
                    name: "Artifact",
                    levelsImages: ["/events/intro/world_fair_2024_artifact_1.webp","/events/intro/world_fair_2024_artifact_2.webp","/events/intro/world_fair_2024_artifact_3.webp","/events/intro/world_fair_2024_artifact_4.webp","/events/intro/world_fair_2024_artifact_5.webp"]
                },
                {
                    name: "Rare Flower",
                    levelsImages: ["/events/intro/world_fair_2024_rareflower_1.webp","/events/intro/world_fair_2024_rareflower_2.webp","/events/intro/world_fair_2024_rareflower_3.webp","/events/intro/world_fair_2024_rareflower_4.webp","/events/intro/world_fair_2024_rareflower_5.webp"]
                },
                {
                    name: "Invention",
                    levelsImages: ["/events/intro/world_fair_2024_invention_1.webp","/events/intro/world_fair_2024_invention_2.webp","/events/intro/world_fair_2024_invention_3.webp","/events/intro/world_fair_2024_invention_4.webp","/events/intro/world_fair_2024_invention_5.webp"]
                },
            ],
            tasks: {
                1: [
                    {
                        resource: "coins"
                    },
                    {
                        resource: "goods"
                    }
                ],
                2: [
                    {
                        resource: "victory_ticket",
                        amount: 2
                    },
                    {
                        resource: "goods"
                    },
                    {
                        resource: "coins"
                    }
                ],
                3: [
                    {
                        resource: "victory_ticket",
                        amount: 3
                    },
                    {
                        resource: "coins"
                    },
                    {
                        resource: "goods"
                    },
                ]
            }
        },
        currency: {
            name: "Discovery Books",
            image: "/events/intro/icon_event_world_fair_tokens.webp",
            description: "are collected by completing event quests and by logging in daily. You can purchase more of them with Gems. They are used to spawn inventions on the board in the main event window."
        },
        payback: {
            name: "Energy",
            image: "/events/grand-prizes/icon_event_worldfair_2024_grand_prize_progress.webp",
            description: "is collected by fulfulling orders on the left-hand side. Merge pieces on the board to create the inventions required in the tasks. Candles defines your progress on the Grand Prizes lane."
        },
        questsIcon: "/events/quests/quests_icon.webp",
        questlineColor: "#686cfe",
        questlines: [
            {   
                id: 1,
                appearsAfter: [],
                name: "World Fair Event Questline I",
                questgiver: "/events/quests/Questgiver_BenjaminFranklin.webp",
                rewards: [
                    {
                        resource: "event_world_fair_2024_currency",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Spend <b>8 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Spend <b>20 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Spend <b>30 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Spend <b>40 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Spend <b>60 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Spend <b>70 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 8,
                        tasks: [
                            "Spend <b>80 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 9,
                        tasks: [
                            "Spend <b>90 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 10,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                ]
            },
            {   
                id: 2,
                appearsAfter: [1],
                name: "World Fair Event Questline II",
                questgiver: "/events/quests/Questgiver_BenjaminFranklin.webp",
                rewards: [
                    {
                        resource: "event_world_fair_2024_currency",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 8,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 9,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 10,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                ]
            },
            {   
                id: 3,
                appearsAfter: [2],
                name: "World Fair Event Questline III",
                questgiver: "/events/quests/Questgiver_BenjaminFranklin.webp",
                rewards: [
                    {
                        resource: "event_world_fair_2024_currency",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 8,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 9,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 10,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                ]
            },
            {   
                id: 4,
                appearsAfter: [3],
                name: "World Fair Event Questline IV",
                questgiver: "/events/quests/Questgiver_BenjaminFranklin.webp",
                rewards: [
                    {
                        resource: "event_world_fair_2024_currency",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 8,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 9,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 10,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                ]
            },
            {   
                id: 5,
                appearsAfter: [4],
                name: "World Fair Event Questline V",
                questgiver: "/events/quests/Questgiver_BenjaminFranklin.webp",
                rewards: [
                    {
                        resource: "event_world_fair_2024_currency",
                        amount: 500
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 8,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 9,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                    {
                        id: 10,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 100
                        }
                    },
                ]
            },
            {   
                id: 6,
                appearsAfter: [5],
                name: "Daily World Fair Questline",
                questgiver: "/events/quests/Questgiver_BenjaminFranklin.webp",
                rewards: [
                    {
                        resource: "event_world_fair_2024_currency",
                        amount: 100
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 8,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 9,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 10,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 11,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 12,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 13,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 14,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 15,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 16,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 17,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 18,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 19,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 20,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 21,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 22,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 23,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 24,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 25,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 26,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 27,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 28,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 29,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 30,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 31,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 32,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 33,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 34,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 35,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 36,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 37,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 38,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 39,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 40,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 41,
                        tasks: [
                            "Spend <b>50 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                    {
                        id: 42,
                        tasks: [
                            "Spend <b>100 Stamina</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "event_world_fair_2024_currency",
                            amount: 120
                        }
                    },
                ]
            },
        ],
        dailySpecials: [
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "Dac_TeslaCrests_Red_20",
                amount: 1,
                //note: "For players in early eras, the chest only contains common and enhanced crests."
            },
            {
                resource: "Dac_Reward_AscensionMaterial_BattleInsignia",
                amount: 1
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "Dac_TeslaCrests_Blue_20",
                amount: 1
            },
            {
                resource: "BuildingCustomization_EventWorldFair2024_CultureSite_Moderate",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 2
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "BuildingCustomization_EventWorldFair2024_Home_Small",
                amount: 1
            },
            {
                resource: "Dac_TeslaCrests_Yellow_20",
                amount: 1
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "Dac_TeslaCrests_Purple_20",
                amount: 1
            },
            {
                resource: "Dac_Reward_AscensionMaterial_Herbology",
                amount: 1
            },
            {
                resource: "BuildingCustomization_EventWorldFair2024_CultureSite_Moderate",
                amount: 1
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "BuildingCustomization_EventWorldFair2024_Home_Average",
                amount: 1
            },
            {
                resource: "Dac_TeslaCrests_Green_20",
                amount: 1
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "Dac_Reward_AscensionMaterial_DeviceTimeSpace",
                amount: 1
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "research_point",
                amount: 2
            },
        ],
        grandPrizes: [
            {
                id: 1,
                cost: 10,
                free: {
                    resource: "customization_world_fair_2024_ticket_booth",
                    amount: 1
                },
                premium: {
                    resource: "customization_world_fair_2024_tesla_coil",
                    amount: 1
                }
            },
            {
                id: 2,
                cost: 10,
                free: {
                    resource: "antimatter_common_part",
                    amount: 10
                },
                premium: {
                    resource: "antimatter",
                    amount: 1
                }
            },
            {
                id: 3,
                cost: 10,
                free: {
                    resource: "research_point",
                    amount: 3
                },
                premium: {
                    resource: "research_point",
                    amount: 5
                }
            },
            {
                id: 4,
                cost: 10,
                free: {
                    resource: "antimatter_common_part",
                    amount: 10
                },
                premium: {
                    resource: "antimatter",
                    amount: 1
                }
            },
            {
                id: 5,
                cost: 10,
                free: {
                    resource: "customization_world_fair_2024_heritage_exhibition",
                    amount: 1
                },
                premium: {
                    resource: "customization_world_fair_2024_void_reactor",
                    amount: 1
                }
            },
            {
                id: 6,
                cost: 10,
                free: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 2
                }
            },
            {
                id: 7,
                cost: 10,
                free: {
                    resource: "research_point",
                    amount: 3
                },
                premium: {
                    resource: "research_point",
                    amount: 5
                }
            },
            {
                id: 8,
                cost: 10,
                free: {
                    resource: "antimatter_common_part",
                    amount: 10
                },
                premium: {
                    resource: "antimatter",
                    amount: 1
                }
            },
            {
                id: 9,
                cost: 10,
                free: {
                    resource: "customization_world_fair_2024_void_reactor",
                    amount: 1
                },
                premium: {
                    resource: "customization_world_fair_2024_ticket_booth",
                    amount: 1
                }
            },
            {
                id: 10,
                cost: 10,
                free: {
                    resource: "antimatter_common_part",
                    amount: 10
                },
                premium: {
                    resource: "antimatter",
                    amount: 1
                }
            },
            {
                id: 11,
                cost: 10,
                free: {
                    resource: "folio_of_enlightenment",
                    amount: 1
                },
                premium: {
                    resource: "folio_of_enlightenment",
                    amount: 1
                }
            },
            {
                id: 12,
                cost: 10,
                free: {
                    resource: "research_point",
                    amount: 3
                },
                premium: {
                    resource: "research_point",
                    amount: 5
                }
            },
            {
                id: 13,
                cost: 10,
                free: {
                    resource: "customization_world_fair_2024_tesla_coil",
                    amount: 1
                },
                premium: {
                    resource: "customization_world_fair_2024_heritage_exhibition",
                    amount: 1
                }
            },
            {
                id: 14,
                cost: 10,
                free: {
                    resource: "antimatter_common_part",
                    amount: 10
                },
                premium: {
                    resource: "antimatter",
                    amount: 1
                }
            },
            {
                id: 15,
                cost: 10,
                free: {
                    resource: "antimatter_legendary_part",
                    amount: 1
                },
                premium: {
                    resource: "customization_world_fair_2024_singularity_movement",
                    amount: 1
                }
            },
            {
                id: 16,
                cost: 10,
                free: {
                    resource: "research_point",
                    amount: 7
                },
                premium: {
                    resource: "folio_of_enlightenment",
                    amount: 1
                }
            },
            {
                id: 17,
                cost: 10,
                free: {
                    resource: "antimatter_common_part",
                    amount: 10
                },
                premium: {
                    resource: "customization_world_fair_2024_void_reactor",
                    amount: 1
                }
            },
            {
                id: 18,
                cost: 10,
                free: {
                    resource: "customization_world_fair_2024_ticket_booth",
                    amount: 1
                },
                premium: {
                    resource: "customization_world_fair_2024_tesla_coil",
                    amount: 1
                }
            },
            {
                id: 19,
                cost: 10,
                free: {
                    resource: "antimatter",
                    amount: 1
                },
                premium: {
                    resource: "antimatter",
                    amount: 2
                }
            },
            {
                id: 20,
                cost: 10,
                free: {
                    resource: "antimatter_legendary_part",
                    amount: 10
                },
                premium: {
                    resource: "antimatter_legendary_part",
                    amount: 10
                }
            },
        ]
    },
]

export default allEvents;