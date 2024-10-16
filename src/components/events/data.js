import icon_event_world_fair_tokens from "../../images/events/intro/icon_event_world_fair_tokens.webp";
import icon_event_worldfair_2024_grand_prize_progress from "../../images/events/grand-prizes/icon_event_worldfair_2024_grand_prize_progress.webp";
import Questgiver_BenjaminFranklin from "../../images/events/quests/Questgiver_BenjaminFranklin.webp";
import world_fair_event_shop_tier_1 from "../../images/events/intro/world_fair_event_shop_tier_1.webp";

const allEvents = [
    {
        id: "world_fair_2024",
        name: "World Fair 2024",
        image: icon_event_world_fair_tokens,
        startDate: "October 23th 2024",
        endDate: "November 13th 2024",
        headerImage: Questgiver_BenjaminFranklin,
        questgiverName: "Benjamin Franklin",
        type: "merge_event",
        mergeEventImages: {

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
        ],
        dailySpecials: [
            {
                resource: "antimatter_common_part",
                amount: 10
            },
            {
                resource: "chest_color_crests_red_common_enhanced",
                amount: 1
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