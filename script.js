/* =========================================================
   ZAYAXRA TRADE CALCULATOR
   - 2600+ Adopt Me item
   - Pets / Pet Wear / Eggs / Vehicles / Toys / Gifts
   - D / N / M / F / R
   - Search
   - Trade calculator
   - Profile
   ========================================================= */

const DATA_URL =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/adoptme_values.json";

const IMAGE_BASE =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main";

let items = [];
let pets = [];
let youTrade = [];
let themTrade = [];

let pickerSide = null;
let selectedItem = null;
let selectedForm = "D";
let selectedPotion = "normal";
let pickerCategory = "all";
let pickerValuesVisible = true;

let profileData = loadProfile();

const $ = (id) => document.getElementById(id);

/* =========================================================
   HELPERS
   ========================================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatValue(value) {
  const n = Number(value || 0);

  if (!Number.isFinite(n)) return "0";

  if (Number.isInteger(n)) {
    return String(n);
  }

  return n
    .toFixed(2)
    .replace(/0+$/, "")
    .replace(/\.$/, "");
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function rarityName(rarity) {
  const r = normalizeText(rarity);

  if (r.includes("legendary")) return "Legendary";
  if (r.includes("ultra")) return "Ultra-Rare";
  if (r.includes("rare")) return "Rare";
  if (r.includes("uncommon")) return "Uncommon";
  if (r.includes("common")) return "Common";

  return rarity || "";
}

function categoryName(type) {
  const t = normalizeText(type);

  if (t.includes("pet wear") || t.includes("petwear") || t.includes("wear")) {
    return "PET WEAR";
  }

  if (t.includes("vehicle")) {
    return "VEHICLES";
  }

  if (t.includes("toy")) {
    return "TOYS";
  }

  if (t.includes("gift")) {
    return "GIFTS";
  }

  if (t.includes("egg")) {
    return "EGGS";
  }

  if (t.includes("stroller")) {
    return "STROLLERS";
  }

  if (t.includes("food")) {
    return "FOOD";
  }

  if (t.includes("sticker")) {
    return "STICKERS";
  }

  if (t.includes("pet")) {
    return "PETS";
  }

  return String(type || "PETS").toUpperCase();
}

function itemCategory(item) {
  const t = normalizeText(item?.type);

  if (t.includes("pet wear") || t.includes("petwear") || t.includes("wear")) {
    return "petwear";
  }

  if (t.includes("vehicle")) {
    return "vehicles";
  }

  if (t.includes("toy")) {
    return "toys";
  }

  if (t.includes("gift")) {
    return "gifts";
  }

  if (t.includes("egg")) {
    return "eggs";
  }

  if (t.includes("stroller")) {
    return "strollers";
  }

  if (t.includes("food")) {
    return "food";
  }

  if (t.includes("sticker")) {
    return "stickers";
  }

  return "pets";
}

function imageURL(item) {
  if (!item?.image) {
    return "";
  }

  if (item.image.startsWith("http://")) {
    return item.image;
  }

  if (item.image.startsWith("https://")) {
    return item.image;
  }

  return IMAGE_BASE + "/" + item.image.replace(/^\/+/, "");
}

function imageHTML(item, cls = "pet-photo") {
  return `
    <img
      src="${escapeHTML(imageURL(item))}"
      alt="${escapeHTML(item?.name || "Item")}"
      class="${cls}"
      loading="lazy"
      onerror="this.style.display='none'"
    >
  `;
}

/* =========================================================
   VALUE SYSTEM
   D = Default / Normal
   N = Neon
   M = Mega
   F = Fly
   R = Ride
   ========================================================= */

function getValue(item, form = "D", potion = "normal") {
  if (!item) return 0;

  let group = item.regular || {};
  let key = "value";

  if (form === "N") {
    group = item.neon || item.regular || {};
  }

  if (form === "M") {
    group = item.mega || item.neon || item.regular || {};
  }

  if (potion === "fly") {
    key = "fly";
  }

  if (potion === "ride") {
    key = "ride";
  }

  if (potion === "flyride") {
    key = "fly_ride";
  }

  if (potion === "normal") {
    if (form === "D") {
      key = "value";
    }

    if (form === "N") {
      key = "value";
    }

    if (form === "M") {
      key = "value";
    }
  }

  const direct = Number(group[key]);

  if (Number.isFinite(direct)) {
    return direct;
  }

  const fallback = Number(group.value);

  return Number.isFinite(fallback) ? fallback : 0;
}

/* =========================================================
   PROFILE
   ========================================================= */

const DEFAULT_PROFILE = {
  name: "Zayaxra Kullanıcısı",
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

function loadProfile() {
  try {
    const raw =
      localStorage.getItem("zayaxra_profile") ||
      localStorage.getItem("zayagg_profile");

    if (!raw) {
      return structuredClone
        ? structuredClone(DEFAULT_PROFILE)
        : JSON.parse(JSON.stringify(DEFAULT_PROFILE));
    }

    const parsed = JSON.parse(raw);

    return {
      ...DEFAULT_PROFILE,
      ...parsed,
      stats: {
        ...DEFAULT_PROFILE.stats,
        ...(parsed.stats || {})
      }
    };
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_PROFILE));
  }
}

function saveProfile() {
  localStorage.setItem(
    "zayaxra_profile",
    JSON.stringify(profileData)
  );
}

function renderProfile() {
  if ($("profileName")) {
    $("profileName").textContent = profileData.name;
  }

  if ($("profileUsername")) {
    $("profileUsername").textContent =
      profileData.username.startsWith("@")
        ? profileData.username
        : "@" + profileData.username;
  }

  if ($("profileBio")) {
    $("profileBio").textContent = profileData.bio;
  }

  if ($("profileAvatar")) {
    $("profileAvatar").textContent = profileData.avatar;
  }

  if ($("profileTrades")) {
    $("profileTrades").textContent = profileData.stats.trades;
  }

  if ($("profileWins")) {
    $("profileWins").textContent = profileData.stats.wins;
  }

  if ($("profileFair")) {
    $("profileFair").textContent = profileData.stats.fairs;
  }

  if ($("profileLoses")) {
    $("profileLoses").textContent = profileData.stats.loses;
  }

  if ($("tradeCount")) {
    $("tradeCount").textContent = profileData.stats.trades;
  }

  if ($("winCount")) {
    $("winCount").textContent = profileData.stats.wins;
  }

  if ($("fairCount")) {
    $("fairCount").textContent = profileData.stats.fairs;
  }

  if ($("loseCount")) {
    $("loseCount").textContent = profileData.stats.loses;
  }
}

function openProfile() {
  renderProfile();

  $("profileModal")?.classList.add("show", "open");
  $("profileModal")?.setAttribute("aria-hidden", "false");

  document.body.classList.add("profile-open");
}

function closeProfile() {
  $("profileModal")?.classList.remove("show", "open");
  $("profileModal")?.setAttribute("aria-hidden", "true");

  document.body.classList.remove("profile-open");

  closeEditProfile();
}

function renderAvatars() {
  const box = $("avatarPick");

  if (!box) return;

  box.innerHTML = "";

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

  avatars.forEach((avatar) => {
    const btn = document.createElement("button");

    btn.type = "button";
    btn.className =
      "avatar-opt" +
      (avatar === profileData.avatar ? " active" : "");

    btn.textContent = avatar;

    btn.addEventListener("click", () => {
      profileData.avatar = avatar;

      box
        .querySelectorAll(".avatar-opt")
        .forEach((x) => x.classList.remove("active"));

      btn.classList.add("active");
    });

    box.appendChild(btn);
  });
}

function openEditProfile() {
  const form = $("profileEditForm");

  if (!form) return;

  if ($("editName")) {
    $("editName").value = profileData.name;
  }

  if ($("editUsername")) {
    $("editUsername").value =
      profileData.username.replace(/^@/, "");
  }

  if ($("editBio")) {
    $("editBio").value = profileData.bio;
  }

  renderAvatars();

  form.classList.remove("hidden");

  $("profileEditBtn")?.classList.add("hidden");
}

function closeEditProfile() {
  $("profileEditForm")?.classList.add("hidden");

  $("profileEditBtn")?.classList.remove("hidden");
}

function saveEditedProfile(event) {
  event?.preventDefault();

  const name = ($("editName")?.value || "").trim();
  const username = ($("editUsername")?.value || "").trim();
  const bio = ($("editBio")?.value || "").trim();

  if (!name || !username) return;

  profileData.name = name;
  profileData.username = username.startsWith("@")
    ? username
    : "@" + username;

  profileData.bio =
    bio || DEFAULT_PROFILE.bio;

  saveProfile();
  renderProfile();
  closeEditProfile();
}

/* =========================================================
   CATEGORY UI
   ========================================================= */

function getPickerModal() {
  return $("petPicker") || $("petPickerModal");
}

function getPickerSearch() {
  return $("petSearch") || $("pickerSearch");
}

function getPickerGrid() {
  return $("pickerPets") || $("pickerPetList");
}

function installCategoryUI() {
  const modal = getPickerModal();

  if (!modal) return;

  const windowEl =
    modal.querySelector(
      ".profile-window, .pet-modal-box, .modal-box, .modal-content"
    ) || modal;

  let sidebar =
    windowEl.querySelector(".zayaxra-category-sidebar");

  if (!sidebar) {
    sidebar = document.createElement("div");

    sidebar.className =
      "zayaxra-category-sidebar";

    const search =
      windowEl.querySelector(
        ".modal-search, #pickerSearch, #petSearch, .pet-search"
      );

    if (search) {
      search.insertAdjacentElement(
        "beforebegin",
        sidebar
      );
    } else {
      windowEl.insertBefore(
        sidebar,
        windowEl.firstChild
      );
    }
  }

  sidebar.innerHTML = "";

  const categories = [
    ["all", "ALL"],
    ["pets", "PETS"],
    ["petwear", "PET WEAR"],
    ["eggs", "EGGS"],
    ["vehicles", "VEHICLES"],
    ["toys", "TOYS"],
    ["gifts", "GIFTS"],
    ["strollers", "STROLLERS"],
    ["food", "FOOD"],
    ["stickers", "STICKERS"]
  ];

  categories.forEach(([key, label]) => {
    const btn = document.createElement("button");

    btn.type = "button";

    btn.className =
      "zayaxra-category-btn" +
      (pickerCategory === key ? " active" : "");

    btn.textContent = label;

    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      pickerCategory = key;

      installCategoryUI();
      renderPicker();
    });

    sidebar.appendChild(btn);
  });

  if (!$("zayaxraCategoryStyles")) {
    const style = document.createElement("style");

    style.id = "zayaxraCategoryStyles";

    style.textContent = `
      .zayaxra-category-sidebar {
        display:flex;
        gap:7px;
        overflow-x:auto;
        padding:0 0 10px;
        margin-bottom:10px;
        scrollbar-width:thin;
      }

      .zayaxra-category-btn {
        flex:0 0 auto;
        border:1px solid rgba(255,255,255,.08);
        background:rgba(255,255,255,.035);
        color:#8d93a5;
        border-radius:10px;
        padding:8px 11px;
        font-size:9px;
        font-weight:900;
        letter-spacing:.08em;
        cursor:pointer;
      }

      .zayaxra-category-btn:hover,
      .zayaxra-category-btn.active {
        color:#fff;
        background:rgba(139,124,255,.16);
        border-color:rgba(139,124,255,.38);
      }

      .zayaxra-form-row {
        display:flex!important;
        flex-wrap:nowrap!important;
        align-items:center!important;
        gap:7px!important;
      }

      .zayaxra-form-row button {
        min-width:44px!important;
        height:38px!important;
        padding:0 10px!important;
      }

      .zayaxra-loading {
        padding:30px;
        text-align:center;
        opacity:.75;
      }
    `;

    document.head.appendChild(style);
  }
}

/* =========================================================
   FORM BUTTONS
   ========================================================= */

function installFormControls() {
  const formBox =
    document.querySelector(".form-toggles");

  const potionBox =
    document.querySelector(".potion-toggles");

  if (!formBox && !potionBox) return;

  const options =
    document.querySelector(".picker-options");

  if (!options) return;

  let row =
    options.querySelector(".zayaxra-form-row");

  if (!row) {
    row = document.createElement("div");

    row.className =
      "zayaxra-form-row";

    options.appendChild(row);
  }

  row.innerHTML = "";

  const d =
    formBox?.querySelector("#normalFormBtn") ||
    document.createElement("button");

  const n =
    formBox?.querySelector("#btnNeon") ||
    document.createElement("button");

  const m =
    formBox?.querySelector("#btnMega") ||
    document.createElement("button");

  const f =
    potionBox?.querySelector("#btnFly") ||
    document.createElement("button");

  const r =
    potionBox?.querySelector("#btnRide") ||
    document.createElement("button");

  d.textContent = "D";
  n.textContent = "N";
  m.textContent = "M";
  f.textContent = "F";
  r.textContent = "R";

  d.id = "zayaxraDButton";
  n.id = "zayaxraNButton";
  m.id = "zayaxraMButton";
  f.id = "zayaxraFButton";
  r.id = "zayaxraRButton";

  [
    [d, "D"],
    [n, "N"],
    [m, "M"],
    [f, "F"],
    [r, "R"]
  ].forEach(([button, type]) => {
    button.type = "button";

    button.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (type === "D" || type === "N" || type === "M") {
        selectedForm = type;
      }

      if (type === "F") {
        selectedPotion =
          selectedPotion === "fly"
            ? "normal"
            : "fly";
      }

      if (type === "R") {
        selectedPotion =
          selectedPotion === "ride"
            ? "normal"
            : "ride";
      }

      updateFormButtons();
      renderPreview();
    };

    row.appendChild(button);
  });

  updateFormButtons();
}

function updateFormButtons() {
  const d = $("zayaxraDButton");
  const n = $("zayaxraNButton");
  const m = $("zayaxraMButton");
  const f = $("zayaxraFButton");
  const r = $("zayaxraRButton");

  d?.classList.toggle("active", selectedForm === "D");
  n?.classList.toggle("active", selectedForm === "N");
  m?.classList.toggle("active", selectedForm === "M");

  f?.classList.toggle(
    "active",
    selectedPotion === "fly"
  );

  r?.classList.toggle(
    "active",
    selectedPotion === "ride"
  );
}

/* =========================================================
   PICKER
   ========================================================= */

function openPetPicker(side) {
  pickerSide = side;
  selectedItem = null;

  selectedForm = "D";
  selectedPotion = "normal";
  pickerCategory = "all";
  pickerValuesVisible = true;

  const title = $("petPickerTitle");

  if (title) {
    title.textContent =
      side === "you"
        ? "Senin teklifine item ekle"
        : "Karşı tarafın teklifine item ekle";
  }

  const search = getPickerSearch();

  if (search) {
    search.value = "";
  }

  installCategoryUI();
  installFormControls();

  renderPreview();
  renderPicker();

  const modal = getPickerModal();

  if (!modal) return;

  modal.classList.add("show", "open");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("profile-open");

  setTimeout(() => {
    getPickerSearch()?.focus();
  }, 50);
}

function closePetPicker() {
  const modal = getPickerModal();

  if (!modal) return;

  modal.classList.remove("show", "open");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("profile-open");

  pickerSide = null;
  selectedItem = null;
}

function filteredItems() {
  const query =
    normalizeText(
      getPickerSearch()?.value || ""
    );

  return items.filter((item) => {
    const cat =
      pickerCategory === "all" ||
      itemCategory(item) === pickerCategory;

    const search =
      !query ||
      normalizeText(item.name).includes(query) ||
      normalizeText(item.rarity).includes(query) ||
      normalizeText(item.type).includes(query);

    return cat && search;
  });
}

function renderPicker() {
  const grid = getPickerGrid();

  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = `
      <div class="zayaxra-loading">
        Veriler yükleniyor...
      </div>
    `;
    return;
  }

  const list = filteredItems();

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-picker">
        <span>🔎</span>
        <strong>Item bulunamadı</strong>
        <small>Başka bir isim veya kategori dene.</small>
      </div>
    `;
    return;
  }

  list.forEach((item) => {
    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "pet-choice" +
      (selectedItem?.id === item.id
        ? " selected"
        : "");

    button.innerHTML = `
      <div class="choice-image">
        ${imageHTML(item)}
      </div>

      <strong>
        ${escapeHTML(item.name)}
      </strong>

      <span class="rarity-tag">
        ${escapeHTML(
          rarityName(item.rarity)
        )}
      </span>

      <small class="picker-choice-value">
        ${formatValue(
          getValue(
            item,
            selectedForm,
            selectedPotion
          )
        )}
      </small>
    `;

    button.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        selectedItem = item;

        renderPreview();
        updateFormButtons();

        grid
          .querySelectorAll(".pet-choice")
          .forEach((x) =>
            x.classList.remove("selected")
          );

        button.classList.add("selected");
      }
    );

    grid.appendChild(button);
  });
}

function renderPreview() {
  const box = $("pickerPreview");

  if (!box) return;

  if (!selectedItem) {
    box.innerHTML = "";
    return;
  }

  const value = getValue(
    selectedItem,
    selectedForm,
    selectedPotion
  );

  box.innerHTML = `
    <div class="pet-image-wrap">

      ${imageHTML(
        selectedItem
      )}

      <div class="pet-badges">

        ${
          selectedForm === "N"
            ? `<span class="mini-chip neon">N</span>`
            : ""
        }

        ${
          selectedForm === "M"
            ? `<span class="mini-chip mega">M</span>`
            : ""
        }

        ${
          selectedPotion === "fly"
            ? `<span class="mini-chip fly">F</span>`
            : ""
        }

        ${
          selectedPotion === "ride"
            ? `<span class="mini-chip ride">R</span>`
            : ""
        }

      </div>

    </div>

    <div class="preview-info">
      <strong>
        ${escapeHTML(selectedItem.name)}
      </strong>

      <span>
        ${escapeHTML(
          rarityName(selectedItem.rarity)
        )}
      </span>

      <b>
        ${formatValue(value)}
      </b>
    </div>
  `;

  const valueBox =
    $("pickerValue");

  if (valueBox) {
    valueBox.textContent =
      formatValue(value);
  }

  const confirm =
    $("confirmPetBtn");

  if (confirm) {
    confirm.disabled = false;
  }
}

function confirmAddPet() {
  if (!selectedItem || !pickerSide) return;

  const item = {
    ...selectedItem,

    uniqueId:
      Date.now() +
      "_" +
      Math.random()
        .toString(36)
        .slice(2),

    form: selectedForm,

    potion: selectedPotion,

    value: getValue(
      selectedItem,
      selectedForm,
      selectedPotion
    )
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
   TRADE
   ========================================================= */

function calculateTotal(trade) {
  return trade.reduce(
    (sum, item) =>
      sum + Number(item.value || 0),
    0
  );
}

function tradeItemHTML(item, side) {
  return `
    <div
      class="trade-item"
      data-trade-id="${escapeHTML(
        item.uniqueId
      )}"
    >

      <div class="pet-image-wrap">

        ${imageHTML(item)}

        <div class="pet-badges">

          ${
            item.form === "N"
              ? `<span class="mini-chip neon">N</span>`
              : ""
          }

          ${
            item.form === "M"
              ? `<span class="mini-chip mega">M</span>`
              : ""
          }

          ${
            item.potion === "fly"
              ? `<span class="mini-chip fly">F</span>`
              : ""
          }

          ${
            item.potion === "ride"
              ? `<span class="mini-chip ride">R</span>`
              : ""
          }

        </div>

      </div>

      <div class="trade-item-info">

        <strong>
          ${escapeHTML(item.name)}
        </strong>

        <small>
          ${escapeHTML(
            rarityName(item.rarity)
          )}
        </small>

      </div>

      <strong>
        ${formatValue(item.value)}
      </strong>

      <button
        type="button"
        class="remove-item"
        onclick="removeTradePet(
          '${side}',
          '${escapeHTML(item.uniqueId)}'
        )"
      >
        ×
      </button>

    </div>
  `;
}

function renderTradeSide(
  elementId,
  trade,
  side
) {
  const element = $(elementId);

  if (!element) return;

  if (!trade.length) {
    element.innerHTML = `
      <div class="empty-items">
        Henüz item eklenmedi
      </div>
    `;

    return;
  }

  element.innerHTML =
    trade
      .map((item) =>
        tradeItemHTML(item, side)
      )
      .join("");

  element
    .querySelectorAll(".trade-item")
    .forEach((card) => {
      card.addEventListener(
        "click",
        (event) => {
          if (
            event.target.closest(
              ".remove-item"
            )
          ) {
            return;
          }

          const id =
            card.dataset.tradeId;

          removeTradePet(side, id);
        }
      );
    });
}

function removeTradePet(
  side,
  uniqueId
) {
  if (side === "you") {
    youTrade =
      youTrade.filter(
        (item) =>
          item.uniqueId !== uniqueId
      );
  } else {
    themTrade =
      themTrade.filter(
        (item) =>
          item.uniqueId !== uniqueId
      );
  }

  updateTradeUI();
}

function clearTrade() {
  youTrade = [];
  themTrade = [];

  updateTradeUI();
}

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

/* =========================================================
   RESULT
   ========================================================= */

function updateResult(
  youTotal,
  themTotal
) {
  const card =
    $("resultCard");

  const status =
    $("resultStatusText");

  const diff =
    $("resultDiffDisplay") ||
    $("resultDiffNumber");

  const statusLabel =
    $("tradeStatusLabel");

  const statusNumber =
    $("resultDiffNumber");

  card?.classList.remove(
    "win",
    "lose",
    "fair",
    "big-win",
    "big-lose",
    "small-win",
    "small-lose"
  );

  if (
    !youTotal &&
    !themTotal
  ) {
    if (status) {
      status.textContent =
        "Item ekleyerek başla";
    }

    if (diff) {
      diff.textContent = "—";
    }

    if (statusNumber) {
      statusNumber.textContent =
        "—";
    }

    if (statusLabel) {
      statusLabel.textContent =
        "TRADE HAZIR";
    }

    return;
  }

  if (
    !youTotal ||
    !themTotal
  ) {
    if (status) {
      status.textContent =
        "İki tarafa da item ekle";
    }

    if (diff) {
      diff.textContent = "—";
    }

    if (statusNumber) {
      statusNumber.textContent =
        "—";
    }

    if (statusLabel) {
      statusLabel.textContent =
        "TRADE BEKLENİYOR";
    }

    return;
  }

  const difference =
    themTotal - youTotal;

  const percent =
    youTotal
      ? (difference / youTotal) * 100
      : 0;

  let result = "fair";
  let label = "FAIR";

  if (percent >= 10) {
    result = "big-win";
    label = "BIG WIN";
  } else if (percent > 3) {
    result = "small-win";
    label = "SMALL WIN";
  } else if (percent <= -10) {
    result = "big-lose";
    label = "BIG LOSE";
  } else if (percent < -3) {
    result = "small-lose";
    label = "SMALL LOSE";
  }

  card?.classList.add(
    result
  );

  if (
    result.includes("win")
  ) {
    card?.classList.add("win");
  }

  if (
    result.includes("lose")
  ) {
    card?.classList.add("lose");
  }

  if (
    result === "fair"
  ) {
    card?.classList.add("fair");
  }

  const signed =
    difference > 0
      ? "+" + formatValue(difference)
      : formatValue(difference);

  if (status) {
    status.textContent =
      label;
  }

  if (diff) {
    diff.textContent =
      signed;
  }

  if (statusNumber) {
    statusNumber.textContent =
      signed;
  }

  if (statusLabel) {
    statusLabel.textContent =
      label;
  }

  recordTradeResult(
    result.includes("win")
      ? "win"
      : result.includes("lose")
      ? "lose"
      : "fair"
  );
}

/* =========================================================
   PROFILE TRADE STATS
   ========================================================= */

let recordedTradeKey = "";

function recordTradeResult(status) {
  if (
    !youTrade.length ||
    !themTrade.length
  ) {
    return;
  }

  const key =
    youTrade
      .map(
        (x) => x.uniqueId
      )
      .join(",") +
    "|" +
    themTrade
      .map(
        (x) => x.uniqueId
      )
      .join(",") +
    "|" +
    status;

  if (
    key === recordedTradeKey
  ) {
    return;
  }

  recordedTradeKey = key;

  profileData.stats.trades++;

  if (status === "win") {
    profileData.stats.wins++;
  }

  if (status === "fair") {
    profileData.stats.fairs++;
  }

  if (status === "lose") {
    profileData.stats.loses++;
  }

  saveProfile();
  renderProfile();
}

/* =========================================================
   INFO / MENU
   ========================================================= */

function openInfo(event) {
  event?.preventDefault();

  $("infoModal")?.classList.add(
    "show",
    "open"
  );

  $("infoModal")?.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "profile-open"
  );
}

function closeInfo() {
  $("infoModal")?.classList.remove(
    "show",
    "open"
  );

  $("infoModal")?.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "profile-open"
  );
}

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
   VALUE LIST
   ========================================================= */

function renderValues() {
  const grid =
    $("valueGrid");

  if (!grid) return;

  const search =
    normalizeText(
      $("search")?.value || ""
    );

  const list =
    items.filter(
      (item) =>
        !search ||
        normalizeText(
          item.name
        ).includes(search) ||
        normalizeText(
          item.rarity
        ).includes(search) ||
        normalizeText(
          item.type
        ).includes(search)
    );

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-picker">
        <span>🔎</span>
        <strong>Item bulunamadı</strong>
        <small>Başka bir isim dene.</small>
      </div>
    `;

    return;
  }

  list
    .slice(0, 500)
    .forEach((item) => {
      const card =
        document.createElement("div");

      card.className =
        "value-card";

      card.innerHTML = `
        <div class="value-image">
          ${imageHTML(item)}
        </div>

        <div class="value-info">

          <h3>
            ${escapeHTML(item.name)}
          </h3>

          <span class="rarity-small">
            ${escapeHTML(
              rarityName(item.rarity)
            )}
          </span>

          <small>
            ${escapeHTML(
              categoryName(item.type)
            )}
          </small>

          <strong>
            Value:
            ${formatValue(
              getValue(
                item,
                "D",
                "normal"
              )
            )}
          </strong>

        </div>
      `;

      grid.appendChild(card);
    });
}

/* =========================================================
   DATA LOADER
   ========================================================= */

async function loadData() {
  const pickerGrid =
    getPickerGrid();

  if (pickerGrid) {
    pickerGrid.innerHTML = `
      <div class="zayaxra-loading">
        Adopt Me itemleri yükleniyor...
      </div>
    `;
  }

  try {
    const response =
      await fetch(
        DATA_URL,
        {
          cache: "no-store"
        }
      );

    if (!response.ok) {
      throw new Error(
        "HTTP " +
          response.status
      );
    }

    const data =
      await response.json();

    if (!Array.isArray(data)) {
      throw new Error(
        "Veri formatı geçersiz."
      );
    }

    items =
      data.map(
        (item, index) => ({
          ...item,

          id:
            item.id ??
            index,

          name:
            item.name ||
            "Unknown Item",

          type:
            item.type ||
            "pets",

          rarity:
            item.rarity ||
            "common"
        })
      );

    pets =
      items.filter(
        (item) =>
          itemCategory(item) ===
          "pets"
      );

    installCategoryUI();
    installFormControls();

    renderPicker();
    renderValues();
    renderProfile();
    updateTradeUI();

  } catch (error) {

    console.error(
      "ZAYAXRA DATA ERROR:",
      error
    );

    if (pickerGrid) {
      pickerGrid.innerHTML = `
        <div class="empty-picker">

          <span>⚠️</span>

          <strong>
            Veriler yüklenemedi
          </strong>

          <small>
            İnternet bağlantını kontrol edip
            sayfayı yenile.
          </small>

        </div>
      `;
    }
  }
}

/* =========================================================
   EVENTS
   ========================================================= */

document.addEventListener(
  "click",
  (event) => {

    if (
      event.target ===
      getPickerModal()
    ) {
      closePetPicker();
    }

    if (
      event.target ===
      $("profileModal")
    ) {
      closeProfile();
    }

    if (
      event.target ===
      $("infoModal")
    ) {
      closeInfo();
    }
  }
);

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {
      closePetPicker();
      closeProfile();
      closeInfo();
      closeMenu();
    }
  }
);

/* =========================================================
   INIT
   ========================================================= */

function initZayaxra() {

  renderProfile();

  installCategoryUI();
  installFormControls();

  const search =
    $("search");

  if (search) {
    search.addEventListener(
      "input",
      renderValues
    );
  }

  const pickerSearch =
    getPickerSearch();

  if (pickerSearch) {
    pickerSearch.addEventListener(
      "input",
      renderPicker
    );
  }

  const confirm =
    $("confirmPetBtn");

  if (confirm) {
    confirm.disabled = true;
  }

  updateTradeUI();

  loadData();
}

/* =========================================================
   GLOBALS FOR EXISTING HTML
   ========================================================= */

window.openPetPicker =
  openPetPicker;

window.closePetPicker =
  closePetPicker;

window.confirmAddPet =
  confirmAddPet;

window.clearTrade =
  clearTrade;

window.removeTradePet =
  removeTradePet;

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

window.openInfo =
  openInfo;

window.closeInfo =
  closeInfo;

window.toggleMenu =
  toggleMenu;

window.closeMenu =
  closeMenu;

/* Compatibility */
window.toggleForm = (
  form
) => {

  if (
    ["D", "normal"].includes(
      String(form)
    )
  ) {
    selectedForm = "D";
  }

  if (
    String(form)
      .toLowerCase() ===
    "neon"
  ) {
    selectedForm = "N";
  }

  if (
    String(form)
      .toLowerCase() ===
    "mega"
  ) {
    selectedForm = "M";
  }

  updateFormButtons();
  renderPreview();
};

window.togglePotion = (
  type
) => {

  const t =
    String(type)
      .toLowerCase();

  if (t === "fly") {
    selectedPotion =
      selectedPotion === "fly"
        ? "normal"
        : "fly";
  }

  if (t === "ride") {
    selectedPotion =
      selectedPotion === "ride"
        ? "normal"
        : "ride";
  }

  updateFormButtons();
  renderPreview();
};

document.addEventListener(
  "DOMContentLoaded",
  initZayaxra
);
