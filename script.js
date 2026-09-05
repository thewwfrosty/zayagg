/* =========================================================
   ZAYAGG — SCRIPT.JS
   ========================================================= */


/* =========================================================
   PET DATABASE
   ========================================================= */

const PET_DATABASE = [

  {
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
   STATE
   ========================================================= */

const pets = PET_DATABASE;

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


/* =========================================================
   DOM HELPER
   ========================================================= */

const $ = id =>
  document.getElementById(id);


/* =========================================================
   HELPERS
   ========================================================= */

function formatValue(value) {

  const number =
    Number(value || 0);

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

  return names[rarity] ||
    rarity ||
    "";
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
          y="85"
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
        pet.image || ""
      )}"
      alt="${escapeHTML(
        pet.name
      )}"
      class="${className}"
      loading="lazy"
      onerror="handleImageError(this)"
    >
  `;
}


/* =========================================================
   VALUES
   ========================================================= */

function renderValues() {

  const grid =
    $("valueGrid");

  if (!grid) return;

  const query =
    ($("search")?.value || "")
      .trim()
      .toLowerCase();

  const list =
    pets.filter(pet => {

      const name =
        String(
          pet.name || ""
        ).toLowerCase();

      const rarity =
        String(
          pet.rarity || ""
        ).toLowerCase();

      return (
        name.includes(query) ||
        rarity.includes(query)
      );

    });


  grid.innerHTML = "";


  if (!list.length) {

    grid.innerHTML = `

      <div class="empty-picker">

        <span>🔎</span>

        <strong>
          Pet bulunamadı
        </strong>

        <small>
          Başka bir isim dene.
        </small>

      </div>

    `;

    return;
  }


  list.forEach(pet => {

    const card =
      document.createElement(
        "div"
      );

    card.className =
      "value-card";


    card.innerHTML = `

      <div class="value-image">

        ${imageHTML(pet)}

      </div>


      <div class="value-info">

        <h3>
          ${escapeHTML(
            pet.name
          )}
        </h3>


        <span
          class="rarity-small ${escapeHTML(
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


        <strong>
          Value:
          ${formatValue(
            pet.value
          )}
        </strong>

      </div>

    `;


    grid.appendChild(card);

  });

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

  pickerSide = side;

  selectedPet = null;

  selectedForm =
    "normal";

  selectedPotion = {
    fly: false,
    ride: false
  };


  const title =
    $("petPickerTitle");

  const search =
    $("pickerSearch");

  const bar =
    $("pickerBar");

  const modal =
    $("petPickerModal");


  if (title) {

    title.textContent =
      side === "you"
        ? "Senin teklifine pet ekle"
        : "Karşı tarafın teklifine pet ekle";

  }


  if (search) {

    search.value = "";

  }


  bar?.classList.add(
    "hidden"
  );


  resetPickerButtons();

  renderPickerPets(
    pets
  );


  modal?.classList.add(
    "show"
  );


  modal?.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "profile-open"
  );


  setTimeout(
    () => search?.focus(),
    50
  );

}


/* =========================================================
   CLOSE PET PICKER
   ========================================================= */

function closePetPicker() {

  const modal =
    $("petPickerModal");

  if (modal) {

    modal.classList.remove(
      "show"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

  }

  document.body.classList.remove(
    "profile-open"
  );

  pickerSide = null;

  selectedPet = null;

}


/* =========================================================
   PICKER LIST
   ========================================================= */

function renderPickerPets(
  list
) {

  const box =
    $("pickerPetList");

  if (!box) return;

  box.innerHTML = "";


  if (!list.length) {

    box.innerHTML = `

      <div class="empty-picker">

        <span>🔎</span>

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


  list.forEach(pet => {

    const button =
      document.createElement(
        "button"
      );

    button.type = "button";

    button.className =
      "pet-choice" +
      (
        selectedPet?.id ===
        pet.id
          ? " selected"
          : ""
      );


    button.innerHTML = `

      <div class="choice-image">
        ${imageHTML(pet)}
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
      () =>
        selectPickerPet(pet)
    );


    box.appendChild(
      button
    );

  });

}


/* =========================================================
   PICKER SEARCH
   ========================================================= */

function filterPickerPets() {

  const query =
    ($("pickerSearch")?.value || "")
      .trim()
      .toLowerCase();


  const list =
    pets.filter(pet => {

      const name =
        String(
          pet.name || ""
        ).toLowerCase();

      const rarity =
        String(
          pet.rarity || ""
        ).toLowerCase();

      return (
        name.includes(query) ||
        rarity.includes(query)
      );

    });


  renderPickerPets(
    list
  );

}


/* =========================================================
   SELECT PET
   ========================================================= */

function selectPickerPet(
  pet
) {

  selectedPet = pet;

  selectedForm =
    "normal";

  selectedPotion = {
    fly: false,
    ride: false
  };


  $("pickerBar")?.classList.remove(
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

  const box = $("pickerPreview");

  if (
    !box ||
    !selectedPet
  ) {
    return;
  }

  box.innerHTML = `

    <div class="pet-image-wrap">

      ${
        selectedForm === "neon"
          ? '<div class="neon-effect"></div>'
          : ""
      }

      ${
        selectedForm === "mega"
          ? '<div class="mega-effect"></div>'
          : ""
      }

      ${imageHTML(
        selectedPet
      )}

      <div class="pet-badges">

        ${
          selectedForm === "neon"
            ? '<span class="mini-chip neon">N</span>'
            : ""
        }

        ${
          selectedForm === "mega"
            ? '<span class="mini-chip mega">M</span>'
            : ""
        }

        ${
          selectedPotion.fly
            ? '<span class="mini-chip fly">F</span>'
            : ""
        }

        ${
          selectedPotion.ride
            ? '<span class="mini-chip ride">R</span>'
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

        ${
          selectedForm === "neon"
            ? '<span class="vchip neon">NEON</span>'
            : ""
        }

        ${
          selectedForm === "mega"
            ? '<span class="vchip mega">MEGA</span>'
            : ""
        }

        ${
          selectedPotion.fly
            ? '<span class="vchip fly">FLY</span>'
            : ""
        }

        ${
          selectedPotion.ride
            ? '<span class="vchip ride">RIDE</span>'
            : ""
        }

      </div>

    </div>

  `;
}


/* =========================================================
   PICKER BUTTONS
   ========================================================= */

function resetPickerButtons() {

  [
    "btnNeon",
    "btnMega",
    "btnFly",
    "btnRide"
  ].forEach(id => {

    $(id)?.classList.remove(
      "active"
    );

  });

}


function updatePickerButtons() {

  $("btnNeon")?.classList.toggle(
    "active",
    selectedForm === "neon"
  );

  $("btnMega")?.classList.toggle(
    "active",
    selectedForm === "mega"
  );

  $("btnFly")?.classList.toggle(
    "active",
    selectedPotion.fly
  );

  $("btnRide")?.classList.toggle(
    "active",
    selectedPotion.ride
  );

}


/* =========================================================
   NEON / MEGA
   ========================================================= */

function toggleForm(form) {

  if (!selectedPet) {
    return;
  }

  if (
    form !== "neon" &&
    form !== "mega"
  ) {
    return;
  }

  if (
    selectedForm === form
  ) {

    selectedForm =
      "normal";

  } else {

    selectedForm =
      form;

  }

  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

}


/* =========================================================
   FLY / RIDE
   ========================================================= */

function togglePotion(type) {

  if (!selectedPet) {
    return;
  }

  if (
    type !== "fly" &&
    type !== "ride"
  ) {
    return;
  }

  selectedPotion[type] =
    !selectedPotion[type];

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

  let value =
    Number(
      pet?.value || 0
    );


  /*
    Normal:
    1x

    Neon:
    4x

    Mega Neon:
    16x
  */

  if (
    selectedForm === "neon"
  ) {

    value *= 4;

  }


  if (
    selectedForm === "mega"
  ) {

    value *= 16;

  }


  /*
    Fly / Ride küçük ek değer
  */

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
   ADD PET TO TRADE
   ========================================================= */

function confirmAddPet() {

  if (
    !selectedPet ||
    !pickerSide
  ) {
    return;
  }


  const item = {

    ...selectedPet,

    baseValue:
      Number(
        selectedPet.value
      ),

    value:
      getModifiedValue(
        selectedPet
      ),

    form:
      selectedForm,

    fly:
      selectedPotion.fly,

    ride:
      selectedPotion.ride,

    uniqueId:
      `${Date.now()}_${Math.random()
        .toString(36)
        .slice(2, 9)}`

  };


  if (
    pickerSide === "you"
  ) {

    youTrade.push(
      item
    );

  } else {

    themTrade.push(
      item
    );

  }


  closePetPicker();

  updateTradeUI();

}


/* =========================================================
   TRADE VALUE
   ========================================================= */

function calculateTotal(
  trade
) {

  return trade.reduce(
    (
      total,
      pet
    ) => {

      return (
        total +
        Number(
          pet.value || 0
        )
      );

    },
    0
  );

}


/* =========================================================
   TRADE PET CARD
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


  if (!trade.length) {

    element.innerHTML = `

      <div class="empty-items trade-empty">

        <span class="empty-plus">
          ＋
        </span>

        <strong>
          Henüz pet eklenmedi
        </strong>

        <small>
          ${side === "you"
            ? "Teklifini oluşturmak için pet ekle"
            : "Karşı tarafın teklifini oluştur"}

        </small>

      </div>

    `;

    return;
  }


  element.innerHTML =
    trade.map(
      pet => `

        <div class="trade-item">

          <div class="trade-item-image">

            ${
              pet.form === "neon"
                ? '<div class="neon-effect"></div>'
                : ""
            }

            ${
              pet.form === "mega"
                ? '<div class="mega-effect"></div>'
                : ""
            }

            ${imageHTML(
              pet,
              "trade-pet-photo"
            )}

            <div class="pet-badges">

              ${
                pet.form === "neon"
                  ? '<span class="mini-chip neon">N</span>'
                  : ""
              }

              ${
                pet.form === "mega"
                  ? '<span class="mini-chip mega">M</span>'
                  : ""
              }

              ${
                pet.fly
                  ? '<span class="mini-chip fly">F</span>'
                  : ""
              }

              ${
                pet.ride
                  ? '<span class="mini-chip ride">R</span>'
                  : ""
              }

            </div>

          </div>


          <div class="trade-item-content">

            <div class="trade-item-top">

              <div class="trade-item-name">

                ${escapeHTML(
                  pet.name
                )}

              </div>


              <div class="trade-item-value">

                ${formatValue(
                  pet.value
                )}

              </div>

            </div>


            <div class="trade-item-rarity">

              ${escapeHTML(
                rarityName(
                  pet.rarity
                )
              )}

            </div>


            <div class="trade-item-tags">

              ${
                pet.form === "neon"
                  ? '<span class="trade-tag neon-tag">✨ Neon</span>'
                  : ""
              }

              ${
                pet.form === "mega"
                  ? '<span class="trade-tag mega-tag">🌈 Mega Neon</span>'
                  : ""
              }

              ${
                pet.fly
                  ? '<span class="trade-tag fly-tag">🪽 Fly</span>'
                  : ""
              }

              ${
                pet.ride
                  ? '<span class="trade-tag ride-tag">🐴 Ride</span>'
                  : ""
              }

            </div>

          </div>


          <button
            type="button"
            class="remove-item"
            data-side="${side}"
            data-id="${pet.uniqueId}"
            aria-label="Pet sil"
          >

            ×

          </button>

        </div>

      `
    ).join("");

}


/* =========================================================
   REMOVE TRADE PET
   ========================================================= */

function removeTradePet(
  side,
  id
) {

  if (
    side === "you"
  ) {

    youTrade =
      youTrade.filter(
        pet =>
          pet.uniqueId !== id
      );

  }


  if (
    side === "them"
  ) {

    themTrade =
      themTrade.filter(
        pet =>
          pet.uniqueId !== id
      );

  }


  recordedTradeKey = "";

  updateTradeUI();

}


/* =========================================================
   CLEAR TRADE
   ========================================================= */

function clearTrade() {

  youTrade = [];

  themTrade = [];

  recordedTradeKey = "";

  updateTradeUI();

}
/* =========================================
   3/7 — TRADE UI + SONUÇ SİSTEMİ
========================================= */

function updateTradeUI() {

  const youContainer = document.getElementById("youItems");
  const themContainer = document.getElementById("themItems");

  if (youContainer) {
    youContainer.innerHTML = renderTradeSide(youTrade, "you");
  }

  if (themContainer) {
    themContainer.innerHTML = renderTradeSide(themTrade, "them");
  }

  const youTotal = calculateTotal(youTrade);
  const themTotal = calculateTotal(themTrade);

  const youTotalEl = document.getElementById("youTotal");
  const themTotalEl = document.getElementById("themTotal");

  if (youTotalEl) {
    youTotalEl.textContent = formatValue(youTotal);
  }

  if (themTotalEl) {
    themTotalEl.textContent = formatValue(themTotal);
  }

  updateResult();

}


/* =========================================
   5 SEVİYELİ W / F / L
========================================= */

function updateResult() {

  const resultCard = document.getElementById("resultCard");
  const resultText = document.getElementById("resultStatusText");
  const resultHint = document.getElementById("resultHint");

  const diffNumber = document.getElementById("resultDiffNumber");
  const diffDisplay = document.getElementById("resultDiffDisplay");

  const statusBar = document.getElementById("tradeStatusBar");
  const statusLabel = document.getElementById("tradeStatusLabel");

  const youTotal = calculateTotal(youTrade);
  const themTotal = calculateTotal(themTrade);

  /* -------------------------
     Başlangıç
  ------------------------- */

  if (youTrade.length === 0 || themTrade.length === 0) {

    if (resultText) {
      resultText.textContent = "Pet ekleyerek başla";
    }

    if (resultHint) {
      resultHint.textContent =
        "İki tarafa da pet eklediğinde avantajı burada göreceksin.";
    }

    if (diffNumber) {
      diffNumber.textContent = "—";
    }

    if (diffDisplay) {
      diffDisplay.textContent = "—";
    }

    if (statusLabel) {
      statusLabel.textContent = "TRADE HAZIR";
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


  /* -------------------------
     Fark hesaplama
  ------------------------- */

  const difference = themTotal - youTotal;

  let percent = 0;

  if (youTotal > 0) {
    percent = (difference / youTotal) * 100;
  }


  /* -------------------------
     Fark yazısı
  ------------------------- */

  let diffText = "0%";

  if (difference > 0) {
    diffText = `+${percent.toFixed(1)}%`;
  } else if (difference < 0) {
    diffText = `${percent.toFixed(1)}%`;
  }

  if (diffNumber) {
    diffNumber.textContent = diffText;
  }

  if (diffDisplay) {
    diffDisplay.textContent = diffText;
  }


  /* -------------------------
     W / F / L seviyesi
  ------------------------- */

  let status = "";
  let title = "";
  let hint = "";
  let resultClass = "";
  let statusClass = "";

  /*
     %0 - %3
     FAIR
  */

  if (Math.abs(percent) <= 3) {

    status = "FAIR";
    title = "Adil Takas";
    hint = "İki tarafın verdiği değerler neredeyse eşit.";
    resultClass = "fair";
    statusClass = "fair";

  }


  /*
     Pozitif = karşı taraf daha fazla veriyor
  */

  else if (percent > 0) {

    if (percent >= 10) {

      status = "BIG WIN";
      title = "Büyük Win!";
      hint = "Karşı taraf belirgin şekilde daha fazla değer veriyor.";
      resultClass = "big-win";
      statusClass = "big-win";

    } else {

      status = "SMALL WIN";
      title = "Küçük Win";
      hint = "Karşı taraf biraz daha fazla değer veriyor.";
      resultClass = "small-win";
      statusClass = "small-win";

    }

  }


  /*
     Negatif = sen daha fazla veriyorsun
  */

  else {

    if (Math.abs(percent) >= 10) {

      status = "BIG LOSE";
      title = "Büyük Lose";
      hint = "Sen belirgin şekilde daha fazla değer veriyorsun.";
      resultClass = "big-lose";
      statusClass = "big-lose";

    } else {

      status = "SMALL LOSE";
      title = "Küçük Lose";
      hint = "Sen biraz daha fazla değer veriyorsun.";
      resultClass = "small-lose";
      statusClass = "small-lose";

    }

  }


  /* -------------------------
     Ekrana yaz
  ------------------------- */

  if (resultText) {
    resultText.textContent = title;
  }

  if (resultHint) {
    resultHint.textContent = hint;
  }

  if (statusLabel) {
    statusLabel.textContent = status;
  }


  /* -------------------------
     CSS class
  ------------------------- */

  if (resultCard) {

    resultCard.className =
      `result-card trade-result-card ${resultClass}`;

  }

  if (statusBar) {

    statusBar.className =
      `trade-status-bar ${statusClass}`;

  }


  /* -------------------------
     Trade kaydı
  ------------------------- */

  recordTradeResult(status);

}


/* =========================================
   TRADE İSTATİSTİĞİ
========================================= */

function recordTradeResult(status) {

  const youTotal = calculateTotal(youTrade);
  const themTotal = calculateTotal(themTrade);

  if (
    youTrade.length === 0 ||
    themTrade.length === 0 ||
    youTotal <= 0
  ) {
    return;
  }

  const currentKey =
    JSON.stringify({
      you: youTrade,
      them: themTrade,
      status: status
    });

  if (recordedTradeKey === currentKey) {
    return;
  }

  recordedTradeKey = currentKey;


  const stats =
    JSON.parse(
      localStorage.getItem("zayaggTradeStats") ||
      '{"wins":0,"fair":0,"loses":0}'
    );


  if (
    status === "BIG WIN" ||
    status === "SMALL WIN"
  ) {

    stats.wins++;

  } else if (
    status === "FAIR"
  ) {

    stats.fair++;

  } else if (
    status === "BIG LOSE" ||
    status === "SMALL LOSE"
  ) {

    stats.loses++;

  }


  localStorage.setItem(
    "zayaggTradeStats",
    JSON.stringify(stats)
  );

}
/* =========================================
   4/7 — PROFİL + TRADE İSTATİSTİKLERİ
========================================= */

function getTradeStats() {

  return JSON.parse(
    localStorage.getItem("zayaggTradeStats") ||
    '{"wins":0,"fair":0,"loses":0}'
  );

}


/* =========================================
   PROFİL İSTATİSTİKLERİNİ GÜNCELLE
========================================= */

function updateProfileStats() {

  const stats = getTradeStats();

  const winsEl =
    document.getElementById("profileWins");

  const fairEl =
    document.getElementById("profileFair");

  const losesEl =
    document.getElementById("profileLoses");

  const totalEl =
    document.getElementById("profileTrades");

  if (winsEl) {
    winsEl.textContent = stats.wins;
  }

  if (fairEl) {
    fairEl.textContent = stats.fair;
  }

  if (losesEl) {
    losesEl.textContent = stats.loses;
  }

  if (totalEl) {
    totalEl.textContent =
      stats.wins +
      stats.fair +
      stats.loses;
  }

}


/* =========================================
   PROFİLİ AÇ
========================================= */

function openProfile() {

  const profileModal =
    document.getElementById("profileModal");

  if (!profileModal) {
    return;
  }

  updateProfileStats();

  profileModal.classList.add("active");

  document.body.classList.add("modal-open");

}


/* =========================================
   PROFİLİ KAPAT
========================================= */

function closeProfile() {

  const profileModal =
    document.getElementById("profileModal");

  if (!profileModal) {
    return;
  }

  profileModal.classList.remove("active");

  document.body.classList.remove("modal-open");

}


/* =========================================
   MENÜYÜ AÇ / KAPAT
========================================= */

function toggleMenu() {

  const menu =
    document.getElementById("mobileMenu");

  if (!menu) {
    return;
  }

  menu.classList.toggle("active");

}


/* =========================================
   MENÜYÜ KAPAT
========================================= */

function closeMenu() {

  const menu =
    document.getElementById("mobileMenu");

  if (!menu) {
    return;
  }

  menu.classList.remove("active");

}


/* =========================================
   SAYFA KONUMUNA GİT
========================================= */

function scrollToSection(id) {

  const target =
    document.getElementById(id);

  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  closeMenu();

}


/* =========================================
   PROFİL BUTONU EVENTLERİ
========================================= */

function initProfileEvents() {

  const profileButtons =
    document.querySelectorAll(
      "[data-open-profile], .profile-btn"
    );

  profileButtons.forEach(button => {

    button.addEventListener(
      "click",
      openProfile
    );

  });


  const profileCloseButtons =
    document.querySelectorAll(
      "[data-close-profile], .profile-close"
    );

  profileCloseButtons.forEach(button => {

    button.addEventListener(
      "click",
      closeProfile
    );

  });


  const profileModal =
    document.getElementById("profileModal");

  if (profileModal) {

    profileModal.addEventListener(
      "click",
      event => {

        if (
          event.target === profileModal
        ) {

          closeProfile();

        }

      }
    );

  }

}


/* =========================================
   MENÜ EVENTLERİ
========================================= */

function initMenuEvents() {

  const menuButton =
    document.getElementById("menuButton");

  if (menuButton) {

    menuButton.addEventListener(
      "click",
      toggleMenu
    );

  }


  const menuLinks =
    document.querySelectorAll(
      "#mobileMenu a"
    );

  menuLinks.forEach(link => {

    link.addEventListener(
      "click",
      closeMenu
    );

  });

}


/* =========================================
   NAVBAR SCROLL
========================================= */

function initNavbar() {

  const navbar =
    document.querySelector(".navbar");

  if (!navbar) {
    return;
  }

  function updateNavbar() {

    if (window.scrollY > 30) {

      navbar.classList.add("scrolled");

    } else {

      navbar.classList.remove("scrolled");

    }

  }

  updateNavbar();

  window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
  );

}


/* =========================================
   SAYFA DIŞINA TIKLAYINCA PICKER KAPAT
========================================= */

function initGlobalEvents() {

  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {

        closePetPicker();
        closeProfile();
        closeMenu();

      }

    }
  );


  document.addEventListener(
    "click",
    event => {

      const picker =
        document.getElementById("petPicker");

      if (
        !picker ||
        !picker.classList.contains("active")
      ) {
        return;
      }

      const content =
        picker.querySelector(".picker-content");

      const openButtons =
        document.querySelectorAll(
          ".add-pet-btn"
        );

      let clickedOpenButton = false;

      openButtons.forEach(button => {

        if (button.contains(event.target)) {
          clickedOpenButton = true;
        }

      });

      if (
        !clickedOpenButton &&
        content &&
        !content.contains(event.target)
      ) {

        closePetPicker();

      }

    }
  );

}


/* =========================================
   INIT
========================================= */

function initZayagg() {

  updateTradeUI();

  updateProfileStats();

  initProfileEvents();

  initMenuEvents();

  initNavbar();

  initGlobalEvents();

}


/* =========================================
   DOM HAZIR OLUNCA BAŞLAT
========================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initZayagg
  );

} else {

 startZayagg()

}
/* =========================================
   5/7 — BUTONLAR + PICKER EVENTLERİ
========================================= */


/* =========================================
   ADD PET BUTONLARI
========================================= */

function initAddPetButtons() {

  const addButtons =
    document.querySelectorAll(".add-pet-btn");

  addButtons.forEach(button => {

    button.addEventListener("click", event => {

      event.stopPropagation();

      const side =
        button.dataset.side ||
        button.getAttribute("data-side");

      if (
        side === "you" ||
        side === "them"
      ) {

        openPetPicker(side);

      }

    });

  });

}


/* =========================================
   PICKER KAPATMA BUTONLARI
========================================= */

function initPickerCloseButtons() {

  const closeButtons =
    document.querySelectorAll(
      "[data-close-picker], .picker-close"
    );

  closeButtons.forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();
        event.stopPropagation();

        closePetPicker();

      }
    );

  });

}


/* =========================================
   PET ARAMA
========================================= */

function initPickerSearch() {

  const searchInput =
    document.getElementById("petSearch");

  if (!searchInput) {
    return;
  }

  searchInput.addEventListener(
    "input",
    event => {

      filterPickerPets(
        event.target.value
      );

    }
  );

}


/* =========================================
   FORM BUTONLARI
========================================= */

function initFormButtons() {

  const normalButton =
    document.getElementById("normalFormBtn");

  const neonButton =
    document.getElementById("neonFormBtn");

  const megaButton =
    document.getElementById("megaFormBtn");

  if (normalButton) {

    normalButton.addEventListener(
      "click",
      () => {

        selectedForm = "normal";

        updatePickerButtons();
        updatePickerValue();

      }
    );

  }


  if (neonButton) {

    neonButton.addEventListener(
      "click",
      () => {

        selectedForm = "neon";

        updatePickerButtons();
        updatePickerValue();

      }
    );

  }


  if (megaButton) {

    megaButton.addEventListener(
      "click",
      () => {

        selectedForm = "mega";

        updatePickerButtons();
        updatePickerValue();

      }
    );

  }

}


/* =========================================
   POTION BUTONLARI
========================================= */

function initPotionButtons() {

  const flyButton =
    document.getElementById("flyBtn");

  const rideButton =
    document.getElementById("rideBtn");

  const flyRideButton =
    document.getElementById("flyRideBtn");

  const noneButton =
    document.getElementById("noPotionBtn");


  if (flyButton) {

    flyButton.addEventListener(
      "click",
      () => {

        if (selectedPotion === "fly") {

          selectedPotion = "none";

        } else {

          selectedPotion = "fly";

        }

        updatePickerButtons();
        updatePickerValue();

      }
    );

  }


  if (rideButton) {

    rideButton.addEventListener(
      "click",
      () => {

        if (selectedPotion === "ride") {

          selectedPotion = "none";

        } else {

          selectedPotion = "ride";

        }

        updatePickerButtons();
        updatePickerValue();

      }
    );

  }


  if (flyRideButton) {

    flyRideButton.addEventListener(
      "click",
      () => {

        if (
          selectedPotion === "flyride"
        ) {

          selectedPotion = "none";

        } else {

          selectedPotion = "flyride";

        }

        updatePickerButtons();
        updatePickerValue();

      }
    );

  }


  if (noneButton) {

    noneButton.addEventListener(
      "click",
      () => {

        selectedPotion = "none";

        updatePickerButtons();
        updatePickerValue();

      }
    );

  }

}


/* =========================================
   PET EKLE BUTONU
========================================= */

function initConfirmPetButton() {

  const confirmButton =
    document.getElementById("confirmPetBtn");

  if (!confirmButton) {
    return;
  }

  confirmButton.addEventListener(
    "click",
    event => {

      event.preventDefault();

      confirmAddPet();

    }
  );

}


/* =========================================
   PET PICKER EVENTLERİ
========================================= */

function initPetPickerEvents() {

  initPickerSearch();

  initPickerCloseButtons();

  initFormButtons();

  initPotionButtons();

  initConfirmPetButton();

}


/* =========================================
   CLEAR TRADE BUTONLARI
========================================= */

function initClearTradeButtons() {

  const clearButtons =
    document.querySelectorAll(
      ".clear-trade-btn, [data-clear-trade]"
    );

  clearButtons.forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();

        clearTrade();

      }
    );

  });

}


/* =========================================
   TRADE TARAFI DEĞİŞTİRME
========================================= */

function initTradeSideButtons() {

  const youButton =
    document.querySelector(
      "[data-trade-side='you']"
    );

  const themButton =
    document.querySelector(
      "[data-trade-side='them']"
    );


  if (youButton) {

    youButton.addEventListener(
      "click",
      () => {

        openPetPicker("you");

      }
    );

  }


  if (themButton) {

    themButton.addEventListener(
      "click",
      () => {

        openPetPicker("them");

      }
    );

  }

}


/* =========================================
   PET REMOVE EVENT
========================================= */

function initRemoveEvents() {

  document.addEventListener(
    "click",
    event => {

      const removeButton =
        event.target.closest(
          ".remove-item"
        );

      if (!removeButton) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const side =
        removeButton.dataset.side;

      const index =
        Number(
          removeButton.dataset.index
        );

      if (
        side !== "you" &&
        side !== "them"
      ) {
        return;
      }

      if (
        Number.isNaN(index)
      ) {
        return;
      }

      removeTradePet(
        side,
        index
      );

    }
  );

}


/* =========================================
   PICKER PET SEÇİMİ
========================================= */

function initPickerPetSelection() {

  const picker =
    document.getElementById("pickerPets");

  if (!picker) {
    return;
  }

  picker.addEventListener(
    "click",
    event => {

      const petCard =
        event.target.closest(
          ".picker-pet-card"
        );

      if (!petCard) {
        return;
      }

      const index =
        Number(
          petCard.dataset.index
        );

      if (
        Number.isNaN(index)
      ) {
        return;
      }

      selectPickerPet(index);

    }
  );

}


/* =========================================
   MODAL DIŞINA TIKLAMA
========================================= */

function initModalBackdrop() {

  const picker =
    document.getElementById("petPicker");

  if (!picker) {
    return;
  }

  picker.addEventListener(
    "click",
    event => {

      if (
        event.target === picker
      ) {

        closePetPicker();

      }

    }
  );

}


/* =========================================
   TRADE UI YENİLENİNCE EVENT SORUNU OLMASIN
========================================= */

function refreshTradeEvents() {

  initRemoveEvents();

}


/* =========================================
   INIT FONKSİYONUNA EKLER
========================================= */

const originalInitZayagg =
  initZayagg;

initZayagg = function () {

  originalInitZayagg();

  initAddPetButtons();

  initPetPickerEvents();

  initClearTradeButtons();

  initTradeSideButtons();

  initPickerPetSelection();

  initModalBackdrop();

};
/* =========================================
   6/7 — SON KONTROLLER + MOBİL + GÜVENLİK
========================================= */


/* =========================================
   MOBİL MENÜ LINKLERİ
========================================= */

function initNavigationLinks() {

  const links =
    document.querySelectorAll(
      "[data-scroll]"
    );

  links.forEach(link => {

    link.addEventListener(
      "click",
      event => {

        event.preventDefault();

        const target =
          link.dataset.scroll;

        if (!target) {
          return;
        }

        scrollToSection(target);

      }
    );

  });

}


/* =========================================
   LOGOYA TIKLAYINCA EN ÜSTE
========================================= */

function initLogo() {

  const logos =
    document.querySelectorAll(
      ".logo, .brand-logo"
    );

  logos.forEach(logo => {

    logo.addEventListener(
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

  });

}


/* =========================================
   ESC İLE HER ŞEYİ KAPAT
========================================= */

function initEscapeHandler() {

  document.addEventListener(
    "keydown",
    event => {

      if (event.key !== "Escape") {
        return;
      }

      closePetPicker();

      closeProfile();

      closeMenu();

    }
  );

}


/* =========================================
   BACKDROP KONTROLÜ
========================================= */

function initBackdropHandler() {

  document.addEventListener(
    "click",
    event => {

      const profile =
        document.getElementById(
          "profileModal"
        );

      if (
        profile &&
        profile.classList.contains("active") &&
        event.target === profile
      ) {

        closeProfile();

      }

    }
  );

}


/* =========================================
   WINDOW RESIZE
========================================= */

function initResizeHandler() {

  let resizeTimer;

  window.addEventListener(
    "resize",
    () => {

      clearTimeout(resizeTimer);

      resizeTimer =
        setTimeout(() => {

          updateTradeUI();

        }, 120);

    }
  );

}


/* =========================================
   LOCAL STORAGE KONTROLÜ
========================================= */

function ensureStorageData() {

  const stats =
    localStorage.getItem(
      "zayaggTradeStats"
    );

  if (!stats) {

    localStorage.setItem(
      "zayaggTradeStats",
      JSON.stringify({
        wins: 0,
        fair: 0,
        loses: 0
      })
    );

  }

}


/* =========================================
   HATALI STORAGE VERİSİNİ DÜZELT
========================================= */

function validateStorageData() {

  try {

    const stats =
      JSON.parse(
        localStorage.getItem(
          "zayaggTradeStats"
        )
      );

    if (
      !stats ||
      typeof stats !== "object"
    ) {
      throw new Error("Invalid stats");
    }

    if (
      typeof stats.wins !== "number" ||
      typeof stats.fair !== "number" ||
      typeof stats.loses !== "number"
    ) {
      throw new Error("Invalid values");
    }

  } catch {

    localStorage.setItem(
      "zayaggTradeStats",
      JSON.stringify({
        wins: 0,
        fair: 0,
        loses: 0
      })
    );

  }

}


/* =========================================
   PET DATABASE KONTROLÜ
========================================= */

function validatePetDatabase() {

  if (
    !Array.isArray(PET_DATABASE)
  ) {

    console.error(
      "ZAYAGG: PET_DATABASE bulunamadı."
    );

    return;

  }

  PET_DATABASE.forEach(
    (pet, index) => {

      if (!pet.name) {

        console.warn(
          `ZAYAGG: ${index}. petin adı yok.`
        );

      }

      if (
        typeof pet.value !== "number"
      ) {

        console.warn(
          `ZAYAGG: ${pet.name || index} değerinde sorun var.`
        );

      }

    }
  );

}


/* =========================================
   TRADE LİSTELERİNİ TEMİZ VERİDE TUT
========================================= */

function validateTradeArrays() {

  if (!Array.isArray(youTrade)) {
    youTrade = [];
  }

  if (!Array.isArray(themTrade)) {
    themTrade = [];
  }

}


/* =========================================
   SAYFA GÖRÜNÜR OLUNCA UI GÜNCELLE
========================================= */

function initVisibilityHandler() {

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


/* =========================================
   GLOBAL INIT'İ GENİŞLET
========================================= */

const previousZayaggInit =
  initZayagg;

initZayagg = function () {

  previousZayaggInit();

  ensureStorageData();

  validateStorageData();

  validatePetDatabase();

  validateTradeArrays();

  initNavigationLinks();

  initLogo();

  initEscapeHandler();

  initBackdropHandler();

  initResizeHandler();

  initVisibilityHandler();

  updateTradeUI();

  updateProfileStats();

};


/* =========================================
   SAYFA BAŞLAT
========================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      initZayagg();

    },
    { once: true }
  );

} else {

  startZayagg()

}
/* =========================================
   7/7 — SON INIT + HATA KONTROLÜ
========================================= */


/* =========================================
   TEK VE TEMİZ BAŞLANGIÇ
========================================= */

function startZayagg() {

  try {

    /* -------------------------------------
       Temel verileri kontrol et
    ------------------------------------- */

    ensureStorageData();
    validateStorageData();
    validatePetDatabase();
    validateTradeArrays();


    /* -------------------------------------
       Ana UI
    ------------------------------------- */

    updateTradeUI();

    updateProfileStats();


    /* -------------------------------------
       Pet Picker
    ------------------------------------- */

    initAddPetButtons();
    initPetPickerEvents();
    initClearTradeButtons();
    initTradeSideButtons();
    initPickerPetSelection();
    initModalBackdrop();


    /* -------------------------------------
       Navigasyon
    ------------------------------------- */

    initNavigationLinks();
    initLogo();
    initMenuEvents();
    initProfileEvents();
    initNavbar();


    /* -------------------------------------
       Genel eventler
    ------------------------------------- */

    initGlobalEvents();
    initEscapeHandler();
    initBackdropHandler();
    initResizeHandler();
    initVisibilityHandler();


    console.log(
      "ZAYAGG başarıyla başlatıldı."
    );

  } catch (error) {

    console.error(
      "ZAYAGG başlatılırken hata oluştu:",
      error
    );

  }

}


/* =========================================
   DOM READY
========================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    startZayagg,
    {
      once: true
    }
  );

} else {

  startZayagg();

}


/* =========================================
   GLOBAL HATA KONTROLÜ
========================================= */

window.addEventListener(
  "error",
  event => {

    console.error(
      "ZAYAGG JavaScript hatası:",
      event.error || event.message
    );

  }
);


/* =========================================
   PROMISE HATA KONTROLÜ
========================================= */

window.addEventListener(
  "unhandledrejection",
  event => {

    console.error(
      "ZAYAGG Promise hatası:",
      event.reason
    );

  }
);
