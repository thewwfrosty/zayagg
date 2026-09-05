// ===============================
// ZAYAGG PET DATA
// ===============================
const pets = [
  { name: "Shadow Dragon", value: 100, image: "pets/shadow-dragon.jpg", rarity: "legendary" },
  { name: "Bat Dragon", value: 95, image: "pets/bat-dragon.jpg", rarity: "legendary" },
  { name: "Giraffe", value: 90, image: "pets/giraffe.jpg", rarity: "legendary" },
  { name: "Frost Dragon", value: 85, image: "pets/frost-dragon.jpg", rarity: "legendary" },
  { name: "Owl", value: 70, image: "pets/owl.jpg", rarity: "legendary" },
  { name: "Parrot", value: 65, image: "pets/parrot.jpg", rarity: "legendary" },
  { name: "Evil Unicorn", value: 55, image: "pets/evil-unicorn.jpg", rarity: "legendary" },
  { name: "Crow", value: 22, image: "pets/crow.jpg", rarity: "legendary" },
  { name: "Arctic Reindeer", value: 14, image: "pets/arctic-reindeer.svg", rarity: "legendary" },
  { name: "Turtle", value: 8, image: "pets/turtle.svg", rarity: "legendary" },
  { name: "Kangaroo", value: 7, image: "pets/kangaroo.svg", rarity: "legendary" },
  { name: "Frost Fury", value: 6, image: "pets/frost-fury.svg", rarity: "legendary" },
  { name: "Albino Monkey", value: 5, image: "pets/albino-monkey.svg", rarity: "legendary" },
  { name: "Lion", value: 3, image: "pets/lion.svg", rarity: "ultra" },
  { name: "Unicorn", value: 2, image: "pets/unicorn.svg", rarity: "legendary" },
  { name: "Dragon", value: 1.5, image: "pets/dragon.svg", rarity: "legendary" },
  { name: "Hedgehog", value: 18, image: svgPet("#f59e0b", "#92400e", "spike"), rarity: "ultra" },
  { name: "Phoenix", value: 12, image: svgPet("#fb7185", "#f97316", "bird"), rarity: "legendary" },
  { name: "Owl Twin", value: 4, image: svgPet("#92400e", "#fef3c7", "bird"), rarity: "legendary" },
  { name: "Shark", value: 4.5, image: svgPet("#64748b", "#38bdf8", "sea"), rarity: "legendary" },
  { name: "Octopus", value: 4.2, image: svgPet("#a78bfa", "#7c3aed", "sea"), rarity: "legendary" },
  { name: "Axolotl", value: 3.8, image: svgPet("#fda4af", "#fb7185", "sea"), rarity: "ultra" },
  { name: "Flamingo", value: 3.5, image: svgPet("#fb7185", "#fecdd3", "bird"), rarity: "ultra" },
  { name: "Dalmatian", value: 9, image: svgPet("#f8fafc", "#0f172a", "mammal"), rarity: "ultra" },
  { name: "Cow", value: 6.5, image: svgPet("#f8fafc", "#1e293b", "mammal"), rarity: "rare" },
  { name: "Elephant", value: 2.8, image: svgPet("#94a3b8", "#64748b", "mammal"), rarity: "ultra" },
  { name: "Crocodile", value: 2.4, image: svgPet("#16a34a", "#14532d", "sea"), rarity: "ultra" },
  { name: "Griffin", value: 1.8, image: svgPet("#fbbf24", "#7c2d12", "bird"), rarity: "legendary" },
  { name: "King Bee", value: 2.2, image: svgPet("#facc15", "#1e293b", "spike"), rarity: "legendary" },
  { name: "Queen Bee", value: 2.6, image: svgPet("#fde047", "#7c3aed", "spike"), rarity: "legendary" },
  { name: "Cerberus", value: 2.1, image: svgPet("#7f1d1d", "#f97316", "mammal"), rarity: "legendary" },
  { name: "Skele-Rex", value: 5.5, image: svgPet("#e2e8f0", "#22d3ee", "spike"), rarity: "legendary" },
  { name: "Dodo", value: 3.2, image: svgPet("#fdba74", "#9a3412", "bird"), rarity: "legendary" },
  { name: "T-Rex", value: 3.1, image: svgPet("#4ade80", "#14532d", "spike"), rarity: "legendary" },
  { name: "Snow Owl", value: 2.9, image: svgPet("#e2e8f0", "#38bdf8", "bird"), rarity: "legendary" },
  { name: "Arctic Fox", value: 1.2, image: svgPet("#e2e8f0", "#93c5fd", "mammal"), rarity: "ultra" },
  { name: "Kitsune", value: 8, image: svgPet("#fb923c", "#fff7ed", "mammal"), rarity: "legendary" },
  { name: "Peacock", value: 2.7, image: svgPet("#22c55e", "#2563eb", "bird"), rarity: "legendary" },
  { name: "Pink Cat", value: 1.1, image: svgPet("#f9a8d4", "#db2777", "mammal"), rarity: "uncommon" },
  { name: "Blue Dog", value: 1.3, image: svgPet("#60a5fa", "#1d4ed8", "mammal"), rarity: "uncommon" },
  { name: "Cat", value: 0.2, image: svgPet("#fde68a", "#f59e0b", "mammal"), rarity: "common" },
  { name: "Dog", value: 0.2, image: svgPet("#fdba74", "#9a3412", "mammal"), rarity: "common" }
];

function svgPet(main, accent, kind) {
  const body = {
    mammal: `<ellipse cx="100" cy="128" rx="40" ry="32" fill="${main}"/><circle cx="108" cy="88" r="26" fill="${main}"/><circle cx="100" cy="86" r="5" fill="#0f172a"/><circle cx="116" cy="86" r="5" fill="#0f172a"/><ellipse cx="118" cy="96" rx="8" ry="5" fill="${accent}"/>`,
    bird: `<ellipse cx="100" cy="120" rx="28" ry="36" fill="${main}"/><circle cx="108" cy="78" r="22" fill="${main}"/><polygon points="128,78 152,84 128,92" fill="${accent}"/><circle cx="104" cy="76" r="5" fill="#0f172a"/>`,
    sea: `<ellipse cx="108" cy="110" rx="48" ry="26" fill="${main}"/><polygon points="160,110 186,92 186,128" fill="${accent}"/><circle cx="80" cy="104" r="6" fill="#0f172a"/>`,
    spike: `<ellipse cx="100" cy="124" rx="38" ry="34" fill="${main}"/><polygon points="70,96 80,60 92,96" fill="${accent}"/><polygon points="92,90 100,52 110,90" fill="${accent}"/><polygon points="108,96 120,60 130,96" fill="${accent}"/><circle cx="90" cy="120" r="5" fill="#0f172a"/><circle cx="112" cy="120" r="5" fill="#0f172a"/>`
  };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" rx="28" fill="#0b0d14"/>${body[kind] || body.mammal}</svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const rarityLabels = {
  all: "Tümü",
  legendary: "Legendary",
  ultra: "Ultra-Rare",
  rare: "Rare",
  uncommon: "Uncommon",
  common: "Common"
};

let state = { you: [], them: [] };
let currentSide = null;
let picker = {
  petIndex: null,
  form: "normal",
  fly: false,
  ride: false,
  rarity: "all"
};

// SVG İKONLAR
function iconFly(size = 18) {
  return `<svg class="am-icon icon-fly" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M12 4c2.2 3.2 3 6.2 3 9.2 0 2.6-1.2 5.3-3 7.8-1.8-2.5-3-5.2-3-7.8C9 10.2 9.8 7.2 12 4Z" fill="#38bdf8"/><path d="M7 9.5c-2.4.4-4.2 1.6-5 3.4 1.8.3 3.6-.1 5.2-1.2.4-.8.7-1.6.8-2.2Zm10 0c2.4.4 4.2 1.6 5 3.4-1.8.3-3.6-.1-5.2-1.2-.4-.8-.7-1.6-.8-2.2Z" fill="#7dd3fc"/><path d="M12 11.2c.9 0 1.5.8 1.3 1.7l-.8 4.2h-1l-.8-4.2c-.2-.9.4-1.7 1.3-1.7Z" fill="#e0f2fe"/></svg>`;
}
function iconRide(size = 18) {
  return `<svg class="am-icon icon-ride" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M8 5.5c0-1.4 1.2-2.5 2.6-2.5h2.8C14.8 3 16 4.1 16 5.5V8H8V5.5Z" fill="#f0abfc"/><path d="M7 8h10l.8 2.2c.3.9-.3 1.8-1.2 2L16 13v4.2c0 .7-.6 1.3-1.3 1.3h-1.2c-.6 0-1.1-.4-1.2-1l-.3-1.5h-.1l-.3 1.5c-.1.6-.6 1-1.2 1H9.3C8.6 18.5 8 17.9 8 17.2V13l-.6-.8c-.9-.2-1.5-1.1-1.2-2L7 8Z" fill="#e879f9"/><path d="M9.2 10.2h5.6c.4 0 .7.4.6.8l-.2.7H8.8l-.2-.7c-.1-.4.2-.8.6-.8Z" fill="#fce7f3"/></svg>`;
}
function iconNeon(size = 18) {
  return `<svg class="am-icon icon-neon" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="M12 2.4 14.2 9l7 1-5.2 4.6 1.6 6.8L12 17.8 6.4 21.4 8 14.6 2.8 10l7-1L12 2.4Z" fill="#22d3ee"/><path d="M12 6.2 13.3 10l2.9.4-2.2 1.9.7 2.8L12 13.6l-2.7 1.5.7-2.8-2.2-1.9 2.9-.4L12 6.2Z" fill="#ecfeff"/></svg>`;
}
function iconMega(size = 18) {
  const id = "megaGrad" + Math.random().toString(36).slice(2, 8);
  return `<svg class="am-icon icon-mega" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="${id}" x1="2" y1="3" x2="22" y2="21"><stop stop-color="#ff4d6d"/><stop offset=".25" stop-color="#f5c451"/><stop offset=".5" stop-color="#35d399"/><stop offset=".75" stop-color="#38bdf8"/><stop offset="1" stop-color="#a78bfa"/></linearGradient></defs><path d="M12 2 14.6 8.2 21.5 9l-5 4.4 1.5 6.8L12 16.8 6 20.2l1.5-6.8-5-4.4 6.9-.8L12 2Z" fill="url(#${id})"/></svg>`;
}
function iconNormal(size = 18) {
  return `<svg class="am-icon icon-normal" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" fill="#334155"/><circle cx="12" cy="12" r="3.2" fill="#cbd5e1"/></svg>`;
}

function buildVariant(form, fly, ride) {
  return {
    name: variantLabel(form, fly, ride),
    form,
    fly,
    ride,
    neon: form === "neon",
    mega: form === "mega",
    multiplier: getMultiplier(form, fly, ride)
  };
}
function getMultiplier(form, fly, ride) {
  let m = form === "mega" ? 16 : form === "neon" ? 4 : 1;
  if (fly) m += 0.1;
  if (ride) m += 0.1;
  return m;
}
function variantLabel(form, fly, ride) {
  const parts = [];
  if (form === "mega") parts.push("Mega");
  else if (form === "neon") parts.push("Neon");
  if (fly && ride) parts.push("Fly Ride");
  else if (fly) parts.push("Fly");
  else if (ride) parts.push("Ride");
  return parts.join(" ") || "Normal";
}
function variantChipsHTML(variant) {
  const chips = [];
  if (variant.mega) chips.push(`<span class="vchip mega">${iconMega(14)} Mega</span>`);
  else if (variant.neon) chips.push(`<span class="vchip neon">${iconNeon(14)} Neon</span>`);
  if (variant.fly) chips.push(`<span class="vchip fly">${iconFly(14)} Fly</span>`);
  if (variant.ride) chips.push(`<span class="vchip ride">${iconRide(14)} Ride</span>`);
  if (!chips.length) chips.push(`<span class="vchip normal">${iconNormal(14)} Normal</span>`);
  return `<div class="vchip-row">${chips.join("")}</div>`;
}
function petImageHTML(pet, variant) {
  let effects = "";
  if (variant && variant.neon) effects += `<div class="neon-effect"></div>`;
  if (variant && variant.mega) effects += `<div class="mega-effect"></div>`;
  let badges = "";
  if (variant && variant.fly) badges += `<span class="pet-badge fly" title="Fly">${iconFly(12)}</span>`;
  if (variant && variant.ride) badges += `<span class="pet-badge ride" title="Ride">${iconRide(12)}</span>`;
  if (variant && variant.mega) badges += `<span class="pet-badge mega" title="Mega">${iconMega(12)}</span>`;
  else if (variant && variant.neon) badges += `<span class="pet-badge neon" title="Neon">${iconNeon(12)}</span>`;
  
  // Resim bulunamazsa varsayılan SVG'ye fallback mekanizması
  const fallbackSvg = svgPet("#64748b", "#38bdf8", "mammal");
  return `
    <div class="pet-image-wrap">
      ${effects}
      <img class="pet-photo" src="${pet.image}" alt="${pet.name}" title="${pet.name}" onerror="this.src='${fallbackSvg}'">
      <div class="pet-badges">${badges}</div>
    </div>
  `;
}

// ===============================
// ADD ITEM & MODALS
// ===============================
function openPetPicker(side) { addItem(side); } // Alias
function closePetPicker() { closePetModal(); } // Alias

function addItem(side) {
  currentSide = side;
  openPetModal();
}

function openPetModal() {
  picker = { petIndex: null, form: "normal", fly: false, ride: false, rarity: "all" };
  let oldModal = document.getElementById("petModal");
  if (oldModal) oldModal.remove();

  const modal = document.createElement("div");
  modal.id = "petModal";
  modal.className = "pet-modal";
  modal.innerHTML = `
    <div class="pet-modal-window picker-window">
      <div class="picker-head">
        <div>
          <div class="eyebrow">ELVEBREDD TARZI</div>
          <h2>Pet Ekle</h2>
        </div>
        <button class="pet-modal-close" onclick="closePetModal()">×</button>
      </div>
      <input id="petSearch" class="pet-search" placeholder="Pet ara..." oninput="renderPetChoices()">
      <div class="rarity-filters" id="rarityFilters"></div>
      <div id="petChoices" class="pet-choice-grid"></div>
      <div id="pickerBar" class="picker-bar hidden"></div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closePetModal();
  });
  renderRarityFilters();
  renderPetChoices();
}

function closePetModal() {
  const modal = document.getElementById("petModal");
  if (modal) modal.remove();
  picker.petIndex = null;
}

function renderRarityFilters() {
  const wrap = document.getElementById("rarityFilters");
  if (!wrap) return;
  const keys = ["all", "legendary", "ultra", "rare", "uncommon", "common"];
  wrap.innerHTML = keys.map((key) => `
    <button class="rarity-chip ${picker.rarity === key ? "active" : ""} ${key}" onclick="setRarityFilter('${key}')">
      ${rarityLabels[key]}
    </button>
  `).join("");
}

function setRarityFilter(key) {
  picker.rarity = key;
  renderRarityFilters();
  renderPetChoices();
}

function renderPetChoices() {
  const container = document.getElementById("petChoices");
  if (!container) return;
  const searchInput = document.getElementById("petSearch");
  const search = searchInput ? searchInput.value.toLowerCase() : "";
  const filteredPets = pets.filter((pet) => {
    const matchesSearch = pet.name.toLowerCase().includes(search);
    const matchesRarity = picker.rarity === "all" || pet.rarity === picker.rarity;
    return matchesSearch && matchesRarity;
  });
  if (!filteredPets.length) {
    container.innerHTML = `<div class="empty-items">Pet bulunamadı.</div>`;
    return;
  }
  const fallbackSvg = svgPet("#64748b", "#38bdf8", "mammal");
  container.innerHTML = filteredPets.map((pet) => {
    const index = pets.indexOf(pet);
    const selected = picker.petIndex === index ? "selected" : "";
    return `
      <button class="pet-choice ${selected}" onclick="selectPet(${index})">
        <img class="pet-photo" src="${pet.image}" alt="${pet.name}" onerror="this.src='${fallbackSvg}'">
        <strong>${pet.name}</strong>
        <span>${pet.value} Value</span>
        <small class="rarity-tag ${pet.rarity}">${rarityLabels[pet.rarity] || pet.rarity}</small>
      </button>
    `;
  }).join("");
}

function selectPet(index) {
  picker.petIndex = index;
  renderPetChoices();
  renderPickerBar();
}

function setForm(form) {
  picker.form = form;
  renderPickerBar();
}

function togglePotion(type) {
  picker[type] = !picker[type];
  renderPickerBar();
}

function renderPickerBar() {
  const bar = document.getElementById("pickerBar");
  if (!bar) return;
  if (picker.petIndex === null) {
    bar.classList.add("hidden");
    bar.innerHTML = "";
    return;
  }
  const pet = pets[picker.petIndex];
  const variant = buildVariant(picker.form, picker.fly, picker.ride);
  const value = (pet.value * variant.multiplier).toFixed(1);
  bar.classList.remove("hidden");
  bar.innerHTML = `
    <div class="picker-preview">
      ${petImageHTML(pet, variant)}
      <div>
        <strong>${pet.name}</strong>
        ${variantChipsHTML(variant)}
      </div>
    </div>
    <div class="picker-controls">
      <div class="form-toggles">
        <button class="form-btn ${picker.form === "normal" ? "active" : ""}" onclick="setForm('normal')">${iconNormal(16)} Normal</button>
        <button class="form-btn neon ${picker.form === "neon" ? "active" : ""}" onclick="setForm('neon')">${iconNeon(16)} Neon</button>
        <button class="form-btn mega ${picker.form === "mega" ? "active" : ""}" onclick="setForm('mega')">${iconMega(16)} Mega</button>
      </div>
      <div class="potion-toggles">
        <button class="potion-btn fly ${picker.fly ? "active" : ""}" onclick="togglePotion('fly')">${iconFly(18)} Fly</button>
        <button class="potion-btn ride ${picker.ride ? "active" : ""}" onclick="togglePotion('ride')">${iconRide(18)} Ride</button>
      </div>
    </div>
    <div class="picker-add">
      <div class="picker-value">${value}</div>
      <button class="add-confirm" onclick="confirmAddPet()">Trade'e Ekle</button>
    </div>
  `;
}

function confirmAddPet() {
  if (picker.petIndex === null || !currentSide) return;
  const pet = pets[picker.petIndex];
  const variant = buildVariant(picker.form, picker.fly, picker.ride);
  state[currentSide].push({
    id: Date.now() + Math.random(),
    pet,
    variant,
    value: pet.value * variant.multiplier
  });
  closePetModal();
  renderTrade();
  calculateWFL();
}

// ===============================
// RENDER TRADE
// ===============================
function renderTrade() {
  renderSide("you");
  renderSide("them");
  updateTotals();
}

function renderSide(side) {
  const container = document.getElementById(side === "you" ? "youItems" : "themItems");
  if (!container) return;
  const items = state[side];
  if (items.length === 0) {
    container.innerHTML = `<div class="empty-items">Henüz pet eklenmedi.</div>`;
    return;
  }
  container.innerHTML = items.map(item => `
    <div class="trade-item">
      <div class="trade-item-image">
        ${petImageHTML(item.pet, item.variant)}
      </div>
      <div class="trade-item-info">
        <strong>${item.pet.name}</strong>
        ${variantChipsHTML(item.variant)}
        <small>Value: ${item.value.toFixed(1)}</small>
      </div>
      <button class="remove-item" onclick="removeItem('${side}', '${item.id}')">×</button>
    </div>
  `).join("");
}

function removeItem(side, id) {
  state[side] = state[side].filter(item => String(item.id) !== String(id));
  renderTrade();
  calculateWFL();
}

function updateTotals() {
  const youTotal = state.you.reduce((sum, item) => sum + item.value, 0);
  const themTotal = state.them.reduce((sum, item) => sum + item.value, 0);
  const youElement = document.getElementById("youTotal");
  const themElement = document.getElementById("themTotal");
  if (youElement) youElement.textContent = youTotal.toFixed(1);
  if (themElement) themElement.textContent = themTotal.toFixed(1);
}

// ===============================
// W/F/L CALCULATOR
// ===============================
function calculateWFL() {
  const youTotal = state.you.reduce((sum, item) => sum + item.value, 0);
  const themTotal = state.them.reduce((sum, item) => sum + item.value, 0);
  const resultCard = document.getElementById("resultCard");
  if (!resultCard) return;

  if (youTotal === 0 && themTotal === 0) {
    resultCard.className = "result-card neutral";
    resultCard.innerHTML = `
      <div><small>TRADE SONUCU</small><h3>Pet ekleyerek başla</h3></div>
      <div class="result-number">—</div>
    `;
    return;
  }

  if (youTotal === 0 || themTotal === 0) {
    resultCard.className = "result-card neutral";
    resultCard.innerHTML = `
      <div><small>TRADE SONUCU</small><h3>İki tarafa da pet ekle</h3></div>
      <div class="result-number">—</div>
    `;
    return;
  }

  const difference = themTotal - youTotal;
  const percent = (difference / youTotal) * 100;
  let result, resultClass, message;

  if (percent >= 10) {
    result = "WIN";
    resultClass = "win";
    message = "Karşı tarafın teklifi senin için daha değerli.";
  } else if (percent <= -10) {
    result = "LOSE";
    resultClass = "lose";
    message = "Senin verdiğin teklif daha değerli.";
  } else {
    result = "FAIR";
    resultClass = "fair";
    message = "İki teklif birbirine oldukça yakın.";
  }

  const ratio = themTotal / youTotal;
  const barPercent = Math.min(Math.max((themTotal / (youTotal + themTotal)) * 100, 5), 95);

  resultCard.className = `result-card advanced ${resultClass}`;
  resultCard.innerHTML = `
    <div class="wfl-top">
      <div class="wfl-total"><small>SENİN TEKLİFİN</small><strong>${youTotal.toFixed(1)}</strong></div>
      <div class="wfl-circle"><span>${result}</span></div>
      <div class="wfl-total"><small>KARŞI TARAF</small><strong>${themTotal.toFixed(1)}</strong></div>
    </div>
    <div class="wfl-subtitle">${message}</div>
    <div class="wfl-details">
      <div><span>Fark</span><strong>${difference >= 0 ? "+" : ""}${difference.toFixed(1)}</strong></div>
      <div><span>Yüzde</span><strong>${percent >= 0 ? "+" : ""}${percent.toFixed(1)}%</strong></div>
      <div><span>Oran</span><strong>${ratio.toFixed(2)}x</strong></div>
    </div>
    <div class="comparison-bar">
      <div class="comparison-fill" style="width:${barPercent}%"></div>
    </div>
    <button class="save-trade-btn" onclick="saveTradeResult('${result}')">Sonucu profile kaydet</button>
  `;
}

// ===============================
// CLEAR TRADE
// ===============================
function clearTrade() {
  state = { you: [], them: [] };
  renderTrade();
  calculateWFL();
}

// ===============================
// VALUE LIST
// ===============================
function renderValues() {
  const grid = document.getElementById("valueGrid");
  if (!grid) return;
  const searchInput = document.getElementById("search");
  const search = searchInput ? searchInput.value.toLowerCase() : "";
  const filteredPets = pets.filter(pet => pet.name.toLowerCase().includes(search));
  
  const fallbackSvg = svgPet("#64748b", "#38bdf8", "mammal");
  grid.innerHTML = filteredPets.map(pet => `
    <div class="value-card">
      <img class="pet-photo" src="${pet.image}" alt="${pet.name}" onerror="this.src='${fallbackSvg}'">
      <div>
        <h3>${pet.name}</h3>
        <span>Value</span>
        <strong>${pet.value}</strong>
      </div>
    </div>
  `).join("");
}

// ==================================================
// PROFİL SİSTEMİ
// ==================================================
const defaultProfile = {
  name: "Zayagg Kullanıcısı",
  username: "kullanici",
  avatar: "🐉",
  bio: "Henüz bir biyografi eklenmedi.",
  stats: { trades: 0, wins: 0, fairs: 0, loses: 0 }
};

function getProfile() {
  const saved = localStorage.getItem("zayaggProfile");
  if (!saved) {
    localStorage.setItem("zayaggProfile", JSON.stringify(defaultProfile));
    return { ...defaultProfile };
  }
  try {
    return JSON.parse(saved);
  } catch {
    return { ...defaultProfile };
  }
}

function saveProfile(profile) {
  localStorage.setItem("zayaggProfile", JSON.stringify(profile));
}

function openProfile() {
  const modal = document.getElementById("profileModal");
  if (!modal) return;
  loadProfileToScreen();
  modal.classList.add("show");
  document.body.classList.add("profile-open");
}

function closeProfile() {
  const modal = document.getElementById("profileModal");
  if (!modal) return;
  modal.classList.remove("show");
  document.body.classList.remove("profile-open");
  closeEditProfile();
}

function loadProfileToScreen() {
  const profile = getProfile();
  const name = document.getElementById("profileName");
  const username = document.getElementById("profileUsername");
  const avatar = document.getElementById("profileAvatar");
  const bio = document.getElementById("profileBio");

  if (name) name.textContent = profile.name;
  if (username) username.textContent = "@" + profile.username;
  if (avatar) avatar.textContent = profile.avatar;
  if (bio) bio.textContent = profile.bio;

  if (profile.stats) {
    document.getElementById("tradeCount") && (document.getElementById("tradeCount").textContent = profile.stats.trades);
    document.getElementById("winCount") && (document.getElementById("winCount").textContent = profile.stats.wins);
    document.getElementById("fairCount") && (document.getElementById("fairCount").textContent = profile.stats.fairs);
    document.getElementById("loseCount") && (document.getElementById("loseCount").textContent = profile.stats.loses);
  }
}

const AVATARS = ["🐉","🐲","🦊","🐺","🦁","🐯","🐸","🦄","🐼","🐨","🐵","👑"];
let selectedAvatar = "🐉";

function openEditProfile() {
  const profile = getProfile();
  selectedAvatar = profile.avatar || "🐉";
  const name = document.getElementById("editName");
  const username = document.getElementById("editUsername");
  const bio = document.getElementById("editBio");
  if (name) name.value = profile.name || "";
  if (username) username.value = profile.username || "";
  if (bio) bio.value = profile.bio || "";
  renderAvatarPick();
  document.getElementById("profileEditBtn")?.classList.add("hidden");
  document.getElementById("profileEditForm")?.classList.remove("hidden");
}

function closeEditProfile() {
  document.getElementById("profileEditBtn")?.classList.remove("hidden");
  document.getElementById("profileEditForm")?.classList.add("hidden");
}

function renderAvatarPick() {
  const box = document.getElementById("avatarPick");
  if (!box) return;
  box.innerHTML = AVATARS.map((icon) => `
    <button type="button" class="avatar-opt ${icon === selectedAvatar ? "active" : ""}" onclick="chooseAvatar('${icon}')">${icon}</button>
  `).join("");
}

function chooseAvatar(icon) {
  selectedAvatar = icon;
  renderAvatarPick();
}

function saveEditedProfile(event) {
  event.preventDefault();
  const profile = getProfile();
  const name = document.getElementById("editName")?.value || "";
  const username = document.getElementById("editUsername")?.value || "";
  const bio = document.getElementById("editBio")?.value || "";

  profile.name = name.trim() || "Zayagg Kullanıcısı";
  profile.username = username.trim().replace(/\s+/g, "").replace(/[^a-zA-Z0-9_]/g, "").slice(0, 20) || "kullanici";
  profile.bio = bio.trim().slice(0, 120) || "Henüz bir biyografi eklenmedi.";
  profile.avatar = selectedAvatar || "🐉";

  saveProfile(profile);
  loadProfileToScreen();
  updateNavbarProfile();
  closeEditProfile();
}

function toggleMenu() { document.body.classList.toggle("menu-open"); }
function closeMenu() { document.body.classList.remove("menu-open"); }

function updateNavbarProfile() {
  const profile = getProfile();
  const button = document.getElementById("profileBtn");
  if (!button) return;
  button.innerHTML = `👤 ${profile.avatar} ${profile.name}`;
}

function saveTradeResult(result) {
  const profile = getProfile();
  if (!profile.stats) {
    profile.stats = { trades: 0, wins: 0, fairs: 0, loses: 0 };
  }
  profile.stats.trades++;
  if (result === "WIN") profile.stats.wins++;
  if (result === "FAIR") profile.stats.fairs++;
  if (result === "LOSE") profile.stats.loses++;

  saveProfile(profile);
  loadProfileToScreen();
  updateNavbarProfile();
}

// Global Kısayollar ve Başlatma
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeProfile();
    closePetModal();
  }
});

// Sayfa yüklendiğinde çalıştır
renderValues();
renderTrade();
calculateWFL();
updateNavbarProfile();
