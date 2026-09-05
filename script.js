const pets = [
  // LEGENDARY
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
  {name:"Dragon",icon:"🐉",value:10,rarity:"Legendary",demand:"Normal",trend:"→"},

  // ULTRA RARE
  {name:"Dalmatian",icon:"🐕",value:90,rarity:"Ultra Rare",demand:"High",trend:"↑"},
  {name:"Flamingo",icon:"🦩",value:85,rarity:"Ultra Rare",demand:"High",trend:"→"},
  {name:"Lion",icon:"🦁",value:80,rarity:"Ultra Rare",demand:"High",trend:"↑"},
  {name:"Blue Dog",icon:"🐕",value:75,rarity:"Ultra Rare",demand:"High",trend:"→"},
  {name:"Pink Cat",icon:"🐱",value:70,rarity:"Ultra Rare",demand:"Good",trend:"↑"},
  {name:"Cow",icon:"🐮",value:70,rarity:"Ultra Rare",demand:"High",trend:"↑"},
  {name:"Elephant",icon:"🐘",value:65,rarity:"Ultra Rare",demand:"High",trend:"→"},
  {name:"Hyena",icon:"🐕",value:60,rarity:"Ultra Rare",demand:"Good",trend:"→"},
  {name:"Crooked Love",icon:"💗",value:50,rarity:"Ultra Rare",demand:"Good",trend:"↑"},
  {name:"Turkey",icon:"🦃",value:45,rarity:"Ultra Rare",demand:"Good",trend:"→"},
  {name:"Pig",icon:"🐷",value:40,rarity:"Ultra Rare",demand:"Good",trend:"→"},
  {name:"Shark",icon:"🦈",value:35,rarity:"Ultra Rare",demand:"Good",trend:"↑"},
  {name:"Octopus",icon:"🐙",value:30,rarity:"Ultra Rare",demand:"Good",trend:"→"},
  {name:"Kitsune",icon:"🦊",value:25,rarity:"Ultra Rare",demand:"Normal",trend:"→"},
  {name:"Cerberus",icon:"🐺",value:20,rarity:"Ultra Rare",demand:"Normal",trend:"→"},

  // RARE
  {name:"Beaver",icon:"🦫",value:18,rarity:"Rare",demand:"Good",trend:"→"},
  {name:"Rabbit",icon:"🐰",value:16,rarity:"Rare",demand:"Good",trend:"↑"},
  {name:"Snow Puma",icon:"🐆",value:15,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Bunny",icon:"🐇",value:14,rarity:"Rare",demand:"Good",trend:"→"},
  {name:"Zebra",icon:"🦓",value:13,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Monkey",icon:"🐒",value:12,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Dilophosaurus",icon:"🦖",value:11,rarity:"Rare",demand:"Normal",trend:"↑"},
  {name:"Emu",icon:"🐦",value:10,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Puma",icon:"🐆",value:9,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Woolly Mammoth",icon:"🦣",value:9,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Seahorse",icon:"🌊",value:8,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Narwhal",icon:"🐋",value:8,rarity:"Rare",demand:"Normal",trend:"↑"},
  {name:"Bees",icon:"🐝",value:7,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Red Panda",icon:"🦊",value:7,rarity:"Rare",demand:"Normal",trend:"→"},
  {name:"Snow Monkey",icon:"🐒",value:6,rarity:"Rare",demand:"Normal",trend:"→"},

  // UNCOMMON
  {name:"Fennec Fox",icon:"🦊",value:5,rarity:"Uncommon",demand:"Good",trend:"→"},
  {name:"Meerkat",icon:"🦦",value:5,rarity:"Uncommon",demand:"Good",trend:"↑"},
  {name:"Swan",icon:"🦢",value:5,rarity:"Uncommon",demand:"Good",trend:"→"},
  {name:"Capybara",icon:"🦫",value:4,rarity:"Uncommon",demand:"Good",trend:"↑"},
  {name:"Dingo",icon:"🐕",value:4,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Glyptodon",icon:"🦎",value:3,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Snow Cat",icon:"🐱",value:3,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Chocolate Labrador",icon:"🐕",value:3,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Pterodactyl",icon:"🦅",value:3,rarity:"Uncommon",demand:"Normal",trend:"→"},
  {name:"Wolf",icon:"🐺",value:3,rarity:"Uncommon",demand:"Good",trend:"↑"},

  // COMMON
  {name:"Dog",icon:"🐶",value:2,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Cat",icon:"🐱",value:2,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Buffalo",icon:"🐃",value:2,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Ant",icon:"🐜",value:2,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Mouse",icon:"🐭",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Otter",icon:"🦦",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Robin",icon:"🐦",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Chicken",icon:"🐔",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Ground Sloth",icon:"🦥",value:1,rarity:"Common",demand:"Normal",trend:"→"},
  {name:"Tasmanian Tiger",icon:"🐯",value:1,rarity:"Common",demand:"Normal",trend:"→"}
];

const state = {
  you: [],
  them: []
};

let currentSide = null;
let currentFilter = "All";

function addItem(side) {
  currentSide = side;
  openPetSelector();
}

function openPetSelector() {
  const old = document.getElementById("petModal");
  if (old) old.remove();

  const modal = document.createElement("div");
  modal.id = "petModal";
  modal.className = "pet-modal";

  modal.innerHTML = `
    <div class="pet-modal-box">

      <div class="modal-header">
        <div>
          <small>ZAYAGG VALUES</small>
          <h2>Pet / Item Ekle</h2>
        </div>
        <button onclick="closePetSelector()">✕</button>
      </div>

      <input
        id="petSearch"
        class="pet-search"
        placeholder="🔎 Pet ara..."
        oninput="searchPets()"
        autofocus
      >

      <div class="pet-filters">
        ${["All","Legendary","Ultra Rare","Rare","Uncommon","Common"].map(
          filter => `
            <button
              class="${currentFilter === filter ? "active" : ""}"
              onclick="setFilter('${filter}')"
            >
              ${filter}
            </button>
          `
        ).join("")}
      </div>

      <div id="petList" class="pet-list"></div>

    </div>
  `;

  document.body.appendChild(modal);
  renderPetSelector();
}

function closePetSelector() {
  const modal = document.getElementById("petModal");
  if (modal) modal.remove();
}

function setFilter(filter) {
  currentFilter = filter;
  renderPetSelector();
}

function renderPetSelector() {
  const container = document.getElementById("petList");
  if (!container) return;

  const search = document
    .getElementById("petSearch")
    ?.value
    .toLowerCase()
    .trim() || "";

  let results = pets.filter(pet =>
    pet.name.toLowerCase().includes(search)
  );

  if (currentFilter !== "All") {
    results = results.filter(
      pet => pet.rarity === currentFilter
    );
  }

  if (results.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        😕 Pet bulunamadı
      </div>
    `;
    return;
  }

  container.innerHTML = results.map(pet => {
    const index = pets.indexOf(pet);

    return `
      <button class="pet-option" onclick="selectPet(${index})">

        <div class="pet-option-icon">
          ${pet.icon}
        </div>

        <div class="pet-option-info">
          <strong>${pet.name}</strong>
          <span>${pet.rarity} • ${pet.demand}</span>
        </div>

        <div class="pet-option-value">
          ${pet.value}
        </div>

      </button>
    `;
  }).join("");
}

function searchPets() {
  renderPetSelector();
}

function selectPet(index) {
  const pet = pets[index];

  if (!pet || !currentSide) return;

  state[currentSide].push({...pet});

  renderTrade(currentSide);
  updateResult();

  closePetSelector();
}

function removeItem(side,index) {
  state[side].splice(index,1);
  renderTrade(side);
  updateResult();
}

function renderTrade(side) {
  const box = document.getElementById(side + "Items");
  const totalElement = document.getElementById(side + "Total");

  if (!box || !totalElement) return;

  if (state[side].length === 0) {
    box.innerHTML = `
      <div class="empty-trade">
        Henüz pet eklenmedi
      </div>
    `;
  } else {
    box.innerHTML = state[side].map((pet,index) => `
      <div class="item">

        <div class="item-left">

          <div class="item-icon">
            ${pet.icon}
          </div>

          <div>
            <strong>${pet.name}</strong>
            <small>${pet.rarity} • Value: ${pet.value}</small>
          </div>

        </div>

        <button
          class="remove-item"
          onclick="removeItem('${side}',${index})"
        >
          ✕
        </button>

      </div>
    `).join("");
  }

  const total = state[side].reduce(
    (sum,pet) => sum + pet.value,
    0
  );

  totalElement.textContent = Math.round(total);
}

function updateResult() {
  const youTotal = state.you.reduce(
    (sum,pet) => sum + pet.value,
    0
  );

  const themTotal = state.them.reduce(
    (sum,pet) => sum + pet.value,
    0
  );

  const card = document.getElementById("resultCard");
  if (!card) return;

  const title = card.querySelector("h3");
  const number = card.querySelector(".result-number");

  if (youTotal === 0 && themTotal === 0) {
    card.className = "result-card neutral";
    title.textContent = "Pet ekleyerek başla";
    number.textContent = "—";
    return;
  }

  if (youTotal === 0 || themTotal === 0) {
    card.className = "result-card neutral";
    title.textContent = "İki tarafa da pet ekle";
    number.textContent = "—";
    return;
  }

  const difference = themTotal - youTotal;
  const percentage = Math.abs(difference / youTotal) * 100;

  let result;
  let className;

  if (percentage <= 10) {
    result = "FAIR";
    className = "fair";
  } else if (difference > 0) {
    result = "WIN";
    className = "win";
  } else {
    result = "LOSE";
    className = "lose";
  }

  card.className = "result-card " + className;
  title.textContent = result;
  number.textContent =
    (difference >= 0 ? "+" : "") + Math.round(difference);
}

function renderValues() {
  const input = document.getElementById("search");
  const grid = document.getElementById("valueGrid");

  if (!input || !grid) return;

  const query = input.value.toLowerCase().trim();

  const results = pets.filter(pet =>
    pet.name.toLowerCase().includes(query)
  );

  grid.innerHTML = results.map(pet => `
    <div class="value-card">

      <div class="pet-icon">
        ${pet.icon}
      </div>

      <h3>${pet.name}</h3>

      <div class="value-meta">
        <span>${pet.rarity}</span>
        <span class="trend">${pet.trend}</span>
      </div>

      <div class="value-row">
        <span class="value">${pet.value}</span>
        <span>/ 1000 Value</span>
      </div>

    </div>
  `).join("");
}

const clearBtn = document.getElementById("clearBtn");

if (clearBtn) {
  clearBtn.onclick = function() {
    state.you = [];
    state.them = [];

    renderTrade("you");
    renderTrade("them");
    updateResult();
  };
}

renderValues();
renderTrade("you");
renderTrade("them");
updateResult();
