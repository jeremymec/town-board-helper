const categories = [
  { name: "Tier 2 Timber", id: "rawfoodtier" },
  { name: "Refined Wood", id: "rawfoodtier" },
  { name: "Wood", id: "rawfoodtier" },
  { name: "Tier 3 Timber", id: "rawfoodtier" },
  { name: "Refined Wood", id: "rawfoodtier" },
  { name: "Wood", id: "rawfoodtier" },
  { name: "Tier 4 Timber", id: "rawfoodtier" },
  { name: "Refined Wood", id: "rawfoodtier" },
  { name: "Wood", id: "rawfoodtier" },
  { name: "Tier 5 Timber", id: "rawfoodtier" },
  { name: "Refined Wood", id: "rawfoodtier" },
  { name: "Wood", id: "rawfoodtier" },
  { name: "Tier 2 Leather", id: "rawfoodtier" },
  { name: "Leathers", id: "rawfoodtier" },
  { name: "Tier 3 Leather", id: "rawfoodtier" },
  { name: "Leathers", id: "rawfoodtier" },
  { name: "Tier 4 Leather", id: "rawfoodtier" },
  { name: "Leathers", id: "rawfoodtier" },
  { name: "Tier 5 Leather", id: "rawfoodtier" },
  { name: "Leathers", id: "rawfoodtier" },
  { name: "Tier 2 Cloth", id: "rawfoodtier" },
  { name: "Cloth", id: "rawfoodtier" },
  { name: "Tier 3 Cloth", id: "rawfoodtier" },
  { name: "Cloth", id: "rawfoodtier" },
  { name: "Tier 4 Cloth", id: "rawfoodtier" },
  { name: "Cloth", id: "rawfoodtier" },
  { name: "Tier 5 Cloth", id: "rawfoodtier" },
  { name: "Cloth", id: "rawfoodtier" },
  { name: "Tier 1 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 1 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Raw Foods", id: "rawfoodtier" },
  { name: "Seasonings", id: "rawfoodtier" },
  { name: "herbs", id: "rawfoodtier" },
  { name: "Seasonings", id: "rawfoodtier" },
  { name: "herbs", id: "rawfoodtier" },
  { name: "Seasonings", id: "rawfoodtier" },
  { name: "herbs", id: "rawfoodtier" },
  { name: "Seasonings", id: "rawfoodtier" },
  { name: "herbs", id: "rawfoodtier" },
  { name: "Fish", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 1 Raw Foods", id: "rawfoodtier" },
  { name: "Seasonings", id: "rawfoodtier" },
  { name: "herbs", id: "rawfoodtier" },
  { name: "Fish", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Vegetables", id: "rawfoodtier" },
  { name: "Cooked Vegetables", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Vegetables", id: "rawfoodtier" },
  { name: "Cooked Vegetables", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Grains", id: "rawfoodtier" },
  { name: "Cooked Grain", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Fruits", id: "rawfoodtier" },
  { name: "Cooked Fruit", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Fruits", id: "rawfoodtier" },
  { name: "Cooked Fruit", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Raw Foods", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 1 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Grains", id: "rawfoodtier" },
  { name: "Cooked Grain", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Raw Foods", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 1 Raw Foods", id: "rawfoodtier" },
  { name: "Seasonings", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 1 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 1 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 1 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 1 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 1 Vegetables", id: "rawfoodtier" },
  { name: "Cooked Vegetables", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 1 Raw Foods", id: "rawfoodtier" },
  { name: "Seasonings", id: "rawfoodtier" },
  { name: "herbs", id: "rawfoodtier" },
  { name: "Seasonings", id: "rawfoodtier" },
  { name: "herbs", id: "rawfoodtier" },
  { name: "Seasonings", id: "rawfoodtier" },
  { name: "herbs", id: "rawfoodtier" },
  { name: "Seasonings", id: "rawfoodtier" },
  { name: "herbs", id: "rawfoodtier" },
  { name: "Tier 3 Vegetables", id: "rawfoodtier" },
  { name: "Cooked Vegetables", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Raw Foods", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 1 Raw Foods", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Raw Foods", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 4 Grains", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 4 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Fruits", id: "rawfoodtier" },
  { name: "Cooked Fruit", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 4 Fruits", id: "rawfoodtier" },
  { name: "Cooked Fruit", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 4 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Raw Foods", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 4 Fruits", id: "rawfoodtier" },
  { name: "Cooked Fruit", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 4 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 3 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 2 Metals", id: "rawfoodtier" },
  { name: "Metals", id: "rawfoodtier" },
  { name: "Tier 3 Metals", id: "rawfoodtier" },
  { name: "Metals", id: "rawfoodtier" },
  { name: "Tier 4 Metals", id: "rawfoodtier" },
  { name: "Metals", id: "rawfoodtier" },
  { name: "Tier 5 Metals", id: "rawfoodtier" },
  { name: "Metals", id: "rawfoodtier" },
  { name: "Precious Metals", id: "rawfoodtier" },
  { name: "Flux", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Flux", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Flux", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Tannin", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Tannin", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Tannin", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Tier 5 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Raw Foods", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Fruits", id: "rawfoodtier" },
  { name: "Cooked Fruit", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Vegetables", id: "rawfoodtier" },
  { name: "Cooked Vegetables", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Fruits", id: "rawfoodtier" },
  { name: "Cooked Fruit", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Vegetables", id: "rawfoodtier" },
  { name: "Cooked Vegetables", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Meats", id: "rawfoodtier" },
  { name: "Raw Meats", id: "rawfoodtier" },
  { name: "Raw Foods", id: "rawfoodtier" },
  { name: "Tier 5 Raw Foods", id: "rawfoodtier" },
  { name: "Sandpaper", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Sandpaper", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Sandpaper", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Cloth Weave", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Refining Materials Tier 3", id: "rawfoodtier" },
  { name: "Cloth Weave", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Refining Materials Tier 4", id: "rawfoodtier" },
  { name: "Cloth Weave", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Refining Materials Tier 5", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 1 Magical Reagents", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Magical Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Soul Reagents", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 4 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 4 Magical Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Magical Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Magical Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Magical Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Magical Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Magical Reagents", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Magical Reagents", id: "rawfoodtier" },
  { name: "Lodestone", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Magical Reagents", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Magical Reagents", id: "rawfoodtier" },
  { name: "Life Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "alcemylifet2", id: "rawfoodtier" },
  { name: "Tier 2 Magical Reagents", id: "rawfoodtier" },
  { name: "Air Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Air Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Magical Reagents", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Magical Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Magical Reagents", id: "rawfoodtier" },
  { name: "Air Reagents", id: "rawfoodtier" },
  { name: "Offensive Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Air Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Offensive Reagents", id: "rawfoodtier" },
  { name: "Lodestone", id: "rawfoodtier" },
  { name: "Air Reagents", id: "rawfoodtier" },
  { name: "Offensive Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Air Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Offensive Reagents", id: "rawfoodtier" },
  { name: "Air Reagents", id: "rawfoodtier" },
  { name: "Air Arcana", id: "rawfoodtier" },
  { name: "Tier 2 Air Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Air Arcana", id: "rawfoodtier" },
  { name: "Air Reagents", id: "rawfoodtier" },
  { name: "Air Arcana", id: "rawfoodtier" },
  { name: "Tier 3 Air Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Air Arcana", id: "rawfoodtier" },
  { name: "Air Reagents", id: "rawfoodtier" },
  { name: "Offensive Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Air Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Offensive Reagents", id: "rawfoodtier" },
  { name: "Air Reagents", id: "rawfoodtier" },
  { name: "Air Arcana", id: "rawfoodtier" },
  { name: "Tier 4 Air Reagents", id: "rawfoodtier" },
  { name: "Tier 4 Air Arcana", id: "rawfoodtier" },
  { name: "Air Reagents", id: "rawfoodtier" },
  { name: "Air Arcana", id: "rawfoodtier" },
  { name: "Tier 5 Air Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Air Arcana", id: "rawfoodtier" },
  { name: "Air Reagents", id: "rawfoodtier" },
  { name: "Offensive Reagents", id: "rawfoodtier" },
  { name: "Tier 4 Air Reagents", id: "rawfoodtier" },
  { name: "Tier 4 Offensive Reagents", id: "rawfoodtier" },
  { name: "Air Reagents", id: "rawfoodtier" },
  { name: "Protective Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Air Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Protective Reagents", id: "rawfoodtier" },
  { name: "Air Reagents", id: "rawfoodtier" },
  { name: "Offensive Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Air Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Offensive Reagents", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Soul Arcana", id: "rawfoodtier" },
  { name: "Tier 2 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Soul Arcana", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Soul Arcana", id: "rawfoodtier" },
  { name: "Tier 3 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Soul Arcana", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Soul Arcana", id: "rawfoodtier" },
  { name: "Tier 4 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 4 Soul Arcana", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Soul Arcana", id: "rawfoodtier" },
  { name: "Tier 5 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Soul Arcana", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Offensive Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Offensive Reagents", id: "rawfoodtier" },
  { name: "Spirit Reagents", id: "rawfoodtier" },
  { name: "Protective Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Soul Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Protective Reagents", id: "rawfoodtier" },
  { name: "Life Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Life Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Death Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Death Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 1 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Death Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Death Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Fire Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Fire Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Life Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Life Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Life Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Life Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Life Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Life Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Lodestone", id: "rawfoodtier" },
  { name: "Life Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Life Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Life Reagents", id: "rawfoodtier" },
  { name: "Medicinal Reagents", id: "rawfoodtier" },
  { name: "Tier 4 Life Reagents", id: "rawfoodtier" },
  { name: "Tier 4 Medicinal Reagents", id: "rawfoodtier" },
  { name: "Earth Reagents", id: "rawfoodtier" },
  { name: "Protective Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Earth Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Protective Reagents", id: "rawfoodtier" },
  { name: "Earth Reagents", id: "rawfoodtier" },
  { name: "Earth Arcana", id: "rawfoodtier" },
  { name: "Tier 2 Earth Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Earth Arcana", id: "rawfoodtier" },
  { name: "Earth Reagents", id: "rawfoodtier" },
  { name: "Earth Arcana", id: "rawfoodtier" },
  { name: "Tier 3 Earth Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Earth Arcana", id: "rawfoodtier" },
  { name: "Earth Reagents", id: "rawfoodtier" },
  { name: "Earth Arcana", id: "rawfoodtier" },
  { name: "Tier 4 Earth Reagents", id: "rawfoodtier" },
  { name: "Tier 4 Earth Arcana", id: "rawfoodtier" },
  { name: "Earth Reagents", id: "rawfoodtier" },
  { name: "Earth Arcana", id: "rawfoodtier" },
  { name: "Tier 5 Earth Reagents", id: "rawfoodtier" },
  { name: "Tier 5 Earth Arcana", id: "rawfoodtier" },
  { name: "Earth Reagents", id: "rawfoodtier" },
  { name: "Protective Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Earth Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Protective Reagents", id: "rawfoodtier" },
  { name: "Earth Reagents", id: "rawfoodtier" },
  { name: "Protective Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Earth Reagents", id: "rawfoodtier" },
  { name: "Tier 2 Protective Reagents", id: "rawfoodtier" },
  { name: "Earth Reagents", id: "rawfoodtier" },
  { name: "Protective Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Earth Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Protective Reagents", id: "rawfoodtier" },
  { name: "Lodestone", id: "rawfoodtier" },
  { name: "Earth Reagents", id: "rawfoodtier" },
  { name: "Protective Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Earth Reagents", id: "rawfoodtier" },
  { name: "Tier 3 Protective Reagents", id: "rawfoodtier" },
  { name: "Earth Reagents", id: "rawfoodtier" },
  { name: "Protective Reagents", id: "rawfoodtier" },
  { name: "Tier 4 Earth Reagents", id: "rawfoodtier" },
  { name: "Tier 4 Protective Reagents", id: "rawfoodtier" },
];
export default categories;
