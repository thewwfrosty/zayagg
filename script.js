/* =========================================================
   ZAYAXRA — COMPLETE SCRIPT
   ========================================================= */

const PET_DATABASE = [
  {id:'shadow_dragon',name:'Shadow Dragon',rarity:'legendary',value:125,image:'https://cdn.playadopt.me/items/shadow_dragon.png'},
  {id:'bat_dragon',name:'Bat Dragon',rarity:'legendary',value:110,image:'https://cdn.playadopt.me/items/bat_dragon.png'},
  {id:'giraffe',name:'Giraffe',rarity:'legendary',value:70,image:'https://cdn.playadopt.me/items/giraffe.png'},
  {id:'frost_dragon',name:'Frost Dragon',rarity:'legendary',value:58,image:'https://cdn.playadopt.me/items/frost_dragon.png'},
  {id:'owl',name:'Owl',rarity:'legendary',value:42,image:'https://cdn.playadopt.me/items/owl.png'},
  {id:'parrot',name:'Parrot',rarity:'legendary',value:38,image:'https://cdn.playadopt.me/items/parrot.png'},
  {id:'evil_unicorn',name:'Evil Unicorn',rarity:'legendary',value:32,image:'https://cdn.playadopt.me/items/evil_unicorn.png'},
  {id:'crow',name:'Crow',rarity:'legendary',value:28,image:'https://cdn.playadopt.me/items/crow.png'},
  {id:'frost_fury',name:'Frost Fury',rarity:'legendary',value:16,image:'https://cdn.playadopt.me/items/frost_fury.png'},
  {id:'arctic_reindeer',name:'Arctic Reindeer',rarity:'legendary',value:15,image:'https://cdn.playadopt.me/items/arctic_reindeer.png'},
  {id:'diamond_butterfly',name:'Diamond Butterfly',rarity:'legendary',value:15,image:'https://cdn.playadopt.me/items/diamond_butterfly.png'},
  {id:'turtle',name:'Turtle',rarity:'ultra',value:12,image:'https://cdn.playadopt.me/items/turtle.png'},
  {id:'kangaroo',name:'Kangaroo',rarity:'legendary',value:11,image:'https://cdn.playadopt.me/items/kangaroo.png'},
  {id:'albino_monkey',name:'Albino Monkey',rarity:'legendary',value:10,image:'https://cdn.playadopt.me/items/albino_monkey.png'},
  {id:'lion',name:'Lion',rarity:'ultra',value:9,image:'https://cdn.playadopt.me/items/lion.png'},
  {id:'hedgehog',name:'Hedgehog',rarity:'ultra',value:9,image:'https://cdn.playadopt.me/items/hedgehog.png'},
  {id:'flamingo',name:'Flamingo',rarity:'ultra',value:8,image:'https://cdn.playadopt.me/items/flamingo.png'},
  {id:'dalmatian',name:'Dalmatian',rarity:'ultra',value:8,image:'https://cdn.playadopt.me/items/dalmatian.png'},
  {id:'crocodile',name:'Crocodile',rarity:'ultra',value:7,image:'https://cdn.playadopt.me/items/crocodile.png'},
  {id:'elephant',name:'Elephant',rarity:'ultra',value:7,image:'https://cdn.playadopt.me/items/elephant.png'},
  {id:'cow',name:'Cow',rarity:'ultra',value:7,image:'https://cdn.playadopt.me/items/cow.png'},
  {id:'brown_bear',name:'Brown Bear',rarity:'rare',value:6,image:'https://cdn.playadopt.me/items/brown_bear.png'},
  {id:'pink_cat',name:'Pink Cat',rarity:'rare',value:6,image:'https://cdn.playadopt.me/items/pink_cat.png'},
  {id:'blue_dog',name:'Blue Dog',rarity:'rare',value:6,image:'https://cdn.playadopt.me/items/blue_dog.png'},
  {id:'meerkat',name:'Meerkat',rarity:'rare',value:5,image:'https://cdn.playadopt.me/items/meerkat.png'},
  {id:'rhino',name:'Rhino',rarity:'rare',value:5,image:'https://cdn.playadopt.me/items/rhino.png'},
  {id:'hyena',name:'Hyena',rarity:'rare',value:5,image:'https://cdn.playadopt.me/items/hyena.png'},
  {id:'black_panther',name:'Black Panther',rarity:'uncommon',value:5,image:'https://cdn.playadopt.me/items/black_panther.png'},
  {id:'platypus',name:'Platypus',rarity:'ultra',value:4.5,image:'https://cdn.playadopt.me/items/platypus.png'},
  {id:'goat',name:'Goat',rarity:'ultra',value:4.5,image:'https://cdn.playadopt.me/items/goat.png'},
  {id:'swan',name:'Swan',rarity:'rare',value:4,image:'https://cdn.playadopt.me/items/swan.png'},
  {id:'ancient_dragon',name:'Ancient Dragon',rarity:'legendary',value:4,image:'https://cdn.playadopt.me/items/ancient_dragon.png'},
  {id:'unicorn',name:'Unicorn',rarity:'legendary',value:3.5,image:'https://cdn.playadopt.me/items/unicorn.png'},
  {id:'dragon',name:'Dragon',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/dragon.png'},
  {id:'golden_dragon',name:'Golden Dragon',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/golden_dragon.png'},
  {id:'golden_unicorn',name:'Golden Unicorn',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/golden_unicorn.png'},
  {id:'golden_penguin',name:'Golden Penguin',rarity:'legendary',value:2.8,image:'https://cdn.playadopt.me/items/golden_penguin.png'},
  {id:'king_bee',name:'King Bee',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/king_bee.png'},
  {id:'queen_bee',name:'Queen Bee',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/queen_bee.png'},
  {id:'kitsune',name:'Kitsune',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/kitsune.png'},
  {id:'octopus',name:'Octopus',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/octopus.png'},
  {id:'shark',name:'Shark',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/shark.png'},
  {id:'dodo',name:'Dodo',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/dodo.png'},
  {id:'trex',name:'T-Rex',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/t_rex.png'},
  {id:'skele_rex',name:'Skele-Rex',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/skele_rex.png'},
  {id:'lavender_dragon',name:'Lavender Dragon',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/lavender_dragon.png'},
  {id:'lava_dragon',name:'Lava Dragon',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/lava_dragon.png'},
  {id:'phoenix',name:'Phoenix',rarity:'legendary',value:2,image:'https://cdn.playadopt.me/items/phoenix.png'},
  {id:'golden_rat',name:'Golden Rat',rarity:'legendary',value:2,image:'https://cdn.playadopt.me/items/golden_rat.png'},
  {id:'metal_ox',name:'Metal Ox',rarity:'legendary',value:1.5,image:'https://cdn.playadopt.me/items/metal_ox.png'},
  {id:'king_penguin',name:'King Penguin',rarity:'legendary',value:1.8,image:'https://cdn.playadopt.me/items/king_penguin.png'},
  {id:'snow_owl',name:'Snow Owl',rarity:'legendary',value:2,image:'https://cdn.playadopt.me/items/snow_owl.png'},
  {id:'goldhorn',name:'Goldhorn',rarity:'legendary',value:1.8,image:'https://cdn.playadopt.me/items/goldhorn.png'},
  {id:'griffin',name:'Griffin',rarity:'legendary',value:1.2,image:'https://cdn.playadopt.me/items/griffin.png'},
  {id:'albino_bat',name:'Albino Bat',rarity:'ultra',value:3,image:'https://cdn.playadopt.me/items/albino_bat.png'},
  {id:'business_monkey',name:'Business Monkey',rarity:'ultra',value:2,image:'https://cdn.playadopt.me/items/business_monkey.png'},
  {id:'ghost_bunny',name:'Ghost Bunny',rarity:'ultra',value:2,image:'https://cdn.playadopt.me/items/ghost_bunny.png'},
  {id:'ginger_cat',name:'Ginger Cat',rarity:'ultra',value:1.2,image:'https://cdn.playadopt.me/items/ginger_cat.png'},
  {id:'panda',name:'Panda',rarity:'ultra',value:1.2,image:'https://cdn.playadopt.me/items/panda.png'},
  {id:'red_panda',name:'Red Panda',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/red_panda.png'},
  {id:'bee',name:'Bee',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/bee.png'},
  {id:'penguin',name:'Penguin',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/penguin.png'},
  {id:'toucan',name:'Toucan',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/toucan.png'},
  {id:'starfish',name:'Starfish',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/starfish.png'},
  {id:'koala',name:'Koala',rarity:'ultra',value:1.5,image:'https://cdn.playadopt.me/items/koala.png'},
  {id:'frog',name:'Frog',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/frog.png'},
  {id:'sloth',name:'Sloth',rarity:'ultra',value:.8,image:'https://cdn.playadopt.me/items/sloth.png'},
  {id:'polar_bear',name:'Polar Bear',rarity:'rare',value:3.5,image:'https://cdn.playadopt.me/items/polar_bear.png'},
  {id:'reindeer',name:'Reindeer',rarity:'rare',value:3,image:'https://cdn.playadopt.me/items/reindeer.png'},
  {id:'rabbit',name:'Rabbit',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/rabbit.png'},
  {id:'monkey',name:'Monkey',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/monkey.png'},
  {id:'bunny',name:'Bunny',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/bunny.png'},
  {id:'emu',name:'Emu',rarity:'rare',value:.8,image:'https://cdn.playadopt.me/items/emu.png'},
  {id:'beaver',name:'Beaver',rarity:'rare',value:.6,image:'https://cdn.playadopt.me/items/beaver.png'},
  {id:'musk_ox',name:'Musk Ox',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/musk_ox.png'},
  {id:'woolly_mammoth',name:'Woolly Mammoth',rarity:'rare',value:.8,image:'https://cdn.playadopt.me/items/woolly_mammoth.png'},
  {id:'dilophosaurus',name:'Dilophosaurus',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/dilophosaurus.png'},
  {id:'stegosaurus',name:'Stegosaurus',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/stegosaurus.png'},
  {id:'triceratops',name:'Triceratops',rarity:'rare',value:.6,image:'https://cdn.playadopt.me/items/triceratops.png'},
  {id:'shrew',name:'Shrew',rarity:'uncommon',value:3,image:'https://cdn.playadopt.me/items/shrew.png'},
  {id:'megalodon',name:'Megalodon',rarity:'uncommon',value:1,image:'https://cdn.playadopt.me/items/megalodon.png'},
  {id:'bat',name:'Bat',rarity:'uncommon',value:.5,image:'https://cdn.playadopt.me/items/bat.png'},
  {id:'snow_cat',name:'Snow Cat',rarity:'uncommon',value:.3,image:'https://cdn.playadopt.me/items/snow_cat.png'},
  {id:'fennec_fox',name:'Fennec Fox',rarity:'uncommon',value:.3,image:'https://cdn.playadopt.me/items/fennec_fox.png'},
  {id:'red_fox',name:'Red Fox',rarity:'uncommon',value:.4,image:'https://cdn.playadopt.me/items/red_fox.png'},
  {id:'shiba_inu',name:'Shiba Inu',rarity:'uncommon',value:.3,image:'https://cdn.playadopt.me/items/shiba_inu.png'},
  {id:'dingo',name:'Dingo',rarity:'uncommon',value:.3,image:'https://cdn.playadopt.me/items/dingo.png'},
  {id:'snow_puma',name:'Snow Puma',rarity:'uncommon',value:.3,image:'https://cdn.playadopt.me/items/snow_puma.png'},
  {id:'puma',name:'Puma',rarity:'uncommon',value:.2,image:'https://cdn.playadopt.me/items/puma.png'},
  {id:'cat',name:'Cat',rarity:'common',value:.1,image:'https://cdn.playadopt.me/items/cat.png'},
  {id:'dog',name:'Dog',rarity:'common',value:.1,image:'https://cdn.playadopt.me/items/dog.png'},
  {id:'mouse',name:'Mouse',rarity:'common',value:.1,image:'https://cdn.playadopt.me/items/mouse.png'},
  {id:'chick',name:'Chick',rarity:'common',value:.15,image:'https://cdn.playadopt.me/items/chick.png'},
  {id:'robin',name:'Robin',rarity:'common',value:.2,image:'https://cdn.playadopt.me/items/robin.png'},
  {id:'chicken',name:'Chicken',rarity:'common',value:.3,image:'https://cdn.playadopt.me/items/chicken.png'},
  {id:'bandicoot',name:'Bandicoot',rarity:'common',value:.2,image:'https://cdn.playadopt.me/items/bandicoot.png'},
  {id:'ground_sloth',name:'Ground Sloth',rarity:'common',value:.2,image:'https://cdn.playadopt.me/items/ground_sloth.png'},
  {id:'wolpertinger',name:'Wolpertinger',rarity:'common',value:.2,image:'https://cdn.playadopt.me/items/wolpertinger.png'},
  {id:'otter',name:'Otter',rarity:'common',value:.2,image:'https://cdn.playadopt.me/items/otter.png'},
  {id:'buffalo',name:'Buffalo',rarity:'common',value:.15,image:'https://cdn.playadopt.me/items/buffalo.png'},
  {id:'cracked_egg',name:'Cracked Egg',rarity:'common',value:.1,image:'https://cdn.playadopt.me/items/cracked_egg.png'},
  {id:'grim_dragon',name:'Grim Dragon',rarity:'legendary',value:2.2,image:'https://cdn.playadopt.me/items/grim_dragon.png'},
  {id:'frost_phoenix',name:'Frost Phoenix',rarity:'legendary',value:2.2,image:'https://cdn.playadopt.me/items/frost_phoenix.png'},
  {id:'arctic_dusk_dragon',name:'Arctic Dusk Dragon',rarity:'legendary',value:2,image:'https://cdn.playadopt.me/items/arctic_dusk_dragon.png'},
  {id:'christmas_spirit',name:'Christmas Spirit',rarity:'legendary',value:1.6,image:'https://cdn.playadopt.me/items/christmas_spirit.png'},
  {id:'diamond_griffin',name:'Diamond Griffin',rarity:'legendary',value:2.2,image:'https://cdn.playadopt.me/items/diamond_griffin.png'},
  {id:'golden_ladybug',name:'Golden Ladybug',rarity:'ultra',value:1.5,image:'https://cdn.playadopt.me/items/golden_ladybug.png'},
  {id:'golden_king_penguin',name:'Golden King Penguin',rarity:'legendary',value:1.5,image:'https://cdn.playadopt.me/items/golden_king_penguin.png'},
  {id:'golden_hummingbird',name:'Golden Hummingbird',rarity:'legendary',value:1.2,image:'https://cdn.playadopt.me/items/golden_hummingbird.png'},
  {id:'golden_tortoise_beetle',name:'Golden Tortoise Beetle',rarity:'legendary',value:.8,image:'https://cdn.playadopt.me/items/golden_tortoise_beetle.png'},
  {id:'albino_gorilla',name:'Albino Gorilla',rarity:'legendary',value:4,image:'https://cdn.playadopt.me/items/albino_gorilla.png'},
  {id:'alicorn',name:'Alicorn',rarity:'legendary',value:1.8,image:'https://cdn.playadopt.me/items/alicorn.png'},
  {id:'axolotl',name:'Axolotl',rarity:'ultra',value:1.2,image:'https://cdn.playadopt.me/items/axolotl.png'},
  {id:'capuchin_monkey',name:'Capuchin Monkey',rarity:'rare',value:.9,image:'https://cdn.playadopt.me/items/capuchin_monkey.png'},
  {id:'cerberus',name:'Cerberus',rarity:'legendary',value:.8,image:'https://cdn.playadopt.me/items/cerberus.png'},
  {id:'chimera',name:'Chimera',rarity:'legendary',value:.8,image:'https://cdn.playadopt.me/items/chimera.png'},
  {id:'dancing_dragon',name:'Dancing Dragon',rarity:'legendary',value:1.8,image:'https://cdn.playadopt.me/items/dancing_dragon.png'},
  {id:'ghost_dragon',name:'Ghost Dragon',rarity:'legendary',value:2,image:'https://cdn.playadopt.me/items/ghost_dragon.png'},
  {id:'winged_horse',name:'Winged Horse',rarity:'legendary',value:1.5,image:'https://cdn.playadopt.me/items/winged_horse.png'},
  {id:'guardian_lion',name:'Guardian Lion',rarity:'legendary',value:1.5,image:'https://cdn.playadopt.me/items/guardian_lion.png'},
  {id:'hydra',name:'Hydra',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/hydra.png'},
  {id:'hawk',name:'Hawk',rarity:'ultra',value:.8,image:'https://cdn.playadopt.me/items/hawk.png'},
  {id:'ice_moth_dragon',name:'Ice Moth Dragon',rarity:'legendary',value:1,image:'https://cdn.playadopt.me/items/ice_moth_dragon.png'},
  {id:'lava_wolf',name:'Lava Wolf',rarity:'ultra',value:.9,image:'https://cdn.playadopt.me/items/lava_wolf.png'},
  {id:'robo_dog',name:'Robo Dog',rarity:'ultra',value:.4,image:'https://cdn.playadopt.me/items/robo_dog.png'},
  {id:'golden_walrus',name:'Golden Walrus',rarity:'legendary',value:.9,image:'https://cdn.playadopt.me/items/golden_walrus.png'},
  {id:'goose',name:'Goose',rarity:'rare',value:.8,image:'https://cdn.playadopt.me/items/goose.png'},
  {id:'border_collie',name:'Border Collie',rarity:'rare',value:.8,image:'https://cdn.playadopt.me/items/border_collie.png'},
  {id:'pig',name:'Pig',rarity:'rare',value:3,image:'https://cdn.playadopt.me/items/pig.png'},
  {id:'sheep',name:'Sheep',rarity:'rare',value:.9,image:'https://cdn.playadopt.me/items/sheep.png'},
  {id:'lamb',name:'Lamb',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/lamb.png'},
  {id:'llama',name:'Llama',rarity:'rare',value:2.5,image:'https://cdn.playadopt.me/items/llama.png'},
  {id:'sasquatch',name:'Sasquatch',rarity:'rare',value:1,image:'https://cdn.playadopt.me/items/sasquatch.png'},
  {id:'silly_duck',name:'Silly Duck',rarity:'rare',value:1.5,image:'https://cdn.playadopt.me/items/silly_duck.png'},
  {id:'fallow_deer',name:'Fallow Deer',rarity:'ultra',value:1.2,image:'https://cdn.playadopt.me/items/fallow_deer.png'},
  {id:'zombie_buffalo',name:'Zombie Buffalo',rarity:'ultra',value:3,image:'https://cdn.playadopt.me/items/zombie_buffalo.png'},
  {id:'black_mummy_cat',name:'Black Mummy Cat',rarity:'rare',value:1,image:'https://cdn.playadopt.me/items/black_mummy_cat.png'},
  {id:'field_mouse',name:'Field Mouse',rarity:'ultra',value:2,image:'https://cdn.playadopt.me/items/field_mouse.png'},
  {id:'magma_moose',name:'Magma Moose',rarity:'rare',value:.8,image:'https://cdn.playadopt.me/items/magma_moose.png'},
  {id:'diamond_hummingbird',name:'Diamond Hummingbird',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/diamond_hummingbird.png'},
  {id:'frost_unicorn',name:'Frost Unicorn',rarity:'legendary',value:1.5,image:'https://cdn.playadopt.me/items/frost_unicorn.png'},
  {id:'turtle_doves',name:'Turtle Doves',rarity:'rare',value:.8,image:'https://cdn.playadopt.me/items/turtle_doves.png'},
  {id:'samoyed',name:'Samoyed',rarity:'rare',value:.5,image:'https://cdn.playadopt.me/items/samoyed.png'},
  {id:'bunny_swirl',name:'Bunny Swirl',rarity:'ultra',value:1.2,image:'https://cdn.playadopt.me/items/bunny_swirl.png'},
  {id:'cozy_mistletroll',name:'Cozy Mistletroll',rarity:'ultra',value:.8,image:'https://cdn.playadopt.me/items/cozy_mistletroll.png'},
  {id:'maine_coon',name:'Maine Coon',rarity:'ultra',value:.7,image:'https://cdn.playadopt.me/items/maine_coon.png'},
  {id:'japanese_snow_fairy',name:'Japanese Snow Fairy',rarity:'common',value:.3,image:'https://cdn.playadopt.me/items/japanese_snow_fairy.png'},
  {id:'dire_wolf',name:'Dire Wolf',rarity:'ultra',value:.5,image:'https://cdn.playadopt.me/items/dire_wolf.png'},
  {id:'giant_panda',name:'Giant Panda',rarity:'legendary',value:1,image:'https://cdn.playadopt.me/items/giant_panda.png'},
  {id:'peachick',name:'Peachick',rarity:'ultra',value:.5,image:'https://cdn.playadopt.me/items/peachick.png'},
  {id:'peahen',name:'Peahen',rarity:'legendary',value:.8,image:'https://cdn.playadopt.me/items/peahen.png'},
  {id:'moonbeam_peacock',name:'Moonbeam Peacock',rarity:'legendary',value:1.4,image:'https://cdn.playadopt.me/items/moonbeam_peacock.png'},

  /* =========================================================
     ZAYAXRA — COMPLETE OFFICIAL PET CATALOG
     New catalog entries use value: 0 until a verified value is set.
  ========================================================= */

  {
    id: "2021_uplift_butterfly",
    name: "2021 Uplift Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/2021_uplift_butterfly.png"
  },

  {
    id: "2022_uplift_butterfly",
    name: "2022 Uplift Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/2022_uplift_butterfly.png"
  },

  {
    id: "2025_birthday_butterfly",
    name: "2025 Birthday Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/2025_birthday_butterfly.png"
  },

  {
    id: "2026_birthday_butterfly",
    name: "2026 Birthday Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/2026_birthday_butterfly.png"
  },

  {
    id: "2d_doggy",
    name: "2D Doggy",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/2d_doggy.png"
  },

  {
    id: "2d_kitty",
    name: "2D Kitty",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/2d_kitty.png"
  },

  {
    id: "abyssinian_cat",
    name: "Abyssinian Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/abyssinian_cat.png"
  },

  {
    id: "aestus",
    name: "Aestus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/aestus.png"
  },

  {
    id: "african_wild_dog",
    name: "African Wild Dog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/african_wild_dog.png"
  },

  {
    id: "albatross",
    name: "Albatross",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/albatross.png"
  },

  {
    id: "alley_cat",
    name: "Alley Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/alley_cat.png"
  },

  {
    id: "alpaca",
    name: "Alpaca",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/alpaca.png"
  },

  {
    id: "amami_rabbit",
    name: "Amami Rabbit",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/amami_rabbit.png"
  },

  {
    id: "amber_butterfly",
    name: "Amber Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/amber_butterfly.png"
  },

  {
    id: "angelfish",
    name: "Angelfish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/angelfish.png"
  },

  {
    id: "angler_fish",
    name: "Angler Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/angler_fish.png"
  },

  {
    id: "angus_bull",
    name: "Angus Bull",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/angus_bull.png"
  },

  {
    id: "angus_calf",
    name: "Angus Calf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/angus_calf.png"
  },

  {
    id: "angus_cow",
    name: "Angus Cow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/angus_cow.png"
  },

  {
    id: "ankylosaurus",
    name: "Ankylosaurus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ankylosaurus.png"
  },

  {
    id: "ant",
    name: "Ant",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ant.png"
  },

  {
    id: "apple_owl",
    name: "Apple Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/apple_owl.png"
  },

  {
    id: "arctic_fox",
    name: "Arctic Fox",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/arctic_fox.png"
  },

  {
    id: "arctic_hare",
    name: "Arctic Hare",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/arctic_hare.png"
  },

  {
    id: "arctic_tern",
    name: "Arctic Tern",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/arctic_tern.png"
  },

  {
    id: "armadillo",
    name: "Armadillo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/armadillo.png"
  },

  {
    id: "ash_zebra",
    name: "Ash Zebra",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ash_zebra.png"
  },

  {
    id: "astronaut_gorilla",
    name: "Astronaut Gorilla",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/astronaut_gorilla.png"
  },

  {
    id: "aurora_fox",
    name: "Aurora Fox",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/aurora_fox.png"
  },

  {
    id: "australian_kelpie",
    name: "Australian Kelpie",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/australian_kelpie.png"
  },

  {
    id: "aye_aye",
    name: "Aye Aye",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/aye_aye.png"
  },

  {
    id: "badger",
    name: "Badger",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/badger.png"
  },

  {
    id: "bakeneko",
    name: "Bakeneko",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/bakeneko.png"
  },

  {
    id: "baku",
    name: "Baku",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/baku.png"
  },

  {
    id: "bald_eagle",
    name: "Bald Eagle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/bald_eagle.png"
  },

  {
    id: "bali_starling",
    name: "Bali Starling",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/bali_starling.png"
  },

  {
    id: "balloon_unicorn",
    name: "Balloon Unicorn",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/balloon_unicorn.png"
  },

  {
    id: "banded_palm_civet",
    name: "Banded Palm Civet",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/banded_palm_civet.png"
  },

  {
    id: "basilisk",
    name: "Basilisk",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/basilisk.png"
  },

  {
    id: "bauble_buddies",
    name: "Bauble Buddies",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/bauble_buddies.png"
  },

  {
    id: "beluga_whale",
    name: "Beluga Whale",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/beluga_whale.png"
  },

  {
    id: "berry_cool_cube",
    name: "Berry Cool Cube",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/berry_cool_cube.png"
  },

  {
    id: "billy_goat",
    name: "Billy Goat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/billy_goat.png"
  },

  {
    id: "binturong",
    name: "Binturong",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/binturong.png"
  },

  {
    id: "bird_of_paradise",
    name: "Bird of Paradise",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/bird_of_paradise.png"
  },

  {
    id: "birthday_butterfly_2023",
    name: "Birthday Butterfly 2023",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/birthday_butterfly_2023.png"
  },

  {
    id: "birthday_butterfly_2024",
    name: "Birthday Butterfly 2024",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/birthday_butterfly_2024.png"
  },

  {
    id: "bison",
    name: "Bison",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/bison.png"
  },

  {
    id: "black_chow_chow",
    name: "Black Chow-Chow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/black_chow_chow.png"
  },

  {
    id: "black_kite",
    name: "Black Kite",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/black_kite.png"
  },

  {
    id: "black_macaque",
    name: "Black Macaque",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/black_macaque.png"
  },

  {
    id: "black_marlin",
    name: "Black Marlin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/black_marlin.png"
  },

  {
    id: "black_moon_bear",
    name: "Black Moon Bear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/black_moon_bear.png"
  },

  {
    id: "black_rhino",
    name: "Black Rhino",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/black_rhino.png"
  },

  {
    id: "black_springer_spaniel",
    name: "Black Springer Spaniel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/black_springer_spaniel.png"
  },

  {
    id: "black_tiger",
    name: "Black Tiger",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/black_tiger.png"
  },

  {
    id: "black_widow",
    name: "Black Widow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/black_widow.png"
  },

  {
    id: "black_chested_pheasant",
    name: "Black-Chested Pheasant",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/black_chested_pheasant.png"
  },

  {
    id: "black_footed_ferret",
    name: "Black-Footed Ferret",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/black_footed_ferret.png"
  },

  {
    id: "blazing_lion",
    name: "Blazing Lion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/blazing_lion.png"
  },

  {
    id: "bloodhound",
    name: "Bloodhound",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/bloodhound.png"
  },

  {
    id: "blossom_snake",
    name: "Blossom Snake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/blossom_snake.png"
  },

  {
    id: "blue_betta_fish",
    name: "Blue Betta Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/blue_betta_fish.png"
  },

  {
    id: "blue_butterfly",
    name: "Blue Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/blue_butterfly.png"
  },

  {
    id: "blue_jay",
    name: "Blue Jay",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/blue_jay.png"
  },

  {
    id: "blue_ringed_octopus",
    name: "Blue Ringed Octopus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/blue_ringed_octopus.png"
  },

  {
    id: "blue_whale",
    name: "Blue Whale",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/blue_whale.png"
  },

  {
    id: "bluebottle_fly",
    name: "Bluebottle Fly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/bluebottle_fly.png"
  },

  {
    id: "borhyaena_gigantica",
    name: "Borhyaena Gigantica",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/borhyaena_gigantica.png"
  },

  {
    id: "brachiosaurus",
    name: "Brachiosaurus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/brachiosaurus.png"
  },

  {
    id: "brown_springer_spaniel",
    name: "Brown Springer Spaniel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/brown_springer_spaniel.png"
  },

  {
    id: "brown_chested_pheasant",
    name: "Brown-Chested Pheasant",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/brown_chested_pheasant.png"
  },

  {
    id: "budgie_witch",
    name: "Budgie Witch",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/budgie_witch.png"
  },

  {
    id: "bullfrog",
    name: "Bullfrog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/bullfrog.png"
  },

  {
    id: "burger_bear",
    name: "Burger Bear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/burger_bear.png"
  },

  {
    id: "burning_bunny",
    name: "Burning Bunny",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/burning_bunny.png"
  },

  {
    id: "bush_elephant",
    name: "Bush Elephant",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/bush_elephant.png"
  },

  {
    id: "cabbit",
    name: "Cabbit",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cabbit.png"
  },

  {
    id: "cactus_friend",
    name: "Cactus Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cactus_friend.png"
  },

  {
    id: "caelum_cervi",
    name: "Caelum Cervi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/caelum_cervi.png"
  },

  {
    id: "cake_friend",
    name: "Cake Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cake_friend.png"
  },

  {
    id: "california_condor",
    name: "California Condor",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/california_condor.png"
  },

  {
    id: "camel",
    name: "Camel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/camel.png"
  },

  {
    id: "canadian_goose",
    name: "Canadian Goose",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/canadian_goose.png"
  },

  {
    id: "candicorn",
    name: "Candicorn",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/candicorn.png"
  },

  {
    id: "candy_cane_snail",
    name: "Candy Cane Snail",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/candy_cane_snail.png"
  },

  {
    id: "candy_hare",
    name: "Candy Hare",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/candy_hare.png"
  },

  {
    id: "candyfloss_chick",
    name: "Candyfloss Chick",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/candyfloss_chick.png"
  },

  {
    id: "capricorn",
    name: "Capricorn",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/capricorn.png"
  },

  {
    id: "capybara",
    name: "Capybara",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/capybara.png"
  },

  {
    id: "cassowary",
    name: "Cassowary",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cassowary.png"
  },

  {
    id: "castle_hermit_crab",
    name: "Castle Hermit Crab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/castle_hermit_crab.png"
  },

  {
    id: "caterpillar",
    name: "Caterpillar",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/caterpillar.png"
  },

  {
    id: "chameleon",
    name: "Chameleon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chameleon.png"
  },

  {
    id: "chanekeh",
    name: "Chanekeh",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chanekeh.png"
  },

  {
    id: "cheetah",
    name: "Cheetah",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cheetah.png"
  },

  {
    id: "chef_gorilla",
    name: "Chef Gorilla",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chef_gorilla.png"
  },

  {
    id: "cherub_chipmunk",
    name: "Cherub Chipmunk",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cherub_chipmunk.png"
  },

  {
    id: "chestnut_glyptodon",
    name: "Chestnut Glyptodon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chestnut_glyptodon.png"
  },

  {
    id: "chickatrice",
    name: "Chickatrice",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chickatrice.png"
  },

  {
    id: "chihuahua",
    name: "Chihuahua",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chihuahua.png"
  },

  {
    id: "chilling_spider",
    name: "Chilling Spider",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chilling_spider.png"
  },

  {
    id: "chipmunk",
    name: "Chipmunk",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chipmunk.png"
  },

  {
    id: "choco_penguin",
    name: "Choco Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/choco_penguin.png"
  },

  {
    id: "chocolate_chip_bat_dragon",
    name: "Chocolate Chip Bat Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chocolate_chip_bat_dragon.png"
  },

  {
    id: "chocolate_chow_chow",
    name: "Chocolate Chow-Chow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chocolate_chow_chow.png"
  },

  {
    id: "chocolate_dutch_guinea_pig",
    name: "Chocolate Dutch Guinea Pig",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chocolate_dutch_guinea_pig.png"
  },

  {
    id: "chocolate_labrador",
    name: "Chocolate Labrador",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chocolate_labrador.png"
  },

  {
    id: "christmas_pudding_pup",
    name: "Christmas Pudding Pup",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/christmas_pudding_pup.png"
  },

  {
    id: "classic_teapot",
    name: "Classic Teapot",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/classic_teapot.png"
  },

  {
    id: "clementine_owl",
    name: "Clementine Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/clementine_owl.png"
  },

  {
    id: "clover_cow",
    name: "Clover Cow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/clover_cow.png"
  },

  {
    id: "clownfish",
    name: "Clownfish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/clownfish.png"
  },

  {
    id: "clubtail_dragonfly",
    name: "Clubtail Dragonfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/clubtail_dragonfly.png"
  },

  {
    id: "clumpty",
    name: "Clumpty",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/clumpty.png"
  },

  {
    id: "cobra",
    name: "Cobra",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cobra.png"
  },

  {
    id: "cockroach",
    name: "Cockroach",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cockroach.png"
  },

  {
    id: "cocoadile",
    name: "Cocoadile",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cocoadile.png"
  },

  {
    id: "coconut_friend",
    name: "Coconut Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/coconut_friend.png"
  },

  {
    id: "cold_cube",
    name: "Cold Cube",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cold_cube.png"
  },

  {
    id: "corgi",
    name: "Corgi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/corgi.png"
  },

  {
    id: "corn_doggo",
    name: "Corn Doggo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/corn_doggo.png"
  },

  {
    id: "cow_calf",
    name: "Cow Calf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cow_calf.png"
  },

  {
    id: "coyote",
    name: "Coyote",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/coyote.png"
  },

  {
    id: "crab",
    name: "Crab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/crab.png"
  },

  {
    id: "crimson_cape",
    name: "Crimson Cape",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/crimson_cape.png"
  },

  {
    id: "criosphinx",
    name: "Criosphinx",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/criosphinx.png"
  },

  {
    id: "cryptid",
    name: "Cryptid",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cryptid.png"
  },

  {
    id: "cuddly_candle",
    name: "Cuddly Candle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cuddly_candle.png"
  },

  {
    id: "cupid_dragon",
    name: "Cupid Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cupid_dragon.png"
  },

  {
    id: "cute_a_cabra",
    name: "Cute-A-Cabra",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cute_a_cabra.png"
  },

  {
    id: "dango_penguins",
    name: "Dango Penguins",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dango_penguins.png"
  },

  {
    id: "dark_choccybunny",
    name: "Dark Choccybunny",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dark_choccybunny.png"
  },

  {
    id: "deathstalker_scorpion",
    name: "Deathstalker Scorpion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/deathstalker_scorpion.png"
  },

  {
    id: "deinonychus",
    name: "Deinonychus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/deinonychus.png"
  },

  {
    id: "diamond_albatross",
    name: "Diamond Albatross",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_albatross.png"
  },

  {
    id: "diamond_amazon",
    name: "Diamond Amazon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_amazon.png"
  },

  {
    id: "diamond_dragon",
    name: "Diamond Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_dragon.png"
  },

  {
    id: "diamond_hamster",
    name: "Diamond Hamster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_hamster.png"
  },

  {
    id: "diamond_king_penguin",
    name: "Diamond King Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_king_penguin.png"
  },

  {
    id: "diamond_ladybug",
    name: "Diamond Ladybug",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_ladybug.png"
  },

  {
    id: "diamond_mahi_mahi",
    name: "Diamond Mahi Mahi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_mahi_mahi.png"
  },

  {
    id: "diamond_unicorn",
    name: "Diamond Unicorn",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_unicorn.png"
  },

  {
    id: "dimension_drifter",
    name: "Dimension Drifter",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dimension_drifter.png"
  },

  {
    id: "dimorphodon",
    name: "Dimorphodon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dimorphodon.png"
  },

  {
    id: "dire_stag",
    name: "Dire Stag",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dire_stag.png"
  },

  {
    id: "dirty_ducky",
    name: "Dirty Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dirty_ducky.png"
  },

  {
    id: "dj_snooze",
    name: "DJ Snooze",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dj_snooze.png"
  },

  {
    id: "dolphin",
    name: "Dolphin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dolphin.png"
  },

  {
    id: "donkey",
    name: "Donkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/donkey.png"
  },

  {
    id: "dotted_eggy",
    name: "Dotted Eggy",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dotted_eggy.png"
  },

  {
    id: "dracula_fish",
    name: "Dracula Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dracula_fish.png"
  },

  {
    id: "dracula_parrot",
    name: "Dracula Parrot",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dracula_parrot.png"
  },

  {
    id: "dragonfly",
    name: "Dragonfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dragonfly.png"
  },

  {
    id: "dragonfruit_fox",
    name: "Dragonfruit Fox",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dragonfruit_fox.png"
  },

  {
    id: "drake",
    name: "Drake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/drake.png"
  },

  {
    id: "dugong",
    name: "Dugong",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dugong.png"
  },

  {
    id: "dylan",
    name: "Dylan",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dylan.png"
  },

  {
    id: "easter_bunny",
    name: "Easter Bunny",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/easter_bunny.png"
  },

  {
    id: "eel",
    name: "Eel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/eel.png"
  },

  {
    id: "eggnog_dog",
    name: "Eggnog Dog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/eggnog_dog.png"
  },

  {
    id: "eggnog_hare",
    name: "Eggnog Hare",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/eggnog_hare.png"
  },

  {
    id: "ehecatl",
    name: "Ehecatl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ehecatl.png"
  },

  {
    id: "elasmosaurus",
    name: "Elasmosaurus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/elasmosaurus.png"
  },

  {
    id: "emberlight",
    name: "Emberlight",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/emberlight.png"
  },

  {
    id: "emperor_gorilla",
    name: "Emperor Gorilla",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/emperor_gorilla.png"
  },

  {
    id: "emperor_shrimp",
    name: "Emperor Shrimp",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/emperor_shrimp.png"
  },

  {
    id: "english_sheepdog",
    name: "English Sheepdog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/english_sheepdog.png"
  },

  {
    id: "ermine",
    name: "Ermine",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ermine.png"
  },

  {
    id: "evil_basilisk",
    name: "Evil Basilisk",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/evil_basilisk.png"
  },

  {
    id: "evil_chick",
    name: "Evil Chick",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/evil_chick.png"
  },

  {
    id: "evil_chickatrice",
    name: "Evil Chickatrice",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/evil_chickatrice.png"
  },

  {
    id: "evil_rock",
    name: "Evil Rock",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/evil_rock.png"
  },

  {
    id: "fairy_bat_dragon",
    name: "Fairy Bat Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fairy_bat_dragon.png"
  },

  {
    id: "fanghorn_tortoise",
    name: "Fanghorn Tortoise",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fanghorn_tortoise.png"
  },

  {
    id: "feesh",
    name: "Feesh",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/feesh.png"
  },

  {
    id: "fire_foal",
    name: "Fire Foal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fire_foal.png"
  },

  {
    id: "fire_mare",
    name: "Fire Mare",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fire_mare.png"
  },

  {
    id: "fire_stallion",
    name: "Fire Stallion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fire_stallion.png"
  },

  {
    id: "firefighter_gibbon",
    name: "Firefighter Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/firefighter_gibbon.png"
  },

  {
    id: "firefly",
    name: "Firefly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/firefly.png"
  },

  {
    id: "flaming_fox",
    name: "Flaming Fox",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/flaming_fox.png"
  },

  {
    id: "flaming_zebra",
    name: "Flaming Zebra",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/flaming_zebra.png"
  },

  {
    id: "fleur_de_ice",
    name: "Fleur De Ice",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fleur_de_ice.png"
  },

  {
    id: "floral_eggy",
    name: "Floral Eggy",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/floral_eggy.png"
  },

  {
    id: "flower_power_duckling",
    name: "Flower Power Duckling",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/flower_power_duckling.png"
  },

  {
    id: "flying_fish",
    name: "Flying Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/flying_fish.png"
  },

  {
    id: "forest_sprite",
    name: "Forest Sprite",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/forest_sprite.png"
  },

  {
    id: "fossa",
    name: "Fossa",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fossa.png"
  },

  {
    id: "frankenfeline",
    name: "Frankenfeline",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frankenfeline.png"
  },

  {
    id: "french_bulldog",
    name: "French Bulldog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/french_bulldog.png"
  },

  {
    id: "frogspawn",
    name: "Frogspawn",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frogspawn.png"
  },

  {
    id: "frostbite_bear",
    name: "Frostbite Bear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frostbite_bear.png"
  },

  {
    id: "frostbite_cub",
    name: "Frostbite Cub",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frostbite_cub.png"
  },

  {
    id: "frostclaw",
    name: "Frostclaw",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frostclaw.png"
  },

  {
    id: "frozen_penguin",
    name: "Frozen Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frozen_penguin.png"
  },

  {
    id: "gaelic_fae",
    name: "Gaelic Fae",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gaelic_fae.png"
  },

  {
    id: "galapagos_sea_lion",
    name: "Galapagos Sea Lion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/galapagos_sea_lion.png"
  },

  {
    id: "garden_snake",
    name: "Garden Snake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/garden_snake.png"
  },

  {
    id: "gargoyle",
    name: "Gargoyle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gargoyle.png"
  },

  {
    id: "gecko",
    name: "Gecko",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gecko.png"
  },

  {
    id: "gecko_ducky",
    name: "Gecko Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gecko_ducky.png"
  },

  {
    id: "general_sheepdog",
    name: "General Sheepdog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/general_sheepdog.png"
  },

  {
    id: "german_shepherd",
    name: "German Shepherd",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/german_shepherd.png"
  },

  {
    id: "ghost",
    name: "Ghost",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ghost.png"
  },

  {
    id: "ghost_chick",
    name: "Ghost Chick",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ghost_chick.png"
  },

  {
    id: "ghost_dog",
    name: "Ghost Dog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ghost_dog.png"
  },

  {
    id: "ghost_wolf",
    name: "Ghost Wolf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ghost_wolf.png"
  },

  {
    id: "ghostly_cat",
    name: "Ghostly Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ghostly_cat.png"
  },

  {
    id: "giant_anteater",
    name: "Giant Anteater",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/giant_anteater.png"
  },

  {
    id: "giant_black_scarab",
    name: "Giant Black Scarab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/giant_black_scarab.png"
  },

  {
    id: "giant_blue_scarab",
    name: "Giant Blue Scarab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/giant_blue_scarab.png"
  },

  {
    id: "giant_gold_scarab",
    name: "Giant Gold Scarab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/giant_gold_scarab.png"
  },

  {
    id: "gibbon",
    name: "Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gibbon.png"
  },

  {
    id: "gila_monster",
    name: "Gila Monster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gila_monster.png"
  },

  {
    id: "gilded_snake",
    name: "Gilded Snake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gilded_snake.png"
  },

  {
    id: "gingerbread_hare",
    name: "Gingerbread Hare",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gingerbread_hare.png"
  },

  {
    id: "gingerbread_mouse",
    name: "Gingerbread Mouse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gingerbread_mouse.png"
  },

  {
    id: "gingerbread_reindeer",
    name: "Gingerbread Reindeer",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gingerbread_reindeer.png"
  },

  {
    id: "glacier_kitsune",
    name: "Glacier Kitsune",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glacier_kitsune.png"
  },

  {
    id: "glacier_moth",
    name: "Glacier Moth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glacier_moth.png"
  },

  {
    id: "glormy_crab",
    name: "Glormy Crab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glormy_crab.png"
  },

  {
    id: "glormy_dolphin",
    name: "Glormy Dolphin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glormy_dolphin.png"
  },

  {
    id: "glormy_hound",
    name: "Glormy Hound",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glormy_hound.png"
  },

  {
    id: "glormy_leo",
    name: "Glormy Leo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glormy_leo.png"
  },

  {
    id: "glyptodon",
    name: "Glyptodon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glyptodon.png"
  },

  {
    id: "glyptodon_ducky",
    name: "Glyptodon Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glyptodon_ducky.png"
  },

  {
    id: "gold_mahi_mahi",
    name: "Gold Mahi Mahi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gold_mahi_mahi.png"
  },

  {
    id: "golden_albatross",
    name: "Golden Albatross",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/golden_albatross.png"
  },

  {
    id: "golden_chow_chow",
    name: "Golden Chow-Chow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/golden_chow_chow.png"
  },

  {
    id: "golden_griffin",
    name: "Golden Griffin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/golden_griffin.png"
  },

  {
    id: "golden_hamster",
    name: "Golden Hamster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/golden_hamster.png"
  },

  {
    id: "golden_jaguar",
    name: "Golden Jaguar",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/golden_jaguar.png"
  },

  {
    id: "goldfish",
    name: "Goldfish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/goldfish.png"
  },

  {
    id: "gorilla",
    name: "Gorilla",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gorilla.png"
  },

  {
    id: "granny_wolf",
    name: "Granny Wolf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/granny_wolf.png"
  },

  {
    id: "grave_owl",
    name: "Grave Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/grave_owl.png"
  },

  {
    id: "great_pyrenees",
    name: "Great Pyrenees",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/great_pyrenees.png"
  },

  {
    id: "green_amazon",
    name: "Green Amazon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/green_amazon.png"
  },

  {
    id: "green_butterfly",
    name: "Green Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/green_butterfly.png"
  },

  {
    id: "green_chested_pheasant",
    name: "Green-Chested Pheasant",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/green_chested_pheasant.png"
  },

  {
    id: "grinmoire",
    name: "Grinmoire",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/grinmoire.png"
  },

  {
    id: "groundhog",
    name: "Groundhog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/groundhog.png"
  },

  {
    id: "gumball_caterpillar",
    name: "Gumball Caterpillar",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gumball_caterpillar.png"
  },

  {
    id: "gummy_guana",
    name: "Gummy Guana",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gummy_guana.png"
  },

  {
    id: "haetae",
    name: "Haetae",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/haetae.png"
  },

  {
    id: "halloween_black_mummy_cat",
    name: "Halloween Black Mummy Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/halloween_black_mummy_cat.png"
  },

  {
    id: "halloween_blue_scorpion",
    name: "Halloween Blue Scorpion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/halloween_blue_scorpion.png"
  },

  {
    id: "halloween_evil_dachshund",
    name: "Halloween Evil Dachshund",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/halloween_evil_dachshund.png"
  },

  {
    id: "halloween_golden_mummy_cat",
    name: "Halloween Golden Mummy Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/halloween_golden_mummy_cat.png"
  },

  {
    id: "halloween_white_ghost_dragon",
    name: "Halloween White Ghost Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/halloween_white_ghost_dragon.png"
  },

  {
    id: "halloween_white_mummy_cat",
    name: "Halloween White Mummy Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/halloween_white_mummy_cat.png"
  },

  {
    id: "halloween_white_skeleton_dog",
    name: "Halloween White Skeleton Dog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/halloween_white_skeleton_dog.png"
  },

  {
    id: "hammerhead_shark",
    name: "Hammerhead Shark",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/hammerhead_shark.png"
  },

  {
    id: "hamster",
    name: "Hamster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/hamster.png"
  },

  {
    id: "happy_clam",
    name: "Happy Clam",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/happy_clam.png"
  },

  {
    id: "happy_duckling",
    name: "Happy Duckling",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/happy_duckling.png"
  },

  {
    id: "hare",
    name: "Hare",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/hare.png"
  },

  {
    id: "harp_seal",
    name: "Harp Seal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/harp_seal.png"
  },

  {
    id: "headless_horse",
    name: "Headless Horse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/headless_horse.png"
  },

  {
    id: "hermit_crab",
    name: "Hermit Crab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/hermit_crab.png"
  },

  {
    id: "hero_gibbon",
    name: "Hero Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/hero_gibbon.png"
  },

  {
    id: "highland_cow",
    name: "Highland Cow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/highland_cow.png"
  },

  {
    id: "hippo",
    name: "Hippo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/hippo.png"
  },

  {
    id: "hippogriff",
    name: "Hippogriff",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/hippogriff.png"
  },

  {
    id: "honey_badger",
    name: "Honey Badger",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/honey_badger.png"
  },

  {
    id: "hopbop",
    name: "Hopbop",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/hopbop.png"
  },

  {
    id: "horse",
    name: "Horse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/horse.png"
  },

  {
    id: "hot_doggo",
    name: "Hot Doggo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/hot_doggo.png"
  },

  {
    id: "humbug",
    name: "Humbug",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/humbug.png"
  },

  {
    id: "hummingbird",
    name: "Hummingbird",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/hummingbird.png"
  },

  {
    id: "huntsman_robin",
    name: "Huntsman Robin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/huntsman_robin.png"
  },

  {
    id: "husky",
    name: "Husky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/husky.png"
  },

  {
    id: "ibex",
    name: "Ibex",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ibex.png"
  },

  {
    id: "ibis",
    name: "Ibis",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ibis.png"
  },

  {
    id: "ice_cream_hermit_crab",
    name: "Ice Cream Hermit Crab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ice_cream_hermit_crab.png"
  },

  {
    id: "ice_cube",
    name: "Ice Cube",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ice_cube.png"
  },

  {
    id: "ice_golem",
    name: "Ice Golem",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ice_golem.png"
  },

  {
    id: "ice_wolf",
    name: "Ice Wolf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ice_wolf.png"
  },

  {
    id: "icy_porcupine",
    name: "Icy Porcupine",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/icy_porcupine.png"
  },

  {
    id: "indian_flying_fox",
    name: "Indian Flying Fox",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/indian_flying_fox.png"
  },

  {
    id: "indian_leopard",
    name: "Indian Leopard",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/indian_leopard.png"
  },

  {
    id: "influencer_gibbon",
    name: "Influencer Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/influencer_gibbon.png"
  },

  {
    id: "inmate_capuchin_monkey",
    name: "Inmate Capuchin Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/inmate_capuchin_monkey.png"
  },

  {
    id: "irish_elk",
    name: "Irish Elk",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/irish_elk.png"
  },

  {
    id: "irish_setter",
    name: "Irish Setter",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/irish_setter.png"
  },

  {
    id: "irish_water_spaniel",
    name: "Irish Water Spaniel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/irish_water_spaniel.png"
  },

  {
    id: "island_tarsier",
    name: "Island Tarsier",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/island_tarsier.png"
  },

  {
    id: "jekyll_hydra",
    name: "Jekyll Hydra",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/jekyll_hydra.png"
  },

  {
    id: "jellyfish",
    name: "Jellyfish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/jellyfish.png"
  },

  {
    id: "jiggly_jerboa",
    name: "Jiggly Jerboa",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/jiggly_jerboa.png"
  },

  {
    id: "jousting_horse",
    name: "Jousting Horse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/jousting_horse.png"
  },

  {
    id: "jumping_spider",
    name: "Jumping Spider",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/jumping_spider.png"
  },

  {
    id: "kage_crow",
    name: "Kage Crow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kage_crow.png"
  },

  {
    id: "kaijunior",
    name: "Kaijunior",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kaijunior.png"
  },

  {
    id: "kakapo",
    name: "Kakapo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kakapo.png"
  },

  {
    id: "kappakid",
    name: "Kappakid",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kappakid.png"
  },

  {
    id: "karate_gorilla",
    name: "Karate Gorilla",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/karate_gorilla.png"
  },

  {
    id: "kelp_captain",
    name: "Kelp Captain",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kelp_captain.png"
  },

  {
    id: "kelp_crewmate",
    name: "Kelp Crewmate",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kelp_crewmate.png"
  },

  {
    id: "kelp_hunter",
    name: "Kelp Hunter",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kelp_hunter.png"
  },

  {
    id: "kelp_raider",
    name: "Kelp Raider",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kelp_raider.png"
  },

  {
    id: "kid_goat",
    name: "Kid Goat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kid_goat.png"
  },

  {
    id: "kirin",
    name: "Kirin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kirin.png"
  },

  {
    id: "kitty_bat",
    name: "Kitty Bat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kitty_bat.png"
  },

  {
    id: "kiwi",
    name: "Kiwi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kiwi.png"
  },

  {
    id: "kiwi_kiwi",
    name: "Kiwi Kiwi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kiwi_kiwi.png"
  },

  {
    id: "koi_carp",
    name: "Koi Carp",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/koi_carp.png"
  },

  {
    id: "komodo_dragon",
    name: "Komodo Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/komodo_dragon.png"
  },

  {
    id: "kookaburra",
    name: "Kookaburra",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kookaburra.png"
  },

  {
    id: "kraken",
    name: "Kraken",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/kraken.png"
  },

  {
    id: "ladybug",
    name: "Ladybug",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ladybug.png"
  },

  {
    id: "lammergeier",
    name: "Lammergeier",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/lammergeier.png"
  },

  {
    id: "latte_kitsune",
    name: "Latte Kitsune",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/latte_kitsune.png"
  },

  {
    id: "leopard_cat",
    name: "Leopard Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/leopard_cat.png"
  },

  {
    id: "leopard_shark",
    name: "Leopard Shark",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/leopard_shark.png"
  },

  {
    id: "leviathan",
    name: "Leviathan",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/leviathan.png"
  },

  {
    id: "liger",
    name: "Liger",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/liger.png"
  },

  {
    id: "lion_cub",
    name: "Lion Cub",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/lion_cub.png"
  },

  {
    id: "lionfish",
    name: "Lionfish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/lionfish.png"
  },

  {
    id: "little_lamb",
    name: "Little Lamb",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/little_lamb.png"
  },

  {
    id: "lobster",
    name: "Lobster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/lobster.png"
  },

  {
    id: "longhorn_cow",
    name: "Longhorn Cow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/longhorn_cow.png"
  },

  {
    id: "love_bird",
    name: "Love Bird",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/love_bird.png"
  },

  {
    id: "lunar_gold_tiger",
    name: "Lunar Gold Tiger",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/lunar_gold_tiger.png"
  },

  {
    id: "lunar_moon_bear",
    name: "Lunar Moon Bear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/lunar_moon_bear.png"
  },

  {
    id: "lunar_ox",
    name: "Lunar Ox",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/lunar_ox.png"
  },

  {
    id: "lunar_tiger",
    name: "Lunar Tiger",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/lunar_tiger.png"
  },

  {
    id: "lunar_white_tiger",
    name: "Lunar White Tiger",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/lunar_white_tiger.png"
  },

  {
    id: "lynx",
    name: "Lynx",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/lynx.png"
  },

  {
    id: "magma_snail",
    name: "Magma Snail",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/magma_snail.png"
  },

  {
    id: "magpie",
    name: "Magpie",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/magpie.png"
  },

  {
    id: "mahi_mahi",
    name: "Mahi Mahi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mahi_mahi.png"
  },

  {
    id: "majestic_pony",
    name: "Majestic Pony",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/majestic_pony.png"
  },

  {
    id: "malayan_tapir",
    name: "Malayan Tapir",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/malayan_tapir.png"
  },

  {
    id: "maleo_bird",
    name: "Maleo Bird",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/maleo_bird.png"
  },

  {
    id: "maneki_neko",
    name: "Maneki-Neko",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/maneki_neko.png"
  },

  {
    id: "manta_ray",
    name: "Manta Ray",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/manta_ray.png"
  },

  {
    id: "many_mackerel",
    name: "Many Mackerel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/many_mackerel.png"
  },

  {
    id: "marabou_stork",
    name: "Marabou Stork",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/marabou_stork.png"
  },

  {
    id: "mecha_meow",
    name: "Mecha Meow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mecha_meow.png"
  },

  {
    id: "mecha_r4bbit",
    name: "Mecha R4BBIT",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mecha_r4bbit.png"
  },

  {
    id: "mechapup",
    name: "Mechapup",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mechapup.png"
  },

  {
    id: "merhorse",
    name: "Merhorse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/merhorse.png"
  },

  {
    id: "mermicorn",
    name: "Mermicorn",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mermicorn.png"
  },

  {
    id: "merry_mistletroll",
    name: "Merry Mistletroll",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/merry_mistletroll.png"
  },

  {
    id: "mexican_wolf",
    name: "Mexican Wolf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mexican_wolf.png"
  },

  {
    id: "midnight_dragon",
    name: "Midnight Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/midnight_dragon.png"
  },

  {
    id: "milk_choccybunny",
    name: "Milk Choccybunny",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/milk_choccybunny.png"
  },

  {
    id: "mini_pig",
    name: "Mini Pig",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mini_pig.png"
  },

  {
    id: "mini_schnauzer",
    name: "Mini Schnauzer",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mini_schnauzer.png"
  },

  {
    id: "mirai_moth",
    name: "Mirai Moth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mirai_moth.png"
  },

  {
    id: "mistletroll",
    name: "Mistletroll",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mistletroll.png"
  },

  {
    id: "mochi_meow",
    name: "Mochi Meow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mochi_meow.png"
  },

  {
    id: "mole",
    name: "Mole",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mole.png"
  },

  {
    id: "momma_moose",
    name: "Momma Moose",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/momma_moose.png"
  },

  {
    id: "mongoose",
    name: "Mongoose",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mongoose.png"
  },

  {
    id: "monkey_king",
    name: "Monkey King",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/monkey_king.png"
  },

  {
    id: "moon_rabbit",
    name: "Moon Rabbit",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/moon_rabbit.png"
  },

  {
    id: "moonbeam_butterfly",
    name: "Moonbeam Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/moonbeam_butterfly.png"
  },

  {
    id: "moonlight_moth",
    name: "Moonlight Moth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/moonlight_moth.png"
  },

  {
    id: "moonpine",
    name: "Moonpine",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/moonpine.png"
  },

  {
    id: "moose_calf",
    name: "Moose Calf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/moose_calf.png"
  },

  {
    id: "mosquito",
    name: "Mosquito",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mosquito.png"
  },

  {
    id: "mr_whiskerpips",
    name: "Mr. Whiskerpips",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mr_whiskerpips.png"
  },

  {
    id: "mrs_whiskerpips",
    name: "Mrs. Whiskerpips",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mrs_whiskerpips.png"
  },

  {
    id: "ms_muffet",
    name: "Ms. Muffet",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ms_muffet.png"
  },

  {
    id: "mule",
    name: "Mule",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mule.png"
  },

  {
    id: "munchkin_cat",
    name: "Munchkin Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/munchkin_cat.png"
  },

  {
    id: "mushroom_friend",
    name: "Mushroom Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mushroom_friend.png"
  },

  {
    id: "muskrat",
    name: "Muskrat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/muskrat.png"
  },

  {
    id: "naga_dragon",
    name: "Naga Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/naga_dragon.png"
  },

  {
    id: "narwhal",
    name: "Narwhal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/narwhal.png"
  },

  {
    id: "naughty_mistletroll",
    name: "Naughty Mistletroll",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/naughty_mistletroll.png"
  },

  {
    id: "nautilus",
    name: "Nautilus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nautilus.png"
  },

  {
    id: "nebula_snake",
    name: "Nebula Snake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nebula_snake.png"
  },

  {
    id: "nessie",
    name: "Nessie",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nessie.png"
  },

  {
    id: "nightmare_owl",
    name: "Nightmare Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nightmare_owl.png"
  },

  {
    id: "ninja_monkey",
    name: "Ninja Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ninja_monkey.png"
  },

  {
    id: "nurse_shark",
    name: "Nurse Shark",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nurse_shark.png"
  },

  {
    id: "nutcracker_squirrel",
    name: "Nutcracker Squirrel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nutcracker_squirrel.png"
  },

  {
    id: "oakee",
    name: "Oakee",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/oakee.png"
  },

  {
    id: "oakee_knight",
    name: "Oakee Knight",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/oakee_knight.png"
  },

  {
    id: "oakee_wizard",
    name: "Oakee Wizard",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/oakee_wizard.png"
  },

  {
    id: "ocelot",
    name: "Ocelot",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ocelot.png"
  },

  {
    id: "officer_gibbon",
    name: "Officer Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/officer_gibbon.png"
  },

  {
    id: "old_king_coal",
    name: "Old King Coal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/old_king_coal.png"
  },

  {
    id: "onza",
    name: "Onza",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/onza.png"
  },

  {
    id: "orange_betta_fish",
    name: "Orange Betta Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/orange_betta_fish.png"
  },

  {
    id: "orange_butterfly",
    name: "Orange Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/orange_butterfly.png"
  },

  {
    id: "orangutan",
    name: "Orangutan",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/orangutan.png"
  },

  {
    id: "orca",
    name: "Orca",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/orca.png"
  },

  {
    id: "orchid_butterfly",
    name: "Orchid Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/orchid_butterfly.png"
  },

  {
    id: "ornate_horned_frog",
    name: "Ornate Horned Frog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ornate_horned_frog.png"
  },

  {
    id: "oryx",
    name: "Oryx",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/oryx.png"
  },

  {
    id: "ostrich",
    name: "Ostrich",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ostrich.png"
  },

  {
    id: "owlbear",
    name: "Owlbear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/owlbear.png"
  },

  {
    id: "ox",
    name: "Ox",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ox.png"
  },

  {
    id: "pangolin",
    name: "Pangolin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pangolin.png"
  },

  {
    id: "papa_moose",
    name: "Papa Moose",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/papa_moose.png"
  },

  {
    id: "parakeet",
    name: "Parakeet",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/parakeet.png"
  },

  {
    id: "partridge",
    name: "Partridge",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/partridge.png"
  },

  {
    id: "patchy_bear",
    name: "Patchy Bear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/patchy_bear.png"
  },

  {
    id: "peach_owl",
    name: "Peach Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/peach_owl.png"
  },

  {
    id: "peacock",
    name: "Peacock",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/peacock.png"
  },

  {
    id: "pelican",
    name: "Pelican",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pelican.png"
  },

  {
    id: "peppermint_penguin",
    name: "Peppermint Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/peppermint_penguin.png"
  },

  {
    id: "peregrine_falcon",
    name: "Peregrine Falcon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/peregrine_falcon.png"
  },

  {
    id: "persian_cat",
    name: "Persian Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/persian_cat.png"
  },

  {
    id: "phantom_dragon",
    name: "Phantom Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/phantom_dragon.png"
  },

  {
    id: "pilot_gull",
    name: "Pilot Gull",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pilot_gull.png"
  },

  {
    id: "pine_marten",
    name: "Pine Marten",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pine_marten.png"
  },

  {
    id: "pineapple_owl",
    name: "Pineapple Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pineapple_owl.png"
  },

  {
    id: "pink_betta_fish",
    name: "Pink Betta Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pink_betta_fish.png"
  },

  {
    id: "pinkypillar",
    name: "Pinkypillar",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pinkypillar.png"
  },

  {
    id: "piranha",
    name: "Piranha",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/piranha.png"
  },

  {
    id: "pirate_ghost_capuchin_monkey",
    name: "Pirate Ghost Capuchin Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pirate_ghost_capuchin_monkey.png"
  },

  {
    id: "pirate_hermit_crab",
    name: "Pirate Hermit Crab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pirate_hermit_crab.png"
  },

  {
    id: "pistachio",
    name: "Pistachio",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pistachio.png"
  },

  {
    id: "poison_dart_frog",
    name: "Poison Dart Frog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/poison_dart_frog.png"
  },

  {
    id: "pomeranian",
    name: "Pomeranian",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pomeranian.png"
  },

  {
    id: "poodle",
    name: "Poodle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/poodle.png"
  },

  {
    id: "possum",
    name: "Possum",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/possum.png"
  },

  {
    id: "praying_mantis",
    name: "Praying Mantis",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/praying_mantis.png"
  },

  {
    id: "preppy_capuchin_monkey",
    name: "Preppy Capuchin Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/preppy_capuchin_monkey.png"
  },

  {
    id: "pretty_pony",
    name: "Pretty Pony",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pretty_pony.png"
  },

  {
    id: "priceless_shrimp",
    name: "Priceless Shrimp",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/priceless_shrimp.png"
  },

  {
    id: "primal_kaijunior",
    name: "Primal Kaijunior",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/primal_kaijunior.png"
  },

  {
    id: "princess_capuchin_monkey",
    name: "Princess Capuchin Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/princess_capuchin_monkey.png"
  },

  {
    id: "princess_mare",
    name: "Princess Mare",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/princess_mare.png"
  },

  {
    id: "prism_snake",
    name: "Prism Snake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/prism_snake.png"
  },

  {
    id: "prismatic_butterfly",
    name: "Prismatic Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/prismatic_butterfly.png"
  },

  {
    id: "pterodactyl",
    name: "Pterodactyl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pterodactyl.png"
  },

  {
    id: "pudding_cat",
    name: "Pudding Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pudding_cat.png"
  },

  {
    id: "puffer_fish",
    name: "Puffer Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/puffer_fish.png"
  },

  {
    id: "puffin",
    name: "Puffin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/puffin.png"
  },

  {
    id: "pumpkin_friend",
    name: "Pumpkin Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pumpkin_friend.png"
  },

  {
    id: "punk_pony",
    name: "Punk Pony",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/punk_pony.png"
  },

  {
    id: "pupcake",
    name: "Pupcake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pupcake.png"
  },

  {
    id: "puptune",
    name: "Puptune",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/puptune.png"
  },

  {
    id: "purple_butterfly",
    name: "Purple Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/purple_butterfly.png"
  },

  {
    id: "purrowl",
    name: "Purrowl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/purrowl.png"
  },

  {
    id: "quetzalcoatl",
    name: "Quetzalcoatl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/quetzalcoatl.png"
  },

  {
    id: "quokka",
    name: "Quokka",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/quokka.png"
  },

  {
    id: "raccoon",
    name: "Raccoon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/raccoon.png"
  },

  {
    id: "rainbow_dragon",
    name: "Rainbow Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rainbow_dragon.png"
  },

  {
    id: "rainbow_trout",
    name: "Rainbow Trout",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rainbow_trout.png"
  },

  {
    id: "ram",
    name: "Ram",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ram.png"
  },

  {
    id: "ranger_beaver",
    name: "Ranger Beaver",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ranger_beaver.png"
  },

  {
    id: "rat",
    name: "Rat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rat.png"
  },

  {
    id: "ratatoskr",
    name: "Ratatoskr",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ratatoskr.png"
  },

  {
    id: "rattlesnake",
    name: "Rattlesnake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rattlesnake.png"
  },

  {
    id: "red_cardinal",
    name: "Red Cardinal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_cardinal.png"
  },

  {
    id: "red_crowned_crane",
    name: "Red Crowned Crane",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_crowned_crane.png"
  },

  {
    id: "red_dutch_guinea_pig",
    name: "Red Dutch Guinea Pig",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_dutch_guinea_pig.png"
  },

  {
    id: "red_panda_ducky",
    name: "Red Panda Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_panda_ducky.png"
  },

  {
    id: "red_sand_dollar",
    name: "Red Sand Dollar",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_sand_dollar.png"
  },

  {
    id: "red_squirrel",
    name: "Red Squirrel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_squirrel.png"
  },

  {
    id: "rhino_beetle",
    name: "Rhino Beetle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rhino_beetle.png"
  },

  {
    id: "ribbon_seal",
    name: "Ribbon Seal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ribbon_seal.png"
  },

  {
    id: "rice_cake_rabbit",
    name: "Rice Cake Rabbit",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rice_cake_rabbit.png"
  },

  {
    id: "ring_tailed_lemur",
    name: "Ring-tailed Lemur",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ring_tailed_lemur.png"
  },

  {
    id: "ringmaster_gibbon",
    name: "Ringmaster Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ringmaster_gibbon.png"
  },

  {
    id: "river",
    name: "River",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/river.png"
  },

  {
    id: "river_otter",
    name: "River Otter",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/river_otter.png"
  },

  {
    id: "roadrunner",
    name: "Roadrunner",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/roadrunner.png"
  },

  {
    id: "robot",
    name: "Robot",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/robot.png"
  },

  {
    id: "rock",
    name: "Rock",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rock.png"
  },

  {
    id: "rock_pigeon",
    name: "Rock Pigeon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rock_pigeon.png"
  },

  {
    id: "rodeo_bull",
    name: "Rodeo Bull",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rodeo_bull.png"
  },

  {
    id: "rooster",
    name: "Rooster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rooster.png"
  },

  {
    id: "rose_dragon",
    name: "Rose Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rose_dragon.png"
  },

  {
    id: "rosy_maple_moth",
    name: "Rosy Maple Moth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rosy_maple_moth.png"
  },

  {
    id: "royal_capuchin_monkey",
    name: "Royal Capuchin Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/royal_capuchin_monkey.png"
  },

  {
    id: "royal_corgi",
    name: "Royal Corgi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/royal_corgi.png"
  },

  {
    id: "royal_palace_spaniel",
    name: "Royal Palace Spaniel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/royal_palace_spaniel.png"
  },

  {
    id: "rubber_ducky",
    name: "Rubber Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rubber_ducky.png"
  },

  {
    id: "ruddy_duck",
    name: "Ruddy Duck",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ruddy_duck.png"
  },

  {
    id: "s_mores_raccoon",
    name: "S'mores Raccoon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/s_mores_raccoon.png"
  },

  {
    id: "sabertooth",
    name: "Sabertooth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sabertooth.png"
  },

  {
    id: "sado_mole",
    name: "Sado Mole",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sado_mole.png"
  },

  {
    id: "sakura_spirit",
    name: "Sakura Spirit",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sakura_spirit.png"
  },

  {
    id: "salamander",
    name: "Salamander",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/salamander.png"
  },

  {
    id: "sandfish",
    name: "Sandfish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sandfish.png"
  },

  {
    id: "scarebear",
    name: "Scarebear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarebear.png"
  },

  {
    id: "scarecrow",
    name: "Scarecrow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarecrow.png"
  },

  {
    id: "scarecrow_cat",
    name: "Scarecrow Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarecrow_cat.png"
  },

  {
    id: "scarecrow_crow",
    name: "Scarecrow Crow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarecrow_crow.png"
  },

  {
    id: "scarecrow_horse",
    name: "Scarecrow Horse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarecrow_horse.png"
  },

  {
    id: "scarlet_butterfly",
    name: "Scarlet Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarlet_butterfly.png"
  },

  {
    id: "scorching_kaijunior",
    name: "Scorching Kaijunior",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scorching_kaijunior.png"
  },

  {
    id: "sea_angel",
    name: "Sea Angel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sea_angel.png"
  },

  {
    id: "sea_skeleton_panda",
    name: "Sea Skeleton Panda",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sea_skeleton_panda.png"
  },

  {
    id: "sea_slug",
    name: "Sea Slug",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sea_slug.png"
  },

  {
    id: "sea_turtle",
    name: "Sea Turtle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sea_turtle.png"
  },

  {
    id: "seabed_creeper",
    name: "Seabed Creeper",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/seabed_creeper.png"
  },

  {
    id: "seafoam_butterfly",
    name: "Seafoam Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/seafoam_butterfly.png"
  },

  {
    id: "seagull",
    name: "Seagull",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/seagull.png"
  },

  {
    id: "seahorse",
    name: "Seahorse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/seahorse.png"
  },

  {
    id: "shadow_dragon_ducky",
    name: "Shadow Dragon Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shadow_dragon_ducky.png"
  },

  {
    id: "shark_puppy",
    name: "Shark Puppy",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shark_puppy.png"
  },

  {
    id: "sheeeeep",
    name: "Sheeeeep",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sheeeeep.png"
  },

  {
    id: "sheepdog_ducky",
    name: "Sheepdog Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sheepdog_ducky.png"
  },

  {
    id: "shetland_pony_dark_brown",
    name: "Shetland Pony Dark Brown",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shetland_pony_dark_brown.png"
  },

  {
    id: "shetland_pony_light_brown",
    name: "Shetland Pony Light Brown",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shetland_pony_light_brown.png"
  },

  {
    id: "shetland_pony_white",
    name: "Shetland Pony White",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shetland_pony_white.png"
  },

  {
    id: "shih_tzu",
    name: "Shih Tzu",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shih_tzu.png"
  },

  {
    id: "shiver_wolf",
    name: "Shiver Wolf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shiver_wolf.png"
  },

  {
    id: "show_pony",
    name: "Show Pony",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/show_pony.png"
  },

  {
    id: "siamese_cat",
    name: "Siamese Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/siamese_cat.png"
  },

  {
    id: "silverback_gorilla",
    name: "Silverback Gorilla",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/silverback_gorilla.png"
  },

  {
    id: "singularity_beetle",
    name: "Singularity Beetle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/singularity_beetle.png"
  },

  {
    id: "singularity_pisces",
    name: "Singularity Pisces",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/singularity_pisces.png"
  },

  {
    id: "skelebat",
    name: "Skelebat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/skelebat.png"
  },

  {
    id: "skunk",
    name: "Skunk",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/skunk.png"
  },

  {
    id: "slime",
    name: "Slime",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/slime.png"
  },

  {
    id: "slimingo",
    name: "Slimingo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/slimingo.png"
  },

  {
    id: "slug",
    name: "Slug",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/slug.png"
  },

  {
    id: "sneak_weasel",
    name: "Sneak Weasel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sneak_weasel.png"
  },

  {
    id: "snorgle",
    name: "Snorgle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snorgle.png"
  },

  {
    id: "snow_leopard",
    name: "Snow Leopard",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snow_leopard.png"
  },

  {
    id: "snow_monkey",
    name: "Snow Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snow_monkey.png"
  },

  {
    id: "snowball_pet",
    name: "Snowball Pet",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snowball_pet.png"
  },

  {
    id: "snowball_pug",
    name: "Snowball Pug",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snowball_pug.png"
  },

  {
    id: "snowman",
    name: "Snowman",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snowman.png"
  },

  {
    id: "snowy_mammoth",
    name: "Snowy Mammoth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snowy_mammoth.png"
  },

  {
    id: "solaris",
    name: "Solaris",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/solaris.png"
  },

  {
    id: "space_whale",
    name: "Space Whale",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/space_whale.png"
  },

  {
    id: "spider_crab",
    name: "Spider Crab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/spider_crab.png"
  },

  {
    id: "spinosaurus",
    name: "Spinosaurus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/spinosaurus.png"
  },

  {
    id: "sprout_snail",
    name: "Sprout Snail",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sprout_snail.png"
  },

  {
    id: "squid",
    name: "Squid",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/squid.png"
  },

  {
    id: "st_bernard",
    name: "St Bernard",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/st_bernard.png"
  },

  {
    id: "starhopper",
    name: "Starhopper",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/starhopper.png"
  },

  {
    id: "starmite",
    name: "Starmite",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/starmite.png"
  },

  {
    id: "steppe_lion",
    name: "Steppe Lion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/steppe_lion.png"
  },

  {
    id: "stingray",
    name: "Stingray",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/stingray.png"
  },

  {
    id: "storm_condor",
    name: "Storm Condor",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/storm_condor.png"
  },

  {
    id: "strawberry_penguin",
    name: "Strawberry Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/strawberry_penguin.png"
  },

  {
    id: "strawberry_shortcake_bat_dragon",
    name: "Strawberry Shortcake Bat Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/strawberry_shortcake_bat_dragon.png"
  },

  {
    id: "strawberry_shortcake_ducky",
    name: "Strawberry Shortcake Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/strawberry_shortcake_ducky.png"
  },

  {
    id: "strawberry_tortle",
    name: "Strawberry Tortle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/strawberry_tortle.png"
  },

  {
    id: "striped_eggy",
    name: "Striped Eggy",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/striped_eggy.png"
  },

  {
    id: "stygian_owl",
    name: "Stygian Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/stygian_owl.png"
  },

  {
    id: "subzero_scorpion",
    name: "Subzero Scorpion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/subzero_scorpion.png"
  },

  {
    id: "sugar_axolotl",
    name: "Sugar Axolotl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sugar_axolotl.png"
  },

  {
    id: "sugar_glider",
    name: "Sugar Glider",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sugar_glider.png"
  },

  {
    id: "summer_walrus",
    name: "Summer Walrus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/summer_walrus.png"
  },

  {
    id: "sunflower_friend",
    name: "Sunflower Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sunflower_friend.png"
  },

  {
    id: "sunglider",
    name: "Sunglider",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sunglider.png"
  },

  {
    id: "sunrise_duckling",
    name: "Sunrise Duckling",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sunrise_duckling.png"
  },

  {
    id: "super_saru",
    name: "Super Saru",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/super_saru.png"
  },

  {
    id: "sushi_penguin",
    name: "Sushi Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sushi_penguin.png"
  },

  {
    id: "sweetheart_rat",
    name: "Sweetheart Rat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sweetheart_rat.png"
  },

  {
    id: "swordfish",
    name: "Swordfish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/swordfish.png"
  },

  {
    id: "t_rex",
    name: "T-Rex",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/t_rex.png"
  },

  {
    id: "tan_chow_chow",
    name: "Tan Chow-Chow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tan_chow_chow.png"
  },

  {
    id: "tanuki",
    name: "Tanuki",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tanuki.png"
  },

  {
    id: "tarantula",
    name: "Tarantula",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tarantula.png"
  },

  {
    id: "tarsier",
    name: "Tarsier",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tarsier.png"
  },

  {
    id: "tasmanian_devil",
    name: "Tasmanian Devil",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tasmanian_devil.png"
  },

  {
    id: "tasmanian_tiger",
    name: "Tasmanian Tiger",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tasmanian_tiger.png"
  },

  {
    id: "tawny_frogmouth",
    name: "Tawny Frogmouth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tawny_frogmouth.png"
  },

  {
    id: "tealwood_monster",
    name: "Tealwood Monster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tealwood_monster.png"
  },

  {
    id: "tegu",
    name: "Tegu",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tegu.png"
  },

  {
    id: "temple_friend",
    name: "Temple Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/temple_friend.png"
  },

  {
    id: "the_black_dog",
    name: "The Black Dog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/the_black_dog.png"
  },

  {
    id: "therapy_dog",
    name: "Therapy Dog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/therapy_dog.png"
  },

  {
    id: "thorny_devil",
    name: "Thorny Devil",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/thorny_devil.png"
  },

  {
    id: "three_blind_mice",
    name: "Three Blind Mice",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/three_blind_mice.png"
  },

  {
    id: "ti_de_nadal",
    name: "Tió De Nadal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ti_de_nadal.png"
  },

  {
    id: "toasty_red_panda",
    name: "Toasty Red Panda",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/toasty_red_panda.png"
  },

  {
    id: "tortoiseshell_guinea_pig",
    name: "Tortoiseshell Guinea Pig",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tortoiseshell_guinea_pig.png"
  },

  {
    id: "tortuga_de_la_isla",
    name: "Tortuga de la Isla",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tortuga_de_la_isla.png"
  },

  {
    id: "toxic_kaijunior",
    name: "Toxic Kaijunior",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/toxic_kaijunior.png"
  },

  {
    id: "toy_monkey",
    name: "Toy Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/toy_monkey.png"
  },

  {
    id: "toy_poodle",
    name: "Toy Poodle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/toy_poodle.png"
  },

  {
    id: "trapdoor_snail",
    name: "Trapdoor Snail",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/trapdoor_snail.png"
  },

  {
    id: "tree_frog",
    name: "Tree Frog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tree_frog.png"
  },

  {
    id: "tree_kangaroo",
    name: "Tree Kangaroo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tree_kangaroo.png"
  },

  {
    id: "tree_sasquatch",
    name: "Tree Sasquatch",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tree_sasquatch.png"
  },

  {
    id: "tri_horned_treehopper",
    name: "Tri-horned Treehopper",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tri_horned_treehopper.png"
  },

  {
    id: "turkey",
    name: "Turkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/turkey.png"
  },

  {
    id: "tuxedo_cat",
    name: "Tuxedo Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tuxedo_cat.png"
  },

  {
    id: "undead_elk",
    name: "Undead Elk",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/undead_elk.png"
  },

  {
    id: "undead_jousting_horse",
    name: "Undead Jousting Horse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/undead_jousting_horse.png"
  },

  {
    id: "unicorn_ducky",
    name: "Unicorn Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/unicorn_ducky.png"
  },

  {
    id: "urchin",
    name: "Urchin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/urchin.png"
  },

  {
    id: "vampire_dragon",
    name: "Vampire Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/vampire_dragon.png"
  },

  {
    id: "vanilla_penguin",
    name: "Vanilla Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/vanilla_penguin.png"
  },

  {
    id: "velociraptor",
    name: "Velociraptor",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/velociraptor.png"
  },

  {
    id: "velocirooster",
    name: "Velocirooster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/velocirooster.png"
  },

  {
    id: "vermilion_butterfly",
    name: "Vermilion Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/vermilion_butterfly.png"
  },

  {
    id: "villain_gibbon",
    name: "Villain Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/villain_gibbon.png"
  },

  {
    id: "violet_butterfly",
    name: "Violet Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/violet_butterfly.png"
  },

  {
    id: "violet_friend",
    name: "Violet Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/violet_friend.png"
  },

  {
    id: "volcanic_rhino",
    name: "Volcanic Rhino",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/volcanic_rhino.png"
  },

  {
    id: "vulture",
    name: "Vulture",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/vulture.png"
  },

  {
    id: "waffle_wyrm",
    name: "Waffle Wyrm",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/waffle_wyrm.png"
  },

  {
    id: "walrus",
    name: "Walrus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/walrus.png"
  },

  {
    id: "warthog",
    name: "Warthog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/warthog.png"
  },

  {
    id: "water_moon_bear",
    name: "Water Moon Bear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/water_moon_bear.png"
  },

  {
    id: "water_opossum",
    name: "Water Opossum",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/water_opossum.png"
  },

  {
    id: "water_rabbit",
    name: "Water Rabbit",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/water_rabbit.png"
  },

  {
    id: "weevil",
    name: "Weevil",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/weevil.png"
  },

  {
    id: "werewolf",
    name: "Werewolf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/werewolf.png"
  },

  {
    id: "white_amazon",
    name: "White Amazon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/white_amazon.png"
  },

  {
    id: "white_choccybunny",
    name: "White Choccybunny",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/white_choccybunny.png"
  },

  {
    id: "white_sand_dollar",
    name: "White Sand Dollar",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/white_sand_dollar.png"
  },

  {
    id: "wild_boar",
    name: "Wild Boar",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/wild_boar.png"
  },

  {
    id: "wildfire_hawk",
    name: "Wildfire Hawk",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/wildfire_hawk.png"
  },

  {
    id: "winged_tiger",
    name: "Winged Tiger",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/winged_tiger.png"
  },

  {
    id: "winter_buck",
    name: "Winter Buck",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/winter_buck.png"
  },

  {
    id: "winter_doe",
    name: "Winter Doe",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/winter_doe.png"
  },

  {
    id: "winter_fawn",
    name: "Winter Fawn",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/winter_fawn.png"
  },

  {
    id: "wolf",
    name: "Wolf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/wolf.png"
  },

  {
    id: "wood_pigeon",
    name: "Wood Pigeon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/wood_pigeon.png"
  },

  {
    id: "woodpecker",
    name: "Woodpecker",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/woodpecker.png"
  },

  {
    id: "woolly_rhino",
    name: "Woolly Rhino",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/woolly_rhino.png"
  },

  {
    id: "wrapped_doll",
    name: "Wrapped Doll",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/wrapped_doll.png"
  },

  {
    id: "wren",
    name: "Wren",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/wren.png"
  },

  {
    id: "wyvern",
    name: "Wyvern",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/wyvern.png"
  },

  {
    id: "yellow_butterfly",
    name: "Yellow Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/yellow_butterfly.png"
  },

  {
    id: "yellow_lipped_sea_krait",
    name: "Yellow-lipped Sea Krait",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/yellow_lipped_sea_krait.png"
  },

  {
    id: "yeti",
    name: "Yeti",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/yeti.png"
  },

  {
    id: "yule_log_dog",
    name: "Yule Log Dog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/yule_log_dog.png"
  },

  {
    id: "zebra",
    name: "Zebra",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/zebra.png"
  },

  {
    id: "zeopod",
    name: "Zeopod",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/zeopod.png"
  },

  {
    id: "zodiac_minion_chick",
    name: "Zodiac Minion Chick",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/zodiac_minion_chick.png"
  },

  {
    id: "zombie_chick",
    name: "Zombie Chick",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/zombie_chick.png"
  },

  {
    id: "zombie_wolf",
    name: "Zombie Wolf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/zombie_wolf.png"
  }
];

const pets = PET_DATABASE;

/* =========================================================
   ZAYAXRA — STABLE UI / CALCULATOR LAYER
   Database above is kept intact.
   ========================================================= */

let youTrade = [];
let themTrade = [];
let pickerSide = null;
let selectedPet = null;
let selectedForm = 'normal';
let selectedPotion = {fly:false, ride:false};
let recordedTradeKey = '';
let pickerValuesVisible = false;
let pickerCategory = 'all';

const $ = id => document.getElementById(id);

function formatValue(v){
  const n=Number(v||0);
  if(!Number.isFinite(n)) return '0';
  return Number.isInteger(n) ? String(n) : n.toFixed(1).replace(/\.0$/,'');
}

function rarityName(r){
  return ({legendary:'Legendary',ultra:'Ultra-Rare',rare:'Rare',uncommon:'Uncommon',common:'Common'})[r] || r || '';
}

function escapeHTML(s){
  return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function handleImageError(img){
  if(!img || img.dataset.failed) return;
  img.dataset.failed='1';
  img.src='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><rect width="160" height="160" rx="20" fill="#15182a"/><text x="80" y="85" text-anchor="middle" fill="#8b93a7" font-size="13" font-family="Arial">NO IMAGE</text></svg>');
}

function imageHTML(pet,cls='pet-photo'){
  return `<img src="${escapeHTML(pet?.image||'')}" alt="${escapeHTML(pet?.name||'Pet')}" class="${cls}" loading="lazy" onerror="handleImageError(this)">`;
}
    value: 0,
    image: "https://cdn.playadopt.me/items/chocolate_chip_bat_dragon.png"
  },

  {
    id: "chocolate_chow_chow",
    name: "Chocolate Chow-Chow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chocolate_chow_chow.png"
  },

  {
    id: "chocolate_dutch_guinea_pig",
    name: "Chocolate Dutch Guinea Pig",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chocolate_dutch_guinea_pig.png"
  },

  {
    id: "chocolate_labrador",
    name: "Chocolate Labrador",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/chocolate_labrador.png"
  },

  {
    id: "christmas_pudding_pup",
    name: "Christmas Pudding Pup",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/christmas_pudding_pup.png"
  },

  {
    id: "classic_teapot",
    name: "Classic Teapot",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/classic_teapot.png"
  },

  {
    id: "clementine_owl",
    name: "Clementine Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/clementine_owl.png"
  },

  {
    id: "clover_cow",
    name: "Clover Cow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/clover_cow.png"
  },

  {
    id: "clownfish",
    name: "Clownfish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/clownfish.png"
  },

  {
    id: "clubtail_dragonfly",
    name: "Clubtail Dragonfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/clubtail_dragonfly.png"
  },

  {
    id: "clumpty",
    name: "Clumpty",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/clumpty.png"
  },

  {
    id: "cobra",
    name: "Cobra",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cobra.png"
  },

  {
    id: "cockroach",
    name: "Cockroach",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cockroach.png"
  },

  {
    id: "cocoadile",
    name: "Cocoadile",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cocoadile.png"
  },

  {
    id: "coconut_friend",
    name: "Coconut Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/coconut_friend.png"
  },

  {
    id: "cold_cube",
    name: "Cold Cube",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cold_cube.png"
  },

  {
    id: "corgi",
    name: "Corgi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/corgi.png"
  },

  {
    id: "corn_doggo",
    name: "Corn Doggo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/corn_doggo.png"
  },

  {
    id: "cow_calf",
    name: "Cow Calf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cow_calf.png"
  },

  {
    id: "coyote",
    name: "Coyote",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/coyote.png"
  },

  {
    id: "crab",
    name: "Crab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/crab.png"
  },

  {
    id: "crimson_cape",
    name: "Crimson Cape",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/crimson_cape.png"
  },

  {
    id: "criosphinx",
    name: "Criosphinx",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/criosphinx.png"
  },

  {
    id: "cryptid",
    name: "Cryptid",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cryptid.png"
  },

  {
    id: "cuddly_candle",
    name: "Cuddly Candle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cuddly_candle.png"
  },

  {
    id: "cupid_dragon",
    name: "Cupid Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cupid_dragon.png"
  },

  {
    id: "cute_a_cabra",
    name: "Cute-A-Cabra",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/cute_a_cabra.png"
  },

  {
    id: "dango_penguins",
    name: "Dango Penguins",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dango_penguins.png"
  },

  {
    id: "dark_choccybunny",
    name: "Dark Choccybunny",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dark_choccybunny.png"
  },

  {
    id: "deathstalker_scorpion",
    name: "Deathstalker Scorpion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/deathstalker_scorpion.png"
  },

  {
    id: "deinonychus",
    name: "Deinonychus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/deinonychus.png"
  },

  {
    id: "diamond_albatross",
    name: "Diamond Albatross",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_albatross.png"
  },

  {
    id: "diamond_amazon",
    name: "Diamond Amazon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_amazon.png"
  },

  {
    id: "diamond_dragon",
    name: "Diamond Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_dragon.png"
  },

  {
    id: "diamond_hamster",
    name: "Diamond Hamster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_hamster.png"
  },

  {
    id: "diamond_king_penguin",
    name: "Diamond King Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_king_penguin.png"
  },

  {
    id: "diamond_ladybug",
    name: "Diamond Ladybug",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_ladybug.png"
  },

  {
    id: "diamond_mahi_mahi",
    name: "Diamond Mahi Mahi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_mahi_mahi.png"
  },

  {
    id: "diamond_unicorn",
    name: "Diamond Unicorn",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/diamond_unicorn.png"
  },

  {
    id: "dimension_drifter",
    name: "Dimension Drifter",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dimension_drifter.png"
  },

  {
    id: "dimorphodon",
    name: "Dimorphodon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dimorphodon.png"
  },

  {
    id: "dire_stag",
    name: "Dire Stag",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dire_stag.png"
  },

  {
    id: "dirty_ducky",
    name: "Dirty Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dirty_ducky.png"
  },

  {
    id: "dj_snooze",
    name: "DJ Snooze",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dj_snooze.png"
  },

  {
    id: "dolphin",
    name: "Dolphin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dolphin.png"
  },

  {
    id: "donkey",
    name: "Donkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/donkey.png"
  },

  {
    id: "dotted_eggy",
    name: "Dotted Eggy",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dotted_eggy.png"
  },

  {
    id: "dracula_fish",
    name: "Dracula Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dracula_fish.png"
  },

  {
    id: "dracula_parrot",
    name: "Dracula Parrot",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dracula_parrot.png"
  },

  {
    id: "dragonfly",
    name: "Dragonfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dragonfly.png"
  },

  {
    id: "dragonfruit_fox",
    name: "Dragonfruit Fox",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dragonfruit_fox.png"
  },

  {
    id: "drake",
    name: "Drake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/drake.png"
  },

  {
    id: "dugong",
    name: "Dugong",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dugong.png"
  },

  {
    id: "dylan",
    name: "Dylan",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/dylan.png"
  },

  {
    id: "easter_bunny",
    name: "Easter Bunny",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/easter_bunny.png"
  },

  {
    id: "eel",
    name: "Eel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/eel.png"
  },

  {
    id: "eggnog_dog",
    name: "Eggnog Dog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/eggnog_dog.png"
  },

  {
    id: "eggnog_hare",
    name: "Eggnog Hare",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/eggnog_hare.png"
  },

  {
    id: "ehecatl",
    name: "Ehecatl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ehecatl.png"
  },

  {
    id: "elasmosaurus",
    name: "Elasmosaurus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/elasmosaurus.png"
  },

  {
    id: "emberlight",
    name: "Emberlight",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/emberlight.png"
  },

  {
    id: "emperor_gorilla",
    name: "Emperor Gorilla",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/emperor_gorilla.png"
  },

  {
    id: "emperor_shrimp",
    name: "Emperor Shrimp",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/emperor_shrimp.png"
  },

  {
    id: "english_sheepdog",
    name: "English Sheepdog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/english_sheepdog.png"
  },

  {
    id: "ermine",
    name: "Ermine",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ermine.png"
  },

  {
    id: "evil_basilisk",
    name: "Evil Basilisk",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/evil_basilisk.png"
  },

  {
    id: "evil_chick",
    name: "Evil Chick",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/evil_chick.png"
  },

  {
    id: "evil_chickatrice",
    name: "Evil Chickatrice",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/evil_chickatrice.png"
  },

  {
    id: "evil_rock",
    name: "Evil Rock",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/evil_rock.png"
  },

  {
    id: "fairy_bat_dragon",
    name: "Fairy Bat Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fairy_bat_dragon.png"
  },

  {
    id: "fanghorn_tortoise",
    name: "Fanghorn Tortoise",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fanghorn_tortoise.png"
  },

  {
    id: "feesh",
    name: "Feesh",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/feesh.png"
  },

  {
    id: "fire_foal",
    name: "Fire Foal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fire_foal.png"
  },

  {
    id: "fire_mare",
    name: "Fire Mare",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fire_mare.png"
  },

  {
    id: "fire_stallion",
    name: "Fire Stallion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fire_stallion.png"
  },

  {
    id: "firefighter_gibbon",
    name: "Firefighter Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/firefighter_gibbon.png"
  },

  {
    id: "firefly",
    name: "Firefly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/firefly.png"
  },

  {
    id: "flaming_fox",
    name: "Flaming Fox",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/flaming_fox.png"
  },

  {
    id: "flaming_zebra",
    name: "Flaming Zebra",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/flaming_zebra.png"
  },

  {
    id: "fleur_de_ice",
    name: "Fleur De Ice",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fleur_de_ice.png"
  },

  {
    id: "floral_eggy",
    name: "Floral Eggy",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/floral_eggy.png"
  },

  {
    id: "flower_power_duckling",
    name: "Flower Power Duckling",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/flower_power_duckling.png"
  },

  {
    id: "flying_fish",
    name: "Flying Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/flying_fish.png"
  },

  {
    id: "forest_sprite",
    name: "Forest Sprite",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/forest_sprite.png"
  },

  {
    id: "fossa",
    name: "Fossa",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/fossa.png"
  },

  {
    id: "frankenfeline",
    name: "Frankenfeline",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frankenfeline.png"
  },

  {
    id: "french_bulldog",
    name: "French Bulldog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/french_bulldog.png"
  },

  {
    id: "frogspawn",
    name: "Frogspawn",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frogspawn.png"
  },

  {
    id: "frostbite_bear",
    name: "Frostbite Bear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frostbite_bear.png"
  },

  {
    id: "frostbite_cub",
    name: "Frostbite Cub",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frostbite_cub.png"
  },

  {
    id: "frostclaw",
    name: "Frostclaw",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frostclaw.png"
  },

  {
    id: "frozen_penguin",
    name: "Frozen Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/frozen_penguin.png"
  },

  {
    id: "gaelic_fae",
    name: "Gaelic Fae",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gaelic_fae.png"
  },

  {
    id: "galapagos_sea_lion",
    name: "Galapagos Sea Lion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/galapagos_sea_lion.png"
  },

  {
    id: "garden_snake",
    name: "Garden Snake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/garden_snake.png"
  },

  {
    id: "gargoyle",
    name: "Gargoyle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gargoyle.png"
  },

  {
    id: "gecko",
    name: "Gecko",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gecko.png"
  },

  {
    id: "gecko_ducky",
    name: "Gecko Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gecko_ducky.png"
  },

  {
    id: "general_sheepdog",
    name: "General Sheepdog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/general_sheepdog.png"
  },

  {
    id: "german_shepherd",
    name: "German Shepherd",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/german_shepherd.png"
  },

  {
    id: "ghost",
    name: "Ghost",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ghost.png"
  },

  {
    id: "ghost_chick",
    name: "Ghost Chick",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ghost_chick.png"
  },

  {
    id: "ghost_dog",
    name: "Ghost Dog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ghost_dog.png"
  },

  {
    id: "ghost_wolf",
    name: "Ghost Wolf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ghost_wolf.png"
  },

  {
    id: "ghostly_cat",
    name: "Ghostly Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ghostly_cat.png"
  },

  {
    id: "giant_anteater",
    name: "Giant Anteater",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/giant_anteater.png"
  },

  {
    id: "giant_black_scarab",
    name: "Giant Black Scarab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/giant_black_scarab.png"
  },

  {
    id: "giant_blue_scarab",
    name: "Giant Blue Scarab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/giant_blue_scarab.png"
  },

  {
    id: "giant_gold_scarab",
    name: "Giant Gold Scarab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/giant_gold_scarab.png"
  },

  {
    id: "gibbon",
    name: "Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gibbon.png"
  },

  {
    id: "gila_monster",
    name: "Gila Monster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gila_monster.png"
  },

  {
    id: "gilded_snake",
    name: "Gilded Snake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gilded_snake.png"
  },

  {
    id: "gingerbread_hare",
    name: "Gingerbread Hare",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gingerbread_hare.png"
  },

  {
    id: "gingerbread_mouse",
    name: "Gingerbread Mouse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gingerbread_mouse.png"
  },

  {
    id: "gingerbread_reindeer",
    name: "Gingerbread Reindeer",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gingerbread_reindeer.png"
  },

  {
    id: "glacier_kitsune",
    name: "Glacier Kitsune",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glacier_kitsune.png"
  },

  {
    id: "glacier_moth",
    name: "Glacier Moth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glacier_moth.png"
  },

  {
    id: "glormy_crab",
    name: "Glormy Crab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glormy_crab.png"
  },

  {
    id: "glormy_dolphin",
    name: "Glormy Dolphin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glormy_dolphin.png"
  },

  {
    id: "glormy_hound",
    name: "Glormy Hound",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glormy_hound.png"
  },

  {
    id: "glormy_leo",
    name: "Glormy Leo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glormy_leo.png"
  },

  {
    id: "glyptodon",
    name: "Glyptodon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glyptodon.png"
  },

  {
    id: "glyptodon_ducky",
    name: "Glyptodon Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/glyptodon_ducky.png"
  },

  {
    id: "gold_mahi_mahi",
    name: "Gold Mahi Mahi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/gold_mahi_mahi.png"
  },

  {
    id: "golden_albatross",
    name: "Golden Albatross",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/golden_albatross.png"
  },

  {
    id: "golden_chow_chow",
    name: "Golden Chow-Chow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/golden_chow_chow.png"
  },
// 3001–4000 arasındaki bölüm
// Devamı bir sonraki partta gelecek.

{
  id: "mole",
  name: "Mole",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/mole.png"
},

{
  id: "moon_owl",
  name: "Moon Owl",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/moon_owl.png"
},

{
  id: "moon_rabbit",
  name: "Moon Rabbit",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/moon_rabbit.png"
},

{
  id: "moonlight_moth",
  name: "Moonlight Moth",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/moonlight_moth.png"
},

{
  id: "mummy_cat",
  name: "Mummy Cat",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/mummy_cat.png"
},

{
  id: "musk_ox",
  name: "Musk Ox",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/musk_ox.png"
},

{
  id: "naga_dragon",
  name: "Naga Dragon",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/naga_dragon.png"
},

{
  id: "narwhal",
  name: "Narwhal",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/narwhal.png"
},

{
  id: "neon_choccybunny",
  name: "Neon Choccybunny",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/neon_choccybunny.png"
},

{
  id: "new_fissy",
  name: "New Fissy",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/new_fissy.png"
},

{
  id: "ocean_egg",
  name: "Ocean Egg",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/ocean_egg.png"
},

{
  id: "orangutan",
  name: "Orangutan",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/orangutan.png"
},

{
  id: "oriole",
  name: "Oriole",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/oriole.png"
},

{
  id: "panda",
  name: "Panda",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/panda.png"
},

{
  id: "parakeet",
  name: "Parakeet",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/parakeet.png"
},

{
  id: "peacock",
  name: "Peacock",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/peacock.png"
},

{
  id: "pomeranian",
  name: "Pomeranian",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/pomeranian.png"
},

{
  id: "poodle",
  name: "Poodle",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/poodle.png"
},

{
  id: "polar_bear",
  name: "Polar Bear",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/polar_bear.png"
},

{
  id: "poison_dart_frog",
  name: "Poison Dart Frog",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/poison_dart_frog.png"
},

{
  id: "princess_monkey",
  name: "Princess Monkey",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/princess_monkey.png"
},

{
  id: "pufferfish",
  name: "Pufferfish",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/pufferfish.png"
},

{
  id: "purple_butterfly",
  name: "Purple Butterfly",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/purple_butterfly.png"
},

{
  id: "queen_bee",
  name: "Queen Bee",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/queen_bee.png"
},

{
  id: "rainbow_dragon",
  name: "Rainbow Dragon",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/rainbow_dragon.png"
},

{
  id: "rat",
  name: "Rat",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/rat.png"
},

{
  id: "red_panda",
  name: "Red Panda",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/red_panda.png"
},

{
  id: "red_squirrel",
  name: "Red Squirrel",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/red_squirrel.png"
},

{
  id: "reindeer",
  name: "Reindeer",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/reindeer.png"
},

{
  id: "rhino",
  name: "Rhino",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/rhino.png"
},

{
  id: "robin",
  name: "Robin",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/robin.png"
},

{
  id: "rock",
  name: "Rock",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/rock.png"
},

{
  id: "rooster",
  name: "Rooster",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/rooster.png"
},

{
  id: "rose_dragon",
  name: "Rose Dragon",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/rose_dragon.png"
},

{
  id: "royal_capuchin_monkey",
  name: "Royal Capuchin Monkey",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/royal_capuchin_monkey.png"
},

{
  id: "royal_egg",
  name: "Royal Egg",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/royal_egg.png"
},

{
  id: "sabertooth",
  name: "Sabertooth",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/sabertooth.png"
},

{
  id: "salamander",
  name: "Salamander",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/salamander.png"
},

{
  id: "scarlet_butterfly",
  name: "Scarlet Butterfly",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/scarlet_butterfly.png"
},

{
  id: "scarecrow_cat",
  name: "Scarecrow Cat",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/scarecrow_cat.png"
},

{
  id: "scarecrow_horse",
  name: "Scarecrow Horse",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/scarecrow_horse.png"
},

{
  id: "scorpion",
  name: "Scorpion",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/scorpion.png"
},

{
  id: "seahorse",
  name: "Seahorse",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/seahorse.png"
},

{
  id: "shark",
  name: "Shark",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/shark.png"
},

{
  id: "sheep",
  name: "Sheep",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/sheep.png"
},

{
  id: "shrew",
  name: "Shrew",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/shrew.png"
},

{
  id: "skeleton_dog",
  name: "Skeleton Dog",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/skeleton_dog.png"
},

{
  id: "skunk",
  name: "Skunk",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/skunk.png"
},

{
  id: "slime",
  name: "Slime",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/slime.png"
},

{
  id: "slug",
  name: "Slug",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/slug.png"
},

{
  id: "snow_cat",
  name: "Snow Cat",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/snow_cat.png"
},

{
  id: "snow_leopard",
  name: "Snow Leopard",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/snow_leopard.png"
},

{
  id: "snow_monkey",
  name: "Snow Monkey",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/snow_monkey.png"
},

{
  id: "snow_owl",
  name: "Snow Owl",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/snow_owl.png"
},

{
  id: "space_whale",
  name: "Space Whale",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/space_whale.png"
},

{
  id: "sphinx",
  name: "Sphinx",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/sphinx.png"
},

{
  id: "spider_crab",
  name: "Spider Crab",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/spider_crab.png"
},

{
  id: "starfish",
  name: "Starfish",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/starfish.png"
},

{
  id: "stingray",
  name: "Stingray",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/stingray.png"
},

{
  id: "sugar_glider",
  name: "Sugar Glider",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/sugar_glider.png"
},

{
  id: "swan",
  name: "Swan",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/swan.png"
},

{
  id: "tarsier",
  name: "Tarsier",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/tarsier.png"
},

{
  id: "tasmanian_tiger",
  name: "Tasmanian Tiger",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/tasmanian_tiger.png"
},

{
  id: "therizinosaurus",
  name: "Therizinosaurus",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/therizinosaurus.png"
},

{
  id: "tiger",
  name: "Tiger",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/tiger.png"
},

{
  id: "toasty_red_panda",
  name: "Toasty Red Panda",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/toasty_red_panda.png"
},

{
  id: "toucan",
  name: "Toucan",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/toucan.png"
},

{
  id: "toy_monkey",
  name: "Toy Monkey",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/toy_monkey.png"
},

{
  id: "toy_poodle",
  name: "Toy Poodle",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/toy_poodle.png"
},

{
  id: "triceratops",
  name: "Triceratops",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/triceratops.png"
},

{
  id: "turtle",
  name: "Turtle",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/turtle.png"
},

{
  id: "unicorn",
  name: "Unicorn",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/unicorn.png"
},

{
  id: "vampire_dragon",
  name: "Vampire Dragon",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/vampire_dragon.png"
},

{
  id: "volcanic_rhino",
  name: "Volcanic Rhino",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/volcanic_rhino.png"
},

{
  id: "walrus",
  name: "Walrus",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/walrus.png"
},

{
  id: "werewolf",
  name: "Werewolf",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/werewolf.png"
},

{
  id: "wild_boar",
  name: "Wild Boar",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/wild_boar.png"
},

{
  id: "winged_horse",
  name: "Winged Horse",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/winged_horse.png"
},

{
  id: "wolf",
  name: "Wolf",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/wolf.png"
},

{
  id: "wood_pigeon",
  name: "Wood Pigeon",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/wood_pigeon.png"
},

{
  id: "zombie_wolf",
  name: "Zombie Wolf",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/zombie_wolf.png"
},
    value: 0,
    image: "https://cdn.playadopt.me/items/mole.png"
  },

  {
    id: "momma_moose",
    name: "Momma Moose",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/momma_moose.png"
  },

  {
    id: "mongoose",
    name: "Mongoose",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mongoose.png"
  },

  {
    id: "monkey_king",
    name: "Monkey King",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/monkey_king.png"
  },

  {
    id: "moon_rabbit",
    name: "Moon Rabbit",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/moon_rabbit.png"
  },

  {
    id: "moonbeam_butterfly",
    name: "Moonbeam Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/moonbeam_butterfly.png"
  },

  {
    id: "moonlight_moth",
    name: "Moonlight Moth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/moonlight_moth.png"
  },

  {
    id: "moonpine",
    name: "Moonpine",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/moonpine.png"
  },

  {
    id: "moose_calf",
    name: "Moose Calf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/moose_calf.png"
  },

  {
    id: "mosquito",
    name: "Mosquito",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mosquito.png"
  },

  {
    id: "mr_whiskerpips",
    name: "Mr. Whiskerpips",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mr_whiskerpips.png"
  },

  {
    id: "mrs_whiskerpips",
    name: "Mrs. Whiskerpips",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mrs_whiskerpips.png"
  },

  {
    id: "ms_muffet",
    name: "Ms. Muffet",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ms_muffet.png"
  },

  {
    id: "mule",
    name: "Mule",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mule.png"
  },

  {
    id: "munchkin_cat",
    name: "Munchkin Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/munchkin_cat.png"
  },

  {
    id: "mushroom_friend",
    name: "Mushroom Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/mushroom_friend.png"
  },

  {
    id: "muskrat",
    name: "Muskrat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/muskrat.png"
  },

  {
    id: "naga_dragon",
    name: "Naga Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/naga_dragon.png"
  },

  {
    id: "narwhal",
    name: "Narwhal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/narwhal.png"
  },

  {
    id: "naughty_mistletroll",
    name: "Naughty Mistletroll",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/naughty_mistletroll.png"
  },

  {
    id: "nautilus",
    name: "Nautilus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nautilus.png"
  },

  {
    id: "nebula_snake",
    name: "Nebula Snake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nebula_snake.png"
  },

  {
    id: "nessie",
    name: "Nessie",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nessie.png"
  },

  {
    id: "nightmare_owl",
    name: "Nightmare Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nightmare_owl.png"
  },

  {
    id: "ninja_monkey",
    name: "Ninja Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ninja_monkey.png"
  },

  {
    id: "nurse_shark",
    name: "Nurse Shark",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nurse_shark.png"
  },

  {
    id: "nutcracker_squirrel",
    name: "Nutcracker Squirrel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/nutcracker_squirrel.png"
  },

  {
    id: "oakee",
    name: "Oakee",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/oakee.png"
  },

  {
    id: "oakee_knight",
    name: "Oakee Knight",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/oakee_knight.png"
  },

  {
    id: "oakee_wizard",
    name: "Oakee Wizard",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/oakee_wizard.png"
  },

  {
    id: "ocelot",
    name: "Ocelot",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ocelot.png"
  },

  {
    id: "officer_gibbon",
    name: "Officer Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/officer_gibbon.png"
  },

  {
    id: "old_king_coal",
    name: "Old King Coal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/old_king_coal.png"
  },

  {
    id: "onza",
    name: "Onza",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/onza.png"
  },

  {
    id: "orange_betta_fish",
    name: "Orange Betta Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/orange_betta_fish.png"
  },

  {
    id: "orange_butterfly",
    name: "Orange Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/orange_butterfly.png"
  },

  {
    id: "orangutan",
    name: "Orangutan",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/orangutan.png"
  },

  {
    id: "orca",
    name: "Orca",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/orca.png"
  },

  {
    id: "orchid_butterfly",
    name: "Orchid Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/orchid_butterfly.png"
  },

  {
    id: "ornate_horned_frog",
    name: "Ornate Horned Frog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ornate_horned_frog.png"
  },

  {
    id: "oryx",
    name: "Oryx",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/oryx.png"
  },

  {
    id: "ostrich",
    name: "Ostrich",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ostrich.png"
  },

  {
    id: "owlbear",
    name: "Owlbear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/owlbear.png"
  },

  {
    id: "ox",
    name: "Ox",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ox.png"
  },

  {
    id: "pangolin",
    name: "Pangolin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pangolin.png"
  },

  {
    id: "papa_moose",
    name: "Papa Moose",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/papa_moose.png"
  },

  {
    id: "parakeet",
    name: "Parakeet",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/parakeet.png"
  },

  {
    id: "partridge",
    name: "Partridge",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/partridge.png"
  },

  {
    id: "patchy_bear",
    name: "Patchy Bear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/patchy_bear.png"
  },

  {
    id: "peach_owl",
    name: "Peach Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/peach_owl.png"
  },

  {
    id: "peacock",
    name: "Peacock",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/peacock.png"
  },

  {
    id: "pelican",
    name: "Pelican",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pelican.png"
  },

  {
    id: "peppermint_penguin",
    name: "Peppermint Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/peppermint_penguin.png"
  },

  {
    id: "peregrine_falcon",
    name: "Peregrine Falcon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/peregrine_falcon.png"
  },

  {
    id: "persian_cat",
    name: "Persian Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/persian_cat.png"
  },

  {
    id: "phantom_dragon",
    name: "Phantom Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/phantom_dragon.png"
  },

  {
    id: "pilot_gull",
    name: "Pilot Gull",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pilot_gull.png"
  },

  {
    id: "pine_marten",
    name: "Pine Marten",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pine_marten.png"
  },

  {
    id: "pineapple_owl",
    name: "Pineapple Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pineapple_owl.png"
  },

  {
    id: "pink_betta_fish",
    name: "Pink Betta Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pink_betta_fish.png"
  },

  {
    id: "pinkypillar",
    name: "Pinkypillar",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pinkypillar.png"
  },

  {
    id: "piranha",
    name: "Piranha",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/piranha.png"
  },

  {
    id: "pirate_ghost_capuchin_monkey",
    name: "Pirate Ghost Capuchin Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pirate_ghost_capuchin_monkey.png"
  },

  {
    id: "pirate_hermit_crab",
    name: "Pirate Hermit Crab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pirate_hermit_crab.png"
  },

  {
    id: "pistachio",
    name: "Pistachio",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pistachio.png"
  },

  {
    id: "poison_dart_frog",
    name: "Poison Dart Frog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/poison_dart_frog.png"
  },

  {
    id: "pomeranian",
    name: "Pomeranian",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pomeranian.png"
  },

  {
    id: "poodle",
    name: "Poodle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/poodle.png"
  },

  {
    id: "possum",
    name: "Possum",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/possum.png"
  },

  {
    id: "praying_mantis",
    name: "Praying Mantis",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/praying_mantis.png"
  },

  {
    id: "preppy_capuchin_monkey",
    name: "Preppy Capuchin Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/preppy_capuchin_monkey.png"
  },

  {
    id: "pretty_pony",
    name: "Pretty Pony",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pretty_pony.png"
  },

  {
    id: "priceless_shrimp",
    name: "Priceless Shrimp",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/priceless_shrimp.png"
  },

  {
    id: "primal_kaijunior",
    name: "Primal Kaijunior",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/primal_kaijunior.png"
  },

  {
    id: "princess_capuchin_monkey",
    name: "Princess Capuchin Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/princess_capuchin_monkey.png"
  },

  {
    id: "princess_mare",
    name: "Princess Mare",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/princess_mare.png"
  },

  {
    id: "prism_snake",
    name: "Prism Snake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/prism_snake.png"
  },

  {
    id: "prismatic_butterfly",
    name: "Prismatic Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/prismatic_butterfly.png"
  },

  {
    id: "pterodactyl",
    name: "Pterodactyl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pterodactyl.png"
  },

  {
    id: "pudding_cat",
    name: "Pudding Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pudding_cat.png"
  },

  {
    id: "puffer_fish",
    name: "Puffer Fish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/puffer_fish.png"
  },

  {
    id: "puffin",
    name: "Puffin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/puffin.png"
  },

  {
    id: "pumpkin_friend",
    name: "Pumpkin Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pumpkin_friend.png"
  },

  {
    id: "punk_pony",
    name: "Punk Pony",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/punk_pony.png"
  },

  {
    id: "pupcake",
    name: "Pupcake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/pupcake.png"
  },

  {
    id: "puptune",
    name: "Puptune",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/puptune.png"
  },

  {
    id: "purple_butterfly",
    name: "Purple Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/purple_butterfly.png"
  },

  {
    id: "purrowl",
    name: "Purrowl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/purrowl.png"
  },

  {
    id: "quetzalcoatl",
    name: "Quetzalcoatl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/quetzalcoatl.png"
  },

  {
    id: "quokka",
    name: "Quokka",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/quokka.png"
  },

  {
    id: "raccoon",
    name: "Raccoon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/raccoon.png"
  },

  {
    id: "rainbow_dragon",
    name: "Rainbow Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rainbow_dragon.png"
  },

  {
    id: "rainbow_trout",
    name: "Rainbow Trout",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rainbow_trout.png"
  },

  {
    id: "ram",
    name: "Ram",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ram.png"
  },

  {
    id: "ranger_beaver",
    name: "Ranger Beaver",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ranger_beaver.png"
  },

  {
    id: "rat",
    name: "Rat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rat.png"
  },

  {
    id: "ratatoskr",
    name: "Ratatoskr",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ratatoskr.png"
  },

  {
    id: "rattlesnake",
    name: "Rattlesnake",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rattlesnake.png"
  },

  {
    id: "red_cardinal",
    name: "Red Cardinal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_cardinal.png"
  },

  {
    id: "red_crowned_crane",
    name: "Red Crowned Crane",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_crowned_crane.png"
  },

  {
    id: "red_dutch_guinea_pig",
    name: "Red Dutch Guinea Pig",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_dutch_guinea_pig.png"
  },

  {
    id: "red_panda_ducky",
    name: "Red Panda Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_panda_ducky.png"
  },

  {
    id: "red_sand_dollar",
    name: "Red Sand Dollar",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_sand_dollar.png"
  },

  {
    id: "red_squirrel",
    name: "Red Squirrel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/red_squirrel.png"
  },

  {
    id: "rhino_beetle",
    name: "Rhino Beetle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rhino_beetle.png"
  },

  {
    id: "ribbon_seal",
    name: "Ribbon Seal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ribbon_seal.png"
  },

  {
    id: "rice_cake_rabbit",
    name: "Rice Cake Rabbit",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rice_cake_rabbit.png"
  },

  {
    id: "ring_tailed_lemur",
    name: "Ring-tailed Lemur",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ring_tailed_lemur.png"
  },

  {
    id: "ringmaster_gibbon",
    name: "Ringmaster Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ringmaster_gibbon.png"
  },

  {
    id: "river",
    name: "River",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/river.png"
  },

  {
    id: "river_otter",
    name: "River Otter",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/river_otter.png"
  },

  {
    id: "roadrunner",
    name: "Roadrunner",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/roadrunner.png"
  },

  {
    id: "robot",
    name: "Robot",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/robot.png"
  },

  {
    id: "rock",
    name: "Rock",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rock.png"
  },

  {
    id: "rock_pigeon",
    name: "Rock Pigeon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rock_pigeon.png"
  },

  {
    id: "rodeo_bull",
    name: "Rodeo Bull",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rodeo_bull.png"
  },

  {
    id: "rooster",
    name: "Rooster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rooster.png"
  },

  {
    id: "rose_dragon",
    name: "Rose Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rose_dragon.png"
  },

  {
    id: "rosy_maple_moth",
    name: "Rosy Maple Moth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rosy_maple_moth.png"
  },

  {
    id: "royal_capuchin_monkey",
    name: "Royal Capuchin Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/royal_capuchin_monkey.png"
  },

  {
    id: "royal_corgi",
    name: "Royal Corgi",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/royal_corgi.png"
  },

  {
    id: "royal_palace_spaniel",
    name: "Royal Palace Spaniel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/royal_palace_spaniel.png"
  },

  {
    id: "rubber_ducky",
    name: "Rubber Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/rubber_ducky.png"
  },

  {
    id: "ruddy_duck",
    name: "Ruddy Duck",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ruddy_duck.png"
  },

  {
    id: "s_mores_raccoon",
    name: "S'mores Raccoon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/s_mores_raccoon.png"
  },

  {
    id: "sabertooth",
    name: "Sabertooth",
    rarity: "unknown"
         value: 0,
    image: "https://cdn.playadopt.me/items/sabertooth.png"
  },

  {
    id: "sado_mole",
    name: "Sado Mole",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sado_mole.png"
  },

  {
    id: "sakura_spirit",
    name: "Sakura Spirit",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sakura_spirit.png"
  },

  {
    id: "salamander",
    name: "Salamander",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/salamander.png"
  },

  {
    id: "sandfish",
    name: "Sandfish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sandfish.png"
  },

  {
    id: "scarebear",
    name: "Scarebear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarebear.png"
  },

  {
    id: "scarecrow",
    name: "Scarecrow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarecrow.png"
  },

  {
    id: "scarecrow_cat",
    name: "Scarecrow Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarecrow_cat.png"
  },

  {
    id: "scarecrow_crow",
    name: "Scarecrow Crow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarecrow_crow.png"
  },

  {
    id: "scarecrow_horse",
    name: "Scarecrow Horse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarecrow_horse.png"
  },

  {
    id: "scarlet_butterfly",
    name: "Scarlet Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scarlet_butterfly.png"
  },

  {
    id: "scorching_kaijunior",
    name: "Scorching Kaijunior",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/scorching_kaijunior.png"
  },

  {
    id: "sea_angel",
    name: "Sea Angel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sea_angel.png"
  },

  {
    id: "sea_skeleton_panda",
    name: "Sea Skeleton Panda",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sea_skeleton_panda.png"
  },

  {
    id: "sea_slug",
    name: "Sea Slug",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sea_slug.png"
  },

  {
    id: "sea_turtle",
    name: "Sea Turtle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sea_turtle.png"
  },

  {
    id: "seabed_creeper",
    name: "Seabed Creeper",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/seabed_creeper.png"
  },

  {
    id: "seafoam_butterfly",
    name: "Seafoam Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/seafoam_butterfly.png"
  },

  {
    id: "seagull",
    name: "Seagull",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/seagull.png"
  },

  {
    id: "seahorse",
    name: "Seahorse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/seahorse.png"
  },

  {
    id: "shadow_dragon_ducky",
    name: "Shadow Dragon Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shadow_dragon_ducky.png"
  },

  {
    id: "shark_puppy",
    name: "Shark Puppy",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shark_puppy.png"
  },

  {
    id: "sheeeeep",
    name: "Sheeeeep",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sheeeeep.png"
  },

  {
    id: "sheepdog_ducky",
    name: "Sheepdog Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sheepdog_ducky.png"
  },

  {
    id: "shetland_pony_dark_brown",
    name: "Shetland Pony Dark Brown",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shetland_pony_dark_brown.png"
  },

  {
    id: "shetland_pony_light_brown",
    name: "Shetland Pony Light Brown",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shetland_pony_light_brown.png"
  },

  {
    id: "shetland_pony_white",
    name: "Shetland Pony White",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shetland_pony_white.png"
  },

  {
    id: "shih_tzu",
    name: "Shih Tzu",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shih_tzu.png"
  },

  {
    id: "shiver_wolf",
    name: "Shiver Wolf",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/shiver_wolf.png"
  },

  {
    id: "show_pony",
    name: "Show Pony",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/show_pony.png"
  },

  {
    id: "siamese_cat",
    name: "Siamese Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/siamese_cat.png"
  },

  {
    id: "silverback_gorilla",
    name: "Silverback Gorilla",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/silverback_gorilla.png"
  },

  {
    id: "singularity_beetle",
    name: "Singularity Beetle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/singularity_beetle.png"
  },

  {
    id: "singularity_pisces",
    name: "Singularity Pisces",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/singularity_pisces.png"
  },

  {
    id: "skelebat",
    name: "Skelebat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/skelebat.png"
  },

  {
    id: "skunk",
    name: "Skunk",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/skunk.png"
  },

  {
    id: "slime",
    name: "Slime",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/slime.png"
  },

  {
    id: "slimingo",
    name: "Slimingo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/slimingo.png"
  },

  {
    id: "slug",
    name: "Slug",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/slug.png"
  },

  {
    id: "sneak_weasel",
    name: "Sneak Weasel",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sneak_weasel.png"
  },

  {
    id: "snorgle",
    name: "Snorgle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snorgle.png"
  },

  {
    id: "snow_leopard",
    name: "Snow Leopard",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snow_leopard.png"
  },

  {
    id: "snow_monkey",
    name: "Snow Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snow_monkey.png"
  },

  {
    id: "snowball_pet",
    name: "Snowball Pet",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snowball_pet.png"
  },

  {
    id: "snowball_pug",
    name: "Snowball Pug",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snowball_pug.png"
  },

  {
    id: "snowman",
    name: "Snowman",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snowman.png"
  },

  {
    id: "snowy_mammoth",
    name: "Snowy Mammoth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/snowy_mammoth.png"
  },

  {
    id: "solaris",
    name: "Solaris",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/solaris.png"
  },

  {
    id: "space_whale",
    name: "Space Whale",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/space_whale.png"
  },

  {
    id: "spider_crab",
    name: "Spider Crab",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/spider_crab.png"
  },

  {
    id: "spinosaurus",
    name: "Spinosaurus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/spinosaurus.png"
  },

  {
    id: "sprout_snail",
    name: "Sprout Snail",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sprout_snail.png"
  },

  {
    id: "squid",
    name: "Squid",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/squid.png"
  },

  {
    id: "st_bernard",
    name: "St Bernard",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/st_bernard.png"
  },

  {
    id: "starhopper",
    name: "Starhopper",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/starhopper.png"
  },

  {
    id: "starmite",
    name: "Starmite",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/starmite.png"
  },

  {
    id: "steppe_lion",
    name: "Steppe Lion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/steppe_lion.png"
  },

  {
    id: "stingray",
    name: "Stingray",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/stingray.png"
  },

  {
    id: "storm_condor",
    name: "Storm Condor",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/storm_condor.png"
  },

  {
    id: "strawberry_penguin",
    name: "Strawberry Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/strawberry_penguin.png"
  },

  {
    id: "strawberry_shortcake_bat_dragon",
    name: "Strawberry Shortcake Bat Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/strawberry_shortcake_bat_dragon.png"
  },

  {
    id: "strawberry_shortcake_ducky",
    name: "Strawberry Shortcake Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/strawberry_shortcake_ducky.png"
  },

  {
    id: "strawberry_tortle",
    name: "Strawberry Tortle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/strawberry_tortle.png"
  },

  {
    id: "striped_eggy",
    name: "Striped Eggy",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/striped_eggy.png"
  },

  {
    id: "stygian_owl",
    name: "Stygian Owl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/stygian_owl.png"
  },

  {
    id: "subzero_scorpion",
    name: "Subzero Scorpion",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/subzero_scorpion.png"
  },

  {
    id: "sugar_axolotl",
    name: "Sugar Axolotl",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sugar_axolotl.png"
  },

  {
    id: "sugar_glider",
    name: "Sugar Glider",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sugar_glider.png"
  },

  {
    id: "summer_walrus",
    name: "Summer Walrus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/summer_walrus.png"
  },

  {
    id: "sunflower_friend",
    name: "Sunflower Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sunflower_friend.png"
  },

  {
    id: "sunglider",
    name: "Sunglider",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sunglider.png"
  },

  {
    id: "sunrise_duckling",
    name: "Sunrise Duckling",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sunrise_duckling.png"
  },

  {
    id: "super_saru",
    name: "Super Saru",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/super_saru.png"
  },

  {
    id: "sushi_penguin",
    name: "Sushi Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sushi_penguin.png"
  },

  {
    id: "sweetheart_rat",
    name: "Sweetheart Rat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/sweetheart_rat.png"
  },

  {
    id: "swordfish",
    name: "Swordfish",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/swordfish.png"
  },

  {
    id: "t_rex",
    name: "T-Rex",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/t_rex.png"
  },

  {
    id: "tan_chow_chow",
    name: "Tan Chow-Chow",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tan_chow_chow.png"
  },

  {
    id: "tanuki",
    name: "Tanuki",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tanuki.png"
  },

  {
    id: "tarantula",
    name: "Tarantula",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tarantula.png"
  },

  {
    id: "tarsier",
    name: "Tarsier",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tarsier.png"
  },

  {
    id: "tasmanian_devil",
    name: "Tasmanian Devil",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tasmanian_devil.png"
  },

  {
    id: "tasmanian_tiger",
    name: "Tasmanian Tiger",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tasmanian_tiger.png"
  },

  {
    id: "tawny_frogmouth",
    name: "Tawny Frogmouth",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tawny_frogmouth.png"
  },

  {
    id: "tealwood_monster",
    name: "Tealwood Monster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tealwood_monster.png"
  },

  {
    id: "tegu",
    name: "Tegu",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tegu.png"
  },

  {
    id: "temple_friend",
    name: "Temple Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/temple_friend.png"
  },

  {
    id: "the_black_dog",
    name: "The Black Dog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/the_black_dog.png"
  },

  {
    id: "therapy_dog",
    name: "Therapy Dog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/therapy_dog.png"
  },

  {
    id: "thorny_devil",
    name: "Thorny Devil",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/thorny_devil.png"
  },

  {
    id: "three_blind_mice",
    name: "Three Blind Mice",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/three_blind_mice.png"
  },

  {
    id: "ti_de_nadal",
    name: "Tió De Nadal",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/ti_de_nadal.png"
  },

  {
    id: "toasty_red_panda",
    name: "Toasty Red Panda",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/toasty_red_panda.png"
  },

  {
    id: "tortoiseshell_guinea_pig",
    name: "Tortoiseshell Guinea Pig",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tortoiseshell_guinea_pig.png"
  },

  {
    id: "tortuga_de_la_isla",
    name: "Tortuga de la Isla",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tortuga_de_la_isla.png"
  },

  {
    id: "toxic_kaijunior",
    name: "Toxic Kaijunior",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/toxic_kaijunior.png"
  },

  {
    id: "toy_monkey",
    name: "Toy Monkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/toy_monkey.png"
  },

  {
    id: "toy_poodle",
    name: "Toy Poodle",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/toy_poodle.png"
  },

  {
    id: "trapdoor_snail",
    name: "Trapdoor Snail",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/trapdoor_snail.png"
  },

  {
    id: "tree_frog",
    name: "Tree Frog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tree_frog.png"
  },

  {
    id: "tree_kangaroo",
    name: "Tree Kangaroo",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tree_kangaroo.png"
  },

  {
    id: "tree_sasquatch",
    name: "Tree Sasquatch",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tree_sasquatch.png"
  },

  {
    id: "tri_horned_treehopper",
    name: "Tri-horned Treehopper",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tri_horned_treehopper.png"
  },

  {
    id: "turkey",
    name: "Turkey",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/turkey.png"
  },

  {
    id: "tuxedo_cat",
    name: "Tuxedo Cat",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/tuxedo_cat.png"
  },

  {
    id: "undead_elk",
    name: "Undead Elk",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/undead_elk.png"
  },

  {
    id: "undead_jousting_horse",
    name: "Undead Jousting Horse",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/undead_jousting_horse.png"
  },

  {
    id: "unicorn_ducky",
    name: "Unicorn Ducky",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/unicorn_ducky.png"
  },

  {
    id: "urchin",
    name: "Urchin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/urchin.png"
  },

  {
    id: "vampire_dragon",
    name: "Vampire Dragon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/vampire_dragon.png"
  },

  {
    id: "vanilla_penguin",
    name: "Vanilla Penguin",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/vanilla_penguin.png"
  },

  {
    id: "velociraptor",
    name: "Velociraptor",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/velociraptor.png"
  },

  {
    id: "velocirooster",
    name: "Velocirooster",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/velocirooster.png"
  },

  {
    id: "vermilion_butterfly",
    name: "Vermilion Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/vermilion_butterfly.png"
  },

  {
    id: "villain_gibbon",
    name: "Villain Gibbon",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/villain_gibbon.png"
  },

  {
    id: "violet_butterfly",
    name: "Violet Butterfly",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/violet_butterfly.png"
  },

  {
    id: "violet_friend",
    name: "Violet Friend",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/violet_friend.png"
  },

  {
    id: "volcanic_rhino",
    name: "Volcanic Rhino",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/volcanic_rhino.png"
  },

  {
    id: "vulture",
    name: "Vulture",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/vulture.png"
  },

  {
    id: "waffle_wyrm",
    name: "Waffle Wyrm",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/waffle_wyrm.png"
  },

  {
    id: "walrus",
    name: "Walrus",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/walrus.png"
  },

  {
    id: "warthog",
    name: "Warthog",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/warthog.png"
  },

  {
    id: "water_moon_bear",
    name: "Water Moon Bear",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/water_moon_bear.png"
  },

  {
    id: "water_opossum",
    name: "Water Opossum",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/water_opossum.png"
  },

  {
    id: "water_rabbit",
    name: "Water Rabbit",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/water_rabbit.png"
  },

  {
    id: "weevil",
    name: "Weevil",
    rarity: "unknown",
    value: 0,
    image: "https://cdn.playadopt.me/items/weevil.png"
  },
{
  id: "weevil",
  name: "Weevil",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/weevil.png"
},

{
  id: "werewolf",
  name: "Werewolf",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/werewolf.png"
},

{
  id: "white_amazon",
  name: "White Amazon",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/white_amazon.png"
},

{
  id: "white_choccybunny",
  name: "White Choccybunny",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/white_choccybunny.png"
},

{
  id: "white_sand_dollar",
  name: "White Sand Dollar",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/white_sand_dollar.png"
},

{
  id: "wild_boar",
  name: "Wild Boar",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/wild_boar.png"
},

{
  id: "wildfire_hawk",
  name: "Wildfire Hawk",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/wildfire_hawk.png"
},

{
  id: "winged_tiger",
  name: "Winged Tiger",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/winged_tiger.png"
},

{
  id: "winter_buck",
  name: "Winter Buck",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/winter_buck.png"
},

{
  id: "winter_doe",
  name: "Winter Doe",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/winter_doe.png"
},

{
  id: "winter_fawn",
  name: "Winter Fawn",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/winter_fawn.png"
},

{
  id: "wolf",
  name: "Wolf",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/wolf.png"
},

{
  id: "wood_pigeon",
  name: "Wood Pigeon",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/wood_pigeon.png"
},

{
  id: "woodpecker",
  name: "Woodpecker",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/woodpecker.png"
},

{
  id: "woolly_rhino",
  name: "Woolly Rhino",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/woolly_rhino.png"
},

{
  id: "wrapped_doll",
  name: "Wrapped Doll",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/wrapped_doll.png"
},

{
  id: "wren",
  name: "Wren",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/wren.png"
},

{
  id: "wyvern",
  name: "Wyvern",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/wyvern.png"
},

{
  id: "yellow_butterfly",
  name: "Yellow Butterfly",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/yellow_butterfly.png"
},

{
  id: "yellow_lipped_sea_krait",
  name: "Yellow-lipped Sea Krait",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/yellow_lipped_sea_krait.png"
},

{
  id: "yeti",
  name: "Yeti",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/yeti.png"
},

{
  id: "yule_log_dog",
  name: "Yule Log Dog",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/yule_log_dog.png"
},

{
  id: "zebra",
  name: "Zebra",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/zebra.png"
},

{
  id: "zeopod",
  name: "Zeopod",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/zeopod.png"
},

{
  id: "zodiac_minion_chick",
  name: "Zodiac Minion Chick",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/zodiac_minion_chick.png"
},

{
  id: "zombie_chick",
  name: "Zombie Chick",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/zombie_chick.png"
},

{
  id: "zombie_wolf",
  name: "Zombie Wolf",
  rarity: "unknown",
  value: 0,
  image: "https://cdn.playadopt.me/items/zombie_wolf.png"
}
];

const pets = PET_DATABASE;

/* =========================================================
   ZAYAXRA — STABLE UI / CALCULATOR LAYER
   Database above is kept intact.
   ========================================================= */

let youTrade = [];
let themTrade = [];
let pickerSide = null;
let selectedPet = null;
let selectedForm = 'normal';
let selectedPotion = {fly:false, ride:false};
let recordedTradeKey = '';
let pickerValuesVisible = false;
let pickerCategory = 'all';

const $ = id => document.getElementById(id);

function formatValue(v){
  const n=Number(v||0);
  if(!Number.isFinite(n)) return '0';
  return Number.isInteger(n) ? String(n) : n.toFixed(1).replace(/\.0$/,'');
}

function rarityName(r){
  return ({legendary:'Legendary',ultra:'Ultra-Rare',rare:'Rare',uncommon:'Uncommon',common:'Common'})[r] || r || '';
}

function escapeHTML(s){
  return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

function handleImageError(img){
  if(!img || img.dataset.failed) return;
  img.dataset.failed='1';
  img.src='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><rect width="160" height="160" rx="20" fill="#15182a"/><text x="80" y="85" text-anchor="middle" fill="#8b93a7" font-size="13" font-family="Arial">NO IMAGE</text></svg>');
}

function imageHTML(pet,cls='pet-photo'){
  return `<img src="${escapeHTML(pet?.image||'')}" alt="${escapeHTML(pet?.name||'Pet')}" class="${cls}" loading="lazy" onerror="handleImageError(this)">`;
}

/* ---------------------------------------------------------
   VALUE LIST
--------------------------------------------------------- */

function renderValues(){
  const grid=$('valueGrid');
  if(!grid) return;
  const q=($('search')?.value||'').trim().toLowerCase();
  const list=pets.filter(p=>p.name.toLowerCase().includes(q)||String(p.rarity).toLowerCase().includes(q));
  grid.innerHTML='';
  if(!list.length){
    grid.innerHTML='<div class="empty-picker"><span>🔎</span><strong>Pet bulunamadı</strong><small>Başka bir isim dene.</small></div>';
    return;
  }
  list.forEach(p=>{
    const card=document.createElement('div');
    card.className='value-card';
    card.innerHTML=`<div class="value-image">${imageHTML(p)}</div><div class="value-info"><h3>${escapeHTML(p.name)}</h3><span class="rarity-small ${escapeHTML(p.rarity)}">${escapeHTML(rarityName(p.rarity))}</span><strong>Value: ${formatValue(p.value)}</strong></div>`;
    grid.appendChild(card);
  });
}

/* ---------------------------------------------------------
   PICKER HELPERS
--------------------------------------------------------- */

function pickerModal(){ return $('petPicker') || $('petPickerModal'); }
function pickerSearch(){ return $('petSearch') || $('pickerSearch'); }
function pickerGrid(){ return $('pickerPets') || $('pickerPetList'); }
function pickerBar(){ return $('pickerBar'); }

function itemCategory(p){
  const type=String(p?.type||p?.category||'pets').toLowerCase();
  if(type.includes('wear')) return 'petwear';
  if(type.includes('egg')) return 'eggs';
  if(type.includes('vehicle')) return 'vehicles';
  if(type.includes('toy')) return 'toys';
  if(type.includes('gift')) return 'gifts';
  return 'pets';
}

function categoryLabel(c){
  return ({all:'ALL',pets:'PETS',petwear:'PET WEAR',eggs:'EGGS',vehicles:'VEHICLES',toys:'TOYS',gifts:'GIFTS'})[c] || c.toUpperCase();
}

function ensurePickerCategorySidebar(){
  const modal=pickerModal();
  if(!modal) return;
  const windowEl=modal.querySelector('.profile-window, .pet-modal-box');
  if(!windowEl) return;
  let side=windowEl.querySelector('.zayaxra-category-sidebar');
  if(!side){
    side=document.createElement('div');
    side.className='zayaxra-category-sidebar';
    const search=windowEl.querySelector('.modal-search, #pickerSearch, #petSearch, .pet-search');
    if(search) search.insertAdjacentElement('beforebegin',side);
    else windowEl.insertBefore(side,windowEl.firstChild);
  }
  side.innerHTML='';
  ['all','pets','petwear','eggs','vehicles','toys','gifts'].forEach(cat=>{
    const b=document.createElement('button');
    b.type='button';
    b.className='zayaxra-category-btn'+(pickerCategory===cat?' active':'');
    b.textContent=categoryLabel(cat);
    b.addEventListener('click',e=>{
      e.preventDefault(); e.stopPropagation();
      pickerCategory=cat;
      ensurePickerCategorySidebar();
      filterPickerPets();
    });
    side.appendChild(b);
  });

  if(!document.getElementById('zayaxraPickerCompatStyles')){
    const s=document.createElement('style');
    s.id='zayaxraPickerCompatStyles';
    s.textContent=`
      .zayaxra-category-sidebar{display:flex;gap:7px;overflow-x:auto;padding:0 0 10px;margin-bottom:10px;scrollbar-width:thin}
      .zayaxra-category-btn{flex:0 0 auto;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);color:#8d93a5;border-radius:10px;padding:8px 11px;font-size:9px;font-weight:900;letter-spacing:.08em;cursor:pointer}
      .zayaxra-category-btn:hover,.zayaxra-category-btn.active{color:#fff;background:rgba(139,124,255,.14);border-color:rgba(139,124,255,.35)}
      .zayaxra-variant-row{display:flex!important;flex-direction:row!important;flex-wrap:nowrap!important;align-items:center!important;gap:8px!important}
      .zayaxra-variant-row button{width:48px!important;min-width:48px!important;height:40px!important;padding:0!important;display:flex!important;align-items:center!important;justify-content:center!important;font-weight:900!important}
      body.modal-open,body.profile-open{overflow:hidden}
    `;
    document.head.appendChild(s);
  }
}

function normalizePickerControls(){
  /* Current HTML already contains the buttons. We only hide the obsolete combined F/R button and old Normal potion button. */
  $('flyRideBtn')?.remove();
  $('noPotionBtn')?.remove();

  const formBox=document.querySelector('.form-toggles');
  const potionBox=document.querySelector('.potion-toggles');
  const options=document.querySelector('.picker-options');
  if(formBox && potionBox && options){
    let row=options.querySelector('.zayaxra-variant-row');
    if(!row){
      row=document.createElement('div');
      row.className='zayaxra-variant-row';
      options.innerHTML='';
      options.appendChild(row);
      [
        formBox.querySelector('#normalFormBtn'),
        formBox.querySelector('#btnNeon'),
        formBox.querySelector('#btnMega'),
        potionBox.querySelector('#btnFly'),
        potionBox.querySelector('#btnRide')
      ].filter(Boolean).forEach(b=>row.appendChild(b));
    }
  }
}

function openPetPicker(side){
  pickerSide=side;
  selectedPet=null;
  /* IMPORTANT: do NOT reset selectedForm / selectedPotion when opening another side. */
  const title=$('petPickerTitle');
  if(title) title.textContent=side==='you'?'Senin teklifine pet ekle':'Karşı tarafın teklifine pet ekle';
  const search=pickerSearch();
  if(search) search.value='';
  pickerCategory='all';
  pickerValuesVisible=false;
  normalizePickerControls();
  ensurePickerCategorySidebar();
  updatePickerBar();
  filterPickerPets();
  const modal=pickerModal();
  if(!modal) return;
  modal.classList.add('show');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('profile-open');
  setTimeout(()=>pickerSearch()?.focus(),50);
}

function closePetPicker(){
  const m=pickerModal();
  if(!m) return;
  m.classList.remove('show','open');
  m.setAttribute('aria-hidden','true');
  document.body.classList.remove('profile-open');
  pickerSide=null;
  selectedPet=null;
}

function filteredPickerList(){
  const q=(pickerSearch()?.value||'').trim().toLowerCase();
  return pets.filter(p=>{
    const catMatch=pickerCategory==='all' || itemCategory(p)===pickerCategory;
    const qMatch=!q || p.name.toLowerCase().includes(q) || String(p.rarity).toLowerCase().includes(q);
    return catMatch && qMatch;
  });
}

function renderPickerPets(list=filteredPickerList()){
  const box=pickerGrid();
  if(!box) return;
  box.innerHTML='';
  if(!list.length){
    box.innerHTML='<div class="empty-picker"><span>🔎</span><strong>Pet bulunamadı</strong><small>Arama kelimesini değiştir.</small></div>';
    return;
  }
  list.forEach(p=>{
    const b=document.createElement('button');
    b.type='button';
    b.className='pet-choice'+(selectedPet?.id===p.id?' selected':'');
    b.innerHTML=`<div class="choice-image">${imageHTML(p)}</div><strong>${escapeHTML(p.name)}</strong><span class="rarity-tag ${escapeHTML(p.rarity)}">${escapeHTML(rarityName(p.rarity))}</span><small class="picker-choice-value" style="${pickerValuesVisible?'':'filter:blur(5px);opacity:.55'}">${formatValue(p.value)}</small>`;
    b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();selectPickerPet(p);});
    box.appendChild(b);
  });
}

function filterPickerPets(){
  ensurePickerCategorySidebar();
  renderPickerPets(filteredPickerList());
}

function selectPickerPet(p){
  if(!p) return;
  selectedPet=p;
  /* Keep the D/N/M/F/R selection when changing to another pet. */
  pickerBar()?.classList.remove('hidden');
  renderPickerPreview();
  updatePickerButtons();
  updatePickerValue();
  /* DO NOT rerender the full list here. */
  document.querySelectorAll('.pet-choice').forEach(x=>x.classList.toggle('selected',x.querySelector('strong')?.textContent===p.name));
}

function renderPickerPreview(){
  const box=$('pickerPreview');
  if(!box) return;
  if(!selectedPet){
    box.innerHTML='';
    return;
  }
  box.innerHTML=`<div class="pet-image-wrap">${selectedForm==='neon'?'<div class="neon-effect"></div>':''}${selectedForm==='mega'?'<div class="mega-effect"></div>':''}${imageHTML(selectedPet)}<div class="pet-badges">${selectedForm==='neon'?'<span class="mini-chip neon">N</span>':''}${selectedForm==='mega'?'<span class="mini-chip mega">M</span>':''}${selectedPotion.fly?'<span class="mini-chip fly">F</span>':''}${selectedPotion.ride?'<span class="mini-chip ride">R</span>':''}</div></div><div class="preview-info"><strong>${escapeHTML(selectedPet.name)}</strong><span>${escapeHTML(rarityName(selectedPet.rarity))}</span></div>`;
}

function resetPickerButtons(){
  updatePickerButtons();
}

function updatePickerButtons(){
  $('normalFormBtn')?.classList.toggle('active',selectedForm==='normal');
  $('btnNeon')?.classList.toggle('active',selectedForm==='neon');
  $('btnMega')?.classList.toggle('active',selectedForm==='mega');
  $('btnFly')?.classList.toggle('active',selectedPotion.fly);
  $('btnRide')?.classList.toggle('active',selectedPotion.ride);
}

function toggleForm(form){
  if(!['normal','neon','mega'].includes(form)) return;
  selectedForm=form;
  updatePickerButtons();
  renderPickerPreview();
  updatePickerValue();
}

function togglePotion(type){
  if(!['fly','ride'].includes(type)) return;
  selectedPotion[type]=!selectedPotion[type];
  updatePickerButtons();
  renderPickerPreview();
  updatePickerValue();
}

function getModifiedValue(p){
  let v=Number(p?.value||0);
  if(!p) return 0;
  /* Non-pet categories stay normal only. */
  const cat=itemCategory(p);
  if(cat!=='pets' && cat!=='all') return v;
  if(selectedForm==='neon') v*=4;
  if(selectedForm==='mega') v*=16;
  if(selectedPotion.fly) v+=.25;
  if(selectedPotion.ride) v+=.25;
  return v;
}

function updatePickerValue(){
  const el=$('pickerValue');
  if(!el) return;
  el.textContent=selectedPet?(pickerValuesVisible?formatValue(getModifiedValue(selectedPet)):'•••'):'0';
}

function togglePickerValues(){
  pickerValuesVisible=!pickerValuesVisible;
  document.querySelectorAll('.picker-choice-value').forEach(el=>{
    el.style.filter=pickerValuesVisible?'none':'blur(5px)';
    el.style.opacity=pickerValuesVisible?'1':'.55';
  });
  updatePickerValue();
  const b=$('showValuesBtn');
  if(b) b.textContent=pickerValuesVisible?'HIDE VALUES':'SHOW VALUES';
}

function updatePickerBar(){
  normalizePickerControls();
  updatePickerButtons();
  renderPickerPreview();
  updatePickerValue();
  const confirm=$('confirmPetBtn');
  if(confirm) confirm.disabled=!selectedPet;
  const show=$('showValuesBtn');
  if(show) show.textContent=pickerValuesVisible?'HIDE VALUES':'SHOW VALUES';
}

function confirmAddPet(){
  if(!selectedPet || !pickerSide) return;
  const item={
    ...selectedPet,
    baseValue:Number(selectedPet.value||0),
    value:getModifiedValue(selectedPet),
    form:selectedForm,
    fly:selectedPotion.fly,
    ride:selectedPotion.ride,
    uniqueId:`${Date.now()}_${Math.random().toString(36).slice(2)}`
  };
  (pickerSide==='you'?youTrade:themTrade).push(item);
  recordedTradeKey='';
  closePetPicker();
  updateTradeUI();
}

/* ---------------------------------------------------------
   TRADE
--------------------------------------------------------- */

function calculateTotal(trade){return trade.reduce((sum,p)=>sum+Number(p.value||0),0)}

function tradeItemHTML(p,side){
  return `<div class="trade-item" data-trade-id="${escapeHTML(p.uniqueId)}"><div class="pet-image-wrap">${p.form==='neon'?'<div class="neon-effect"></div>':''}${p.form==='mega'?'<div class="mega-effect"></div>':''}${imageHTML(p)}<div class="pet-badges">${p.form==='neon'?'<span class="mini-chip neon">N</span>':''}${p.form==='mega'?'<span class="mini-chip mega">M</span>':''}${p.fly?'<span class="mini-chip fly">F</span>':''}${p.ride?'<span class="mini-chip ride">R</span>':''}</div></div><div class="trade-item-info"><strong>${escapeHTML(p.name)}</strong><small>${escapeHTML(rarityName(p.rarity))}</small><div class="item-chips">${p.form==='neon'?'<span class="mini-chip neon">N</span>':''}${p.form==='mega'?'<span class="mini-chip mega">M</span>':''}${p.fly?'<span class="mini-chip fly">F</span>':''}${p.ride?'<span class="mini-chip ride">R</span>':''}</div></div><strong>${formatValue(p.value)}</strong><button type="button" class="remove-item" onclick="removeTradePet('${side}','${p.uniqueId}')">×</button></div>`;
}

function renderTradeSide(id,trade,side){
  const el=$(id);
  if(!el) return;
  el.innerHTML=trade.length?trade.map(p=>tradeItemHTML(p,side)).join(''):'<div class="empty-items">Henüz pet eklenmedi</div>';
  if(trade.length){
    el.querySelectorAll('.trade-item').forEach(card=>{
      card.addEventListener('click',e=>{
        if(e.target.closest('.remove-item')) return;
        const id2=card.dataset.tradeId;
        if(id2) removeTradePet(side,id2);
      });
    });
  }
}

function removeTradePet(side,id){
  if(side==='you') youTrade=youTrade.filter(p=>p.uniqueId!==id);
  else themTrade=themTrade.filter(p=>p.uniqueId!==id);
  recordedTradeKey='';
  updateTradeUI();
}

function clearTrade(){
  youTrade=[];
  themTrade=[];
  recordedTradeKey='';
  updateTradeUI();
}

function updateTradeUI(){
  const y=calculateTotal(youTrade),t=calculateTotal(themTrade);
  renderTradeSide('youItems',youTrade,'you');
  renderTradeSide('themItems',themTrade,'them');
  if($('youTotal'))$('youTotal').textContent=formatValue(y);
  if($('themTotal'))$('themTotal').textContent=formatValue(t);
  updateResult(y,t);
}

function updateResult(y,t){
  const card=$('resultCard');
  const status=$('resultStatusText');
  const diff=$('resultDiffDisplay') || $('resultDiffNumber');
  const statusLabel=$('tradeStatusLabel');
  const statusNumber=$('resultDiffNumber');
  card?.classList.remove('win','lose','fair','big-win','big-lose','small-win','small-lose');

  if(!y && !t){
    status&&(status.textContent='Pet ekleyerek başla');
    if(diff) diff.textContent='—';
    if(statusNumber) statusNumber.textContent='—';
    if(statusLabel) statusLabel.textContent='TRADE HAZIR';
    return;
  }

  if(!y || !t){
    status&&(status.textContent='İki tarafa da pet ekle');
    if(diff) diff.textContent='—';
    if(statusNumber) statusNumber.textContent='—';
    if(statusLabel) statusLabel.textContent='TRADE BEKLENİYOR';
    return;
  }

  const d=t-y;
  const pct=y?((d/y)*100):0;
  let s='fair',label='FAIR';
  if(pct>=10){s='big-win';label='BIG WIN'}
  else if(pct>3){s='small-win';label='SMALL WIN'}
  else if(pct<=-10){s='big-lose';label='BIG LOSE'}
  else if(pct<-3){s='small-lose';label='SMALL LOSE'}

  card?.classList.add(s, s.includes('win')?'win':s.includes('lose')?'lose':'fair');
  const signed=d>0?`+${formatValue(d)}`:formatValue(d);
  status&&(status.textContent=label);
  if(diff) diff.textContent=signed;
  if(statusNumber) statusNumber.textContent=signed;
  if(statusLabel) statusLabel.textContent=label;
  recordTradeResult(s.includes('win')?'win':s.includes('lose')?'lose':'fair');
}

/* ---------------------------------------------------------
   PROFILE — supports the current HTML ids AND older ids.
--------------------------------------------------------- */

const DEFAULT_PROFILE={
  name:'Zayaxra Kullanıcısı',
  username:'@kullanici',
  bio:'Henüz bir biyografi eklenmedi.',
  avatar:'🐉',
  stats:{trades:0,wins:0,fairs:0,loses:0}
};

let profileData=loadProfile();

function loadProfile(){
  try{
    const raw=localStorage.getItem('zayaxra_profile') || localStorage.getItem('zayagg_profile');
    if(!raw) return JSON.parse(JSON.stringify(DEFAULT_PROFILE));
    const p=JSON.parse(raw);
    return {
      ...JSON.parse(JSON.stringify(DEFAULT_PROFILE)),
      ...p,
      stats:{...DEFAULT_PROFILE.stats,...(p.stats||{})}
    };
  }catch{
    return JSON.parse(JSON.stringify(DEFAULT_PROFILE));
  }
}

function saveProfile(){
  localStorage.setItem('zayaxra_profile',JSON.stringify(profileData));
}

function openProfile(){
  renderProfile();
  $('profileModal')?.classList.add('show','open');
  $('profileModal')?.setAttribute('aria-hidden','false');
  document.body.classList.add('profile-open');
}

function closeProfile(){
  $('profileModal')?.classList.remove('show','open');
  $('profileModal')?.setAttribute('aria-hidden','true');
  document.body.classList.remove('profile-open');
  closeEditProfile();
}

function renderProfile(){
  if($('profileName'))$('profileName').textContent=profileData.name;
  if($('profileUsername'))$('profileUsername').textContent=profileData.username.startsWith('@')?profileData.username:'@'+profileData.username;
  if($('profileBio'))$('profileBio').textContent=profileData.bio;
  if($('profileAvatar'))$('profileAvatar').textContent=profileData.avatar;

  $('profileTrades')&&( $('profileTrades').textContent=profileData.stats.trades );
  $('profileWins')&&( $('profileWins').textContent=profileData.stats.wins );
  $('profileFair')&&( $('profileFair').textContent=profileData.stats.fairs );
  $('profileLoses')&&( $('profileLoses').textContent=profileData.stats.loses );

  /* old ids */
  $('tradeCount')&&( $('tradeCount').textContent=profileData.stats.trades );
  $('winCount')&&( $('winCount').textContent=profileData.stats.wins );
  $('fairCount')&&( $('fairCount').textContent=profileData.stats.fairs );
  $('loseCount')&&( $('loseCount').textContent=profileData.stats.loses );
}

function openEditProfile(){
  const f=$('profileEditForm');
  if(!f) return;
  $('editName')&&( $('editName').value=profileData.name );
  $('editUsername')&&( $('editUsername').value=profileData.username.replace(/^@/, '') );
  $('editBio')&&( $('editBio').value=profileData.bio );
  renderAvatars();
  f.classList.remove('hidden');
  $('profileEditBtn')?.classList.add('hidden');
}

function closeEditProfile(){
  $('profileEditForm')?.classList.add('hidden');
  $('profileEditBtn')?.classList.remove('hidden');
}

function renderAvatars(){
  const box=$('avatarPick');
  if(!box) return;
  box.innerHTML='';
  ['🐉','🐲','🦊','🐺','🦁','🐯','🐻','🐼','🦄','🐸','🦋','🌙'].forEach(a=>{
    const b=document.createElement('button');
    b.type='button';
    b.className='avatar-opt'+(a===profileData.avatar?' active':'');
    b.textContent=a;
    b.addEventListener('click',()=>{
      profileData.avatar=a;
      box.querySelectorAll('.avatar-opt').forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
    });
    box.appendChild(b);
  });
}

function saveEditedProfile(e){
  e.preventDefault();
  const n=($('editName')?.value||'').trim();
  const u=($('editUsername')?.value||'').trim();
  const b=($('editBio')?.value||'').trim();
  if(!n||!u) return;
  profileData.name=n;
  profileData.username=u.startsWith('@')?u:'@'+u;
  profileData.bio=b||DEFAULT_PROFILE.bio;
  saveProfile();
  renderProfile();
  closeEditProfile();
}

function recordTradeResult(status){
  if(!youTrade.length||!themTrade.length) return;
  const key=youTrade.map(p=>p.uniqueId).join(',')+'|'+themTrade.map(p=>p.uniqueId).join(',')+'|'+status;
  if(key===recordedTradeKey) return;
  recordedTradeKey=key;
  profileData.stats.trades++;
  if(status==='win')profileData.stats.wins++;
  if(status==='fair')profileData.stats.fairs++;
  if(status==='lose')profileData.stats.loses++;
  saveProfile();
  renderProfile();
}

/* ---------------------------------------------------------
   INFO
--------------------------------------------------------- */

function openInfo(e){
  e?.preventDefault();
  $('infoModal')?.classList.add('show','open');
  $('infoModal')?.setAttribute('aria-hidden','false');
  document.body.classList.add('profile-open');
}

function closeInfo(){
  $('infoModal')?.classList.remove('show','open');
  $('infoModal')?.setAttribute('aria-hidden','true');
  document.body.classList.remove('profile-open');
}

/* ---------------------------------------------------------
   MENU
--------------------------------------------------------- */

function toggleMenu(){document.body.classList.toggle('menu-open')}
function closeMenu(){document.body.classList.remove('menu-open')}

/* ---------------------------------------------------------
   EVENTS
--------------------------------------------------------- */

document.addEventListener('click',e=>{
  if(e.target===pickerModal()) closePetPicker();
  if(e.target===$('profileModal')) closeProfile();
  if(e.target===$('infoModal')) closeInfo();
});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeProfile();
    closePetPicker();
    closeInfo();
    closeMenu();
  }
});

function initZayaxra(){
  normalizePickerControls();
  ensurePickerCategorySidebar();
  $('search')?.addEventListener('input',renderValues);
  pickerSearch()?.addEventListener('input',filterPickerPets);
  renderValues();
  renderProfile();
  updateTradeUI();
}

document.addEventListener('DOMContentLoaded',initZayaxra);

/* Explicit globals for inline onclick handlers in index.html */
window.openPetPicker=openPetPicker;
window.closePetPicker=closePetPicker;
window.selectPickerPet=selectPickerPet;
window.toggleForm=toggleForm;
window.togglePotion=togglePotion;
window.confirmAddPet=confirmAddPet;
window.togglePickerValues=togglePickerValues;
window.clearTrade=clearTrade;
window.removeTradePet=removeTradePet;
window.openProfile=openProfile;
window.closeProfile=closeProfile;
window.openEditProfile=openEditProfile;
window.closeEditProfile=closeEditProfile;
window.saveEditedProfile=saveEditedProfile;
window.openInfo=openInfo;
window.closeInfo=closeInfo;
window.toggleMenu=toggleMenu;
