import province_1 from '../../images/campaign/provinces/province_1.webp';
import province_2 from '../../images/campaign/provinces/province_2.webp';
import province_3 from '../../images/campaign/provinces/province_3.webp';
import province_4 from '../../images/campaign/provinces/province_4.webp';
import province_5 from '../../images/campaign/provinces/province_5.webp';
import province_6 from '../../images/campaign/provinces/province_6.webp';
import province_7 from '../../images/campaign/provinces/province_7.webp';
import province_8 from '../../images/campaign/provinces/province_8.webp';
import province_9 from '../../images/campaign/provinces/province_9.webp';
import province_10 from '../../images/campaign/provinces/province_10.webp';
import province_11 from '../../images/campaign/provinces/province_11.webp';
import province_12 from '../../images/campaign/provinces/province_12.webp';
import province_13 from '../../images/campaign/provinces/province_13.webp';
import province_14 from '../../images/campaign/provinces/province_14.webp';
import province_15 from '../../images/campaign/provinces/province_15.webp';
import province_16 from '../../images/campaign/provinces/province_16.webp';
import province_17 from '../../images/campaign/provinces/province_17.webp';
import province_18 from '../../images/campaign/provinces/province_18.webp';
import province_19 from '../../images/campaign/provinces/province_19.webp';

const allProvinces = [
    {
        id: 1,
        name: "Ancient Wilds",
        img: province_1,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 70
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    }
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "coins",
                        amount: 200
                    },
                    {
                        resource: "tribal_healer",
                        amount: 1
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 70
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    }
                ]
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "food",
                        amount: 125
                    },
                    {
                        resource: "xp_hero",
                        amount: 100
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 70
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    }
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "coins",
                        amount: 200
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 70
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    }
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "coins",
                        amount: 50
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 30,
                        percentage: 70
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    }
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 200
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 70
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    }
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 70
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    }
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "amber",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 70
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    }
                ]
            },
        ],
        rewards: [
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 1
            },
            {
                resource: "gems",
                amount: 100
            }
        ]
    },
    {
        id: 2,
        name: "Skullsmashers' Domain",
        img: province_2,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "amber",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 25,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 40,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    },
                    {
                        resource: "amber",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "xp_hero",
                        amount: 500,
                    },
                    {
                        resource: "jaguar_warrior",
                        amount: 1,
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1,
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 35,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 65,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 175,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "amber",
                        amount: 1
                    },
                    {
                        resource: "energy",
                        amount: 10
                    }
                ],
                rewards: [
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 90
                    },
                    {
                        resource: "amber",
                        amount: 2,
                        percentage: 10
                    }
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "research_point",
                amount: 1
            },
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "gems",
                amount: 100
            }
        ]
    },
    {
        id: 3,
        name: "Silent Moorland",
        img: province_3,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 80,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 200,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "amber",
                        amount: 1
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 50,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 80,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 190,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    },
                    {
                        resource: "xueting_fuyu",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 70
                    },
                    {
                        resource: "amber",
                        amount: 2,
                        percentage: 30
                    }
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 4
            },
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "gems",
                amount: 100
            }
        ]
    },
    {
        id: 4,
        name: "Frozen Plateau",
        img: province_4,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 150,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 75,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 120,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 300,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "lapis_lazuli",
                        amount: 1
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 150,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 150,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "petroglyph",
                        amount: 1
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    },
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 60,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 90,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 220,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 150,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 150,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 150,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 90
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 2,
                        percentage: 10
                    }
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "expansion_regular",
                amount: 2
            },
            {
                resource: "research_point",
                amount: 3
            },
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "gems",
                amount: 1
            }
        ]
    },
    {
        id: 5,
        name: "Grasslands of Sumer",
        img: province_5,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 200,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 160,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 400,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 200,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 1500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 200,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 65,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 240,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 200,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 200,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 200,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 95
                    },
                    {
                        resource: "petroglyph",
                        amount: 2,
                        percentage: 5
                    }
                ]
            },
        ],
        rewards: [
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 3
            },
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "gems",
                amount: 100
            }
        ]
    },
    {
        id: 6,
        name: "Fallen Capital",
        img: province_6,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 250,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 140,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 230,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 570,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 250,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 250,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 80,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 115,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 260,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "lapis_lazuli",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 250,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 250,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 250,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 1,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 90
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 2,
                        percentage: 10
                    }
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 3
            },
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "gems",
                amount: 100
            }
        ]
    },
    {
        id: 7,
        name: "Minoan Hinterlands",
        img: province_7,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 300,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 160,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 260,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 660,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "petroglyph",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 300,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 300,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 95,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 130,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 280,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 300,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 300,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "lapis_lazuli",
                        amount: 3
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 300,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 1,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 95
                    },
                    {
                        resource: "petroglyph",
                        amount: 2,
                        percentage: 5
                    }
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 3
            },
            {
                resource: "gems",
                amount: 100
            }
        ]
    },
    {
        id: 8,
        name: "City of Knossos",
        img: province_8,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 700
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 350,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 180,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 280,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 700,
                        percentage: 15
                    }
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "petroglyph",
                        amount: 3
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 350,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 350,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 1000
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 150,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 380,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 4
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 350,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 900
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 350,
                        percentage: 40
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 2100
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 350,
                        percentage: 45
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    }
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 90
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 2,
                        percentage: 10
                    }
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "research_point",
                amount: 3
            },
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "gems",
                amount: 100
            }
        ]
    },
    {
        id: 9,
        name: "Sandy Shoreline",
        img: province_9,
        location: "desert_valley",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 20
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 900
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 200,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 300,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 760,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 120,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 210,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 520,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 20
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 700
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 90
                    },
                    {
                        resource: "jasper",
                        amount: 2,
                        percentage: 10
                    },
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 4
            },
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "gems",
                amount: 50
            }
        ]
    },
    {
        id: 10,
        name: "City of Pharaohs",
        img: province_10,
        location: "desert_valley",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 600,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 240,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 360,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 910,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 600,
                        percentage: 20
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 600,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 130,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 220,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 550,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 600,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 600,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 700
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 600,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 95
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 2,
                        percentage: 5
                    },
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 4
            },
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "gems",
                amount: 50
            }
        ]
    },
    {
        id: 11,
        name: "Sunset Fortress",
        img: province_11,
        location: "desert_valley",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 700,
                        percentage: 20
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 260,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 390,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 990,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 700,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 700,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 140,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 230,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 560,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 700,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 700
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 700,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 700,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 90
                    },
                    {
                        resource: "jasper",
                        amount: 2,
                        percentage: 10
                    },
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 4
            },
            {
                resource: "gems",
                amount: 50
            }
        ]
    },
    {
        id: 12,
        name: "Wartorn Rivulet",
        img: province_12,
        location: "desert_valley",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 850,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 300
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 320,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 450,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 1100,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 850,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 1200
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 850,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 160,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 250,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 590,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 850,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 700
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 850,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 850,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "minoan_frescoes",
                        amount: 1,
                        percentage: 95
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 2,
                        percentage: 5
                    },
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 4
            },
            {
                resource: "gems",
                amount: 50
            }
        ]
    },
    {
        id: 13,
        name: "Fortified Sands",
        img: province_13,
        location: "desert_valley",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1200,
                        percentage: 20
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 400,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 560,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 1350,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1200,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1200,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 170,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 250,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 610,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1200,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1200,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 700
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1200,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 90
                    },
                    {
                        resource: "hematite",
                        amount: 2,
                        percentage: 10
                    },
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 5
            },
            {
                resource: "gems",
                amount: 50
            }
        ]
    },
    {
        id: 14,
        name: "Heart of Sparta",
        img: province_14,
        location: "desert_valley",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 1500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 690,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 1700,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 180,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 270,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 660,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 700
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 95
                    },
                    {
                        resource: "greek_lyre",
                        amount: 2,
                        percentage: 5
                    },
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 5
            },
            {
                resource: "gems",
                amount: 50
            }
        ]
    },
    {
        id: 15,
        name: "Mountain Pass",
        img: province_15,
        location: "desert_valley",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 20
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 580,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 800,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 1950,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 200,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 290,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 690,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 90
                    },
                    {
                        resource: "hematite",
                        amount: 2,
                        percentage: 10
                    },
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 5
            },
            {
                resource: "gems",
                amount: 50
            }
        ]
    },
    {
        id: 16,
        name: "Verdant Floodplain",
        img: province_16,
        location: "desert_valley",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 700
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1400,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 30
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 650,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 900,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 2200,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 1200
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1400,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1400,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 210,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 720,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1400,
                        percentage: 15
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "war_horn",
                        amount: 1,
                        percentage: 30
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 1200
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1400,
                        percentage: 20
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 35
                    },
                    {
                        resource: "shadow_dial",
                        amount: 1,
                        percentage: 30
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 700
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1400,
                        percentage: 15
                    },
                    {
                        resource: "xp_hero",
                        amount: 100,
                        percentage: 25
                    },
                    {
                        resource: "fragrant_potpourri",
                        amount: 1,
                        percentage: 30
                    },
                    {
                        resource: "hematite",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "greek_lyre",
                        amount: 1,
                        percentage: 95
                    },
                    {
                        resource: "greek_lyre",
                        amount: 2,
                        percentage: 5
                    },
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 5
            },
            {
                resource: "gems",
                amount: 50
            }
        ]
    },
    {
        id: 17,
        name: "Tropical Shore",
        img: province_17,
        location: "early_rome",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1800,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 30
                    },
                    {
                        resource: "crested_guidon",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "emerald",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 740,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 1000,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 2450,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1800,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 35
                    },
                    {
                        resource: "charta_terrestre",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1800,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 30
                    },
                    {
                        resource: "herbal_poultice",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "emerald",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 220,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 310,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 740,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1800,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 35
                    },
                    {
                        resource: "crested_guidon",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1800,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 30
                    },
                    {
                        resource: "charta_terrestre",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "emerald",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1800,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 35
                    },
                    {
                        resource: "herbal_poultice",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "emerald",
                        amount: 1,
                        percentage: 90
                    },
                    {
                        resource: "emerald",
                        amount: 2,
                        percentage: 10
                    },
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 5
            },
            {
                resource: "gems",
                amount: 50
            }
        ]
    },
    {
        id: 18,
        name: "Rugged Rainforest",
        img: province_18,
        location: "early_rome",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 700
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1900,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 30
                    },
                    {
                        resource: "crested_guidon",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 870,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 1200,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 2900,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 1000
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1900,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 30
                    },
                    {
                        resource: "charta_terrestre",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "emerald",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1900,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 35
                    },
                    {
                        resource: "herbal_poultice",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 230,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 330,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 770,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1900,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 30
                    },
                    {
                        resource: "crested_guidon",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "emerald",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 1200
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1900,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 35
                    },
                    {
                        resource: "charta_terrestre",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 1900,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 30
                    },
                    {
                        resource: "herbal_poultice",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "emerald",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 1,
                        percentage: 95
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 2,
                        percentage: 5
                    },
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 6
            },
            {
                resource: "gems",
                amount: 50
            }
        ]
    },
    {
        id: 19,
        name: "Teeming Basin",
        img: province_19,
        location: "early_rome",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 2000,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 30
                    },
                    {
                        resource: "crested_guidon",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "emerald",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 2,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 940,
                        percentage: 50
                    },
                    {
                        resource: "coins",
                        amount: 1300,
                        percentage: 35
                    },
                    {
                        resource: "coins",
                        amount: 3150,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 2000,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 35
                    },
                    {
                        resource: "charta_terrestre",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 500
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 2000,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 30
                    },
                    {
                        resource: "herbal_poultice",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "emerald",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "xp_hero",
                        amount: 240,
                        percentage: 50
                    },
                    {
                        resource: "xp_hero",
                        amount: 340,
                        percentage: 35
                    },
                    {
                        resource: "xp_hero",
                        amount: 790,
                        percentage: 15
                    },
                ],
                special: true
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 700
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 2000,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 35
                    },
                    {
                        resource: "crested_guidon",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "research_point",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 2000,
                        percentage: 25
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 30
                    },
                    {
                        resource: "charta_terrestre",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "emerald",
                        amount: 1,
                        percentage: 30
                    },
                ]
            },
            {
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_hero",
                        amount: 600
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 2000,
                        percentage: 30
                    },
                    {
                        resource: "xp_hero",
                        amount: 300,
                        percentage: 35
                    },
                    {
                        resource: "herbal_poultice",
                        amount: 1,
                        percentage: 15
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 1,
                        percentage: 20
                    },
                ]
            },
            {
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "emerald",
                        amount: 1,
                        percentage: 90
                    },
                    {
                        resource: "emerald",
                        amount: 2,
                        percentage: 10
                    },
                ],
                special: true
            },
        ],
        rewards: [
            {
                resource: "antimatter_legendary_part",
                amount: 1
            },
            {
                resource: "expansion_regular",
                amount: 1
            },
            {
                resource: "research_point",
                amount: 7
            },
            {
                resource: "gems",
                amount: 50
            }
        ]
    },
]

export default allProvinces;