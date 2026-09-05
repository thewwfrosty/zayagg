/* =========================================================
   ZAYAGG — TRADING VALUE SYSTEM
   ========================================================= */

/* =========================
   PET DATA
   ========================= */

const pets = [

  /* LEGENDARY */
  {name:"Bat Dragon",icon:"🦇",value:1000,rarity:"Legendary",demand:"Very High",trend:"↑"},
  {name:"Shadow Dragon",icon:"🐉",value:850,rarity:"Legendary",demand:"Very High",trend:"↑"},
  {name:"Frost Dragon",icon:"🐲",value:700,rarity:"Legendary",demand:"Very High",trend:"↑"},
  {name:"Giraffe",icon:"🦒",value:580,rarity:"Legendary",demand:"Very High",trend:"↑"},
  {name:"Owl",icon:"🦉",value:400,rarity:"Legendary",demand:"Very High",trend:"→"},
  {name:"Parrot",icon:"🦜",value:320,rarity:"Legendary",demand:"High",trend:"↑"},
  {name:"Crow",icon:"🐦‍⬛",value:250,rarity:"Legendary",demand:"High",trend:"→"},
  {name:"Evil Unicorn",icon:"🦄",value:220,rarity:"Legendary",demand:"High",trend:"↑"},
  {name:"Arctic Reindeer",icon:"🦌",value:150,rarity:"Legendary",demand:"High",trend:"↑"},
  {name:"Turtle",icon:"🐢",value:100,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Kangaroo",icon:"🦘",value:85,rarity:"Legendary",demand:"Good",trend:"→"},
  {name:"Albino Monkey",icon:"🐒",value:80,rarity:"Legendary",demand:"High",trend:"↑"},
  {name:"Frost Fury",icon:"🐉",value:75,rarity:"Legendary",demand:"High",trend:"↑"},
  {name:"Golden Rat",icon:"🐀",value:55,rarity:"Legendary",demand:"Good",trend:"→"},
  {name:"Dancing Dragon",icon:"🐲",value:45,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Shark",icon:"🦈",value:35,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Octopus",icon:"🐙",value:30,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Kitsune",icon:"🦊",value:25,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"Cerberus",icon:"🐺",value:20,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"Dragon",icon:"🐉",value:10,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"King Bee",icon:"🐝",value:18,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"Golden Penguin",icon:"🐧",value:17,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"Golden Griffin",icon:"🦅",value:14,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"Golden Unicorn",icon:"🦄",value:20,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Golden Dragon",icon:"🐉",value:15,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"Diamond Dragon",icon:"🐲",value:30,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Diamond Griffin",icon:"🦅",value:25,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"Diamond Unicorn",icon:"🦄",value:35,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Ninja Monkey",icon:"🐒",value:22,rarity:"Legendary",demand:"Good",trend:"→"},
  {name:"Guardian Lion",icon:"🦁",value:18,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"Snow Owl",icon:"🦉",value:28,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"King Monkey",icon:"🐒",value:70,rarity:"Legendary",demand:"High",trend:"↑"},
  {name:"Queen Bee",icon:"🐝",value:24,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"Dodo",icon:"🦤",value:24,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"T-Rex",icon:"🦖",value:24,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Skele-Rex",icon:"🦖",value:30,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Goldhorn",icon:"🐐",value:18,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"Phoenix",icon:"🔥",value:20,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Winged Horse",icon:"🐴",value:22,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Axolotl",icon:"🦎",value:16,rarity:"Legendary",demand:"Normal",trend:"→"},
  {name:"Lava Dragon",icon:"🐉",value:32,rarity:"Legendary",demand:"Good",trend:"↑"},
  {name:"Ancient Dragon",icon:"🐲",value:12,rarity:"Legendary",demand:"Normal",trend:"→"},

  /* ULTRA RARE */
  {name:"Dalmatian",icon:"🐕",value:90,rarity:"Ultra Rare",demand:"High",trend:"↑"},
  {name:"Flamingo",icon:"🦩",value:85,rarity:"Ultra Rare",demand:"High",trend:"→"},
  {name:"Lion",icon:"🦁",value:80,rarity:"Ultra Rare",demand:"High",trend:"↑"},
  {name:"Red Panda",icon:"🦊",value:7,rarity:"Ultra Rare",demand:"Normal",trend:"→"},
  {name:"Bee",icon:"🐝",value:7,rarity:"Ultra Rare",demand:"Normal",trend:"→"},
  {name:"Crocodile",icon:"🐊",value:55,rarity:"Ultra Rare",demand:"High",trend:"↑"},
  {name:"Hedgehog",icon:"🦔",value:75,rarity:"Ultra Rare",demand:"Very High",trend:"↑"},
  {name:"Zombie Buffalo",icon:"🐃",value:50,rarity:"Ultra Rare",demand:"High",trend:"→"},
  {name:"Platypus",icon:"🦆",value:45,rarity:"Ultra Rare",demand:"Good",trend:"→"},
  {name:"Brown Bear",icon:"🐻",value:40,rarity:"Ultra Rare",demand:"Good",trend:"↑"},
  {name:"Polar Bear",icon:"🐻‍❄️",value:38,rarity:"Ultra Rare",demand:"Good",trend:"→"},
  {name:"Cow",icon:"🐮",value:70,rarity:"Ultra Rare",demand:"High",trend:"↑"},
  {name:"Koala",icon:"🐨",value:15,rarity:"Ultra Rare",demand:"Good",trend:"→"},
  {name:"Penguin",icon:"🐧",value:8,rarity:"Ultra Rare",demand:"Normal",trend:"→"},
  {name:"Sloth",icon:"🦥",value:7,rarity:"Ultra Rare",demand:"Normal",trend:"→"},
  {name:"Horse",icon:"🐴",value:6,rarity:"Ultra Rare",demand:"Normal",trend:"→"},
  {name:"Toucan",icon:"🦜",value:6,rarity:"Ultra Rare",demand:"Normal",trend:"→"},
  {name:"Starfish",icon:"⭐",value:5,rarity:"Ultra Rare",demand:"Normal",trend:"→"},
  {name:"Panda",icon:"🐼",value:6,rarity:"Ultra Rare",demand:"Normal",trend:"→"},
  {name:"Red Squirrel",icon:"🐿️",value:5,rarity:"Ultra Rare",demand:"Normal",trend:"→"},
  {name:"Shiba Inu",icon:"🐕",value:5,rarity:"Ultra Rare",demand:"Normal",trend:"→"},
  {name:"Ginger Cat",icon:"🐈",value:5,rarity:"Ultra Rare",demand:"Normal",trend:"→"},

  /* RARE */
  {name:"Blue Dog",icon:"🐕",value:75,rarity:"Rare",demand:"High",trend:"→"},
  {name:"Pink Cat",icon:"🐱",value:70,rarity:"Rare",demand:"Good",trend:"↑"},
  {name:"Elephant",icon:"🐘",value:65,rarity:"Rare",demand:"High",trend:"→"},
  {name:"Hyena",icon:"🐕",value:60,rarity:"Rare",demand:"Good",trend:"→"},
  {name:"Turkey",icon:"🦃",value:45,rarity:"Rare",demand:"Good",trend:"→"},
  {name:"Pig",icon:"🐷",value:40,rarity:"Rare",demand:"Good",trend:"→"},
  {name:"Beaver",icon:"🦫",value:18,rarity:"Rare",demand:"Good",trend:"→"},
  {name:"Rabbit",icon:"🐰",value:16,rarity:"Rare",demand:"Good",trend:"↑"},
  {name:"Snow Puma",icon:"🐆",value:15,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Bunny",icon:"🐇",value:14,rarity:"Rare",demand:"Good",trend:"→"},
  {name:"Monkey",icon:"🐒",value:12,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Seahorse",icon:"🌊",value:8,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Narwhal",icon:"🐋",value:8,rarity:"Rare",demand:"Normal",trend:"↑"},
  {name:"Snow Monkey",icon:"🐒",value:6,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Beaver",icon:"🦫",value:18,rarity:"Rare",demand:"Good",trend:"→"},
  {name:"Emperor Penguin",icon:"🐧",value:15,rarity:"Rare",demand:"Good",trend:"↑"},
  {name:"Rabbit",icon:"🐰",value:16,rarity:"Rare",demand:"Good",trend:"↑"},
  {name:"Dilophosaurus",icon:"🦖",value:11,rarity:"Rare",demand:"Normal",trend:"↑"},
  {name:"Stegosaurus",icon:"🦕",value:8,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Woolly Rhino",icon:"🦏",value:12,rarity:"Rare",demand:"Good",trend:"↑"},
  {name:"Musk Ox",icon:"🐂",value:8,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Llama",icon:"🦙",value:20,rarity:"Rare",demand:"Good",trend:"↑"},
  {name:"Arctic Fox",icon:"🦊",value:18,rarity:"Rare",demand:"Good",trend:"↑"},
  {name:"Swan",icon:"🦢",value:12,rarity:"Rare",demand:"Good",trend:"→"},
  {name:"Black Panther",icon:"🐈‍⬛",value:35,rarity:"Rare",demand:"Good",trend:"↑"},

  /* UNCOMMON */
  {name:"Zebra",icon:"🦓",value:13,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Emu",icon:"🐦",value:10,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Puma",icon:"🐆",value:9,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Woolly Mammoth",icon:"🦣",value:9,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Fennec Fox",icon:"🦊",value:5,rarity:"Uncommon",demand:"Good",trend:"→"},
  {name:"Meerkat",icon:"🦦",value:5,rarity:"Uncommon",demand:"Good",trend:"↑"},
  {name:"Capybara",icon:"🦫",value:4,rarity:"Uncommon",demand:"Good",trend:"↑"},
  {name:"Dingo",icon:"🐕",value:4,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Glyptodon",icon:"🦎",value:3,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Chocolate Labrador",icon:"🐕",value:3,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Pterodactyl",icon:"🦅",value:3,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Wolf",icon:"🐺",value:3,rarity:"Uncommon",demand:"Good",trend:"↑"},
  {name:"Triceratops",icon:"🦖",value:4,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Stegosaurus",icon:"🦕",value:4,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Banded Palm Civet",icon:"🐾",value:3,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Mongoose",icon:"🦦",value:3,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Warthog",icon:"🐗",value:3,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Poodle",icon:"🐩",value:3,rarity:"Uncommon",demand:"Normal",trend:"→"},

  /* COMMON */
  {name:"Dog",icon:"🐶",value:2,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Cat",icon:"🐱",value:2,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Buffalo",icon:"🐃",value:2,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Ant",icon:"🐜",value:2,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Mouse",icon:"🐭",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Otter",icon:"🦦",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Robin",icon:"🐦",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Chicken",icon:"🐔",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Ground Sloth",icon:"🦥",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Tasmanian Tiger",icon:"🐯",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Bandicoot",icon:"🐀",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Walrus",icon:"🦭",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Buffalo",icon:"🐃",value:2,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Tasmanian Tiger",icon:"🐯",value:1,rarity:"Common",demand:"Normal",trend:"→"}
];


/* =========================================================
   EXTRA ITEM DATA
   ========================================================= */

const extraItems = [

  {name:"Cracked Egg",icon:"🥚",value:2,type:"Eggs"},
  {name:"Pet Egg",icon:"🥚",value:4,type:"Eggs"},
  {name:"Royal Egg",icon:"🥚",value:6,type:"Eggs"},
  {name:"Japan Egg",icon:"🥚",value:5,type:"Eggs"},
  {name:"Mythic Egg",icon:"🥚",value:5,type:"Eggs"},
  {name:"Fossil Egg",icon:"🥚",value:5,type:"Eggs"},

  {name:"Witch's Caravan",icon:"🚙",value:8,type:"Vehicles"},
  {name:"Rocket Racer",icon:"🚗",value:12,type:"Vehicles"},
  {name:"Hoverboard",icon:"🛹",value:10,type:"Vehicles"},
  {name:"Cloud Car",icon:"☁️",value:35,type:"Vehicles"},
  {name:"Banana Car",icon:"🍌",value:15,type:"Vehicles"},
  {name:"Axel",icon:"🏎️",value:8,type:"Vehicles"},

  {name:"Founder Crown",icon:"👑",value:12,type:"Pet Wear"},
  {name:"Cowboy Hat",icon:"🤠",value:5,type:"Pet Wear"},
  {name:"Bone Wings",icon:"🪽",value:8,type:"Pet Wear"},
  {name:"Cute Circle Glasses",icon:"👓",value:4,type:"Pet Wear"},

  {name:"Duck Balloon",icon:"🎈",value:5,type:"Toys"},
  {name:"Magic Wand",icon:"🪄",value:7,type:"Toys"},
  {name:"Teddy Bear",icon:"🧸",value:4,type:"Toys"},
  {name:"Plunger Grappling Hook",icon:"🪠",value:3,type:"Toys"},

  {name:"Big Head Potion",icon:"🧪",value:5,type:"Food"},
  {name:"Ride-A-Pet Potion",icon:"🧪",value:10,type:"Food"},
  {name:"Fly-A-Pet Potion",icon:"🧪",value:15,type:"Food"},

  {name:"Standard Gift",icon:"🎁",value:3,type:"Gifts"},
  {name:"Big Gift",icon:"🎁",value:5,type:"Gifts"},
  {name:"Massive Gift",icon:"🎁",value:8,type:"Gifts"}
];


/* =========================================================
   STATE
   ========================================================= */

let tradeState = {
  you: [],
  them: []
};

let currentSide = null;
let currentCategory = "Pets";
let currentRarity = "All";
let currentSearch = "";

let favorites = JSON.parse(
  localStorage.getItem("zayaggFavorites") || "[]"
);


/* =========================================================
   HELPERS
   ========================================================= */

function getAllItems() {
  return [
    ...pets.map(p => ({
      ...p,
      type: "Pets"
    })),
    ...extraItems
  ];
}

function getItemKey(item) {
  return `${item.type || "Pets"}:${item.name}`;
}

function formatValue(value) {
  return Number(value).toLocaleString("tr-TR");
}

function saveFavorites() {
  localStorage.setItem(
    "zayaggFavorites",
    JSON.stringify(favorites)
  );
}

function isFavorite(item) {
  return favorites.includes(getItemKey(item));
}


/* =========================================================
   VALUE LIST
   ========================================================= */

function renderValues() {

  const grid = document.getElementById("valueGrid");
  if (!grid) return;

  const searchInput = document.getElementById("search");
  const search = searchInput
    ? searchInput.value.toLowerCase().trim()
    : "";

  const list = pets
    .filter(p =>
      p.name.toLowerCase().includes(search)
    )
    .slice(0, 24);

  if (!list.length) {
    grid.innerHTML = `
      <div class="no-results">
        Pet bulunamadı.
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(p => `
    <div class="value-card">
      <div class="value-icon">${p.icon}</div>

      <div class="value-info">
        <strong>${p.name}</strong>
        <span>${p.rarity}</span>
      </div>

      <div class="value-price">
        ${formatValue(p.value)}
        <small>${p.trend}</small>
      </div>
    </div>
  `).join("");
}


/* =========================================================
   CALCULATOR
   ========================================================= */

function addItem(side) {
  currentSide = side;
  openPetSelector();
}

function getItemTotalValue(item) {
  return item.finalValue * item.quantity;
}

function calculateTotal(side) {

  return tradeState[side].reduce(
    (total, item) =>
      total + getItemTotalValue(item),
    0
  );
}

function renderTrade() {

  const youContainer = document.getElementById("youItems");
  const themContainer = document.getElementById("themItems");

  if (!youContainer || !themContainer) return;

  renderSide("you", youContainer);
  renderSide("them", themContainer);

  const youTotal = calculateTotal("you");
  const themTotal = calculateTotal("them");

  const youTotalEl = document.getElementById("youTotal");
  const themTotalEl = document.getElementById("themTotal");

  if (youTotalEl)
    youTotalEl.textContent = formatValue(youTotal);

  if (themTotalEl)
    themTotalEl.textContent = formatValue(themTotal);

  updateResult(youTotal, themTotal);
}

function renderSide(side, container) {

  const items = tradeState[side];

  if (!items.length) {
    container.innerHTML = `
      <div class="empty-trade">
        Henüz item eklenmedi.
      </div>
    `;
    return;
  }

  container.innerHTML = items.map((item, index) => {

    const variantText =
      item.variant === "neon"
        ? "✨ Neon"
        : item.variant === "mega"
        ? "🌈 Mega Neon"
        : "Normal";

    return `
      <div class="trade-item">

        <button
          class="pet-select-button"
          onclick="changeVariant('${side}', ${index})"
        >
          <div class="trade-item-icon">
            ${item.icon}
          </div>

          <div class="trade-item-info">
            <strong>${item.name}</strong>
            <span>${variantText}</span>
            <small>
              ${formatValue(item.finalValue)} / adet
            </small>
          </div>
        </button>

        <div class="quantity-controls">

          <button
            onclick="changeQuantity('${side}', ${index}, -1)"
          >
            −
          </button>

          <span>${item.quantity}</span>

          <button
            onclick="changeQuantity('${side}', ${index}, 1)"
          >
            +
          </button>

        </div>

        <strong class="trade-item-total">
          ${formatValue(getItemTotalValue(item))}
        </strong>

        <button
          class="remove-item"
          onclick="removeItem('${side}', ${index})"
        >
          ×
        </button>

      </div>
    `;
  }).join("");
}


/* =========================================================
   QUANTITY
   ========================================================= */

function changeQuantity(side, index, amount) {

  const item = tradeState[side][index];

  item.quantity += amount;

  if (item.quantity <= 0) {
    tradeState[side].splice(index, 1);
  }

  renderTrade();
}


/* =========================================================
   REMOVE
   ========================================================= */

function removeItem(side, index) {
  tradeState[side].splice(index, 1);
  renderTrade();
}


/* =========================================================
   VARIANT
   ========================================================= */

function changeVariant(side, index) {

  const item = tradeState[side][index];

  currentSide = side;

  openVariantSelector(item.originalName || item.name);
}

function openVariantSelector(name) {

  const pet = pets.find(
    p => p.name === name
  );

  if (!pet) return;

  const modal = document.getElementById("petModal");

  if (!modal) return;

  modal.innerHTML = `
    <div class="pet-modal-box">

      <div class="modal-header">
        <div>
          <small>VARIANT SEÇ</small>
          <h3>${pet.icon} ${pet.name}</h3>
        </div>

        <button onclick="closePetSelector()">×</button>
      </div>

      <div class="variant-title">
        ${pet.name} için varyant seç
      </div>

      <div class="variant-grid">

        <button
          class="variant-card"
          onclick="selectVariant('${pet.name}', 'normal')"
        >
          <div class="variant-icon">
            ${pet.icon}
          </div>
          <strong>Normal</strong>
          <span>${formatValue(pet.value)}</span>
        </button>

        <button
          class="variant-card neon"
          onclick="selectVariant('${pet.name}', 'neon')"
        >
          <div class="variant-icon">✨</div>
          <strong>Neon</strong>
          <span>${formatValue(pet.value * 4)}</span>
        </button>

        <button
          class="variant-card mega"
          onclick="selectVariant('${pet.name}', 'mega')"
        >
          <div class="variant-icon">🌈</div>
          <strong>Mega Neon</strong>
          <span>${formatValue(pet.value * 16)}</span>
        </button>

      </div>

      <button
        class="variant-back"
        onclick="openPetSelector()"
      >
        ← Pet listesine dön
      </button>

    </div>
  `;

  modal.classList.add("open");
}


/* =========================================================
   PET SELECTOR
   ========================================================= */

function openPetSelector() {

  let modal = document.getElementById("petModal");

  if (!modal) {

    modal = document.createElement("div");

    modal.id = "petModal";
    modal.className = "pet-modal";

    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="pet-modal-box">

      <div class="modal-header">

        <div>
          <small>ITEM SELECTOR</small>
          <h3>Pet / Item Seç</h3>
        </div>

        <button onclick="closePetSelector()">×</button>

      </div>

      <input
        id="petSearch"
        class="pet-search"
        placeholder="🔎 Pet veya item ara..."
        autocomplete="off"
      >

      <div class="pet-filters">

        <button
          class="pet-filter active"
          onclick="setCategory('Pets', this)"
        >
          🐾 Pets
        </button>

        <button
          class="pet-filter"
          onclick="setCategory('Favorites', this)"
        >
          ⭐ Favorites
        </button>

        <button
          class="pet-filter"
          onclick="setCategory('Eggs', this)"
        >
          🥚 Eggs
        </button>

        <button
          class="pet-filter"
          onclick="setCategory('Vehicles', this)"
        >
          🚗 Vehicles
        </button>

        <button
          class="pet-filter"
          onclick="setCategory('Pet Wear', this)"
        >
          👑 Pet Wear
        </button>

        <button
          class="pet-filter"
          onclick="setCategory('Toys', this)"
        >
          🧸 Toys
        </button>

        <button
          class="pet-filter"
          onclick="setCategory('Food', this)"
        >
          🍎 Food
        </button>

        <button
          class="pet-filter"
          onclick="setCategory('Gifts', this)"
        >
          🎁 Gifts
        </button>

      </div>

      <div
        id="rarityFilters"
        class="pet-filters rarity-filters"
      >

        <button
          class="pet-filter rarity active"
          onclick="setRarity('All', this)"
        >
          All
        </button>

        <button
          class="pet-filter rarity"
          onclick="setRarity('Legendary', this)"
        >
          Legendary
        </button>

        <button
          class="pet-filter rarity"
          onclick="setRarity('Ultra Rare', this)"
        >
          Ultra Rare
        </button>

        <button
          class="pet-filter rarity"
          onclick="setRarity('Rare', this)"
        >
          Rare
        </button>

        <button
          class="pet-filter rarity"
          onclick="setRarity('Uncommon', this)"
        >
          Uncommon
        </button>

        <button
          class="pet-filter rarity"
          onclick="setRarity('Common', this)"
        >
          Common
        </button>

      </div>

      <div id="petList" class="pet-list"></div>

    </div>
  `;

  currentCategory = "Pets";
  currentRarity = "All";
  currentSearch = "";

  modal.classList.add("open");

  const search = document.getElementById("petSearch");

  search.addEventListener("input", e => {
    currentSearch = e.target.value.toLowerCase();
    renderPetList();
  });

  renderPetList();
}


/* =========================================================
   CATEGORY
   ========================================================= */

function setCategory(category, button) {

  currentCategory = category;

  document
    .querySelectorAll(".pet-filter")
    .forEach(btn => {
      if (
        btn.closest(".pet-filters") ===
        button.closest(".pet-filters")
      ) {
        btn.classList.remove("active");
      }
    });

  button.classList.add("active");

  const rarityFilters =
    document.getElementById("rarityFilters");

  if (rarityFilters) {
    rarityFilters.style.display =
      category === "Pets"
      ? "flex"
      : "none";
  }

  currentRarity = "All";

  renderPetList();
}


/* =========================================================
   RARITY
   ========================================================= */

function setRarity(rarity, button) {

  currentRarity = rarity;

  document
    .querySelectorAll(".rarity")
    .forEach(btn =>
      btn.classList.remove("active")
    );

  button.classList.add("active");

  renderPetList();
}


/* =========================================================
   PET LIST
   ========================================================= */

function renderPetList() {

  const container =
    document.getElementById("petList");

  if (!container) return;

  let list = getAllItems();

  if (currentCategory === "Favorites") {

    list = list.filter(item =>
      isFavorite(item)
    );

  } else {

    list = list.filter(item =>
      item.type === currentCategory
    );
  }

  if (
    currentCategory === "Pets" &&
    currentRarity !== "All"
  ) {

    list = list.filter(
      item =>
        item.rarity === currentRarity
    );
  }

  if (currentSearch) {

    list = list.filter(item =>
      item.name
        .toLowerCase()
        .includes(currentSearch)
    );
  }

  if (!list.length) {

    container.innerHTML = `
      <div class="no-results">
        <div>🔎</div>
        <strong>Sonuç bulunamadı</strong>
        <span>Başka bir arama deneyin.</span>
      </div>
    `;

    return;
  }

  container.innerHTML = list.map(item => {

    const favorite = isFavorite(item);

    const rarityText =
      item.rarity || item.type;

    return `
      <div class="pet-option">

        <button
          class="favorite-button ${favorite ? "active" : ""}"
          onclick="toggleFavorite(event, '${getItemKey(item)}')"
        >
          ${favorite ? "★" : "☆"}
        </button>

        <button
          class="pet-select-button"
          onclick="selectItem('${item.type}', '${item.name}')"
        >

          <div class="pet-option-icon">
            ${item.icon}
          </div>

          <div class="pet-option-info">

            <strong>${item.name}</strong>

            <span>
              ${rarityText}
              ${item.demand ? ` • ${item.demand}` : ""}
            </span>

          </div>

          <strong class="pet-option-value">
            ${formatValue(item.value)}
          </strong>

        </button>

      </div>
    `;

  }).join("");
}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(event, key) {

  event.stopPropagation();

  if (favorites.includes(key)) {

    favorites =
      favorites.filter(
        item => item !== key
      );

  } else {

    favorites.push(key);
  }

  saveFavorites();
  renderPetList();
}


/* =========================================================
   SELECT ITEM
   ========================================================= */

function selectItem(type, name) {

  const item =
    getAllItems().find(
      i =>
        i.type === type &&
        i.name === name
    );

  if (!item) return;

  if (type !== "Pets") {

    addTradeItem({
      ...item,
      originalName: item.name,
      variant: "normal",
      finalValue: item.value,
      quantity: 1
    });

    closePetSelector();

    return;
  }

  openVariantSelectorForNew(item);
}


/* =========================================================
   SELECT NEW PET VARIANT
   ========================================================= */

function openVariantSelectorForNew(pet) {

  const modal =
    document.getElementById("petModal");

  if (!modal) return;

  modal.innerHTML = `
    <div class="pet-modal-box">

      <div class="modal-header">

        <div>
          <small>VARIANT SEÇ</small>
          <h3>${pet.icon} ${pet.name}</h3>
        </div>

        <button onclick="closePetSelector()">×</button>

      </div>

      <div class="variant-grid">

        <button
          class="variant-card"
          onclick="addVariant('${pet.name}', 'normal')"
        >
          <div class="variant-icon">
            ${pet.icon}
          </div>
          <strong>Normal</strong>
          <span>${formatValue(pet.value)}</span>
        </button>

        <button
          class="variant-card neon"
          onclick="addVariant('${pet.name}', 'neon')"
        >
          <div class="variant-icon">✨</div>
          <strong>Neon</strong>
          <span>${formatValue(pet.value * 4)}</span>
        </button>

        <button
          class="variant-card mega"
          onclick="addVariant('${pet.name}', 'mega')"
        >
          <div class="variant-icon">🌈</div>
          <strong>Mega Neon</strong>
          <span>${formatValue(pet.value * 16)}</span>
        </button>

      </div>

      <button
        class="variant-back"
        onclick="openPetSelector()"
      >
        ← Pet listesine dön
      </button>

    </div>
  `;
}


/* =========================================================
   ADD VARIANT
   ========================================================= */

function addVariant(name, variant) {

  const pet =
    pets.find(p => p.name === name);

  if (!pet) return;

  let multiplier = 1;

  if (variant === "neon")
    multiplier = 4;

  if (variant === "mega")
    multiplier = 16;

  addTradeItem({
    ...pet,
    type: "Pets",
    originalName: pet.name,
    variant,
    finalValue: pet.value * multiplier,
    quantity: 1
  });

  closePetSelector();
}


/* =========================================================
   ADD TRADE ITEM
   ========================================================= */

function addTradeItem(item) {

  const side = currentSide;

  if (!side) return;

  const existing =
    tradeState[side].find(
      x =>
        x.originalName === item.originalName &&
        x.variant === item.variant
    );

  if (existing) {

    existing.quantity += 1;

  } else {

    tradeState[side].push(item);
  }

  renderTrade();
}


/* =========================================================
   RESULT
   ========================================================= */

function updateResult(youTotal, themTotal) {

  const card =
    document.getElementById("resultCard");

  if (!card) return;

  if (youTotal === 0 && themTotal === 0) {

    card.className =
      "result-card neutral";

    card.innerHTML = `
      <div>
        <small>TRADE SONUCU</small>
        <h3>Pet ekleyerek başla</h3>
      </div>

      <div class="result-number">—</div>
    `;

    return;
  }

  if (youTotal === 0 || themTotal === 0) {

    card.className =
      "result-card neutral";

    card.innerHTML = `
      <div>
        <small>TRADE SONUCU</small>
        <h3>İki tarafa da item ekle</h3>
      </div>

      <div class="result-number">—</div>
    `;

    return;
  }

  const difference =
    themTotal - youTotal;

  const percent =
    (difference / youTotal) * 100;

  let result;
  let resultClass;

  if (Math.abs(percent) <= 10) {

    result = "FAIR";
    resultClass = "fair";

  } else if (difference > 0) {

    result = "WIN";
    resultClass = "win";

  } else {

    result = "LOSE";
    resultClass = "lose";
  }

  const sign =
    difference > 0 ? "+" : "";

  card.className =
    `result-card ${resultClass}`;

  card.innerHTML = `
    <div>

      <small>TRADE SONUCU</small>

      <h3>${result}</h3>

      <span class="result-detail">
        Sen: ${formatValue(youTotal)}
        &nbsp; • &nbsp;
        Karşı: ${formatValue(themTotal)}
      </span>

    </div>

    <div class="result-number">

      ${sign}${formatValue(difference)}

      <small>
        ${sign}${percent.toFixed(1)}%
      </small>

    </div>
  `;
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closePetSelector() {

  const modal =
    document.getElementById("petModal");

  if (modal) {

    modal.classList.remove("open");
    modal.innerHTML = "";
  }

  currentSide = null;
}


/* =========================================================
   CLEAR
   ========================================================= */

function clearTrade() {

  tradeState.you = [];
  tradeState.them = [];

  renderTrade();
}


/* =========================================================
   EVENTS
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderTrade();
    renderValues();

    const clearBtn =
      document.getElementById("clearBtn");

    if (clearBtn) {
      clearBtn.addEventListener(
        "click",
        clearTrade
      );
    }

  }
);


/* =========================================================
   CLOSE MODAL OUTSIDE
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    const modal =
      document.getElementById("petModal");

    if (
      modal &&
      event.target === modal
    ) {
      closePetSelector();
    }

  }
);
