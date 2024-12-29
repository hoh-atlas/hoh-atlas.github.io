const _events = {
    "WinterEvent2024": [
        {
            "id": "356966",
            "definition": {
                "id": "event.Event_Winter",
                "components": [
                    {
                        "@type": "type.googleapis.com/SeasonPassDefinitionDTO",
                        "id": "season_pass.Event_Winter",
                        "group": "Event_Winter",
                        "resourceDefinitionId": "event_winter_grand_prize_progress",
                        "checkpoints": [
                            {
                                "id": "Event_Winter_Checkpoint_1",
                                "order": 1,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_CultureSite_Compact",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_1_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_1_PremiumReward1"
                                        },
                                        "resource": "campaign_battle_ticket",
                                        "amount": "25"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_2",
                                "order": 2,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_2_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_2_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_3",
                                "order": 3,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_CultureSite_Little",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_3_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_3_PremiumReward1"
                                        },
                                        "dynamicDefinitionId": "Dac_Reward_Goods_250"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_4",
                                "order": 4,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_4_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_4_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_5",
                                "order": 5,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_Home_Small",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_5_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_5_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_6",
                                "order": 6,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_6_RegularReward1"
                                        },
                                        "resource": "rift_token_legendary_part",
                                        "amount": "2"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_6_PremiumReward1"
                                        },
                                        "resource": "rift_token_legendary_part",
                                        "amount": "3"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_7",
                                "order": 7,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_7_RegularReward1"
                                        },
                                        "resource": "ambrosia",
                                        "amount": "5"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_7_PremiumReward1"
                                        },
                                        "resource": "ambrosia",
                                        "amount": "7"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_8",
                                "order": 8,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_8_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_8_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_9",
                                "order": 9,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_Home_Average",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_9_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_9_PremiumReward1"
                                        },
                                        "dynamicDefinitionId": "Dac_Reward_AscensionMaterials_1000all"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_10",
                                "order": 10,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_10_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_10_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_11",
                                "order": 11,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_11_RegularReward1"
                                        },
                                        "resource": "folio_of_enlightenment",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_11_PremiumReward1"
                                        },
                                        "resource": "folio_of_enlightenment",
                                        "amount": "1"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_12",
                                "order": 12,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_12_RegularReward1"
                                        },
                                        "resource": "research_points",
                                        "amount": "5"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_12_PremiumReward1"
                                        },
                                        "resource": "research_points",
                                        "amount": "7"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_13",
                                "order": 13,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_Farm_Rural",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_13_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_13_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_14",
                                "order": 14,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_14_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_14_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_15",
                                "order": 15,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_CultureSite_Moderate",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_15_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_15_PremiumReward1"
                                        },
                                        "resource": "folio_of_enlightenment",
                                        "amount": "1"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_16",
                                "order": 16,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_16_RegularReward1"
                                        },
                                        "resource": "campaign_battle_ticket",
                                        "amount": "15"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_16_PremiumReward1"
                                        },
                                        "resource": "campaign_battle_ticket",
                                        "amount": "25"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_17",
                                "order": 17,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_17_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_17_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_18",
                                "order": 18,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_18_RegularReward1"
                                        },
                                        "resource": "rift_token_legendary",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_18_PremiumReward1"
                                        },
                                        "resource": "rift_token_legendary",
                                        "amount": "1"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_19",
                                "order": 19,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_19_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_19_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_20",
                                "order": 20,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_20_RegularReward1"
                                        },
                                        "resource": "rift_token_legendary_part",
                                        "amount": "10"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_Farm_Domestic",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_20_PremiumReward1"
                                    }
                                ],
                                "requiredProgress": "12"
                            }
                        ],
                        "shopOfferDefinitionId": "EventPass_Winter_Unlock_1",
                        "isEndless": true,
                        "displayEventType": "event.Event_Winter"
                    },
                    {
                        "@type": "type.googleapis.com/ChestEventDefinitionDTO",
                        "id": "chest_event.Event_Winter",
                        "allowedAmounts": [
                            1,
                            5
                        ],
                        "groups": [
                            {
                                "id": "chest_event_group.Winter_small"
                            },
                            {
                                "id": "chest_event_group.Winter_medium"
                            },
                            {
                                "id": "chest_event_group.Winter_big"
                            }
                        ]
                    },
                    {
                        "@type": "type.googleapis.com/EventRankingDefinitionDTO",
                        "id": "Ranking_Event_Winter",
                        "progressResource": {
                            "id": "event_winter_grand_prize_progress",
                            "traits": [
                                {
                                    "@type": "type.googleapis.com/NotSmallerZeroTraitDTO"
                                },
                                {
                                    "@type": "type.googleapis.com/NotProductionBoostedTraitDTO"
                                }
                            ],
                            "resourceType": "soft_currency",
                            "cities": [
                                "City_Capital"
                            ]
                        },
                        "brackets": [
                            {
                                "id": "Ranking_Event_Winter_Bracket_1",
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "research_points",
                                        "amount": "5"
                                    }
                                ]
                            },
                            {
                                "id": "Ranking_Event_Winter_Bracket_2",
                                "threshold": 0.5,
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "research_points",
                                        "amount": "10"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "rift_token_common",
                                        "amount": "5"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "resource.hero_xp",
                                        "amount": "3000"
                                    }
                                ]
                            },
                            {
                                "id": "Ranking_Event_Winter_Bracket_3",
                                "threshold": 0.8,
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "research_points",
                                        "amount": "15"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "rift_token_common",
                                        "amount": "10"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "resource.hero_xp",
                                        "amount": "7500"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "rift_token_legendary_part",
                                        "amount": "5"
                                    }
                                ]
                            },
                            {
                                "id": "Ranking_Event_Winter_Bracket_4",
                                "threshold": 0.95,
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "research_points",
                                        "amount": "30"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "rift_token_common",
                                        "amount": "15"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "resource.hero_xp",
                                        "amount": "15000"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "rift_token_legendary_part",
                                        "amount": "10"
                                    }
                                ]
                            },
                            {
                                "id": "Ranking_Event_Winter_Bracket_5",
                                "threshold": 0.99,
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "research_points",
                                        "amount": "50"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "rift_token_common",
                                        "amount": "30"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "resource.hero_xp",
                                        "amount": "30000"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "rift_token_legendary",
                                        "amount": "1"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "@type": "type.googleapis.com/EventSeenComponentDTO",
                        "id": "event_seen.Event_Winter"
                    },
                    {
                        "@type": "type.googleapis.com/EventPityComponentDTO",
                        "id": "event_pity.Event_Winter",
                        "removeAtEventEnd": [
                            "Pity_Event_Winter"
                        ]
                    },
                    {
                        "@type": "type.googleapis.com/EventResourceComponentDTO",
                        "id": "event_resources.Event_Winter",
                        "grantAtEventStart": [
                            {
                                "definitionId": "event_winter_tokens",
                                "amount": "225"
                            }
                        ],
                        "removeAtEventEnd": [
                            "event_winter_tokens",
                            "event_winter_grand_prize_progress"
                        ]
                    }
                ],
                "requirements": [
                    {
                        "@type": "type.googleapis.com/UnlockableFeatureRequirementDTO",
                        "requiredFeature": "UnlockableFeatureConstant_EVENTS"
                    }
                ]
            },
            "start": "2024-12-11T12:00:00Z",
            "end": "2025-01-08T12:00:00Z",
            "expiry": "2025-01-22T12:00:00Z",
            "state": "ACTIVE",
            "componentStates": {
                "event_seen.Event_Winter": {
                    "@type": "type.googleapis.com/EventSeenDTO",
                    "startScreenSeen": true
                },
                "chest_event.Event_Winter": {
                    "@type": "type.googleapis.com/ChestEventDTO",
                    "chests": [
                        {
                            "groupDefinitionId": "chest_event_group.Winter_big",
                            "action": {
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "event_winter_grand_prize_progress",
                                        "amount": "3"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Winter_antimatter_big_reward"
                                        },
                                        "resource": "rift_token_common_part",
                                        "amount": "3"
                                    },
                                    {
                                        "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                        "baseData": {
                                            "id": "Winter_antimatter_big_dailyspecial"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/EventDailySpecialRewardDTO",
                                                "baseData": {
                                                    "id": "Winter_antimatter_big_dailyspecial_reward",
                                                    "rarity": "Rarity_RARE"
                                                },
                                                "eventDefinitionId": "event.Event_Winter"
                                            },
                                            {
                                                "@type": "type.googleapis.com/LootContainerRewardDTO",
                                                "baseData": {
                                                    "id": "Winter_antimatter_big_dailyspecial_noreward",
                                                    "hidden": true
                                                }
                                            }
                                        ],
                                        "chances": [
                                            15,
                                            85
                                        ],
                                        "components": [
                                            {
                                                "@type": "type.googleapis.com/PityComponentDTO",
                                                "id": "Winter_DailySpecial_Pity_Large",
                                                "pityDefinitionId": "Pity_Event_Winter",
                                                "fillValue": 15
                                            }
                                        ],
                                        "randomSeedCounter": "default"
                                    }
                                ],
                                "costs": [
                                    {
                                        "@type": "type.googleapis.com/ResourceDTO",
                                        "definitionId": "event_winter_tokens",
                                        "amount": "270"
                                    }
                                ]
                            },
                            "seed": "4285525198559243499"
                        },
                        {
                            "groupDefinitionId": "chest_event_group.Winter_small",
                            "action": {
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "event_winter_grand_prize_progress",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Winter_coins_small_reward"
                                        },
                                        "resource": "campaign_battle_ticket",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                        "baseData": {
                                            "id": "Winter_coins_small_dailyspecial"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/EventDailySpecialRewardDTO",
                                                "baseData": {
                                                    "id": "Winter_coins_small_dailyspecial_reward",
                                                    "rarity": "Rarity_RARE"
                                                },
                                                "eventDefinitionId": "event.Event_Winter"
                                            },
                                            {
                                                "@type": "type.googleapis.com/LootContainerRewardDTO",
                                                "baseData": {
                                                    "id": "Winter_coins_small_dailyspecial_noreward",
                                                    "hidden": true
                                                }
                                            }
                                        ],
                                        "chances": [
                                            5,
                                            95
                                        ],
                                        "components": [
                                            {
                                                "@type": "type.googleapis.com/PityComponentDTO",
                                                "id": "Winter_DailySpecial_Pity_Small",
                                                "pityDefinitionId": "Pity_Event_Winter",
                                                "fillValue": 5
                                            }
                                        ],
                                        "randomSeedCounter": "default"
                                    }
                                ],
                                "costs": [
                                    {
                                        "@type": "type.googleapis.com/ResourceDTO",
                                        "definitionId": "event_winter_tokens",
                                        "amount": "90"
                                    }
                                ]
                            },
                            "seed": "-1990520703762360224"
                        },
                        {
                            "groupDefinitionId": "chest_event_group.Winter_medium",
                            "action": {
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {},
                                        "resource": "event_winter_grand_prize_progress",
                                        "amount": "2"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Winter_coins_medium_reward"
                                        },
                                        "resource": "campaign_battle_ticket",
                                        "amount": "2"
                                    },
                                    {
                                        "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                        "baseData": {
                                            "id": "Winter_coins_medium_dailyspecial"
                                        },
                                        "rewards": [
                                            {
                                                "@type": "type.googleapis.com/EventDailySpecialRewardDTO",
                                                "baseData": {
                                                    "id": "Winter_coins_medium_dailyspecial_reward",
                                                    "rarity": "Rarity_RARE"
                                                },
                                                "eventDefinitionId": "event.Event_Winter"
                                            },
                                            {
                                                "@type": "type.googleapis.com/LootContainerRewardDTO",
                                                "baseData": {
                                                    "id": "Winter_coins_medium_dailyspecial_noreward",
                                                    "hidden": true
                                                }
                                            }
                                        ],
                                        "chances": [
                                            10,
                                            90
                                        ],
                                        "components": [
                                            {
                                                "@type": "type.googleapis.com/PityComponentDTO",
                                                "id": "Winter_DailySpecial_Pity_Medium",
                                                "pityDefinitionId": "Pity_Event_Winter",
                                                "fillValue": 10
                                            }
                                        ],
                                        "randomSeedCounter": "default"
                                    }
                                ],
                                "costs": [
                                    {
                                        "@type": "type.googleapis.com/ResourceDTO",
                                        "definitionId": "event_winter_tokens",
                                        "amount": "180"
                                    }
                                ]
                            },
                            "seed": "-7617918455346873760"
                        }
                    ]
                },
                "event_ranking.Ranking_Event_Winter": {
                    "@type": "type.googleapis.com/EventRankingStateDTO"
                },
                "event_daily_special.Event_Winter": {
                    "@type": "type.googleapis.com/EventDailySpecialDTO",
                    "eventDay": 18,
                    "reward": {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "Event_Winter_Reward_18"
                        },
                        "dynamicDefinitionId": "Dac_Reward_AscensionMaterial_Herbology"
                    }
                },
                "season_pass.Event_Winter": {
                    "@type": "type.googleapis.com/SeasonPassEventDTO",
                    "definition": {
                        "id": "season_pass.Event_Winter",
                        "group": "Event_Winter",
                        "resourceDefinitionId": "event_winter_grand_prize_progress",
                        "checkpoints": [
                            {
                                "id": "Event_Winter_Checkpoint_1",
                                "order": 1,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_CultureSite_Compact",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_1_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_1_PremiumReward1"
                                        },
                                        "resource": "campaign_battle_ticket",
                                        "amount": "25"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_2",
                                "order": 2,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_2_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_2_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_3",
                                "order": 3,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_CultureSite_Little",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_3_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_3_PremiumReward1"
                                        },
                                        "dynamicDefinitionId": "Dac_Reward_Goods_250"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_4",
                                "order": 4,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_4_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_4_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_5",
                                "order": 5,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_Home_Small",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_5_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_5_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_6",
                                "order": 6,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_6_RegularReward1"
                                        },
                                        "resource": "rift_token_legendary_part",
                                        "amount": "2"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_6_PremiumReward1"
                                        },
                                        "resource": "rift_token_legendary_part",
                                        "amount": "3"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_7",
                                "order": 7,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_7_RegularReward1"
                                        },
                                        "resource": "ambrosia",
                                        "amount": "5"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_7_PremiumReward1"
                                        },
                                        "resource": "ambrosia",
                                        "amount": "7"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_8",
                                "order": 8,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_8_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_8_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_9",
                                "order": 9,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_Home_Average",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_9_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_9_PremiumReward1"
                                        },
                                        "dynamicDefinitionId": "Dac_Reward_AscensionMaterials_1000all"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_10",
                                "order": 10,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_10_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_10_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_11",
                                "order": 11,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_11_RegularReward1"
                                        },
                                        "resource": "folio_of_enlightenment",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_11_PremiumReward1"
                                        },
                                        "resource": "folio_of_enlightenment",
                                        "amount": "1"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_12",
                                "order": 12,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_12_RegularReward1"
                                        },
                                        "resource": "research_points",
                                        "amount": "5"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_12_PremiumReward1"
                                        },
                                        "resource": "research_points",
                                        "amount": "7"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_13",
                                "order": 13,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_Farm_Rural",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_13_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_13_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_14",
                                "order": 14,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_14_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_14_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_15",
                                "order": 15,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_CultureSite_Moderate",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_15_RegularReward1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_15_PremiumReward1"
                                        },
                                        "resource": "folio_of_enlightenment",
                                        "amount": "1"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_16",
                                "order": 16,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_16_RegularReward1"
                                        },
                                        "resource": "campaign_battle_ticket",
                                        "amount": "15"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_16_PremiumReward1"
                                        },
                                        "resource": "campaign_battle_ticket",
                                        "amount": "25"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_17",
                                "order": 17,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_17_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_17_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_18",
                                "order": 18,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_18_RegularReward1"
                                        },
                                        "resource": "rift_token_legendary",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_18_PremiumReward1"
                                        },
                                        "resource": "rift_token_legendary",
                                        "amount": "1"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_19",
                                "order": 19,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_19_RegularReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "1"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_19_PremiumReward1"
                                        },
                                        "resource": "rift_token_common",
                                        "amount": "2"
                                    }
                                ],
                                "requiredProgress": "12"
                            },
                            {
                                "id": "Event_Winter_Checkpoint_20",
                                "order": 20,
                                "regularRewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Event_Winter_Checkpoint_20_RegularReward1"
                                        },
                                        "resource": "rift_token_legendary_part",
                                        "amount": "10"
                                    }
                                ],
                                "premiumRewards": [
                                    {
                                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                                        "definition": "BuildingCustomization_EventWinter_Farm_Domestic",
                                        "amount": 1,
                                        "id": "Event_Winter_Checkpoint_20_PremiumReward1"
                                    }
                                ],
                                "requiredProgress": "12"
                            }
                        ],
                        "shopOfferDefinitionId": "EventPass_Winter_Unlock_1",
                        "isEndless": true,
                        "displayEventType": "event.Event_Winter"
                    },
                    "startAt": "2024-12-11T12:00:00Z",
                    "endAt": "2025-01-08T12:00:00Z",
                    "state": {
                        "definitionId": "season_pass.Event_Winter",
                        "age": "AgeOfTheFranks",
                        "regularCheckpoint": 6,
                        "progress": "78"
                    },
                    "isNew": true,
                    "id": "356966",
                    "eventDay": 18
                }
            }
        }
    ]
}

export default _events;