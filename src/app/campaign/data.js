const allProvinces = [
    {
        id: 1,
        name: "Ancient Wilds",
        img: "/campaign/provinces/province_1.webp",
        location: "Panganea",
    },
    {
        id: 2,
        name: "Skullsmashers' Domain",
        img: "/campaign/provinces/province_2.webp",
        location: "Panganea",
    },
    {
        id: 3,
        name: "Silent Moorland",
        img: "/campaign/provinces/province_3.webp",
        location: "Panganea",
    },
    {
        id: 4,
        name: "Frozen Plateau",
        img: "/campaign/provinces/province_4.webp",
        location: "Panganea",
    },
    {
        id: 5,
        name: "Grasslands of Sumer",
        img: "/campaign/provinces/province_5.webp",
        location: "Panganea",
    },
    {
        id: 6,
        name: "Fallen Capital",
        img: "/campaign/provinces/province_6.webp",
        location: "Panganea",
    },
    {
        id: 7,
        name: "Minoan Hinterlands",
        img: "/campaign/provinces/province_7.webp",
        location: "Panganea",
    },
    {
        id: 8,
        name: "City of Knossos",
        img: "/campaign/provinces/province_8.webp",
        location: "Panganea",
    },
    {
        id: 9,
        name: "Sandy Shoreline",
        img: "/campaign/provinces/province_9.webp",
        location: "DesertDelta",
    },
    {
        id: 10,
        name: "City of Pharaohs",
        img: "/campaign/provinces/province_10.webp",
        location: "DesertDelta",
    },
    {
        id: 11,
        name: "Sunset Fortress",
        img: "/campaign/provinces/province_11.webp",
        location: "DesertDelta",
    },
    {
        id: 12,
        name: "Wartorn Rivulet",
        img: "/campaign/provinces/province_12.webp",
        location: "DesertDelta",
    },
    {
        id: 13,
        name: "Fortified Sands",
        img: "/campaign/provinces/province_13.webp",
        location: "DesertDelta",
    },
    {
        id: 14,
        name: "Heart of Sparta",
        img: "/campaign/provinces/province_14.webp",
        location: "DesertDelta",
    },
    {
        id: 15,
        name: "Mountain Pass",
        img: "/campaign/provinces/province_15.webp",
        location: "DesertDelta",
    },
    {
        id: 16,
        name: "Verdant Floodplain",
        img: "/campaign/provinces/province_16.webp",
        location: "DesertDelta",
    },
    {
        id: 17,
        name: "Tropical Shore",
        img: "/campaign/provinces/province_17.webp",
        location: "EasternValley",
    },
    {
        id: 18,
        name: "Rugged Rainforest",
        img: "/campaign/provinces/province_18.webp",
        location: "EasternValley",
    },
    {
        id: 19,
        name: "Teeming Basin",
        img: "/campaign/provinces/province_19.webp",
        location: "EasternValley",
    },
    {
        id: 20,
        name: "Tesla's Fortress",
        img: "/campaign/provinces/province_20.webp",
        location: "EasternValley",
    },
    {
        id: 21,
        name: "Path to the East",
        img: "/campaign/provinces/province_21.webp",
        location: "EasternValley",
    },
    {
        id: 22,
        name: "Deepest Jungle",
        img: "/campaign/provinces/province_22.webp",
        location: "EasternValley",
    },
    {
        id: 23,
        name: "Ottoman Port",
        img: "/campaign/provinces/province_23.webp",
        location: "EasternValley",
    },
    {
        id: 24,
        name: "Malian Fort",
        img: "/campaign/provinces/province_24.webp",
        location: "EasternValley",
    },
    {
        id: 25,
        name: "Mayan Foothills",
        img: "/campaign/provinces/province_25.webp",
        location: "VolcanicJungle",
    },
    {
        id: 26,
        name: "Obsidian Arena",
        img: "/campaign/provinces/province_26.webp",
        location: "VolcanicJungle",
    },
    {
        id: 27,
        name: "English Colony",
        img: "/campaign/provinces/province_27.webp",
        location: "VolcanicJungle",
    },
    {
        id: 28,
        name: "New Byzantium",
        img: "/campaign/provinces/province_28.webp",
        location: "VolcanicJungle",
    },
    {
        id: 29,
        name: "Iberian Hinterlands",
        img: "/campaign/provinces/province_29.webp",
        location: "VolcanicJungle",
    },
    {
        id: 30,
        name: "Castles of Castilla",
        img: "/campaign/provinces/province_30.webp",
        location: "VolcanicJungle",
    },
    {
        id: 31,
        name: "Cothon of Carthage",
        img: "/campaign/provinces/province_31.webp",
        location: "VolcanicJungle",
    },
    {
        id: 32,
        name: "Ornate Pathways",
        img: "/campaign/provinces/province_32.webp",
        location: "VolcanicJungle",
    },
    {
        id: 33,
        name: "Knight's Glade",
        img: "/campaign/provinces/province_33.webp",
        location: "FrozenFjord",
    },
    {
        id: 34,
        name: "New Broceliande",
        img: "/campaign/provinces/province_34.webp",
        location: "FrozenFjord",
    },
    {
        id: 35,
        name: "The Lady's Lake",
        img: "/campaign/provinces/province_35.webp",
        location: "FrozenFjord",
    },
    {
        id: 36,
        name: "Forest of the Fae",
        img: "/campaign/provinces/province_36.webp",
        location: "FrozenFjord",
    },
    {
        id: 37,
        name: "Mount Gawain",
        img: "/campaign/provinces/province_37.webp",
        location: "FrozenFjord",
    },
    {
        id: 38,
        name: "Blackfield",
        img: "/campaign/provinces/province_38.webp",
        location: "FrozenFjord",
    },
    {
        id: 39,
        name: "The Green Chapel",
        img: "/campaign/provinces/province_39.webp",
        location: "FrozenFjord",
    },
    {
        id: 40,
        name: "Pathway to Avalon",
        img: "/campaign/provinces/province_40.webp",
        location: "FrozenFjord",
    },
]

export default allProvinces;