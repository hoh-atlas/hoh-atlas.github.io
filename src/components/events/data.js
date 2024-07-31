const allEvents = [
    {
        id: "egypt_great_sphinx",
        name: "The Trade Exhibition",
        image: "https://i.ibb.co/hFQjh3W/btn-event-city-wonder-egypt-greatsphinx.png",
        questlines: [
            {   
                id: 1,
                order: 1,
                name: "The Trade Exhibition",
                questgiver: "https://i.ibb.co/9gDdcQ6/Questgiver-Egypt-Cleopatra.png",
                reward: {
                    resource: "deben",
                    amount: 250
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rise of Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 25
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>4 Small Home</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Medium Home</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "deben",
                            amount: 50
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>50 Deben</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "deben",
                            amount: 75
                        }
                    }
                ]
            },
            {   
                id: 2,
                order: 2,
                name: "Papyrus Scrolls",
                questgiver: "https://i.ibb.co/9gDdcQ6/Questgiver-Egypt-Cleopatra.png",
                reward: {
                    resource: "deben",
                    amount: 500
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Papyrus Scroll</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 60
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Papyrus Field</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Luxurious Papyrus Field</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "papyrus",
                            amount: 120
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>15 Papyrus</b> in <b>Egypt</b>",
                            "Have <b>1 Papyrus Press</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "papyrus",
                            amount: 200
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>4 Papyrus Scroll</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "papyrus",
                            amount: 250
                        }
                    }
                ]
            },
            {   
                id: 3,
                order: 2,
                name: "Ankhs",
                questgiver: "https://i.ibb.co/9gDdcQ6/Questgiver-Egypt-Cleopatra.png",
                reward: {
                    resource: "deben",
                    amount: 500
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Ankh</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 40
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Gold Mine</b> on level <b>1</b> in <b>Egypt</b>",
                            "Have <b>1 Luxurious Gold Mine</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "gold_ore",
                            amount: 80
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>10 Gold Ore</b> in <b>Egypt</b>",
                            "Have <b>1 Goldsmith</b> on level <b>1</b> in <b>Egypt</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "gold_ore",
                            amount: 120
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>3 Ankh</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "gold_ore",
                            amount: 150
                        }
                    }
                ]
            }
        ],
        buildingCategories: {
            "home": {
                categoryName: "Home",
                buildings: [
                    {
                        id: "small_home",
                        name: "Small Home",
                        size: "3x2",
                        cap: "∞",
                        levels: [
                            {
                                level: 1,
                                image: "https://i.ibb.co/fF8K4XR/Egypt-Small-Home-1.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 100
                                    }
                                ],
                                construction: {
                                    time: "5s",
                                    worker_entity: {
                                        amount: 1,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 2000,
                                    time: "2h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 1,
                                        type: "egypt_worker"
                                    }
                                }
                            },
                            {
                                level: 2,
                                image: "https://i.ibb.co/sqnS25d/Egypt-Small-Home-2.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 150
                                    }
                                ],
                                construction: {
                                    time: "15s",
                                    worker_entity: {
                                        amount: 1,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 4000,
                                    time: "2h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 1,
                                        type: "egypt_worker"
                                    }
                                }
                            },
                            {
                                level: 3,
                                image: "https://i.ibb.co/tcgLgwK/Egypt-Small-Home-3.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 15000
                                    }
                                ],
                                construction: {
                                    time: "1m",
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 8000,
                                    time: "2h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 1,
                                        type: "egypt_worker"
                                    }
                                }
                            },
                            {
                                level: 4,
                                image: "https://i.ibb.co/WxL8Xy8/Egypt-Small-Home-4.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 50000
                                    }
                                ],
                                construction: {
                                    time: "3m",
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 15000,
                                    time: "2h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 1,
                                        type: "egypt_worker"
                                    }
                                }
                            },
                            {
                                level: 5,
                                image: "https://i.ibb.co/1RZhxnX/Egypt-Small-Home-5.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 85000
                                    }
                                ],
                                construction: {
                                    time: "12m",
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 23000,
                                    time: "2h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 1,
                                        type: "egypt_worker"
                                    }
                                }
                            },
                            {
                                level: 6,
                                image: "https://i.ibb.co/TkddDcf/Egypt-Small-Home-6.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 145000
                                    }
                                ],
                                construction: {
                                    time: "25m",
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 35000,
                                    time: "2h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 1,
                                        type: "egypt_worker"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        id: "medium_home",
                        name: "Medium Home",
                        size: "4x3",
                        levels: [
                            {
                                level: 1,
                                image: "https://i.ibb.co/zGtcq21/Egypt-Average-Home-1.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 175
                                    }
                                ],
                                construction: {
                                    time: "10s",
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 3000,
                                    time: "4h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                }
                            },
                            {
                                level: 2,
                                image: "https://i.ibb.co/F35K66m/Egypt-Average-Home-2.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 260
                                    }
                                ],
                                construction: {
                                    time: "30s",
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 6000,
                                    time: "4h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                }
                            },
                            {
                                level: 3,
                                image: "https://i.ibb.co/ThM9jT4/Egypt-Average-Home-3.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 50000
                                    }
                                ],
                                construction: {
                                    time: "1m30s",
                                    worker_entity: {
                                        amount: 3,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 12000,
                                    time: "4h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                }
                            },
                            {
                                level: 4,
                                image: "https://i.ibb.co/QfHrmRM/Egypt-Average-Home-4.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 85000
                                    }
                                ],
                                construction: {
                                    time: "5m",
                                    worker_entity: {
                                        amount: 3,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 20000,
                                    time: "4h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                }
                            },
                            {
                                level: 5,
                                image: "https://i.ibb.co/tbTrnyV/Egypt-Average-Home-5.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 140000
                                    }
                                ],
                                construction: {
                                    time: "25m",
                                    worker_entity: {
                                        amount: 3,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 30000,
                                    time: "4h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                }
                            },
                            {
                                level: 6,
                                image: "https://i.ibb.co/0rPnz6W/Egypt-Average-Home-6.png",
                                costs: [
                                    {
                                        resource: "deben",
                                        amount: 240000
                                    }
                                ],
                                construction: {
                                    time: "50m",
                                    worker_entity: {
                                        amount: 3,
                                        type: "egypt_worker"
                                    }
                                },
                                production: {
                                    resource: "deben",
                                    amount: 45000,
                                    time: "4h"
                                },
                                provided: {
                                    worker_entity: {
                                        amount: 2,
                                        type: "egypt_worker"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            "papyrus_field": {
                categoryName: "Papyrus Field"
            }
        },
        wonder: {
            image: "https://i.ibb.co/GW4SLwD/great-sphinx.png",
            levels: [
                {
                    level: 0,
                    requirements: null,
                    bonuses: [
                        {
                            resource: "gold_ore", //boost_gold_ore
                            amount: 5
                        }
                    ],
                    reward: null
                },
                {
                    level: 1,
                    requirements: [
                        {
                            resource: "papyrus_scroll",
                            amount: 3
                        },
                        {
                            resource: "ankh",
                            amount: 3
                        }
                    ],
                    bonuses: [
                        {
                            resource: "gold_ore",
                            amount: 12.5
                        }
                    ],
                    reward: {
                        resource: "stamina",
                        amount: 25
                    }
                },
                {
                    level: 2,
                    requirements: [
                        {
                            resource: "papyrus_scroll",
                            amount: 10
                        },
                        {
                            resource: "ankh",
                            amount: 8
                        }
                    ],
                    bonuses: [
                        {
                            resource: "gold_ore",
                            amount: 17.3
                        }
                    ],
                    reward: {
                        resource: "expansion_egypt",
                        amount: 3
                    }
                },
                {
                    level: 3,
                    requirements: [
                        {
                            resource: "papyrus_scroll",
                            amount: 20
                        },
                        {
                            resource: "ankh",
                            amount: 16
                        }
                    ],
                    bonuses: [
                        {
                            resource: "gold_ore",
                            amount: 20.6
                        }
                    ],
                    reward: {
                        resource: "antimatter_egyptian",
                        amount: 1
                    }
                },
            ]
        }
    },
    {
        id: "egypt_cheops_pyramid",
        name: "The Grand Celebration",
        image: "https://i.ibb.co/4wkstVt/btn-event-city-wonder-egypt-cheopspyramid.png"
    },
    {
        id: "egypt_abu_simbel",
        name: "The Visionary Invitation",
        image: "https://i.ibb.co/Xjm70X4/btn-event-city-wonder-egypt-abusimbel.png",
    },
    {
        id: "china_forbidden_city",
        name: "Forbidden City",
        image: "https://i.ibb.co/cTb6RV8/btn-event-city-wonder-china-forbiddencity.png",
    },
    {
        id: "china_terracotta_army",
        name: "Terracotta Army",
        image: "https://i.ibb.co/WVvnWxS/btn-event-city-wonder-china-terracottaarmy.png",
    },
    {
        id: "china_great_wall",
        name: "Great Wall",
        image: "https://i.ibb.co/51zFVKM/btn-event-city-wonder-china-greatwall.png",
    }
]

export default allEvents;