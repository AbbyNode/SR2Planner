// Unified data file for all Slime Rancher 2 game entities

// ============= FOODS =============
export const FOOD_TYPES = {
  FRUIT: "fruit",
  VEGGIE: "veggie",
  MEAT: "meat",
  OTHER: "other",
};

export const FOODS = {
  // Fruits
  cuberry: {
    name: "Cuberry",
    type: FOOD_TYPES.FRUIT,
    image: "fruits/cuberry.png",
  },
  mintMango: {
    name: "Mint Mango",
    type: FOOD_TYPES.FRUIT,
    image: "fruits/mintMango.png",
  },
  pogofruit: {
    name: "Pogofruit",
    type: FOOD_TYPES.FRUIT,
    image: "fruits/pogofruit.png",
  },
  pomegranite: {
    name: "Pomegranite",
    type: FOOD_TYPES.FRUIT,
    image: "fruits/pomegranite.png",
  },
  polaricherry: {
    name: "Polaricherry",
    type: FOOD_TYPES.FRUIT,
    image: "fruits/polaricherry.png",
  },
  pricklePear: {
    name: "Prickle Pear",
    type: FOOD_TYPES.FRUIT,
    image: "fruits/pricklePear.png",
  },
  turboTater: {
    name: "Turbo Tater",
    type: FOOD_TYPES.FRUIT,
    image: "fruits/turboTater.png",
  },
  mixedFruits: {
    name: "Mixed Fruits",
    type: FOOD_TYPES.FRUIT,
    image: "fruits/mixedFruits.png",
  },

  // Veggies
  carrot: {
    name: "Carrot",
    type: FOOD_TYPES.VEGGIE,
    image: "veggies/carrot.png",
  },
  heartBeat: {
    name: "Heart Beat",
    type: FOOD_TYPES.VEGGIE,
    image: "veggies/heartBeat.png",
  },
  oddOnion: {
    name: "Odd Onion",
    type: FOOD_TYPES.VEGGIE,
    image: "veggies/oddOnion.png",
  },
  waterLettuce: {
    name: "Water Lettuce",
    type: FOOD_TYPES.VEGGIE,
    image: "veggies/waterLettuce.png",
  },
  mixedVeggies: {
    name: "Mixed Veggies",
    type: FOOD_TYPES.VEGGIE,
    image: "veggies/mixedVeggies.png",
  },

  // Meats
  briarHen: {
    name: "Briar Hen",
    type: FOOD_TYPES.MEAT,
    image: "meats/briarHen.png",
  },
  candiedHen: {
    name: "Candied Hen",
    type: FOOD_TYPES.MEAT,
    image: "meats/candiedHen.png",
  },
  henHen: {
    name: "Hen Hen",
    type: FOOD_TYPES.MEAT,
    image: "meats/henHen.png",
  },
  paintedHen: {
    name: "Painted Hen",
    type: FOOD_TYPES.MEAT,
    image: "meats/paintedHen.png",
  },
  seaHen: {
    name: "Sea Hen",
    type: FOOD_TYPES.MEAT,
    image: "meats/seaHen.png",
  },
  stonyHen: {
    name: "Stony Hen",
    type: FOOD_TYPES.MEAT,
    image: "meats/stonyHen.png",
  },
  thundercluck: {
    name: "Thundercluck",
    type: FOOD_TYPES.MEAT,
    image: "meats/thundercluck.png",
  },
  roostro: {
    name: "Roostro",
    type: FOOD_TYPES.MEAT,
    image: "meats/roostro.png",
  },
  mixedMeats: {
    name: "Mixed Meats",
    type: FOOD_TYPES.MEAT,
    image: "meats/mixedMeats.png",
  },

  // Other
  moondewNectar: {
    name: "Moondew Nectar",
    type: FOOD_TYPES.OTHER,
    image: "other/moondewNectar.png",
  },
  water: {
    name: "Water",
    type: FOOD_TYPES.OTHER,
    image: "other/water.png",
  },
  ash: {
    name: "Ash",
    type: FOOD_TYPES.OTHER,
    image: "other/ash.png",
  },
  mixed: {
    name: "Mixed",
    type: FOOD_TYPES.OTHER,
    image: "other/mixed.png",
  },
  none: {
    name: "None",
    type: FOOD_TYPES.OTHER,
    image: "other/none.png",
  },
};

// ============= SLIMES =============
export const SLIMES = {
  angler: {
    name: "Angler",
    displayName: "Angler Slime",
    image: "slimes/angler.png",
    favoriteFood: FOODS.seaHen,
  },
  batty: {
    name: "Batty",
    displayName: "Batty Slime",
    image: "slimes/batty.png",
    favoriteFood: FOODS.pomegranite,
  },
  boom: {
    name: "Boom",
    displayName: "Boom Slime",
    image: "slimes/boom.png",
    favoriteFood: FOODS.briarHen,
  },
  cotton: {
    name: "Cotton",
    displayName: "Cotton Slime",
    image: "slimes/cotton.png",
    favoriteFood: FOODS.waterLettuce,
  },
  crystal: {
    name: "Crystal",
    displayName: "Crystal Slime",
    image: "slimes/crystal.png",
    favoriteFood: FOODS.oddOnion,
  },
  dervish: {
    name: "Dervish",
    displayName: "Dervish Slime",
    image: "slimes/dervish.png",
    favoriteFood: FOODS.pricklePear,
  },
  fire: {
    name: "Fire",
    displayName: "Fire Slime",
    image: "slimes/fire.png",
    favoriteFood: FOODS.ash,
  },
  flutter: {
    name: "Flutter",
    displayName: "Flutter Slime",
    image: "slimes/flutter.png",
    favoriteFood: FOODS.moondewNectar,
  },
  honey: {
    name: "Honey",
    displayName: "Honey Slime",
    image: "slimes/honey.png",
    favoriteFood: FOODS.mintMango,
  },
  hunter: {
    name: "Hunter",
    displayName: "Hunter Slime",
    image: "slimes/hunter.png",
    favoriteFood: FOODS.roostro,
  },
  hyper: {
    name: "Hyper",
    displayName: "Hyper Slime",
    image: "slimes/hyper.png",
    favoriteFood: FOODS.turboTater,
  },
  phosphor: {
    name: "Phosphor",
    displayName: "Phosphor Slime",
    image: "slimes/phosphor.png",
    favoriteFood: FOODS.cuberry,
  },
  pink: {
    name: "Pink",
    displayName: "Pink Slime",
    image: "slimes/pink.png",
    favoriteFood: FOODS.mixed,
  },
  puddle: {
    name: "Puddle",
    displayName: "Puddle Slime",
    image: "slimes/puddle.png",
    favoriteFood: FOODS.water,
  },
  ringtail: {
    name: "Ringtail",
    displayName: "Ringtail Slime",
    image: "slimes/ringtail.png",
    favoriteFood: FOODS.mixed,
  },
  rock: {
    name: "Rock",
    displayName: "Rock Slime",
    image: "slimes/rock.png",
    favoriteFood: FOODS.heartBeat,
  },
  saber: {
    name: "Saber",
    displayName: "Saber Slime",
    image: "slimes/saber.png",
    favoriteFood: FOODS.thundercluck,
  },
  sloomber: {
    name: "Sloomber",
    displayName: "Sloomber Slime",
    image: "slimes/sloomber.png",
    favoriteFood: FOODS.candiedHen,
  },
  tabby: {
    name: "Tabby",
    displayName: "Tabby Slime",
    image: "slimes/tabby.png",
    favoriteFood: FOODS.stonyHen,
  },
  tangle: {
    name: "Tangle",
    displayName: "Tangle Slime",
    image: "slimes/tangle.png",
    favoriteFood: FOODS.paintedHen,
  },
  twin: {
    name: "Twin",
    displayName: "Twin Slime",
    image: "slimes/twin.png",
    favoriteFood: FOODS.polaricherry,
  },
  yolky: {
    name: "Yolky",
    displayName: "Yolky Slime",
    image: "slimes/yolky.png",
    favoriteFood: FOODS.none,
  },
};

// ============= HELPER FUNCTIONS =============

// Get all slimes that prefer a specific food type
export const getSlimesByFoodType = (foodType) => {
  return Object.values(SLIMES).filter(
    (slime) => slime.favoriteFood.type === foodType
  );
};

// Get all foods of a specific type
export const getFoodsByType = (foodType) => {
  return Object.values(FOODS).filter((food) => food.type === foodType);
};

// Get all slimes as an array (for dropdowns)
export const getAllSlimes = () => {
  return Object.values(SLIMES);
};

// Get all foods as an array (for dropdowns)
export const getAllFoods = () => {
  return Object.values(FOODS);
};

// Get slimes suitable for corrals (all except Fire and Puddle)
export const getCorralSlimes = () => {
  return Object.values(SLIMES)
    .filter((slime) => slime.name !== "Fire" && slime.name !== "Puddle")
    .map((slime) => ({ name: slime.displayName, image: slime.image }))
    .concat([{ name: "None", image: "placeholder.png" }]);
};

// Get slimes suitable for ponds
export const getPondSlimes = () => {
  return [
    { name: SLIMES.puddle.displayName, image: SLIMES.puddle.image },
    { name: "None", image: "placeholder.png" },
  ];
};

// Get slimes suitable for incinerators
export const getIncineratorSlimes = () => {
  return [
    { name: SLIMES.fire.displayName, image: SLIMES.fire.image },
    { name: "None", image: "placeholder.png" },
  ];
};

// Get all meats/chickens for coops
export const getCoopTypes = () => {
  return [
    FOODS.briarHen,
    FOODS.candiedHen,
    FOODS.henHen,
    FOODS.paintedHen,
    FOODS.seaHen,
    FOODS.stonyHen,
    FOODS.thundercluck,
    FOODS.mixedMeats,
  ]
    .map((food) => ({ name: food.name, image: food.image }))
    .concat([
      { name: SLIMES.yolky.displayName, image: SLIMES.yolky.image },
      { name: "None", image: "placeholder.png" },
    ]);
};

// Get all fruits for fruit trees
export const getFruitTypes = () => {
  return getFoodsByType(FOOD_TYPES.FRUIT)
    .filter((food) => food.name !== "Mixed Fruits")
    .map((food) => ({ name: food.name, image: food.image }))
    .concat([{ name: "None", image: "placeholder.png" }]);
};

// Get all veggies for veggie patches
export const getVeggieTypes = () => {
  return getFoodsByType(FOOD_TYPES.VEGGIE)
    .filter((food) => food.name !== "Mixed Veggies")
    .map((food) => ({ name: food.name, image: food.image }))
    .concat([{ name: "None", image: "placeholder.png" }]);
};

// Get all items for free range areas
export const getFreeRangeTypes = () => {
  const slimes = Object.values(SLIMES)
    .filter((slime) => slime.name !== "Fire" && slime.name !== "Puddle" && slime.name !== "Sloomber")
    .map((slime) => ({ name: slime.displayName, image: slime.image }));

//   const meats = [
//     FOODS.briarHen,
//     FOODS.henHen,
//     FOODS.paintedHen,
//     FOODS.seaHen,
//     FOODS.stonyHen,
//     FOODS.thundercluck,
//     FOODS.mixedMeats,
//   ].map((food) => ({ name: food.name, image: food.image }));

//   const fruits = [
//     FOODS.cuberry,
//     FOODS.mintMango,
//     FOODS.pogofruit,
//     FOODS.pomegranite,
//     FOODS.pricklePear,
//     FOODS.turboTater,
//     FOODS.mixedFruits,
//   ].map((food) => ({ name: food.name, image: food.image }));

//   const veggies = [
//     FOODS.carrot,
//     FOODS.heartBeat,
//     FOODS.oddOnion,
//     FOODS.turboTater,
//     FOODS.waterLettuce,
//     FOODS.mixedVeggies,
//   ].map((food) => ({ name: food.name, image: food.image }));

  return [...slimes, /*...meats, ...fruits, ...veggies,*/ { name: "None", image: "placeholder.png" }];
};
