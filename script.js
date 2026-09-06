```javascript
// ============================================================
// ZAYAXRA — ADOPT ME TRADING
// Tam script.js
// ============================================================

const DATA_URL =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/adoptme_values.json";

const IMAGE_BASE =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main";

let items = [];

let pickerSide = null;
let selectedItem = null;

let selectedForm = "normal";
let selectedPotion = {
  fly: false,
  ride: false
};

let valueCategory = "all";
let pickerCategory = "all";
let visibleValueCount = 60;

let tradeData = {
  you: [],
  them: []
};

let profileData = {
  name: "Zayaxra User",
  username: "@user",
  avatar: "🐱",
  trades: 0,
  wins: 0,
  fair: 0,
  losses: 0
};

let recordedTradeKey = "";
let toastTimer = null;


// ============================================================
// DOM
// ============================================================

const $ = (id) => document.getElementById(id);


// ============================================================
// CATEGORY
// ============================================================

function normalizeCategory(type) {
  const value = String(type || "")
    .toLowerCase()
    .trim()
    .replace(/[\s_-]/g, "");

  if (value === "pet" || value === "pets") return "pets";

  if (
    value === "petwear" ||
    value === "petwears" ||
    value === "petaccessories" ||
    value === "accessories"
  ) {
    return "petwear";
  }

  if (value === "egg" || value === "eggs") return "eggs";

  if (value === "vehicle" || value === "vehicles") return "vehicles";

  if (value === "toy" || value === "toys") return "toys";

  if (value === "stroller" || value === "strollers") return "strollers";

  if (value === "food") return "food";

  if (value === "gift" || value === "gifts") return "gifts";

  if (value === "sticker" || value === "stickers") return "stickers";

  return "other";
}

function getCategoryLabel(category) {
  const labels = {
    pets: "Pets",
    petwear: "Pet Wear",
    eggs: "Eggs",
    vehicles: "Vehicles",
    toys: "Toys",
    strollers: "Strollers",
    food: "Food",
    gifts: "Gifts",
    stickers: "Stickers",
    other: "Other"
  };

  return labels[category] || "Other";
}


// ============================================================
// IMAGE
// ============================================================

function normalizeImage(image) {
  if (!image) return "";

  const value = String(image).trim();

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:")
  ) {
    return value;
  }

  if (value.startsWith("/")) {
    return IMAGE_BASE + value;
  }

  return IMAGE_BASE + "/" + value;
}


// ============================================================
// NORMALIZE ITEM
// ============================================================

function normalizeItem(item, index) {
  const category = normalizeCategory(item.type);

  const regular = item.regular || {};

  let baseValue = Number(
    regular.value ??
    item.value ??
    0
  );

  if (!Number.isFinite(baseValue)) {
    baseValue = 0;
  }

  return {
    id: String(item.id ?? `item-${index}`),
    name: item.name || "Unknown Item",
    category,
    categoryLabel: getCategoryLabel(category),
    rarity: String(item.rarity || "unknown").toLowerCase(),
    image: normalizeImage(item.image),
    value: baseValue,
    raw: item,
    isPet: category === "pets"
  };
}


// ============================================================
// LOAD DATA
// ============================================================

async function loadItems() {
  const status = $("calculatorStatus");

  try {
    if (status) {
      status.textContent = "● Itemler yükleniyor";
    }

    const response = await fetch(DATA_URL, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Veri alınamadı.");
    }

    const data = await response.json();

    let rawItems = [];

    if (Array.isArray(data)) {
      rawItems = data;
    } else if (Array.isArray(data.items)) {
      rawItems = data.items;
    } else if (Array.isArray(data.data)) {
      rawItems = data.data;
    } else if (typeof data === "object") {
      rawItems = Object.values(data);
    }

    items = rawItems
      .filter(Boolean)
      .map((item, index) => normalizeItem(item, index))
      .filter((item) => item.name);

    if (status) {
      status.textContent = "● Sistem hazır";
    }

    applyValueFilters();
    renderPickerItems();

    showToast(`${items.length} item yüklendi`, "✓");

  } catch (error) {
    console.error("Zayaxra veri hatası:", error);

    if (status) {
      status.textContent = "● Veri yüklenemedi";
    }

    const grid = $("valueGrid");

    if (grid) {
      grid.innerHTML = `
        <div class="loading-state">
          <strong>Itemler yüklenemedi.</strong>
          <span>İnternet bağlantını kontrol edip sayfayı yenile.</span>
        </div>
      `;
    }
  }
}


// ============================================================
// VALUE
// ============================================================

function getPetVariantValue(item) {
  if (!item || !item.isPet) {
    return Number(item?.value || 0);
  }

  const raw = item.raw || {};

  let variant = raw.regular;

  if (selectedForm === "neon") {
    variant = raw.neon || raw.regular;
  }

  if (selectedForm === "mega") {
    variant = raw.mega || raw.neon || raw.regular;
  }

  if (!variant) {
    return Number(item.value || 0);
  }

  let key = "no_potion";

  if (selectedPotion.fly && selectedPotion.ride) {
    key = "fly_ride";
  } else if (selectedPotion.fly) {
    key = "fly";
  } else if (selectedPotion.ride) {
    key = "ride";
  }

  let value = Number(
    variant[key] ??
    variant.value ??
    item.value ??
    0
  );

  if (!Number.isFinite(value)) {
    value = Number(item.value || 0);
  }

  return value;
}


// ============================================================
// FILTER
// ============================================================

function applyValueFilters() {
  const searchInput = $("search");
  const rarityFilter = $("rarityFilter");
  const sortSelect = $("sortSelect");

  const search = String(searchInput?.value || "")
    .toLowerCase()
    .trim();

  const rarity = String(
    rarityFilter?.value || "all"
  ).toLowerCase();

  const sort = sortSelect?.value || "value-desc";

  let filtered = items.filter((item) => {

    const matchesCategory =
      valueCategory === "all" ||
      item.category === valueCategory;

    const matchesRarity =
      rarity === "all" ||
      item.rarity === rarity;

    const matchesSearch =
      !search ||
      item.name.toLowerCase().includes(search) ||
      item.categoryLabel.toLowerCase().includes(search) ||
      item.rarity.toLowerCase().includes(search);

    return (
      matchesCategory &&
      matchesRarity &&
      matchesSearch
    );
  });

  filtered.sort((a, b) => {

    if (sort === "name-asc") {
      return a.name.localeCompare(b.name, "tr");
    }

    if (sort === "name-desc") {
      return b.name.localeCompare(a.name, "tr");
    }

    if (sort === "value-asc") {
      return a.value - b.value;
    }

    return b.value - a.value;
  });

  const count = $("itemCount");

  if (count) {
    count.textContent = `${filtered.length} item`;
  }

  renderValueGrid(filtered);

  const clearButton = $("clearSearch");

  if (clearButton) {
    clearButton.style.opacity = search ? "1" : "0.35";
  }
}


// ============================================================
// CATEGORY BUTTON
// ============================================================

function setValueCategory(category) {
  valueCategory = category;

  document
    .querySelectorAll(".category-btn")
    .forEach((button) => {

      button.classList.toggle(
        "active",
        button.dataset.category === category
      );

    });

  visibleValueCount = 60;

  applyValueFilters();
}


// ============================================================
// VALUE GRID
// ============================================================

function renderValueGrid(list) {
  const grid = $("valueGrid");

  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = `
      <div class="loading-state">
        <strong>Item bulunamadı.</strong>
        <span>Arama veya kategori filtrelerini değiştirmeyi dene.</span>
      </div>
    `;

    const wrapper = $("loadMoreWrapper");

    if (wrapper) {
      wrapper.style.display = "none";
    }

    return;
  }

  const visible = list.slice(
    0,
    visibleValueCount
  );

  grid.innerHTML = visible
    .map((item) => {

      const image = item.image
        ? `<img src="${escapeAttribute(item.image)}"
                alt="${escapeAttribute(item.name)}"
                loading="lazy"
                onerror="this.style.display='none';">`
        : `<span class="value-image-placeholder">🐾</span>`;

      return `
        <article class="value-card">

          <div class="value-image">
            ${image}
          </div>

          <div class="value-info">

            <span class="value-category">
              ${escapeHTML(item.categoryLabel)}
            </span>

            <h3>
              ${escapeHTML(item.name)}
            </h3>

            <span class="rarity-small ${rarityClass(item.rarity)}">
              ${escapeHTML(capitalize(item.rarity))}
            </span>

            <div class="value-number">
              ${formatValue(item.value)}
            </div>

          </div>

        </article>
      `;
    })
    .join("");

  const wrapper = $("loadMoreWrapper");

  if (wrapper) {
    wrapper.style.display =
      visibleValueCount < list.length
        ? "flex"
        : "none";
  }
}


// ============================================================
// LOAD MORE
// ============================================================

function loadMoreItems() {
  visibleValueCount += 60;
  applyValueFilters();
}


// ============================================================
// CLEAR SEARCH
// ============================================================

function clearSearchInput() {
  const search = $("search");

  if (search) {
    search.value = "";
    search.focus();
  }

  visibleValueCount = 60;
  applyValueFilters();
}


// ============================================================
// PICKER
// ============================================================

function openPetPicker(side) {
  pickerSide = side;

  selectedItem = null;
  selectedForm = "normal";

  selectedPotion = {
    fly: false,
    ride: false
  };

  pickerCategory = "all";

  const title = $("petPickerTitle");

  if (title) {
    title.textContent =
      side === "you"
        ? "Item Seç — Senin Teklifin"
        : "Item Seç — Karşı Taraf";
  }

  const search = $("pickerSearch");

  if (search) {
    search.value = "";
  }

  updatePickerCategoryButtons();
  updatePickerButtons();
  updatePickerOptionsVisibility();
  updatePickerPreview();

  const modal = $("petPickerModal");

  if (modal) {
    modal.classList.add("active");
    modal.style.display = "flex";
  }

  document.body.classList.add("modal-open");

  renderPickerItems();
}


function closePetPicker() {
  const modal = $("petPickerModal");

  if (modal) {
    modal.classList.remove("active");
    modal.style.display = "";
  }

  pickerSide = null;
  selectedItem = null;

  document.body.classList.remove("modal-open");
}


// ============================================================
// PICKER CATEGORY
// ============================================================

function setPickerCategory(category) {
  pickerCategory = category;

  updatePickerCategoryButtons();
  renderPickerItems();
}


function updatePickerCategoryButtons() {
  document
    .querySelectorAll(".picker-category-btn")
    .forEach((button) => {

      button.classList.toggle(
        "active",
        button.dataset.pickerCategory === pickerCategory
      );

    });
}


// ============================================================
// PICKER RENDER
// ============================================================

function renderPickerItems() {
  const listElement = $("pickerPetList");

  if (!listElement) return;

  const search = String(
    $("pickerSearch")?.value || ""
  )
    .toLowerCase()
    .trim();

  let filtered = items.filter((item) => {

    const categoryMatch =
      pickerCategory === "all" ||
      item.category === pickerCategory;

    const searchMatch =
      !search ||
      item.name.toLowerCase().includes(search) ||
      item.categoryLabel.toLowerCase().includes(search) ||
      item.rarity.toLowerCase().includes(search);

    return categoryMatch && searchMatch;
  });

  if (!filtered.length) {
    listElement.innerHTML = `
      <div class="loading-state">
        <strong>Item bulunamadı.</strong>
        <span>Farklı bir isim veya kategori dene.</span>
      </div>
    `;

    return;
  }

  // Çok fazla DOM oluşturmamak için picker'da ilk 250 gösterilir.
  // Arama yaptığında eşleşen sonuçlar yine çalışır.
  const displayItems = filtered.slice(0, 250);

  listElement.innerHTML =
    displayItems
      .map((item) => {

        const selected =
          selectedItem &&
          selectedItem.id === item.id;

        const image = item.image
          ? `<img src="${escapeAttribute(item.image)}"
                  alt="${escapeAttribute(item.name)}"
                  loading="lazy"
                  onerror="this.style.display='none';">`
          : `<span>🐾</span>`;

        return `
          <button
            type="button"
            class="picker-item ${selected ? "selected" : ""}"
            onclick="selectPickerItem('${escapeAttribute(item.id)}')"
          >

            <div class="picker-item-image">
              ${image}
            </div>

            <div class="picker-item-info">

              <strong>
                ${escapeHTML(item.name)}
              </strong>

              <span>
                ${escapeHTML(item.categoryLabel)}
              </span>

              <small>
                ${formatValue(item.value)}
              </small>

            </div>

          </button>
        `;
      })
      .join("");

  if (filtered.length > 250) {
    listElement.innerHTML += `
      <div class="loading-state">
        <strong>${filtered.length} sonuç bulundu</strong>
        <span>Aramayı daraltarak daha hızlı seçim yapabilirsin.</span>
      </div>
    `;
  }
}


// ============================================================
// SELECT PICKER ITEM
// ============================================================

function selectPickerItem(id) {
  const item = items.find(
    (entry) => entry.id === String(id)
  );

  if (!item) return;

  selectedItem = item;

  if (!item.isPet) {
    selectedForm = "normal";

    selectedPotion = {
      fly: false,
      ride: false
    };
  }

  updatePickerOptionsVisibility();
  updatePickerButtons();
  updatePickerPreview();
  renderPickerItems();
}


// ============================================================
// FORM
// ============================================================

function toggleForm(form) {
  if (!selectedItem || !selectedItem.isPet) {
    return;
  }

  if (
    form !== "normal" &&
    form !== "neon" &&
    form !== "mega"
  ) {
    return;
  }

  selectedForm = form;

  updatePickerButtons();
  updatePickerPreview();
}


function togglePotion(potion) {
  if (!selectedItem || !selectedItem.isPet) {
    return;
  }

  if (potion !== "fly" && potion !== "ride") {
    return;
  }

  selectedPotion[potion] =
    !selectedPotion[potion];

  updatePickerButtons();
  updatePickerPreview();
}


// ============================================================
// PICKER BUTTONS
// ============================================================

function updatePickerButtons() {

  document
    .querySelectorAll("[data-form]")
    .forEach((button) => {

      button.classList.toggle(
        "active",
        button.dataset.form === selectedForm
      );

    });

  document
    .querySelectorAll("[data-potion]")
    .forEach((button) => {

      const potion =
        button.dataset.potion;

      button.classList.toggle(
        "active",
        Boolean(selectedPotion[potion])
      );

    });
}


// ============================================================
// PICKER OPTIONS VISIBILITY
// ============================================================

function updatePickerOptionsVisibility() {
  const formOptions = $("formOptions");
  const potionOptions = $("potionOptions");
  const pickerBar = $("pickerBar");

  const isPet =
    selectedItem &&
    selectedItem.isPet;

  if (formOptions) {
    formOptions.style.display =
      isPet ? "" : "none";
  }

  if (potionOptions) {
    potionOptions.style.display =
      isPet ? "" : "none";
  }

  if (pickerBar) {
    pickerBar.style.display =
      isPet ? "" : "none";
  }
}


// ============================================================
// PICKER VALUE
// ============================================================

function getSelectedItemValue() {
  if (!selectedItem) {
    return 0;
  }

  return getPetVariantValue(selectedItem);
}


// ============================================================
// PICKER PREVIEW
// ============================================================

function updatePickerPreview() {
  const preview = $("pickerPreview");
  const valueElement = $("pickerValue");

  if (!preview) return;

  if (!selectedItem) {

    preview.innerHTML = `
      <div class="preview-empty">
        <span>👆</span>
        Bir item seç
      </div>
    `;

    if (valueElement) {
      valueElement.textContent = "0";
    }

    return;
  }

  const value =
    getSelectedItemValue();

  const image = selectedItem.image
    ? `
      <img
        src="${escapeAttribute(selectedItem.image)}"
        alt="${escapeAttribute(selectedItem.name)}"
        onerror="this.style.display='none';"
      >
    `
    : "🐾";

  let badges = "";

  if (selectedItem.isPet) {

    badges += `
      <span class="trade-badge">
        ${selectedForm.toUpperCase()}
      </span>
    `;

    if (selectedPotion.fly) {
      badges += `
        <span class="trade-badge">
          FLY
        </span>
      `;
    }

    if (selectedPotion.ride) {
      badges += `
        <span class="trade-badge">
          RIDE
        </span>
      `;
    }
  }

  preview.innerHTML = `
    <div class="preview-item">

      <div class="preview-image">
        ${image}
      </div>

      <div class="preview-info">

        <span class="preview-category">
          ${escapeHTML(selectedItem.categoryLabel)}
        </span>

        <strong>
          ${escapeHTML(selectedItem.name)}
        </strong>

        <div class="preview-badges">
          ${badges}
        </div>

      </div>

    </div>
  `;

  if (valueElement) {
    valueElement.textContent =
      formatValue(value);
  }
}


// ============================================================
// ADD TO TRADE
// ============================================================

function confirmAddPet() {
  if (!selectedItem) {
    showToast("Önce bir item seç.", "!");
    return;
  }

  if (
    pickerSide !== "you" &&
    pickerSide !== "them"
  ) {
    return;
  }

  const value =
    getSelectedItemValue();

  const tradeItem = {
    uid:
      `${selectedItem.id}-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}`,

    id: selectedItem.id,

    name: selectedItem.name,

    image: selectedItem.image,

    category: selectedItem.category,

    categoryLabel:
      selectedItem.categoryLabel,

    rarity: selectedItem.rarity,

    value,

    form:
      selectedItem.isPet
        ? selectedForm
        : "normal",

    fly:
      selectedItem.isPet
        ? selectedPotion.fly
        : false,

    ride:
      selectedItem.isPet
        ? selectedPotion.ride
        : false,

    isPet:
      selectedItem.isPet
  };

  tradeData[pickerSide].push(
    tradeItem
  );

  renderTradeSide(pickerSide);
  updateTradeUI();

  closePetPicker();

  showToast(
    `${selectedItem.name} trade'e eklendi`,
    "✓"
  );
}


// ============================================================
// RENDER TRADE
// ============================================================

function renderTradeSide(side) {
  const container =
    side === "you"
      ? $("youItems")
      : $("themItems");

  if (!container) return;

  const tradeItems =
    tradeData[side];

  if (!tradeItems.length) {

    container.innerHTML = `
      <div class="empty-trade">

        <div class="empty-icon">
          📦
        </div>

        <strong>
          Henüz item yok
        </strong>

        <span>
          ${
            side === "you"
              ? "Trade'e item eklemek için aşağıdaki butona bas."
              : "Karşı tarafın itemlerini buraya ekle."
          }
        </span>

      </div>
    `;

    return;
  }

  container.innerHTML =
    tradeItems
      .map((item) => {

        const image =
          item.image
            ? `
              <img
                src="${escapeAttribute(item.image)}"
                alt="${escapeAttribute(item.name)}"
                onerror="this.style.display='none';"
              >
            `
            : "🐾";

        let badges = "";

        if (item.isPet) {

          badges += `
            <span class="trade-badge">
              ${item.form.toUpperCase()}
            </span>
          `;

          if (item.fly) {
            badges += `
              <span class="trade-badge">
                FLY
              </span>
            `;
          }

          if (item.ride) {
            badges += `
              <span class="trade-badge">
                RIDE
              </span>
            `;
          }
        }

        return `
          <div class="trade-item">

            <div class="trade-item-image">
              ${image}
            </div>

            <div class="trade-item-info">

              <strong>
                ${escapeHTML(item.name)}
              </strong>

              <span class="trade-item-category">
                ${escapeHTML(item.categoryLabel)}
              </span>

              <div class="trade-item-badges">
                ${badges}
              </div>

            </div>

            <div class="trade-item-value">
              ${formatValue(item.value)}
            </div>

            <button
              class="remove-item-btn"
              type="button"
              onclick="removeTradePet('${escapeAttribute(side)}','${escapeAttribute(item.uid)}')"
              aria-label="Itemi kaldır"
            >
              ×
            </button>

          </div>
        `;
      })
      .join("");
}


// ============================================================
// REMOVE
// ============================================================

function removeTradePet(side, uid) {
  if (!tradeData[side]) return;

  tradeData[side] =
    tradeData[side].filter(
      (item) =>
        item.uid !== String(uid)
    );

  renderTradeSide(side);
  updateTradeUI();

  showToast("Item trade'den kaldırıldı", "✓");
}


// ============================================================
// CLEAR TRADE
// ============================================================

function clearTrade(side) {
  if (
    side !== "you" &&
    side !== "them"
  ) {
    return;
  }

  tradeData[side] = [];

  renderTradeSide(side);
  updateTradeUI();
}


// ============================================================
// TOTAL
// ============================================================

function getTradeTotal(side) {
  return tradeData[side]
    .reduce(
      (total, item) =>
        total + Number(item.value || 0),
      0
    );
}


// ============================================================
// TRADE UI
// ============================================================

function updateTradeUI() {
  const youTotal =
    getTradeTotal("you");

  const themTotal =
    getTradeTotal("them");

  if ($("youTotal")) {
    $("youTotal").textContent =
      formatValue(youTotal);
  }

  if ($("themTotal")) {
    $("themTotal").textContent =
      formatValue(themTotal);
  }

  updateResult(
    youTotal,
    themTotal
  );
}


// ============================================================
// RESULT
// ============================================================

function updateResult(
  youTotal,
  themTotal
) {
  const title =
    $("resultTitle");

  const text =
    $("resultText");

  const difference =
    $("resultDifference");

  const status =
    $("calculatorStatus");

  const card =
    $("resultCard");

  if (!title || !text || !difference) {
    return;
  }

  if (
    youTotal === 0 &&
    themTotal === 0
  ) {

    title.textContent =
      "Item ekleyerek başla";

    text.textContent =
      "İki tarafa da item eklediğinde trade sonucu burada görünecek.";

    difference.textContent =
      "—";

    if (status) {
      status.textContent =
        "● Sistem hazır";
    }

    resetResultClasses(card);

    return;
  }

  if (
    youTotal === 0 ||
    themTotal === 0
  ) {

    title.textContent =
      "İki tarafa da item ekle";

    text.textContent =
      "W/F/L sonucunu görmek için iki tarafa da en az bir item eklemelisin.";

    difference.textContent =
      "—";

    if (status) {
      status.textContent =
        "● Trade bekleniyor";
    }

    resetResultClasses(card);

    return;
  }

  const diff =
    themTotal - youTotal;

  const percentage =
    youTotal > 0
      ? (diff / youTotal) * 100
      : 0;

  resetResultClasses(card);

  if (Math.abs(diff) < 0.0001) {

    title.textContent =
      "FAIR";

    text.textContent =
      "İki tarafın toplam değeri neredeyse eşit.";

    difference.textContent =
      "0";

    if (status) {
      status.textContent =
        "● FAIR";
    }

    card?.classList.add("fair");

    return;
  }

  if (diff > 0) {

    title.textContent =
      percentage >= 15
        ? "BIG WIN"
        : "WIN";

    text.textContent =
      `Karşı tarafın teklifi yaklaşık %${Math.abs(
        percentage
      ).toFixed(1)} daha değerli.`;

    difference.textContent =
      "+" + formatValue(diff);

    if (status) {
      status.textContent =
        percentage >= 15
          ? "● BIG WIN"
          : "● WIN";
    }

    card?.classList.add(
      percentage >= 15
        ? "big-win"
        : "small-win"
    );

  } else {

    title.textContent =
      Math.abs(percentage) >= 15
        ? "BIG LOSE"
        : "LOSE";

    text.textContent =
      `Senin teklifin yaklaşık %${Math.abs(
        percentage
      ).toFixed(1)} daha düşük.`;

    difference.textContent =
      formatValue(diff);

    if (status) {
      status.textContent =
        Math.abs(percentage) >= 15
          ? "● BIG LOSE"
          : "● LOSE";
    }

    card?.classList.add(
      Math.abs(percentage) >= 15
        ? "big-lose"
        : "small-lose"
    );
  }

  recordTradeResult(
    youTotal,
    themTotal
  );
}


// ============================================================
// RESULT CLASSES
// ============================================================

function resetResultClasses(card) {
  if (!card) return;

  card.classList.remove(
    "fair",
    "small-win",
    "big-win",
    "small-lose",
    "big-lose"
  );
}


// ============================================================
// RECORD TRADE
// ============================================================

function recordTradeResult(
  youTotal,
  themTotal
) {
  if (
    youTotal <= 0 ||
    themTotal <= 0
  ) {
    return;
  }

  const key =
    `${tradeData.you
      .map((x) => x.uid)
      .join(",")}|${tradeData.them
      .map((x) => x.uid)
      .join(",")}`;

  if (
    !key ||
    key === recordedTradeKey
  ) {
    return;
  }

  recordedTradeKey = key;

  profileData.trades++;

  const diff =
    themTotal - youTotal;

  if (Math.abs(diff) < 0.0001) {
    profileData.fair++;
  } else if (diff > 0) {
    profileData.wins++;
  } else {
    profileData.losses++;
  }

  saveProfile();
  renderProfile();
}


// ============================================================
// PROFILE STORAGE
// ============================================================

function loadProfile() {

  let saved =
    localStorage.getItem(
      "zayaxra_profile"
    );

  // Eski sürümle uyumluluk
  if (!saved) {
    saved =
      localStorage.getItem(
        "zayagg_profile"
      );
  }

  if (!saved) {
    renderProfile();
    return;
  }

  try {

    const parsed =
      JSON.parse(saved);

    profileData = {
      ...profileData,
      ...parsed
    };

  } catch (error) {
    console.warn(
      "Profil okunamadı.",
      error
    );
  }

  renderProfile();
}


function saveProfile() {
  localStorage.setItem(
    "zayaxra_profile",
    JSON.stringify(profileData)
  );
}


// ============================================================
// PROFILE RENDER
// ============================================================

function renderProfile() {

  if ($("profileName")) {
    $("profileName").textContent =
      profileData.name;
  }

  if ($("profileUsername")) {
    $("profileUsername").textContent =
      profileData.username;
  }

  if ($("profileAvatar")) {
    $("profileAvatar").textContent =
      profileData.avatar;
  }

  if ($("navAvatar")) {
    $("navAvatar").textContent =
      profileData.avatar;
  }

  if ($("profileTrades")) {
    $("profileTrades").textContent =
      profileData.trades;
  }

  if ($("profileWins")) {
    $("profileWins").textContent =
      profileData.wins;
  }

  if ($("profileFair")) {
    $("profileFair").textContent =
      profileData.fair;
  }

  if ($("profileLosses")) {
    $("profileLosses").textContent =
      profileData.losses;
  }
}


// ============================================================
// PROFILE OPEN
// ============================================================

function openProfile() {
  renderProfile();

  const modal =
    $("profileModal");

  if (!modal) return;

  modal.classList.add("active");
  modal.style.display = "flex";

  document.body.classList.add(
    "modal-open"
  );

  closeEditProfile();
}


function closeProfile() {
  const modal =
    $("profileModal");

  if (modal) {
    modal.classList.remove("active");
    modal.style.display = "";
  }

  document.body.classList.remove(
    "modal-open"
  );
}


// ============================================================
// PROFILE EDIT
// ============================================================

function openEditProfile() {

  const view =
    $("profileView");

  const edit =
    $("profileEdit");

  const name =
    $("editProfileName");

  const username =
    $("editProfileUsername");

  if (name) {
    name.value =
      profileData.name || "";
  }

  if (username) {
    username.value =
      profileData.username || "";
  }

  if (view) {
    view.style.display =
      "none";
  }

  if (edit) {
    edit.style.display =
      "block";
  }

  updateAvatarButtons();
}


function closeEditProfile() {

  const view =
    $("profileView");

  const edit =
    $("profileEdit");

  if (edit) {
    edit.style.display =
      "none";
  }

  if (view) {
    view.style.display =
      "block";
  }
}


// ============================================================
// AVATAR
// ============================================================

function selectAvatar(avatar) {
  profileData.avatar =
    avatar;

  updateAvatarButtons();
}


function updateAvatarButtons() {

  document
    .querySelectorAll(
      "#avatarPicker button"
    )
    .forEach((button) => {

      button.classList.toggle(
        "active",
        button.textContent.trim() ===
          profileData.avatar
      );

    });
}


// ============================================================
// SAVE PROFILE
// ============================================================

function saveEditedProfile() {

  const nameInput =
    $("editProfileName");

  const usernameInput =
    $("editProfileUsername");

  let name =
    String(nameInput?.value || "")
      .trim();

  let username =
    String(usernameInput?.value || "")
      .trim();

  if (!name) {
    showToast(
      "Kullanıcı adı boş olamaz.",
      "!"
    );

    return;
  }

  if (!username) {
    username =
      "@user";
  }

  if (!username.startsWith("@")) {
    username =
      "@" + username;
  }

  profileData.name =
    name.slice(0, 24);

  profileData.username =
    username.slice(0, 25);

  saveProfile();
  renderProfile();
  closeEditProfile();

  showToast(
    "Profil kaydedildi.",
    "✓"
  );
}


// ============================================================
// MENU
// ============================================================

function toggleMenu() {

  const nav =
    $("navLinks");

  if (!nav) return;

  nav.classList.toggle(
    "open"
  );
}


function closeMenu() {

  const nav =
    $("navLinks");

  if (!nav) return;

  nav.classList.remove(
    "open"
  );
}


// ============================================================
// TOAST
// ============================================================

function showToast(
  message,
  icon = "✓"
) {
  const toast =
    $("toast");

  const toastText =
    $("toastText");

  const toastIcon =
    $("toastIcon");

  if (!toast) return;

  if (toastText) {
    toastText.textContent =
      message;
  }

  if (toastIcon) {
    toastIcon.textContent =
      icon;
  }

  toast.classList.add("show");

  clearTimeout(
    toastTimer
  );

  toastTimer =
    setTimeout(() => {
      toast.classList.remove(
        "show"
      );
    }, 2500);
}


// ============================================================
// HELPERS
// ============================================================

function formatValue(value) {
  const number =
    Number(value || 0);

  if (!Number.isFinite(number)) {
    return "0";
  }

  if (
    Number.isInteger(number)
  ) {
    return String(number);
  }

  return number
    .toFixed(2)
    .replace(/\.00$/, "")
    .replace(/(\.\d)0$/, "$1");
}


function capitalize(text) {
  if (!text) return "";

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
}


function rarityClass(rarity) {
  const value =
    String(rarity || "")
      .toLowerCase()
      .replace(/\s+/g, "-");

  return `rarity-${value}`;
}


function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function escapeAttribute(value) {
  return escapeHTML(value);
}


// ============================================================
// MODAL CLICK
// ============================================================

document.addEventListener(
  "click",
  (event) => {

    const target =
      event.target;

    if (
      target?.classList?.contains(
        "modal-overlay"
      )
    ) {

      if (
        target.id ===
        "petPickerModal"
      ) {
        closePetPicker();
      }

      if (
        target.id ===
        "profileModal"
      ) {
        closeProfile();
      }
    }
  }
);


// ============================================================
// ESCAPE
// ============================================================

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key !== "Escape"
    ) {
      return;
    }

    closePetPicker();
    closeProfile();
    closeMenu();
  }
);


// ============================================================
// INPUT LISTENERS
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const search =
      $("search");

    if (search) {
      search.addEventListener(
        "input",
        () => {
          visibleValueCount = 60;
          applyValueFilters();
        }
      );
    }

    const pickerSearch =
      $("pickerSearch");

    if (pickerSearch) {
      pickerSearch.addEventListener(
        "input",
        () => {
          renderPickerItems();
        }
      );
    }

    loadProfile();

    renderTradeSide("you");
    renderTradeSide("them");

    updateTradeUI();

    updatePickerButtons();
    updatePickerOptionsVisibility();

    loadItems();
  }
);


// ============================================================
// GLOBAL EXPORTS
// Inline HTML onclick'leri için
// ============================================================

window.openPetPicker =
  openPetPicker;

window.closePetPicker =
  closePetPicker;

window.toggleForm =
  toggleForm;

window.togglePotion =
  togglePotion;

window.confirmAddPet =
  confirmAddPet;

window.removeTradePet =
  removeTradePet;

window.clearTrade =
  clearTrade;

window.openProfile =
  openProfile;

window.closeProfile =
  closeProfile;

window.openEditProfile =
  openEditProfile;

window.closeEditProfile =
  closeEditProfile;

window.saveEditedProfile =
  saveEditedProfile;

window.selectAvatar =
  selectAvatar;

window.toggleMenu =
  toggleMenu;

window.closeMenu =
  closeMenu;

window.setValueCategory =
  setValueCategory;

window.applyValueFilters =
  applyValueFilters;

window.clearSearchInput =
  clearSearchInput;

window.loadMoreItems =
  loadMoreItems;

window.setPickerCategory =
  setPickerCategory;

window.selectPickerItem =
  selectPickerItem;
```
