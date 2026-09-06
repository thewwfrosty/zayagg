/* =========================================================
   ZAYAXRA — COMPLETE SCRIPT
   ========================================================= */

const PET_DATA_URL =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/adoptme_values.json";

const PET_IMAGE_BASE =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main";

let pets = [];
let youTrade = [];
let themTrade = [];

let pickerSide = null;
let selectedPet = null;

/* D / N / M */
let selectedForm = "normal";

/* F / R */
let selectedPotion = {
  fly: false,
  ride: false
};

let recordedTradeKey = "";

const $ = id => document.getElementById(id);

/* =========================================================
   HELPERS
   ========================================================= */

function formatValue(value) {
  const n = Number(value || 0);

  if (!Number.isFinite(n)) return "0";

  return Number.isInteger(n)
    ? String(n)
    : n.toFixed(1).replace(/\.0$/, "");
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function rarityName(rarity) {
  return {
    legendary: "Legendary",
    ultra: "Ultra-Rare",
    rare: "Rare",
    uncommon: "Uncommon",
    common: "Common",
    unknown: "Unknown"
  }[String(rarity || "").toLowerCase()] || rarity || "";
}

function handleImageError(img) {
  if (!img || img.dataset.failed) return;

  img.dataset.failed = "1";

  img.src =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">
        <rect width="160" height="160" rx="20" fill="#15182a"/>
        <text
          x="80"
          y="85"
          text-anchor="middle"
          fill="#8b93a7"
          font-size="13"
          font-family="Arial"
        >NO IMAGE</text>
      </svg>
    `);
}

function imageHTML(pet, cls = "pet-photo") {
  return `
    <img
      src="${escapeHTML(pet?.image || "")}"
      alt="${escapeHTML(pet?.name || "")}"
      class="${cls}"
      loading="lazy"
      onerror="handleImageError(this)"
    >
  `;
}

/* =========================================================
   DATA
   ========================================================= */

function getItemCategory(item) {
  const type = String(
    item?.type ||
    item?.category ||
    item?.kind ||
    ""
  ).toLowerCase();

  const name = String(item?.name || "").toLowerCase();

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

  return "pets";
}

function normalizePet(item, index) {
  if (!item || !item.name) return null;

  let image =
    item.image ||
    item.icon ||
    "";

  if (
    image &&
    !/^https?:\/\//i.test(image)
  ) {
    image =
      `${PET_IMAGE_BASE}/images/` +
      image.replace(/^\/+/, "");
  }

  return {
    ...item,

    id:
      item.id ||
      item.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_") +
        "_" +
        index,

    name: String(item.name),

    rarity:
      item.rarity ||
      "unknown",

    value:
      Number(
        item.value ??
        item.regular?.value ??
        item.regular ??
        0
      ),

    image,

    category: getItemCategory(item)
  };
}

async function loadPetDatabase() {
  const response = await fetch(PET_DATA_URL, {
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(
      `Pet database HTTP ${response.status}`
    );
  }

  const raw = await response.json();

  let source = raw;

  if (
    raw &&
    typeof raw === "object" &&
    Array.isArray(raw.pets)
  ) {
    source = raw.pets;
  }

  if (
    raw &&
    typeof raw === "object" &&
    Array.isArray(raw.items)
  ) {
    source = raw.items;
  }

  if (!Array.isArray(source)) {
    throw new Error(
      "Pet database formatı tanınmadı."
    );
  }

  pets = source
    .map(normalizePet)
    .filter(Boolean);

  renderValues();
  renderPickerPets(pets);
}

/* =========================================================
   VALUE SECTION
   ========================================================= */

function renderValues() {
  const grid = $("valueGrid");

  if (!grid) return;

  const search = $("search");

  const q =
    (search?.value || "")
      .trim()
      .toLowerCase();

  const list = pets.filter(p =>
    p.name.toLowerCase().includes(q) ||
    String(p.rarity)
      .toLowerCase()
      .includes(q)
  );

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-picker">
        <span>🔎</span>
        <strong>Pet bulunamadı</strong>
        <small>Başka bir isim dene.</small>
      </div>
    `;
    return;
  }

  list.forEach(pet => {
    const card =
      document.createElement("div");

    card.className = "value-card";

    card.innerHTML = `
      <div class="value-image">
        ${imageHTML(pet)}
      </div>

      <div class="value-info">
        <h3>
          ${escapeHTML(pet.name)}
        </h3>

        <span
          class="rarity-small ${escapeHTML(
            pet.rarity || ""
          )}"
        >
          ${escapeHTML(
            rarityName(pet.rarity)
          )}
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
   PICKER
   ========================================================= */

function getPickerModal() {
  return (
    $("petPicker") ||
    $("petPickerModal")
  );
}

function getPickerSearch() {
  return (
    $("petSearch") ||
    $("pickerSearch")
  );
}

function getPickerGrid() {
  return (
    $("pickerPets") ||
    $("pickerPetList")
  );
}

function openPetPicker(side) {
  pickerSide = side;
  selectedPet = null;

  /*
    ÖNEMLİ:
    D/N/M/F/R burada sıfırlanmıyor.
    Kullanıcı modal açmadan önce/önceki seçiminden
    devam edebiliyor.
  */

  const title =
    $("petPickerTitle");

  if (title) {
    title.textContent =
      side === "you"
        ? "Senin teklifine pet ekle"
        : "Karşı tarafın teklifine pet ekle";
  }

  const search =
    getPickerSearch();

  if (search) {
    search.value = "";
  }

  const bar =
    $("pickerBar");

  if (bar) {
    bar.classList.add("hidden");
  }

  preparePickerButtons();

  updatePickerButtons();

  updatePickerValue();

  renderPickerPets(pets);

  const modal =
    getPickerModal();

  if (modal) {
    modal.classList.add("show");
    modal.classList.add("open");
    modal.setAttribute(
      "aria-hidden",
      "false"
    );
  }

  document.body.classList.add(
    "profile-open"
  );

  setTimeout(() => {
    getPickerSearch()?.focus();
  }, 50);
}

function closePetPicker() {
  const modal =
    getPickerModal();

  if (!modal) return;

  modal.classList.remove("show");
  modal.classList.remove("open");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "profile-open"
  );

  pickerSide = null;
  selectedPet = null;
}

function renderPickerPets(list) {
  const box =
    getPickerGrid();

  if (!box) return;

  box.innerHTML = "";

  if (!list.length) {
    box.innerHTML = `
      <div class="empty-picker">
        <span>🔎</span>
        <strong>Pet bulunamadı</strong>
        <small>Arama kelimesini değiştir.</small>
      </div>
    `;
    return;
  }

  list.forEach(pet => {
    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "pet-choice" +
      (
        selectedPet?.id === pet.id
          ? " selected"
          : ""
      );

    button.innerHTML = `
      <div class="choice-image">
        ${imageHTML(pet)}
      </div>

      <strong>
        ${escapeHTML(pet.name)}
      </strong>

      <span
        class="rarity-tag ${escapeHTML(
          pet.rarity || ""
        )}"
      >
        ${escapeHTML(
          rarityName(pet.rarity)
        )}
      </span>

      <small>
        ${formatValue(pet.value)}
      </small>
    `;

    button.addEventListener(
      "click",
      event => {
        event.preventDefault();
        event.stopPropagation();

        selectPickerPet(pet);

        document
          .querySelectorAll(".pet-choice")
          .forEach(card => {
            card.classList.remove(
              "selected"
            );
          });

        button.classList.add(
          "selected"
        );
      }
    );

    box.appendChild(button);
  });
}

function filterPickerPets() {
  const search =
    getPickerSearch();

  const q =
    (search?.value || "")
      .trim()
      .toLowerCase();

  const filtered =
    pets.filter(pet =>
      pet.name
        .toLowerCase()
        .includes(q) ||

      String(pet.rarity)
        .toLowerCase()
        .includes(q)
    );

  renderPickerPets(filtered);
}

function selectPickerPet(pet) {
  selectedPet = pet;

  const bar =
    $("pickerBar");

  if (bar) {
    bar.classList.remove(
      "hidden"
    );
  }

  /*
    Burada D/N/M/F/R sıfırlanmıyor.
    Kullanıcı bir pet seçtiğinde mevcut seçimleri
    doğrudan bu pete uygulanıyor.
  */

  renderPickerPreview();
  updatePickerButtons();
  updatePickerValue();
}

/* =========================================================
   PICKER BUTTONS
   ========================================================= */

function preparePickerButtons() {
  const normal =
    $("normalFormBtn");

  const neon =
    $("btnNeon");

  const mega =
    $("btnMega");

  const none =
    $("noPotionBtn");

  const fly =
    $("btnFly");

  const ride =
    $("btnRide");

  const flyRide =
    $("flyRideBtn");

  /*
    Kullanıcının istediği:
    D N M F R

    Eski:
    Normal
    Normal potion
    F/R
    butonlarını kaldırıyoruz.
  */

  if (normal) {
    normal.textContent = "D";
    normal.type = "button";
  }

  if (neon) {
    neon.textContent = "N";
    neon.type = "button";
  }

  if (mega) {
    mega.textContent = "M";
    mega.type = "button";
  }

  if (fly) {
    fly.textContent = "F";
    fly.type = "button";
  }

  if (ride) {
    ride.textContent = "R";
    ride.type = "button";
  }

  if (none) {
    none.style.display = "none";
  }

  if (flyRide) {
    flyRide.style.display =
      "none";
  }

  [
    normal,
    neon,
    mega,
    fly,
    ride
  ].forEach(button => {
    if (!button) return;

    button.disabled = false;
    button.removeAttribute(
      "disabled"
    );
  });
}

function resetPickerButtons() {
  preparePickerButtons();

  [
    "normalFormBtn",
    "btnNeon",
    "btnMega",
    "btnFly",
    "btnRide"
  ].forEach(id => {
    $(id)?.classList.remove(
      "active"
    );
  });
}

function updatePickerButtons() {
  preparePickerButtons();

  $("normalFormBtn")
    ?.classList.toggle(
      "active",
      selectedForm === "normal"
    );

  $("btnNeon")
    ?.classList.toggle(
      "active",
      selectedForm === "neon"
    );

  $("btnMega")
    ?.classList.toggle(
      "active",
      selectedForm === "mega"
    );

  $("btnFly")
    ?.classList.toggle(
      "active",
      selectedPotion.fly
    );

  $("btnRide")
    ?.classList.toggle(
      "active",
      selectedPotion.ride
    );
}

/* =========================================================
   FORM SELECTION
   ========================================================= */

function toggleForm(form) {
  if (
    ![
      "normal",
      "neon",
      "mega"
    ].includes(form)
  ) {
    return false;
  }

  selectedForm = form;

  /*
    ÖNEMLİ:
    Burada renderPickerPets YOK.
    Bu yüzden butona basınca liste yenilenmiyor.
  */

  updatePickerButtons();
  updatePickerValue();

  if (selectedPet) {
    renderPickerPreview();
  }

  return false;
}

/* =========================================================
   POTION
   ========================================================= */

function togglePotion(type) {
  if (
    type !== "fly" &&
    type !== "ride"
  ) {
    return false;
  }

  selectedPotion[type] =
    !selectedPotion[type];

  /*
    F ve R birbirinden bağımsızdır.
    İkisine de basarsan F + R olur.
    F/R birleşik butonu yok.
  */

  updatePickerButtons();
  updatePickerValue();

  if (selectedPet) {
    renderPickerPreview();
  }

  return false;
}

/* =========================================================
   VALUE
   ========================================================= */

function getModifiedValue(pet) {
  if (!pet) return 0;

  let value =
    Number(pet.value || 0);

  if (
    selectedForm === "neon"
  ) {
    value *= 4;
  }

  if (
    selectedForm === "mega"
  ) {
    value *= 16;
  }

  if (
    selectedPotion.fly
  ) {
    value += 0.25;
  }

  if (
    selectedPotion.ride
  ) {
    value += 0.25;
  }

  return value;
}

function updatePickerValue() {
  const element =
    $("pickerValue");

  if (!element) return;

  element.textContent =
    selectedPet
      ? formatValue(
          getModifiedValue(
            selectedPet
          )
        )
      : "0";
}

/* =========================================================
   PREVIEW
   ========================================================= */

function renderPickerPreview() {
  const box =
    $("pickerPreview");

  if (!box || !selectedPet) {
    return;
  }

  const neon =
    selectedForm === "neon";

  const mega =
    selectedForm === "mega";

  box.innerHTML = `
    <div class="pet-image-wrap">

      ${
        neon
          ? `<div class="neon-effect"></div>`
          : ""
      }

      ${
        mega
          ? `<div class="mega-effect"></div>`
          : ""
      }

      ${imageHTML(selectedPet)}

      <div class="pet-badges">

        ${
          neon
            ? `<span class="mini-chip neon">N</span>`
            : ""
        }

        ${
          mega
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
        ${escapeHTML(
          selectedPet.name
        )}
      </strong>

      <span>
        ${escapeHTML(
          rarityName(
            selectedPet.rarity
          )
        )}
      </span>

      <div class="vchip-row">

        ${
          neon
            ? `<span class="vchip neon">NEON</span>`
            : ""
        }

        ${
          mega
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
   ADD PET
   ========================================================= */

function confirmAddPet() {
  if (
    !selectedPet ||
    !pickerSide
  ) {
    return false;
  }

  const item = {
    ...selectedPet,

    baseValue:
      Number(
        selectedPet.value || 0
      ),

    value:
      getModifiedValue(
        selectedPet
      ),

    form:
      selectedForm,

    fly:
      !!selectedPotion.fly,

    ride:
      !!selectedPotion.ride,

    uniqueId:
      `${Date.now()}_${Math.random()
        .toString(36)
        .slice(2)}`
  };

  if (
    pickerSide === "you"
  ) {
    youTrade.push(item);
  } else {
    themTrade.push(item);
  }

  closePetPicker();
  updateTradeUI();

  return false;
}

/* =========================================================
   TRADE
   ========================================================= */

function calculateTotal(trade) {
  return trade.reduce(
    (sum, pet) =>
      sum +
      Number(
        pet.value || 0
      ),
    0
  );
}

function tradeItemHTML(
  pet,
  side
) {
  return `
    <div
      class="trade-item"
      data-id="${escapeHTML(
        pet.uniqueId
      )}"
    >

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

        ${imageHTML(pet)}

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
          ${escapeHTML(
            pet.name
          )}
        </strong>

        <small>
          ${escapeHTML(
            rarityName(
              pet.rarity
            )
          )}
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
        ${formatValue(
          pet.value
        )}
      </strong>

      <button
        type="button"
        class="remove-item"
        onclick="
          removeTradePet(
            '${side}',
            '${pet.uniqueId}'
          );
          return false;
        "
      >
        ×
      </button>

    </div>
  `;
}

function renderTradeSide(
  id,
  trade,
  side
) {
  const element =
    $(id);

  if (!element) return;

  element.innerHTML =
    trade.length
      ? trade
          .map(pet =>
            tradeItemHTML(
              pet,
              side
            )
          )
          .join("")
      : `
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
}

function removeTradePet(
  side,
  id
) {
  if (side === "you") {
    youTrade =
      youTrade.filter(
        pet =>
          pet.uniqueId !== id
      );
  } else {
    themTrade =
      themTrade.filter(
        pet =>
          pet.uniqueId !== id
      );
  }

  recordedTradeKey = "";

  updateTradeUI();
}

function clearTrade() {
  youTrade = [];
  themTrade = [];

  recordedTradeKey = "";

  updateTradeUI();
}

function updateTradeUI() {
  const youTotal =
    calculateTotal(
      youTrade
    );

  const themTotal =
    calculateTotal(
      themTrade
    );

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
      formatValue(
        youTotal
      );
  }

  if ($("themTotal")) {
    $("themTotal").textContent =
      formatValue(
        themTotal
      );
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

  const hint =
    $("resultHint");

  const display =
    $("resultDiffDisplay");

  const diffNumber =
    $("resultDiffNumber");

  const statusLabel =
    $("tradeStatusLabel");

  const statusBar =
    $("tradeStatusBar");

  if (!card) return;

  card.classList.remove(
    "win",
    "lose",
    "fair",
    "small-win",
    "small-lose",
    "big-win",
    "big-lose"
  );

  if (
    youTotal === 0 &&
    themTotal === 0
  ) {
    if (status)
      status.textContent =
        "Pet ekleyerek başla";

    if (hint)
      hint.textContent =
        "İki tarafa da pet eklediğinde avantajı burada göreceksin.";

    if (display)
      display.textContent =
        "—";

    if (diffNumber)
      diffNumber.textContent =
        "—";

    if (statusLabel)
      statusLabel.textContent =
        "TRADE HAZIR";

    return;
  }

  if (
    youTotal === 0 ||
    themTotal === 0
  ) {
    if (status)
      status.textContent =
        "İki tarafa da pet ekle";

    if (hint)
      hint.textContent =
        "Her iki tarafta da teklif oluşturduğunda sonucu görebilirsin.";

    if (display)
      display.textContent =
        "—";

    if (diffNumber)
      diffNumber.textContent =
        "—";

    if (statusLabel)
      statusLabel.textContent =
        "TRADE BEKLENİYOR";

    return;
  }

  const difference =
    themTotal -
    youTotal;

  const percent =
    youTotal > 0
      ? (
          difference /
          youTotal
        ) * 100
      : 0;

  let result =
    "fair";

  let label =
    "FAIR";

  let text =
    "İki tarafın değeri birbirine oldukça yakın.";

  /*
    +10 ve üstü = BIG WIN
    +3 ile +10 = SMALL WIN

    -3 ile -10 = SMALL LOSE
    -10 ve altı = BIG LOSE

    Fark:
    karşı taraf - sen
  */

  if (percent >= 10) {
    result =
      "big-win";

    label =
      "BIG WIN";

    text =
      "Bu trade senin için oldukça avantajlı.";
  } else if (percent > 3) {
    result =
      "small-win";

    label =
      "SMALL WIN";

    text =
      "Trade senin lehine.";
  } else if (percent <= -10) {
    result =
      "big-lose";

    label =
      "BIG LOSE";

    text =
      "Bu trade senin için ciddi şekilde dezavantajlı.";
  } else if (percent < -3) {
    result =
      "small-lose";

    label =
      "SMALL LOSE";

    text =
      "Trade karşı tarafın lehine.";
  }

  card.classList.add(
    result
  );

  const diffText =
    difference > 0
      ? `+${formatValue(
          difference
        )}`
      : formatValue(
          difference
        );

  if (status)
    status.textContent =
      label;

  if (hint)
    hint.textContent =
      text;

  if (display)
    display.textContent =
      diffText;

  if (diffNumber)
    diffNumber.textContent =
      diffText;

  if (statusLabel)
    statusLabel.textContent =
      label;

  recordTradeResult(
    result
  );
}

/* =========================================================
   PROFILE
   ========================================================= */

const DEFAULT_PROFILE = {
  name:
    "Zayaxra Kullanıcısı",

  username:
    "kullanici",

  bio:
    "Henüz bir biyografi eklenmedi.",

  avatar:
    "🐉",

  stats: {
    trades: 0,
    wins: 0,
    fairs: 0,
    loses: 0
  }
};

let profileData =
  loadProfile();

function loadProfile() {
  try {
    const raw =
      localStorage.getItem(
        "zayaxra_profile"
      ) ||
      localStorage.getItem(
        "zayagg_profile"
      );

    if (!raw) {
      return {
        ...DEFAULT_PROFILE,
        stats: {
          ...DEFAULT_PROFILE.stats
        }
      };
    }

    const parsed =
      JSON.parse(raw);

    return {
      ...DEFAULT_PROFILE,
      ...parsed,

      stats: {
        ...DEFAULT_PROFILE.stats,
        ...(parsed.stats || {})
      }
    };
  } catch {
    return {
      ...DEFAULT_PROFILE,
      stats: {
        ...DEFAULT_PROFILE.stats
      }
    };
  }
}

function saveProfile() {
  localStorage.setItem(
    "zayaxra_profile",
    JSON.stringify(
      profileData
    )
  );
}

function renderProfile() {
  if ($("profileName")) {
    $("profileName")
      .textContent =
      profileData.name;
  }

  if ($("profileUsername")) {
    $("profileUsername")
      .textContent =
      profileData.username
        .startsWith("@")
        ? profileData.username
        : `@${profileData.username}`;
  }

  if ($("profileBio")) {
    $("profileBio")
      .textContent =
      profileData.bio;
  }

  if ($("profileAvatar")) {
    $("profileAvatar")
      .textContent =
      profileData.avatar;
  }

  /*
    SENİN MEVCUT HTML'İNDEKİ ID'LER
  */

  if ($("profileTrades")) {
    $("profileTrades")
      .textContent =
      profileData.stats.trades;
  }

  if ($("profileWins")) {
    $("profileWins")
      .textContent =
      profileData.stats.wins;
  }

  if ($("profileFair")) {
    $("profileFair")
      .textContent =
      profileData.stats.fairs;
  }

  if ($("profileLoses")) {
    $("profileLoses")
      .textContent =
      profileData.stats.loses;
  }

  /*
    Eski ID'ler de korunuyor.
  */

  if ($("tradeCount")) {
    $("tradeCount")
      .textContent =
      profileData.stats.trades;
  }

  if ($("winCount")) {
    $("winCount")
      .textContent =
      profileData.stats.wins;
  }

  if ($("fairCount")) {
    $("fairCount")
      .textContent =
      profileData.stats.fairs;
  }

  if ($("loseCount")) {
    $("loseCount")
      .textContent =
      profileData.stats.loses;
  }
}

function openProfile() {
  renderProfile();

  const modal =
    $("profileModal");

  if (!modal) return;

  modal.classList.add(
    "show",
    "open"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "profile-open"
  );
}

function closeProfile() {
  const modal =
    $("profileModal");

  if (!modal) return;

  modal.classList.remove(
    "show",
    "open"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "profile-open"
  );

  closeEditProfile();
}

function openEditProfile() {
  const form =
    $("profileEditForm");

  if (!form) return;

  if ($("editName")) {
    $("editName").value =
      profileData.name;
  }

  if ($("editUsername")) {
    $("editUsername").value =
      profileData.username;
  }

  if ($("editBio")) {
    $("editBio").value =
      profileData.bio;
  }

  renderAvatars();

  form.classList.remove(
    "hidden"
  );

  $("profileEditBtn")
    ?.classList.add(
      "hidden"
    );
}

function closeEditProfile() {
  $("profileEditForm")
    ?.classList.add(
      "hidden"
    );

  $("profileEditBtn")
    ?.classList.remove(
      "hidden"
    );
}

function renderAvatars() {
  const box =
    $("avatarPick");

  if (!box) return;

  box.innerHTML = "";

  [
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
  ].forEach(avatar => {
    const button =
      document.createElement(
        "button"
      );

    button.type = "button";

    button.className =
      "avatar-opt" +
      (
        avatar ===
        profileData.avatar
          ? " active"
          : ""
      );

    button.textContent =
      avatar;

    button.onclick = event => {
      event.preventDefault();
      event.stopPropagation();

      profileData.avatar =
        avatar;

      box
        .querySelectorAll(
          ".avatar-opt"
        )
        .forEach(item =>
          item.classList.remove(
            "active"
          )
        );

      button.classList.add(
        "active"
      );
    };

    box.appendChild(
      button
    );
  });
}

function saveEditedProfile(
  event
) {
  event.preventDefault();

  const name =
    $("editName")
      ?.value
      .trim();

  const username =
    $("editUsername")
      ?.value
      .trim();

  const bio =
    $("editBio")
      ?.value
      .trim();

  if (!name || !username) {
    return;
  }

  profileData.name =
    name;

  profileData.username =
    username.startsWith("@")
      ? username
      : `@${username}`;

  profileData.bio =
    bio ||
    DEFAULT_PROFILE.bio;

  saveProfile();

  renderProfile();
  closeEditProfile();
}

/* =========================================================
   PROFILE TRADE STATS
   ========================================================= */

function recordTradeResult(
  status
) {
  if (
    !youTrade.length ||
    !themTrade.length
  ) {
    return;
  }

  /*
    Stats her updateTradeUI'da
    sürekli artmasın.
  */

  const key =
    youTrade
      .map(
        p => p.uniqueId
      )
      .join(",") +
    "|" +
    themTrade
      .map(
        p => p.uniqueId
      )
      .join(",") +
    "|" +
    status;

  if (
    key ===
    recordedTradeKey
  ) {
    return;
  }

  recordedTradeKey =
    key;

  profileData.stats.trades++;

  if (
    status === "big-win" ||
    status === "small-win"
  ) {
    profileData.stats.wins++;
  }

  if (
    status === "fair"
  ) {
    profileData.stats.fairs++;
  }

  if (
    status === "big-lose" ||
    status === "small-lose"
  ) {
    profileData.stats.loses++;
  }

  saveProfile();

  renderProfile();
}

/* =========================================================
   INFO
   ========================================================= */

function openInfo(event) {
  event?.preventDefault();

  const modal =
    $("infoModal");

  if (!modal) return;

  modal.classList.add(
    "show",
    "open"
  );

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "profile-open"
  );
}

function closeInfo() {
  const modal =
    $("infoModal");

  if (!modal) return;

  modal.classList.remove(
    "show",
    "open"
  );

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "profile-open"
  );
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
   EVENTS
   ========================================================= */

document.addEventListener(
  "click",
  event => {
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

    if (
      event.target ===
      $("petPicker")
    ) {
      closePetPicker();
    }

    if (
      event.target ===
      $("petPickerModal")
    ) {
      closePetPicker();
    }
  }
);

document.addEventListener(
  "keydown",
  event => {
    if (
      event.key ===
      "Escape"
    ) {
      closeProfile();
      closePetPicker();
      closeInfo();
      closeMenu();
    }
  }
);

/* =========================================================
   SEARCH EVENTS
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {
    $("search")
      ?.addEventListener(
        "input",
        renderValues
      );

    getPickerSearch()
      ?.addEventListener(
        "input",
        filterPickerPets
      );

    /*
      HTML'deki D/N/M/F/R inline onclick'leri
      güvenli şekilde koruyoruz.
    */

    preparePickerButtons();
    updatePickerButtons();

    renderProfile();
    updateTradeUI();

    loadPetDatabase()
      .catch(error => {
        console.error(
          "ZAYAXRA database error:",
          error
        );

        const box =
          getPickerGrid();

        if (box) {
          box.innerHTML = `
            <div class="empty-picker">
              <strong>Pet verileri yüklenemedi.</strong>
              <small>
                İnternet bağlantını kontrol edip sayfayı yenile.
              </small>
            </div>
          `;
        }
      });
  }
);

/* =========================================================
   GLOBAL
   ========================================================= */

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

window.openInfo =
  openInfo;

window.closeInfo =
  closeInfo;

window.toggleMenu =
  toggleMenu;

window.closeMenu =
  closeMenu;
/* =========================================================
   ZAYAXRA — FINAL PET PICKER PATCH
   SADECE BU KODU SCRIPT.JS'NİN EN ALTINA EKLE
   ========================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     STATE
  --------------------------------------------------------- */

  let zayaxraCategory = "all";
  let zayaxraShowValues = true;

  /*
    Mevcut scriptteki:
    pets
    selectedPet
    selectedForm
    selectedPotion
    pickerSide

    değişkenlerini kullanır.
  */

  /* ---------------------------------------------------------
     ELEMENT HELPERS
  --------------------------------------------------------- */

  function Z(id) {
    return document.getElementById(id);
  }

  function getPickerModal() {
    return (
      Z("petPicker") ||
      Z("petPickerModal")
    );
  }

  function getPickerGrid() {
    return (
      Z("pickerPets") ||
      Z("pickerPetList")
    );
  }

  function getPickerSearch() {
    return (
      Z("petSearch") ||
      Z("pickerSearch")
    );
  }

  /* ---------------------------------------------------------
     CATEGORY
  --------------------------------------------------------- */

  function getZayaxraCategory(item) {

    const type = String(
      item?.type ||
      item?.category ||
      item?.kind ||
      item?.itemType ||
      ""
    ).toLowerCase();

    const name = String(
      item?.name || ""
    ).toLowerCase();

    /* DATABASE'DEN GELİYORSA ÖNCE TYPE */
    if (
      type.includes("petwear") ||
      type.includes("pet wear") ||
      type.includes("pet_wear") ||
      type.includes("wear") ||
      type.includes("accessory")
    ) {
      return "petwear";
    }

    if (
      type.includes("egg")
    ) {
      return "eggs";
    }

    if (
      type.includes("vehicle") ||
      type.includes("car") ||
      type.includes("bike") ||
      type.includes("veh")
    ) {
      return "vehicles";
    }

    if (
      type.includes("toy")
    ) {
      return "toys";
    }

    if (
      type.includes("gift")
    ) {
      return "gifts";
    }

    /* NAME YEDEĞİ */
    if (
      name.includes("egg")
    ) {
      return "eggs";
    }

    return "pets";
  }

  /* ---------------------------------------------------------
     FILTER
  --------------------------------------------------------- */

  function getPickerFilteredList() {

    const search =
      getPickerSearch();

    const query =
      String(
        search?.value || ""
      )
      .trim()
      .toLowerCase();

    const source =
      Array.isArray(window.pets)
        ? window.pets
        : (
            typeof pets !== "undefined"
              ? pets
              : []
          );

    return source.filter(item => {

      const category =
        getZayaxraCategory(item);

      const categoryOK =
        zayaxraCategory === "all" ||
        category === zayaxraCategory;

      const searchOK =
        !query ||
        String(
          item.name || ""
        )
        .toLowerCase()
        .includes(query) ||

        String(
          item.rarity || ""
        )
        .toLowerCase()
        .includes(query);

      return (
        categoryOK &&
        searchOK
      );
    });
  }

  /* ---------------------------------------------------------
     CATEGORY BAR
  --------------------------------------------------------- */

  function renderZayaxraCategories() {

    const modal =
      getPickerModal();

    if (!modal) return;

    let sidebar =
      modal.querySelector(
        ".zayaxra-final-categories"
      );

    if (!sidebar) {

      sidebar =
        document.createElement(
          "div"
        );

      sidebar.className =
        "zayaxra-final-categories";

      modal
        .querySelector(
          ".profile-header"
        )
        ?.after(sidebar);

      if (
        !sidebar.parentNode
      ) {
        modal.prepend(sidebar);
      }
    }

    const categories = [
      ["all", "ALL"],
      ["pets", "PETS"],
      ["petwear", "PET WEAR"],
      ["eggs", "EGGS"],
      ["vehicles", "VEHICLES"],
      ["toys", "TOYS"],
      ["gifts", "GIFTS"]
    ];

    sidebar.innerHTML = "";

    categories.forEach(
      ([key, label]) => {

        const button =
          document.createElement(
            "button"
          );

        button.type = "button";

        button.className =
          "zayaxra-final-category" +
          (
            zayaxraCategory === key
              ? " active"
              : ""
          );

        button.textContent =
          label;

        button.onclick = function (
          event
        ) {

          event.preventDefault();
          event.stopPropagation();

          zayaxraCategory =
            key;

          renderZayaxraCategories();

          renderZayaxraPicker();
        };

        sidebar.appendChild(
          button
        );
      }
    );
  }

  /* ---------------------------------------------------------
     PET CARDS
  --------------------------------------------------------- */

  function renderZayaxraPicker() {

    const grid =
      getPickerGrid();

    if (!grid) return;

    const list =
      getPickerFilteredList();

    grid.innerHTML = "";

    if (!list.length) {

      grid.innerHTML = `
        <div class="empty-picker">
          <span>🔎</span>
          <strong>Bulunamadı</strong>
          <small>
            Bu kategoride sonuç yok.
          </small>
        </div>
      `;

      return;
    }

    list.forEach(
      pet => {

        const card =
          document.createElement(
            "button"
          );

        card.type = "button";

        card.className =
          "pet-choice" +
          (
            selectedPet?.id === pet.id
              ? " selected"
              : ""
          );

        const value =
          Number(
            pet.value || 0
          );

        card.innerHTML = `
          <div class="choice-image">
            ${imageHTML(pet)}
          </div>

          <strong>
            ${escapeHTML(
              pet.name
            )}
          </strong>

          <span
            class="rarity-tag ${
              escapeHTML(
                pet.rarity || ""
              )
            }"
          >
            ${escapeHTML(
              rarityName(
                pet.rarity
              )
            )}
          </span>

          <small class="zayaxra-picker-value">
            ${
              zayaxraShowValues
                ? formatValue(value)
                : "•••"
            }
          </small>
        `;

        card.addEventListener(
          "click",
          function (event) {

            event.preventDefault();
            event.stopPropagation();

            /*
              PET SEÇİLİYOR.
              FORM SIFIRLANMIYOR.
              POTION SIFIRLANMIYOR.
            */

            selectedPet =
              pet;

            Z("pickerBar")
              ?.classList
              .remove("hidden");

            /*
              SADECE ÖNİZLEME
              Liste yeniden çizilmiyor.
            */

            renderPickerPreview();
            updatePickerButtons();
            updatePickerValue();

            document
              .querySelectorAll(
                ".pet-choice"
              )
              .forEach(
                el =>
                  el.classList
                    .remove(
                      "selected"
                    )
              );

            card.classList.add(
              "selected"
            );
          }
        );

        grid.appendChild(
          card
        );
      }
    );
  }

  /* ---------------------------------------------------------
     SEARCH
  --------------------------------------------------------- */

  function zayaxraPickerSearch() {
    renderZayaxraPicker();
  }

  /* ---------------------------------------------------------
     OPEN PICKER
  --------------------------------------------------------- */

  window.openPetPicker =
    function (side) {

      pickerSide =
        side;

      /*
        DİKKAT:
        BURADA selectedForm
        SIFIRLANMIYOR.

        BURADA selectedPotion
        SIFIRLANMIYOR.
      */

      selectedPet =
        null;

      const title =
        Z("petPickerTitle");

      if (title) {

        title.textContent =
          side === "you"
            ? "Senin teklifine pet ekle"
            : "Karşı tarafın teklifine pet ekle";
      }

      const search =
        getPickerSearch();

      if (search) {
        search.value = "";
      }

      zayaxraCategory =
        "all";

      Z("pickerBar")
        ?.classList
        .add("hidden");

      renderZayaxraCategories();

      updatePickerButtons();
      updatePickerValue();

      renderZayaxraPicker();

      const modal =
        getPickerModal();

      if (modal) {

        modal.classList.add(
          "show"
        );

        modal.classList.add(
          "open"
        );

        modal.setAttribute(
          "aria-hidden",
          "false"
        );
      }

      document.body.classList.add(
        "profile-open"
      );

      setTimeout(
        () =>
          search?.focus(),
        50
      );
    };

  /* ---------------------------------------------------------
     CLOSE PICKER
  --------------------------------------------------------- */

  window.closePetPicker =
    function () {

      const modal =
        getPickerModal();

      if (!modal) return;

      modal.classList.remove(
        "show"
      );

      modal.classList.remove(
        "open"
      );

      modal.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.classList.remove(
        "profile-open"
      );

      pickerSide =
        null;

      selectedPet =
        null;
    };

  /* ---------------------------------------------------------
     FORM
  --------------------------------------------------------- */

  window.toggleForm =
    function (form) {

      if (
        form !== "normal" &&
        form !== "neon" &&
        form !== "mega"
      ) {
        return false;
      }

      selectedForm =
        form;

      /*
        SADECE BUTON / PREVIEW GÜNCELLENİYOR.
        PET LİSTESİNE DOKUNULMUYOR.
      */

      updatePickerButtons();

      if (selectedPet) {
        renderPickerPreview();
      }

      updatePickerValue();

      return false;
    };

  /* ---------------------------------------------------------
     POTION
  --------------------------------------------------------- */

  window.togglePotion =
    function (type) {

      if (
        type !== "fly" &&
        type !== "ride"
      ) {
        return false;
      }

      if (
        !selectedPotion ||
        typeof selectedPotion !== "object"
      ) {
        selectedPotion = {
          fly: false,
          ride: false
        };
      }

      selectedPotion[type] =
        !selectedPotion[type];

      /*
        SADECE F / R DURUMU DEĞİŞİR.
        LİSTE YENİLENMEZ.
      */

      updatePickerButtons();

      if (selectedPet) {
        renderPickerPreview();
      }

      updatePickerValue();

      return false;
    };

  /* ---------------------------------------------------------
     BUTTONS
  --------------------------------------------------------- */

  window.updatePickerButtons =
    function () {

      const normal =
        Z("normalFormBtn");

      const neon =
        Z("btnNeon");

      const mega =
        Z("btnMega");

      const fly =
        Z("btnFly");

      const ride =
        Z("btnRide");

      const noPotion =
        Z("noPotionBtn");

      const flyRide =
        Z("flyRideBtn");

      if (normal) {
        normal.textContent =
          "D";

        normal.type =
          "button";

        normal.disabled =
          false;

        normal.classList.toggle(
          "active",
          selectedForm ===
            "normal"
        );
      }

      if (neon) {
        neon.textContent =
          "N";

        neon.type =
          "button";

        neon.disabled =
          false;

        neon.classList.toggle(
          "active",
          selectedForm ===
            "neon"
        );
      }

      if (mega) {
        mega.textContent =
          "M";

        mega.type =
          "button";

        mega.disabled =
          false;

        mega.classList.toggle(
          "active",
          selectedForm ===
            "mega"
        );
      }

      if (fly) {
        fly.textContent =
          "F";

        fly.type =
          "button";

        fly.disabled =
          false;

        fly.classList.toggle(
          "active",
          !!selectedPotion?.fly
        );
      }

      if (ride) {
        ride.textContent =
          "R";

        ride.type =
          "button";

        ride.disabled =
          false;

        ride.classList.toggle(
          "active",
          !!selectedPotion?.ride
        );
      }

      /*
        ESKİ NORMAL POTION
        BUTONUNU SAKLA
      */

      if (noPotion) {
        noPotion.style.display =
          "none";
      }

      /*
        BİRLEŞİK F/R BUTONU YOK
      */

      if (flyRide) {
        flyRide.style.display =
          "none";
      }
    };

  /* ---------------------------------------------------------
     VALUE
  --------------------------------------------------------- */

  window.updatePickerValue =
    function () {

      const element =
        Z("pickerValue");

      if (!element) return;

      if (!selectedPet) {

        element.textContent =
          "0";

        return;
      }

      let value =
        Number(
          selectedPet.value || 0
        );

      if (
        selectedForm ===
        "neon"
      ) {
        value *= 4;
      }

      if (
        selectedForm ===
        "mega"
      ) {
        value *= 16;
      }

      if (
        selectedPotion?.fly
      ) {
        value += .25;
      }

      if (
        selectedPotion?.ride
      ) {
        value += .25;
      }

      element.textContent =
        formatValue(value);
    };

  /* ---------------------------------------------------------
     ADD PET
  --------------------------------------------------------- */

  window.confirmAddPet =
    function () {

      if (
        !selectedPet ||
        !pickerSide
      ) {
        return false;
      }

      let value =
        Number(
          selectedPet.value || 0
        );

      if (
        selectedForm ===
        "neon"
      ) {
        value *= 4;
      }

      if (
        selectedForm ===
        "mega"
      ) {
        value *= 16;
      }

      if (
        selectedPotion?.fly
      ) {
        value += .25;
      }

      if (
        selectedPotion?.ride
      ) {
        value += .25;
      }

      const item = {
        ...selectedPet,

        baseValue:
          Number(
            selectedPet.value || 0
          ),

        value:

          value,

        form:
          selectedForm,

        fly:
          !!selectedPotion?.fly,

        ride:
          !!selectedPotion?.ride,

        uniqueId:
          `${Date.now()}_${Math.random()
            .toString(36)
            .slice(2)}`
      };

      if (
        pickerSide ===
        "you"
      ) {

        youTrade.push(
          item
        );

      } else {

        themTrade.push(
          item
        );
      }

      closePetPicker();

      updateTradeUI();

      return false;
    };

  /* ---------------------------------------------------------
     SHOW VALUES
  --------------------------------------------------------- */

  window.togglePickerValues =
    function () {

      zayaxraShowValues =
        !zayaxraShowValues;

      renderZayaxraPicker();
    };

  /* ---------------------------------------------------------
     SEARCH EVENT
  --------------------------------------------------------- */

  document.addEventListener(
    "DOMContentLoaded",
    function () {

      const search =
        getPickerSearch();

      if (
        search &&
        !search.dataset
          .zayaxraBound
      ) {

        search.dataset
          .zayaxraBound =
          "1";

        search.addEventListener(
          "input",
          zayaxraPickerSearch
        );
      }

      renderZayaxraCategories();

      updatePickerButtons();

      /*
        BU CSS:
        - Kategorileri geri getirir
        - D/N/M/F/R'yi yatay yapar
        - F/R birleşik butonunu gizler
        - Eski "Normal" potion butonunu gizler
      */

      if (
        !document.getElementById(
          "zayaxra-final-picker-css"
        )
      ) {

        const style =
          document.createElement(
            "style"
          );

        style.id =
          "zayaxra-final-picker-css";

        style.textContent = `

          /* ============================
             CATEGORY SIDEBAR
          ============================ */

          .zayaxra-final-categories {

            position: absolute;

            left: 18px;
            top: 86px;

            width: 125px;

            display: flex;

            flex-direction: column;

            gap: 7px;

            z-index: 50;
          }

          .zayaxra-final-category {

            width: 100%;

            min-height: 38px;

            border-radius: 11px;

            border:
              1px solid
              rgba(255,255,255,.07);

            background:
              rgba(255,255,255,.025);

            color:
              rgba(255,255,255,.48);

            font-size: 9px;

            font-weight: 900;

            letter-spacing:
              .09em;

            text-align: left;

            padding:
              0 12px;

            cursor: pointer;

            transition:
              .18s ease;
          }

          .zayaxra-final-category:hover {

            color: #fff;

            background:
              rgba(255,255,255,.06);

            transform:
              translateX(2px);
          }

          .zayaxra-final-category.active {

            color: #fff;

            background:
              rgba(139,124,255,.16);

            border-color:
              rgba(139,124,255,.36);

            box-shadow:
              0 0 20px
              rgba(139,124,255,.10);
          }

          /* ============================
             LIST SPACE
          ============================ */

          .zayaxra-final-categories
          ~ .modal-search,

          .zayaxra-final-categories
          ~ #pickerPets,

          .zayaxra-final-categories
          ~ #pickerPetList {

            margin-left: 155px;
          }

          /* ============================
             D N M F R
          ============================ */

          .picker-options {

            display: flex
            !important;

            align-items: center
            !important;

            justify-content: center
            !important;
          }

          .form-toggles,
          .potion-toggles {

            display:
              contents
              !important;
          }

          .form-btn,
          .potion-btn {

            width:
              48px
            !important;

            min-width:
              48px
            !important;

            max-width:
              48px
            !important;

            height:
              42px
            !important;

            flex:
              0 0 48px
            !important;

            margin:
              0 4px
            !important;

            padding:
              0
            !important;

            display:
              inline-flex
            !important;

            align-items:
              center
            !important;

            justify-content:
              center
            !important;

            font-size:
              13px
            !important;

            font-weight:
              900
            !important;
          }

          /* ============================
             PET CARD
          ============================ */

          .pet-choice {

            cursor:
              pointer
            !important;
          }

          .pet-choice:hover {

            transform:
              translateY(-3px);
          }

          .pet-choice.selected {

            border-color:
              rgba(139,124,255,.55)
            !important;

            box-shadow:
              0 0 0 1px
              rgba(139,124,255,.18),
              0 10px 30px
              rgba(0,0,0,.24);
          }

          /* ============================
             MOBILE
          ============================ */

          @media (max-width: 800px) {

            .zayaxra-final-categories {

              position:
                static;

              width:
                100%;

              flex-direction:
                row;

              overflow-x:
                auto;

              padding-bottom:
                10px;
            }

            .zayaxra-final-category {

              width:
                auto;

              flex:
                0 0 auto;

              white-space:
                nowrap;
            }

            .zayaxra-final-categories
            ~ .modal-search,

            .zayaxra-final-categories
            ~ #pickerPets,

            .zayaxra-final-categories
            ~ #pickerPetList {

              margin-left:
                0;
            }

            .form-btn,
            .potion-btn {

              width:
                42px
              !important;

              min-width:
                42px
              !important;

              max-width:
                42px
              !important;

              flex-basis:
                42px
              !important;
            }
          }
        `;

        document.head.appendChild(
          style
        );
      }
    }
  );

})();
