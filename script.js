// ===============================
// ZAYAGG PET DATA
// ===============================
const pets = [
  { name: "Shadow Dragon", value: 100, emoji: "🌑" },
  { name: "Bat Dragon", value: 95, emoji: "🦇" },
  { name: "Giraffe", value: 90, emoji: "🦒" },
  { name: "Frost Dragon", value: 85, emoji: "❄️" },
  { name: "Owl", value: 70, emoji: "🦉" },
  { name: "Parrot", value: 65, emoji: "🦜" },
  { name: "Evil Unicorn", value: 55, emoji: "🦄" },
  { name: "Crow", value: 22, emoji: "🐦‍⬛" },
  { name: "Arctic Reindeer", value: 14, emoji: "🦌" },
  { name: "Turtle", value: 8, emoji: "🐢" },
  { name: "Kangaroo", value: 7, emoji: "🦘" },
  { name: "Frost Fury", value: 6, emoji: "🐲" },
  { name: "Albino Monkey", value: 5, emoji: "🐵" },
  { name: "Lion", value: 3, emoji: "🦁" },
  { name: "Unicorn", value: 2, emoji: "✨" },
  { name: "Dragon", value: 1.5, emoji: "🐉" }
];
// ===============================
// VARIANTS
// ===============================
const variants = [
  { name: "Normal", multiplier: 1 },
  { name: "Fly", multiplier: 1.1, fly: true },
  { name: "Ride", multiplier: 1.1, ride: true },
  { name: "Fly Ride", multiplier: 1.2, fly: true, ride: true },
  { name: "Neon", multiplier: 4, neon: true },
  { name: "Neon Fly", multiplier: 4.1, neon: true, fly: true },
  { name: "Neon Ride", multiplier: 4.1, neon: true, ride: true },
  { name: "Neon Fly Ride", multiplier: 4.2, neon: true, fly: true, ride: true },
  { name: "Mega Neon", multiplier: 16, mega: true },
  { name: "Mega Fly", multiplier: 16.1, mega: true, fly: true },
  { name: "Mega Ride", multiplier: 16.1, mega: true, ride: true },
  { name: "Mega Fly Ride", multiplier: 16.2, mega: true, fly: true, ride: true }
];
// ===============================
// TRADE STATE
// ===============================
let state = {
  you: [],
  them: []
};
let currentSide = null;
let currentPet = null;
// ===============================
// PET IMAGE
// ===============================
function petImageHTML(pet, variant) {
  let badges = "";
  if (variant && variant.fly) badges += `<span class="pet-badge fly">F</span>`;
  if (variant && variant.ride) badges += `<span class="pet-badge ride">R</span>`;
  let effects = "";
  if (variant && variant.neon) effects += `<div class="neon-effect"></div>`;
  if (variant && variant.mega) effects += `<div class="mega-effect"></div>`;
  return `
    <div class="pet-image-wrap">
      ${effects}
      <div class="pet-emoji" title="${pet.name}">${pet.emoji || "🐾"}</div>
      <div class="pet-badges">${badges}</div>
    </div>
  `;
}
// ===============================
// ADD ITEM
// ===============================
function addItem(side) {
  currentSide = side;
  openPetModal();
}
// ===============================
// PET MODAL
// ===============================
function openPetModal() {
  let oldModal = document.getElementById("petModal");
  if (oldModal) {
    oldModal.remove();
  }
  const modal = document.createElement("div");
  modal.id = "petModal";
  modal.className = "pet-modal";
  modal.innerHTML = `
    <div class="pet-modal-window">
      <button class="pet-modal-close" onclick="closePetModal()">×</button>
      <h2>Pet Seç</h2>
      <input
        id="petSearch"
        class="pet-search"
        placeholder="🔎 Pet ara..."
        oninput="renderPetChoices()"
      >
      <div id="petChoices" class="pet-choice-grid"></div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closePetModal();
  });
  renderPetChoices();
}
function closePetModal() {
  const modal = document.getElementById("petModal");
  if (modal) {
    modal.remove();
  }
  currentPet = null;
}
// ===============================
// PET CHOICES
// ===============================
function renderPetChoices() {
  const container = document.getElementById("petChoices");
  if (!container) return;
  const searchInput = document.getElementById("petSearch");
  const search = searchInput
    ? searchInput.value.toLowerCase()
    : "";
  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(search)
  );
  container.innerHTML = filteredPets.map((pet, index) => {
    return `
      <button
        class="pet-choice"
        onclick="selectPet(${pets.indexOf(pet)})">
        <div class="pet-emoji">${pet.emoji || "🐾"}</div>
        <strong>${pet.name}</strong>
        <span>${pet.value} Value</span>
      </button>
    `;
  }).join("");
}
// ===============================
// SELECT PET
// ===============================
function selectPet(index) {
  currentPet = pets[index];
  openVariantSelector();
}
// ===============================
// VARIANT SELECTOR
// ===============================
function openVariantSelector() {
  let modal = document.getElementById("variantModal");
  if (modal) {
    modal.remove();
  }
  modal = document.createElement("div");
  modal.id = "variantModal";
  modal.className = "pet-modal";
  modal.innerHTML = `
    <div class="pet-modal-window variant-window">
      <button
        class="pet-modal-close"
        onclick="closeVariantModal()">
        ×
      </button>
      <div class="variant-preview">
        <div class="pet-emoji big">${currentPet.emoji || "🐾"}</div>
        <h2>${currentPet.name}</h2>
      </div>
      <h3>Variant Seç</h3>
      <div class="variant-grid">
        ${variants.map((variant, index) => `
          <button
            class="variant-card"
            onclick="addSelectedVariant(${index})">
            ${petImageHTML(currentPet, variant)}
            <strong>${variant.name}</strong>
            <span>
              ${(currentPet.value * variant.multiplier).toFixed(1)}
            </span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeVariantModal();
  });
}
function closeVariantModal() {
  const modal = document.getElementById("variantModal");
  if (modal) {
    modal.remove();
  }
  currentPet = null;
}
// ===============================
// ADD SELECTED VARIANT
// ===============================
function addSelectedVariant(index) {
  if (!currentPet || !currentSide) return;
  const variant = variants[index];
  const item = {
    id: Date.now() + Math.random(),
    pet: currentPet,
    variant: variant,
    value: currentPet.value * variant.multiplier
  };
  state[currentSide].push(item);
  closeVariantModal();
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
  const container = document.getElementById(
    side === "you" ? "youItems" : "themItems"
  );
  if (!container) return;
  const items = state[side];
  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-items">
        Henüz pet eklenmedi.
      </div>
    `;
    return;
  }
  container.innerHTML = items.map(item => {
    return `
      <div class="trade-item">
        <div class="trade-item-image">
          ${petImageHTML(item.pet, item.variant)}
        </div>
        <div class="trade-item-info">
          <strong>${item.pet.name}</strong>
          <span>${item.variant.name}</span>
          <small>
            Value: ${item.value.toFixed(1)}
          </small>
        </div>
        <button
          class="remove-item"
          onclick="removeItem('${side}', '${item.id}')">
          ×
        </button>
      </div>
    `;
  }).join("");
}
// ===============================
// REMOVE ITEM
// ===============================
function removeItem(side, id) {
  state[side] = state[side].filter(
    item => String(item.id) !== String(id)
  );
  renderTrade();
  calculateWFL();
}
// ===============================
// TOTALS
// ===============================
function updateTotals() {
  const youTotal = state.you.reduce(
    (sum, item) => sum + item.value,
    0
  );
  const themTotal = state.them.reduce(
    (sum, item) => sum + item.value,
    0
  );
  const youElement = document.getElementById("youTotal");
  const themElement = document.getElementById("themTotal");
  if (youElement) {
    youElement.textContent = youTotal.toFixed(1);
  }
  if (themElement) {
    themElement.textContent = themTotal.toFixed(1);
  }
}
// ===============================
// W/F/L CALCULATOR
// ===============================
function calculateWFL() {
  const youTotal = state.you.reduce(
    (sum, item) => sum + item.value,
    0
  );
  const themTotal = state.them.reduce(
    (sum, item) => sum + item.value,
    0
  );
  const resultCard = document.getElementById("resultCard");
  if (!resultCard) return;
  if (youTotal === 0 && themTotal === 0) {
    resultCard.className = "result-card neutral";
    resultCard.innerHTML = `
      <div>
        <small>TRADE SONUCU</small>
        <h3>Pet ekleyerek başla</h3>
      </div>
      <div class="result-number">—</div>
    `;
    return;
  }
  if (youTotal === 0 || themTotal === 0) {
    resultCard.className = "result-card neutral";
    resultCard.innerHTML = `
      <div>
        <small>TRADE SONUCU</small>
        <h3>İki tarafa da pet ekle</h3>
      </div>
      <div class="result-number">—</div>
    `;
    return;
  }
  const difference = themTotal - youTotal;
  const percent = (difference / youTotal) * 100;
  let result;
  let resultClass;
  let message;
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
  const barPercent = Math.min(
    Math.max((themTotal / (youTotal + themTotal)) * 100, 5),
    95
  );
  resultCard.className = `result-card advanced ${resultClass}`;
  resultCard.innerHTML = `
    <div class="wfl-top">
      <div class="wfl-total">
        <small>SENİN TEKLİFİN</small>
        <strong>${youTotal.toFixed(1)}</strong>
      </div>
      <div class="wfl-circle">
        <span>${result}</span>
      </div>
      <div class="wfl-total">
        <small>KARŞI TARAF</small>
        <strong>${themTotal.toFixed(1)}</strong>
      </div>
    </div>
    <div class="wfl-subtitle">
      ${message}
    </div>
    <div class="wfl-details">
      <div>
        <span>Fark</span>
        <strong>
          ${difference >= 0 ? "+" : ""}
          ${difference.toFixed(1)}
        </strong>
      </div>
      <div>
        <span>Yüzde</span>
        <strong>
          ${percent >= 0 ? "+" : ""}
          ${percent.toFixed(1)}%
        </strong>
      </div>
      <div>
        <span>Oran</span>
        <strong>${ratio.toFixed(2)}x</strong>
      </div>
    </div>
    <div class="comparison-bar">
      <div
        class="comparison-fill"
        style="width:${barPercent}%">
      </div>
    </div>
    <button class="save-trade-btn" onclick="saveTradeResult('${result}')">
      Sonucu profile kaydet
    </button>
  `;
}
// ===============================
// CLEAR TRADE
// ===============================
const clearBtn = document.getElementById("clearBtn");
if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    state = {
      you: [],
      them: []
    };
    renderTrade();
    calculateWFL();
  });
}
// ===============================
// VALUE LIST
// ===============================
function renderValues() {
  const grid = document.getElementById("valueGrid");
  if (!grid) return;
  const searchInput = document.getElementById("search");
  const search = searchInput
    ? searchInput.value.toLowerCase()
    : "";
  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(search)
  );
  grid.innerHTML = filteredPets.map(pet => {
    return `
      <div class="value-card">
        <div class="pet-emoji">${pet.emoji || "🐾"}</div>
        <div>
          <h3>${pet.name}</h3>
          <span>Value</span>
          <strong>${pet.value}</strong>
        </div>
      </div>
    `;
  }).join("");
}
// İlk değerleri göster
renderValues();
renderTrade();
calculateWFL();
// ==================================================
// PROFİL SİSTEMİ
// ==================================================
const defaultProfile = {
  name: "Zayagg Kullanıcısı",
  username: "kullanici",
  avatar: "🐉",
  bio: "Henüz bir biyografi eklenmedi.",
  stats: {
    trades: 0,
    wins: 0,
    fairs: 0,
    loses: 0
  }
};
// ===============================
// LOAD PROFILE
// ===============================
function getProfile() {
  const saved = localStorage.getItem("zayaggProfile");
  if (!saved) {
    localStorage.setItem(
      "zayaggProfile",
      JSON.stringify(defaultProfile)
    );
    return { ...defaultProfile };
  }
  try {
    return JSON.parse(saved);
  } catch {
    localStorage.setItem(
      "zayaggProfile",
      JSON.stringify(defaultProfile)
    );
    return { ...defaultProfile };
  }
}
// ===============================
// SAVE PROFILE
// ===============================
function saveProfile(profile) {
  localStorage.setItem(
    "zayaggProfile",
    JSON.stringify(profile)
  );
}
// ===============================
// OPEN PROFILE
// ===============================
function openProfile() {
  const modal = document.getElementById("profileModal");
  if (!modal) return;
  loadProfileToScreen();
  modal.classList.add("show");
  document.body.classList.add("profile-open");
}
// ===============================
// CLOSE PROFILE
// ===============================
function closeProfile() {
  const modal = document.getElementById("profileModal");
  if (!modal) return;
  modal.classList.remove("show");
  document.body.classList.remove("profile-open");
}
// ===============================
// LOAD PROFILE TO SCREEN
// ===============================
function loadProfileToScreen() {
  const profile = getProfile();
  const name = document.getElementById("profileName");
  const username = document.getElementById("profileUsername");
  const avatar = document.getElementById("profileAvatar");
  const bio = document.getElementById("profileBio");
  if (name) {
    name.textContent = profile.name;
  }
  if (username) {
    username.textContent = "@" + profile.username;
  }
  if (avatar) {
    avatar.textContent = profile.avatar;
  }
  if (bio) {
    bio.textContent = profile.bio;
  }
  if (profile.stats) {
    const tradeCount = document.getElementById("tradeCount");
    const winCount = document.getElementById("winCount");
    const fairCount = document.getElementById("fairCount");
    const loseCount = document.getElementById("loseCount");
    if (tradeCount) {
      tradeCount.textContent = profile.stats.trades;
    }
    if (winCount) {
      winCount.textContent = profile.stats.wins;
    }
    if (fairCount) {
      fairCount.textContent = profile.stats.fairs;
    }
    if (loseCount) {
      loseCount.textContent = profile.stats.loses;
    }
  }
}
// ===============================
// EDIT PROFILE
// ===============================
function editProfile() {
  const profile = getProfile();
  const name = prompt(
    "Profil adın:",
    profile.name
  );
  if (name === null) return;
  const username = prompt(
    "Kullanıcı adın:",
    profile.username
  );
  if (username === null) return;
  const bio = prompt(
    "Biyografin:",
    profile.bio
  );
  if (bio === null) return;
  const avatars = [
    "🐉",
    "🐲",
    "🦊",
    "🐺",
    "🦁",
    "🐯",
    "🐸",
    "🦄",
    "🐼",
    "🐨",
    "🐵",
    "👑"
  ];
  const avatarText = avatars.join(" ");
  const avatar = prompt(
    `Avatar seç:\n\n${avatarText}\n\nBir emoji yaz:`,
    profile.avatar
  );
  if (avatar === null) return;
  profile.name =
    name.trim() || "Zayagg Kullanıcısı";
  profile.username =
    username.trim()
      .replace(/\s+/g, "")
      .replace(/[^a-zA-Z0-9_]/g, "")
      .slice(0, 20) || "kullanici";
  profile.bio =
    bio.trim().slice(0, 120) ||
    "Henüz bir biyografi eklenmedi.";
  profile.avatar =
    avatar.trim().slice(0, 2) || "🐉";
  saveProfile(profile);
  loadProfileToScreen();
  updateNavbarProfile();
}
// ===============================
// NAVBAR PROFILE
// ===============================
function updateNavbarProfile() {
  const profile = getProfile();
  const button = document.getElementById("profileBtn");
  if (!button) return;
  button.innerHTML = `
    ${profile.avatar} ${profile.name}
  `;
}
// Sayfa açıldığında profil bilgilerini yükle
updateNavbarProfile();
// ===============================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ===============================
const profileModal = document.getElementById("profileModal");
if (profileModal) {
  profileModal.addEventListener("click", function(event) {
    if (event.target === profileModal) {
      closeProfile();
    }
  });
}
// ===============================
// ESC = CLOSE PROFILE
// ===============================
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeProfile();
    closePetModal();
    closeVariantModal();
  }
});
// ===============================
// W/F/L → PROFILE STATISTICS
// ===============================
function saveTradeResult(result) {
  const profile = getProfile();
  if (!profile.stats) {
    profile.stats = {
      trades: 0,
      wins: 0,
      fairs: 0,
      loses: 0
    };
  }
  profile.stats.trades++;
  if (result === "WIN") {
    profile.stats.wins++;
  }
  if (result === "FAIR") {
    profile.stats.fairs++;
  }
  if (result === "LOSE") {
    profile.stats.loses++;
  }
  saveProfile(profile);
  loadProfileToScreen();
  updateNavbarProfile();
}
