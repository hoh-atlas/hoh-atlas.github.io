const checkpoints = [
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_48000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_48000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/RewardDefinitionDTO",
                        "id": "Reward_AllAge_CollectorBuildings_1",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                "baseData": {
                                    "id": "Reward_AllAge_CollectorBuildings_1_Id"
                                },
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_1",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "maxAgeDefinition": "StoneAge"
                                                }
                                            ]
                                        },
                                        "resource": "research_points",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_2",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "BronzeAge"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_2_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_3",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "BronzeAge"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_3_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_4",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "MinoanEra"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_4_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                                        "amount": "1"
                                    }
                                ],
                                "chances": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "assetId": "icon_chest_puzzlepieces",
                                "randomSeedCounter": "default"
                            }
                        ],
                        "baseData": {
                            "id": "Reward_AllAge_CollectorBuildings_1"
                        }
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_48000_Reward_2"
                        },
                        "resource": "research_points",
                        "amount": "2"
                    },
                    {
                        "@type": "type.googleapis.com/RewardDefinitionDTO",
                        "id": "reward.TreasureHunt_MS_Goods_T5",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/LootContainerRewardDTO",
                                "baseData": {
                                    "id": "TreasureHunt_MS_Goods_T5_Id"
                                },
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                        "baseData": {
                                            "id": "TreasureHunt_MS_Goods_T5_Reward_1"
                                        },
                                        "dynamicDefinitionId": "Dac_ATH_MS_Goods_T5"
                                    }
                                ],
                                "assetId": "icon_chest_good2"
                            }
                        ],
                        "baseData": {
                            "id": "reward.TreasureHunt_MS_Goods_T5"
                        }
                    }
                ],
                "chances": [
                    30,
                    45,
                    25
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_48000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_63000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_63000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_63000_Reward_1"
                        },
                        "resource": "rift_token_legendary_part",
                        "amount": "1"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_63000_Reward_2"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Coins_T8"
                    },
                    {
                        "@type": "type.googleapis.com/RewardDefinitionDTO",
                        "id": "reward.TreasureHunt_MS_Goods_T6",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/LootContainerRewardDTO",
                                "baseData": {
                                    "id": "TreasureHunt_MS_Goods_T6_Id"
                                },
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                        "baseData": {
                                            "id": "TreasureHunt_MS_Goods_T6_Reward_1"
                                        },
                                        "dynamicDefinitionId": "Dac_ATH_MS_Goods_T6"
                                    }
                                ],
                                "assetId": "icon_chest_good2"
                            }
                        ],
                        "baseData": {
                            "id": "reward.TreasureHunt_MS_Goods_T6"
                        }
                    }
                ],
                "chances": [
                    10,
                    70,
                    20
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_63000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_58000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_58000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_58000_Reward_1"
                        },
                        "resource": "rift_token_common",
                        "amount": "2"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_58000_Reward_2"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_MasteryPoints_T5"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_58000_Reward_3"
                        },
                        "resource": "resource.hero_xp",
                        "amount": "1500"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_58000_Reward_4"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Food_T8"
                    }
                ],
                "chances": [
                    20,
                    30,
                    30,
                    20
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_58000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_24000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_24000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/RewardDefinitionDTO",
                        "id": "Reward_AllAge_CollectorBuildings_1",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                "baseData": {
                                    "id": "Reward_AllAge_CollectorBuildings_1_Id"
                                },
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_1",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "maxAgeDefinition": "StoneAge"
                                                }
                                            ]
                                        },
                                        "resource": "research_points",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_2",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "BronzeAge"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_2_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_3",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "BronzeAge"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_3_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_4",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "MinoanEra"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_4_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                                        "amount": "1"
                                    }
                                ],
                                "chances": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "assetId": "icon_chest_puzzlepieces",
                                "randomSeedCounter": "default"
                            }
                        ],
                        "baseData": {
                            "id": "Reward_AllAge_CollectorBuildings_1"
                        }
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_24000_Reward_2"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_MasteryPoints_T3"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_24000_Reward_3"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Food_T6"
                    }
                ],
                "chances": [
                    20,
                    30,
                    50
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_24000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_4500",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_4500_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_4500_Reward_1"
                        },
                        "resource": "EvolutionToken|Building_TreasureHunt_Evolving_FountainOfYouth_1",
                        "amount": "1"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_4500_Reward_2"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Food_T3"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_4500_Reward_3"
                        },
                        "resource": "campaign_energy",
                        "amount": "10"
                    }
                ],
                "chances": [
                    10,
                    60,
                    30
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_4500"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_43000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_43000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                        "definition": "BuildingCustomization_TreasureHunt_SparklingFortune",
                        "amount": 1,
                        "id": "TreasureHunt_Milestone_43000_Reward_1"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_43000_Reward_2"
                        },
                        "resource": "resource.hero_xp",
                        "amount": "700"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_43000_Reward_3"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Food_T7"
                    }
                ],
                "chances": [
                    20,
                    30,
                    50
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_43000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_31000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_31000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_31000_Reward_1"
                        },
                        "resource": "EvolutionToken|Building_TreasureHunt_Evolving_FountainOfYouth_1",
                        "amount": "1"
                    },
                    {
                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                        "definition": "BuildingCustomization_TreasureHunt_LongNine",
                        "amount": 1,
                        "id": "TreasureHunt_Milestone_31000_Reward_2"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_31000_Reward_3"
                        },
                        "resource": "resource.hero_xp",
                        "amount": "700"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_31000_Reward_4"
                        },
                        "resource": "campaign_battle_ticket",
                        "amount": "2"
                    }
                ],
                "chances": [
                    30,
                    20,
                    30,
                    20
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_31000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_80000",
        "rewards": [
            {
                "@type": "type.googleapis.com/LootContainerRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_80000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_80000_Reward_1"
                        },
                        "resource": "EvolutionToken|Building_TreasureHunt_Evolving_FountainOfYouth_1",
                        "amount": "1"
                    }
                ]
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_80000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_53000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_53000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_53000_Reward_1"
                        },
                        "resource": "EvolutionToken|Building_TreasureHunt_Evolving_FountainOfYouth_1",
                        "amount": "1"
                    },
                    {
                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                        "definition": "BuildingCustomization_TreasureHunt_TropicalFruitFarm",
                        "amount": 1,
                        "id": "TreasureHunt_Milestone_53000_Reward_2"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_53000_Reward_3"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Coins_T7"
                    }
                ],
                "chances": [
                    40,
                    20,
                    40
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_53000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_8000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_8000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                        "definition": "BuildingCustomization_TreasureHunt_SugarcaneDistillery",
                        "amount": 1,
                        "id": "TreasureHunt_Milestone_8000_Reward_1"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_8000_Reward_2"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Coins_T4"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_8000_Reward_3"
                        },
                        "resource": "campaign_battle_ticket",
                        "amount": "2"
                    }
                ],
                "chances": [
                    20,
                    60,
                    20
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_8000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_18000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_18000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_18000_Reward_1"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_MasteryPoints_T2"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_18000_Reward_2"
                        },
                        "resource": "research_points",
                        "amount": "2"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_18000_Reward_3"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Food_T5"
                    }
                ],
                "chances": [
                    30,
                    30,
                    40
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_18000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_21000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_21000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                        "definition": "BuildingCustomization_TreasureHunt_JollyRoger",
                        "amount": 1,
                        "id": "TreasureHunt_Milestone_21000_Reward_1"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_21000_Reward_2"
                        },
                        "resource": "resource.hero_xp",
                        "amount": "300"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_21000_Reward_3"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Coins_T5"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_21000_Reward_4"
                        },
                        "resource": "campaign_battle_ticket",
                        "amount": "1"
                    }
                ],
                "chances": [
                    20,
                    30,
                    30,
                    20
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_21000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_6200",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_6200_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_6200_Reward_1"
                        },
                        "resource": "resource.hero_xp",
                        "amount": "100"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_6200_Reward_2"
                        },
                        "resource": "research_points",
                        "amount": "2"
                    },
                    {
                        "@type": "type.googleapis.com/RewardDefinitionDTO",
                        "id": "reward.TreasureHunt_MS_Goods_T2",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/LootContainerRewardDTO",
                                "baseData": {
                                    "id": "TreasureHunt_MS_Goods_T2_Id"
                                },
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                        "baseData": {
                                            "id": "TreasureHunt_MS_Goods_T2_Reward_1"
                                        },
                                        "dynamicDefinitionId": "Dac_ATH_MS_Goods_T2"
                                    }
                                ],
                                "assetId": "icon_chest_good2"
                            }
                        ],
                        "baseData": {
                            "id": "reward.TreasureHunt_MS_Goods_T2"
                        }
                    }
                ],
                "chances": [
                    30,
                    20,
                    50
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_6200"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_15000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_15000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_15000_Reward_1"
                        },
                        "resource": "EvolutionToken|Building_TreasureHunt_Evolving_FountainOfYouth_1",
                        "amount": "1"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_15000_Reward_2"
                        },
                        "resource": "resource.hero_xp",
                        "amount": "300"
                    },
                    {
                        "@type": "type.googleapis.com/RewardDefinitionDTO",
                        "id": "reward.TreasureHunt_MS_Goods_T3",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/LootContainerRewardDTO",
                                "baseData": {
                                    "id": "TreasureHunt_MS_Goods_T3_Id"
                                },
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                        "baseData": {
                                            "id": "TreasureHunt_MS_Goods_T3_Reward_1"
                                        },
                                        "dynamicDefinitionId": "Dac_ATH_MS_Goods_T3"
                                    }
                                ],
                                "assetId": "icon_chest_good2"
                            }
                        ],
                        "baseData": {
                            "id": "reward.TreasureHunt_MS_Goods_T3"
                        }
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_15000_Reward_4"
                        },
                        "resource": "campaign_energy",
                        "amount": "20"
                    }
                ],
                "chances": [
                    20,
                    30,
                    20,
                    30
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_15000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_74000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_74000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_74000_Reward_1"
                        },
                        "resource": "EvolutionToken|Building_TreasureHunt_Evolving_FountainOfYouth_1",
                        "amount": "1"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_74000_Reward_2"
                        },
                        "resource": "rift_token_common",
                        "amount": "2"
                    }
                ],
                "chances": [
                    50,
                    50
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_74000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_35000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_35000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_35000_Reward_1"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_MasteryPoints_T4"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_35000_Reward_2"
                        },
                        "resource": "research_points",
                        "amount": "2"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_35000_Reward_3"
                        },
                        "resource": "campaign_energy",
                        "amount": "30"
                    }
                ],
                "chances": [
                    30,
                    40,
                    30
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_35000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_3100",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_3100_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                        "definition": "BuildingCustomization_TreasureHunt_VoodooHead",
                        "amount": 1,
                        "id": "TreasureHunt_Milestone_3100_Reward_1"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_3100_Reward_2"
                        },
                        "resource": "resource.hero_xp",
                        "amount": "100"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_3100_Reward_3"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Coins_T3"
                    }
                ],
                "chances": [
                    20,
                    30,
                    50
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_3100"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_150",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_150_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_150_Reward_1"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Coins_T1"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_150_Reward_2"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Food_T1"
                    }
                ],
                "chances": [
                    50,
                    50
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_150"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_39000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_39000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/RewardDefinitionDTO",
                        "id": "Reward_AllAge_CollectorBuildings_1",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                "baseData": {
                                    "id": "Reward_AllAge_CollectorBuildings_1_Id"
                                },
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_1",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "maxAgeDefinition": "StoneAge"
                                                }
                                            ]
                                        },
                                        "resource": "research_points",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_2",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "BronzeAge"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_2_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_3",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "BronzeAge"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_3_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_4",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "MinoanEra"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_4_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                                        "amount": "1"
                                    }
                                ],
                                "chances": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "assetId": "icon_chest_puzzlepieces",
                                "randomSeedCounter": "default"
                            }
                        ],
                        "baseData": {
                            "id": "Reward_AllAge_CollectorBuildings_1"
                        }
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_39000_Reward_2"
                        },
                        "resource": "resource.hero_xp",
                        "amount": "700"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_39000_Reward_3"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Coins_T6"
                    }
                ],
                "chances": [
                    25,
                    30,
                    45
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_39000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_27000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_27000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_27000_Reward_1"
                        },
                        "resource": "rift_token_common",
                        "amount": "2"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_27000_Reward_2"
                        },
                        "resource": "research_points",
                        "amount": "2"
                    },
                    {
                        "@type": "type.googleapis.com/RewardDefinitionDTO",
                        "id": "reward.TreasureHunt_MS_Goods_T4",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/LootContainerRewardDTO",
                                "baseData": {
                                    "id": "TreasureHunt_MS_Goods_T4_Id"
                                },
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                        "baseData": {
                                            "id": "TreasureHunt_MS_Goods_T4_Reward_1"
                                        },
                                        "dynamicDefinitionId": "Dac_ATH_MS_Goods_T4"
                                    }
                                ],
                                "assetId": "icon_chest_good2"
                            }
                        ],
                        "baseData": {
                            "id": "reward.TreasureHunt_MS_Goods_T4"
                        }
                    }
                ],
                "chances": [
                    20,
                    35,
                    45
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_27000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_68000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_68000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                        "definition": "BuildingCustomization_TreasureHunt_ScallywagsShanty",
                        "amount": 1,
                        "id": "TreasureHunt_Milestone_68000_Reward_1"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_68000_Reward_2"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_MasteryPoints_T6"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_68000_Reward_3"
                        },
                        "resource": "resource.hero_xp",
                        "amount": "3000"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_68000_Reward_4"
                        },
                        "resource": "research_points",
                        "amount": "5"
                    }
                ],
                "chances": [
                    20,
                    30,
                    30,
                    20
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_68000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_12000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_12000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/BuildingCustomizationRewardDTO",
                        "definition": "BuildingCustomization_TreasureHunt_RobberCrab",
                        "amount": 1,
                        "id": "TreasureHunt_Milestone_12000_Reward_1"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_12000_Reward_2"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_MasteryPoints_T1"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_12000_Reward_3"
                        },
                        "resource": "research_points",
                        "amount": "2"
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_12000_Reward_4"
                        },
                        "resource": "campaign_battle_ticket",
                        "amount": "1"
                    }
                ],
                "chances": [
                    20,
                    30,
                    25,
                    25
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_12000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_1900",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_1900_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_1900_Reward_1"
                        },
                        "resource": "research_points",
                        "amount": "1"
                    },
                    {
                        "@type": "type.googleapis.com/RewardDefinitionDTO",
                        "id": "reward.TreasureHunt_MS_Goods_T1",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/LootContainerRewardDTO",
                                "baseData": {
                                    "id": "TreasureHunt_MS_Goods_T1_Id"
                                },
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                                        "baseData": {
                                            "id": "TreasureHunt_MS_Goods_T1_Reward_1"
                                        },
                                        "dynamicDefinitionId": "Dac_ATH_MS_Goods_T1"
                                    }
                                ],
                                "assetId": "icon_chest_good2"
                            }
                        ],
                        "baseData": {
                            "id": "reward.TreasureHunt_MS_Goods_T1"
                        }
                    }
                ],
                "chances": [
                    20,
                    80
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_1900"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_10000",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_10000_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/RewardDefinitionDTO",
                        "id": "Reward_AllAge_CollectorBuildings_1",
                        "rewards": [
                            {
                                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                                "baseData": {
                                    "id": "Reward_AllAge_CollectorBuildings_1_Id"
                                },
                                "rewards": [
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_1",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "maxAgeDefinition": "StoneAge"
                                                }
                                            ]
                                        },
                                        "resource": "research_points",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_2",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "BronzeAge"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_2_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_BronzeAge_Collectable_School_1",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_3",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "BronzeAge"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_3_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_MinoanEra_Collectable_MinoanWatchtower_1",
                                        "amount": "1"
                                    },
                                    {
                                        "@type": "type.googleapis.com/ResourceRewardDTO",
                                        "baseData": {
                                            "id": "Reward_AllAge_CollectorBuildings_1_4",
                                            "requirements": [
                                                {
                                                    "@type": "type.googleapis.com/AgeRequirementDTO",
                                                    "minAgeDefinition": "MinoanEra"
                                                },
                                                {
                                                    "@type": "type.googleapis.com/ResourceCapNotReachedRequirementDTO",
                                                    "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1"
                                                }
                                            ],
                                            "replacementReward": {
                                                "@type": "type.googleapis.com/ResourceRewardDTO",
                                                "baseData": {
                                                    "id": "Reward_AllAge_CollectorBuildings_1_4_REP"
                                                },
                                                "resource": "research_points",
                                                "amount": "1"
                                            }
                                        },
                                        "resource": "BuildingPiece|Building_ClassicGreece_Collectable_ArchitectsStudio_1",
                                        "amount": "1"
                                    }
                                ],
                                "chances": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "assetId": "icon_chest_puzzlepieces",
                                "randomSeedCounter": "default"
                            }
                        ],
                        "baseData": {
                            "id": "Reward_AllAge_CollectorBuildings_1"
                        }
                    },
                    {
                        "@type": "type.googleapis.com/ResourceRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_10000_Reward_2"
                        },
                        "resource": "rift_token_common",
                        "amount": "1"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_10000_Reward_3"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Food_T4"
                    }
                ],
                "chances": [
                    20,
                    20,
                    60
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_10000"
        }
    },
    {
        "@type": "type.googleapis.com/RewardDefinitionDTO",
        "id": "reward.TreasureHunt_Milestone_900",
        "rewards": [
            {
                "@type": "type.googleapis.com/MysteryChestRewardDTO",
                "baseData": {
                    "id": "TreasureHunt_Milestone_900_Id"
                },
                "rewards": [
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_900_Reward_1"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Coins_T2"
                    },
                    {
                        "@type": "type.googleapis.com/DynamicActionChangeRewardDTO",
                        "baseData": {
                            "id": "TreasureHunt_Milestone_900_Reward_2"
                        },
                        "dynamicDefinitionId": "Dac_ATH_MS_Food_T2"
                    }
                ],
                "chances": [
                    50,
                    50
                ],
                "randomSeedCounter": "TreasureHunt_MS_Counter_1"
            }
        ],
        "baseData": {
            "id": "reward.TreasureHunt_Milestone_900"
        }
    }
]

export default checkpoints;