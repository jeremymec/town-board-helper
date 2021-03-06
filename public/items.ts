const items = [
  {
    id: "woodt1",
    name: "Green Wood",
    categories: [],
  },
  {
    id: "timbert2",
    name: "Timber",
    categories: ["Tier 2 Timber", "Refined Wood", "Wood"],
  },
  {
    id: "woodt2",
    name: "Aged Wood",
    categories: [],
  },
  {
    id: "timbert3",
    name: "Lumber",
    categories: ["Tier 3 Timber", "Refined Wood", "Wood"],
  },
  {
    id: "woodt4",
    name: "Wyrdwood",
    categories: [],
  },
  {
    id: "timbert4",
    name: "Wyrdwood Planks",
    categories: ["Tier 4 Timber", "Refined Wood", "Wood"],
  },
  {
    id: "woodt5",
    name: "Ironwood",
    categories: [],
  },
  {
    id: "timbert5",
    name: "Ironwood Planks",
    categories: ["Tier 5 Timber", "Refined Wood", "Wood"],
  },
  {
    id: "rawhidet0",
    name: "Rawhide Scraps",
    categories: [],
  },
  {
    id: "leathert2",
    name: "Coarse Leather",
    categories: ["Tier 2 Leather", "Leathers"],
  },
  {
    id: "leathert3",
    name: "Rugged Leather",
    categories: ["Tier 3 Leather", "Leathers"],
  },
  {
    id: "rawhidet4",
    name: "Thick Hide",
    categories: [],
  },
  {
    id: "leathert4",
    name: "Layered Leather",
    categories: ["Tier 4 Leather", "Leathers"],
  },
  {
    id: "rawhidet5",
    name: "Iron Hide",
    categories: [],
  },
  {
    id: "leathert5",
    name: "Infused Leather",
    categories: ["Tier 5 Leather", "Leathers"],
  },
  {
    id: "fibert1",
    name: "Fibers",
    categories: [],
  },
  {
    id: "clotht2",
    name: "Linen",
    categories: ["Tier 2 Cloth", "Cloth"],
  },
  {
    id: "clotht3",
    name: "Sateen",
    categories: ["Tier 3 Cloth", "Cloth"],
  },
  {
    id: "fibert4",
    name: "Silk Threads",
    categories: [],
  },
  {
    id: "clotht4",
    name: "Silk",
    categories: ["Tier 4 Cloth", "Cloth"],
  },
  {
    id: "fibert5",
    name: "Wirefiber",
    categories: [],
  },
  {
    id: "clotht5",
    name: "Infused Silk",
    categories: ["Tier 5 Cloth", "Cloth"],
  },
  {
    id: "stonet1",
    name: "Stone",
    categories: [],
  },
  {
    id: "blockt2",
    name: "Stone Block",
    categories: [],
  },
  {
    id: "blockt3",
    name: "Stone Brick",
    categories: [],
  },
  {
    id: "stonet4",
    name: "Lodestone",
    categories: [],
  },
  {
    id: "blockt4",
    name: "Lodestone Brick",
    categories: [],
  },
  {
    id: "blockt5",
    name: "Obsidian Voidstone",
    categories: [],
  },
  {
    id: "workorder_faction_provisions01_t1",
    name: "Cooking Recipe",
    categories: [],
  },
  {
    id: "porkt1",
    name: "Pork",
    categories: ["Tier 1 Meats", "Raw Meats", "Raw Foods", "Tier 1 Raw Foods"],
  },
  {
    id: "saltt1",
    name: "Salt",
    categories: [],
  },
  {
    id: "faction_provisions01_t1",
    name: "Dried Meat Samples",
    categories: [],
  },
  {
    id: "sugart1",
    name: "Sugar",
    categories: [],
  },
  {
    id: "faction_provisions01_t2",
    name: "Meat Jerky Rations",
    categories: [],
  },
  {
    id: "gingert1",
    name: "Ginger",
    categories: [],
  },
  {
    id: "faction_provisions01_t3",
    name: "Flavored Pork Provisions",
    categories: [],
  },
  {
    id: "redmeatt1",
    name: "Red Meat",
    categories: ["Tier 2 Meats", "Raw Meats", "Raw Foods", "Tier 2 Raw Foods"],
  },
  {
    id: "venisont1",
    name: "Venison",
    categories: ["Tier 3 Meats", "Raw Meats", "Raw Foods", "Tier 3 Raw Foods"],
  },
  {
    id: "sausaget1",
    name: "Sausage",
    categories: ["Tier 2 Meats", "Raw Meats", "Raw Foods", "Tier 2 Raw Foods"],
  },
  {
    id: "faction_provisions01_t4",
    name: "Quality Meat Supplies",
    categories: [],
  },
  {
    id: "thymet1",
    name: "Thyme",
    categories: ["Seasonings", "herbs"],
  },
  {
    id: "saget1",
    name: "Sage",
    categories: ["Seasonings", "herbs"],
  },
  {
    id: "mintt1",
    name: "Mint",
    categories: ["Seasonings", "herbs"],
  },
  {
    id: "tarragont1",
    name: "Tarragon",
    categories: ["Seasonings", "herbs"],
  },
  {
    id: "faction_provisions01_t5",
    name: "Perennial Herb Stockpile",
    categories: [],
  },
  {
    id: "fisht1",
    name: "Fish Filet",
    categories: ["Fish", "Raw Foods", "Tier 1 Raw Foods"],
  },
  {
    id: "fishoilt1",
    name: "Fish Oil",
    categories: [],
  },
  {
    id: "faction_provisions02_t1",
    name: "Canned Fish Samples",
    categories: [],
  },
  {
    id: "dillt1",
    name: "Dill",
    categories: ["Seasonings", "herbs"],
  },
  {
    id: "faction_provisions02_t2",
    name: "Canned Fish Rations",
    categories: [],
  },
  {
    id: "fisht2",
    name: "Firm Fish Filet",
    categories: ["Fish", "Raw Foods", "Tier 2 Raw Foods"],
  },
  {
    id: "faction_provisions02_t3",
    name: "Salted Fish Provisions",
    categories: [],
  },
  {
    id: "oniont1",
    name: "Onion",
    categories: [
      "Tier 3 Vegetables",
      "Cooked Vegetables",
      "Raw Foods",
      "Tier 3 Raw Foods",
    ],
  },
  {
    id: "carrott1",
    name: "Carrot",
    categories: [
      "Tier 2 Vegetables",
      "Cooked Vegetables",
      "Raw Foods",
      "Tier 2 Raw Foods",
    ],
  },
  {
    id: "cornt1",
    name: "Corn",
    categories: [
      "Tier 2 Grains",
      "Cooked Grain",
      "Raw Foods",
      "Tier 2 Raw Foods",
    ],
  },
  {
    id: "faction_provisions02_t4",
    name: "Vegetable Supplies",
    categories: [],
  },
  {
    id: "nutmegt1",
    name: "Nutmeg",
    categories: [],
  },
  {
    id: "paprikat1",
    name: "Paprika",
    categories: [],
  },
  {
    id: "cinnamont1",
    name: "Cinnamon",
    categories: [],
  },
  {
    id: "faction_provisions02_t5",
    name: "Spice Stockpile",
    categories: [],
  },
  {
    id: "cranberryt1",
    name: "Cranberry",
    categories: [
      "Tier 2 Fruits",
      "Cooked Fruit",
      "Raw Foods",
      "Tier 2 Raw Foods",
    ],
  },
  {
    id: "watert1",
    name: "Water",
    categories: [],
  },
  {
    id: "faction_provisions03_t1",
    name: "Juice Samples",
    categories: [],
  },
  {
    id: "faction_provisions03_t2",
    name: "Sweet Juice Rations",
    categories: [],
  },
  {
    id: "strawberryt1",
    name: "Strawberry",
    categories: [
      "Tier 2 Fruits",
      "Cooked Fruit",
      "Raw Foods",
      "Tier 2 Raw Foods",
    ],
  },
  {
    id: "milkt1",
    name: "Milk",
    categories: ["Raw Foods", "Tier 1 Raw Foods"],
  },
  {
    id: "faction_provisions03_t3",
    name: "Yoghurt Provisions",
    categories: [],
  },
  {
    id: "barleyt1",
    name: "Barley",
    categories: [
      "Tier 3 Grains",
      "Cooked Grain",
      "Raw Foods",
      "Tier 3 Raw Foods",
    ],
  },
  {
    id: "nutt1",
    name: "Nut",
    categories: ["Raw Foods", "Tier 1 Raw Foods"],
  },
  {
    id: "honeyt1",
    name: "Honey",
    categories: ["Seasonings", "Raw Foods"],
  },
  {
    id: "faction_provisions03_t4",
    name: "Cereal Supplies",
    categories: [],
  },
  {
    id: "poultryt1",
    name: "Poultry",
    categories: ["Tier 1 Meats", "Raw Meats", "Raw Foods", "Tier 1 Raw Foods"],
  },
  {
    id: "meatgamet1",
    name: "Game Meat",
    categories: ["Tier 1 Meats", "Raw Meats", "Raw Foods", "Tier 1 Raw Foods"],
  },
  {
    id: "faction_provisions03_t5",
    name: "Meat Stockpile",
    categories: [],
  },
  {
    id: "cookingoilt1",
    name: "Cooking Oil",
    categories: [],
  },
  {
    id: "faction_provisions04_t2",
    name: "Glazed Chicken Rations",
    categories: [],
  },
  {
    id: "faction_provisions04_t3",
    name: "Perennial Herb Provisions",
    categories: [],
  },
  {
    id: "yeastt1",
    name: "Yeast",
    categories: [],
  },
  {
    id: "cheeset1",
    name: "Cheese",
    categories: [],
  },
  {
    id: "buttert1",
    name: "Butter",
    categories: [],
  },
  {
    id: "faction_provisions04_t4",
    name: "Dairy Supplies",
    categories: [],
  },
  {
    id: "garlict1",
    name: "Garlic",
    categories: [],
  },
  {
    id: "faction_provisions04_t5",
    name: "Vegetable Stockpile",
    categories: [],
  },
  {
    id: "mushroomt1",
    name: "Mushroom",
    categories: [
      "Tier 1 Vegetables",
      "Cooked Vegetables",
      "Raw Foods",
      "Tier 1 Raw Foods",
    ],
  },
  {
    id: "rosemaryt1",
    name: "Rosemary",
    categories: ["Seasonings", "herbs"],
  },
  {
    id: "faction_provisions05_t2",
    name: "Herbal Game Rations",
    categories: [],
  },
  {
    id: "basilt1",
    name: "Basil",
    categories: ["Seasonings", "herbs"],
  },
  {
    id: "oreganot1",
    name: "Oregano",
    categories: ["Seasonings", "herbs"],
  },
  {
    id: "parsleyt1",
    name: "Parsley",
    categories: ["Seasonings", "herbs"],
  },
  {
    id: "faction_provisions05_t3",
    name: "Exotic Herb Provisions",
    categories: [],
  },
  {
    id: "potatot1",
    name: "Potato",
    categories: [
      "Tier 3 Vegetables",
      "Cooked Vegetables",
      "Raw Foods",
      "Tier 3 Raw Foods",
    ],
  },
  {
    id: "flourt1",
    name: "Flour",
    categories: [],
  },
  {
    id: "eggt1",
    name: "Egg",
    categories: ["Raw Foods", "Tier 1 Raw Foods"],
  },
  {
    id: "pastat1",
    name: "Pasta",
    categories: ["Raw Foods", "Tier 2 Raw Foods"],
  },
  {
    id: "breadt1",
    name: "Bread",
    categories: ["Raw Foods", "Tier 2 Raw Foods"],
  },
  {
    id: "faction_provisions05_t4",
    name: "Carb Supplies",
    categories: [],
  },
  {
    id: "wheatt1",
    name: "Wheat",
    categories: ["Tier 4 Grains", "Raw Foods", "Tier 4 Raw Foods"],
  },
  {
    id: "faction_provisions05_t5",
    name: "Cereal Stockpile",
    categories: [],
  },
  {
    id: "faction_provisions06_t2",
    name: "Garlic Meat Rations",
    categories: [],
  },
  {
    id: "faction_provisions06_t3",
    name: "Spice Provisions",
    categories: [],
  },
  {
    id: "blueberryt1",
    name: "Blueberry",
    categories: [
      "Tier 3 Fruits",
      "Cooked Fruit",
      "Raw Foods",
      "Tier 3 Raw Foods",
    ],
  },
  {
    id: "faction_provisions06_t4",
    name: "Fruit Supplies",
    categories: [],
  },
  {
    id: "oranget1",
    name: "Orange",
    categories: [
      "Tier 4 Fruits",
      "Cooked Fruit",
      "Raw Foods",
      "Tier 4 Raw Foods",
    ],
  },
  {
    id: "faction_provisions06_t5",
    name: "Fruit Stockpile",
    categories: [],
  },
  {
    id: "faction_provisions07_t2",
    name: "Breakfast Rations",
    categories: [],
  },
  {
    id: "peppercornt1",
    name: "Peppercorn",
    categories: [],
  },
  {
    id: "faction_provisions07_t3",
    name: "Condiment Provisions",
    categories: [],
  },
  {
    id: "hamhockt1",
    name: "Juicy Ham Hock",
    categories: ["Tier 3 Meats", "Raw Meats", "Raw Foods", "Tier 3 Raw Foods"],
  },
  {
    id: "faction_provisions07_t4",
    name: "Luxury Supplies",
    categories: [],
  },
  {
    id: "faction_provisions07_t5",
    name: "Baking Stockpile",
    categories: [],
  },
  {
    id: "faction_provisions08_t2",
    name: "Herb Rations",
    categories: [],
  },
  {
    id: "faction_provisions08_t3",
    name: "Meat Provisions",
    categories: [],
  },
  {
    id: "faction_provisions08_t4",
    name: "Exotic Herb Supplies",
    categories: [],
  },
  {
    id: "seasoningblendt1",
    name: "Seasoning Blend",
    categories: [],
  },
  {
    id: "faction_provisions08_t5",
    name: "Condiment Stockpile",
    categories: [],
  },
  {
    id: "faction_provisions09_t2",
    name: "Carb Rations",
    categories: [],
  },
  {
    id: "faction_provisions09_t3",
    name: "Canned Fish Provisions",
    categories: [],
  },
  {
    id: "faction_provisions09_t4",
    name: "Canned Fish Supplies",
    categories: [],
  },
  {
    id: "pastrycrustt1",
    name: "Pastry Crust",
    categories: ["Raw Foods", "Tier 2 Raw Foods"],
  },
  {
    id: "faction_provisions09_t5",
    name: "Carb Stockpile",
    categories: [],
  },
  {
    id: "lemont1",
    name: "Lemon",
    categories: [
      "Tier 4 Fruits",
      "Cooked Fruit",
      "Raw Foods",
      "Tier 4 Raw Foods",
    ],
  },
  {
    id: "faction_provisions10_t2",
    name: "Flavored Fish Rations",
    categories: [],
  },
  {
    id: "faction_provisions10_t3",
    name: "Baking Provisions",
    categories: [],
  },
  {
    id: "faction_provisions10_t4",
    name: "Condiment Supplies",
    categories: [],
  },
  {
    id: "meatsquidt1",
    name: "Squid Meat",
    categories: ["Tier 3 Meats", "Raw Meats", "Raw Foods", "Tier 3 Raw Foods"],
  },
  {
    id: "faction_provisions10_t5",
    name: "Canned Fish Stockpile",
    categories: [],
  },
  {
    id: "foodhealthrecoveryt1",
    name: "Light Ration",
    categories: [],
  },
  {
    id: "foodhealthrecoveryt2",
    name: "Travel Ration",
    categories: [],
  },
  {
    id: "foodhealthrecoveryt3",
    name: "Light Meal",
    categories: [],
  },
  {
    id: "foodhealthrecoveryt4",
    name: "Satisfying Meal",
    categories: [],
  },
  {
    id: "foodhealthrecoveryt5",
    name: "Hearty Meal",
    categories: [],
  },
  {
    id: "foodmanat1",
    name: "Energizing Light Ration",
    categories: [],
  },
  {
    id: "foodmanat2",
    name: "Energizing Travel Ration",
    categories: [],
  },
  {
    id: "foodmanat3",
    name: "Energizing Light Meal",
    categories: [],
  },
  {
    id: "foodmanat4",
    name: "Energizing Satisfying Meal",
    categories: [],
  },
  {
    id: "foodmanat5",
    name: "Energizing Hearty Meal",
    categories: [],
  },
  {
    id: "workorder_faction_armaments01_t2",
    name: "Weaponsmithing Work Order",
    categories: [],
  },
  {
    id: "oret1",
    name: "Iron Ore",
    categories: [],
  },
  {
    id: "rawhidet1",
    name: "Rawhide",
    categories: [],
  },
  {
    id: "faction_armaments01_t2",
    name: "Plundering Crude Iron Armaments",
    categories: [],
  },
  {
    id: "ingott2",
    name: "Iron Ingot",
    categories: ["Tier 2 Metals", "Metals"],
  },
  {
    id: "faction_armaments01_t3",
    name: "Plundering Iron Armaments",
    categories: [],
  },
  {
    id: "charcoalt1",
    name: "Charcoal",
    categories: [],
  },
  {
    id: "ingott3",
    name: "Steel Ingot",
    categories: ["Tier 3 Metals", "Metals"],
  },
  {
    id: "faction_armaments01_t4",
    name: "Plundering Steel Armaments",
    categories: [],
  },
  {
    id: "oret4",
    name: "Starmetal Ore",
    categories: [],
  },
  {
    id: "ingott4",
    name: "Starmetal Ingot",
    categories: ["Tier 4 Metals", "Metals"],
  },
  {
    id: "faction_armaments01_t5",
    name: "Plundering Starmetal Armaments",
    categories: [],
  },
  {
    id: "faction_armaments02_t2",
    name: "Bulwark Crude Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments02_t3",
    name: "Bulwark Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments02_t4",
    name: "Bulwark Steel Armaments",
    categories: [],
  },
  {
    id: "faction_armaments02_t5",
    name: "Bulwark Starmetal Armaments",
    categories: [],
  },
  {
    id: "faction_armaments03_t2",
    name: "Impaling Crude Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments03_t3",
    name: "Impaling Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments03_t4",
    name: "Impaling Steel Armaments",
    categories: [],
  },
  {
    id: "faction_armaments03_t5",
    name: "Impaling Starmetal Armaments",
    categories: [],
  },
  {
    id: "faction_armaments04_t2",
    name: "Bruising Crude Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments04_t3",
    name: "Bruising Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments04_t4",
    name: "Bruising Steel Armaments",
    categories: [],
  },
  {
    id: "faction_armaments04_t5",
    name: "Bruising Starmetal Armaments",
    categories: [],
  },
  {
    id: "faction_armaments05_t2",
    name: "Cleaving Crude Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments05_t3",
    name: "Cleaving Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments05_t4",
    name: "Cleaving Steel Armaments",
    categories: [],
  },
  {
    id: "faction_armaments05_t5",
    name: "Cleaving Starmetal Armaments",
    categories: [],
  },
  {
    id: "faction_armaments06_t2",
    name: "Crushing Crude Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments06_t3",
    name: "Crushing Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments06_t4",
    name: "Crushing Steel Armaments",
    categories: [],
  },
  {
    id: "faction_armaments06_t5",
    name: "Crushing Starmetal Armaments",
    categories: [],
  },
  {
    id: "faction_armaments07_t2",
    name: "Ransacking Crude Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments07_t3",
    name: "Ransacking Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments07_t4",
    name: "Ransacking Steel Armaments",
    categories: [],
  },
  {
    id: "faction_armaments07_t5",
    name: "Ransacking Starmetal Armaments",
    categories: [],
  },
  {
    id: "faction_armaments08_t2",
    name: "Gashing Crude Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments08_t3",
    name: "Gashing Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments08_t4",
    name: "Gashing Steel Armaments",
    categories: [],
  },
  {
    id: "faction_armaments08_t5",
    name: "Gashing Starmetal Armaments",
    categories: [],
  },
  {
    id: "faction_armaments09_t2",
    name: "Reaving Crude Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments09_t3",
    name: "Reaving Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments09_t4",
    name: "Reaving Steel Armaments",
    categories: [],
  },
  {
    id: "faction_armaments09_t5",
    name: "Reaving Starmetal Armaments",
    categories: [],
  },
  {
    id: "faction_armaments10_t2",
    name: "Pillaging Crude Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments10_t3",
    name: "Pillaging Iron Armaments",
    categories: [],
  },
  {
    id: "faction_armaments10_t4",
    name: "Pillaging Starmetal Armaments",
    categories: [],
  },
  {
    id: "oret5",
    name: "Orichalcum Ore",
    categories: [],
  },
  {
    id: "ingott5",
    name: "Orichalcum Ingot",
    categories: ["Tier 5 Metals", "Metals", "Precious Metals"],
  },
  {
    id: "workorder_faction_armorset01_t2",
    name: "Armorsmithing Work Order",
    categories: [],
  },
  {
    id: "faction_armorset01_t2",
    name: "Set of Rugged Crude Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset01_t3",
    name: "Set of Rugged Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset01_t4",
    name: "Set of Rugged Steel Armor",
    categories: [],
  },
  {
    id: "faction_armorset01_t5",
    name: "Set of Rugged Starmetal Armor",
    categories: [],
  },
  {
    id: "faction_armorset02_t2",
    name: "Set of Toughened Crude Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset02_t3",
    name: "Set of Toughened Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset02_t4",
    name: "Set of Toughened Steel Armor",
    categories: [],
  },
  {
    id: "faction_armorset02_t5",
    name: "Set of Toughened Starmetal Armor",
    categories: [],
  },
  {
    id: "faction_armorset03_t2",
    name: "Set of Stout Crude Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset03_t3",
    name: "Set of Stout Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset03_t4",
    name: "Set of Stout Steel Armor",
    categories: [],
  },
  {
    id: "faction_armorset03_t5",
    name: "Set of Stout Starmetal Armor",
    categories: [],
  },
  {
    id: "faction_armorset04_t2",
    name: "Set of Hardened Crude Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset04_t3",
    name: "Set of Hardened Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset04_t4",
    name: "Set of Hardened Steel Armor",
    categories: [],
  },
  {
    id: "faction_armorset04_t5",
    name: "Set of Hardened Starmetal Armor",
    categories: [],
  },
  {
    id: "faction_armorset05_t2",
    name: "Set of Stalwart Crude Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset05_t3",
    name: "Set of Stalwart Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset05_t4",
    name: "Set of Stalwart Steel Armor",
    categories: [],
  },
  {
    id: "faction_armorset05_t5",
    name: "Set of Stalwart Starmetal Armor",
    categories: [],
  },
  {
    id: "faction_armorset06_t2",
    name: "Set of Unyielding Crude Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset06_t3",
    name: "Set of Unyielding Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset06_t4",
    name: "Set of Unyielding Steel Armor",
    categories: [],
  },
  {
    id: "faction_armorset06_t5",
    name: "Set of Unyielding Starmetal Armor",
    categories: [],
  },
  {
    id: "faction_armorset07_t2",
    name: "Set of Impenetrable Crude Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset07_t3",
    name: "Set of Impenetrable Iron Armor",
    categories: [],
  },
  {
    id: "faction_armorset07_t4",
    name: "Set of Impenetrable Steel Armor",
    categories: [],
  },
  {
    id: "faction_armorset07_t5",
    name: "Set of Impenetrable Starmetal Armor",
    categories: [],
  },
  {
    id: "herbt1",
    name: "Hyssop",
    categories: [],
  },
  {
    id: "alkahestt1",
    name: "Weak Alkahest",
    categories: [],
  },
  {
    id: "potionmanat1",
    name: "Weak Mana Potion",
    categories: [],
  },
  {
    id: "alkahestt2",
    name: "Common Alkahest",
    categories: [],
  },
  {
    id: "potionmanat2",
    name: "Common Mana Potion",
    categories: [],
  },
  {
    id: "alkahestt3",
    name: "Strong Alkahest",
    categories: [],
  },
  {
    id: "potionmanat3",
    name: "Strong Mana Potion",
    categories: [],
  },
  {
    id: "alkahestt4",
    name: "Powerful Alkahest",
    categories: [],
  },
  {
    id: "potionmanat4",
    name: "Powerful Mana Potion",
    categories: [],
  },
  {
    id: "azothwatert1",
    name: "Azoth Water",
    categories: [],
  },
  {
    id: "alkahestt5",
    name: "Infused Alkahest",
    categories: [],
  },
  {
    id: "potionmanat5",
    name: "Infused Mana Potion",
    categories: [],
  },
  {
    id: "potionhealtht1",
    name: "Weak Health Potion",
    categories: [],
  },
  {
    id: "potionhealtht2",
    name: "Common Health Potion",
    categories: [],
  },
  {
    id: "potionhealtht3",
    name: "Strong Health Potion",
    categories: [],
  },
  {
    id: "potionhealtht4",
    name: "Powerful Health Potion",
    categories: [],
  },
  {
    id: "potionhealtht5",
    name: "Infused Health Potion",
    categories: [],
  },
  {
    id: "potionregent1",
    name: "Common Regeneration Potion",
    categories: [],
  },
  {
    id: "potionregent2",
    name: "Strong Regeneration Potion",
    categories: [],
  },
  {
    id: "potionregent3",
    name: "Powerful Regeneration Potion",
    categories: [],
  },
  {
    id: "potionregent4",
    name: "Infused Regeneration Potion",
    categories: [],
  },
  {
    id: "reagentconvertert3",
    name: "Common Material Converter",
    categories: [],
  },
  {
    id: "fluxt3",
    name: "Sand Flux",
    categories: [
      "Flux",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
    ],
  },
  {
    id: "reagentconvertert4",
    name: "Advanced Material Converter",
    categories: [],
  },
  {
    id: "fluxt4",
    name: "Shelldust Flux",
    categories: [
      "Flux",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
    ],
  },
  {
    id: "reagentconvertert5",
    name: "Masterwork Material Converter",
    categories: [],
  },
  {
    id: "fluxt5",
    name: "Obsidian Flux",
    categories: [
      "Flux",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
    ],
  },
  {
    id: "tannint3",
    name: "Tannin",
    categories: [
      "Tannin",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
    ],
  },
  {
    id: "tannint4",
    name: "Rested Tannin",
    categories: [
      "Tannin",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
    ],
  },
  {
    id: "tannint5",
    name: "Aged Tannin",
    categories: [
      "Tannin",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
    ],
  },
  {
    id: "turkeythight1",
    name: "Poultry Thigh",
    categories: ["Tier 5 Meats", "Raw Meats", "Raw Foods", "Tier 5 Raw Foods"],
  },
  {
    id: "bearflankt1",
    name: "Rich Bear Flank",
    categories: ["Tier 5 Meats", "Raw Meats", "Raw Foods", "Tier 5 Raw Foods"],
  },
  {
    id: "rabbitt1",
    name: "Sumptuous Rabbit",
    categories: ["Tier 5 Meats", "Raw Meats", "Raw Foods", "Tier 5 Raw Foods"],
  },
  {
    id: "primeredmeatt1",
    name: "Prime Red Meat",
    categories: ["Tier 5 Meats", "Raw Meats", "Raw Foods", "Tier 5 Raw Foods"],
  },
  {
    id: "porkbellyt1",
    name: "Pork Belly",
    categories: ["Tier 5 Meats", "Raw Meats", "Raw Foods", "Tier 5 Raw Foods"],
  },
  {
    id: "fishroet1",
    name: "Fish Roe",
    categories: ["Raw Foods", "Tier 5 Raw Foods"],
  },
  {
    id: "applet1",
    name: "Apple",
    categories: [
      "Tier 5 Fruits",
      "Cooked Fruit",
      "Raw Foods",
      "Tier 5 Raw Foods",
    ],
  },
  {
    id: "stringbeant1",
    name: "String Bean",
    categories: [
      "Tier 5 Vegetables",
      "Cooked Vegetables",
      "Raw Foods",
      "Tier 5 Raw Foods",
    ],
  },
  {
    id: "coconutt1",
    name: "Coconut",
    categories: [
      "Tier 5 Fruits",
      "Cooked Fruit",
      "Raw Foods",
      "Tier 5 Raw Foods",
    ],
  },
  {
    id: "tomatot1",
    name: "Tomato",
    categories: [
      "Tier 5 Vegetables",
      "Cooked Vegetables",
      "Raw Foods",
      "Tier 5 Raw Foods",
    ],
  },
  {
    id: "massiveturkeylegt5",
    name: "Massive Turkey Leg",
    categories: ["Tier 5 Meats", "Raw Meats", "Raw Foods", "Tier 5 Raw Foods"],
  },
  {
    id: "sandpapert3",
    name: "Coarse Sandpaper",
    categories: [
      "Sandpaper",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
    ],
  },
  {
    id: "sandpapert4",
    name: "Fine Sandpaper",
    categories: [
      "Sandpaper",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
    ],
  },
  {
    id: "sandpapert5",
    name: "Obsidian Sandpaper",
    categories: [
      "Sandpaper",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
    ],
  },
  {
    id: "clothweavet3",
    name: "Crossweave",
    categories: [
      "Cloth Weave",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
      "Refining Materials Tier 3",
    ],
  },
  {
    id: "clothweavet4",
    name: "Silkweave",
    categories: [
      "Cloth Weave",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
      "Refining Materials Tier 4",
    ],
  },
  {
    id: "clothweavet5",
    name: "Wireweave",
    categories: [
      "Cloth Weave",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
      "Refining Materials Tier 5",
    ],
  },
  {
    id: "briarbudst1",
    name: "Briar Buds",
    categories: ["Magical Reagents", "Tier 1 Magical Reagents"],
  },
  {
    id: "soulwyrmtonguet1",
    name: "Soulwyrm Tongue",
    categories: [
      "Spirit Reagents",
      "Magical Reagents",
      "Tier 5 Soul Reagents",
      "Tier 5 Magical Reagents",
    ],
  },
  {
    id: "dragonfishjawt5",
    name: "Dragon Fish Jaw",
    categories: [
      "Magical Reagents",
      "Spirit Reagents",
      "Tier 5 Magical Reagents",
      "Tier 5 Soul Reagents",
    ],
  },
  {
    id: "soulsproutt3",
    name: "Soulsprout Flower",
    categories: [
      "Spirit Reagents",
      "Magical Reagents",
      "Tier 4 Soul Reagents",
      "Tier 4 Magical Reagents",
    ],
  },
  {
    id: "mushroomfinst1",
    name: "Mushroom Fins",
    categories: ["Magical Reagents", "Tier 3 Magical Reagents"],
  },
  {
    id: "paddlefishgillst1",
    name: "Paddlefish Gills",
    categories: ["Magical Reagents", "Tier 3 Magical Reagents"],
  },
  {
    id: "catfishwhiskerst1",
    name: "Catfish Whiskers",
    categories: ["Magical Reagents", "Tier 3 Magical Reagents"],
  },
  {
    id: "snailslimet1",
    name: "Snail Slime",
    categories: ["Magical Reagents", "Tier 3 Magical Reagents"],
  },
  {
    id: "frogfishtailt1",
    name: "Frogfish Tail",
    categories: ["Magical Reagents", "Tier 3 Magical Reagents"],
  },
  {
    id: "lodestonesoult1",
    name: "Crystalline Lodestone",
    categories: [
      "Spirit Reagents",
      "Magical Reagents",
      "Tier 3 Soul Reagents",
      "Tier 3 Magical Reagents",
      "Lodestone",
    ],
  },
  {
    id: "soulsproutt2",
    name: "Soulsprout Leaf",
    categories: [
      "Spirit Reagents",
      "Magical Reagents",
      "Tier 3 Soul Reagents",
      "Tier 3 Magical Reagents",
    ],
  },
  {
    id: "bumbleblossomt1",
    name: "Bumbleblossom",
    categories: [
      "Spirit Reagents",
      "Magical Reagents",
      "Tier 2 Soul Reagents",
      "Tier 2 Magical Reagents",
    ],
  },
  {
    id: "tanglewispt1",
    name: "Tanglewisp",
    categories: [
      "Life Reagents",
      "Magical Reagents",
      "alcemylifet2",
      "Tier 2 Magical Reagents",
    ],
  },
  {
    id: "suncreepert1",
    name: "Suncreeper Tendril",
    categories: [
      "Air Reagents",
      "Magical Reagents",
      "Tier 2 Air Reagents",
      "Tier 2 Magical Reagents",
    ],
  },
  {
    id: "soulsproutt1",
    name: "Soulsprout Stem",
    categories: [
      "Spirit Reagents",
      "Magical Reagents",
      "Tier 2 Soul Reagents",
      "Tier 2 Magical Reagents",
    ],
  },
  {
    id: "lodestoneairt1",
    name: "Shocking Lodestone",
    categories: [
      "Air Reagents",
      "Offensive Reagents",
      "Tier 3 Air Reagents",
      "Tier 3 Offensive Reagents",
      "Lodestone",
    ],
  },
  {
    id: "shockbulbt2",
    name: "Shockbulb Leaf",
    categories: [
      "Air Reagents",
      "Offensive Reagents",
      "Tier 3 Air Reagents",
      "Tier 3 Offensive Reagents",
    ],
  },
  {
    id: "alchemyairt1",
    name: "Air Mote",
    categories: [
      "Air Reagents",
      "Air Arcana",
      "Tier 2 Air Reagents",
      "Tier 2 Air Arcana",
    ],
  },
  {
    id: "alchemyairt2",
    name: "Air Wisp",
    categories: [
      "Air Reagents",
      "Air Arcana",
      "Tier 3 Air Reagents",
      "Tier 3 Air Arcana",
    ],
  },
  {
    id: "lightningbeetlewingst1",
    name: "Lightning Beetle",
    categories: [
      "Air Reagents",
      "Offensive Reagents",
      "Tier 5 Air Reagents",
      "Tier 5 Offensive Reagents",
    ],
  },
  {
    id: "alchemyairt3",
    name: "Air Essence",
    categories: [
      "Air Reagents",
      "Air Arcana",
      "Tier 4 Air Reagents",
      "Tier 4 Air Arcana",
    ],
  },
  {
    id: "essenceairt1",
    name: "Air Quintessence",
    categories: [
      "Air Reagents",
      "Air Arcana",
      "Tier 5 Air Reagents",
      "Tier 5 Air Arcana",
    ],
  },
  {
    id: "shockbulbt3",
    name: "Shockbulb Flower",
    categories: [
      "Air Reagents",
      "Offensive Reagents",
      "Tier 4 Air Reagents",
      "Tier 4 Offensive Reagents",
    ],
  },
  {
    id: "twistcapt1",
    name: "Twistcap Spiral",
    categories: [
      "Air Reagents",
      "Protective Reagents",
      "Tier 2 Air Reagents",
      "Tier 2 Protective Reagents",
    ],
  },
  {
    id: "shockbulbt1",
    name: "Shockbulb Stem",
    categories: [
      "Air Reagents",
      "Offensive Reagents",
      "Tier 2 Air Reagents",
      "Tier 2 Offensive Reagents",
    ],
  },
  {
    id: "alchemyspiritt1",
    name: "Soul Mote",
    categories: [
      "Spirit Reagents",
      "Soul Arcana",
      "Tier 2 Soul Reagents",
      "Tier 2 Soul Arcana",
    ],
  },
  {
    id: "alchemyspiritt2",
    name: "Soul Wisp",
    categories: [
      "Spirit Reagents",
      "Soul Arcana",
      "Tier 3 Soul Reagents",
      "Tier 3 Soul Arcana",
    ],
  },
  {
    id: "alchemyspiritt3",
    name: "Soul Essence",
    categories: [
      "Spirit Reagents",
      "Soul Arcana",
      "Tier 4 Soul Reagents",
      "Tier 4 Soul Arcana",
    ],
  },
  {
    id: "essencespiritt1",
    name: "Soul Quintessence",
    categories: [
      "Spirit Reagents",
      "Soul Arcana",
      "Tier 5 Soul Reagents",
      "Tier 5 Soul Arcana",
    ],
  },
  {
    id: "tubecapt1",
    name: "Tubecap",
    categories: [
      "Spirit Reagents",
      "Offensive Reagents",
      "Tier 2 Soul Reagents",
      "Tier 2 Offensive Reagents",
    ],
  },
  {
    id: "shellbedt1",
    name: "Shellbed Cap",
    categories: [
      "Spirit Reagents",
      "Protective Reagents",
      "Tier 2 Soul Reagents",
      "Tier 2 Protective Reagents",
    ],
  },
  {
    id: "lifemotheyest1",
    name: "Lifemoth Eyes",
    categories: [
      "Life Reagents",
      "Medicinal Reagents",
      "Tier 5 Life Reagents",
      "Tier 5 Medicinal Reagents",
    ],
  },
  {
    id: "poisonstingert5",
    name: "Poison Sac",
    categories: [
      "Medicinal Reagents",
      "Death Reagents",
      "Tier 5 Medicinal Reagents",
      "Tier 5 Death Reagents",
    ],
  },
  {
    id: "bulrushcobt1",
    name: "Bulrush Cob",
    categories: ["Medicinal Reagents", "Tier 1 Medicinal Reagents"],
  },
  {
    id: "sporebloomt1",
    name: "Sporebloom Fruit",
    categories: [
      "Death Reagents",
      "Medicinal Reagents",
      "Tier 2 Death Reagents",
      "Tier 2 Medicinal Reagents",
    ],
  },
  {
    id: "platecapt1",
    name: "Platecap Flesh",
    categories: [
      "Fire Reagents",
      "Medicinal Reagents",
      "Tier 2 Fire Reagents",
      "Tier 2 Medicinal Reagents",
    ],
  },
  {
    id: "gillflowert1",
    name: "Gillflower Gills",
    categories: [
      "Life Reagents",
      "Medicinal Reagents",
      "Tier 2 Life Reagents",
      "Tier 2 Medicinal Reagents",
    ],
  },
  {
    id: "glowingcapt1",
    name: "Glowing Mushroom Cap",
    categories: ["Medicinal Reagents", "Tier 2 Medicinal Reagents"],
  },
  {
    id: "lifebloomt1",
    name: "Lifebloom Stem",
    categories: [
      "Life Reagents",
      "Medicinal Reagents",
      "Tier 2 Life Reagents",
      "Tier 2 Medicinal Reagents",
    ],
  },
  {
    id: "halibutviscerat1",
    name: "Halibut Viscera",
    categories: ["Medicinal Reagents", "Tier 3 Medicinal Reagents"],
  },
  {
    id: "sculpinscalest1",
    name: "Sculpin Scales",
    categories: ["Medicinal Reagents", "Tier 3 Medicinal Reagents"],
  },
  {
    id: "lodestonelifet1",
    name: "Gleaming Lodestone",
    categories: [
      "Life Reagents",
      "Medicinal Reagents",
      "Tier 3 Life Reagents",
      "Tier 3 Medicinal Reagents",
      "Lodestone",
    ],
  },
  {
    id: "lifebloomt2",
    name: "Lifebloom Leaf",
    categories: [
      "Life Reagents",
      "Medicinal Reagents",
      "Tier 3 Life Reagents",
      "Tier 3 Medicinal Reagents",
    ],
  },
  {
    id: "lifebloomt3",
    name: "Lifebloom Flower",
    categories: [
      "Life Reagents",
      "Medicinal Reagents",
      "Tier 4 Life Reagents",
      "Tier 4 Medicinal Reagents",
    ],
  },
  {
    id: "earthshelltailt1",
    name: "Earthshell Tail",
    categories: [
      "Earth Reagents",
      "Protective Reagents",
      "Tier 5 Earth Reagents",
      "Tier 5 Protective Reagents",
    ],
  },
  {
    id: "alchemyeartht1",
    name: "Earth Mote",
    categories: [
      "Earth Reagents",
      "Earth Arcana",
      "Tier 2 Earth Reagents",
      "Tier 2 Earth Arcana",
    ],
  },
  {
    id: "alchemyeartht2",
    name: "Earth Wisp",
    categories: [
      "Earth Reagents",
      "Earth Arcana",
      "Tier 3 Earth Reagents",
      "Tier 3 Earth Arcana",
    ],
  },
  {
    id: "alchemyeartht3",
    name: "Earth Essence",
    categories: [
      "Earth Reagents",
      "Earth Arcana",
      "Tier 4 Earth Reagents",
      "Tier 4 Earth Arcana",
    ],
  },
  {
    id: "essenceeartht1",
    name: "Earth Quintessence",
    categories: [
      "Earth Reagents",
      "Earth Arcana",
      "Tier 5 Earth Reagents",
      "Tier 5 Earth Arcana",
    ],
  },
  {
    id: "petalcapt1",
    name: "Petalcap",
    categories: [
      "Earth Reagents",
      "Protective Reagents",
      "Tier 2 Earth Reagents",
      "Tier 2 Protective Reagents",
    ],
  },
  {
    id: "earthspinet1",
    name: "Earthspine Stem",
    categories: [
      "Earth Reagents",
      "Protective Reagents",
      "Tier 2 Earth Reagents",
      "Tier 2 Protective Reagents",
    ],
  },
  {
    id: "lodestoneeartht1",
    name: "Loamy Lodestone",
    categories: [
      "Earth Reagents",
      "Protective Reagents",
      "Tier 3 Earth Reagents",
      "Tier 3 Protective Reagents",
      "Lodestone",
    ],
  },
  {
    id: "earthspinet2",
    name: "Earthspine Leaf",
    categories: [
      "Earth Reagents",
      "Protective Reagents",
      "Tier 3 Earth Reagents",
      "Tier 3 Protective Reagents",
    ],
  },
  {
    id: "earthspinet3",
    name: "Earthspine Flower",
    categories: [
      "Earth Reagents",
      "Protective Reagents",
      "Tier 4 Earth Reagents",
      "Tier 4 Protective Reagents",
    ],
  },
];
export default items;
