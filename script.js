/* =========================================================
   ZAYAGG — COMPLETE SCRIPT
   HTML + CSS UYUMLU SÜRÜM
   ========================================================= */

/* =========================================================
   TRADE STATE
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

/* =========================================================
   DOM HELPER
   ========================================================= */

const $ = (id) => document.getElementById(id);


/* =========================================================
   PET DATABASE
   DUPLICATE ID'LER TEMİZLENİR
   ========================================================= */

const pets = Array.isArray(window.PET_DATABASE || PET_DATABASE)
  ? (window.PET_DATABASE || PET_DATABASE).filter(
      (pet, index, arr) =>
        pet &&
        pet.id &&
        pet.name &&
        arr.findIndex((p) => p.id === pet.id) === index
    )
  : [];


/* =========================================================
   PET IMAGE FALLBACK
   ========================================================= */

function handleImageError(img) {
  if (!img || img.dataset.failed === "true") return;

  img.dataset.failed = "true";

  img.src =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
        <rect width="160" height="160" rx="20" fill="#15182a"/>
        <text
          x="80"
          y="76"
          text-anchor="middle"
          fill="#9298ad"
          font-size="13"
          font-family="Arial"
        >
          IMAGE
        </text>
        <text
          x="80"
          y="96"
          text-anchor="middle"
          fill="#62687b"
          font-size="11"
          font-family="Arial"
        >
          unavailable
        </text>
      </svg>
    `);
}


/* =========================================================
   SAFE HTML
   ========================================================= */

function escapeHTML(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   RARITY
   ========================================================= */

function rarityName(rarity) {
  const names = {
    legendary: "Legendary",
    ultra: "Ultra-Rare",
    rare: "Rare",
    uncommon: "Uncommon",
    common: "Common"
  };

  return names[String(rarity || "").toLowerCase()] || rarity || "";
}


/* =========================================================
   VALUE FORMAT
   ========================================================= */

function formatValue(value) {
  const number = Number(value || 0);

  return Number.isInteger(number)
    ? number.toString()
    : number.toFixed(1);
}


/* =========================================================
   PET IMAGE HTML
   ========================================================= */

function petImageHTML(pet, className = "pet-photo") {
  return `
    <img
      src="${escapeHTML(pet.image || "")}"
      alt="${escapeHTML(pet.name)}"
      class="${className}"
      loading="lazy"
      onerror="handleImageError(this)"
    >
  `;
}


/* =========================================================
   VALUES SECTION
   ========================================================= */

function renderValues() {
  const grid = $("valueGrid");
  const search = $("search");

  if (!grid) return;

  const query = search
    ? search.value.trim().toLowerCase()
    : "";

  const filtered = pets.filter((pet) => {
    return (
      pet.name.toLowerCase().includes(query) ||
      String(pet.rarity).toLowerCase().includes(query)
    );
  });

  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty-picker">
        <span>🔎</span>
        <strong>Pet bulunamadı</strong>
        <small>Başka bir isim dene.</small>
      </div>
    `;

    return;
  }

  filtered.forEach((pet) => {
    const card = document.createElement("div");

    card.className = "value-card";

    card.innerHTML = `
      <div class="value-image">
        ${petImageHTML(pet)}
      </div>

      <div class="value-info">

        <h3>
          ${escapeHTML(pet.name)}
        </h3>

        <span class="rarity-small ${escapeHTML(
          String(pet.rarity || "").toLowerCase()
        )}">
          ${escapeHTML(rarityName(pet.rarity))}
        </span>

        <strong>
          Value: ${formatValue(pet.value)}
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
  if (side !== "you" && side !== "them") return;

  pickerSide = side;
  selectedPet = null;

  selectedForm = "normal";

  selectedPotion = {
    fly: false,
    ride: false
  };

  const modal = $("petPickerModal");
  const title = $("petPickerTitle");
  const search = $("pickerSearch");
  const bar = $("pickerBar");

  if (!modal) return;

  if (title) {
    title.textContent =
      side === "you"
        ? "Senin teklifine pet ekle"
        : "Karşı tarafın teklifine pet ekle";
  }

  if (search) {
    search.value = "";
  }

  if (bar) {
    bar.classList.add("hidden");
  }

  resetPickerButtons();

  renderPickerPets(pets);

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("profile-open");

  setTimeout(() => {
    search?.focus();
  }, 50);
}


function closePetPicker() {
  const modal = $("petPickerModal");

  if (!modal) return;

  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("profile-open");

  pickerSide = null;
  selectedPet = null;
}


/* =========================================================
   PICKER PET LIST
   ========================================================= */

function renderPickerPets(list) {
  const container = $("pickerPetList");

  if (!container) return;

  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = `
      <div class="empty-picker">
        <span>🔎</span>
        <strong>Pet bulunamadı</strong>
        <small>Arama kelimesini değiştir.</small>
      </div>
    `;

    return;
  }

  list.forEach((pet) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "pet-choice";

    button.innerHTML = `
      <div class="choice-image">
        ${petImageHTML(pet)}
      </div>

      <strong>
        ${escapeHTML(pet.name)}
      </strong>

      <span class="rarity-tag ${escapeHTML(
        String(pet.rarity || "").toLowerCase()
      )}">
        ${escapeHTML(rarityName(pet.rarity))}
      </span>

      <small>
        ${formatValue(pet.value)}
      </small>
    `;

    if (
      selectedPet &&
      selectedPet.id === pet.id
    ) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      selectPickerPet(pet);
    });

    container.appendChild(button);
  });
}


/* =========================================================
   PICKER SEARCH
   ========================================================= */

function filterPickerPets() {
  const search = $("pickerSearch");

  if (!search) return;

  const query = search.value.trim().toLowerCase();

  const filtered = pets.filter((pet) => {
    return (
      pet.name.toLowerCase().includes(query) ||
      String(pet.rarity).toLowerCase().includes(query)
    );
  });

  renderPickerPets(filtered);
}


/* =========================================================
   SELECT PET
   ========================================================= */

function selectPickerPet(pet) {
  selectedPet = pet;

  selectedForm = "normal";

  selectedPotion = {
    fly: false,
    ride: false
  };

  const bar = $("pickerBar");

  if (!bar) return;

  bar.classList.remove("hidden");

  renderPickerPreview();
  resetPickerButtons();
  updatePickerValue();

  renderPickerPets(
    pets.filter((item) => {
      const search = $("pickerSearch");
      const query = search
        ? search.value.trim().toLowerCase()
        : "";

      return (
        item.name.toLowerCase().includes(query) ||
        String(item.rarity).toLowerCase().includes(query)
      );
    })
  );
}


/* =========================================================
   PICKER PREVIEW
   ========================================================= */

function renderPickerPreview() {
  const preview = $("pickerPreview");

  if (!preview || !selectedPet) return;

  preview.innerHTML = `
    <div class="pet-image-wrap">

      ${
        selectedForm === "neon"
          ? `<div class="neon-effect"></div>`
          : ""
      }

      ${
        selectedForm === "mega"
          ? `<div class="mega-effect"></div>`
          : ""
      }

      ${petImageHTML(selectedPet)}

      <div class="pet-badges">

        ${
          selectedForm === "neon"
            ? `<span class="mini-chip neon">N</span>`
            : ""
        }

        ${
          selectedForm === "mega"
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
        ${escapeHTML(selectedPet.name)}
      </strong>

      <span>
        ${escapeHTML(rarityName(selectedPet.rarity))}
      </span>

      <div class="vchip-row">

        ${
          selectedForm === "neon"
            ? `<span class="vchip neon">NEON</span>`
            : ""
        }

        ${
          selectedForm === "mega"
            ? `<span class="vchip mega">MEGA</span>`
            : ""
        }

        ${
          selectedPotion.fly
            ? `<span class="vchip fly">FLY</span>`
            : ""
        }

        ${
          selectedPotion.ride
            ? `<span class="vchip ride">RIDE</span>`
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
  const ids = [
    "btnNeon",
    "btnMega",
    "btnFly",
    "btnRide"
  ];

  ids.forEach((id) => {
    const element = $(id);

    if (element) {
      element.classList.remove("active");
    }
  });

  updatePickerButtons();
}


function updatePickerButtons() {
  const neon = $("btnNeon");
  const mega = $("btnMega");
  const fly = $("btnFly");
  const ride = $("btnRide");

  neon?.classList.toggle(
    "active",
    selectedForm === "neon"
  );

  mega?.classList.toggle(
    "active",
    selectedForm === "mega"
  );

  fly?.classList.toggle(
    "active",
    selectedPotion.fly
  );

  ride?.classList.toggle(
    "active",
    selectedPotion.ride
  );
}


/* =========================================================
   NEON / MEGA
   ========================================================= */

function toggleForm(form) {
  if (!selectedPet) return;

  if (form === "neon") {
    selectedForm =
      selectedForm === "neon"
        ? "normal"
        : "neon";
  }

  if (form === "mega") {
    selectedForm =
      selectedForm === "mega"
        ? "normal"
        : "mega";
  }

  renderPickerPreview();
  updatePickerButtons();
  updatePickerValue();
}


/* =========================================================
   FLY / RIDE
   ========================================================= */

function togglePotion(type) {
  if (!selectedPet) return;

  if (type === "fly") {
    selectedPotion.fly =
      !selectedPotion.fly;
  }

  if (type === "ride") {
    selectedPotion.ride =
      !selectedPotion.ride;
  }

  renderPickerPreview();
  updatePickerButtons();
  updatePickerValue();
}


/* =========================================================
   VALUE MODIFIER
   ========================================================= */

function getModifiedValue(pet) {
  let value = Number(pet?.value || 0);

  if (selectedForm === "neon") {
    value *= 4;
  }

  if (selectedForm === "mega") {
    value *= 16;
  }

  if (selectedPotion.fly) {
    value += 0.25;
  }

  if (selectedPotion.ride) {
    value += 0.25;
  }

  return value;
}


function updatePickerValue() {
  const valueElement = $("pickerValue");

  if (!valueElement) return;

  if (!selectedPet) {
    valueElement.textContent = "0";
    return;
  }

  valueElement.textContent =
    formatValue(getModifiedValue(selectedPet));
}


/* =========================================================
   CONFIRM PET
   ========================================================= */

function confirmAddPet() {
  if (!selectedPet || !pickerSide) return;

  const item = {
    id: selectedPet.id,
    name: selectedPet.name,
    rarity: selectedPet.rarity,
    image: selectedPet.image,
    baseValue: Number(selectedPet.value || 0),
    value: getModifiedValue(selectedPet),

    form: selectedForm,
    fly: selectedPotion.fly,
    ride: selectedPotion.ride,

    uniqueId:
      `${Date.now()}_${Math.random()
        .toString(36)
        .slice(2, 9)}`
  };

  if (pickerSide === "you") {
    youTrade.push(item);
  } else {
    themTrade.push(item);
  }

  closePetPicker();
  updateTradeUI();
}


/* =========================================================
   TRADE TOTAL
   ========================================================= */

function calculateTotal(trade) {
  return trade.reduce(
    (total, pet) =>
      total + Number(pet.value || 0),
    0
  );
}


/* =========================================================
   TRADE ITEM HTML
   ========================================================= */

function renderTradeItem(pet, side) {
  return `
    <div class="trade-item">

      <div class="pet-image-wrap">

        ${
          pet.form === "neon"
            ? `<div class="neon-effect"></div>`
            : ""
        }

        ${
          pet.form === "mega"
            ? `<div class="mega-effect"></div>`
            : ""
        }

        ${petImageHTML(pet)}

        <div class="pet-badges">

          ${
            pet.form === "neon"
              ? `<span class="mini-chip neon">N</span>`
              : ""
          }

          ${
            pet.form === "mega"
              ? `<span class="mini-chip mega">M</span>`
              : ""
          }

          ${
            pet.fly
              ? `<span class="mini-chip fly">F</span>`
              : ""
          }

          ${
            pet.ride
              ? `<span class="mini-chip ride">R</span>`
              : ""
          }

        </div>

      </div>

      <div class="trade-item-info">

        <strong>
          ${escapeHTML(pet.name)}
        </strong>

        <small>
          ${escapeHTML(rarityName(pet.rarity))}
        </small>

        <div class="item-chips">

          ${
            pet.form === "neon"
              ? `<span class="mini-chip neon">Neon</span>`
              : ""
          }

          ${
            pet.form === "mega"
              ? `<span class="mini-chip mega">Mega</span>`
              : ""
          }

          ${
            pet.fly
              ? `<span class="mini-chip fly">Fly</span>`
              : ""
          }

          ${
            pet.ride
              ? `<span class="mini-chip ride">Ride</span>`
              : ""
          }

        </div>

      </div>

      <strong>
        ${formatValue(pet.value)}
      </strong>

      <button
        type="button"
        class="remove-item"
        onclick="removeTradePet('${side}', '${pet.uniqueId}')"
        aria-label="Pet sil"
      >
        ×
      </button>

    </div>
  `;
}


/* =========================================================
   RENDER TRADE
   ========================================================= */

function renderTradeSide(elementId, trade, side) {
  const container = $(elementId);

  if (!container) return;

  if (!trade.length) {
    container.innerHTML = `
      <div class="empty-items">
        Henüz pet eklenmedi
      </div>
    `;

    return;
  }

  container.innerHTML = trade
    .map((pet) => renderTradeItem(pet, side))
    .join("");
}


/* =========================================================
   REMOVE TRADE PET
   ========================================================= */

function removeTradePet(side, uniqueId) {
  if (side === "you") {
    youTrade = youTrade.filter(
      (pet) => pet.uniqueId !== uniqueId
    );
  }

  if (side === "them") {
    themTrade = themTrade.filter(
      (pet) => pet.uniqueId !== uniqueId
    );
  }

  updateTradeUI();
}


/* =========================================================
   TRADE RESULT
   ========================================================= */

function updateTradeResult(youTotal, themTotal) {
  const resultCard = $("resultCard");
  const statusText = $("resultStatusText");
  const diffNumber = $("resultDiffNumber");

  const heroResult = $("heroResult");
  const heroYou = $("heroYouValue");
  const heroThem = $("heroThemValue");

  const difference =
    youTotal - themTotal;

  if (heroYou) {
    heroYou.textContent =
      formatValue(youTotal);
  }

  if (heroThem) {
    heroThem.textContent =
      formatValue(themTotal);
  }

  resultCard?.classList.remove(
    "win",
    "lose",
    "fair"
  );

  if (
    youTotal === 0 &&
    themTotal === 0
  ) {
    if (statusText) {
      statusText.textContent =
        "Pet ekleyerek başla";
    }

    if (diffNumber) {
      diffNumber.textContent = "—";
    }

    if (heroResult) {
      heroResult.textContent = "—";
      heroResult.className = "result";
    }

    return;
  }

  let status;

  if (Math.abs(difference) <= 0.05) {
    status = "fair";
  } else if (difference > 0) {
    status = "win";
  } else {
    status = "lose";
  }

  resultCard?.classList.add(status);

  if (statusText) {
    statusText.textContent =
      status === "win"
        ? "WIN"
        : status === "lose"
        ? "LOSE"
        : "FAIR";
  }

  if (diffNumber) {
    diffNumber.textContent =
      difference > 0
        ? `+${formatValue(difference)}`
        : formatValue(difference);
  }

  if (heroResult) {
    heroResult.textContent =
      status.toUpperCase();

    heroResult.className =
      `result ${status}`;
  }

  recordTradeResult(
    youTotal,
    themTotal,
    status
  );
}


/* =========================================================
   UPDATE TRADE UI
   ========================================================= */

function updateTradeUI() {
  const youTotal =
    calculateTotal(youTrade);

  const themTotal =
    calculateTotal(themTrade);

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

  const youTotalEl = $("youTotal");
  const themTotalEl = $("themTotal");

  if (youTotalEl) {
    youTotalEl.textContent =
      formatValue(youTotal);
  }

  if (themTotalEl) {
    themTotalEl.textContent =
      formatValue(themTotal);
  }

  updateTradeResult(
    youTotal,
    themTotal
  );
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


/* =========================================================
   PROFILE DATA
   ========================================================= */

const DEFAULT_PROFILE = {
  name: "Zayagg Kullanıcısı",
  username: "@kullanici",
  bio: "Henüz bir biyografi eklenmedi.",
  avatar: "🐉",

  stats: {
    trades: 0,
    wins: 0,
    fairs: 0,
    loses: 0
  }
};


let profileData = loadProfile();


function loadProfile() {
  try {
    const saved =
      localStorage.getItem(
        "zayagg_profile"
      );

    if (!saved) {
      return structuredClone(DEFAULT_PROFILE);
    }

    const parsed =
      JSON.parse(saved);

    return {
      ...structuredClone(DEFAULT_PROFILE),
      ...parsed,

      stats: {
        ...DEFAULT_PROFILE.stats,
        ...(parsed.stats || {})
      }
    };
  } catch {
    return structuredClone(DEFAULT_PROFILE);
  }
}


function saveProfileData() {
  localStorage.setItem(
    "zayagg_profile",
    JSON.stringify(profileData)
  );
}


/* =========================================================
   PROFILE OPEN
   ========================================================= */

function openProfile() {
  const modal = $("profileModal");

  if (!modal) return;

  closeEditProfile();

  renderProfile();

  modal.classList.add("show");
  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "profile-open"
  );
}


/* =========================================================
   PROFILE CLOSE
   ========================================================= */

function closeProfile() {
  const modal = $("profileModal");

  if (!modal) return;

  modal.classList.remove("show");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "profile-open"
  );

  closeEditProfile();
}


/* =========================================================
   PROFILE RENDER
   ========================================================= */

function renderProfile() {
  const name = $("profileName");
  const username = $("profileUsername");
  const bio = $("profileBio");
  const avatar = $("profileAvatar");

  const tradeCount = $("tradeCount");
  const winCount = $("winCount");
  const fairCount = $("fairCount");
  const loseCount = $("loseCount");

  const profileTitle = $("profileTitle");

  if (name) {
    name.textContent =
      profileData.name;
  }

  if (username) {
    username.textContent =
      profileData.username;
  }

  if (bio) {
    bio.textContent =
      profileData.bio ||
      "Henüz bir biyografi eklenmedi.";
  }

  if (avatar) {
    avatar.textContent =
      profileData.avatar || "🐉";
  }

  if (profileTitle) {
    profileTitle.textContent =
      "Profil";
  }

  if (tradeCount) {
    tradeCount.textContent =
      profileData.stats.trades;
  }

  if (winCount) {
    winCount.textContent =
      profileData.stats.wins;
  }

  if (fairCount) {
    fairCount.textContent =
      profileData.stats.fairs;
  }

  if (loseCount) {
    loseCount.textContent =
      profileData.stats.loses;
  }
}


/* =========================================================
   PROFILE EDIT OPEN
   ========================================================= */

function openEditProfile() {
  const form = $("profileEditForm");
  const button = $("profileEditBtn");

  if (!form) return;

  $("editName").value =
    profileData.name;

  $("editUsername").value =
    profileData.username;

  $("editBio").value =
    profileData.bio;

  renderAvatarChoices();

  form.classList.remove("hidden");

  if (button) {
    button.classList.add("hidden");
  }
}


/* =========================================================
   PROFILE EDIT CLOSE
   ========================================================= */

function closeEditProfile() {
  const form = $("profileEditForm");
  const button = $("profileEditBtn");

  form?.classList.add("hidden");
  button?.classList.remove("hidden");
}


/* =========================================================
   AVATAR CHOICES
   ========================================================= */

function renderAvatarChoices() {
  const container = $("avatarPick");

  if (!container) return;

  const avatars = [
    "🐉",
    "🐲",
    "🦊",
    "🐺",
    "🦁",
    "🐯",
    "🐻",
    "🐼",
    "🦄",
    "🐸",
    "🦋",
    "🌙"
  ];

  container.innerHTML = "";

  avatars.forEach((avatar) => {
    const button =
      document.createElement("button");

    button.type = "button";
    button.className = "avatar-opt";

    if (avatar === profileData.avatar) {
      button.classList.add("active");
    }

    button.textContent = avatar;

    button.addEventListener(
      "click",
      () => {
        profileData.avatar = avatar;

        container
          .querySelectorAll(".avatar-opt")
          .forEach((item) => {
            item.classList.remove("active");
          });

        button.classList.add("active");
      }
    );

    container.appendChild(button);
  });
}


/* =========================================================
   SAVE PROFILE
   ========================================================= */

function saveEditedProfile(event) {
  event.preventDefault();

  const name =
    $("editName")?.value.trim();

  const username =
    $("editUsername")?.value.trim();

  const bio =
    $("editBio")?.value.trim();

  if (!name || !username) {
    return;
  }

  profileData.name = name;

  profileData.username =
    username.startsWith("@")
      ? username
      : `@${username}`;

  profileData.bio =
    bio || "Henüz bir biyografi eklenmedi.";

  saveProfileData();

  renderProfile();
  closeEditProfile();
}


/* =========================================================
   RECORD TRADE RESULT
   ========================================================= */

function recordTradeResult(
  youTotal,
  themTotal,
  status
) {
  if (
    youTrade.length === 0 ||
    themTrade.length === 0
  ) {
    return;
  }

  const key = [
    youTrade.map((p) => p.uniqueId).join(","),
    themTrade.map((p) => p.uniqueId).join(","),
    status
  ].join("|");

  if (key === recordedTradeKey) {
    return;
  }

  recordedTradeKey = key;

  profileData.stats.trades += 1;

  if (status === "win") {
    profileData.stats.wins += 1;
  }

  if (status === "fair") {
    profileData.stats.fairs += 1;
  }

  if (status === "lose") {
    profileData.stats.loses += 1;
  }

  saveProfileData();
  renderProfile();
}


/* =========================================================
   MENU
   ========================================================= */

function toggleMenu() {
  document.body.classList.toggle(
    "menu-open"
  );
}


function closeMenu() {
  document.body.classList.remove(
    "menu-open"
  );
}


/* =========================================================
   OUTSIDE CLICK — MODALS
   ========================================================= */

document.addEventListener(
  "click",
  (event) => {

    const profileModal =
      $("profileModal");

    const petPickerModal =
      $("petPickerModal");

    if (
      profileModal &&
      event.target === profileModal
    ) {
      closeProfile();
    }

    if (
      petPickerModal &&
      event.target === petPickerModal
    ) {
      closePetPicker();
    }
  }
);


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") {
      return;
    }

    closeProfile();
    closePetPicker();
    closeMenu();
  }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderValues();

    updateTradeUI();

    renderProfile();
  }
);
