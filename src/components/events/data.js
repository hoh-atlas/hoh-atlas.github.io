import icon_event_world_fair_tokens from "../../images/events/intro/icon_event_world_fair_tokens.webp";
import icon_event_worldfair_2024_grand_prize_progress from "../../images/events/grand-prizes/icon_event_worldfair_2024_grand_prize_progress.webp";
import Questgiver_BenjaminFranklin from "../../images/events/quests/Questgiver_BenjaminFranklin.webp";
import world_fair_event_shop_tier_1 from "../../images/events/intro/world_fair_event_shop_tier_1.webp";
import world_fair_2024_artifact_1 from "../../images/events/intro/world_fair_2024_artifact_1.webp";
import world_fair_2024_artifact_2 from "../../images/events/intro/world_fair_2024_artifact_2.webp";
import world_fair_2024_artifact_3 from "../../images/events/intro/world_fair_2024_artifact_3.webp";
import world_fair_2024_artifact_4 from "../../images/events/intro/world_fair_2024_artifact_4.webp";
import world_fair_2024_artifact_5 from "../../images/events/intro/world_fair_2024_artifact_5.webp";
import world_fair_2024_rareflower_1 from "../../images/events/intro/world_fair_2024_rareflower_1.webp";
import world_fair_2024_rareflower_2 from "../../images/events/intro/world_fair_2024_rareflower_2.webp";
import world_fair_2024_rareflower_3 from "../../images/events/intro/world_fair_2024_rareflower_3.webp";
import world_fair_2024_rareflower_4 from "../../images/events/intro/world_fair_2024_rareflower_4.webp";
import world_fair_2024_rareflower_5 from "../../images/events/intro/world_fair_2024_rareflower_5.webp";
import world_fair_2024_invention_1 from "../../images/events/intro/world_fair_2024_invention_1.webp";
import world_fair_2024_invention_2 from "../../images/events/intro/world_fair_2024_invention_2.webp";
import world_fair_2024_invention_3 from "../../images/events/intro/world_fair_2024_invention_3.webp";
import world_fair_2024_invention_4 from "../../images/events/intro/world_fair_2024_invention_4.webp";
import world_fair_2024_invention_5 from "../../images/events/intro/world_fair_2024_invention_5.webp";

const allEvents = [
    {
        id: "world_fair_2024",
        name: "World Fair 2024",
        image: icon_event_world_fair_tokens,
        startDate: "October 23th 2024",
        endDate: "November 13th 2024",
        betaStartDate: "October 15th 2024",
        headerImage: Questgiver_BenjaminFranklin,
        questgiverName: "Benjamin Franklin",
        type: "merge_event",
        mergeEventData: {
            items: [
                {
                    name: "Artifact",
                    levelsImages: [world_fair_2024_artifact_1,world_fair_2024_artifact_2,world_fair_2024_artifact_3,world_fair_2024_artifact_4,world_fair_2024_artifact_5]
                },
                {
                    name: "Rare Flower",
                    levelsImages: [world_fair_2024_rareflower_1,world_fair_2024_rareflower_2,world_fair_2024_rareflower_3,world_fair_2024_rareflower_4,world_fair_2024_rareflower_5]
                },
                {
                    name: "Invention",
                    levelsImages: [world_fair_2024_invention_1,world_fair_2024_invention_2,world_fair_2024_invention_3,world_fair_2024_invention_4,world_fair_2024_invention_5]
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
            image: icon_event_world_fair_tokens
        },
        payback: {
            name: "Energy",
            image: icon_event_worldfair_2024_grand_prize_progress
        },
        questlineColor: "#686cfe",
        questlines: [
            {   
                id: 1,
                appearsAfter: [],
                name: "World Fair Event Questline I",
                questgiver: Questgiver_BenjaminFranklin,
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
                questgiver: Questgiver_BenjaminFranklin,
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
                questgiver: Questgiver_BenjaminFranklin,
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
                questgiver: Questgiver_BenjaminFranklin,
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
                questgiver: Questgiver_BenjaminFranklin,
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
                questgiver: Questgiver_BenjaminFranklin,
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
                resource: "chest_color_crests_red_common_enhanced_superior",
                amount: 1,
                //note: "For players in early eras, the chest only contains common and enhanced crests."
            },
            {
                resource: "war_horn",
                amount: 1
            },
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "chest_color_crests_blue_common_enhanced_superior",
                amount: 1
            },
            {
                resource: "customization_world_fair_2024_ticket_booth",
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