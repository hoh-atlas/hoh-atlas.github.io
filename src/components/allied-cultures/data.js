import hua_mulan from "../../images/heroes/intro/icons/Unit_HuaMulan.webp";
import great_wall from "../../images/allied-cultures/world-wonder/great_wall.webp";

const allAlliedCultures = [
    {
        id: "china_great_wall",
        name: "Guardian of Heritage",
        image: "https://i.ibb.co/51zFVKM/btn-event-city-wonder-china-greatwall.png",
        questlineColor: "#BF2C4E",
        questlines: [
            {   
                id: 1,
                appearsAfter: null,
                name: "Guardian of Heritage",
                questgiver: "",
                reward: {
                    resource: "wu_zhu",
                    amount: 1000
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rise of China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 30
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>4 Small Home</b> on level <b>1</b> in <b>China</b>",
                            "Have <b>1 Medium Home</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 50
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>20 Wu Zhu</b> in <b>Egypt</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 100
                        }
                    }
                ]
            },
            {   
                id: 2,
                appearsAfter: [1],
                name: "Rice Farms",
                questgiver: "",
                reward: {
                    resource: "wu_zhu",
                    amount: 200
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Ink and Brush</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 100
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>1 Rice Farm</b> on level <b>1</b> in <b>China</b>",
                            "Have <b>1 Luxurious Rice Farm</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>5 Rice</b> in <b>China</b>",
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 350
                        }
                    },
                ]
            },
            {   
                id: 3,
                appearsAfter: [1],
                name: "Silk Production",
                questgiver: "",
                reward: {
                    resource: "wu_zhu",
                    amount: 5000
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Claim <b>Moth Glade Area</b> in <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Research <b>Sericulture</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>5 Moth Cocoon</b> in <b>China</b>",
                            "Have <b>1 Moth Glade</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "moth_cocoon",
                            amount: 40
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>1 Thread Processor</b> on level <b>1</b> in <b>China</b>",
                            "Collect <b>5 Silk Threads</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>Silk Manufacture</b>",
                            "Have <b>1 Silk Workshop</b> on level <b>1</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 250
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Collect <b>3 Silk</b> in <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 250
                        }
                    }
                ]
            },
            {   
                id: 4,
                appearsAfter: [2,3],
                name: "Workforce",
                questgiver: "",
                reward: [
                    {
                        resource: "rice",
                        amount: 300
                    },
                    {
                        resource: "moth_cocoon",
                        amount: 300
                    }
                ],
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>Rammed Eearth Houses</b>",
                            "Have <b>3</b> expansions in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>6 Small Home</b> on level <b>2</b> in <b>China</b>",
                            "Have <b>2 Luxurious Home</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "or",
                        reward: {
                            resource: "wu_zhu",
                            amount: 1000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Collect <b>200 Wu Zhu</b> in <b>China</b>",
                            "Have <b>4</b> expansions in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 2500
                        }
                    },
                ]
            },
            {   
                id: 5,
                appearsAfter: [4],
                name: "Path to Greatness",
                questgiver: "",
                reward: {
                    resource: "wu_zhu",
                    amount: 150000
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Research <b>7</b> technologies in <b>China</b>",
                            "Have <b>8 Building</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 5000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Claim <b>Western Moth Glade Area</b> in <b>China</b>",
                            "Have <b>2 Moth Glade</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Research <b>9</b> technologies for <b>China</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 750
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>2 Silk Workshop</b> on level <b>2</b> in <b>China</b>",
                            "Have <b>2 Rice Farm</b> on level <b>2</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 5000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>11</b> technologies for <b>China</b>",
                            "Have <b>12 Building</b> on level <b>3</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 1500
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>Dedicated Workforce</b>",
                            "Claim <b>Southern Moth Glade Area</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "silk",
                            amount: 250
                        }
                    },
                ]
            },
            {   
                id: 6,
                appearsAfter: [4],
                name: "Mount Song Crossing",
                questgiver: "",
                reward: {
                    resource: "silk",
                    amount: 500
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Complete <b>1</b> stage of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Complete <b>2</b> stages out of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "moth_cocoon",
                            amount: 400
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Complete <b>3</b> stages out of <b>3</b> of the <b>Southern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 250
                        }
                    },
                ]
            },
            {   
                id: 7,
                appearsAfter: [5],
                name: "The Final Stretch",
                questgiver: "",
                reward: {
                    resource: "porcelain",
                    amount: 1000
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>2 Silk Workshops</b> on level <b>4</b> in <b>China</b>",
                            "Research <b>Porcelain Production</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 10000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Claim <b>Southern Kaolin Area</b> in <b>China</b>",
                            "Have <b>1 Kaolin Quarry</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "kaolin",
                            amount: 7500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>1 Clay Processor</b> on level <b>4</b> in <b>China</b>",
                            "Have <b>1 Porcelain Workshop</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 5000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Collect <b>300 Porcelain</b> in <b>China</b>",
                            "Have <b>15 Building</b> on level <b>4</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 25000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Research <b>20</b> technologies for <b>China</b>",
                            "Have <b>5 Building</b> on level <b>5</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "kaolin",
                            amount: 15000
                        }
                    },
                    {
                        id: 6,
                        tasks: [
                            "Research <b>22</b> technologies for <b>China</b>",
                            "Have <b>10 Building</b> on level <b>6</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "rice",
                            amount: 8000
                        }
                    },
                    {
                        id: 7,
                        tasks: [
                            "Research <b>25</b> technologies for <b>China</b>",
                            "Have <b>18 Building</b> on level <b>6</b> in <b>China</b>"
                        ],
                        relation: "plus",
                        reward: {
                            resource: "wu_zhu",
                            amount: 75000
                        }
                    },
                ]
            },
            {   
                id: 8,
                appearsAfter: [6],
                name: "Within Reach",
                questgiver: "",
                reward: {
                    resource: "silk",
                    amount: 2000
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Complete <b>1</b> stage of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 1000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Complete <b>2</b> stages out of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "kaolin",
                            amount: 3000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Complete <b>3</b> stages out of <b>3</b> of the <b>Eastern Bridge</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "rice",
                            amount: 2500
                        }
                    },
                ]
            },
            {   
                id: 9,
                appearsAfter: [2,3],
                name: "The Great Wall - Phase I",
                questgiver: "",
                reward: {
                    resource: "antimatter_china",
                    amount: 2
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>1</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 200
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>3</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 500
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>5</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 2000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>10</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 4000
                        }
                    },
                ]
            },
            {   
                id: 10,
                appearsAfter: [9],
                name: "The Great Wall - Phase II",
                questgiver: "",
                reward: {
                    resource: "antimatter_china",
                    amount: 2
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>15</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 7000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>20</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 10000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>25</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 15000
                        }
                    },
                ]
            },
            {   
                id: 11,
                appearsAfter: [10],
                name: "The Great Wall - Phase III",
                questgiver: "",
                reward: {
                    resource: "antimatter_china",
                    amount: 15
                },
                quests: [
                    {
                        id: 1,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>30</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 20000
                        }
                    },
                    {
                        id: 2,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>35</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 25000
                        }
                    },
                    {
                        id: 3,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>40</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 35000
                        }
                    },
                    {
                        id: 4,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>45</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "wu_zhu",
                            amount: 90000
                        }
                    },
                    {
                        id: 5,
                        tasks: [
                            "Have <b>Great Wall</b> on level <b>50</b>"
                        ],
                        relation: null,
                        reward: {
                            resource: "antimatter_legendary_part",
                            amount: 1
                        }
                    },
                ]
            }
        ],
        buildingCategories: {
            
        },
        wonder: {
            image: great_wall,
            levels: [
                {
                    level: 0,
                    requirements: null,
                    bonuses: [
                        {
                            resource: "rice", //boost_gold_ore
                            amount: 5
                        }
                    ],
                    reward: null
                },
                {
                    level: 1,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 3
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 12.5
                        }
                    ],
                    reward: {
                        resource: "energy",
                        amount: 25
                    }
                },
                {
                    level: 2,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 9
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 17.3
                        }
                    ],
                    reward: {
                        resource: "expansion_china",
                        amount: 3
                    }
                },
                {
                    level: 3,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 24
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 20.6
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 1
                    }
                },
                {
                    level: 4,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 40
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 23.2
                        }
                    ],
                    reward: {
                        resource: "xp_hero",
                        amount: 900
                    }
                },
                {
                    level: 5,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 75
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 25.3
                        }
                    ],
                    reward: {
                        resource: "research_point",
                        amount: 4
                    }
                },
                {
                    level: 6,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 250
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 27.1
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 2
                    }
                },
                {
                    level: 7,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 200
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 28.6
                        }
                    ],
                    reward: {
                        resource: "expansion_china",
                        amount: 5
                    }
                },
                {
                    level: 8,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 200
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 30.0
                        }
                    ],
                    reward: {
                        resource: "goods_chest",
                        amount: 1
                    }
                },
                {
                    level: 9,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 200
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 31.2
                        }
                    ],
                    reward: {
                        resource: "energy",
                        amount: 40
                    }
                },
                {
                    level: 10,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 200
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 32.3
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 1
                    }
                },
                {
                    level: 11,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 275
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 33.3
                        }
                    ],
                    reward: {
                        resource: "food",
                        amount: "N"
                    }
                },
                {
                    level: 12,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 500
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 34.2
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 1
                    }
                },
                {
                    level: 13,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 540
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 35.1
                        }
                    ],
                    reward: {
                        resource: "expansion_china",
                        amount: 7
                    }
                },
                {
                    level: 14,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 840
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 35.9
                        }
                    ],
                    reward: {
                        resource: "research_point",
                        amount: 5
                    }
                },
                {
                    level: 15,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 1120
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 36.6
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 2
                    }
                },
                {
                    level: 16,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 1530
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 37.3
                        }
                    ],
                    reward: {
                        resource: "goods_chest",
                        amount: 1
                    }
                },
                {
                    level: 17,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 1950
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 38.0
                        }
                    ],
                    reward: {
                        resource: "expansion_china",
                        amount: 8
                    }
                },
                {
                    level: 18,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 3150
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 38.6
                        }
                    ],
                    reward: {
                        resource: "food",
                        amount: "N"
                    }
                },
                {
                    level: 19,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 4050
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 39.2
                        }
                    ],
                    reward: {
                        resource: "xp_hero",
                        amount: 3500
                    }
                },
                {
                    level: 20,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 4900
                        },
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 39.8
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 1
                    }
                },
                {
                    level: 21,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 5800
                        },
                        {
                            resource: "porcelain",
                            amount: 45
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 40.3
                        }
                    ],
                    reward: {
                        resource: "antimatter_legendary_part",
                        amount: 1
                    }
                },
                {
                    level: 22,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 6650
                        },
                        {
                            resource: "porcelain",
                            amount: 150
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 40.8
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 1
                    }
                },
                {
                    level: 23,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 7550
                        },
                        {
                            resource: "porcelain",
                            amount: 245
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 41.3
                        }
                    ],
                    reward: {
                        resource: "research_point",
                        amount: 6
                    }
                },
                {
                    level: 24,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 8400
                        },
                        {
                            resource: "porcelain",
                            amount: 900
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 41.8
                        }
                    ],
                    reward: {
                        resource: "expansion_china",
                        amount: 8
                    }
                },
                {
                    level: 25,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 9300
                        },
                        {
                            resource: "porcelain",
                            amount: 1750
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 42.3
                        }
                    ],
                    reward: {
                        resource: "xp_hero",
                        amount: 3500
                    }
                },
                {
                    level: 26,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 11400
                        },
                        {
                            resource: "porcelain",
                            amount: 4400
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 42.7
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 3
                    }
                },
                {
                    level: 27,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 12600
                        },
                        {
                            resource: "porcelain",
                            amount: 6500
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 43.1
                        }
                    ],
                    reward: {
                        resource: "food",
                        amount: "N"
                    }
                },
                {
                    level: 28,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 13850
                        },
                        {
                            resource: "porcelain",
                            amount: 7900
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 43.5
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 5
                    }
                },
                {
                    level: 29,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 15050
                        },
                        {
                            resource: "porcelain",
                            amount: 11400
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 43.9
                        }
                    ],
                    reward: {
                        resource: "goods_chest",
                        amount: 1
                    }
                },
                {
                    level: 30,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 16300
                        },
                        {
                            resource: "porcelain",
                            amount: 12600
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 44.3
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 5
                    }
                },
                {
                    level: 31,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 17500
                        },
                        {
                            resource: "porcelain",
                            amount: 13300
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 44.7
                        }
                    ],
                    reward: {
                        resource: "antimatter_legendary_part",
                        amount: 1
                    }
                },
                {
                    level: 32,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 18750
                        },
                        {
                            resource: "porcelain",
                            amount: 14000
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 45.0
                        }
                    ],
                    reward: {
                        resource: "xp_hero",
                        amount: 2100
                    }
                },
                {
                    level: 33,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 19950
                        },
                        {
                            resource: "porcelain",
                            amount: 14550
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 45.4
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 3
                    }
                },
                {
                    level: 34,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 21200
                        },
                        {
                            resource: "porcelain",
                            amount: 15250
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 45.7
                        }
                    ],
                    reward: {
                        resource: "food",
                        amount: "N"
                    }
                },
                {
                    level: 35,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 22400
                        },
                        {
                            resource: "porcelain",
                            amount: 15750
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 46.0
                        }
                    ],
                    reward: {
                        resource: "goods_chest",
                        amount: 1
                    }
                },
                {
                    level: 36,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 23650
                        },
                        {
                            resource: "porcelain",
                            amount: 16450
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 46.3
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 5
                    }
                },
                {
                    level: 37,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 24850
                        },
                        {
                            resource: "porcelain",
                            amount: 17000
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 46.6
                        }
                    ],
                    reward: {
                        resource: "research_point",
                        amount: 10
                    }
                },
                {
                    level: 38,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 26100
                        },
                        {
                            resource: "porcelain",
                            amount: 17700
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 46.9
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 3
                    }
                },
                {
                    level: 39,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 27300
                        },
                        {
                            resource: "porcelain",
                            amount: 18400
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 47.2
                        }
                    ],
                    reward: {
                        resource: "xp_hero",
                        amount: 5600
                    }
                },
                {
                    level: 40,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 28550
                        },
                        {
                            resource: "porcelain",
                            amount: 18900
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 47.5
                        }
                    ],
                    reward: {
                        resource: "goods_chest",
                        amount: 1
                    }
                },
                {
                    level: 41,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 29750
                        },
                        {
                            resource: "porcelain",
                            amount: 19600
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 47.8
                        }
                    ],
                    reward: {
                        resource: "antimatter_legendary_part",
                        amount: 1
                    }
                },
                {
                    level: 42,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 31000
                        },
                        {
                            resource: "porcelain",
                            amount: 20150
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 48.1
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 5
                    }
                },
                {
                    level: 43,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 32200
                        },
                        {
                            resource: "porcelain",
                            amount: 20850
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 48.3
                        }
                    ],
                    reward: {
                        resource: "food",
                        amount: "N"
                    }
                },
                {
                    level: 44,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 33450
                        },
                        {
                            resource: "porcelain",
                            amount: 21350
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 48.6
                        }
                    ],
                    reward: {
                        resource: "xp_hero",
                        amount: 18000
                    }
                },
                {
                    level: 45,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 34650
                        },
                        {
                            resource: "porcelain",
                            amount: 22050
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 48.9
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 10
                    }
                },
                {
                    level: 46,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 35900
                        },
                        {
                            resource: "porcelain",
                            amount: 22750
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 49.1
                        }
                    ],
                    reward: {
                        resource: "research_point",
                        amount: 15
                    }
                },
                {
                    level: 47,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 37100
                        },
                        {
                            resource: "porcelain",
                            amount: 23300
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 49.3
                        }
                    ],
                    reward: {
                        resource: "antimatter_legendary_part",
                        amount: 1
                    }
                },
                {
                    level: 48,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 38350
                        },
                        {
                            resource: "porcelain",
                            amount: 24000
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 49.6
                        }
                    ],
                    reward: {
                        resource: "food",
                        amount: "N"
                    }
                },
                {
                    level: 49,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 39550
                        },
                        {
                            resource: "porcelain",
                            amount: 24500
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 49.8
                        }
                    ],
                    reward: {
                        resource: "xp_hero",
                        amount: 15000
                    }
                },
                {
                    level: 50,
                    requirements: [
                        {
                            resource: "silk",
                            amount: 40800
                        },
                        {
                            resource: "porcelain",
                            amount: 25200
                        }
                    ],
                    bonuses: [
                        {
                            resource: "rice",
                            amount: 50.0
                        }
                    ],
                    reward: {
                        resource: "antimatter_china",
                        amount: 20
                    }
                },
            ]
        }
    },
    {
        id: "egypt_great_sphinx",
        name: "The Trade Exhibition",
        image: "https://i.ibb.co/hFQjh3W/btn-event-city-wonder-egypt-greatsphinx.png",
        questlineColor: "#996600",
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
    /*{
        id: "egypt_cheops_pyramid",
        name: "The Grand Celebration",
        image: "https://i.ibb.co/4wkstVt/btn-event-city-wonder-egypt-cheopspyramid.png"
    },*/
    /*{
        id: "egypt_abu_simbel",
        name: "The Visionary Invitation",
        image: "https://i.ibb.co/Xjm70X4/btn-event-city-wonder-egypt-abusimbel.png",
    },*/
    /*{
        id: "china_forbidden_city",
        name: "Forbidden City",
        image: "https://i.ibb.co/cTb6RV8/btn-event-city-wonder-china-forbiddencity.png",
    },
    {
        id: "china_terracotta_army",
        name: "Terracotta Army",
        image: "https://i.ibb.co/WVvnWxS/btn-event-city-wonder-china-terracottaarmy.png",
    },*/
]

export default allAlliedCultures;