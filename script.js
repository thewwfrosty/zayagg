// ===============================
// ZAYAXRA - PET PICKER FIX
// ===============================

let currentTradeSide = "you";
let selectedPet = null;

function openPetPicker(side) {
    currentTradeSide = side;

    const modal = document.getElementById("petPicker");

    if (!modal) {
        console.error("petPicker bulunamadı!");
        return;
    }

    modal.classList.add("active");
    modal.style.display = "flex";
    modal.style.visibility = "visible";
    modal.style.opacity = "1";

    const title = document.getElementById("petPickerTitle");

    if (title) {
        title.textContent =
            side === "you"
                ? "SENİN PETİNİ SEÇ"
                : "KARŞI TARAFIN PETİNİ SEÇ";
    }

    const search = document.getElementById("petSearch");

    if (search) {
        search.value = "";
        setTimeout(() => search.focus(), 100);
    }

    // Veri yüklenmediyse yine de picker açılsın
    renderPetPicker();
}

function closePetPicker() {
    const modal = document.getElementById("petPicker");

    if (!modal) return;

    modal.classList.remove("active");
    modal.style.display = "none";
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
}

function renderPetPicker() {
    const grid = document.getElementById("pickerPets");

    if (!grid) return;

    grid.innerHTML = `
        <div style="
            grid-column:1/-1;
            padding:40px;
            text-align:center;
            color:white;
            font-size:16px;
        ">
            Petler yükleniyor...
        </div>
    `;

    // Global items varsa onları göster
    if (typeof items !== "undefined" && Array.isArray(items) && items.length) {
        renderPetList(items);
    }
}

function renderPetList(list) {
    const grid = document.getElementById("pickerPets");

    if (!grid) return;

    grid.innerHTML = "";

    list.forEach((pet) => {
        const card = document.createElement("button");

        card.type = "button";
        card.className = "pet-choice";

        card.innerHTML = `
            <img
                src="${pet.image || ""}"
                alt="${pet.name || "Pet"}"
                class="pet-choice-image"
                onerror="this.style.display='none'"
            >
            <span>${pet.name || "Bilinmeyen Pet"}</span>
        `;

        card.onclick = () => {
            selectPet(pet);
        };

        grid.appendChild(card);
    });
}

function selectPet(pet) {
    selectedPet = pet;

    console.log("Seçilen pet:", pet);

    const preview = document.getElementById("pickerPreview");

    if (preview) {
        preview.innerHTML = `
            <img
                src="${pet.image || ""}"
                style="width:70px;height:70px;object-fit:contain"
                onerror="this.style.display='none'"
            >
            <div>
                <strong>${pet.name}</strong>
            </div>
        `;
    }
}

// Modalı dışarı tıklayınca kapat
document.addEventListener("click", function (e) {
    const modal = document.getElementById("petPicker");

    if (!modal) return;

    if (e.target === modal) {
        closePetPicker();
    }
}); 
/* =========================================================
   ZAYAXRA — FINAL SCRIPT
   Adopt Me Trading Calculator

   DATA:
   2600+ items
   Pets
   Pet Wear
   Eggs
   Vehicles
   Toys
   Gifts
   Strollers
   Food
   Stickers

   FORMS:
   D = Normal
   N = Neon
   M = Mega
   F = Fly
   R = Ride
   F/R = Fly Ride
========================================================= */

const DATA_URL =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/adoptme_values.json";

const IMAGE_BASE =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main";

let items = [];

let youTrade = [];
let themTrade = [];

let pickerSide = null;
let selectedItem = null;

let selectedForm = "D";
let selectedPotion = "normal";

let pickerCategory = "all";

let profileData = loadProfile();

const $ = (id) =>
  document.getElementById(id);

/* =========================================================
   HELPERS
========================================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatValue(value) {
  const number = Number(value || 0);

  if (!Number.isFinite(number)) {
    return "0";
  }

  if (Number.isInteger(number)) {
    return String(number);
  }

  return number
    .toFixed(2)
    .replace(/0+$/, "")
    .replace(/\.$/, "");
}

/* =========================================================
   RARITY
========================================================= */

function rarityClass(rarity) {
  const r = normalizeText(rarity);

  if (r.includes("legendary")) return "legendary";
  if (r.includes("ultra")) return "ultra";
  if (r.includes("rare")) return "rare";
  if (r.includes("uncommon")) return "uncommon";

  return "common";
}

function rarityName(rarity) {
  const r = normalizeText(rarity);

  if (r.includes("legendary")) {
    return "Legendary";
  }

  if (r.includes("ultra")) {
    return "Ultra-Rare";
  }

  if (r === "rare" || r.includes(" rare")) {
    return "Rare";
  }

  if (r.includes("uncommon")) {
    return "Uncommon";
  }

  if (r.includes("common")) {
    return "Common";
  }

  return rarity || "";
}

/* =========================================================
   CATEGORY
========================================================= */

function itemCategory(item) {
  const type = normalizeText(item?.type);

  if (
    type.includes("pet wear") ||
    type.includes("petwear") ||
    type.includes("wear")
  ) {
    return "petwear";
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

  if (type.includes("egg")) {
    return "eggs";
  }

  if (type.includes("stroller")) {
    return "strollers";
  }

  if (type.includes("food")) {
    return "food";
  }

  if (type.includes("sticker")) {
    return "stickers";
  }

  return "pets";
}

function categoryLabel(category) {
  const labels = {
    all: "ALL",
    pets: "PETS",
    petwear: "PET WEAR",
    eggs: "EGGS",
    vehicles: "VEHICLES",
    toys: "TOYS",
    gifts: "GIFTS",
    strollers: "STROLLERS",
    food: "FOOD",
    stickers: "STICKERS"
  };

  return labels[category] || category.toUpperCase();
}

/* =========================================================
   IMAGE
========================================================= */

function imageURL(item) {
  const image = item?.image || "";

  if (!image) {
    return "";
  }

  if (
    image.startsWith("http://") ||
    image.startsWith("https://")
  ) {
    return image;
  }

  return (
    IMAGE_BASE +
    "/" +
    image.replace(/^\/+/, "")
  );
}

function imageHTML(item, className = "pet-photo") {
  const src = imageURL(item);

  return `
    <img
      src="${escapeHTML(src)}"
      alt="${escapeHTML(item?.name || "Item")}"
      class="${escapeHTML(className)}"
      loading="lazy"
      onerror="this.classList.add('image-error')"
    >
  `;
}

/* =========================================================
   VALUE SYSTEM

   Database structure:

   regular.value
   regular.no_potion
   regular.ride
   regular.fly
   regular.fly_ride

   neon.value
   neon.no_potion
   neon.ride
   neon.fly
   neon.fly_ride

   mega.value
   mega.no_potion
   mega.ride
   mega.fly
   mega.fly_ride
========================================================= */

function getValue(
  item,
  form = "D",
  potion = "normal"
) {
  if (!item) {
    return 0;
  }

  let group = item.regular || {};

  if (form === "N") {
    group =
      item.neon ||
      item.regular ||
      {};
  }

  if (form === "M") {
    group =
      item.mega ||
      item.neon ||
      item.regular ||
      {};
  }

  let key = "value";

  if (potion === "normal") {
    key = "no_potion";

    if (
      group.no_potion === undefined
    ) {
      key = "value";
    }
  }

  if (potion === "ride") {
    key = "ride";
  }

  if (potion === "fly") {
    key = "fly";
  }

  if (potion === "flyride") {
    key = "fly_ride";
  }

  const result =
    Number(group[key]);

  if (Number.isFinite(result)) {
    return result;
  }

  const fallback =
    Number(group.value);

  return Number.isFinite(fallback)
    ? fallback
    : 0;
}

/* =========================================================
   PROFILE
========================================================= */

const DEFAULT_PROFILE = {
  name: "Zayaxra Kullanıcısı",

  username: "@kullanici",

  bio:
    "Henüz bir biyografi eklenmedi.",

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
      localStorage.getItem(
        "zayaxra_profile"
      ) ||
      localStorage.getItem(
        "zayagg_profile"
      );

    if (!raw) {
      return JSON.parse(
        JSON.stringify(
          DEFAULT_PROFILE
        )
      );
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
    return JSON.parse(
      JSON.stringify(
        DEFAULT_PROFILE
      )
    );
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
    $("profileName").textContent =
      profileData.name;
  }

  if ($("profileUsername")) {
    $("profileUsername").textContent =
      profileData.username.startsWith("@")
        ? profileData.username
        : "@" + profileData.username;
  }

  if ($("profileBio")) {
    $("profileBio").textContent =
      profileData.bio;
  }

  if ($("profileAvatar")) {
    $("profileAvatar").textContent =
      profileData.avatar;
  }

  if ($("profileTrades")) {
    $("profileTrades").textContent =
      profileData.stats.trades;
  }

  if ($("profileWins")) {
    $("profileWins").textContent =
      profileData.stats.wins;
  }

  if ($("profileFair")) {
    $("profileFair").textContent =
      profileData.stats.fairs;
  }

  if ($("profileLoses")) {
    $("profileLoses").textContent =
      profileData.stats.loses;
  }
}

function openProfile() {
  renderProfile();

  $("profileModal")
    ?.classList.add(
      "show",
      "open"
    );

  $("profileModal")
    ?.setAttribute(
      "aria-hidden",
      "false"
    );

  document.body.classList.add(
    "profile-open"
  );
}

function closeProfile() {
  $("profileModal")
    ?.classList.remove(
      "show",
      "open"
    );

  $("profileModal")
    ?.setAttribute(
      "aria-hidden",
      "true"
    );

  document.body.classList.remove(
    "profile-open"
  );

  closeEditProfile();
}

function renderAvatars() {
  const box =
    $("avatarPick");

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

  avatars.forEach(
    (avatar) => {
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

      button.onclick = () => {
        profileData.avatar =
          avatar;

        box
          .querySelectorAll(
            ".avatar-opt"
          )
          .forEach(
            (element) =>
              element.classList.remove(
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
    }
  );
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
      profileData.username.replace(
        /^@/,
        ""
      );
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

function saveEditedProfile(
  event
) {
  event?.preventDefault();

  const name =
    ($("editName")?.value || "")
      .trim();

  const username =
    ($("editUsername")?.value || "")
      .trim();

  const bio =
    ($("editBio")?.value || "")
      .trim();

  if (!name || !username) {
    return;
  }

  profileData.name =
    name;

  profileData.username =
    username.startsWith("@")
      ? username
      : "@" + username;

  profileData.bio =
    bio ||
    DEFAULT_PROFILE.bio;

  saveProfile();

  renderProfile();

  closeEditProfile();
}

/* =========================================================
   PICKER ELEMENTS
========================================================= */

function pickerModal() {
  return (
    $("petPicker") ||
    $("petPickerModal")
  );
}

function pickerSearch() {
  return (
    $("petSearch") ||
    $("pickerSearch")
  );
}

function pickerGrid() {
  return (
    $("pickerPets") ||
    $("pickerPetList")
  );
}

/* =========================================================
   CATEGORY BAR
========================================================= */

function createCategoryBar() {
  const modal =
    pickerModal();

  if (!modal) return;

  const windowEl =
    modal.querySelector(
      ".profile-window"
    );

  if (!windowEl) return;

  let bar =
    windowEl.querySelector(
      ".zayaxra-category-sidebar"
    );

  if (!bar) {
    bar =
      document.createElement(
        "div"
      );

    bar.className =
      "zayaxra-category-sidebar";

    const search =
      windowEl.querySelector(
        ".modal-search"
      );

    if (search) {
      search.before(bar);
    } else {
      windowEl.prepend(bar);
    }
  }

  bar.innerHTML = "";

  const categories = [
    "all",
    "pets",
    "petwear",
    "eggs",
    "vehicles",
    "toys",
    "gifts",
    "strollers",
    "food",
    "stickers"
  ];

  categories.forEach(
    (category) => {
      const button =
        document.createElement(
          "button"
        );

      button.type = "button";

      button.textContent =
        categoryLabel(
          category
        );

      button.className =
        "zayaxra-category-btn" +
        (
          category ===
          pickerCategory
            ? " active"
            : ""
        );

      button.onclick = (
        event
      ) => {
        event.preventDefault();
        event.stopPropagation();

        pickerCategory =
          category;

        createCategoryBar();

        renderPicker();
      };

      bar.appendChild(
        button
      );
    }
  );
}

/* =========================================================
   D N M F R CONTROLS
========================================================= */

function setupVariantControls() {
  const options =
    document.querySelector(
      ".picker-options"
    );

  if (!options) return;

  const oldForm =
    options.querySelector(
      ".form-toggles"
    );

  const oldPotion =
    options.querySelector(
      ".potion-toggles"
    );

  if (!oldForm && !oldPotion) {
    return;
  }

  let row =
    options.querySelector(
      ".zayaxra-variant-row"
    );

  if (!row) {
    row =
      document.createElement(
        "div"
      );

    row.className =
      "zayaxra-variant-row";

    options.prepend(row);
  }

  row.innerHTML = "";

  const buttons = [
    {
      element:
        oldForm?.querySelector(
          "#normalFormBtn"
        ),
      text: "D",
      type: "D"
    },
    {
      element:
        oldForm?.querySelector(
          "#btnNeon"
        ),
      text: "N",
      type: "N"
    },
    {
      element:
        oldForm?.querySelector(
          "#btnMega"
        ),
      text: "M",
      type: "M"
    },
    {
      element:
        oldPotion?.querySelector(
          "#btnFly"
        ),
      text: "F",
      type: "F"
    },
    {
      element:
        oldPotion?.querySelector(
          "#btnRide"
        ),
      text: "R",
      type: "R"
    }
  ];

  buttons.forEach(
    ({
      element,
      text,
      type
    }) => {
      let button =
        element;

      if (!button) {
        button =
          document.createElement(
            "button"
          );

        button.type =
          "button";
      }

      button.textContent =
        text;

      button.className =
        "form-btn";

      button.onclick =
        (event) => {
          event.preventDefault();
          event.stopPropagation();

          if (
            type === "D" ||
            type === "N" ||
            type === "M"
          ) {
            selectedForm =
              type;
          }

          if (type === "F") {
            selectedPotion =
              selectedPotion ===
              "fly"
                ? "normal"
                : "fly";
          }

          if (type === "R") {
            selectedPotion =
              selectedPotion ===
              "ride"
                ? "normal"
                : "ride";
          }

          updateVariantButtons();

          renderPreview();

          renderPicker();
        };

      row.appendChild(
        button
      );
    }
  );

  updateVariantButtons();
}

function updateVariantButtons() {
  const buttons =
    document.querySelectorAll(
      ".zayaxra-variant-row button"
    );

  buttons.forEach(
    (button) => {
      const text =
        button.textContent
          .trim()
          .toUpperCase();

      let active =
        false;

      if (
        text === "D"
      ) {
        active =
          selectedForm === "D";
      }

      if (
        text === "N"
      ) {
        active =
          selectedForm === "N";
      }

      if (
        text === "M"
      ) {
        active =
          selectedForm === "M";
      }

      if (
        text === "F"
      ) {
        active =
          selectedPotion ===
          "fly";
      }

      if (
        text === "R"
      ) {
        active =
          selectedPotion ===
          "ride";
      }

      button.classList.toggle(
        "active",
        active
      );
    }
  );

  $("normalFormBtn")
    ?.classList.toggle(
      "active",
      selectedForm === "D"
    );

  $("btnNeon")
    ?.classList.toggle(
      "active",
      selectedForm === "N"
    );

  $("btnMega")
    ?.classList.toggle(
      "active",
      selectedForm === "M"
    );

  $("btnFly")
    ?.classList.toggle(
      "active",
      selectedPotion === "fly"
    );

  $("btnRide")
    ?.classList.toggle(
      "active",
      selectedPotion === "ride"
    );
}

/* =========================================================
   OPEN PICKER
========================================================= */

function openPetPicker(side) {
  pickerSide =
    side;

  selectedItem =
    null;

  selectedForm =
    "D";

  selectedPotion =
    "normal";

  pickerCategory =
    "all";

  const title =
    $("petPickerTitle");

  if (title) {
    title.textContent =
      side === "you"
        ? "Senin teklifine item ekle"
        : "Karşı tarafın teklifine item ekle";
  }

  const search =
    pickerSearch();

  if (search) {
    search.value = "";
  }

  createCategoryBar();
  setupVariantControls();

  renderPreview();
  renderPicker();

  const modal =
    pickerModal();

  if (!modal) {
    return;
  }

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

  setTimeout(
    () => {
      pickerSearch()
        ?.focus();
    },
    50
  );
}

function closePetPicker() {
  const modal =
    pickerModal();

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

  pickerSide =
    null;

  selectedItem =
    null;
}

/* =========================================================
   FILTER
========================================================= */

function filteredPickerItems() {
  const query =
    normalizeText(
      pickerSearch()?.value ||
      ""
    );

  return items.filter(
    (item) => {

      const categoryMatch =
        pickerCategory ===
          "all" ||
        itemCategory(item) ===
          pickerCategory;

      const searchMatch =
        !query ||
        normalizeText(
          item.name
        ).includes(query) ||
        normalizeText(
          item.rarity
        ).includes(query) ||
        normalizeText(
          item.type
        ).includes(query);

      return (
        categoryMatch &&
        searchMatch
      );
    }
  );
}

/* =========================================================
   RENDER PICKER
========================================================= */

function renderPicker() {
  const grid =
    pickerGrid();

  if (!grid) {
    return;
  }

  if (!items.length) {
    grid.innerHTML = `
      <div class="zayaxra-loading">
        Adopt Me itemleri yükleniyor...
      </div>
    `;

    return;
  }

  const list =
    filteredPickerItems();

  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-picker">
        <span>🔎</span>
        <strong>Item bulunamadı</strong>
        <small>
          Arama veya kategoriyi değiştir.
        </small>
      </div>
    `;

    return;
  }

  const fragment =
    document.createDocumentFragment();

  list.forEach(
    (item) => {

      const button =
        document.createElement(
          "button"
        );

      button.type =
        "button";

      button.className =
        "pet-choice" +
        (
          selectedItem?.id ===
          item.id
            ? " selected"
            : ""
        );

      const currentValue =
        getValue(
          item,
          selectedForm,
          selectedPotion
        );

      button.innerHTML = `
        <div class="choice-image">
          ${imageHTML(item)}
        </div>

        <strong>
          ${escapeHTML(
            item.name
          )}
        </strong>

        <span
          class="
            rarity-tag
            ${rarityClass(
              item.rarity
            )}
          "
        >
          ${escapeHTML(
            rarityName(
              item.rarity
            )
          )}
        </span>

        <small>
          ${formatValue(
            currentValue
          )}
        </small>
      `;

      button.onclick =
        (event) => {
          event.preventDefault();
          event.stopPropagation();

          selectedItem =
            item;

          renderPreview();

          grid
            .querySelectorAll(
              ".pet-choice"
            )
            .forEach(
              (element) =>
                element.classList.remove(
                  "selected"
                )
            );

          button.classList.add(
            "selected"
          );

          const confirm =
            $("confirmPetBtn");

          if (confirm) {
            confirm.disabled =
              false;
          }
        };

      fragment.appendChild(
        button
      );
    }
  );

  grid.appendChild(
    fragment
  );

  updateVariantButtons();
}

/* =========================================================
   PREVIEW
========================================================= */

function renderPreview() {
  const box =
    $("pickerPreview");

  if (!box) {
    return;
  }

  if (!selectedItem) {
    box.innerHTML = "";

    if ($("pickerValue")) {
      $("pickerValue")
        .textContent = "0";
    }

    if ($("confirmPetBtn")) {
      $("confirmPetBtn")
        .disabled = true;
    }

    return;
  }

  const value =
    getValue(
      selectedItem,
      selectedForm,
      selectedPotion
    );

  box.innerHTML = `
    <div class="pet-image-wrap">

      ${
        selectedForm === "N"
          ? `<div class="neon-effect"></div>`
          : ""
      }

      ${
        selectedForm === "M"
          ? `<div class="mega-effect"></div>`
          : ""
      }

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

        ${
          selectedPotion === "flyride"
            ? `
              <span class="mini-chip fly">
                F
              </span>
              <span class="mini-chip ride">
                R
              </span>
            `
            : ""
        }

      </div>

    </div>

    <div class="preview-info">

      <strong>
        ${escapeHTML(
          selectedItem.name
        )}
      </strong>

      <span>
        ${escapeHTML(
          rarityName(
            selectedItem.rarity
          )
        )}
      </span>

      <b>
        ${formatValue(
          value
        )}
      </b>

    </div>
  `;

  if ($("pickerValue")) {
    $("pickerValue")
      .textContent =
      formatValue(value);
  }

  if ($("confirmPetBtn")) {
    $("confirmPetBtn")
      .disabled = false;
  }
}

/* =========================================================
   COMPATIBILITY BUTTONS
========================================================= */

function toggleForm(form) {
  const value =
    normalizeText(form);

  if (
    value === "normal" ||
    value === "d"
  ) {
    selectedForm =
      "D";
  }

  if (
    value === "neon" ||
    value === "n"
  ) {
    selectedForm =
      "N";
  }

  if (
    value === "mega" ||
    value === "m"
  ) {
    selectedForm =
      "M";
  }

  updateVariantButtons();

  renderPreview();

  renderPicker();
}

function togglePotion(type) {
  const value =
    normalizeText(type);

  if (
    value === "none" ||
    value === "normal"
  ) {
    selectedPotion =
      "normal";
  }

  if (
    value === "fly"
  ) {
    selectedPotion =
      selectedPotion ===
      "fly"
        ? "normal"
        : "fly";
  }

  if (
    value === "ride"
  ) {
    selectedPotion =
      selectedPotion ===
      "ride"
        ? "normal"
        : "ride";
  }

  if (
    value === "flyride"
  ) {
    selectedPotion =
      selectedPotion ===
      "flyride"
        ? "normal"
        : "flyride";
  }

  updateVariantButtons();

  renderPreview();

  renderPicker();
}

/* =========================================================
   CONFIRM ITEM
========================================================= */

function confirmAddPet() {
  if (
    !selectedItem ||
    !pickerSide
  ) {
    return;
  }

  const item =
    {
      ...selectedItem,

      uniqueId:
        Date.now() +
        "_" +
        Math.random()
          .toString(36)
          .slice(2),

      form:
        selectedForm,

      potion:
        selectedPotion,

      value:
        getValue(
          selectedItem,
          selectedForm,
          selectedPotion
        )
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
}

/* =========================================================
   TRADE
========================================================= */

function calculateTotal(
  trade
) {
  return trade.reduce(
    (sum, item) =>
      sum +
      Number(
        item.value || 0
      ),
    0
  );
}

/* IMPORTANT:
   CSS'in trade-slot yapısına göre
   trade kartlarını gerçekten trade-slot olarak üret.
*/

function tradeItemHTML(
  item
) {
  const badges = [];

  if (
    item.form === "N"
  ) {
    badges.push(`
      <span class="
        trade-slot-badge
        neon
      ">
        N
      </span>
    `);
  }

  if (
    item.form === "M"
  ) {
    badges.push(`
      <span class="
        trade-slot-badge
        mega
      ">
        M
      </span>
    `);
  }

  if (
    item.potion ===
    "fly"
  ) {
    badges.push(`
      <span class="
        trade-slot-badge
        fly
      ">
        F
      </span>
    `);
  }

  if (
    item.potion ===
    "ride"
  ) {
    badges.push(`
      <span class="
        trade-slot-badge
        ride
      ">
        R
      </span>
    `);
  }

  if (
    item.potion ===
    "flyride"
  ) {
    badges.push(`
      <span class="
        trade-slot-badge
        fly
      ">
        F
      </span>

      <span class="
        trade-slot-badge
        ride
      ">
        R
      </span>
    `);
  }

  return `
    <div
      class="trade-slot"
      data-trade-id="${escapeHTML(
        item.uniqueId
      )}"
    >

      ${
        item.form === "N"
          ? `<div class="neon-effect"></div>`
          : ""
      }

      ${
        item.form === "M"
          ? `<div class="mega-effect"></div>`
          : ""
      }

      <div class="trade-slot-image">
        ${imageHTML(
          item,
          "trade-slot-photo"
        )}
      </div>

      <div class="trade-slot-name">
        ${escapeHTML(
          item.name
        )}
      </div>

      <div class="trade-slot-value">
        ${formatValue(
          item.value
        )}
      </div>

      <div class="trade-slot-badges">
        ${badges.join("")}
      </div>

      <button
        type="button"
        class="remove-item"
        data-remove-id="${escapeHTML(
          item.uniqueId
        )}"
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
  const element =
    $(elementId);

  if (!element) {
    return;
  }

  if (!trade.length) {
    element.innerHTML = `
      <div
        class="
          empty-items
          trade-empty
        "
      >

        <span class="empty-plus">
          ＋
        </span>

        <strong>
          ${
            side === "you"
              ? "Henüz pet eklenmedi"
              : "Henüz pet eklenmedi"
          }
        </strong>

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

  element.innerHTML =
    trade
      .map(
        (item) =>
          tradeItemHTML(
            item
          )
      )
      .join("");

  element
    .querySelectorAll(
      ".trade-slot"
    )
    .forEach(
      (card) => {

        const remove =
          card.querySelector(
            ".remove-item"
          );

        if (remove) {
          remove.onclick =
            (event) => {
              event.stopPropagation();

              removeTradePet(
                side,
                remove.dataset
                  .removeId
              );
            };
        }

      }
    );
}

function removeTradePet(
  side,
  id
) {
  if (
    side === "you"
  ) {
    youTrade =
      youTrade.filter(
        (item) =>
          item.uniqueId !==
          id
      );
  } else {
    themTrade =
      themTrade.filter(
        (item) =>
          item.uniqueId !==
          id
      );
  }

  updateTradeUI();
}

function clearTrade() {
  youTrade = [];
  themTrade = [];

  updateTradeUI();
}

/* =========================================================
   RESULT
========================================================= */

let recordedTradeKey =
  "";

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
    $("youTotal")
      .textContent =
      formatValue(
        youTotal
      );
  }

  if ($("themTotal")) {
    $("themTotal")
      .textContent =
      formatValue(
        themTotal
      );
  }

  updateResult(
    youTotal,
    themTotal
  );
}

function updateResult(
  youTotal,
  themTotal
) {
  const card =
    $("resultCard");

  const status =
    $("resultStatusText");

  const diff =
    $("resultDiffDisplay");

  const statusLabel =
    $("tradeStatusLabel");

  const statusNumber =
    $("resultDiffNumber");

  const statusBar =
    $("tradeStatusBar");

  card?.classList.remove(
    "win",
    "lose",
    "fair",
    "big-win",
    "big-lose",
    "small-win",
    "small-lose"
  );

  statusBar?.classList.remove(
    "big-win",
    "small-win",
    "fair",
    "small-lose",
    "big-lose"
  );

  if (
    !youTotal &&
    !themTotal
  ) {
    if (status) {
      status.textContent =
        "Pet ekleyerek başla";
    }

    if (diff) {
      diff.textContent =
        "—";
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
        "İki tarafa da pet ekle";
    }

    if (diff) {
      diff.textContent =
        "—";
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
    themTotal -
    youTotal;

  const percent =
    youTotal
      ? (difference /
          youTotal) *
        100
      : 0;

  let state =
    "fair";

  let label =
    "FAIR";

  if (
    percent >= 10
  ) {
    state =
      "big-win";

    label =
      "BIG WIN";
  } else if (
    percent > 3
  ) {
    state =
      "small-win";

    label =
      "SMALL WIN";
  } else if (
    percent <= -10
  ) {
    state =
      "big-lose";

    label =
      "BIG LOSE";
  } else if (
    percent < -3
  ) {
    state =
      "small-lose";

    label =
      "SMALL LOSE";
  }

  card?.classList.add(
    state
  );

  statusBar?.classList.add(
    state
  );

  if (
    state.includes("win")
  ) {
    card?.classList.add(
      "win"
    );
  }

  if (
    state.includes("lose")
  ) {
    card?.classList.add(
      "lose"
    );
  }

  if (
    state === "fair"
  ) {
    card?.classList.add(
      "fair"
    );
  }

  const signed =
    difference > 0
      ? "+" +
        formatValue(
          difference
        )
      : formatValue(
          difference
        );

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
    state.includes("win")
      ? "win"
      : state.includes(
          "lose"
        )
      ? "lose"
      : "fair"
  );
}

/* =========================================================
   PROFILE TRADE RECORD
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

  const key =
    youTrade
      .map(
        (item) =>
          item.uniqueId
      )
      .join(",") +
    "|" +
    themTrade
      .map(
        (item) =>
          item.uniqueId
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
    status === "win"
  ) {
    profileData.stats.wins++;
  }

  if (
    status === "fair"
  ) {
    profileData.stats.fairs++;
  }

  if (
    status === "lose"
  ) {
    profileData.stats.loses++;
  }

  saveProfile();

  renderProfile();
}

/* =========================================================
   INFO
========================================================= */

function openInfo(
  event
) {
  event?.preventDefault();

  $("infoModal")
    ?.classList.add(
      "show",
      "open"
    );

  $("infoModal")
    ?.setAttribute(
      "aria-hidden",
      "false"
    );

  document.body.classList.add(
    "profile-open"
  );
}

function closeInfo() {
  $("infoModal")
    ?.classList.remove(
      "show",
      "open"
    );

  $("infoModal")
    ?.setAttribute(
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
   SEARCH
========================================================= */

function renderValues() {
  const grid =
    $("valueGrid");

  if (!grid) {
    return;
  }

  const search =
    normalizeText(
      $("search")
        ?.value || ""
    );

  const results =
    items.filter(
      (item) =>
        !search ||
        normalizeText(
          item.name
        ).includes(search) ||
        normalizeText(
          item.type
        ).includes(search)
    );

  grid.innerHTML = "";

  results
    .slice(0, 300)
    .forEach(
      (item) => {
        const card =
          document.createElement(
            "div"
          );

        card.className =
          "value-card";

        card.innerHTML = `
          <div class="value-image">
            ${imageHTML(
              item
            )}
          </div>

          <div class="value-info">

            <h3>
              ${escapeHTML(
                item.name
              )}
            </h3>

            <span
              class="
                rarity-small
                ${rarityClass(
                  item.rarity
                )}
              "
            >
              ${escapeHTML(
                rarityName(
                  item.rarity
                )
              )}
            </span>

            <small>
              ${escapeHTML(
                categoryLabel(
                  itemCategory(
                    item
                  )
                )
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

        grid.appendChild(
          card
        );
      }
    );
}

/* =========================================================
   DATA
========================================================= */

async function loadData() {
  const grid =
    pickerGrid();

  if (grid) {
    grid.innerHTML = `
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
          cache:
            "no-store"
        }
      );

    if (
      !response.ok
    ) {
      throw new Error(
        "HTTP " +
          response.status
      );
    }

    const data =
      await response.json();

    if (
      !Array.isArray(data)
    ) {
      throw new Error(
        "JSON array değil."
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

    createCategoryBar();
    setupVariantControls();

    renderPicker();
    renderValues();

    renderProfile();

    updateTradeUI();

  } catch (error) {

    console.error(
      "ZAYAXRA DATA ERROR:",
      error
    );

    if (grid) {
      grid.innerHTML = `
        <div class="empty-picker">

          <span>⚠️</span>

          <strong>
            Veriler yüklenemedi
          </strong>

          <small>
            Sayfayı yenile ve internet bağlantını kontrol et.
          </small>

        </div>
      `;
    }
  }
}

/* =========================================================
   GLOBAL EVENTS
========================================================= */

document.addEventListener(
  "click",
  (event) => {

    if (
      event.target ===
      pickerModal()
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
      event.key ===
      "Escape"
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

  createCategoryBar();

  setupVariantControls();

  const search =
    $("search");

  if (search) {
    search.addEventListener(
      "input",
      renderValues
    );
  }

  const petSearch =
    pickerSearch();

  if (petSearch) {
    petSearch.addEventListener(
      "input",
      renderPicker
    );
  }

  updateTradeUI();

  loadData();
}

/* =========================================================
   GLOBAL FUNCTIONS FOR HTML
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

window.toggleForm =
  toggleForm;

window.togglePotion =
  togglePotion;

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

document.addEventListener(
  "DOMContentLoaded",
  initZayaxra
);
