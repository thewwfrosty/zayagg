// =====================================================
// ZAYAXRA — ADOPT ME W/F/L CALCULATOR
// =====================================================

const PET_DATA_URL =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/adoptme_values.json";

const PET_IMAGE_BASE =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main";

let allItems = [];
let selectedPet = null;
let selectedSide = null;

// D / N / M
let selectedForm = "normal";

// none / fly / ride
let selectedPotion = "none";

let currentCategory = "all";
let showPickerValues = false;

// Trade data
let tradeState = {
  you: [],
  them: []
};

// =====================================================
// DOM READY
// =====================================================

document.addEventListener("DOMContentLoaded", async () => {
  preparePetPickerUI();
  setupMenu();
  setupProfileDefaults();
  bindGlobalEvents();

  try {
    await loadPetData();
  } catch (error) {
    console.error("Pet verileri yüklenemedi:", error);

    const grid = document.getElementById("pickerPets");
    if (grid) {
      grid.innerHTML = `
        <div class="picker-error">
          <strong>Veriler yüklenemedi.</strong>
          <span>İnternet bağlantını kontrol edip sayfayı yenile.</span>
        </div>
      `;
    }
  }

  updateTradeUI();
  updateProfileUI();
});

// =====================================================
// GLOBAL EVENTS
// =====================================================

function bindGlobalEvents() {
  const search = document.getElementById("petSearch");

  if (search) {
    search.addEventListener("input", () => {
      renderPickerPets();
    });
  }

  const picker = document.getElementById("petPicker");

  if (picker) {
    picker.addEventListener("click", (event) => {
      if (event.target === picker) {
        closePetPicker();
      }
    });
  }

  const profileModal = document.getElementById("profileModal");

  if (profileModal) {
    profileModal.addEventListener("click", (event) => {
      if (event.target === profileModal) {
        closeProfile();
      }
    });
  }

  const infoModal = document.getElementById("infoModal");

  if (infoModal) {
    infoModal.addEventListener("click", (event) => {
      if (event.target === infoModal) {
        closeInfo();
      }
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePetPicker();
      closeProfile();
      closeInfo();
      closeEditProfile();
    }
  });
}

// =====================================================
// PET PICKER UI
// =====================================================

function preparePetPickerUI() {
  const settings = document.querySelector(".picker-settings");

  if (!settings) return;

  settings.innerHTML = `
    <div id="pickerBar" class="picker-bar">
      
      <div id="pickerPreview" class="picker-preview">
        <div class="picker-preview-empty">
          <span>+</span>
          <small>Pet seç</small>
        </div>
      </div>

      <div class="picker-options">

        <div class="variant-buttons" id="variantButtons">

          <button
            type="button"
            id="normalFormBtn"
            class="form-btn variant-btn active"
            data-form="normal"
            onclick="toggleForm('normal'); return false;"
          >D</button>

          <button
            type="button"
            id="btnNeon"
            class="form-btn variant-btn"
            data-form="neon"
            onclick="toggleForm('neon'); return false;"
          >N</button>

          <button
            type="button"
            id="btnMega"
            class="form-btn variant-btn"
            data-form="mega"
            onclick="toggleForm('mega'); return false;"
          >M</button>

          <button
            type="button"
            id="btnFly"
            class="potion-btn variant-btn"
            data-potion="fly"
            onclick="togglePotion('fly'); return false;"
          >F</button>

          <button
            type="button"
            id="btnRide"
            class="potion-btn variant-btn"
            data-potion="ride"
            onclick="togglePotion('ride'); return false;"
          >R</button>

        </div>

      </div>

      <div class="picker-add">

        <div class="picker-value-wrap">
          <span class="picker-value-label">VALUE</span>
          <div id="pickerValue" class="picker-value">—</div>
        </div>

        <button
          type="button"
          id="showValuesBtn"
          class="show-values-btn"
          onclick="togglePickerValues(); return false;"
        >SHOW VALUES</button>

        <button
          type="button"
          id="confirmPetBtn"
          class="add-confirm"
          onclick="confirmAddPet(); return false;"
        >Ekle</button>

      </div>
    </div>
  `;

  injectPickerRuntimeStyles();
  updateVariantButtons();
}

// =====================================================
// PICKER EXTRA CSS
// =====================================================

function injectPickerRuntimeStyles() {
  if (document.getElementById("zayaxra-picker-runtime-css")) return;

  const style = document.createElement("style");
  style.id = "zayaxra-picker-runtime-css";

  style.textContent = `
    .picker-settings {
      position: sticky;
      bottom: 0;
      z-index: 20;
    }

    .picker-bar {
      width: 100%;
      display: grid;
      grid-template-columns: minmax(180px, 220px) 1fr auto;
      align-items: center;
      gap: 18px;
    }

    .picker-preview {
      min-height: 72px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .picker-preview-empty {
      width: 100%;
      min-height: 72px;
      border: 1px dashed rgba(255,255,255,.12);
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 3px;
      color: rgba(255,255,255,.35);
    }

    .picker-preview-empty span {
      font-size: 24px;
      line-height: 1;
    }

    .picker-preview-empty small {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: .12em;
    }

    .picker-preview-card {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .picker-preview-image {
      width: 66px;
      height: 66px;
      object-fit: contain;
      border-radius: 14px;
      background: rgba(255,255,255,.035);
      padding: 6px;
    }

    .picker-preview-name {
      font-weight: 800;
      font-size: 14px;
      color: #fff;
      line-height: 1.2;
    }

    .picker-preview-sub {
      margin-top: 4px;
      font-size: 10px;
      color: rgba(255,255,255,.43);
      text-transform: uppercase;
      letter-spacing: .08em;
    }

    .picker-options {
      min-width: 0;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .variant-buttons {
      display: flex !important;
      flex-direction: row !important;
      flex-wrap: nowrap !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
      width: max-content !important;
      max-width: 100%;
    }

    .variant-btn {
      flex: 0 0 52px !important;
      width: 52px !important;
      min-width: 52px !important;
      height: 42px !important;
      padding: 0 !important;
      margin: 0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      border-radius: 12px !important;
      font-size: 14px !important;
      font-weight: 900 !important;
      letter-spacing: .04em;
      cursor: pointer !important;
      user-select: none;
      transition:
        transform .18s ease,
        background .18s ease,
        border-color .18s ease,
        box-shadow .18s ease;
    }

    .variant-btn:hover {
      transform: translateY(-2px);
    }

    .variant-btn.active {
      box-shadow:
        0 0 0 1px rgba(255,255,255,.12),
        0 8px 22px rgba(0,0,0,.25);
    }

    .picker-add {
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
    }

    .picker-value-wrap {
      min-width: 64px;
      text-align: right;
    }

    .picker-value-label {
      display: block;
      font-size: 8px;
      font-weight: 800;
      letter-spacing: .15em;
      color: rgba(255,255,255,.32);
      margin-bottom: 3px;
    }

    .picker-value {
      font-size: 17px;
      font-weight: 900;
      color: #fff;
      white-space: nowrap;
    }

    .show-values-btn {
      height: 42px;
      border-radius: 12px;
      padding: 0 13px;
      border: 1px solid rgba(255,255,255,.09);
      background: rgba(255,255,255,.04);
      color: rgba(255,255,255,.68);
      font-size: 9px;
      font-weight: 900;
      letter-spacing: .08em;
      cursor: pointer;
      transition: .18s ease;
      white-space: nowrap;
    }

    .show-values-btn:hover {
      background: rgba(255,255,255,.08);
      color: #fff;
    }

    .picker-value-hidden {
      filter: blur(6px);
      opacity: .6;
    }

    .pet-choice-card {
      position: relative;
      cursor: pointer !important;
    }

    .pet-choice-card:hover {
      transform: translateY(-4px);
    }

    .pet-choice-card.selected {
      outline: 1px solid rgba(255,255,255,.22);
      box-shadow:
        0 0 0 1px rgba(255,255,255,.06),
        0 10px 35px rgba(0,0,0,.25);
    }

    .pet-choice-value {
      transition: .18s ease;
    }

    .trade-item {
      cursor: pointer !important;
    }

    .trade-item:hover {
      transform: translateY(-3px);
    }

    .picker-error {
      min-height: 200px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 8px;
      color: rgba(255,255,255,.45);
      text-align: center;
    }

    .picker-error strong {
      color: #fff;
    }

    @media (max-width: 900px) {
      .picker-bar {
        grid-template-columns: 1fr;
        gap: 12px;
      }

      .picker-preview {
        display: none;
      }

      .picker-options,
      .variant-buttons {
        width: 100% !important;
      }

      .variant-btn {
        flex: 1 1 0 !important;
        width: auto !important;
      }

      .picker-add {
        width: 100%;
        justify-content: flex-end;
      }
    }

    @media (max-width: 520px) {
      .variant-buttons {
        gap: 6px !important;
      }

      .picker-add {
        flex-wrap: wrap;
      }

      .picker-value-wrap {
        margin-right: auto;
      }

      .show-values-btn {
        flex: 1;
      }

      .add-confirm {
        flex: 1;
      }
    }
  `;

  document.head.appendChild(style);
}

// =====================================================
// DATA LOAD
// =====================================================

async function loadPetData() {
  const response = await fetch(PET_DATA_URL, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const raw = await response.json();

  if (!Array.isArray(raw)) {
    throw new Error("Beklenmeyen JSON formatı.");
  }

  allItems = raw
    .map(normalizeItem)
    .filter(Boolean);

  renderCategories();
  renderPickerPets();
}

// =====================================================
// NORMALIZE ITEM
// =====================================================

function normalizeItem(item) {
  if (!item || !item.name) return null;

  const type = String(item.type || "pets")
    .toLowerCase()
    .trim();

  let category = getItemCategory(item);

  let image = item.image || "";

  if (image.startsWith("/")) {
    image = `${PET_IMAGE_BASE}${image}`;
  } else if (!/^https?:\/\//i.test(image)) {
    image = `${PET_IMAGE_BASE}/images/${image}`;
  }

  return {
    ...item,
    category,
    image,
    isPet: category === "pets"
  };
}

// =====================================================
// CATEGORY
// =====================================================

function getItemCategory(item) {
  const type = String(item.type || "")
    .toLowerCase()
    .trim();

  const name = String(item.name || "").toLowerCase();

  if (
    type.includes("petwear") ||
    type.includes("pet wear") ||
    type.includes("pet_wear") ||
    type.includes("wear")
  ) {
    return "petwear";
  }

  if (
    type.includes("egg") ||
    name.includes("egg")
  ) {
    return "eggs";
  }

  if (type.includes("vehicle")) {
    return "vehicles";
  }

  if (type.includes("toy")) {
    return "toys";
  }

  if (type.includes("gift")) {
    return "gifts";
  }

  if (type.includes("pet")) {
    return "pets";
  }

  return "pets";
}

function getCategoryLabel(category) {
  const labels = {
    all: "ALL",
    pets: "PETS",
    petwear: "PET WEAR",
    eggs: "EGGS",
    vehicles: "VEHICLES",
    toys: "TOYS",
    gifts: "GIFTS"
  };

  return labels[category] || category.toUpperCase();
}

// =====================================================
// SIDEBAR CATEGORIES
// =====================================================

function renderCategories() {
  const pickerWindow = document.querySelector(".pet-modal-window");

  if (!pickerWindow) return;

  let oldSidebar = pickerWindow.querySelector(".picker-sidebar");

  if (oldSidebar) {
    oldSidebar.remove();
  }

  const categories = [
    "all",
    "pets",
    "petwear",
    "eggs",
    "vehicles",
    "toys",
    "gifts"
  ];

  const sidebar = document.createElement("aside");
  sidebar.className = "picker-sidebar";

  categories.forEach((category) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "picker-category";

    if (currentCategory === category) {
      button.classList.add("active");
    }

    button.textContent = getCategoryLabel(category);

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      currentCategory = category;

      document
        .querySelectorAll(".picker-category")
        .forEach((item) => item.classList.remove("active"));

      button.classList.add("active");

      renderPickerPets();
    });

    sidebar.appendChild(button);
  });

  const search = pickerWindow.querySelector(".modal-search");
  const grid = document.getElementById("pickerPets");

  if (search) {
    search.parentNode.insertBefore(sidebar, search);
  }

  // ---------------------------------------------------
  // Sidebar layout
  // ---------------------------------------------------

  const style = document.createElement("style");

  style.textContent = `
    .pet-modal-window {
      position: relative;
    }

    .picker-sidebar {
      display: flex;
      align-items: stretch;
      gap: 7px;
      margin-bottom: 14px;
      overflow-x: auto;
      scrollbar-width: thin;
      padding-bottom: 2px;
    }

    .picker-category {
      flex: 0 0 auto;
      height: 36px;
      padding: 0 13px;
      border-radius: 11px;
      border: 1px solid rgba(255,255,255,.08);
      background: rgba(255,255,255,.025);
      color: rgba(255,255,255,.48);
      font-size: 9px;
      font-weight: 900;
      letter-spacing: .08em;
      cursor: pointer;
      transition: .18s ease;
    }

    .picker-category:hover {
      color: #fff;
      background: rgba(255,255,255,.055);
    }

    .picker-category.active {
      color: #fff;
      background: rgba(255,255,255,.09);
      border-color: rgba(255,255,255,.16);
      box-shadow:
        0 0 20px rgba(255,255,255,.035),
        inset 0 1px rgba(255,255,255,.08);
    }
  `;

  document.head.appendChild(style);
}

// =====================================================
// PICKER RENDER
// =====================================================

function renderPickerPets() {
  const grid = document.getElementById("pickerPets");

  if (!grid) return;

  const searchInput = document.getElementById("petSearch");
  const query = String(searchInput?.value || "")
    .toLowerCase()
    .trim();

  let filtered = allItems.filter((item) => {
    const categoryMatch =
      currentCategory === "all" ||
      item.category === currentCategory;

    const searchMatch =
      !query ||
      item.name.toLowerCase().includes(query);

    return categoryMatch && searchMatch;
  });

  grid.innerHTML = "";

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="picker-error">
        <strong>Bulunamadı</strong>
        <span>Aradığın eşya veya pet burada görünmüyor.</span>
      </div>
    `;

    return;
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach((item) => {
    const card = document.createElement("button");

    card.type = "button";
    card.className = "pet-choice-card";

    if (selectedPet && selectedPet.id === item.id) {
      card.classList.add("selected");
    }

    const baseValue = getItemValue(item);

    card.innerHTML = `
      <div class="pet-choice-image-wrap">
        <img
          src="${escapeAttribute(item.image)}"
          alt="${escapeAttribute(item.name)}"
          class="pet-choice-image"
          loading="lazy"
          onerror="this.style.opacity='0.25'"
        >
      </div>

      <div class="pet-choice-name">
        ${escapeHTML(item.name)}
      </div>

      <div class="pet-choice-value ${showPickerValues ? "" : "picker-value-hidden"}">
        ${formatValue(baseValue)}
      </div>
    `;

    card.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      selectPickerPet(item);

      // Sadece kartın selected görünümü güncellenir.
      // Liste yeniden render edilmez.
      document
        .querySelectorAll(".pet-choice-card")
        .forEach((cardEl) => cardEl.classList.remove("selected"));

      card.classList.add("selected");
    });

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

// =====================================================
// OPEN PICKER
// =====================================================

function openPetPicker(side) {
  selectedSide = side;

  selectedPet = null;

  const modal = document.getElementById("petPicker");
  const title = document.getElementById("petPickerTitle");
  const search = document.getElementById("petSearch");

  if (title) {
    title.textContent =
      side === "you"
        ? "Senin teklifine ekle"
        : "Karşı tarafa ekle";
  }

  if (search) {
    search.value = "";
  }

  currentCategory = "all";
  showPickerValues = false;

  document
    .querySelectorAll(".picker-category")
    .forEach((button) => {
      button.classList.toggle(
        "active",
        button.textContent.trim() === "ALL"
      );
    });

  updatePickerBar();

  renderPickerPets();

  if (modal) {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  setTimeout(() => {
    search?.focus();
  }, 80);
}

// =====================================================
// CLOSE PICKER
// =====================================================

function closePetPicker() {
  const modal = document.getElementById("petPicker");

  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.body.classList.remove("modal-open");
}

// =====================================================
// SELECT PET
// =====================================================

function selectPickerPet(item) {
  if (!item) return;

  selectedPet = item;

  updatePickerBar();
}

// =====================================================
// FORM
// =====================================================

function toggleForm(form) {
  const allowed = ["normal", "neon", "mega"];

  if (!allowed.includes(form)) {
    return;
  }

  selectedForm = form;

  // ÖNEMLİ:
  // Burada renderPickerPets() ÇAĞRILMIYOR.
  // Böylece D/N/M'ye basınca liste yenilenmez.
  updateVariantButtons();
  updatePickerBar();
}

// =====================================================
// POTION
// =====================================================

function togglePotion(potion) {
  const allowed = ["none", "fly", "ride"];

  if (!allowed.includes(potion)) {
    return;
  }

  selectedPotion = potion;

  // Liste yenilenmiyor.
  updateVariantButtons();
  updatePickerBar();
}

// =====================================================
// VARIANT BUTTONS
// =====================================================

function updateVariantButtons() {
  const normal = document.getElementById("normalFormBtn");
  const neon = document.getElementById("btnNeon");
  const mega = document.getElementById("btnMega");

  const fly = document.getElementById("btnFly");
  const ride = document.getElementById("btnRide");

  normal?.classList.toggle("active", selectedForm === "normal");
  neon?.classList.toggle("active", selectedForm === "neon");
  mega?.classList.toggle("active", selectedForm === "mega");

  fly?.classList.toggle("active", selectedPotion === "fly");
  ride?.classList.toggle("active", selectedPotion === "ride");
}

// =====================================================
// GET CURRENT VALUE
// =====================================================

function getItemValue(item) {
  if (!item) return 0;

  // PET
  if (item.isPet) {
    const formData =
      item[selectedForm] ||
      item.regular ||
      {};

    // D + Normal Potion
    if (selectedPotion === "none") {
      return toNumber(
        formData.no_potion ??
        formData.value ??
        0
      );
    }

    // Fly
    if (selectedPotion === "fly") {
      return toNumber(
        formData.fly ??
        formData.value ??
        0
      );
    }

    // Ride
    if (selectedPotion === "ride") {
      return toNumber(
        formData.ride ??
        formData.value ??
        0
      );
    }
  }

  // PET OLMAYANLAR:
  // Eggs / Pet Wear / Vehicles / Toys / Gifts
  // D/N/M/F/R uygulanmaz.
  return getNonPetValue(item);
}

// =====================================================
// NON-PET VALUE
// =====================================================

function getNonPetValue(item) {
  if (!item) return 0;

  if (item.value !== undefined) {
    return toNumber(item.value);
  }

  if (item.regular?.value !== undefined) {
    return toNumber(item.regular.value);
  }

  if (item.regular?.no_potion !== undefined) {
    return toNumber(item.regular.no_potion);
  }

  if (typeof item.values === "object") {
    return toNumber(
      item.values.value ??
      item.values.regular ??
      0
    );
  }

  return 0;
}

// =====================================================
// PICKER BAR
// =====================================================

function updatePickerBar() {
  const preview = document.getElementById("pickerPreview");
  const value = document.getElementById("pickerValue");
  const confirm = document.getElementById("confirmPetBtn");
  const showValuesBtn = document.getElementById("showValuesBtn");

  updateVariantButtons();

  if (!selectedPet) {
    if (preview) {
      preview.innerHTML = `
        <div class="picker-preview-empty">
          <span>+</span>
          <small>Pet seç</small>
        </div>
      `;
    }

    if (value) {
      value.textContent = "—";
    }

    if (confirm) {
      confirm.disabled = true;
    }
  } else {
    const currentValue = getItemValue(selectedPet);

    if (preview) {
      preview.innerHTML = `
        <div class="picker-preview-card">

          <img
            src="${escapeAttribute(selectedPet.image)}"
            alt="${escapeAttribute(selectedPet.name)}"
            class="picker-preview-image"
            onerror="this.style.opacity='0.25'"
          >

          <div>
            <div class="picker-preview-name">
              ${escapeHTML(selectedPet.name)}
            </div>

            <div class="picker-preview-sub">
              ${getVariantLabel()}
            </div>
          </div>

        </div>
      `;
    }

    if (value) {
      value.textContent = showPickerValues
        ? formatValue(currentValue)
        : "•••";
    }

    if (confirm) {
      confirm.disabled = false;
    }
  }

  if (showValuesBtn) {
    showValuesBtn.textContent =
      showPickerValues
        ? "HIDE VALUES"
        : "SHOW VALUES";
  }
}

// =====================================================
// TOGGLE SHOW VALUES
// =====================================================

function togglePickerValues() {
  showPickerValues = !showPickerValues;

  const grid = document.getElementById("pickerPets");

  grid
    ?.querySelectorAll(".pet-choice-value")
    .forEach((element) => {
      element.classList.toggle(
        "picker-value-hidden",
        !showPickerValues
      );
    });

  updatePickerBar();
}

// =====================================================
// VARIANT LABEL
// =====================================================

function getVariantLabel() {
  let formLabel = "D";

  if (selectedForm === "neon") formLabel = "N";
  if (selectedForm === "mega") formLabel = "M";

  if (!selectedPet?.isPet) {
    return "NORMAL";
  }

  if (selectedPotion === "fly") {
    return `${formLabel} • F`;
  }

  if (selectedPotion === "ride") {
    return `${formLabel} • R`;
  }

  return formLabel;
}

// =====================================================
// CONFIRM ADD
// =====================================================

function confirmAddPet() {
  if (!selectedPet || !selectedSide) {
    return;
  }

  const itemValue = getItemValue(selectedPet);

  const tradeItem = {
    id: `${Date.now()}-${Math.random()}`,
    itemId: selectedPet.id,
    name: selectedPet.name,
    image: selectedPet.image,
    category: selectedPet.category,
    isPet: selectedPet.isPet,
    value: itemValue,
    form: selectedPet.isPet ? selectedForm : "normal",
    potion: selectedPet.isPet ? selectedPotion : "none"
  };

  tradeState[selectedSide].push(tradeItem);

  // Yeni pet eklerken seçili D/N/M/F/R aynen korunur.
  closePetPicker();
  updateTradeUI();
}

// =====================================================
// TRADE UI
// =====================================================

function updateTradeUI() {
  renderTradeSide("you");
  renderTradeSide("them");

  const youTotal = calculateTradeTotal("you");
  const themTotal = calculateTradeTotal("them");

  setText("youTotal", formatValue(youTotal));
  setText("themTotal", formatValue(themTotal));

  updateResult(youTotal, themTotal);

  updateProfileStatsFromCurrentTrade();
}

// =====================================================
// RENDER TRADE SIDE
// =====================================================

function renderTradeSide(side) {
  const container = document.getElementById(
    side === "you" ? "youItems" : "themItems"
  );

  if (!container) return;

  const items = tradeState[side];

  container.innerHTML = "";

  if (!items.length) {
    container.innerHTML = `
      <div class="empty-items trade-empty">
        <span class="empty-plus">＋</span>
        <strong>Henüz pet eklenmedi</strong>
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

  items.forEach((item) => {
    const card = document.createElement("div");

    card.className = "trade-item";

    card.innerHTML = `
      <div class="trade-item-image-wrap">
        <img
          class="trade-item-image"
          src="${escapeAttribute(item.image)}"
          alt="${escapeAttribute(item.name)}"
          onerror="this.style.opacity='0.25'"
        >
      </div>

      <div class="trade-item-name">
        ${escapeHTML(item.name)}
      </div>

      ${
        item.isPet
          ? `
            <div class="trade-item-badges">
              ${getTradeBadges(item)}
            </div>
          `
          : ""
      }

      <div class="trade-item-value">
        ${formatValue(item.value)}
      </div>

      <button
        type="button"
        class="trade-item-remove"
        aria-label="Kaldır"
      >×</button>
    `;

    // Karta tıklayınca kaldır.
    card.addEventListener("click", (event) => {
      if (event.target.closest(".trade-item-remove")) return;

      removeTradeItem(side, item.id);
    });

    const removeButton =
      card.querySelector(".trade-item-remove");

    removeButton?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      removeTradeItem(side, item.id);
    });

    container.appendChild(card);
  });
}

// =====================================================
// TRADE BADGES
// =====================================================

function getTradeBadges(item) {
  const badges = [];

  if (item.form === "neon") badges.push("N");
  else if (item.form === "mega") badges.push("M");
  else badges.push("D");

  if (item.potion === "fly") badges.push("F");
  if (item.potion === "ride") badges.push("R");

  return badges
    .map(
      (badge) =>
        `<span class="trade-badge">${badge}</span>`
    )
    .join("");
}

// =====================================================
// REMOVE TRADE ITEM
// =====================================================

function removeTradeItem(side, id) {
  tradeState[side] = tradeState[side].filter(
    (item) => item.id !== id
  );

  updateTradeUI();
}

// =====================================================
// CALCULATE TOTAL
// =====================================================

function calculateTradeTotal(side) {
  return tradeState[side].reduce(
    (total, item) => total + toNumber(item.value),
    0
  );
}

// =====================================================
// RESULT
// =====================================================

function updateResult(youTotal, themTotal) {
  const resultCard =
    document.getElementById("resultCard");

  const resultStatusText =
    document.getElementById("resultStatusText");

  const resultHint =
    document.getElementById("resultHint");

  const resultDiffDisplay =
    document.getElementById("resultDiffDisplay");

  const resultDiffNumber =
    document.getElementById("resultDiffNumber");

  const statusLabel =
    document.getElementById("tradeStatusLabel");

  const statusBar =
    document.getElementById("tradeStatusBar");

  const totalHasItems =
    tradeState.you.length > 0 ||
    tradeState.them.length > 0;

  const bothSidesHaveItems =
    tradeState.you.length > 0 &&
    tradeState.them.length > 0;

  // Hiçbir şey yok
  if (!totalHasItems) {
    setText(statusLabel, "TRADE HAZIR");
    setText(resultDiffNumber, "—");

    if (statusBar) {
      statusBar.dataset.status = "ready";
    }

    if (resultCard) {
      resultCard.dataset.status = "ready";
    }

    setText(resultStatusText, "Pet ekleyerek başla");
    setText(
      resultHint,
      "İki tarafa da pet eklediğinde avantajı burada göreceksin."
    );
    setText(resultDiffDisplay, "—");

    return;
  }

  // Sadece bir taraf varsa
  if (!bothSidesHaveItems) {
    setText(statusLabel, "TRADE BEKLENİYOR");
    setText(resultDiffNumber, "—");

    if (statusBar) {
      statusBar.dataset.status = "waiting";
    }

    if (resultCard) {
      resultCard.dataset.status = "waiting";
    }

    if (tradeState.you.length === 0) {
      setText(resultStatusText, "Senin teklifin boş");
      setText(
        resultHint,
        "Önce kendi teklifine bir pet veya eşya ekle."
      );
    } else {
      setText(resultStatusText, "Karşı taraf boş");
      setText(
        resultHint,
        "Karşı tarafa da bir pet veya eşya ekle."
      );
    }

    setText(resultDiffDisplay, "—");

    return;
  }

  const difference = themTotal - youTotal;

  const percent =
    youTotal > 0
      ? (difference / youTotal) * 100
      : 0;

  let status = "fair";
  let label = "FAIR";
  let hint = "İki tarafın değeri birbirine oldukça yakın.";

  if (percent >= 10) {
    status = "big-win";
    label = "BIG WIN";
    hint = "Bu trade senin için oldukça avantajlı.";
  } else if (percent > 3) {
    status = "small-win";
    label = "SMALL WIN";
    hint = "Trade senin lehine.";
  } else if (percent <= -10) {
    status = "big-lose";
    label = "BIG LOSE";
    hint = "Bu trade senin için ciddi şekilde dezavantajlı.";
  } else if (percent < -3) {
    status = "small-lose";
    label = "SMALL LOSE";
    hint = "Trade karşı tarafın lehine.";
  }

  const signedDifference =
    difference > 0
      ? `+${formatValue(difference)}`
      : formatValue(difference);

  setText(statusLabel, label);
  setText(resultDiffNumber, signedDifference);
  setText(resultStatusText, label);
  setText(resultHint, hint);
  setText(resultDiffDisplay, signedDifference);

  if (statusBar) {
    statusBar.dataset.status = status;
  }

  if (resultCard) {
    resultCard.dataset.status = status;
  }
}

// =====================================================
// CLEAR TRADE
// =====================================================

function clearTrade() {
  tradeState.you = [];
  tradeState.them = [];

  selectedPet = null;
  selectedSide = null;

  updateTradeUI();
}

// =====================================================
// PROFILE
// =====================================================

const DEFAULT_PROFILE = {
  name: "Zayaxra Kullanıcısı",
  username: "kullanici",
  bio: "Henüz bir biyografi eklenmedi.",
  avatar: "🐉",
  trades: 0,
  wins: 0,
  fair: 0,
  loses: 0,
  lastTradeKey: ""
};

const PROFILE_AVATARS = [
  "🐉",
  "🦊",
  "🐺",
  "🐱",
  "🦁",
  "🐼",
  "🐸",
  "🐵",
  "🦄",
  "🐲",
  "🦋",
  "🐙"
];

function getProfile() {
  try {
    const saved = localStorage.getItem(
      "zayaxra_profile"
    );

    if (!saved) {
      return { ...DEFAULT_PROFILE };
    }

    return {
      ...DEFAULT_PROFILE,
      ...JSON.parse(saved)
    };
  } catch (error) {
    console.warn("Profil okunamadı:", error);

    return { ...DEFAULT_PROFILE };
  }
}

function saveProfile(profile) {
  localStorage.setItem(
    "zayaxra_profile",
    JSON.stringify(profile)
  );
}

function setupProfileDefaults() {
  const profile = getProfile();

  saveProfile(profile);
}

function updateProfileUI() {
  const profile = getProfile();

  setText("profileAvatar", profile.avatar);
  setText("profileName", profile.name);
  setText("profileUsername", `@${profile.username}`);
  setText("profileBio", profile.bio);

  setText("profileTrades", profile.trades);
  setText("profileWins", profile.wins);
  setText("profileFair", profile.fair);
  setText("profileLoses", profile.loses);
}

// =====================================================
// PROFILE MODAL
// =====================================================

function openProfile() {
  const modal =
    document.getElementById("profileModal");

  if (!modal) return;

  closeEditProfile();

  updateProfileUI();

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeProfile() {
  const modal =
    document.getElementById("profileModal");

  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  closeEditProfile();
}

// =====================================================
// EDIT PROFILE
// =====================================================

function openEditProfile() {
  const profile = getProfile();

  const nameInput =
    document.getElementById("editName");

  const usernameInput =
    document.getElementById("editUsername");

  const bioInput =
    document.getElementById("editBio");

  if (nameInput) nameInput.value = profile.name;
  if (usernameInput) {
    usernameInput.value = profile.username;
  }
  if (bioInput) bioInput.value = profile.bio;

  renderAvatarPicker();

  document
    .getElementById("profileEditForm")
    ?.classList.remove("hidden");

  document
    .getElementById("profileEditBtn")
    ?.classList.add("hidden");
}

function closeEditProfile() {
  document
    .getElementById("profileEditForm")
    ?.classList.add("hidden");

  document
    .getElementById("profileEditBtn")
    ?.classList.remove("hidden");
}

function renderAvatarPicker() {
  const container =
    document.getElementById("avatarPick");

  if (!container) return;

  const profile = getProfile();

  container.innerHTML = "";

  PROFILE_AVATARS.forEach((avatar) => {
    const button =
      document.createElement("button");

    button.type = "button";
    button.className = "avatar-pick-item";

    if (avatar === profile.avatar) {
      button.classList.add("active");
    }

    button.textContent = avatar;

    button.addEventListener("click", () => {
      document
        .querySelectorAll(".avatar-pick-item")
        .forEach((item) =>
          item.classList.remove("active")
        );

      button.classList.add("active");

      container.dataset.selectedAvatar = avatar;
    });

    container.appendChild(button);
  });

  container.dataset.selectedAvatar = profile.avatar;
}

function saveEditedProfile(event) {
  event.preventDefault();

  const profile = getProfile();

  const name =
    document.getElementById("editName")?.value.trim();

  const username =
    document
      .getElementById("editUsername")
      ?.value.trim()
      .replace(/^@+/, "");

  const bio =
    document.getElementById("editBio")?.value.trim();

  const avatarPick =
    document.getElementById("avatarPick");

  if (!name || !username) {
    return;
  }

  profile.name = name;
  profile.username = username;
  profile.bio =
    bio || "Henüz bir biyografi eklenmedi.";

  if (avatarPick?.dataset.selectedAvatar) {
    profile.avatar =
      avatarPick.dataset.selectedAvatar;
  }

  saveProfile(profile);
  updateProfileUI();
  closeEditProfile();
}

// =====================================================
// PROFILE STATS
// =====================================================

function updateProfileStatsFromCurrentTrade() {
  const hasBoth =
    tradeState.you.length > 0 &&
    tradeState.them.length > 0;

  if (!hasBoth) return;

  const profile = getProfile();

  const key = [
    tradeState.you.map((item) => item.id).join(","),
    tradeState.them.map((item) => item.id).join(",")
  ].join("|");

  if (!key) return;

  // Aynı açık trade için tekrar tekrar sayma.
  if (profile.lastTradeKey === key) {
    return;
  }

  const youTotal = calculateTradeTotal("you");
  const themTotal = calculateTradeTotal("them");

  if (youTotal <= 0) return;

  const difference = themTotal - youTotal;
  const percent = (difference / youTotal) * 100;

  profile.trades += 1;
  profile.lastTradeKey = key;

  if (percent >= 3.0000001) {
    profile.wins += 1;
  } else if (percent <= -3) {
    profile.loses += 1;
  } else {
    profile.fair += 1;
  }

  saveProfile(profile);
  updateProfileUI();
}

// =====================================================
// INFO MODAL
// =====================================================

function openInfo(event) {
  event?.preventDefault();

  const modal =
    document.getElementById("infoModal");

  if (!modal) return;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeInfo() {
  const modal =
    document.getElementById("infoModal");

  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}

// =====================================================
// MOBILE MENU
// =====================================================

function setupMenu() {
  const menuButton =
    document.getElementById("menuButton");

  if (!menuButton) return;

  menuButton.addEventListener("click", () => {
    toggleMenu();
  });

  document
    .querySelectorAll("#mainNav a")
    .forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
}

function toggleMenu() {
  const nav =
    document.getElementById("mainNav");

  const button =
    document.getElementById("menuButton");

  if (!nav) return;

  nav.classList.toggle("menu-open");

  const isOpen =
    nav.classList.contains("menu-open");

  button?.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
}

function closeMenu() {
  const nav =
    document.getElementById("mainNav");

  const button =
    document.getElementById("menuButton");

  nav?.classList.remove("menu-open");

  button?.setAttribute(
    "aria-expanded",
    "false"
  );
}

// =====================================================
// HELPERS
// =====================================================

function toNumber(value) {
  const number = Number(value);

  return Number.isFinite(number)
    ? number
    : 0;
}

function formatValue(value) {
  const number = toNumber(value);

  if (Number.isInteger(number)) {
    return number.toString();
  }

  return number
    .toFixed(2)
    .replace(/0+$/, "")
    .replace(/\.$/, "");
}

function setText(id, value) {
  const element =
    document.getElementById(id);

  if (element) {
    element.textContent = String(value);
  }
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHTML(value);
}

// =====================================================
// GLOBAL FUNCTIONS
// =====================================================

window.openPetPicker = openPetPicker;
window.closePetPicker = closePetPicker;

window.selectPickerPet = selectPickerPet;

window.toggleForm = toggleForm;
window.togglePotion = togglePotion;

window.confirmAddPet = confirmAddPet;
window.togglePickerValues = togglePickerValues;

window.clearTrade = clearTrade;

window.openProfile = openProfile;
window.closeProfile = closeProfile;
window.openEditProfile = openEditProfile;
window.closeEditProfile = closeEditProfile;
window.saveEditedProfile = saveEditedProfile;

window.openInfo = openInfo;
window.closeInfo = closeInfo;

window.toggleMenu = toggleMenu;
