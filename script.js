/* =========================================================
   ZAYAGG — SCRIPT.JS
   ========================================================= */

let youTrade = [];
let themTrade = [];

const $ = (id) => document.getElementById(id);

/* =========================================================
   ELEMENTLER
   ========================================================= */

const searchInput = $("petSearch");
const petGrid = $("petGrid");

const youTradeEl = $("youTrade");
const themTradeEl = $("themTrade");

const youTotalEl = $("youTotal");
const themTotalEl = $("themTotal");

const heroYou = $("heroYouValue");
const heroThem = $("heroThemValue");
const heroResult = $("heroResult");

const resultStatusText = $("resultStatusText");
const resultDiffNumber = $("resultDiffNumber");

/* =========================================================
   PET DATABASE KONTROLÜ
   ========================================================= */

const pets = Array.isArray(PET_DATABASE)
  ? PET_DATABASE.filter(
      (pet, index, arr) =>
        pet &&
        pet.id &&
        pet.name &&
        arr.findIndex((p) => p.id === pet.id) === index
    )
  : [];

/* =========================================================
   GÖRSEL HATA YÖNETİMİ
   ========================================================= */

function handleImageError(img) {
  if (!img || img.dataset.failed) return;

  img.dataset.failed = "true";

  img.src =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
        <rect width="160" height="160" rx="20" fill="#151922"/>
        <text x="80" y="78"
          text-anchor="middle"
          fill="#8b93a7"
          font-size="14"
          font-family="Arial">
          NO IMAGE
        </text>
      </svg>
    `);
}

/* =========================================================
   PET LİSTESİNİ OLUŞTUR
   ========================================================= */

function renderPets(list = pets) {
  if (!petGrid) return;

  petGrid.innerHTML = "";

  if (!list.length) {
    petGrid.innerHTML = `
      <div class="empty-state">
        <strong>Pet bulunamadı</strong>
        <span>Arama kelimesini değiştirmeyi dene.</span>
      </div>
    `;
    return;
  }

  list.forEach((pet) => {
    const card = document.createElement("div");

    card.className = "pet-card";
    card.dataset.petId = pet.id;

    card.innerHTML = `
      <div class="pet-image-wrap">
        <img
          class="pet-image"
          src="${pet.image || ""}"
          alt="${escapeHTML(pet.name)}"
          loading="lazy"
        >
      </div>

      <div class="pet-info">
        <div class="pet-name">${escapeHTML(pet.name)}</div>
        <div class="pet-rarity">${formatRarity(pet.rarity)}</div>
        <div class="pet-value">${Number(pet.value).toFixed(1)}</div>
      </div>
    `;

    const img = card.querySelector("img");

    if (img) {
      img.addEventListener("error", () => handleImageError(img));
    }

    card.addEventListener("click", () => openTradePicker(pet));

    petGrid.appendChild(card);
  });
}

/* =========================================================
   HTML GÜVENLİ METİN
   ========================================================= */

function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   RARITY
   ========================================================= */

function formatRarity(rarity) {
  if (!rarity) return "";

  const names = {
    legendary: "Legendary",
    ultra: "Ultra-Rare",
    rare: "Rare",
    uncommon: "Uncommon",
    common: "Common"
  };

  return names[String(rarity).toLowerCase()] || rarity;
}

/* =========================================================
   ARAMA
   ========================================================= */

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    const filtered = pets.filter((pet) => {
      return (
        pet.name.toLowerCase().includes(query) ||
        pet.rarity.toLowerCase().includes(query)
      );
    });

    renderPets(filtered);
  });
}

/* =========================================================
   TRADE PET SEÇİMİ
   ========================================================= */

function openTradePicker(pet) {
  const existingModal = $("tradePickerModal");

  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement("div");

  modal.id = "tradePickerModal";
  modal.className = "trade-picker-modal";

  modal.innerHTML = `
    <div class="trade-picker-box">

      <button class="trade-picker-close" type="button">
        ×
      </button>

      <img
        src="${pet.image}"
        alt="${escapeHTML(pet.name)}"
        class="trade-picker-image"
      >

      <h3>${escapeHTML(pet.name)}</h3>

      <div class="trade-picker-value">
        Value: ${Number(pet.value).toFixed(1)}
      </div>

      <div class="trade-picker-buttons">
        <button class="add-you-btn" type="button">
          + Sen
        </button>

        <button class="add-them-btn" type="button">
          + Karşı Taraf
        </button>
      </div>

    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".trade-picker-close").onclick = () => {
    modal.remove();
  };

  modal.querySelector(".add-you-btn").onclick = () => {
    addPet("you", pet);
    modal.remove();
  };

  modal.querySelector(".add-them-btn").onclick = () => {
    addPet("them", pet);
    modal.remove();
  };

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.remove();
    }
  });
}

/* =========================================================
   PET EKLE
   ========================================================= */

function addPet(side, pet) {
  const item = {
    ...pet,
    uniqueId:
      Date.now().toString() +
      Math.random().toString(36).substring(2, 8)
  };

  if (side === "you") {
    youTrade.push(item);
  } else {
    themTrade.push(item);
  }

  updateTradeUI();
}

/* =========================================================
   PET SİL
   ========================================================= */

function removePet(side, uniqueId) {
  if (side === "you") {
    youTrade = youTrade.filter((pet) => pet.uniqueId !== uniqueId);
  } else {
    themTrade = themTrade.filter((pet) => pet.uniqueId !== uniqueId);
  }

  updateTradeUI();
}

/* =========================================================
   TRADE KUTULARINI OLUŞTUR
   ========================================================= */

function renderTradeSide(element, trade, side) {
  if (!element) return;

  element.innerHTML = "";

  if (!trade.length) {
    element.innerHTML = `
      <div class="trade-empty">
        <span>＋</span>
        <small>Pet ekle</small>
      </div>
    `;
    return;
  }

  trade.forEach((pet) => {
    const item = document.createElement("div");

    item.className = "trade-pet";

    item.innerHTML = `
      <button
        class="trade-pet-remove"
        type="button"
        aria-label="Pet sil"
      >
        ×
      </button>

      <img
        src="${pet.image || ""}"
        alt="${escapeHTML(pet.name)}"
      >

      <div class="trade-pet-name">
        ${escapeHTML(pet.name)}
      </div>

      <div class="trade-pet-value">
        ${Number(pet.value).toFixed(1)}
      </div>
    `;

    const img = item.querySelector("img");

    if (img) {
      img.addEventListener("error", () => handleImageError(img));
    }

    item.querySelector(".trade-pet-remove").onclick = (event) => {
      event.stopPropagation();
      removePet(side, pet.uniqueId);
    };

    element.appendChild(item);
  });
}

/* =========================================================
   TRADE UI GÜNCELLE
   ========================================================= */

function updateTradeUI() {
  const youTotal = calculateTotal(youTrade);
  const themTotal = calculateTotal(themTrade);

  renderTradeSide(youTradeEl, youTrade, "you");
  renderTradeSide(themTradeEl, themTrade, "them");

  if (youTotalEl) {
    youTotalEl.textContent = youTotal.toFixed(1);
  }

  if (themTotalEl) {
    themTotalEl.textContent = themTotal.toFixed(1);
  }

  if (heroYou) {
    heroYou.textContent = youTotal.toFixed(1);
  }

  if (heroThem) {
    heroThem.textContent = themTotal.toFixed(1);
  }

  updateResult(youTotal, themTotal);
}

/* =========================================================
   VALUE HESAPLA
   ========================================================= */

function calculateTotal(trade) {
  return trade.reduce((total, pet) => {
    return total + Number(pet.value || 0);
  }, 0);
}

/* =========================================================
   TRADE SONUCU
   ========================================================= */

function updateResult(youTotal, themTotal) {
  const difference = youTotal - themTotal;

  let status = "Pet ekleyerek başla";
  let hero = "—";

  if (youTotal === 0 && themTotal === 0) {
    status = "Pet ekleyerek başla";
    hero = "—";
  } else if (difference > 0.05) {
    status = "WIN";
    hero = "WIN";
  } else if (difference < -0.05) {
    status = "LOSE";
    hero = "LOSE";
  } else {
    status = "FAIR";
    hero = "FAIR";
  }

  if (resultStatusText) {
    resultStatusText.textContent = status;
  }

  if (resultDiffNumber) {
    if (youTotal === 0 && themTotal === 0) {
      resultDiffNumber.textContent = "—";
    } else {
      resultDiffNumber.textContent =
        difference > 0
          ? `+${difference.toFixed(1)}`
          : difference.toFixed(1);
    }
  }

  if (heroResult) {
    heroResult.textContent = hero;
  }
}

/* =========================================================
   TEMİZLE
   ========================================================= */

function clearTrade(side) {
  if (side === "you") {
    youTrade = [];
  } else {
    themTrade = [];
  }

  updateTradeUI();
}

/* =========================================================
   BUTONLAR
   ========================================================= */

document.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest("#clearYou")) {
    clearTrade("you");
  }

  if (target.closest("#clearThem")) {
    clearTrade("them");
  }

  if (target.closest("[data-clear='you']")) {
    clearTrade("you");
  }

  if (target.closest("[data-clear='them']")) {
    clearTrade("them");
  }
});

/* =========================================================
   BAŞLANGIÇ
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderPets();
  updateTradeUI();
});
