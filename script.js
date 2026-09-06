/* =========================================================
   ZAYAXRA — SCRIPT.JS
   TEMİZ + PREMIUM TRADE + PROFILE SÜRÜMÜ
========================================================= */


/* =========================================================
   PET DATABASE
========================================================= */

/* =========================================================
   ZAYAXRA — COMPLETE PET DATABASE
========================================================= */

const PET_VALUES = {
  "Shadow Dragon": 125,
  "Bat Dragon": 110,
  "Giraffe": 70,
  "Frost Dragon": 58,
  "Owl": 42,
  "Parrot": 38,
  "Evil Unicorn": 32,
  "Crow": 28,
  "Frost Fury": 16,
  "Arctic Reindeer": 15,
  "Diamond Butterfly": 14,
  "Turtle": 12,
  "Kangaroo": 11,
  "Albino Monkey": 10,
  "Hedgehog": 9,
  "Lion": 9,
  "Flamingo": 8,
  "Dalmatian": 8,
  "Crocodile": 7,
  "Elephant": 7,
  "Cow": 7,
  "Brown Bear": 6,
  "Pink Cat": 6,
  "Blue Dog": 6,
  "Meerkat": 5,
  "Rhino": 5,
  "Hyena": 5,
  "Black Panther": 5,
  "Platypus": 4.5,
  "Goat": 4.5,
  "Swan": 4,
  "Ancient Dragon": 4,
  "Unicorn": 3.5,
  "Dragon": 3,
  "Golden Dragon": 3,
  "Golden Unicorn": 3,
  "Golden Penguin": 2.8,
  "King Bee": 2.5,
  "Queen Bee": 3,
  "Kitsune": 2.5,
  "Octopus": 2.5,
  "Shark": 2.5,
  "Dodo": 2.5,
  "T-Rex": 2.5,
  "Skele-Rex": 3,
  "Lavender Dragon": 2.5,
  "Lava Dragon": 3,
  "Phoenix": 2,
  "Golden Rat": 2,
  "Metal Ox": 1.5,
  "Snow Owl": 2,
  "Goldhorn": 1.8,
  "Griffin": 1.2,
  "Albino Bat": 3,
  "Business Monkey": 2,
  "Ghost Bunny": 2,
  "Ginger Cat": 1.2,
  "Panda": 1.2,
  "Red Panda": 1,
  "Bee": 1,
  "Penguin": 1,
  "Toucan": 1,
  "Starfish": 1,
  "Koala": 1.5,
  "Frog": 1,
  "Sloth": 0.8,
  "Polar Bear": 3.5,
  "Reindeer": 3,
  "Rabbit": 0.7,
  "Monkey": 0.7,
  "Bunny": 0.7,
  "Emu": 0.8,
  "Beaver": 0.6,
  "Musk Ox": 0.7,
  "Woolly Mammoth": 0.8,
  "Dilophosaurus": 0.7,
  "Stegosaurus": 0.7,
  "Triceratops": 0.6,
  "Shrew": 3,
  "Megalodon": 1,
  "Bat": 0.5,
  "Snow Cat": 0.3,
  "Fennec Fox": 0.3,
  "Red Fox": 0.4,
  "Shiba Inu": 0.3,
  "Dingo": 0.3,
  "Snow Puma": 0.3,
  "Puma": 0.2,
  "Cat": 0.1,
  "Dog": 0.1,
  "Mouse": 0.1,
  "Chick": 0.15,
  "Robin": 0.2,
  "Chicken": 0.3,
  "Bandicoot": 0.2,
  "Ground Sloth": 0.2,
  "Wolpertinger": 0.2,
  "Otter": 0.2,
  "Buffalo": 0.15,
  "Cracked Egg": 0.1
};

const PET_NAMES = [

  "2021 Uplift Butterfly",
  "2022 Uplift Butterfly",
  "2025 Birthday Butterfly",
  "2026 Birthday Butterfly",
  "2D Doggy",
  "2D Kitty",
  "Abyssinian Cat",
  "Aestus",
  "African Wild Dog",
  "Albatross",
  "Albino Bat",
  "Albino Gorilla",
  "Albino Monkey",
  "Alicorn",
  "Alley Cat",
  "Alpaca",
  "Amami Rabbit",
  "Amber Butterfly",
  "Ancient Dragon",
  "Angelfish",
  "Angler Fish",
  "Angus Bull",
  "Angus Calf",
  "Angus Cow",
  "Ankylosaurus",
  "Ant",
  "Apple Owl",
  "Arctic Dusk Dragon",
  "Arctic Fox",
  "Arctic Hare",
  "Arctic Reindeer",
  "Arctic Tern",
  "Armadillo",
  "Ash Zebra",
  "Astronaut Gorilla",
  "Aurora Fox",
  "Australian Kelpie",
  "Axolotl",
  "Aye Aye",
  "Badger",
  "Bakeneko",
  "Baku",
  "Bald Eagle",
  "Bali Starling",
  "Balloon Unicorn",
  "Banded Palm Civet",
  "Bandicoot",
  "Basilisk",
  "Bat",
  "Bat Dragon",
  "Bauble Buddies",
  "Beaver",
  "Bee",
  "Beluga Whale",
  "Berry Cool Cube",
  "Billy Goat",
  "Binturong",
  "Bird of Paradise",
  "Birthday Butterfly 2023",
  "Birthday Butterfly 2024",
  "Bison",
  "Black Chow-Chow",
  "Black Kite",
  "Black Macaque",
  "Black Marlin",
  "Black Moon Bear",
  "Black Panther",
  "Black Rhino",
  "Black Springer Spaniel",
  "Black Tiger",
  "Black Widow",
  "Black-Chested Pheasant",
  "Black-Footed Ferret",
  "Blazing Lion",
  "Bloodhound",
  "Blossom Snake",
  "Blue Betta Fish",
  "Blue Butterfly",
  "Blue Dog",
  "Blue Jay",
  "Blue Ringed Octopus",
  "Blue Whale",
  "Bluebottle Fly",
  "Border Collie",
  "Borhyaena Gigantica",
  "Brachiosaurus",
  "Brown Bear",
  "Brown Springer Spaniel",
  "Brown-Chested Pheasant",
  "Budgie Witch",
  "Buffalo",
  "Bullfrog",
  "Bunny",
  "Bunny Swirl",
  "Burger Bear",
  "Burning Bunny",
  "Bush Elephant",
  "Business Monkey",
  "Cabbit",
  "Cactus Friend",
  "Caelum Cervi",
  "Cake Friend",
  "California Condor",
  "Camel",
  "Canadian Goose",
  "Candicorn",
  "Candy Cane Snail",
  "Candy Hare",
  "Candyfloss Chick",
  "Capricorn",
  "Capuchin Monkey",
  "Capybara",
  "Cassowary",
  "Castle Hermit Crab",
  "Cat",
  "Caterpillar",
  "Cerberus",
  "Chameleon",
  "Chanekeh",
  "Cheetah",
  "Chef Gorilla",
  "Cherub Chipmunk",
  "Chestnut Glyptodon",
  "Chick",
  "Chickatrice",
  "Chicken",
  "Chihuahua",
  "Chilling Spider",
  "Chimera",
  "Chipmunk",
  "Choco Penguin",
  "Chocolate Chip Bat Dragon",
  "Chocolate Chow-Chow",
  "Chocolate Dutch Guinea Pig",
  "Chocolate Labrador",
  "Christmas Pudding Pup",
  "Christmas Spirit",
  "Classic Teapot",
  "Clementine Owl",
  "Clover Cow",
  "Clownfish",
  "Clubtail Dragonfly",
  "Clumpty",
  "Cobra",
  "Cockroach",
  "Cocoadile",
  "Coconut Friend",
  "Cold Cube",
  "Corgi",
  "Corn Doggo",
  "Cow",
  "Cow Calf",
  "Coyote",
  "Cozy Mistletroll",
  "Crab",
  "Cracked Egg",
  "Crimson Cape",
  "Criosphinx",
  "Crocodile",
  "Crow",
  "Cryptid",
  "Crystal Egg",
  "Cuddly Candle",
  "Cupid Dragon",
  "Cute-A-Cabra",
  "Dalmatian",
  "Dancing Dragon",
  "Dango Penguins",
  "Dark Choccybunny",
  "Deathstalker Scorpion",
  "Deinonychus",
  "Diamond Albatross",
  "Diamond Amazon",
  "Diamond Butterfly",
  "Diamond Dragon",
  "Diamond Griffin",
  "Diamond Hamster",
  "Diamond Hummingbird",
  "Diamond King Penguin",
  "Diamond Ladybug",
  "Diamond Mahi Mahi",
  "Diamond Unicorn",
  "Dilophosaurus",
  "Dimension Drifter",
  "Dimorphodon",
  "Dingo",
  "Dire Stag",
  "Dire Wolf",
  "Dirty Ducky",
  "DJ Snooze",
  "Dodo",
  "Dog",
  "Dolphin",
  "Donkey",
  "Dotted Eggy",
  "Dracula Fish",
  "Dracula Parrot",
  "Dragon",
  "Dragonfly",
  "Dragonfruit Fox",
  "Drake",
  "Dugong",
  "Eel",
  "Eggnog Dog",
  "Eggnog Hare",
  "Ehecatl",
  "Elasmosaurus",
  "Elephant",
  "Emberlight",
  "Emperor Gorilla",
  "Emperor Shrimp",
  "Emu",
  "English Sheepdog",
  "Ermine",
  "Evil Basilisk",
  "Evil Chick",
  "Evil Chickatrice",
  "Evil Rock",
  "Evil Unicorn",
  "Fairy Bat Dragon",
  "Fallow Deer",
  "Fanghorn Tortoise",
  "Feesh",
  "Fennec Fox",
  "Field Mouse",
  "Fire Foal",
  "Fire Mare",
  "Fire Stallion",
  "Firefighter Gibbon",
  "Firefly",
  "Flaming Fox",
  "Flaming Zebra",
  "Flamingo",
  "Fleur De Ice",
  "Flower Power Duckling",
  "Flying Fish",
  "Forest Sprite",
  "Fossa",
  "Frankenfeline",
  "French Bulldog",
  "Frog",
  "Frogspawn",
  "Frost Dragon",
  "Frost Fury",
  "Frost Phoenix",
  "Frost Unicorn",
  "Frostbite Bear",
  "Frostbite Cub",
  "Frostclaw",
  "Frozen Penguin",
  "Gaelic Fae",
  "Galapagos Sea Lion",
  "Garden Snake",
  "Gargoyle",
  "Gecko",
  "Gecko Ducky",
  "General Sheepdog",
  "German Shepherd",
  "Ghost",
  "Ghost Bunny",
  "Ghost Chick",
  "Ghost Dog",
  "Ghost Wolf",
  "Ghostly Cat",
  "Giant Anteater",
  "Giant Black Scarab",
  "Giant Blue Scarab",
  "Giant Gold Scarab",
  "Giant Panda",
  "Gibbon",
  "Gila Monster",
  "Gilded Snake",
  "Ginger Cat",
  "Gingerbread Hare",
  "Gingerbread Mouse",
  "Gingerbread Reindeer",
  "Giraffe",
  "Glacier Kitsune",
  "Glacier Moth",
  "Glormy Crab",
  "Glormy Dolphin",
  "Glormy Hound",
  "Glormy Leo",
  "Glyptodon",
  "Glyptodon Ducky",
  "Goat",
  "Gold Mahi Mahi",
  "Golden Albatross",
  "Golden Chow-Chow",
  "Golden Dragon",
  "Golden Griffin",
  "Golden Hamster",
  "Golden Hummingbird",
  "Golden Jaguar",
  "Golden King Penguin",
  "Golden Ladybug",
  "Golden Penguin",
  "Golden Rat",
  "Golden Tortoise Beetle",
  "Golden Unicorn",
  "Golden Walrus",
  "Goldfish",
  "Goldhorn",
  "Goose",
  "Gorilla",
  "Granny Wolf",
  "Grave Owl",
  "Great Pyrenees",
  "Green Amazon",
  "Green Butterfly",
  "Green-Chested Pheasant",
  "Griffin",
  "Grim Dragon",
  "Grinmoire",
  "Ground Sloth",
  "Groundhog",
  "Guardian Lion",
  "Gumball Caterpillar",
  "Gummy Guana",
  "Haetae",
  "Halloween Black Mummy Cat",
  "Halloween Blue Scorpion",
  "Halloween Evil Dachshund",
  "Halloween Golden Mummy Cat",
  "Halloween White Ghost Dragon",
  "Halloween White Mummy Cat",
  "Halloween White Skeleton Dog",
  "Hammerhead Shark",
  "Hamster",
  "Happy Clam",
  "Happy Duckling",
  "Hare",
  "Harp Seal",
  "Hawk",
  "Headless Horse",
  "Hedgehog",
  "Hermit Crab",
  "Hero Gibbon",
  "Highland Cow",
  "Hippo",
  "Hippogriff",
  "Honey Badger",
  "Hopbop",
  "Horse",
  "Hot Doggo",
  "Humbug",
  "Hummingbird",
  "Huntsman Robin",
  "Husky",
  "Hydra",
  "Hyena",
  "Ibex",
  "Ibis",
  "Ice Cream Hermit Crab",
  "Ice Cube",
  "Ice Golem",
  "Ice Moth Dragon",
  "Ice Wolf",
  "Icy Porcupine",
  "Indian Flying Fox",
  "Indian Leopard",
  "Influencer Gibbon",
  "Inmate Capuchin Monkey",
  "Irish Elk",
  "Irish Setter",
  "Irish Water Spaniel",
  "Island Tarsier",
  "Japanese Snow Fairy",
  "Jekyll Hydra",
  "Jellyfish",
  "Jiggly Jerboa",
  "Jousting Horse",
  "Jumping Spider",
  "Kage Crow",
  "Kaijunior",
  "Kakapo",
  "Kangaroo",
  "Kappakid",
  "Karate Gorilla",
  "Kelp Captain",
  "Kelp Crewmate",
  "Kelp Hunter",
  "Kelp Raider",
  "Kid Goat",
  "King Bee",
  "King Penguin",
  "Kirin",
  "Kitsune",
  "Kitty Bat",
  "Kiwi",
  "Kiwi Kiwi",
  "Koala",
  "Koi Carp",
  "Komodo Dragon",
  "Kookaburra",
  "Kraken",
  "Ladybug",
  "Lamb",
  "Lammergeier",
  "Latte Kitsune",
  "Lava Dragon",
  "Lava Wolf",
  "Lavender Dragon",
  "Leopard Cat",
  "Leopard Shark",
  "Leviathan",
  "Liger",
  "Lion",
  "Lion Cub",
  "Lionfish",
  "Little Lamb",
  "Llama",
  "Lobster",
  "Longhorn Cow",
  "Love Bird",
  "Lunar Gold Tiger",
  "Lunar Moon Bear",
  "Lunar Ox",
  "Lunar Tiger",
  "Lunar White Tiger",
  "Lynx",
  "Magma Moose",
  "Magma Snail",
  "Magpie",
  "Mahi Mahi",
  "Maine Coon",
  "Majestic Pony",
  "Malayan Tapir",
  "Maleo Bird",
  "Maneki-Neko",
  "Manta Ray",
  "Many Mackerel",
  "Marabou Stork",
  "Mecha Meow",
  "Mecha R4BBIT",
  "Mechapup",
  "Meerkat",
  "Merhorse",
  "Mermicorn",
  "Merry Mistletroll",
  "Metal Ox",
  "Mexican Wolf",
  "Midnight Dragon",
  "Milk Choccybunny",
  "Mini Pig",
  "Mini Schnauzer",
  "Mirai Moth",
  "Mistletroll",
  "Mochi Meow",
  "Mole",
  "Momma Moose",
  "Mongoose",
  "Monkey",
  "Monkey King",
  "Moon Rabbit",
  "Moonbeam Butterfly",
  "Moonbeam Peacock",
  "Moonlight Moth",
  "Moonpine",
  "Moose Calf",
  "Mosquito",
  "Mouse",
  "Mr. Whiskerpips",
  "Mrs. Whiskerpips",
  "Ms. Muffet",
  "Mule",
  "Munchkin Cat",
  "Mushroom Friend",
  "Musk Ox",
  "Muskrat",
  "Naga Dragon",
  "Narwhal",
  "Naughty Mistletroll",
  "Nautilus",
  "Nebula Snake",
  "Nessie",
  "Nightmare Owl",
  "Ninja Monkey",
  "Nurse Shark",
  "Nutcracker Squirrel",
  "Oakee",
  "Oakee Knight",
  "Oakee Wizard",
  "Ocelot",
  "Octopus",
  "Officer Gibbon",
  "Old King Coal",
  "Onza",
  "Orange Betta Fish",
  "Orange Butterfly",
  "Orangutan",
  "Orca",
  "Orchid Butterfly",
  "Ornate Horned Frog",
  "Oryx",
  "Ostrich",
  "Otter",
  "Owl",
  "Owlbear",
  "Ox",
  "Panda",
  "Pangolin",
  "Papa Moose",
  "Parakeet",
  "Parrot",
  "Partridge",
  "Patchy Bear",
  "Peach Owl",
  "Peachick",
  "Peacock",
  "Peahen",
  "Pelican",
  "Penguin",
  "Peppermint Penguin",
  "Peregrine Falcon",
  "Persian Cat",
  "Phantom Dragon",
  "Phoenix",
  "Pig",
  "Pilot Gull",
  "Pine Marten",
  "Pineapple Owl",
  "Pink Betta Fish",
  "Pink Cat",
  "Pinkypillar",
  "Piranha",
  "Pirate Ghost Capuchin Monkey",
  "Pirate Hermit Crab",
  "Pistachio",
  "Platypus",
  "Poison Dart Frog",
  "Polar Bear",
  "Pomeranian",
  "Poodle",
  "Possum",
  "Praying Mantis",
  "Preppy Capuchin Monkey",
  "Pretty Pony",
  "Priceless Shrimp",
  "Primal Kaijunior",
  "Princess Capuchin Monkey",
  "Princess Mare",
  "Prism Snake",
  "Prismatic Butterfly",
  "Pterodactyl",
  "Pudding Cat",
  "Puffer Fish",
  "Puffin",
  "Puma",
  "Pumpkin Friend",
  "Punk Pony",
  "Pupcake",
  "Puptune",
  "Purple Butterfly",
  "Purrowl",
  "Queen Bee",
  "Quetzalcoatl",
  "Quokka",
  "Rabbit",
  "Raccoon",
  "Rainbow Dragon",
  "Rainbow Trout",
  "Ram",
  "Ranger Beaver",
  "Rat",
  "Ratatoskr",
  "Rattlesnake",
  "Red Cardinal",
  "Red Crowned Crane",
  "Red Dutch Guinea Pig",
  "Red Fox",
  "Red Panda",
  "Red Panda Ducky",
  "Red Sand Dollar",
  "Red Squirrel",
  "Reindeer",
  "Rhino",
  "Rhino Beetle",
  "Ribbon Seal",
  "Rice Cake Rabbit",
  "Ring-tailed Lemur",
  "Ringmaster Gibbon",
  "River",
  "River Otter",
  "Roadrunner",
  "Robin",
  "Robo Dog",
  "Robot",
  "Rock",
  "Rock Pigeon",
  "Rodeo Bull",
  "Rooster",
  "Rose Dragon",
  "Rosy Maple Moth",
  "Royal Capuchin Monkey",
  "Royal Corgi",
  "Royal Palace Spaniel",
  "Rubber Ducky",
  "Ruddy Duck",
  "S'mores Raccoon",
  "Sabertooth",
  "Sado Mole",
  "Sakura Spirit",
  "Salamander",
  "Samoyed",
  "Sandfish",
  "Sasquatch",
  "Scarebear",
  "Scarecrow",
  "Scarecrow Cat",
  "Scarecrow Crow",
  "Scarecrow Horse",
  "Scarlet Butterfly",
  "Scorching Kaijunior",
  "Sea Angel",
  "Sea Skeleton Panda",
  "Sea Slug",
  "Sea Turtle",
  "Seabed Creeper",
  "Seafoam Butterfly",
  "Seagull",
  "Seahorse",
  "Shadow Dragon",
  "Shadow Dragon Ducky",
  "Shark",
  "Shark Puppy",
  "Sheeeeep",
  "Sheepdog Ducky",
  "Shetland Pony Dark Brown",
  "Shetland Pony Light Brown",
  "Shetland Pony White",
  "Shiba Inu",
  "Shih Tzu",
  "Shiver Wolf",
  "Show Pony",
  "Shrew",
  "Siamese Cat",
  "Silly Duck",
  "Silverback Gorilla",
  "Singularity Beetle",
  "Singularity Pisces",
  "Skele-Rex",
  "Skelebat",
  "Skunk",
  "Slime",
  "Slimingo",
  "Sloth",
  "Slug",
  "Sneak Weasel",
  "Snorgle",
  "Snow Cat",
  "Snow Leopard",
  "Snow Monkey",
  "Snow Owl",
  "Snow Puma",
  "Snowball Pet",
  "Snowball Pug",
  "Snowman",
  "Snowy Mammoth",
  "Solaris",
  "Space Whale",
  "Spider Crab",
  "Spinosaurus",
  "Sprout Snail",
  "Squid",
  "St Bernard",
  "Starfish",
  "Starhopper",
  "Starmite",
  "Stegosaurus",
  "Steppe Lion",
  "Stingray",
  "Storm Condor",
  "Strawberry Penguin",
  "Strawberry Shortcake Bat Dragon",
  "Strawberry Shortcake Ducky",
  "Strawberry Tortle",
  "Striped Eggy",
  "Stygian Owl",
  "Subzero Scorpion",
  "Sugar Axolotl",
  "Sugar Glider",
  "Summer Walrus",
  "Sunflower Friend",
  "Sunglider",
  "Sunrise Duckling",
  "Super Saru",
  "Sushi Penguin",
  "Swan",
  "Sweetheart Rat",
  "Swordfish",
  "Tan Chow-Chow",
  "Tanuki",
  "Tarantula",
  "Tarsier",
  "Tasmanian Devil",
  "Tasmanian Tiger",
  "Tawny Frogmouth",
  "Tealwood Monster",
  "Tegu",
  "Temple Friend",
  "The Black Dog",
  "Therapy Dog",
  "Thorny Devil",
  "Three Blind Mice",
  "Tió De Nadal",
  "Toasty Red Panda",
  "Tortoiseshell Guinea Pig",
  "Tortuga de la Isla",
  "Toucan",
  "Toxic Kaijunior",
  "Toy Monkey",
  "Toy Poodle",
  "Trapdoor Snail",
  "Tree Frog",
  "Tree Kangaroo",
  "Tree Sasquatch",
  "Tri-horned Treehopper",
  "Triceratops",
  "Turkey",
  "Turtle",
  "Turtle Doves",
  "Tuxedo Cat",
  "Undead Elk",
  "Undead Jousting Horse",
  "Unicorn",
  "Unicorn Ducky",
  "Urchin",
  "Vampire Dragon",
  "Vanilla Penguin",
  "Velociraptor",
  "Velocirooster",
  "Vermilion Butterfly",
  "Villain Gibbon",
  "Violet Butterfly",
  "Violet Friend",
  "Volcanic Rhino",
  "Vulture",
  "Waffle Wyrm",
  "Walrus",
  "Warthog",
  "Water Moon Bear",
  "Water Opossum",
  "Water Rabbit",
  "Weevil",
  "Werewolf",
  "White Amazon",
  "White Choccybunny",
  "White Sand Dollar",
  "Wild Boar",
  "Wildfire Hawk",
  "Winged Horse",
  "Winged Tiger",
  "Winter Buck",
  "Winter Doe",
  "Winter Fawn",
  "Wolf",
  "Wolpertinger",
  "Wood Pigeon",
  "Woodpecker",
  "Woolly Mammoth",
  "Woolly Rhino",
  "Wrapped Doll",
  "Wren",
  "Wyvern",
  "Yellow Butterfly",
  "Yellow-lipped Sea Krait",
  "Yeti",
  "Yule Log Dog",
  "Zebra",
  "Zeopod",
  "Zodiac Minion Chick",
  "Zombie Buffalo",
  "Zombie Chick",
  "Zombie Wolf"
];


/* =========================================================
   PET DATABASE OLUŞTUR
========================================================= */

function petSlug(name) {

  const special = {
    "T-Rex": "t_rex",
    "Skele-Rex": "skele_rex",
    "S'mores Raccoon": "smores_raccoon",
    "Tió De Nadal": "tio_de_nadal",
    "Mr. Whiskerpips": "mr_whiskerpips",
    "Mrs. Whiskerpips": "mrs_whiskerpips",
    "Ms. Muffet": "ms_muffet",
    "Mecha R4BBIT": "mecha_r4bbit"
  };

  if (special[name]) {
    return special[name];
  }

  return String(name)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}


const PET_DATABASE = PET_NAMES.map(
  name => ({
    id: petSlug(name),
    name,
    rarity: "unknown",
    value: Number(PET_VALUES[name] ?? 0),
    image:
      `https://cdn.playadopt.me/items/${petSlug(name)}.png`
  })
);


/* =========================================================
   BİLİNEN RARITY'LER
========================================================= */

const KNOWN_RARITIES = {
  "Shadow Dragon": "legendary",
  "Bat Dragon": "legendary",
  "Giraffe": "legendary",
  "Frost Dragon": "legendary",
  "Owl": "legendary",
  "Parrot": "legendary",
  "Evil Unicorn": "legendary",
  "Crow": "legendary",
  "Frost Fury": "legendary",
  "Arctic Reindeer": "legendary",
  "Diamond Butterfly": "legendary",
  "Turtle": "ultra",
  "Kangaroo": "legendary",
  "Albino Monkey": "legendary",
  "Hedgehog": "ultra",
  "Lion": "ultra",
  "Flamingo": "ultra",
  "Dalmatian": "ultra",
  "Crocodile": "ultra",
  "Elephant": "ultra",
  "Cow": "ultra",
  "Brown Bear": "rare",
  "Pink Cat": "rare",
  "Blue Dog": "rare",
  "Meerkat": "rare",
  "Rhino": "rare",
  "Hyena": "rare",
  "Black Panther": "uncommon",
  "Platypus": "ultra",
  "Goat": "ultra",
  "Swan": "rare",
  "Ancient Dragon": "legendary",
  "Unicorn": "legendary",
  "Dragon": "legendary",
  "Golden Dragon": "legendary",
  "Golden Unicorn": "legendary",
  "Golden Penguin": "legendary",
  "King Bee": "legendary",
  "Queen Bee": "legendary",
  "Kitsune": "legendary",
  "Octopus": "legendary",
  "Shark": "legendary",
  "Dodo": "legendary",
  "T-Rex": "legendary",
  "Skele-Rex": "legendary",
  "Lavender Dragon": "legendary",
  "Lava Dragon": "legendary",
  "Phoenix": "legendary",
  "Golden Rat": "legendary",
  "Metal Ox": "legendary",
  "Snow Owl": "legendary",
  "Goldhorn": "legendary",
  "Griffin": "legendary",
  "Albino Bat": "ultra",
  "Business Monkey": "ultra",
  "Ghost Bunny": "ultra",
  "Ginger Cat": "ultra",
  "Panda": "ultra",
  "Red Panda": "ultra",
  "Bee": "ultra",
  "Penguin": "ultra",
  "Toucan": "ultra",
  "Starfish": "ultra",
  "Koala": "ultra",
  "Frog": "ultra",
  "Sloth": "ultra",
  "Polar Bear": "rare",
  "Reindeer": "rare",
  "Rabbit": "rare",
  "Monkey": "rare",
  "Bunny": "rare",
  "Emu": "rare",
  "Beaver": "rare",
  "Musk Ox": "rare",
  "Woolly Mammoth": "rare",
  "Dilophosaurus": "rare",
  "Stegosaurus": "rare",
  "Triceratops": "rare",
  "Shrew": "uncommon",
  "Megalodon": "uncommon",
  "Bat": "uncommon",
  "Snow Cat": "uncommon",
  "Fennec Fox": "uncommon",
  "Red Fox": "uncommon",
  "Shiba Inu": "uncommon",
  "Dingo": "uncommon",
  "Snow Puma": "uncommon",
  "Puma": "uncommon",
  "Cat": "common",
  "Dog": "common",
  "Mouse": "common",
  "Chick": "common",
  "Robin": "common",
  "Chicken": "common",
  "Bandicoot": "common",
  "Ground Sloth": "common",
  "Wolpertinger": "common",
  "Otter": "common",
  "Buffalo": "common"
};


PET_DATABASE.forEach(
  pet => {
    if (KNOWN_RARITIES[pet.name]) {
      pet.rarity =
        KNOWN_RARITIES[pet.name];
    }
  }
);


console.log(
  `ZAYAXRA: ${PET_DATABASE.length} pet verisi yüklendi.`
);
    id: "shadow_dragon",
    name: "Shadow Dragon",
    rarity: "legendary",
    value: 125,
    image: "https://cdn.playadopt.me/items/shadow_dragon.png"
  },

  {
    id: "bat_dragon",
    name: "Bat Dragon",
    rarity: "legendary",
    value: 110,
    image: "https://cdn.playadopt.me/items/bat_dragon.png"
  },

  {
    id: "giraffe",
    name: "Giraffe",
    rarity: "legendary",
    value: 70,
    image: "https://cdn.playadopt.me/items/giraffe.png"
  },

  {
    id: "frost_dragon",
    name: "Frost Dragon",
    rarity: "legendary",
    value: 58,
    image: "https://cdn.playadopt.me/items/frost_dragon.png"
  },

  {
    id: "owl",
    name: "Owl",
    rarity: "legendary",
    value: 42,
    image: "https://cdn.playadopt.me/items/owl.png"
  },

  {
    id: "parrot",
    name: "Parrot",
    rarity: "legendary",
    value: 38,
    image: "https://cdn.playadopt.me/items/parrot.png"
  },

  {
    id: "evil_unicorn",
    name: "Evil Unicorn",
    rarity: "legendary",
    value: 32,
    image: "https://cdn.playadopt.me/items/evil_unicorn.png"
  },

  {
    id: "crow",
    name: "Crow",
    rarity: "legendary",
    value: 28,
    image: "https://cdn.playadopt.me/items/crow.png"
  },

  {
    id: "frost_fury",
    name: "Frost Fury",
    rarity: "legendary",
    value: 16,
    image: "https://cdn.playadopt.me/items/frost_fury.png"
  },

  {
    id: "arctic_reindeer",
    name: "Arctic Reindeer",
    rarity: "legendary",
    value: 15,
    image: "https://cdn.playadopt.me/items/arctic_reindeer.png"
  },

  {
    id: "diamond_butterfly",
    name: "Diamond Butterfly",
    rarity: "legendary",
    value: 14,
    image: "https://cdn.playadopt.me/items/diamond_butterfly.png"
  },

  {
    id: "turtle",
    name: "Turtle",
    rarity: "ultra",
    value: 12,
    image: "https://cdn.playadopt.me/items/turtle.png"
  },

  {
    id: "kangaroo",
    name: "Kangaroo",
    rarity: "legendary",
    value: 11,
    image: "https://cdn.playadopt.me/items/kangaroo.png"
  },

  {
    id: "albino_monkey",
    name: "Albino Monkey",
    rarity: "legendary",
    value: 10,
    image: "https://cdn.playadopt.me/items/albino_monkey.png"
  },

  {
    id: "hedgehog",
    name: "Hedgehog",
    rarity: "ultra",
    value: 9,
    image: "https://cdn.playadopt.me/items/hedgehog.png"
  },

  {
    id: "lion",
    name: "Lion",
    rarity: "ultra",
    value: 9,
    image: "https://cdn.playadopt.me/items/lion.png"
  },

  {
    id: "flamingo",
    name: "Flamingo",
    rarity: "ultra",
    value: 8,
    image: "https://cdn.playadopt.me/items/flamingo.png"
  },

  {
    id: "dalmatian",
    name: "Dalmatian",
    rarity: "ultra",
    value: 8,
    image: "https://cdn.playadopt.me/items/dalmatian.png"
  },

  {
    id: "crocodile",
    name: "Crocodile",
    rarity: "ultra",
    value: 7,
    image: "https://cdn.playadopt.me/items/crocodile.png"
  },

  {
    id: "elephant",
    name: "Elephant",
    rarity: "ultra",
    value: 7,
    image: "https://cdn.playadopt.me/items/elephant.png"
  },

  {
    id: "cow",
    name: "Cow",
    rarity: "ultra",
    value: 7,
    image: "https://cdn.playadopt.me/items/cow.png"
  },

  {
    id: "brown_bear",
    name: "Brown Bear",
    rarity: "rare",
    value: 6,
    image: "https://cdn.playadopt.me/items/brown_bear.png"
  },

  {
    id: "pink_cat",
    name: "Pink Cat",
    rarity: "rare",
    value: 6,
    image: "https://cdn.playadopt.me/items/pink_cat.png"
  },

  {
    id: "blue_dog",
    name: "Blue Dog",
    rarity: "rare",
    value: 6,
    image: "https://cdn.playadopt.me/items/blue_dog.png"
  },

  {
    id: "meerkat",
    name: "Meerkat",
    rarity: "rare",
    value: 5,
    image: "https://cdn.playadopt.me/items/meerkat.png"
  },

  {
    id: "rhino",
    name: "Rhino",
    rarity: "rare",
    value: 5,
    image: "https://cdn.playadopt.me/items/rhino.png"
  },

  {
    id: "hyena",
    name: "Hyena",
    rarity: "rare",
    value: 5,
    image: "https://cdn.playadopt.me/items/hyena.png"
  },

  {
    id: "black_panther",
    name: "Black Panther",
    rarity: "uncommon",
    value: 5,
    image: "https://cdn.playadopt.me/items/black_panther.png"
  },

  {
    id: "platypus",
    name: "Platypus",
    rarity: "ultra",
    value: 4.5,
    image: "https://cdn.playadopt.me/items/platypus.png"
  },

  {
    id: "goat",
    name: "Goat",
    rarity: "ultra",
    value: 4.5,
    image: "https://cdn.playadopt.me/items/goat.png"
  },

  {
    id: "swan",
    name: "Swan",
    rarity: "rare",
    value: 4,
    image: "https://cdn.playadopt.me/items/swan.png"
  },

  {
    id: "ancient_dragon",
    name: "Ancient Dragon",
    rarity: "legendary",
    value: 4,
    image: "https://cdn.playadopt.me/items/ancient_dragon.png"
  },

  {
    id: "unicorn",
    name: "Unicorn",
    rarity: "legendary",
    value: 3.5,
    image: "https://cdn.playadopt.me/items/unicorn.png"
  },

  {
    id: "dragon",
    name: "Dragon",
    rarity: "legendary",
    value: 3,
    image: "https://cdn.playadopt.me/items/dragon.png"
  },

  {
    id: "golden_dragon",
    name: "Golden Dragon",
    rarity: "legendary",
    value: 3,
    image: "https://cdn.playadopt.me/items/golden_dragon.png"
  },

  {
    id: "golden_unicorn",
    name: "Golden Unicorn",
    rarity: "legendary",
    value: 3,
    image: "https://cdn.playadopt.me/items/golden_unicorn.png"
  },

  {
    id: "golden_penguin",
    name: "Golden Penguin",
    rarity: "legendary",
    value: 2.8,
    image: "https://cdn.playadopt.me/items/golden_penguin.png"
  },

  {
    id: "king_bee",
    name: "King Bee",
    rarity: "legendary",
    value: 2.5,
    image: "https://cdn.playadopt.me/items/king_bee.png"
  },

  {
    id: "queen_bee",
    name: "Queen Bee",
    rarity: "legendary",
    value: 3,
    image: "https://cdn.playadopt.me/items/queen_bee.png"
  },

  {
    id: "kitsune",
    name: "Kitsune",
    rarity: "legendary",
    value: 2.5,
    image: "https://cdn.playadopt.me/items/kitsune.png"
  },

  {
    id: "octopus",
    name: "Octopus",
    rarity: "legendary",
    value: 2.5,
    image: "https://cdn.playadopt.me/items/octopus.png"
  },

  {
    id: "shark",
    name: "Shark",
    rarity: "legendary",
    value: 2.5,
    image: "https://cdn.playadopt.me/items/shark.png"
  },

  {
    id: "dodo",
    name: "Dodo",
    rarity: "legendary",
    value: 2.5,
    image: "https://cdn.playadopt.me/items/dodo.png"
  },

  {
    id: "t_rex",
    name: "T-Rex",
    rarity: "legendary",
    value: 2.5,
    image: "https://cdn.playadopt.me/items/t_rex.png"
  },

  {
    id: "skele_rex",
    name: "Skele-Rex",
    rarity: "legendary",
    value: 3,
    image: "https://cdn.playadopt.me/items/skele_rex.png"
  },

  {
    id: "lavender_dragon",
    name: "Lavender Dragon",
    rarity: "legendary",
    value: 2.5,
    image: "https://cdn.playadopt.me/items/lavender_dragon.png"
  },

  {
    id: "lava_dragon",
    name: "Lava Dragon",
    rarity: "legendary",
    value: 3,
    image: "https://cdn.playadopt.me/items/lava_dragon.png"
  },

  {
    id: "phoenix",
    name: "Phoenix",
    rarity: "legendary",
    value: 2,
    image: "https://cdn.playadopt.me/items/phoenix.png"
  },

  {
    id: "golden_rat",
    name: "Golden Rat",
    rarity: "legendary",
    value: 2,
    image: "https://cdn.playadopt.me/items/golden_rat.png"
  },

  {
    id: "metal_ox",
    name: "Metal Ox",
    rarity: "legendary",
    value: 1.5,
    image: "https://cdn.playadopt.me/items/metal_ox.png"
  },

  {
    id: "snow_owl",
    name: "Snow Owl",
    rarity: "legendary",
    value: 2,
    image: "https://cdn.playadopt.me/items/snow_owl.png"
  },

  {
    id: "goldhorn",
    name: "Goldhorn",
    rarity: "legendary",
    value: 1.8,
    image: "https://cdn.playadopt.me/items/goldhorn.png"
  },

  {
    id: "griffin",
    name: "Griffin",
    rarity: "legendary",
    value: 1.2,
    image: "https://cdn.playadopt.me/items/griffin.png"
  },

  {
    id: "albino_bat",
    name: "Albino Bat",
    rarity: "ultra",
    value: 3,
    image: "https://cdn.playadopt.me/items/albino_bat.png"
  },

  {
    id: "business_monkey",
    name: "Business Monkey",
    rarity: "ultra",
    value: 2,
    image: "https://cdn.playadopt.me/items/business_monkey.png"
  },

  {
    id: "ghost_bunny",
    name: "Ghost Bunny",
    rarity: "ultra",
    value: 2,
    image: "https://cdn.playadopt.me/items/ghost_bunny.png"
  },

  {
    id: "ginger_cat",
    name: "Ginger Cat",
    rarity: "ultra",
    value: 1.2,
    image: "https://cdn.playadopt.me/items/ginger_cat.png"
  },

  {
    id: "panda",
    name: "Panda",
    rarity: "ultra",
    value: 1.2,
    image: "https://cdn.playadopt.me/items/panda.png"
  },

  {
    id: "red_panda",
    name: "Red Panda",
    rarity: "ultra",
    value: 1,
    image: "https://cdn.playadopt.me/items/red_panda.png"
  },

  {
    id: "bee",
    name: "Bee",
    rarity: "ultra",
    value: 1,
    image: "https://cdn.playadopt.me/items/bee.png"
  },

  {
    id: "penguin",
    name: "Penguin",
    rarity: "ultra",
    value: 1,
    image: "https://cdn.playadopt.me/items/penguin.png"
  },

  {
    id: "toucan",
    name: "Toucan",
    rarity: "ultra",
    value: 1,
    image: "https://cdn.playadopt.me/items/toucan.png"
  },

  {
    id: "starfish",
    name: "Starfish",
    rarity: "ultra",
    value: 1,
    image: "https://cdn.playadopt.me/items/starfish.png"
  },

  {
    id: "koala",
    name: "Koala",
    rarity: "ultra",
    value: 1.5,
    image: "https://cdn.playadopt.me/items/koala.png"
  },

  {
    id: "frog",
    name: "Frog",
    rarity: "ultra",
    value: 1,
    image: "https://cdn.playadopt.me/items/frog.png"
  },

  {
    id: "sloth",
    name: "Sloth",
    rarity: "ultra",
    value: 0.8,
    image: "https://cdn.playadopt.me/items/sloth.png"
  },

  {
    id: "polar_bear",
    name: "Polar Bear",
    rarity: "rare",
    value: 3.5,
    image: "https://cdn.playadopt.me/items/polar_bear.png"
  },

  {
    id: "reindeer",
    name: "Reindeer",
    rarity: "rare",
    value: 3,
    image: "https://cdn.playadopt.me/items/reindeer.png"
  },

  {
    id: "rabbit",
    name: "Rabbit",
    rarity: "rare",
    value: 0.7,
    image: "https://cdn.playadopt.me/items/rabbit.png"
  },

  {
    id: "monkey",
    name: "Monkey",
    rarity: "rare",
    value: 0.7,
    image: "https://cdn.playadopt.me/items/monkey.png"
  },

  {
    id: "bunny",
    name: "Bunny",
    rarity: "rare",
    value: 0.7,
    image: "https://cdn.playadopt.me/items/bunny.png"
  },

  {
    id: "emu",
    name: "Emu",
    rarity: "rare",
    value: 0.8,
    image: "https://cdn.playadopt.me/items/emu.png"
  },

  {
    id: "beaver",
    name: "Beaver",
    rarity: "rare",
    value: 0.6,
    image: "https://cdn.playadopt.me/items/beaver.png"
  },

  {
    id: "musk_ox",
    name: "Musk Ox",
    rarity: "rare",
    value: 0.7,
    image: "https://cdn.playadopt.me/items/musk_ox.png"
  },

  {
    id: "woolly_mammoth",
    name: "Woolly Mammoth",
    rarity: "rare",
    value: 0.8,
    image: "https://cdn.playadopt.me/items/woolly_mammoth.png"
  },

  {
    id: "dilophosaurus",
    name: "Dilophosaurus",
    rarity: "rare",
    value: 0.7,
    image: "https://cdn.playadopt.me/items/dilophosaurus.png"
  },

  {
    id: "stegosaurus",
    name: "Stegosaurus",
    rarity: "rare",
    value: 0.7,
    image: "https://cdn.playadopt.me/items/stegosaurus.png"
  },

  {
    id: "triceratops",
    name: "Triceratops",
    rarity: "rare",
    value: 0.6,
    image: "https://cdn.playadopt.me/items/triceratops.png"
  },

  {
    id: "shrew",
    name: "Shrew",
    rarity: "uncommon",
    value: 3,
    image: "https://cdn.playadopt.me/items/shrew.png"
  },

  {
    id: "megalodon",
    name: "Megalodon",
    rarity: "uncommon",
    value: 1,
    image: "https://cdn.playadopt.me/items/megalodon.png"
  },

  {
    id: "bat",
    name: "Bat",
    rarity: "uncommon",
    value: 0.5,
    image: "https://cdn.playadopt.me/items/bat.png"
  },

  {
    id: "snow_cat",
    name: "Snow Cat",
    rarity: "uncommon",
    value: 0.3,
    image: "https://cdn.playadopt.me/items/snow_cat.png"
  },

  {
    id: "fennec_fox",
    name: "Fennec Fox",
    rarity: "uncommon",
    value: 0.3,
    image: "https://cdn.playadopt.me/items/fennec_fox.png"
  },

  {
    id: "red_fox",
    name: "Red Fox",
    rarity: "uncommon",
    value: 0.4,
    image: "https://cdn.playadopt.me/items/red_fox.png"
  },

  {
    id: "shiba_inu",
    name: "Shiba Inu",
    rarity: "uncommon",
    value: 0.3,
    image: "https://cdn.playadopt.me/items/shiba_inu.png"
  },

  {
    id: "dingo",
    name: "Dingo",
    rarity: "uncommon",
    value: 0.3,
    image: "https://cdn.playadopt.me/items/dingo.png"
  },

  {
    id: "snow_puma",
    name: "Snow Puma",
    rarity: "uncommon",
    value: 0.3,
    image: "https://cdn.playadopt.me/items/snow_puma.png"
  },

  {
    id: "puma",
    name: "Puma",
    rarity: "uncommon",
    value: 0.2,
    image: "https://cdn.playadopt.me/items/puma.png"
  },

  {
    id: "cat",
    name: "Cat",
    rarity: "common",
    value: 0.1,
    image: "https://cdn.playadopt.me/items/cat.png"
  },

  {
    id: "dog",
    name: "Dog",
    rarity: "common",
    value: 0.1,
    image: "https://cdn.playadopt.me/items/dog.png"
  },

  {
    id: "mouse",
    name: "Mouse",
    rarity: "common",
    value: 0.1,
    image: "https://cdn.playadopt.me/items/mouse.png"
  },

  {
    id: "chick",
    name: "Chick",
    rarity: "common",
    value: 0.15,
    image: "https://cdn.playadopt.me/items/chick.png"
  },

  {
    id: "robin",
    name: "Robin",
    rarity: "common",
    value: 0.2,
    image: "https://cdn.playadopt.me/items/robin.png"
  },

  {
    id: "chicken",
    name: "Chicken",
    rarity: "common",
    value: 0.3,
    image: "https://cdn.playadopt.me/items/chicken.png"
  },

  {
    id: "bandicoot",
    name: "Bandicoot",
    rarity: "common",
    value: 0.2,
    image: "https://cdn.playadopt.me/items/bandicoot.png"
  },

  {
    id: "ground_sloth",
    name: "Ground Sloth",
    rarity: "common",
    value: 0.2,
    image: "https://cdn.playadopt.me/items/ground_sloth.png"
  },

  {
    id: "wolpertinger",
    name: "Wolpertinger",
    rarity: "common",
    value: 0.2,
    image: "https://cdn.playadopt.me/items/wolpertinger.png"
  },

  {
    id: "otter",
    name: "Otter",
    rarity: "common",
    value: 0.2,
    image: "https://cdn.playadopt.me/items/otter.png"
  },

  {
    id: "buffalo",
    name: "Buffalo",
    rarity: "common",
    value: 0.15,
    image: "https://cdn.playadopt.me/items/buffalo.png"
  },

  {
    id: "cracked_egg",
    name: "Cracked Egg",
    rarity: "common",
    value: 0.1,
    image: "https://cdn.playadopt.me/items/cracked_egg.png"
  }

];


/* =========================================================
   GLOBAL STATE
========================================================= */

let youTrade = [];
let themTrade = [];

let pickerSide = null;
let selectedPet = null;

let selectedForm = "normal";

let selectedPotion = {
  fly: false,
  ride: false
};

let recordedTradeKey = "";

let selectedAvatar = "🐉";


/* =========================================================
   HELPERS
========================================================= */

function $(id) {
  return document.getElementById(id);
}


function formatValue(value) {

  const number = Number(value || 0);

  if (!Number.isFinite(number)) {
    return "0";
  }

  return Number.isInteger(number)
    ? String(number)
    : number.toFixed(1);
}


function rarityName(rarity) {

  const names = {
    legendary: "Legendary",
    ultra: "Ultra-Rare",
    rare: "Rare",
    uncommon: "Uncommon",
    common: "Common"
  };

  return names[rarity] || rarity || "";
}


function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function handleImageError(img) {

  if (
    !img ||
    img.dataset.failed === "1"
  ) {
    return;
  }

  img.dataset.failed = "1";

  img.src =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="160"
      >
        <rect
          width="160"
          height="160"
          rx="20"
          fill="#15182a"
        />

        <text
          x="80"
          y="86"
          text-anchor="middle"
          fill="#8b93a7"
          font-size="13"
          font-family="Arial"
        >
          NO IMAGE
        </text>
      </svg>
    `);
}


function imageHTML(
  pet,
  className = "pet-photo"
) {

  return `
    <img
      src="${escapeHTML(
        pet?.image || ""
      )}"
      alt="${escapeHTML(
        pet?.name || "Pet"
      )}"
      class="${className}"
      loading="lazy"
      onerror="handleImageError(this)"
    >
  `;
}


/* =========================================================
   STORAGE
========================================================= */

function getTradeStats() {

  try {

    const data =
      JSON.parse(
        localStorage.getItem(
          "zayaggTradeStats"
        ) || "{}"
      );

    return {
      wins:
        Number(data.wins) || 0,

      fair:
        Number(data.fair) || 0,

      loses:
        Number(data.loses) || 0
    };

  } catch {

    return {
      wins: 0,
      fair: 0,
      loses: 0
    };

  }

}


function saveTradeStats(stats) {

  localStorage.setItem(
    "zayaggTradeStats",
    JSON.stringify({
      wins:
        Number(stats.wins) || 0,

      fair:
        Number(stats.fair) || 0,

      loses:
        Number(stats.loses) || 0
    })
  );

}


function ensureStorageData() {

  if (
    !localStorage.getItem(
      "zayaggTradeStats"
    )
  ) {

    saveTradeStats({
      wins: 0,
      fair: 0,
      loses: 0
    });

  }

}


/* =========================================================
   PROFILE STORAGE
========================================================= */

function getProfileData() {

  try {

    const data =
      JSON.parse(
        localStorage.getItem(
          "zayaggProfile"
        ) || "{}"
      );

    return {
      name:
        data.name ||
        "Zayaxra Kullanıcısı",

      username:
        data.username ||
        "@kullanici",

      bio:
        data.bio ||
        "Henüz bir biyografi eklenmedi.",

      avatar:
        data.avatar ||
        "🐉"
    };

  } catch {

    return {
      name:
        "Zayaxra Kullanıcısı",

      username:
        "@kullanici",

      bio:
        "Henüz bir biyografi eklenmedi.",

      avatar:
        "🐉"
    };

  }

}


/* =========================================================
   LEGACY PROFILE CLEANUP
========================================================= */

function migrateLegacyProfile() {

  const migrationKey =
    "zayaxraProfileMigrationV1";

  if (
    localStorage.getItem(
      migrationKey
    ) === "1"
  ) {
    return;
  }


  try {

    const raw =
      localStorage.getItem(
        "zayaggProfile"
      );


    if (!raw) {

      localStorage.setItem(
        migrationKey,
        "1"
      );

      return;

    }


    const data =
      JSON.parse(raw);


    const name =
      String(
        data?.name || ""
      ).toLowerCase();


    const username =
      String(
        data?.username || ""
      ).toLowerCase();


    const bio =
      String(
        data?.bio || ""
      ).toLowerCase();


    const isOldZayagg =
      name.includes("zayagg") ||
      username.includes("zayagg") ||
      bio.includes("adm");


    if (isOldZayagg) {

      saveProfileData({
        name:
          "Zayaxra Kullanıcısı",

        username:
          "@kullanici",

        bio:
          "Henüz bir biyografi eklenmedi.",

        avatar:
          data?.avatar ||
          "🐉"
      });

    }


    localStorage.setItem(
      migrationKey,
      "1"
    );

  } catch {

    saveProfileData({
      name:
        "Zayaxra Kullanıcısı",

      username:
        "@kullanici",

      bio:
        "Henüz bir biyografi eklenmedi.",

      avatar:
        "🐉"
    });


    localStorage.setItem(
      migrationKey,
      "1"
    );

  }

}


function saveProfileData(data) {

  localStorage.setItem(
    "zayaggProfile",
    JSON.stringify(data)
  );

}


/* =========================================================
   PET PICKER
========================================================= */

function openPetPicker(side) {

  if (
    side !== "you" &&
    side !== "them"
  ) {
    return;
  }


  pickerSide =
    side;

  selectedPet =
    null;

  selectedForm =
    "normal";

  selectedPotion = {
    fly: false,
    ride: false
  };


  const modal =
    $("petPicker");

  const search =
    $("petSearch");

  const title =
    $("petPickerTitle");


  if (title) {

    title.textContent =
      side === "you"
        ? "Senin teklifine pet ekle"
        : "Karşı tarafın teklifine pet ekle";

  }


  if (search) {
    search.value = "";
  }


  $("pickerBar")?.classList.add(
    "hidden"
  );


  resetPickerButtons();


  renderPickerPets(
    PET_DATABASE
  );


  if (modal) {

    modal.classList.add(
      "show"
    );

    modal.classList.add(
      "active"
    );

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  document.body.classList.add(
    "modal-open"
  );

  document.body.classList.add(
    "profile-open"
  );


  setTimeout(
    () => {
      search?.focus();
    },
    50
  );

}


function closePetPicker() {

  const modal =
    $("petPicker");

  if (modal) {

    modal.classList.remove(
      "show"
    );

    modal.classList.remove(
      "active"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

  }


  document.body.classList.remove(
    "profile-open"
  );


  if (
    !document
      .getElementById(
        "profileModal"
      )
      ?.classList.contains(
        "active"
      )
  ) {

    document.body.classList.remove(
      "modal-open"
    );

  }


  pickerSide =
    null;

  selectedPet =
    null;

}


/* =========================================================
   PICKER LIST
========================================================= */

function renderPickerPets(
  list = PET_DATABASE
) {

  const box =
    $("pickerPets");

  if (!box) {
    return;
  }


  box.innerHTML =
    "";


  if (
    !Array.isArray(list) ||
    list.length === 0
  ) {

    box.innerHTML = `

      <div class="empty-picker">

        <span>
          🔎
        </span>

        <strong>
          Pet bulunamadı
        </strong>

        <small>
          Arama kelimesini değiştir.
        </small>

      </div>

    `;

    return;
  }


  list.forEach(
    pet => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "pet-choice";


      if (
        selectedPet &&
        selectedPet.id ===
          pet.id
      ) {

        button.classList.add(
          "selected"
        );

      }


      button.innerHTML = `

        <div class="choice-image">

          ${imageHTML(
            pet
          )}

        </div>


        <strong>
          ${escapeHTML(
            pet.name
          )}
        </strong>


        <span
          class="rarity-tag ${escapeHTML(
            String(
              pet.rarity || ""
            )
          )}"
        >
          ${escapeHTML(
            rarityName(
              pet.rarity
            )
          )}
        </span>


        <small>
          ${formatValue(
            pet.value
          )}
        </small>

      `;


      button.addEventListener(
        "click",
        () => {

          selectPickerPet(
            pet
          );

        }
      );


      box.appendChild(
        button
      );

    }
  );

}


/* =========================================================
   PET SEARCH
========================================================= */

function filterPickerPets() {

  const query =
    String(
      $("petSearch")?.value ||
      ""
    )
      .trim()
      .toLowerCase();


  const filtered =
    PET_DATABASE.filter(
      pet => {

        const name =
          String(
            pet.name || ""
          )
            .toLowerCase();


        const rarity =
          String(
            pet.rarity || ""
          )
            .toLowerCase();


        return (
          name.includes(
            query
          ) ||
          rarity.includes(
            query
          )
        );

      }
    );


  renderPickerPets(
    filtered
  );

}


/* =========================================================
   SELECT PET
========================================================= */

function selectPickerPet(
  pet
) {

  if (!pet) {
    return;
  }


  selectedPet =
    pet;

  selectedForm =
    "normal";

  selectedPotion = {
    fly: false,
    ride: false
  };


  $("pickerBar")
    ?.classList.remove(
      "hidden"
    );


  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

  filterPickerPets();

}


/* =========================================================
   PICKER PREVIEW
========================================================= */

function renderPickerPreview() {

  const box =
    $("pickerPreview");

  if (
    !box ||
    !selectedPet
  ) {
    return;
  }


  const chips = [];


  if (
    selectedForm ===
    "neon"
  ) {

    chips.push(
      `<span class="vchip neon">NEON</span>`
    );

  }


  if (
    selectedForm ===
    "mega"
  ) {

    chips.push(
      `<span class="vchip mega">MEGA</span>`
    );

  }


  if (
    selectedPotion.fly
  ) {

    chips.push(
      `<span class="vchip fly">FLY</span>`
    );

  }


  if (
    selectedPotion.ride
  ) {

    chips.push(
      `<span class="vchip ride">RIDE</span>`
    );

  }


  box.innerHTML = `

    <div class="pet-image-wrap">

      ${
        selectedForm ===
        "neon"
          ? `<div class="neon-effect"></div>`
          : ""
      }

      ${
        selectedForm ===
        "mega"
          ? `<div class="mega-effect"></div>`
          : ""
      }

      ${imageHTML(
        selectedPet
      )}

      <div class="pet-badges">

        ${
          selectedForm ===
          "neon"
            ? `<span class="mini-chip neon">N</span>`
            : ""
        }

        ${
          selectedForm ===
          "mega"
            ? `<span class="mini-chip mega">M</span>`
            : ""
        }

        ${
          selectedPotion.fly
            ? `<span class="mini-chip fly">F</span>`
            : ""
        }

        ${
          selectedPotion.ride
            ? `<span class="mini-chip ride">R</span>`
            : ""
        }

      </div>

    </div>


    <div class="preview-info">

      <strong>
        ${escapeHTML(
          selectedPet.name
        )}
      </strong>

      <span>
        ${escapeHTML(
          rarityName(
            selectedPet.rarity
          )
        )}
      </span>


      <div class="vchip-row">
        ${chips.join("")}
      </div>

    </div>

  `;

}


/* =========================================================
   PICKER BUTTONS
========================================================= */

function resetPickerButtons() {

  $("normalFormBtn")
    ?.classList.add(
      "active"
    );


  $("btnNeon")
    ?.classList.remove(
      "active"
    );


  $("btnMega")
    ?.classList.remove(
      "active"
    );


  $("noPotionBtn")
    ?.classList.add(
      "active"
    );


  $("btnFly")
    ?.classList.remove(
      "active"
    );


  $("btnRide")
    ?.classList.remove(
      "active"
    );


  $("flyRideBtn")
    ?.classList.remove(
      "active"
    );

}


function updatePickerButtons() {

  const normal =
    selectedForm ===
    "normal";


  $("normalFormBtn")
    ?.classList.toggle(
      "active",
      normal
    );


  $("btnNeon")
    ?.classList.toggle(
      "active",
      selectedForm ===
        "neon"
    );


  $("btnMega")
    ?.classList.toggle(
      "active",
      selectedForm ===
        "mega"
    );


  const fly =
    selectedPotion.fly;


  const ride =
    selectedPotion.ride;


  const none =
    !fly &&
    !ride;


  $("noPotionBtn")
    ?.classList.toggle(
      "active",
      none
    );


  $("btnFly")
    ?.classList.toggle(
      "active",
      fly &&
      !ride
    );


  $("btnRide")
    ?.classList.toggle(
      "active",
      ride &&
      !fly
    );


  $("flyRideBtn")
    ?.classList.toggle(
      "active",
      fly &&
      ride
    );

}


/* =========================================================
   FORM
========================================================= */

function toggleForm(
  form
) {

  if (!selectedPet) {
    return;
  }


  if (
    ![
      "normal",
      "neon",
      "mega"
    ].includes(form)
  ) {
    return;
  }


  selectedForm =
    selectedForm ===
      form
      ? "normal"
      : form;


  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

}


/* =========================================================
   POTION
========================================================= */

function togglePotion(
  type
) {

  if (!selectedPet) {
    return;
  }


  if (
    type === "none"
  ) {

    selectedPotion = {
      fly: false,
      ride: false
    };

  }


  else if (
    type === "fly"
  ) {

    selectedPotion = {
      fly:
        !(
          selectedPotion.fly &&
          !selectedPotion.ride
        ),

      ride: false
    };

  }


  else if (
    type === "ride"
  ) {

    selectedPotion = {
      fly: false,

      ride:
        !(
          selectedPotion.ride &&
          !selectedPotion.fly
        )
    };

  }


  else if (
    type === "flyride"
  ) {

    const active =
      selectedPotion.fly &&
      selectedPotion.ride;


    selectedPotion = {
      fly:
        !active,

      ride:
        !active
    };

  }


  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

}


/* =========================================================
   MODIFIED VALUE
========================================================= */

function getModifiedValue(
  pet
) {

  if (!pet) {
    return 0;
  }


  let value =
    Number(
      pet.value || 0
    );


  if (
    !Number.isFinite(
      value
    )
  ) {

    value = 0;

  }


  if (
    selectedForm ===
    "neon"
  ) {

    value *= 4;

  }


  if (
    selectedForm ===
    "mega"
  ) {

    value *= 16;

  }


  if (
    selectedPotion.fly
  ) {

    value += 0.25;

  }


  if (
    selectedPotion.ride
  ) {

    value += 0.25;

  }


  return value;

}


/* =========================================================
   PICKER VALUE
========================================================= */

function updatePickerValue() {

  const element =
    $("pickerValue");

  if (!element) {
    return;
  }


  if (!selectedPet) {

    element.textContent =
      "0";

    return;

  }


  element.textContent =
    formatValue(
      getModifiedValue(
        selectedPet
      )
    );

}


/* =========================================================
   ADD PET
========================================================= */

function confirmAddPet() {

  if (
    !selectedPet ||
    !pickerSide
  ) {
    return;
  }


  const item = {

    id:
      selectedPet.id,

    name:
      selectedPet.name,

    rarity:
      selectedPet.rarity,

    image:
      selectedPet.image,

    baseValue:
      Number(
        selectedPet.value || 0
      ),

    value:
      getModifiedValue(
        selectedPet
      ),

    form:
      selectedForm,

    fly:
      Boolean(
        selectedPotion.fly
      ),

    ride:
      Boolean(
        selectedPotion.ride
      ),

    uniqueId:
      `${Date.now()}_${Math.random()
        .toString(36)
        .slice(2, 10)}`

  };


  if (
    pickerSide ===
    "you"
  ) {

    youTrade.push(
      item
    );

  }

  else {

    themTrade.push(
      item
    );

  }


  recordedTradeKey =
    "";


  closePetPicker();

  updateTradeUI();

}


/* =========================================================
   CALCULATE TOTAL
========================================================= */

function calculateTotal(
  trade
) {

  if (
    !Array.isArray(
      trade
    )
  ) {

    return 0;

  }


  return trade.reduce(
    (
      total,
      pet
    ) => {

      const value =
        Number(
          pet?.value || 0
        );


      return total +
        (
          Number.isFinite(
            value
          )
            ? value
            : 0
        );

    },
    0
  );

}


/* =========================================================
   TRADE SLOTS
========================================================= */

function renderTradeSide(
  elementId,
  trade,
  side
) {

  const element =
    $(elementId);

  if (!element) {
    return;
  }


  if (
    !trade.length
  ) {

    element.innerHTML = `

      <div class="empty-items trade-empty">

        <span class="empty-plus">
          ＋
        </span>

        <strong>
          Henüz pet eklenmedi
        </strong>

        <small>
          ${
            side === "you"
              ? "Teklifini oluşturmak için pet ekle"
              : "Karşı tarafın teklifini oluştur"
          }
        </small>

      </div>

    `;

    return;
  }


  element.innerHTML =
    trade.map(
      pet => {

        const badges = [];


        if (
          pet.form === "neon"
        ) {

          badges.push(`
            <span class="trade-slot-badge neon">
              N
            </span>
          `);

        }


        if (
          pet.form === "mega"
        ) {

          badges.push(`
            <span class="trade-slot-badge mega">
              M
            </span>
          `);

        }


        if (
          pet.fly
        ) {

          badges.push(`
            <span class="trade-slot-badge fly">
              F
            </span>
          `);

        }


        if (
          pet.ride
        ) {

          badges.push(`
            <span class="trade-slot-badge ride">
              R
            </span>
          `);

        }


        return `

          <div
            class="trade-slot"
            data-trade-id="${escapeHTML(
              pet.uniqueId
            )}"
          >

            <div class="trade-slot-image">

              ${
                pet.form === "neon"
                  ? `
                    <div class="neon-effect"></div>
                  `
                  : ""
              }

              ${
                pet.form === "mega"
                  ? `
                    <div class="mega-effect"></div>
                  `
                  : ""
              }

              ${imageHTML(
                pet,
                "trade-slot-photo"
              )}

              <div class="trade-slot-badges">
                ${badges.join("")}
              </div>

            </div>


            <div
              class="trade-slot-name"
              title="${escapeHTML(
                pet.name
              )}"
            >
              ${escapeHTML(
                pet.name
              )}
            </div>


            <div class="trade-slot-value">
              ${formatValue(
                pet.value
              )}
            </div>


            <button
              type="button"
              class="remove-item"
              data-side="${side}"
              data-id="${escapeHTML(
                pet.uniqueId
              )}"
              aria-label="Pet sil"
            >
              ×
            </button>

          </div>

        `;

      }
    ).join("");

}


/* =========================================================
   REMOVE TRADE PET
========================================================= */

function removeTradePet(
  side,
  uniqueId
) {

  if (
    side === "you"
  ) {

    youTrade =
      youTrade.filter(
        pet =>
          pet.uniqueId !==
          uniqueId
      );

  }

  else if (
    side === "them"
  ) {

    themTrade =
      themTrade.filter(
        pet =>
          pet.uniqueId !==
          uniqueId
      );

  }


  recordedTradeKey =
    "";


  updateTradeUI();

}


/* =========================================================
   CLEAR TRADE
========================================================= */

function clearTrade() {

  youTrade = [];

  themTrade = [];

  recordedTradeKey =
    "";


  updateTradeUI();

}


/* =========================================================
   TRADE UI
========================================================= */

function updateTradeUI() {

  renderTradeSide(
    "youItems",
    youTrade,
    "you"
  );


  renderTradeSide(
    "themItems",
    themTrade,
    "them"
  );


  const youTotal =
    calculateTotal(
      youTrade
    );


  const themTotal =
    calculateTotal(
      themTrade
    );


  const youTotalEl =
    $("youTotal");


  const themTotalEl =
    $("themTotal");


  if (youTotalEl) {

    youTotalEl.textContent =
      formatValue(
        youTotal
      );

  }


  if (themTotalEl) {

    themTotalEl.textContent =
      formatValue(
        themTotal
      );

  }


  updateResult();

}


/* =========================================================
   RESULT / 5 LEVEL WFL
========================================================= */

function updateResult() {

  const resultCard =
    $("resultCard");

  const resultText =
    $("resultStatusText");

  const resultHint =
    $("resultHint");

  const diffNumber =
    $("resultDiffNumber");

  const diffDisplay =
    $("resultDiffDisplay");

  const statusBar =
    $("tradeStatusBar");

  const statusLabel =
    $("tradeStatusLabel");


  const youTotal =
    calculateTotal(
      youTrade
    );


  const themTotal =
    calculateTotal(
      themTrade
    );


  if (
    !youTrade.length ||
    !themTrade.length
  ) {

    if (resultText) {

      resultText.textContent =
        "Pet ekleyerek başla";

    }


    if (resultHint) {

      resultHint.textContent =
        "İki tarafa da pet eklediğinde avantajı burada göreceksin.";

    }


    if (diffNumber) {

      diffNumber.textContent =
        "—";

    }


    if (diffDisplay) {

      diffDisplay.textContent =
        "—";

    }


    if (statusLabel) {

      statusLabel.textContent =
        "TRADE HAZIR";

    }


    if (resultCard) {

      resultCard.className =
        "result-card trade-result-card";

    }


    if (statusBar) {

      statusBar.className =
        "trade-status-bar";

    }


    return;

  }


  const difference =
    themTotal -
    youTotal;


  const percent =
    youTotal > 0
      ? (
          difference /
          youTotal
        ) * 100
      : 0;


  const roundedPercent =
    Math.round(
      percent * 10
    ) / 10;


  let diffText =
    "0%";


  if (
    roundedPercent > 0
  ) {

    diffText =
      `+${roundedPercent.toFixed(1)}%`;

  }

  else if (
    roundedPercent < 0
  ) {

    diffText =
      `${roundedPercent.toFixed(1)}%`;

  }


  if (diffNumber) {

    diffNumber.textContent =
      diffText;

  }


  if (diffDisplay) {

    diffDisplay.textContent =
      diffText;

  }


  let status =
    "FAIR";

  let title =
    "Adil Takas";

  let hint =
    "İki tarafın verdiği değerler neredeyse eşit.";

  let resultClass =
    "fair";

  let statusClass =
    "fair";


  /* FAIR */

  if (
    Math.abs(percent) <=
    3
  ) {

    status =
      "FAIR";

    title =
      "Adil Takas";

    hint =
      "İki tarafın verdiği değerler neredeyse eşit.";

    resultClass =
      "fair";

    statusClass =
      "fair";

  }


  /* WIN */

  else if (
    percent > 0
  ) {

    if (
      percent >= 10
    ) {

      status =
        "BIG WIN";

      title =
        "Büyük Win!";

      hint =
        "Karşı taraf belirgin şekilde daha fazla değer veriyor.";

      resultClass =
        "big-win";

      statusClass =
        "big-win";

    }

    else {

      status =
        "SMALL WIN";

      title =
        "Küçük Win";

      hint =
        "Karşı taraf biraz daha fazla değer veriyor.";

      resultClass =
        "small-win";

      statusClass =
        "small-win";

    }

  }


  /* LOSE */

  else {

    if (
      Math.abs(percent) >=
      10
    ) {

      status =
        "BIG LOSE";

      title =
        "Büyük Lose";

      hint =
        "Sen belirgin şekilde daha fazla değer veriyorsun.";

      resultClass =
        "big-lose";

      statusClass =
        "big-lose";

    }

    else {

      status =
        "SMALL LOSE";

      title =
        "Küçük Lose";

      hint =
        "Sen biraz daha fazla değer veriyorsun.";

      resultClass =
        "small-lose";

      statusClass =
        "small-lose";

    }

  }


  if (resultText) {

    resultText.textContent =
      title;

  }


  if (resultHint) {

    resultHint.textContent =
      hint;

  }


  if (statusLabel) {

    statusLabel.textContent =
      status;

  }


  if (resultCard) {

    resultCard.className =
      `result-card trade-result-card ${resultClass}`;

  }


  if (statusBar) {

    statusBar.className =
      `trade-status-bar ${statusClass}`;

  }


  recordTradeResult(
    status
  );

}


/* =========================================================
   RECORD RESULT
========================================================= */

function recordTradeResult(
  status
) {

  const youTotal =
    calculateTotal(
      youTrade
    );


  if (
    !youTrade.length ||
    !themTrade.length ||
    youTotal <= 0
  ) {

    return;

  }


  const key =
    JSON.stringify({
      you:
        youTrade.map(
          pet => ({
            id:
              pet.uniqueId,

            value:
              pet.value
          })
        ),

      them:
        themTrade.map(
          pet => ({
            id:
              pet.uniqueId,

            value:
              pet.value
          })
        ),

      status
    });


  if (
    recordedTradeKey ===
    key
  ) {

    return;

  }


  recordedTradeKey =
    key;


  const stats =
    getTradeStats();


  if (
    status === "BIG WIN" ||
    status === "SMALL WIN"
  ) {

    stats.wins++;

  }

  else if (
    status === "FAIR"
  ) {

    stats.fair++;

  }

  else if (
    status === "BIG LOSE" ||
    status === "SMALL LOSE"
  ) {

    stats.loses++;

  }


  saveTradeStats(
    stats
  );


  updateProfileStats();

}


/* =========================================================
   PROFILE STATS
========================================================= */

function updateProfileStats() {

  const stats =
    getTradeStats();


  const total =
    stats.wins +
    stats.fair +
    stats.loses;


  if ($("profileWins")) {

    $("profileWins").textContent =
      stats.wins;

  }


  if ($("profileFair")) {

    $("profileFair").textContent =
      stats.fair;

  }


  if ($("profileLoses")) {

    $("profileLoses").textContent =
      stats.loses;

  }


  if ($("profileTrades")) {

    $("profileTrades").textContent =
      total;

  }

}


/* =========================================================
   PROFILE
========================================================= */

function renderProfile() {

  const profile =
    getProfileData();


  /* PROFILE LABEL */

  const profileModal =
    $("profileModal");


  profileModal
    ?.querySelectorAll(
      ".profile-eyebrow"
    )
    .forEach(
      element => {

        element.textContent =
          "PROFILE";

      }
    );


  /* NAME */

  if ($("profileName")) {

    $("profileName").textContent =
      profile.name;

  }


  /* USERNAME */

  if ($("profileUsername")) {

    $("profileUsername").textContent =
      profile.username;

  }


  /* BIO */

  if ($("profileBio")) {

    $("profileBio").textContent =
      profile.bio;

  }


  /* AVATAR */

  if ($("profileAvatar")) {

    $("profileAvatar").textContent =
      profile.avatar;

  }


  /* EDIT FORM */

  if ($("editName")) {

    $("editName").value =
      profile.name;

  }


  if ($("editUsername")) {

    $("editUsername").value =
      profile.username;

  }


  if ($("editBio")) {

    $("editBio").value =
      profile.bio;

  }


  selectedAvatar =
    profile.avatar;


  renderAvatarPicker();

  updateProfileStats();

}


/* =========================================================
   OPEN PROFILE
========================================================= */

function openProfile() {

  const modal =
    $("profileModal");

  if (!modal) {
    return;
  }


  renderProfile();


  modal.classList.add(
    "show"
  );

  modal.classList.add(
    "active"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );

}


/* =========================================================
   CLOSE PROFILE
========================================================= */

function closeProfile() {

  const modal =
    $("profileModal");

  if (!modal) {
    return;
  }


  modal.classList.remove(
    "show"
  );

  modal.classList.remove(
    "active"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   EDIT PROFILE
========================================================= */

function openEditProfile() {

  const form =
    $("profileEditForm");

  const button =
    $("profileEditBtn");


  renderProfile();


  form?.classList.remove(
    "hidden"
  );

  button?.classList.add(
    "hidden"
  );

}


function closeEditProfile() {

  const form =
    $("profileEditForm");

  const button =
    $("profileEditBtn");


  form?.classList.add(
    "hidden"
  );

  button?.classList.remove(
    "hidden"
  );

}


/* =========================================================
   AVATAR
========================================================= */

function renderAvatarPicker() {

  const box =
    $("avatarPick");

  if (!box) {
    return;
  }


  const avatars = [
    "🐉",
    "🐲",
    "🦊",
    "🐺",
    "🦁",
    "🐯",
    "🦄",
    "🐸",
    "🐼",
    "🐵",
    "🐨",
    "🐰"
  ];


  box.innerHTML =
    avatars.map(
      avatar => `

        <button
          type="button"
          class="avatar-opt ${
            selectedAvatar ===
            avatar
              ? "active"
              : ""
          }"
          data-avatar="${avatar}"
        >
          ${avatar}
        </button>

      `
    ).join("");


  box
    .querySelectorAll(
      ".avatar-opt"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            selectedAvatar =
              button.dataset.avatar ||
              "🐉";


            box
              .querySelectorAll(
                ".avatar-opt"
              )
              .forEach(
                item => {

                  item.classList.remove(
                    "active"
                  );

                }
              );


            button.classList.add(
              "active"
            );

          }
        );

      }
    );

}


/* =========================================================
   SAVE PROFILE
========================================================= */

function saveEditedProfile(
  event
) {

  event.preventDefault();


  const name =
    $("editName")?.value
      .trim() ||
    "Zayaxra Kullanıcısı";


  let username =
    $("editUsername")?.value
      .trim() ||
    "@kullanici";


  if (
    !username.startsWith("@")
  ) {

    username =
      "@" +
      username;

  }


  const bio =
    $("editBio")?.value
      .trim() ||
    "Henüz bir biyografi eklenmedi.";


  saveProfileData({
    name,
    username,
    bio,
    avatar:
      selectedAvatar ||
      "🐉"
  });


  renderProfile();

  closeEditProfile();

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

  document.body.classList.toggle(
    "menu-open"
  );


  const button =
    $("menuButton");


  if (button) {

    button.setAttribute(
      "aria-expanded",
      document.body.classList.contains(
        "menu-open"
      )
    );

  }

}


function closeMenu() {

  document.body.classList.remove(
    "menu-open"
  );

}


/* =========================================================
   NAVIGATION
========================================================= */

function scrollToSection(
  id
) {

  const element =
    $(id);

  if (!element) {
    return;
  }


  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });


  closeMenu();

}


function initNavigation() {

  document
    .querySelectorAll(
      "[data-scroll]"
    )
    .forEach(
      link => {

        link.addEventListener(
          "click",
          event => {

            event.preventDefault();


            const target =
              link.dataset.scroll;


            if (
              target === "top"
            ) {

              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });


              closeMenu();

              return;

            }


            scrollToSection(
              target
            );

          }
        );

      }
    );


  const logo =
    document.querySelector(
      ".logo"
    );


  logo?.addEventListener(
    "click",
    event => {

      event.preventDefault();


      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });


      closeMenu();

    }
  );

}


/* =========================================================
   NAVBAR
========================================================= */

function initNavbar() {

  const navbar =
    document.querySelector(
      ".navbar"
    );

  if (!navbar) {
    return;
  }


  const update =
    () => {

      navbar.classList.toggle(
        "scrolled",
        window.scrollY >
          30
      );

    };


  update();


  window.addEventListener(
    "scroll",
    update,
    {
      passive: true
    }
  );

}


/* =========================================================
   SEARCH
========================================================= */

function initSearch() {

  const search =
    $("search");

  if (!search) {
    return;
  }


  if (
    typeof renderValues ===
    "function"
  ) {

    search.addEventListener(
      "input",
      renderValues
    );

  }

}


/* =========================================================
   PICKER SEARCH EVENT
========================================================= */

function initPickerSearch() {

  const search =
    $("petSearch");

  if (!search) {
    return;
  }


  search.addEventListener(
    "input",
    filterPickerPets
  );

}


/* =========================================================
   REMOVE EVENT
========================================================= */

function initRemoveTradeEvents() {

  document.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest(
          ".remove-item"
        );


      if (!button) {
        return;
      }


      event.preventDefault();

      event.stopPropagation();


      removeTradePet(
        button.dataset.side,
        button.dataset.id
      );

    }
  );

}


/* =========================================================
   CLEAR EVENT
========================================================= */

function initClearTrade() {

  const button =
    $("clearBtn");

  if (!button) {
    return;
  }


  button.addEventListener(
    "click",
    event => {

      event.preventDefault();

      clearTrade();

    }
  );

}


/* =========================================================
   MODAL EVENTS
========================================================= */

function initModalEvents() {

  const picker =
    $("petPicker");

  const profile =
    $("profileModal");


  picker?.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        picker
      ) {

        closePetPicker();

      }

    }
  );


  profile?.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        profile
      ) {

        closeProfile();

      }

    }
  );

}


/* =========================================================
   KEYBOARD
========================================================= */

function initKeyboard() {

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key ===
        "Escape"
      ) {

        closePetPicker();

        closeProfile();

        closeMenu();

        closeEditProfile();

      }

    }
  );

}


/* =========================================================
   VISIBILITY
========================================================= */

function initVisibility() {

  document.addEventListener(
    "visibilitychange",
    () => {

      if (
        document.visibilityState ===
        "visible"
      ) {

        updateTradeUI();

        updateProfileStats();

      }

    }
  );

}


/* =========================================================
   DATABASE CHECK
========================================================= */

function validateDatabase() {

  if (
    !Array.isArray(
      PET_DATABASE
    )
  ) {

    console.error(
      "ZAYAXRA: PET_DATABASE bulunamadı."
    );

    return;

  }


  PET_DATABASE.forEach(
    (
      pet,
      index
    ) => {

      if (
        !pet.name
      ) {

        console.warn(
          `ZAYAXRA: ${index}. petin adı eksik.`
        );

      }


      if (
        typeof pet.value !==
        "number"
      ) {

        console.warn(
          `ZAYAXRA: ${pet.name || index} değerinde sorun var.`
        );

      }


      if (
        !pet.image
      ) {

        console.warn(
          `ZAYAXRA: ${pet.name || index} için image yok.`
        );

      }

    }
  );

}


/* =========================================================
   INIT
========================================================= */

function initZayaxra() {

  /* ESki ZAYAGG profilini bir kere temizle */
  migrateLegacyProfile();


  ensureStorageData();

  validateDatabase();

  updateProfileStats();

  renderProfile();

  updateTradeUI();

  initSearch();

  initPickerSearch();

  initRemoveTradeEvents();

  initClearTrade();

  initNavigation();

  initNavbar();

  initModalEvents();

  initKeyboard();

  initVisibility();


  console.log(
    "ZAYAXRA başarıyla başlatıldı."
  );

}


/* =========================================================
   START
========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initZayaxra,
    {
      once: true
    }
  );

}

else {

  initZayaxra();

}


/* =========================================================
   ERROR HANDLERS
========================================================= */

window.addEventListener(
  "error",
  event => {

    console.error(
      "ZAYAXRA JavaScript hatası:",
      event.error ||
      event.message
    );

  }
);


window.addEventListener(
  "unhandledrejection",
  event => {

    console.error(
      "ZAYAXRA Promise hatası:",
      event.reason
    );

  }
);
function toggleZayaxraInfo() {

  const button =
    document.querySelector(
      ".info-toggle"
    );

  const panel =
    $("zayaxraInfoPanel");

  if (!button || !panel) {
    return;
  }


  const isOpen =
    panel.classList.toggle(
      "open"
    );


  button.classList.toggle(
    "active",
    isOpen
  );


  button.setAttribute(
    "aria-expanded",
    isOpen
      ? "true"
      : "false"
  );

}
/* =========================================================
   INFO MODAL
========================================================= */

function openInfo(event) {

  if (event) {
    event.preventDefault();
  }

  const modal =
    $("infoModal");

  if (!modal) {
    return;
  }

  modal.classList.add("show");
  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );
}


function closeInfo() {

  const modal =
    $("infoModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("show");
  modal.classList.remove("active");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "modal-open"
  );
}
