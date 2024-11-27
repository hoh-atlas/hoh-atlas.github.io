const allTechnologies = [
    {
        era: "Stone Age",
        technologies: [
            {
                id: 1,
                name: "Tribal Settlement",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    }
                ],
                parents: [],
                children: [2]
            },
            {
                id: 2,
                name: "Cultivation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "coins",
                        amount: 1
                    }
                ],
                parents: [1],
                children: [3]
            },
            {
                id: 3,
                name: "Spear Fighting",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "coins",
                        amount: 3
                    }
                ],
                parents: [2],
                children: [4]
            },
            {
                id: 4,
                name: "Firemaker",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 7
                    }
                ],
                parents: [3],
                children: [5,6]
            },
            {
                id: 5,
                name: "Cave Paintings",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "coins",
                        amount: 10
                    }
                ],
                parents: [4],
                children: [7]
            },
            {
                id: 6,
                name: "Cavalry Barracks",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "coins",
                        amount: 10
                    }
                ],
                parents: [4],
                children: [7]
            },
            {
                id: 7,
                name: "Einstein's Portal",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 60
                    },
                    {
                        resource: "amber",
                        amount: 1
                    }
                ],
                parents: [5,6],
                children: [8]
            },
            {
                id: 8,
                name: "Goat Pens",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 50
                    },
                ],
                parents: [7],
                children: [9,10]
            },
            {
                id: 9,
                name: "Agriculture",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 20
                    },
                ],
                parents: [8],
                children: [11]
            },
            {
                id: 10,
                name: "Slingshots",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 50
                    },
                    {
                        resource: "amber",
                        amount: 1
                    }
                ],
                parents: [8],
                children: [11]
            },
            {
                id: 11,
                name: "Tribal Celebrations",
                costs: [
                    {
                        resource: "research_point",
                        amount: 1
                    },
                    {
                        resource: "coins",
                        amount: 70
                    },
                    {
                        resource: "amber",
                        amount: 1
                    }
                ],
                parents: [9,10],
                children: [12,13]
            },
            {
                id: 12,
                name: "Herding",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 100
                    },
                ],
                parents: [11],
                children: [14]
            },
            {
                id: 13,
                name: "Baby Boom",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 120
                    },
                ],
                parents: [11],
                children: [15]
            },
            {
                id: 14,
                name: "The Wheel",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 150
                    },
                ],
                parents: [12],
                children: [16,17]
            },
            {
                id: 15,
                name: "Sacred Sites",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 170
                    },
                ],
                parents: [13],
                children: [16,17]
            },
            {
                id: 16,
                name: "Domesticated Goats",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 190
                    },
                ],
                parents: [14,15],
                children: []
            },
            {
                id: 17,
                name: "Rural Community",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 220
                    },
                    {
                        resource: "amber",
                        amount: 1
                    }
                ],
                parents: [14,15],
                children: []
            },
        ]
    },
    {
        era: "Bronze Age",
        technologies: [
            {
                id: 1,
                name: "Village",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 750
                    },
                ],
                parents: [],
                children: [2]
            },
            {
                id: 2,
                name: "Alliances",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 1500
                    }
                ],
                parents: [1],
                children: [3]
            },
            {
                id: 3,
                name: "Ability Training",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 2450
                    }
                ],
                parents: [2],
                children: [4,5]
            },
            {
                id: 4,
                name: "Bronze Sentinel",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 2100
                    }
                ],
                parents: [3],
                children: [6]
            },
            {
                id: 5,
                name: "Chariot",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 4350
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 1
                    }
                ],
                parents: [3],
                children: [7,8,9]
            },
            {
                id: 6,
                name: "Slingstone Catapult",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 2100
                    }
                ],
                parents: [4],
                children: [10]
            },
            {
                id: 7,
                name: "Feed Trough",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 5150
                    }
                ],
                parents: [5],
                children: [11]
            },
            {
                id: 8,
                name: "Sacred Groves",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 4750
                    },
                ],
                parents: [5],
                children: [11]
            },
            {
                id: 9,
                name: "Archery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 3
                    },
                    {
                        resource: "coins",
                        amount: 5500
                    },
                ],
                parents: [5],
                children: [11]
            },
            {
                id: 10,
                name: "Cavalry Spearmen",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 4550
                    },
                ],
                parents: [6],
                children: [12]
            },
            {
                id: 11,
                name: "Artisan",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 2450
                    },
                ],
                parents: [7,8,9],
                children: [12]
            },
            {
                id: 12,
                name: "Allied Culture Events",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 3500
                    },
                ],
                parents: [10,11],
                children: [13,14,15]
            },
            {
                id: 13,
                name: "Sacred Stones",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 5150
                    },
                ],
                parents: [12],
                children: [16]
            },
            {
                id: 14,
                name: "Stone Manson",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 5300
                    },
                ],
                parents: [12],
                children: [17]
            },
            {
                id: 15,
                name: "Tailor",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 3400
                    },
                ],
                parents: [12],
                children: [18]
            },
            {
                id: 16,
                name: "Social Change",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 5300
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 55
                    },
                ],
                parents: [13],
                children: [19]
            },
            {
                id: 17,
                name: "Reinforced Footwear",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 5150
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 65
                    }
                ],
                parents: [14],
                children: [19]
            },
            {
                id: 18,
                name: "Farm Utensils",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 3050
                    },
                    {
                        resource: "wool",
                        amount: 65
                    },
                    {
                        resource: "petroglyph",
                        amount: 2
                    }
                ],
                parents: [15],
                children: [19]
            },
            {
                id: 19,
                name: "Mantlet Shields",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 8000
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 35
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 3
                    }
                ],
                parents: [16,17,18],
                children: [20,21,22,23]
            },
            {
                id: 20,
                name: "Building Knowledge",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 2450
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 60
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 25
                    }
                ],
                parents: [19],
                children: [24]
            },
            {
                id: 21,
                name: "Silent Draw",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 7200
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 60
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 25
                    }
                ],
                parents: [19],
                children: [24]
            },
            {
                id: 22,
                name: "Bronze Plating",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 4400
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 60
                    },
                    {
                        resource: "wool",
                        amount: 25
                    }
                ],
                parents: [19],
                children: [24,25]
            },
            {
                id: 23,
                name: "Barn",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 5200
                    },
                    {
                        resource: "wool",
                        amount: 80
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 35
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 3
                    }
                ],
                parents: [19],
                children: [25]
            },
            {
                id: 24,
                name: "Bronze Artillery Gears",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 6850
                    },
                    {
                        resource: "wool",
                        amount: 80
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 35
                    },
                ],
                parents: [20,21,22],
                children: [26,27,28]
            },
            {
                id: 25,
                name: "Bronze Tipped Spears",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 7800
                    },
                    {
                        resource: "wool",
                        amount: 100
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 45
                    },
                ],
                parents: [22,23],
                children: [28,29]
            },
            {
                id: 26,
                name: "Ancestral Valor",
                costs: [
                    {
                        resource: "research_point",
                        amount: 7
                    },
                    {
                        resource: "coins",
                        amount: 9300
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 100
                    },
                    {
                        resource: "wool",
                        amount: 40
                    },
                ],
                parents: [24],
                children: [30]
            },
            {
                id: 27,
                name: "Stakes",
                costs: [
                    {
                        resource: "research_point",
                        amount: 6
                    },
                    {
                        resource: "coins",
                        amount: 5700
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 120
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 50
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 4
                    }
                ],
                parents: [24],
                children: [30]
            },
            {
                id: 28,
                name: "Tribal Marksmanship",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 10050
                    },
                    {
                        resource: "wool",
                        amount: 110
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 45
                    },
                ],
                parents: [24,25],
                children: [31]
            },
            {
                id: 29,
                name: "Plough",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 5500
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 145
                    },
                    {
                        resource: "wool",
                        amount: 60
                    },
                    {
                        resource: "petroglyph",
                        amount: 3
                    }
                ],
                parents: [25],
                children: [31]
            },
            {
                id: 30,
                name: "Stronger Frames",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 11600
                    },
                    {
                        resource: "wool",
                        amount: 170
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 70
                    },
                ],
                parents: [26,27],
                children: [32]
            },
            {
                id: 31,
                name: "Small Holding",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 6850
                    },
                    {
                        resource: "wool",
                        amount: 170
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 75
                    },
                    {
                        resource: "lapis_lazuli",
                        amount: 5
                    }
                ],
                parents: [28,29],
                children: [32]
            },
            {
                id: 32,
                name: "Arena",
                costs: [
                    {
                        resource: "research_point",
                        amount: 2
                    },
                    {
                        resource: "coins",
                        amount: 6850
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 100
                    },
                    {
                        resource: "wool",
                        amount: 45
                    },
                ],
                parents: [30,31],
                children: [33,34]
            },
            {
                id: 33,
                name: "Bonze Effigy",
                costs: [
                    {
                        resource: "research_point",
                        amount: 7
                    },
                    {
                        resource: "coins",
                        amount: 3800
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 210
                    },
                    {
                        resource: "wool",
                        amount: 90
                    },
                ],
                parents: [32],
                children: [35]
            },
            {
                id: 34,
                name: "War Paint",
                costs: [
                    {
                        resource: "research_point",
                        amount: 5
                    },
                    {
                        resource: "coins",
                        amount: 6100
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 195
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 85
                    },
                ],
                parents: [32],
                children: [36]
            },
            {
                id: 35,
                name: "Prosperity",
                costs: [
                    {
                        resource: "research_point",
                        amount: 4
                    },
                    {
                        resource: "coins",
                        amount: 9300
                    },
                    {
                        resource: "wool",
                        amount: 195
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 85
                    },
                ],
                parents: [33],
                children: []
            },
            {
                id: 36,
                name: "Thundering Gallop",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 6100
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 210
                    },
                    {
                        resource: "wool",
                        amount: 90
                    },
                    {
                        resource: "petroglyph",
                        amount: 3
                    }
                ],
                parents: [34],
                children: []
            },
        ]
    },
    {
        era: "Minoan Era",
        technologies: [
            {
                id: 1,
                name: "Township",
                costs: [
                    {
                        resource: "research_point",
                        amount: 10
                    },
                    {
                        resource: "coins",
                        amount: 10500
                    },
                    {
                        resource: "wool",
                        amount: 90
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 40
                    },
                ],
                parents: [],
                children: [2,3,4,5]
            },
            {
                id: 2,
                name: "Iron Pendant",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 10500
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 65
                    },
                    {
                        resource: "wool",
                        amount: 30
                    },
                    {
                        resource: "jasper",
                        amount: 2
                    }
                ],
                parents: [1],
                children: [6]
            },
            {
                id: 3,
                name: "Stables",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 13000
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 105
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 45
                    }
                ],
                parents: [1],
                children: [7]
            },
            {
                id: 4,
                name: "Marble Bust",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 18000
                    },
                    {
                        resource: "wool",
                        amount: 55
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 25
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 2
                    }
                ],
                parents: [1],
                children: [8]
            },
            {
                id: 5,
                name: "Linen Shirt",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 18400
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 145
                    },
                    {
                        resource: "wool",
                        amount: 60
                    }
                ],
                parents: [1],
                children: [9]
            },
            {
                id: 6,
                name: "Oat Production",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 18400
                    },
                    {
                        resource: "iron_pendant",
                        amount: 30
                    },
                    {
                        resource: "wool",
                        amount: 75
                    },
                    {
                        resource: "jasper",
                        amount: 3
                    }
                ],
                parents: [2],
                children: [10]
            },
            {
                id: 7,
                name: "Composite Bow",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 15000
                    },
                    {
                        resource: "wool",
                        amount: 90
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 40
                    }
                ],
                parents: [3],
                children: [11]
            },
            {
                id: 8,
                name: "Battle Grounds",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 15500
                    },,
                    {
                        resource: "marble_bust",
                        amount: 30
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 110
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 2
                    }
                ],
                parents: [4],
                children: [11]
            },
            {
                id: 9,
                name: "Shepherding",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 14200
                    },
                    {
                        resource: "linen_shirt",
                        amount: 30
                    },
                    {
                        resource: "wool",
                        amount: 110
                    },
                    {
                        resource: "jasper",
                        amount: 3
                    }
                ],
                parents: [5],
                children: [12]
            },
            {
                id: 10,
                name: "Minotaur's Vanguard",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 11700
                    },
                    {
                        resource: "iron_pendant",
                        amount: 90
                    },
                    {
                        resource: "linen_shirt",
                        amount: 70
                    }
                ],
                parents: [6],
                children: [13]
            },
            {
                id: 11,
                name: "Masonry",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 20100
                    },
                    {
                        resource: "marble_bust",
                        amount: 95
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 185
                    }
                ],
                parents: [7,8],
                children: [13]
            },
            {
                id: 12,
                name: "Minoan Sling Launcher",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 18800
                    },
                    {
                        resource: "linen_shirt",
                        amount: 175
                    },
                    {
                        resource: "marble_bust",
                        amount: 125
                    }
                ],
                parents: [9],
                children: [13]
            },
            {
                id: 13,
                name: "Hero Academy",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 13800
                    },
                    {
                        resource: "marble_bust",
                        amount: 205
                    },
                    {
                        resource: "iron_pendant",
                        amount: 160
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 6
                    }
                ],
                parents: [10,11,12],
                children: [14,15]
            },
            {
                id: 14,
                name: "Basket Weaving",
                costs: [
                    {
                        resource: "research_point",
                        amount: 13
                    },
                    {
                        resource: "coins",
                        amount: 20100
                    },
                    {
                        resource: "iron_pendant",
                        amount: 410
                    },
                    {
                        resource: "linen_shirt",
                        amount: 175
                    }
                ],
                parents: [13],
                children: [16,17]
            },
            {
                id: 15,
                name: "Equestrian Artistry",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 19200
                    },
                    {
                        resource: "linen_shirt",
                        amount: 355
                    },
                    {
                        resource: "marble_bust",
                        amount: 150
                    }
                ],
                parents: [13],
                children: [18]
            },
            {
                id: 16,
                name: "Hawkeye Vision",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 13800
                    },
                    {
                        resource: "marble_bust",
                        amount: 310
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 130
                    },
                    {
                        resource: "jasper",
                        amount: 4
                    }
                ],
                parents: [14],
                children: [19]
            },
            {
                id: 17,
                name: "Screws",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 12100
                    },
                    {
                        resource: "linen_shirt",
                        amount: 325
                    },
                    {
                        resource: "iron_pendant",
                        amount: 140
                    }
                ],
                parents: [14],
                children: [20,21]
            },
            {
                id: 18,
                name: "Glyphic Warding",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 11700
                    },
                    {
                        resource: "marble_bust",
                        amount: 195
                    },
                    {
                        resource: "linen_shirt",
                        amount: 85
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 4
                    }
                ],
                parents: [15],
                children: [22]
            },
            {
                id: 19,
                name: "Mystic Battle Chants",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 20500
                    },
                    {
                        resource: "iron_pendant",
                        amount: 440
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 190
                    }
                ],
                parents: [16],
                children: [23]
            },
            {
                id: 20,
                name: "Animal Husbandry",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 17600
                    },
                    {
                        resource: "iron_pendant",
                        amount: 505
                    },
                    {
                        resource: "marble_bust",
                        amount: 215
                    },
                    {
                        resource: "jasper",
                        amount: 4
                    }
                ],
                parents: [17],
                children: [23]
            },
            {
                id: 21,
                name: "Millstone",
                costs: [
                    {
                        resource: "research_point",
                        amount: 13
                    },
                    {
                        resource: "coins",
                        amount: 13800
                    },
                    {
                        resource: "linen_shirt",
                        amount: 355
                    },
                    {
                        resource: "iron_pendant",
                        amount: 150
                    }
                ],
                parents: [17],
                children: [23]
            },
            {
                id: 22,
                name: "Oracles Guidance",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 12100
                    },
                    {
                        resource: "marble_bust",
                        amount: 230
                    },
                    {
                        resource: "linen_shirt",
                        amount: 100
                    }
                ],
                parents: [18],
                children: [24]
            },
            {
                id: 23,
                name: "Columns",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 15900
                    },
                    {
                        resource: "iron_pendant",
                        amount: 260
                    },
                    {
                        resource: "wool",
                        amount: 110
                    },
                ],
                parents: [19,20,21],
                children: [25]
            },
            {
                id: 24,
                name: "Divinatory Strategy",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 17100
                    },
                    {
                        resource: "marble_bust",
                        amount: 280
                    },
                    {
                        resource: "bronze_bracelet",
                        amount: 120
                    },
                    {
                        resource: "jasper",
                        amount: 4
                    }
                ],
                parents: [22],
                children: [25]
            },
            {
                id: 25,
                name: "Winch",
                costs: [
                    {
                        resource: "research_point",
                        amount: 10
                    },
                    {
                        resource: "coins",
                        amount: 18000
                    },
                    {
                        resource: "linen_shirt",
                        amount: 355
                    },
                    {
                        resource: "marble_bust",
                        amount: 150
                    },
                    {
                        resource: "minoan_frescoes",
                        amount: 6
                    }
                ],
                parents: [23,24],
                children: [26,27,28]
            },
            {
                id: 26,
                name: "Lionhearted Infantry",
                costs: [
                    {
                        resource: "research_point",
                        amount: 10
                    },
                    {
                        resource: "coins",
                        amount: 22200
                    },
                    {
                        resource: "iron_pendant",
                        amount: 330
                    },
                    {
                        resource: "marble_bust",
                        amount: 140
                    },
                ],
                parents: [25],
                children: [29]
            },
            {
                id: 27,
                name: "Administration",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 20100
                    },
                    {
                        resource: "linen_shirt",
                        amount: 420
                    },
                    {
                        resource: "alabaster_idol",
                        amount: 180
                    },
                    {
                        resource: "jasper",
                        amount: 4
                    }
                ],
                parents: [25],
                children: [29]
            },
            {
                id: 28,
                name: "Cretan Quivers",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 23000
                    },
                    {
                        resource: "marble_bust",
                        amount: 355
                    },
                    {
                        resource: "linen_shirt",
                        amount: 155
                    },
                ],
                parents: [25],
                children: [30]
            },
            {
                id: 29,
                name: "Ceramic Armorcraft",
                costs: [
                    {
                        resource: "research_point",
                        amount: 10
                    },
                    {
                        resource: "coins",
                        amount: 14200
                    },
                    {
                        resource: "iron_pendant",
                        amount: 230
                    },
                    {
                        resource: "wool",
                        amount: 100
                    },
                    {
                        resource: "jasper",
                        amount: 4
                    }
                ],
                parents: [26,27],
                children: []
            },
            {
                id: 30,
                name: "Bronze Automata",
                costs: [
                    {
                        resource: "research_point",
                        amount: 8
                    },
                    {
                        resource: "coins",
                        amount: 17600
                    },
                    {
                        resource: "linen_shirt",
                        amount: 245
                    },
                    {
                        resource: "iron_pendant",
                        amount: 105
                    },
                    {
                        resource: "jasper",
                        amount: 6
                    }
                ],
                parents: [28],
                children: []
            },
        ]
    },
    {
        era: "Classic Greece",
        technologies: [
            {
                id: 1,
                name: "Agora",
                costs: [
                    {
                        resource: "research_point",
                        amount: 11
                    },
                    {
                        resource: "coins",
                        amount: 37300
                    },
                    {
                        resource: "iron_pendant",
                        amount: 205
                    },
                    {
                        resource: "linen_shirt",
                        amount: 90
                    },
                ],
                parents: [],
                children: [2,3,4]
            },
            {
                id: 2,
                name: "Silver Ring",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 27700
                    },
                    {
                        resource: "linen_shirt",
                        amount: 135
                    },
                    {
                        resource: "marble_bust",
                        amount: 60
                    },
                    {
                        resource: "hematite",
                        amount: 1
                    }
                ],
                parents: [1],
                children: [5]
            },
            {
                id: 3,
                name: "Toga",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 35100
                    },
                    {
                        resource: "marble_bust",
                        amount: 275
                    },
                    {
                        resource: "iron_pendant",
                        amount: 115
                    },
                    {
                        resource: "hematite",
                        amount: 2
                    }
                ],
                parents: [1],
                children: [6,7]
            },
            {
                id: 4,
                name: "Column",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 31900
                    },
                    {
                        resource: "iron_pendant",
                        amount: 100
                    },
                    {
                        resource: "linen_shirt",
                        amount: 45
                    },
                    {
                        resource: "hematite",
                        amount: 2
                    }
                ],
                parents: [1],
                children: [8]
            },
            {
                id: 5,
                name: "Toxotai",
                costs: [
                    {
                        resource: "research_point",
                        amount: 14
                    },
                    {
                        resource: "coins",
                        amount: 39400
                    },
                    {
                        resource: "silver_ring",
                        amount: 100
                    },
                    {
                        resource: "marble_bust",
                        amount: 265
                    },
                    {
                        resource: "greek_lyre",
                        amount: 1
                    }
                ],
                parents: [2],
                children: [9]
            },
            {
                id: 6,
                name: "Domestic Pigs",
                costs: [
                    {
                        resource: "research_point",
                        amount: 16
                    },
                    {
                        resource: "coins",
                        amount: 38300
                    },
                    {
                        resource: "toga",
                        amount: 70
                    },
                    {
                        resource: "linen_shirt",
                        amount: 175
                    },
                ],
                parents: [3],
                children: [9]
            },
            {
                id: 7,
                name: "Carpentry",
                costs: [
                    {
                        resource: "research_point",
                        amount: 14
                    },
                    {
                        resource: "coins",
                        amount: 29800
                    },
                    {
                        resource: "toga",
                        amount: 60
                    },
                    {
                        resource: "marble_bust",
                        amount: 240
                    }
                ],
                parents: [3],
                children: [10]
            },
            {
                id: 8,
                name: "Cataphract",
                costs: [
                    {
                        resource: "research_point",
                        amount: 9
                    },
                    {
                        resource: "coins",
                        amount: 39400
                    },,
                    {
                        resource: "column",
                        amount: 110
                    },
                    {
                        resource: "linen_shirt",
                        amount: 245
                    },
                    {
                        resource: "hematite",
                        amount: 3
                    }
                ],
                parents: [4],
                children: [10]
            },
            {
                id: 9,
                name: "Education",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 37300
                    },
                    {
                        resource: "toga",
                        amount: 380
                    },
                    {
                        resource: "silver_ring",
                        amount: 165
                    },
                ],
                parents: [5,6],
                children: [11,12]
            },
            {
                id: 10,
                name: "Psiloi",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 42600
                    },
                    {
                        resource: "column",
                        amount: 590
                    },
                    {
                        resource: "toga",
                        amount: 250
                    },
                    {
                        resource: "hematite",
                        amount: 4
                    }
                ],
                parents: [7,8],
                children: [12,13]
            },
            {
                id: 11,
                name: "Hellenic Bolt Thrower",
                costs: [
                    {
                        resource: "research_point",
                        amount: 13
                    },
                    {
                        resource: "coins",
                        amount: 37300
                    },
                    {
                        resource: "silver_ring",
                        amount: 410
                    },
                    {
                        resource: "toga",
                        amount: 175
                    },
                    {
                        resource: "greek_lyre",
                        amount: 3
                    }
                ],
                parents: [9],
                children: [14]
            },
            {
                id: 12,
                name: "Philosophy",
                costs: [
                    {
                        resource: "research_point",
                        amount: 16
                    },
                    {
                        resource: "coins",
                        amount: 31900
                    },
                    {
                        resource: "toga",
                        amount: 610
                    },
                    {
                        resource: "column",
                        amount: 260
                    }
                ],
                parents: [9,10],
                children: [15]
            },
            {
                id: 13,
                name: "Hoplites",
                costs: [
                    {
                        resource: "research_point",
                        amount: 12
                    },
                    {
                        resource: "coins",
                        amount: 34100
                    },
                    {
                        resource: "column",
                        amount: 275
                    },
                    {
                        resource: "linen_shirt",
                        amount: 115
                    },
                ],
                parents: [10],
                children: [16]
            },
            {
                id: 14,
                name: "Wind Prediction",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 52200
                    },
                    {
                        resource: "toga",
                        amount: 820
                    },
                    {
                        resource: "silver_ring",
                        amount: 350
                    },
                    {
                        resource: "hematite",
                        amount: 6
                    }
                ],
                parents: [11],
                children: [17,18]
            },
            {
                id: 15,
                name: "Crop Rotation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 18
                    },
                    {
                        resource: "coins",
                        amount: 43600
                    },
                    {
                        resource: "silver_ring",
                        amount: 345
                    },
                    {
                        resource: "iron_pendant",
                        amount: 150
                    }
                ],
                parents: [12],
                children: [18,19]
            },
            {
                id: 16,
                name: "Improved Saddles",
                costs: [
                    {
                        resource: "research_point",
                        amount: 20
                    },
                    {
                        resource: "coins",
                        amount: 50000
                    },
                    {
                        resource: "column",
                        amount: 530
                    },
                    {
                        resource: "toga",
                        amount: 230
                    },
                    {
                        resource: "greek_lyre",
                        amount: 4
                    }
                ],
                parents: [13],
                children: [20]
            },
            {
                id: 17,
                name: "Swift Reload",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 54300
                    },
                    {
                        resource: "silver_ring",
                        amount: 405
                    },
                    {
                        resource: "marble_bust",
                        amount: 175
                    }
                ],
                parents: [14],
                children: [21]
            },
            {
                id: 18,
                name: "Ambush Techniques",
                costs: [
                    {
                        resource: "research_point",
                        amount: 16
                    },
                    {
                        resource: "coins",
                        amount: 49000
                    },
                    {
                        resource: "toga",
                        amount: 480
                    },
                    {
                        resource: "silver_ring",
                        amount: 205
                    },
                    {
                        resource: "greek_lyre",
                        amount: 6
                    }
                ],
                parents: [14,15],
                children: [21]
            },
            {
                id: 19,
                name: "Temples",
                costs: [
                    {
                        resource: "research_point",
                        amount: 13
                    },
                    {
                        resource: "coins",
                        amount: 43600
                    },
                    {
                        resource: "column",
                        amount: 415
                    },
                    {
                        resource: "silver_ring",
                        amount: 180
                    },
                    {
                        resource: "hematite",
                        amount: 7
                    }
                ],
                parents: [15],
                children: [21]
            },
            {
                id: 20,
                name: "Bulwark Formation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 14
                    },
                    {
                        resource: "coins",
                        amount: 57500
                    },
                    {
                        resource: "silver_ring",
                        amount: 820
                    },
                    {
                        resource: "column",
                        amount: 350
                    },
                ],
                parents: [16],
                children: [21]
            },
            {
                id: 21,
                name: "Herbal Aromas",
                costs: [
                    {
                        resource: "research_point",
                        amount: 20
                    },
                    {
                        resource: "coins",
                        amount: 51100
                    },
                    {
                        resource: "toga",
                        amount: 750
                    },
                    {
                        resource: "iron_pendant",
                        amount: 320
                    },
                    {
                        resource: "greek_lyre",
                        amount: 6
                    }
                ],
                parents: [17,18,19,20],
                children: [22,23,24]
            },
            {
                id: 22,
                name: "Flank Assault",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 43600
                    },
                    {
                        resource: "column",
                        amount: 405
                    },
                    {
                        resource: "toga",
                        amount: 175
                    }
                ],
                parents: [21],
                children: [25]
            },
            {
                id: 23,
                name: "Math",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 54300
                    },
                    {
                        resource: "silver_ring",
                        amount: 620
                    },
                    {
                        resource: "column",
                        amount: 185
                    },
                    {
                        resource: "hematite",
                        amount: 7
                    }
                ],
                parents: [21],
                children: [26]
            },
            {
                id: 24,
                name: "Improved Fletching",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 53200
                    },
                    {
                        resource: "toga",
                        amount: 740
                    },
                    {
                        resource: "linen_shirt",
                        amount: 235
                    },
                ],
                parents: [21],
                children: [27]
            },
            {
                id: 25,
                name: "Reinforced Shields",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 37300
                    },
                    {
                        resource: "column",
                        amount: 690
                    },
                    {
                        resource: "toga",
                        amount: 215
                    },
                    {
                        resource: "hematite",
                        amount: 8
                    }
                ],
                parents: [22],
                children: [28]
            },
            {
                id: 26,
                name: "Philosophical Debates",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 45800
                    },
                    {
                        resource: "toga",
                        amount: 325
                    },
                    {
                        resource: "silver_ring",
                        amount: 140
                    },
                    {
                        resource: "greek_lyre",
                        amount: 6
                    }
                ],
                parents: [23],
                children: [29]
            },
            {
                id: 27,
                name: "Advanced Projectiles",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 56400
                    },
                    {
                        resource: "column",
                        amount: 680
                    },
                    {
                        resource: "silver_ring",
                        amount: 295
                    },
                ],
                parents: [24],
                children: [29]
            },
            {
                id: 28,
                name: "Intimidating Presence",
                costs: [
                    {
                        resource: "research_point",
                        amount: 18
                    },
                    {
                        resource: "coins",
                        amount: 46800
                    },
                    {
                        resource: "silver_ring",
                        amount: 460
                    },
                    {
                        resource: "marble_bust",
                        amount: 200
                    },
                    {
                        resource: "greek_lyre",
                        amount: 8
                    }
                ],
                parents: [25],
                children: []
            },
            {
                id: 29,
                name: "Concrete",
                costs: [
                    {
                        resource: "research_point",
                        amount: 15
                    },
                    {
                        resource: "coins",
                        amount: 57500
                    },
                    {
                        resource: "silver_ring",
                        amount: 615
                    },
                    {
                        resource: "column",
                        amount: 265
                    },
                    {
                        resource: "hematite",
                        amount: 13
                    }
                ],
                parents: [26,27],
                children: []
            },
        ]
    },
    {
        era: "Early Rome",
        technologies: [
            {
                id: 1,
                name: "Municipium",
                costs: [
                    {
                        resource: "research_point",
                        amount: 27
                    },
                    {
                        resource: "coins",
                        amount: 53800
                    },
                    {
                        resource: "silver_ring",
                        amount: 630
                    },
                    {
                        resource: "column",
                        amount: 270
                    },
                ],
                parents: [],
                children: [2,3,4]
            },
            {
                id: 2,
                name: "Tunic",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 55900
                    },
                    {
                        resource: "column",
                        amount: 855
                    },
                    {
                        resource: "toga",
                        amount: 365
                    },
                    {
                        resource: "emerald",
                        amount: 2
                    }
                ],
                parents: [1],
                children: [5]
            },
            {
                id: 3,
                name: "Javelin Catapult",
                costs: [
                    {
                        resource: "research_point",
                        amount: 26
                    },
                    {
                        resource: "coins",
                        amount: 81800
                    },
                    {
                        resource: "toga",
                        amount: 730
                    },
                    {
                        resource: "silver_ring",
                        amount: 310
                    },
                ],
                parents: [1],
                children: [6,7]
            },
            {
                id: 4,
                name: "Gold Laurel",
                costs: [
                    {
                        resource: "research_point",
                        amount: 18
                    },
                    {
                        resource: "coins",
                        amount: 83900
                    },
                    {
                        resource: "silver_ring",
                        amount: 755
                    },
                    {
                        resource: "column",
                        amount: 325
                    },
                    {
                        resource: "emerald",
                        amount: 4
                    }
                ],
                parents: [1],
                children: [8]
            },
            {
                id: 5,
                name: "Auxilla Riders",
                costs: [
                    {
                        resource: "research_point",
                        amount: 23
                    },
                    {
                        resource: "coins",
                        amount: 55900
                    },
                    {
                        resource: "tunic",
                        amount: 400
                    },
                    {
                        resource: "column",
                        amount: 375
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 2
                    }
                ],
                parents: [2],
                children: [9]
            },
            {
                id: 6,
                name: "Insulae",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 55900
                    },
                    {
                        resource: "toga",
                        amount: 780
                    },
                    {
                        resource: "column",
                        amount: 335
                    },
                ],
                parents: [3],
                children: [10]
            },
            {
                id: 7,
                name: "Stone Tablet",
                costs: [
                    {
                        resource: "research_point",
                        amount: 26
                    },
                    {
                        resource: "coins",
                        amount: 66700
                    },
                    {
                        resource: "silver_ring",
                        amount: 1105
                    },
                    {
                        resource: "toga",
                        amount: 475
                    },
                    {
                        resource: "emerald",
                        amount: 4
                    }
                ],
                parents: [3],
                children: [10]
            },
            {
                id: 8,
                name: "Hastati",
                costs: [
                    {
                        resource: "research_point",
                        amount: 24
                    },
                    {
                        resource: "coins",
                        amount: 73200
                    },,
                    {
                        resource: "gold_laurel",
                        amount: 655
                    },
                    {
                        resource: "column",
                        amount: 280
                    },
                ],
                parents: [4],
                children: [11]
            },
            {
                id: 9,
                name: "Triarii",
                costs: [
                    {
                        resource: "research_point",
                        amount: 24
                    },
                    {
                        resource: "coins",
                        amount: 62400
                    },
                    {
                        resource: "tunic",
                        amount: 620
                    },
                    {
                        resource: "gold_laurel",
                        amount: 355
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 4
                    }
                ],
                parents: [5],
                children: [12]
            },
            {
                id: 10,
                name: "Sewerage",
                costs: [
                    {
                        resource: "research_point",
                        amount: 24
                    },
                    {
                        resource: "coins",
                        amount: 71000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 1080
                    },
                    {
                        resource: "toga",
                        amount: 465
                    },
                    {
                        resource: "emerald",
                        amount: 6
                    }
                ],
                parents: [6,7],
                children: [12,13]
            },
            {
                id: 11,
                name: "Velites",
                costs: [
                    {
                        resource: "research_point",
                        amount: 21
                    },
                    {
                        resource: "coins",
                        amount: 86100
                    },
                    {
                        resource: "gold_laurel",
                        amount: 1155
                    },
                    {
                        resource: "tunic",
                        amount: 495
                    },
                ],
                parents: [8],
                children: [13]
            },
            {
                id: 12,
                name: "Marketplaces",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 92500
                    },
                    {
                        resource: "stone_tablet",
                        amount: 705
                    },
                    {
                        resource: "tunic",
                        amount: 300
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 6
                    }
                ],
                parents: [9,10],
                children: [14,15]
            },
            {
                id: 13,
                name: "Rear Livestock",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 66700
                    },
                    {
                        resource: "stone_tablet",
                        amount: 955
                    },
                    {
                        resource: "gold_laurel",
                        amount: 410
                    },
                ],
                parents: [10,11],
                children: [16]
            },
            {
                id: 14,
                name: "War Machines",
                costs: [
                    {
                        resource: "research_point",
                        amount: 23
                    },
                    {
                        resource: "coins",
                        amount: 75300
                    },
                    {
                        resource: "tunic",
                        amount: 1330
                    },
                    {
                        resource: "silver_ring",
                        amount: 570
                    },
                    {
                        resource: "emerald",
                        amount: 8
                    }
                ],
                parents: [12],
                children: [17]
            },
            {
                id: 15,
                name: "Tactical Charge",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 79600
                    },
                    {
                        resource: "stone_tablet",
                        amount: 780
                    },
                    {
                        resource: "gold_laurel",
                        amount: 335
                    }
                ],
                parents: [12],
                children: [18]
            },
            {
                id: 16,
                name: "Sword Mastery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 25
                    },
                    {
                        resource: "coins",
                        amount: 77500
                    },
                    {
                        resource: "gold_laurel",
                        amount: 1355
                    },
                    {
                        resource: "stone_tablet",
                        amount: 580
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 7
                    }
                ],
                parents: [13],
                children: [19,20]
            },
            {
                id: 17,
                name: "Marks of History",
                costs: [
                    {
                        resource: "research_point",
                        amount: 27
                    },
                    {
                        resource: "coins",
                        amount: 105000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 655
                    },
                    {
                        resource: "gold_laurel",
                        amount: 280
                    }
                ],
                parents: [14],
                children: [21]
            },
            {
                id: 18,
                name: "Formation Drill",
                costs: [
                    {
                        resource: "research_point",
                        amount: 23
                    },
                    {
                        resource: "coins",
                        amount: 96800
                    },
                    {
                        resource: "tunic",
                        amount: 655
                    },
                    {
                        resource: "stone_tablet",
                        amount: 280
                    },
                    {
                        resource: "emerald",
                        amount: 8
                    }
                ],
                parents: [15],
                children: [22]
            },
            {
                id: 19,
                name: "Pilum Precision",
                costs: [
                    {
                        resource: "research_point",
                        amount: 27
                    },
                    {
                        resource: "coins",
                        amount: 60200
                    },
                    {
                        resource: "gold_laurel",
                        amount: 930
                    },
                    {
                        resource: "column",
                        amount: 400
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 8
                    }
                ],
                parents: [16],
                children: [23]
            },
            {
                id: 20,
                name: "Tributum Capitis",
                costs: [
                    {
                        resource: "research_point",
                        amount: 23
                    },
                    {
                        resource: "coins",
                        amount: 71000
                    },
                    {
                        resource: "tunic",
                        amount: 980
                    },
                    {
                        resource: "gold_laurel",
                        amount: 420
                    },
                    {
                        resource: "emerald",
                        amount: 8
                    }
                ],
                parents: [16],
                children: [23]
            },
            {
                id: 21,
                name: "Siege Engineering",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 108000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 905
                    },
                    {
                        resource: "tunic",
                        amount: 385
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 8
                    }
                ],
                parents: [17],
                children: [24]
            },
            {
                id: 22,
                name: "Roman Providence",
                costs: [
                    {
                        resource: "research_point",
                        amount: 21
                    },
                    {
                        resource: "coins",
                        amount: 77500
                    },
                    {
                        resource: "gold_laurel",
                        amount: 905
                    },
                    {
                        resource: "stone_tablet",
                        amount: 385
                    }
                ],
                parents: [18],
                children: [24]
            },
            {
                id: 23,
                name: "Rations Efficiency",
                costs: [
                    {
                        resource: "research_point",
                        amount: 27
                    },
                    {
                        resource: "coins",
                        amount: 71000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 855
                    },
                    {
                        resource: "gold_laurel",
                        amount: 365
                    },
                    {
                        resource: "emerald",
                        amount: 10
                    }
                ],
                parents: [19,20],
                children: [25]
            },
            {
                id: 24,
                name: "Lance Mastery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 24
                    },
                    {
                        resource: "coins",
                        amount: 114000
                    },
                    {
                        resource: "gold_laurel",
                        amount: 830
                    },
                    {
                        resource: "toga",
                        amount: 355
                    },
                ],
                parents: [21,22],
                children: [26]
            },
            {
                id: 25,
                name: "Compost",
                costs: [
                    {
                        resource: "research_point",
                        amount: 26
                    },
                    {
                        resource: "coins",
                        amount: 99000
                    },
                    {
                        resource: "tunic",
                        amount: 1005
                    },
                    {
                        resource: "stone_tablet",
                        amount: 430
                    },
                    {
                        resource: "emerald",
                        amount: 11
                    }
                ],
                parents: [23],
                children: [26]
            },
            {
                id: 26,
                name: "Domus",
                costs: [
                    {
                        resource: "research_point",
                        amount: 23
                    },
                    {
                        resource: "coins",
                        amount: 116000
                    },
                    {
                        resource: "tunic",
                        amount: 1255
                    },
                    {
                        resource: "column",
                        amount: 540
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 11
                    }
                ],
                parents: [24,25],
                children: [27,28,29]
            },
            {
                id: 27,
                name: "Watchtowers",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 64500
                    },
                    {
                        resource: "stone_tablet",
                        amount: 1280
                    },
                    {
                        resource: "gold_laurel",
                        amount: 550
                    },
                    {
                        resource: "emerald",
                        amount: 12
                    }
                ],
                parents: [26],
                children: [30]
            },
            {
                id: 28,
                name: "Terrain Mapping",
                costs: [
                    {
                        resource: "research_point",
                        amount: 19
                    },
                    {
                        resource: "coins",
                        amount: 73200
                    },
                    {
                        resource: "gold_laurel",
                        amount: 1230
                    },
                    {
                        resource: "tunic",
                        amount: 525
                    },
                ],
                parents: [26],
                children: [30]
            },
            {
                id: 29,
                name: "Soil Conservation",
                costs: [
                    {
                        resource: "research_point",
                        amount: 20
                    },
                    {
                        resource: "coins",
                        amount: 94700
                    },
                    {
                        resource: "tunic",
                        amount: 830
                    },
                    {
                        resource: "silver_ring",
                        amount: 355
                    },
                    {
                        resource: "emerald",
                        amount: 13
                    }
                ],
                parents: [26],
                children: []
            },
            {
                id: 30,
                name: "Spear Throw Mastery",
                costs: [
                    {
                        resource: "research_point",
                        amount: 17
                    },
                    {
                        resource: "coins",
                        amount: 110000
                    },
                    {
                        resource: "stone_tablet",
                        amount: 1130
                    },
                    {
                        resource: "tunic",
                        amount: 485
                    },
                    {
                        resource: "etruscan_bronze_mirror",
                        amount: 11
                    }
                ],
                parents: [27,28,29],
                children: []
            },
        ]
    }
]

export default allTechnologies;