/* =========================================================
   ZAYAGG — TRADING CALCULATOR
   ========================================================= */

const pets = [

  // LEGENDARY
  {name:"Bat Dragon", value:1000, rarity:"Legendary", icon:"🐉"},
  {name:"Shadow Dragon", value:850, rarity:"Legendary", icon:"🐲"},
  {name:"Frost Dragon", value:700, rarity:"Legendary", icon:"🐉"},
  {name:"Giraffe", value:580, rarity:"Legendary", icon:"🦒"},
  {name:"Owl", value:400, rarity:"Legendary", icon:"🦉"},
  {name:"Parrot", value:320, rarity:"Legendary", icon:"🦜"},
  {name:"Crow", value:250, rarity:"Legendary", icon:"🐦"},
  {name:"Evil Unicorn", value:220, rarity:"Legendary", icon:"🦄"},
  {name:"Arctic Reindeer", value:150, rarity:"Legendary", icon:"🦌"},
  {name:"Turtle", value:100, rarity:"Legendary", icon:"🐢"},
  {name:"Kangaroo", value:85, rarity:"Legendary", icon:"🦘"},
  {name:"Albino Monkey", value:80, rarity:"Legendary", icon:"🐒"},
  {name:"Frost Fury", value:75, rarity:"Legendary", icon:"🐲"},
  {name:"Golden Rat", value:55, rarity:"Legendary", icon:"🐀"},
  {name:"Dancing Dragon", value:45, rarity:"Legendary", icon:"🐉"},
  {name:"Shark", value:35, rarity:"Legendary", icon:"🦈"},
  {name:"Octopus", value:30, rarity:"Legendary", icon:"🐙"},
  {name:"Kitsune", value:25, rarity:"Legendary", icon:"🦊"},
  {name:"Cerberus", value:20, rarity:"Legendary", icon:"🐕"},
  {name:"Dragon", value:10, rarity:"Legendary", icon:"🐲"},
  {name:"King Bee", value:35, rarity:"Legendary", icon:"🐝"},
  {name:"Golden Penguin", value:30, rarity:"Legendary", icon:"🐧"},
  {name:"Golden Griffin", value:28, rarity:"Legendary", icon:"🦅"},
  {name:"Golden Unicorn", value:27, rarity:"Legendary", icon:"🦄"},
  {name:"Golden Dragon", value:27, rarity:"Legendary", icon:"🐉"},
  {name:"Diamond Dragon", value:25, rarity:"Legendary", icon:"🐲"},
  {name:"Diamond Griffin", value:23, rarity:"Legendary", icon:"🦅"},
  {name:"Diamond Unicorn", value:23, rarity:"Legendary", icon:"🦄"},
  {name:"Ninja Monkey", value:22, rarity:"Legendary", icon:"🐒"},
  {name:"Guardian Lion", value:21, rarity:"Legendary", icon:"🦁"},
  {name:"Snow Owl", value:20, rarity:"Legendary", icon:"🦉"},
  {name:"King Monkey", value:20, rarity:"Legendary", icon:"🐒"},
  {name:"Queen Bee", value:19, rarity:"Legendary", icon:"🐝"},
  {name:"Dodo", value:18, rarity:"Legendary", icon:"🦤"},
  {name:"T-Rex", value:18, rarity:"Legendary", icon:"🦖"},
  {name:"Skele-Rex", value:17, rarity:"Legendary", icon:"🦴"},
  {name:"Goldhorn", value:16, rarity:"Legendary", icon:"🐐"},
  {name:"Phoenix", value:16, rarity:"Legendary", icon:"🔥"},
  {name:"Winged Horse", value:15, rarity:"Legendary", icon:"🐎"},
  {name:"Axolotl", value:14, rarity:"Legendary", icon:"🦎"},
  {name:"Lava Dragon", value:14, rarity:"Legendary", icon:"🐉"},
  {name:"Ancient Dragon", value:12, rarity:"Legendary", icon:"🐲"},

  // ULTRA RARE
  {name:"Dalmatian", value:90, rarity:"Ultra Rare", icon:"🐶"},
  {name:"Flamingo", value:85, rarity:"Ultra Rare", icon:"🦩"},
  {name:"Lion", value:80, rarity:"Ultra Rare", icon:"🦁"},
  {name:"Crocodile", value:55, rarity:"Ultra Rare", icon:"🐊"},
  {name:"Hedgehog", value:50, rarity:"Ultra Rare", icon:"🦔"},
  {name:"Zombie Buffalo", value:45, rarity:"Ultra Rare", icon:"🐃"},
  {name:"Platypus", value:40, rarity:"Ultra Rare", icon:"🦆"},
  {name:"Brown Bear", value:35, rarity:"Ultra Rare", icon:"🐻"},
  {name:"Polar Bear", value:30, rarity:"Ultra Rare", icon:"🐻‍❄️"},
  {name:"Koala", value:20, rarity:"Ultra Rare", icon:"🐨"},
  {name:"Penguin", value:15, rarity:"Ultra Rare", icon:"🐧"},
  {name:"Sloth", value:13, rarity:"Ultra Rare", icon:"🦥"},
  {name:"Horse", value:10, rarity:"Ultra Rare", icon:"🐴"},
  {name:"Toucan", value:9, rarity:"Ultra Rare", icon:"🦜"},
  {name:"Starfish", value:8, rarity:"Ultra Rare", icon:"⭐"},
  {name:"Panda", value:8, rarity:"Ultra Rare", icon:"🐼"},
  {name:"Red Squirrel", value:8, rarity:"Ultra Rare", icon:"🐿️"},
  {name:"Shiba Inu", value:7, rarity:"Ultra Rare", icon:"🐕"},
  {name:"Ginger Cat", value:7, rarity:"Ultra Rare", icon:"🐈"},
  {name:"Red Panda", value:7, rarity:"Ultra Rare", icon:"🦊"},
  {name:"Bee", value:7, rarity:"Ultra Rare", icon:"🐝"},

  // RARE
  {name:"Blue Dog", value:75, rarity:"Rare", icon:"🐶"},
  {name:"Pink Cat", value:70, rarity:"Rare", icon:"🐱"},
  {name:"Elephant", value:65, rarity:"Rare", icon:"🐘"},
  {name:"Hyena", value:60, rarity:"Rare", icon:"🐕"},
  {name:"Turkey", value:45, rarity:"Rare", icon:"🦃"},
  {name:"Pig", value:40, rarity:"Rare", icon:"🐷"},
  {name:"Llama", value:35, rarity:"Rare", icon:"🦙"},
  {name:"Cow", value:32, rarity:"Rare", icon:"🐄"},
  {name:"Swan", value:30, rarity:"Rare", icon:"🦢"},
  {name:"Black Panther", value:28, rarity:"Rare", icon:"🐈‍⬛"},
  {name:"Arctic Fox", value:25, rarity:"Rare", icon:"🦊"},
  {name:"Woolly Rhino", value:22, rarity:"Rare", icon:"🦏"},
  {name:"Emperor Penguin", value:20, rarity:"Rare", icon:"🐧"},
  {name:"Musk Ox", value:19, rarity:"Rare", icon:"🐂"},
  {name:"Beaver", value:18, rarity:"Rare", icon:"🦫"},
  {name:"Rabbit", value:16, rarity:"Rare", icon:"🐇"},
  {name:"Snow Puma", value:15, rarity:"Rare", icon:"🐆"},
  {name:"Bunny", value:14, rarity:"Rare", icon:"🐰"},
  {name:"Monkey", value:12, rarity:"Rare", icon:"🐒"},
  {name:"Seahorse", value:8, rarity:"Rare", icon:"🐴"},
  {name:"Narwhal", value:8, rarity:"Rare", icon:"🐋"},
  {name:"Snow Monkey", value:6, rarity:"Rare", icon:"🐒"},

  // UNCOMMON
  {name:"Zebra", value:13, rarity:"Uncommon", icon:"🦓"},
  {name:"Emu", value:10, rarity:"Uncommon", icon:"🐦"},
  {name:"Puma", value:9, rarity:"Uncommon", icon:"🐆"},
  {name:"Woolly Mammoth", value:9, rarity:"Uncommon", icon:"🐘"},
  {name:"Fennec Fox", value:5, rarity:"Uncommon", icon:"🦊"},
  {name:"Meerkat", value:5, rarity:"Uncommon", icon:"🦦"},
  {name:"Capybara", value:4, rarity:"Uncommon", icon:"🦫"},
  {name:"Dingo", value:4, rarity:"Uncommon", icon:"🐕"},
  {name:"Glyptodon", value:3, rarity:"Uncommon", icon:"🦎"},
  {name:"Chocolate Labrador", value:3, rarity:"Uncommon", icon:"🐕"},
  {name:"Pterodactyl", value:3, rarity:"Uncommon", icon:"🦖"},
  {name:"Wolf", value:3, rarity:"Uncommon", icon:"🐺"},
  {name:"Triceratops", value:3, rarity:"Uncommon", icon:"🦖"},
  {name:"Stegosaurus", value:3, rarity:"Uncommon", icon:"🦕"},
  {name:"Banded Palm Civet", value:2, rarity:"Uncommon", icon:"🦝"},
  {name:"Mongoose", value:2, rarity:"Uncommon", icon:"🦦"},
  {name:"Warthog", value:2, rarity:"Uncommon", icon:"🐗"},
  {name:"Poodle", value:2, rarity:"Uncommon", icon:"🐩"},

  // COMMON
  {name:"Dog", value:2, rarity:"Common", icon:"🐶"},
  {name:"Cat", value:2, rarity:"Common", icon:"🐱"},
  {name:"Buffalo", value:2, rarity:"Common", icon:"🐃"},
  {name:"Ant", value:2, rarity:"Common", icon:"🐜"},
  {name:"Mouse", value:1, rarity:"Common", icon:"🐭"},
  {name:"Otter", value:1, rarity:"Common", icon:"🦦"},
  {name:"Robin", value:1, rarity:"Common", icon:"🐦"},
  {name:"Chicken", value:1, rarity:"Common", icon:"🐔"},
  {name:"Ground Sloth", value:1, rarity:"Common", icon:"🦥"},
  {name:"Tasmanian Tiger", value:1, rarity:"Common", icon:"🐯"},
  {name:"Bandicoot", value:1, rarity:"Common", icon:"🐭"},
  {name:"Walrus", value:1, rarity:"Common", icon:"🦭"}
];


/* =========================================================
   EXTRA ITEMS
   ========================================================= */

const extraItems = [

  {name:"Cracked Egg", value:3, category:"Eggs", icon:"🥚"},
  {name:"Pet Egg", value:5, category:"Eggs", icon:"🥚"},
  {name:"Royal Egg", value:8, category:"Eggs", icon:"🥚"},
  {name:"Japan Egg", value:7, category:"Eggs", icon:"🥚"},
  {name:"Mythic Egg", value:7, category:"Eggs", icon:"🥚"},
  {name:"Fossil Egg", value:6, category:"Eggs", icon:"🥚"},

  {name:"Witch's Caravan", value:15, category:"Vehicles", icon:"🧙"},
  {name:"Rocket Racer", value:12, category:"Vehicles", icon:"🚀"},
  {name:"Hoverboard", value:10, category:"Vehicles", icon:"🛹"},
  {name:"Cloud Car", value:20, category:"Vehicles", icon:"☁️"},
  {name:"Banana Car", value:8, category:"Vehicles", icon:"🍌"},
  {name:"Axel", value:6, category:"Vehicles", icon:"🚗"},

  {name:"Founder Crown", value:15, category:"Pet Wear", icon:"👑"},
  {name:"Cowboy Hat", value:5, category:"Pet Wear", icon:"🤠"},
  {name:"Bone Wings", value:8, category:"Pet Wear", icon:"🦴"},
  {name:"Cute Circle Glasses", value:4, category:"Pet Wear", icon:"👓"},

  {name:"Duck Balloon", value:5, category:"Toys", icon:"🎈"},
  {name:"Magic Wand", value:7, category:"Toys", icon:"🪄"},
  {name:"Teddy Bear", value:3, category:"Toys", icon:"🧸"},
  {name:"Plunger Grappling Hook", value:6, category:"Toys", icon:"🪠"},

  {name:"Big Head Potion", value:3, category:"Food", icon:"🧪"},
  {name:"Ride-A-Pet Potion", value:20, category:"Food", icon:"🧪"},
  {name:"Fly-A-Pet Potion", value:25, category:"Food", icon:"🧪"},

  {name:"Standard Gift", value:2, category:"Gifts", icon:"🎁"},
  {name:"Big Gift", value:5, category:"Gifts", icon:"🎁"},
  {name:"Massive Gift", value:10, category:"Gifts", icon:"🎁"}
];


/* =========================================================
   STATE
   ========================================================= */

let tradeState = {
  you: [],
  them: []
};

let currentSide = "you";
let currentCategory = "Pets";
let currentRarity = "All";
let currentSearch = "";
let selectedPet = null;

let favorites = JSON.parse(
  localStorage.getItem("zayaggFavorites") || "[]"
);


/* =========================================================
   HELPERS
   ========================================================= */

function getTotal(side) {
  return tradeState[side].reduce((sum, item) => {
    return sum + item.value * item.quantity;
  }, 0);
}

function saveFavorites() {
  localStorage.setItem(
    "zayaggFavorites",
    JSON.stringify(favorites)
  );
}

function toggleFavorite(name) {
  if (favorites.includes(name)) {
    favorites = favorites.filter(x => x !== name);
  } else {
    favorites.push(name);
  }

  saveFavorites();
  renderValues();

  if (document.querySelector(".pet-modal")) {
    renderPetList();
  }
}


/* =========================================================
   VALUE LIST
   ========================================================= */

function renderValues() {

  const grid = document.getElementById("valueGrid");
  const search = document.getElementById("search");

  if (!grid) return;

  const query = search
    ? search.value.toLowerCase().trim()
    : "";

  const filtered = pets
    .filter(p => p.name.toLowerCase().includes(query))
    .slice(0, 32);

  grid.innerHTML = filtered.map(pet => {

    const fav = favorites.includes(pet.name);

    return `
      <div class="value-card">

        <button
          class="favorite-button ${fav ? "active" : ""}"
          onclick="toggleFavorite('${pet.name.replace(/'/g,"\\'")}')"
        >
          ${fav ? "★" : "☆"}
        </button>

        <div class="value-card-icon">
          ${pet.icon}
        </div>

        <h3>${pet.name}</h3>

        <p>
          ${pet.value.toLocaleString()}
        </p>

        <small style="color:#77718f">
          ${pet.rarity}
        </small>

      </div>
    `;

  }).join("");
}


/* =========================================================
   CALCULATOR
   ========================================================= */

function renderTrade(side) {

  const container = document.getElementById(
    side === "you" ? "youItems" : "themItems"
  );

  if (!container) return;

  const items = tradeState[side];

  if (!items.length) {

    container.innerHTML = `
      <div class="empty-trade">
        Henüz pet eklenmedi
      </div>
    `;

  } else {

    container.innerHTML = items.map((item, index) => {

      return `
        <div class="trade-item">

          <div class="trade-item-icon">
            ${item.icon}
          </div>

          <div class="trade-item-info">
            <strong>
              ${item.name}
              ${item.variant !== "Normal"
                ? ` • ${item.variant}`
                : ""}
            </strong>

            <small>
              ${item.rarity || item.category || "Item"}
            </small>

            <div style="margin-top:6px">
              <button
                onclick="changeQuantity('${side}',${index},-1)"
                style="background:#211e32;color:white;border:0;border-radius:5px;padding:2px 7px"
              >−</button>

              <span style="margin:0 7px;color:#aaa">
                ${item.quantity}
              </span>

              <button
                onclick="changeQuantity('${side}',${index},1)"
                style="background:#211e32;color:white;border:0;border-radius:5px;padding:2px 7px"
              >+</button>
            </div>

          </div>

          <div class="trade-item-value">
            ${(item.value * item.quantity).toLocaleString()}
          </div>

          <button
            class="remove-item"
            onclick="removeItem('${side}',${index})"
          >
            ×
          </button>

        </div>
      `;

    }).join("");
  }

  updateTotals();
}


function updateTotals() {

  const youTotal = document.getElementById("youTotal");
  const themTotal = document.getElementById("themTotal");

  const you = getTotal("you");
  const them = getTotal("them");

  if (youTotal) {
    youTotal.textContent = you.toLocaleString();
  }

  if (themTotal) {
    themTotal.textContent = them.toLocaleString();
  }

  updateResult(you, them);
}


/* =========================================================
   ADD / REMOVE
   ========================================================= */

function addItem(side, item = null) {

  if (!item) {

    currentSide = side;
    openPetModal();
    return;
  }

  const existing = tradeState[side].find(x =>
    x.name === item.name &&
    x.variant === item.variant
  );

  if (existing) {
    existing.quantity++;
  } else {
    tradeState[side].push({
      ...item,
      quantity: 1
    });
  }

  renderTrade(side);
}


function removeItem(side, index) {

  tradeState[side].splice(index, 1);

  renderTrade(side);
}


function changeQuantity(side, index, amount) {

  const item = tradeState[side][index];

  item.quantity += amount;

  if (item.quantity <= 0) {
    tradeState[side].splice(index, 1);
  }

  renderTrade(side);
}


/* =========================================================
   W/F/L
   ========================================================= */

function updateResult(you, them) {

  const card = document.getElementById("resultCard");

  if (!card) return;

  if (you === 0 && them === 0) {

    card.className = "result-card neutral";

    card.innerHTML = `
      <div>
        <small>TRADE SONUCU</small>
        <h3>Pet ekleyerek başla</h3>
      </div>

      <div class="result-number">—</div>
    `;

    return;
  }

  if (you === 0 || them === 0) {

    card.className = "result-card neutral";

    card.innerHTML = `
      <div>
        <small>TRADE SONUCU</small>
        <h3>İki tarafa da item ekle</h3>
      </div>

      <div class="result-number">—</div>
    `;

    return;
  }

  const difference = them - you;
  const percentage = (difference / you) * 100;

  let result;
  let className;

  if (percentage > 10) {
    result = "WIN";
    className = "win";
  } else if (percentage < -10) {
    result = "LOSE";
    className = "lose";
  } else {
    result = "FAIR";
    className = "fair";
  }

  const sign = difference > 0 ? "+" : "";

  card.className = `result-card ${className}`;

  card.innerHTML = `
    <div>

      <small>TRADE SONUCU</small>

      <h3>${result}</h3>

      <div class="result-detail">
        Sen: ${you.toLocaleString()}
        &nbsp; • &nbsp;
        Karşı taraf: ${them.toLocaleString()}
      </div>

      <div class="result-detail">
        Fark: ${sign}${difference.toLocaleString()}
        (${sign}${percentage.toFixed(1)}%)
      </div>

    </div>

    <div class="result-number">
      ${result}
    </div>
  `;
}


/* =========================================================
   PET MODAL
   ========================================================= */

function openPetModal() {

  closePetModal();

  const modal = document.createElement("div");

  modal.className = "pet-modal";

  modal.innerHTML = `

    <div class="pet-modal-box">

      <div class="modal-header">

        <h2>Pet / Item Seç</h2>

        <button
          class="modal-close"
          onclick="closePetModal()"
        >
          ×
        </button>

      </div>

      <input
        id="petSearch"
        class="pet-search"
        placeholder="🔎 Pet veya item ara..."
        oninput="currentSearch=this.value;renderPetList()"
      >

      <div class="pet-filters">

        <button
          class="pet-filter active"
          data-category="Pets"
          onclick="setCategory('Pets')"
        >
          🐾 Pets
        </button>

        <button
          class="pet-filter"
          data-category="Eggs"
          onclick="setCategory('Eggs')"
        >
          🥚 Eggs
        </button>

        <button
          class="pet-filter"
          data-category="Vehicles"
          onclick="setCategory('Vehicles')"
        >
          🚗 Vehicles
        </button>

        <button
          class="pet-filter"
          data-category="Pet Wear"
          onclick="setCategory('Pet Wear')"
        >
          👕 Pet Wear
        </button>

        <button
          class="pet-filter"
          data-category="Toys"
          onclick="setCategory('Toys')"
        >
          🧸 Toys
        </button>

        <button
          class="pet-filter"
          data-category="Food"
          onclick="setCategory('Food')"
        >
          🧪 Food
        </button>

        <button
          class="pet-filter"
          data-category="Gifts"
          onclick="setCategory('Gifts')"
        >
          🎁 Gifts
        </button>

        <button
          class="pet-filter"
          data-category="Favorites"
          onclick="setCategory('Favorites')"
        >
          ⭐ Favorites
        </button>

      </div>

      <div
        id="rarityFilters"
        class="rarity-filters"
      ></div>

      <div
        id="petList"
        class="pet-list"
      ></div>

    </div>
  `;

  modal.addEventListener("click", e => {

    if (e.target === modal) {
      closePetModal();
    }

  });

  document.body.appendChild(modal);

  currentCategory = "Pets";
  currentRarity = "All";
  currentSearch = "";

  renderRarityFilters();
  renderPetList();
}


function closePetModal() {

  const modal = document.querySelector(".pet-modal");

  if (modal) {
    modal.remove();
  }

  selectedPet = null;
}


/* =========================================================
   CATEGORY
   ========================================================= */

function setCategory(category) {

  currentCategory = category;
  currentRarity = "All";

  document.querySelectorAll(".pet-filter")
    .forEach(btn => {

      btn.classList.toggle(
        "active",
        btn.dataset.category === category
      );

    });

  renderRarityFilters();
  renderPetList();
}


/* =========================================================
   RARITY FILTER
   ========================================================= */

function renderRarityFilters() {

  const box = document.getElementById("rarityFilters");

  if (!box) return;

  if (currentCategory !== "Pets") {

    box.innerHTML = "";
    return;
  }

  const rarities = [
    "All",
    "Legendary",
    "Ultra Rare",
    "Rare",
    "Uncommon",
    "Common"
  ];

  box.innerHTML = rarities.map(r => `

    <button
      class="pet-filter ${currentRarity === r ? "active" : ""}"
      onclick="setRarity('${r}')"
    >
      ${r}
    </button>

  `).join("");
}


function setRarity(rarity) {

  currentRarity = rarity;

  renderRarityFilters();
  renderPetList();
}


/* =========================================================
   PET LIST
   ========================================================= */

function renderPetList() {

  const list = document.getElementById("petList");

  if (!list) return;

  const query = currentSearch.toLowerCase().trim();

  let data = [];

  if (currentCategory === "Pets") {

    data = pets.filter(p => {

      const matchesSearch =
        p.name.toLowerCase().includes(query);

      const matchesRarity =
        currentRarity === "All" ||
        p.rarity === currentRarity;

      return matchesSearch && matchesRarity;
    });

  } else if (currentCategory === "Favorites") {

    data = [
      ...pets.map(p => ({
        ...p,
        category: "Pets"
      })),
      ...extraItems
    ].filter(item =>
      favorites.includes(item.name) &&
      item.name.toLowerCase().includes(query)
    );

  } else {

    data = extraItems.filter(item =>
      item.category === currentCategory &&
      item.name.toLowerCase().includes(query)
    );

  }

  if (!data.length) {

    list.innerHTML = `
      <div class="no-results">
        😕 Sonuç bulunamadı.
      </div>
    `;

    return;
  }

  list.innerHTML = data.map(item => {

    const favorite = favorites.includes(item.name);

    return `

      <button
        class="pet-option"
        onclick="selectItem('${item.name.replace(/'/g,"\\'")}')"
      >

        <div class="pet-option-icon">
          ${item.icon}
        </div>

        <div class="pet-option-info">

          <strong>
            ${item.name}
          </strong>

          <small>
            ${item.rarity || item.category}
          </small>

        </div>

        <div class="pet-option-value">
          ${item.value.toLocaleString()}
        </div>

        ${
          currentCategory === "Pets"
          ? `
            <span
              onclick="event.stopPropagation();toggleFavorite('${item.name.replace(/'/g,"\\'")}')"
              style="
                font-size:18px;
                color:${favorite ? "#ffd166" : "#5e5876"};
              "
            >
              ${favorite ? "★" : "☆"}
            </span>
          `
          : ""
        }

      </button>

    `;

  }).join("");
}


/* =========================================================
   ITEM SELECTION
   ========================================================= */

function selectItem(name) {

  const item =
    pets.find(p => p.name === name) ||
    extraItems.find(p => p.name === name);

  if (!item) return;

  if (pets.includes(item)) {

    selectedPet = item;

    showVariantSelector(item);

  } else {

    addItem(currentSide, {
      ...item,
      variant: "Normal"
    });

    closePetModal();
  }
}


/* =========================================================
   NORMAL / NEON / MEGA
   ========================================================= */

function showVariantSelector(pet) {

  const box = document.querySelector(".pet-modal-box");

  if (!box) return;

  const normal = pet.value;
  const neon = pet.value * 4;
  const mega = pet.value * 16;

  box.innerHTML = `

    <div class="modal-header">

      <h2>${pet.icon} ${pet.name}</h2>

      <button
        class="modal-close"
        onclick="closePetModal()"
      >
        ×
      </button>

    </div>

    <div class="variant-title">
      Hangi versiyonu eklemek istiyorsun?
    </div>

    <div class="variant-grid">

      <button
        class="variant-card"
        onclick="chooseVariant('Normal')"
      >

        <div style="font-size:38px">
          ${pet.icon}
        </div>

        <strong>Normal</strong>

        <small>
          ${normal.toLocaleString()} Value
        </small>

      </button>


      <button
        class="variant-card neon"
        onclick="chooseVariant('Neon')"
      >

        <div style="font-size:38px">
          ✨${pet.icon}
        </div>

        <strong>Neon</strong>

        <small>
          ${neon.toLocaleString()} Value
        </small>

      </button>


      <button
        class="variant-card mega"
        onclick="chooseVariant('Mega')"
      >

        <div style="font-size:38px">
          🌈${pet.icon}
        </div>

        <strong>Mega Neon</strong>

        <small>
          ${mega.toLocaleString()} Value
        </small>

      </button>

    </div>

    <button
      class="variant-back"
      onclick="openPetModal()"
    >
      ← Petlere dön
    </button>

  `;
}


function chooseVariant(variant) {

  if (!selectedPet) return;

  let multiplier = 1;

  if (variant === "Neon") {
    multiplier = 4;
  }

  if (variant === "Mega") {
    multiplier = 16;
  }

  addItem(currentSide, {

    name: selectedPet.name,

    value: selectedPet.value * multiplier,

    rarity: selectedPet.rarity,

    icon: selectedPet.icon,

    variant: variant

  });

  closePetModal();
}


/* =========================================================
   CLEAR
   ========================================================= */

function clearTrade() {

  tradeState.you = [];
  tradeState.them = [];

  renderTrade("you");
  renderTrade("them");
}


/* =========================================================
   EVENTS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderValues();

  renderTrade("you");
  renderTrade("them");

  const clearBtn =
    document.getElementById("clearBtn");

  if (clearBtn) {
    clearBtn.addEventListener(
      "click",
      clearTrade
    );
  }

});
