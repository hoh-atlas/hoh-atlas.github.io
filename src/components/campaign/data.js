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

const allProvinces = [
    {
        id: 1,
        name: "Verdant Shore",
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "coins",
                        amount: 50,
                        percentage: 70
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 70
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
                        percentage: 30
                    }
                ]
            },
            {
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 3
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 70
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 1,
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
            }
        ]
    },
    {
        id: 2,
        name: "Razorback Plains",
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 5
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 5
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 5,
                    },
                    {
                        resource: "jaguar_warrior_essence",
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 3,
                    },
                    {
                        resource: "expansion_regular",
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
                        resource: "xp_common",
                        amount: 1,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 2,
                        percentage: 20
                    }
                ]
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 3
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 5
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 50,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "coins",
                        amount: 50,
                        percentage: 40
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 40
                    },
                    {
                        resource: "amber",
                        amount: 2,
                        percentage: 20
                    }
                ]
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
            }
        ]
    },
    {
        id: 3,
        name: "Grok's Domain",
        img: province_3,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 3
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_uncommon",
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 5
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
                        percentage: 35
                    },
                    {
                        resource: "xp_common",
                        amount: 2,
                        percentage: 25
                    }
                ]
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 5
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 5
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 100,
                        percentage: 40
                    },
                    {
                        resource: "amber",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "amber",
                        amount: 2,
                        percentage: 40
                    }
                ]
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
            }
        ]
    },
    {
        id: 4,
        name: "The Foothills",
        img: province_4,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 5
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 150,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
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
                        amount: 150,
                        percentage: 45
                    },
                    {
                        resource: "xp_common",
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
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
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
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "xp_uncommon",
                        amount: 2
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 150,
                        percentage: 45
                    },
                    {
                        resource: "xp_common",
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
                        resource: "coins",
                        amount: 150,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
                        percentage: 30
                    },
                    {
                        resource: "xp_common",
                        amount: 2,
                        percentage: 30
                    }
                ]
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
                        resource: "xp_common",
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
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 5
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 150,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
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
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 5
                    },
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 150,
                        percentage: 45
                    },
                    {
                        resource: "xp_common",
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
                    },
                    {
                        resource: "expansion_regular",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 150,
                        percentage: 40
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 40
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 2,
                        percentage: 20
                    }
                ]
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
            }
        ]
    },
    {
        id: 5,
        name: "Rumbling Plateau",
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
                        resource: "xp_common",
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
                        amount: 200,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
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
                id: 3,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 3
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 200,
                        percentage: 45
                    },
                    {
                        resource: "xp_common",
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
                id: 4,
                firstVictoryBonus: [
                    {
                        resource: "xp_uncommon",
                        amount: 5
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 200,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
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
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
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
                        resource: "xp_common",
                        amount: 1,
                        percentage: 30
                    },
                    {
                        resource: "xp_common",
                        amount: 2,
                        percentage: 30
                    }
                ]
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 5
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
                        resource: "xp_common",
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
                        resource: "xp_common",
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
                        resource: "xp_common",
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
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 200,
                        percentage: 60
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 30
                    },
                    {
                        resource: "petroglyph",
                        amount: 2,
                        percentage: 10
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
            }
        ]
    },
    {
        id: 6,
        name: "Northern Coast",
        img: province_6,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_uncommon",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 250,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
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
                        amount: 250,
                        percentage: 45
                    },
                    {
                        resource: "xp_common",
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
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
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
                        percentage: 45
                    },
                    {
                        resource: "xp_common",
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
                        resource: "coins",
                        amount: 250,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
                        percentage: 30
                    },
                    {
                        resource: "xp_common",
                        amount: 2,
                        percentage: 30
                    }
                ]
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
                        resource: "xp_common",
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
                        resource: "xp_common",
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
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 5
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 250,
                        percentage: 45
                    },
                    {
                        resource: "xp_common",
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
                        resource: "coins",
                        amount: 250,
                        percentage: 40
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 40
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 2,
                        percentage: 20
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
            }
        ]
    },
    {
        id: 7,
        name: "Minotaur Isthmus",
        img: province_7,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_uncommon",
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
                        resource: "xp_common",
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
                        amount: 300,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
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
                        percentage: 45
                    },
                    {
                        resource: "xp_common",
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
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
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
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 5
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 300,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
                        percentage: 25
                    },
                    {
                        resource: "xp_common",
                        amount: 2,
                        percentage: 35
                    }
                ]
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
                        resource: "xp_common",
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
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_uncommon",
                        amount: 2
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 300,
                        percentage: 45
                    },
                    {
                        resource: "xp_common",
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
                        resource: "xp_common",
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
                        resource: "coins",
                        amount: 300,
                        percentage: 50
                    },
                    {
                        resource: "petroglyph",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "petroglyph",
                        amount: 2,
                        percentage: 30
                    }
                ]
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
            }
        ]
    },
    {
        id: 8,
        name: "Eroding Lands",
        img: province_8,
        location: "panganea",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    {
                        resource: "xp_rare",
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
                        resource: "xp_common",
                        amount: 1,
                        percentage: 25
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
                        amount: 350,
                        percentage: 45
                    },
                    {
                        resource: "xp_common",
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
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
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
                        percentage: 45
                    },
                    {
                        resource: "xp_common",
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
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 10
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 350,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
                        percentage: 25
                    },
                    {
                        resource: "xp_common",
                        amount: 2,
                        percentage: 35
                    },
                ]
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
                        resource: "xp_common",
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
                id: 7,
                firstVictoryBonus: [
                    {
                        resource: "xp_uncommon",
                        amount: 3
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 350,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
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
                id: 8,
                firstVictoryBonus: [
                    {
                        resource: "xp_rare",
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
                        resource: "xp_common",
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
                        resource: "coins",
                        amount: 350,
                        percentage: 40
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 2,
                        percentage: 40
                    }
                ]
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
            }
        ]
    },
    {
        id: 9,
        name: "White Dunes",
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_uncommon",
                        amount: 3
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 30
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                        percentage: 20
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 3
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 30
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                id: 5,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 40
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
                        percentage: 20
                    },
                    {
                        resource: "xp_common",
                        amount: 2,
                        percentage: 40
                    },
                ]
            },
            {
                id: 6,
                firstVictoryBonus: [
                    {
                        resource: "xp_common",
                        amount: 3
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 30
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_common",
                        amount: 1,
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
                        resource: "xp_rare",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 30
                    },
                    {
                        resource: "xp_common",
                        amount: 1,
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
                id: 9,
                firstVictoryBonus: [
                    {
                        resource: "antimatter",
                        amount: 1
                    }
                ],
                rewards: [
                    {
                        resource: "coins",
                        amount: 500,
                        percentage: 40
                    },
                    {
                        resource: "jasper",
                        amount: 1,
                        percentage: 40
                    },
                    {
                        resource: "jasper",
                        amount: 2,
                        percentage: 20
                    },
                ]
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
            }
        ]
    },
    {
        id: 10,
        name: "Deerhide Flats",
        img: province_10,
        location: "desert_valley",
        encounters: [
            {
                id: 1,
                firstVictoryBonus: [
                    
                ],
                rewards: [
                    
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
                amount: 4
            }
        ]
    },
]

export default allProvinces;