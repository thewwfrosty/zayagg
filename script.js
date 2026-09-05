/* =========================================================
   ZAYAGG — ADOPT ME TRADE CALCULATOR
   ========================================================= */


/* =========================================================
   BADGE ICONS
   ========================================================= */

const BADGES = {
  fly: "https://static.wikia.nocookie.net/adoptme/images/1/1a/Fly_Potion.png",
  ride: "https://static.wikia.nocookie.net/adoptme/images/a/a3/Ride_Potion.png",
  neon: "https://static.wikia.nocookie.net/adoptme/images/7/77/Neon_Icon.png",
  mega: "https://static.wikia.nocookie.net/adoptme/images/3/30/Mega_Neon_Icon.png"
};


/* =========================================================
   PET DATABASE
   ========================================================= */

const PET_DATABASE = [

  {
    id: "shadow_dragon",
    name: "Shadow Dragon",
    rarity: "legendary",
    value: 125,
    image: "https://static.wikia.nocookie.net/adoptme/images/a/a6/Shadow_Dragon.png"
  },

  {
    id: "bat_dragon",
    name: "Bat Dragon",
    rarity: "legendary",
    value: 110,
    image: "https://static.wikia.nocookie.net/adoptme/images/8/87/Bat_Dragon.png"
  },

  {
    id: "frost_dragon",
    name: "Frost Dragon",
    rarity: "legendary",
    value: 58,
    image: "https://static.wikia.nocookie.net/adoptme/images/3/36/Frost_Dragon.png"
  },

  {
    id: "giraffe",
    name: "Giraffe",
    rarity: "legendary",
    value: 70,
    image: "https://static.wikia.nocookie.net/adoptme/images/e/e0/Giraffe.png"
  },

  {
    id: "crow",
    name: "Crow",
    rarity: "legendary",
    value: 28,
    image: "https://static.wikia.nocookie.net/adoptme/images/a/a3/Crow.png"
  },

  {
    id: "turtle",
    name: "Turtle",
    rarity: "ultra",
    value: 12,
    image: "https://static.wikia.nocookie.net/adoptme/images/0/0a/Turtle.png"
  }

];


/* =========================================================
   AVATARS
   ========================================================= */

const AVATAR_OPTIONS = [
  "🐉",
  "🐶",
  "🐱",
  "🦊",
  "🐼",
  "🦄",
  "🐧",
  "🐢"
];


/* =========================================================
   STATE
   ========================================================= */

let youTrade = [];
let themTrade = [];

let activeSide = null;

let selectedPet = null;

let isFly = false;
let isRide = false;

let petForm = "regular";

let editingAvatar = "🐉";


/* =========================================================
   SAFE STORAGE
   ========================================================= */

function getStorageJSON(key, fallback) {

  try {

    const data = localStorage.getItem(key);

    if (!data) {
      return fallback;
    }

    return JSON.parse(data);

  } catch (error) {

    console.warn("Zayagg storage error:", error);

    return fallback;
  }
}


/* =========================================================
   PAGE START
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  renderValues();

  updateTradeUI();

  renderProfile();

  setupModalEvents();

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

  document.body.classList.toggle("menu-open");

}


function closeMenu() {

  document.body.classList.remove("menu-open");

}


/* =========================================================
   MODAL EVENTS
   ========================================================= */

function setupModalEvents() {

  const profileModal = document.getElementById("profileModal");
  const petModal = document.getElementById("petPickerModal");

  if (profileModal) {

    profileModal.addEventListener("click", (event) => {

      if (event.target === profileModal) {
        closeProfile();
      }

    });

  }


  if (petModal) {

    petModal.addEventListener("click", (event) => {

      if (event.target === petModal) {
        closePetPicker();
      }

    });

  }


  document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") {
      return;
    }

    closeProfile();

    closePetPicker();

    closeMenu();

  });

}


/* =========================================================
   VALUE CALCULATION
   ========================================================= */

function calculatePetValue(baseVal, form, fly, ride) {

  let multiplier = 1;

  if (form === "neon") {
    multiplier = 4;
  }

  if (form === "mega") {
    multiplier = 16;
  }


  let extra = 0;

  if (fly) {
    extra += 1.5;
  }

  if (ride) {
    extra += 1;
  }


  return Number(
    ((baseVal * multiplier) + extra).toFixed(1)
  );

}


/* =========================================================
   PET PICKER
   ========================================================= */

function openPetPicker(side) {

  activeSide = side;

  resetPickerState();

  renderPickerList();

  const modal = document.getElementById("petPickerModal");

  if (modal) {

    modal.classList.add("show");

    modal.setAttribute("aria-hidden", "false");

  }

  document.body.classList.add("profile-open");

  setTimeout(() => {

    document.getElementById("pickerSearch")?.focus();

  }, 100);

}


function closePetPicker() {

  const modal = document.getElementById("petPickerModal");

  if (modal) {

    modal.classList.remove("show");

    modal.setAttribute("aria-hidden", "true");

  }

  document.body.classList.remove("profile-open");

  activeSide = null;

}


function resetPickerState() {

  selectedPet = null;

  isFly = false;

  isRide = false;

  petForm = "regular";


  document.getElementById("btnFly")?.classList.remove("active");

  document.getElementById("btnRide")?.classList.remove("active");

  document.getElementById("btnNeon")?.classList.remove("active");

  document.getElementById("btnMega")?.classList.remove("active");

  document.getElementById("pickerBar")?.classList.add("hidden");


  const search = document.getElementById("pickerSearch");

  if (search) {
    search.value = "";
  }

}


/* =========================================================
   PET SEARCH
   ========================================================= */

function filterPickerPets() {

  const input = document.getElementById("pickerSearch");

  const value = input?.value || "";

  renderPickerList(value);

}


function renderPickerList(filterText = "") {

  const grid = document.getElementById("pickerPetList");

  if (!grid) {
    return;
  }


  const searchText = filterText
    .trim()
    .toLowerCase();


  const filtered = PET_DATABASE.filter((pet) => {

    return pet.name
      .toLowerCase()
      .includes(searchText);

  });


  if (filtered.length === 0) {

    grid.innerHTML = `
      <div class="empty-picker">
        <span>🔎</span>
        <strong>Pet bulunamadı</strong>
        <small>Başka bir isim dene.</small>
      </div>
    `;

    return;
  }


  grid.innerHTML = filtered.map((pet) => {

    const selected =
      selectedPet?.id === pet.id
        ? "selected"
        : "";


    return `
      <button
        type="button"
        class="pet-choice ${selected}"
        onclick="selectPickerPet('${pet.id}')"
      >

        <div class="choice-image">

          <img
            src="${pet.image}"
            alt="${pet.name}"
            class="pet-photo"
            loading="lazy"
            onerror="handleImageError(this)"
          >

        </div>

        <strong>
          ${pet.name}
        </strong>

        <span class="rarity-tag ${pet.rarity}">
          ${pet.rarity.toUpperCase()}
        </span>

        <small>
          ${pet.value} Value
        </small>

      </button>
    `;

  }).join("");

}


/* =========================================================
   SELECT PET
   ========================================================= */

function selectPickerPet(id) {

  selectedPet =
    PET_DATABASE.find(
      (pet) => pet.id === id
    ) || null;


  renderPickerList(
    document.getElementById("pickerSearch")?.value || ""
  );


  document
    .getElementById("pickerBar")
    ?.classList.remove("hidden");


  updatePickerBar();

}


/* =========================================================
   NEON / MEGA
   ========================================================= */

function toggleForm(type) {

  if (petForm === type) {

    petForm = "regular";

  } else {

    petForm = type;

  }


  document
    .getElementById("btnNeon")
    ?.classList.toggle(
      "active",
      petForm === "neon"
    );


  document
    .getElementById("btnMega")
    ?.classList.toggle(
      "active",
      petForm === "mega"
    );


  updatePickerBar();

}


/* =========================================================
   FLY / RIDE
   ========================================================= */

function togglePotion(type) {

  if (type === "fly") {

    isFly = !isFly;

  }


  if (type === "ride") {

    isRide = !isRide;

  }


  document
    .getElementById("btnFly")
    ?.classList.toggle(
      "active",
      isFly
    );


  document
    .getElementById("btnRide")
    ?.classList.toggle(
      "active",
      isRide
    );


  updatePickerBar();

}


/* =========================================================
   PICKER PREVIEW
   ========================================================= */

function updatePickerBar() {

  if (!selectedPet) {
    return;
  }


  const value = calculatePetValue(
    selectedPet.value,
    petForm,
    isFly,
    isRide
  );


  const preview =
    document.getElementById("pickerPreview");


  if (preview) {

    let effect = "";


    if (petForm === "neon") {

      effect = `
        <div class="neon-effect"></div>
      `;

    }


    if (petForm === "mega") {

      effect = `
        <div class="mega-effect"></div>
      `;

    }


    preview.innerHTML = `

      <div class="pet-image-wrap">

        ${effect}

        <img
          src="${selectedPet.image}"
          class="pet-photo"
          alt="${selectedPet.name}"
          onerror="handleImageError(this)"
        >

        <div class="pet-badges">

          ${
            isFly
              ? `
                <img
                  src="${BADGES.fly}"
                  class="badge-img"
                  title="Fly"
                  onerror="this.style.display='none'"
                >
              `
              : ""
          }


          ${
            isRide
              ? `
                <img
                  src="${BADGES.ride}"
                  class="badge-img"
                  title="Ride"
                  onerror="this.style.display='none'"
                >
              `
              : ""
          }


          ${
            petForm === "neon"
              ? `
                <img
                  src="${BADGES.neon}"
                  class="badge-img"
                  title="Neon"
                  onerror="this.style.display='none'"
                >
              `
              : ""
          }


          ${
            petForm === "mega"
              ? `
                <img
                  src="${BADGES.mega}"
                  class="badge-img"
                  title="Mega Neon"
                  onerror="this.style.display='none'"
                >
              `
              : ""
          }

        </div>

      </div>


      <div class="preview-info">

        <strong>
          ${selectedPet.name}
        </strong>

        <span>
          ${selectedPet.rarity.toUpperCase()}
        </span>

        <div class="vchip-row">

          ${
            petForm !== "regular"
              ? `
                <span class="vchip ${petForm}">
                  ${petForm.toUpperCase()}
                </span>
              `
              : ""
          }


          ${
            isFly
              ? `
                <span class="vchip fly">
                  Fly
                </span>
              `
              : ""
          }


          ${
            isRide
              ? `
                <span class="vchip ride">
                  Ride
                </span>
              `
              : ""
          }

        </div>

      </div>

    `;

  }


  const valueElement =
    document.getElementById("pickerValue");


  if (valueElement) {

    valueElement.textContent =
      value.toFixed(1);

  }

}


/* =========================================================
   ADD PET
   ========================================================= */

function confirmAddPet() {

  if (!selectedPet || !activeSide) {
    return;
  }


  const finalValue =
    calculatePetValue(
      selectedPet.value,
      petForm,
      isFly,
      isRide
    );


  const item = {

    id:
      Date.now() +
      Math.floor(Math.random() * 10000),

    name: selectedPet.name,

    image: selectedPet.image,

    value: finalValue,

    isFly: isFly,

    isRide: isRide,

    form: petForm

  };


  if (activeSide === "you") {

    youTrade.push(item);

  } else {

    themTrade.push(item);

  }


  updateTradeUI();

  closePetPicker();

}


/* =========================================================
   TRADE UI
   ========================================================= */

function updateTradeUI() {

  renderTradeList(
    "youItems",
    youTrade,
    "you"
  );


  renderTradeList(
    "themItems",
    themTrade,
    "them"
  );


  const youTotal =
    youTrade.reduce(
      (total, item) =>
        total + Number(item.value),
      0
    );


  const themTotal =
    themTrade.reduce(
      (total, item) =>
        total + Number(item.value),
      0
    );


  const youTotalEl =
    document.getElementById("youTotal");


  const themTotalEl =
    document.getElementById("themTotal");


  if (youTotalEl) {

    youTotalEl.textContent =
      youTotal.toFixed(1);

  }


  if (themTotalEl) {

    themTotalEl.textContent =
      themTotal.toFixed(1);

  }


  const heroYou =
    document.getElementById("heroYouValue");


  const heroThem =
    document.getElementById("heroThemValue");


  if (heroYou) {

    heroYou.textContent =
      youTotal.toFixed(1);

  }


  if (heroThem) {

    heroThem.textContent =
      themTotal.toFixed(1);

  }


  calculateWFL(
    youTotal,
    themTotal
  );

}


/* =========================================================
   TRADE LIST
   ========================================================= */

function renderTradeList(
  elementId,
  list,
  side
) {

  const container =
    document.getElementById(elementId);


  if (!container) {
    return;
  }


  if (list.length === 0) {

    container.innerHTML = `
      <div class="empty-items">
        Henüz pet eklenmedi
      </div>
    `;

    return;

  }


  container.innerHTML =
    list.map((item) => {

      let effect = "";


      if (item.form === "neon") {

        effect = `
          <div class="neon-effect"></div>
        `;

      }


      if (item.form === "mega") {

        effect = `
          <div class="mega-effect"></div>
        `;

      }


      return `

        <div class="trade-item">

          <div class="pet-image-wrap">

            ${effect}

            <img
              src="${item.image}"
              class="pet-photo"
              alt="${item.name}"
              loading="lazy"
              onerror="handleImageError(this)"
            >

            <div class="pet-badges">

              ${
                item.isFly
                  ? `
                    <img
                      src="${BADGES.fly}"
                      class="badge-img"
                      title="Fly"
                      onerror="this.style.display='none'"
                    >
                  `
                  : ""
              }


              ${
                item.isRide
                  ? `
                    <img
                      src="${BADGES.ride}"
                      class="badge-img"
                      title="Ride"
                      onerror="this.style.display='none'"
                    >
                  `
                  : ""
              }


              ${
                item.form === "neon"
                  ? `
                    <img
                      src="${BADGES.neon}"
                      class="badge-img"
                      title="Neon"
                      onerror="this.style.display='none'"
                    >
                  `
                  : ""
              }


              ${
                item.form === "mega"
                  ? `
                    <img
                      src="${BADGES.mega}"
                      class="badge-img"
                      title="Mega Neon"
                      onerror="this.style.display='none'"
                    >
                  `
                  : ""
              }

            </div>

          </div>


          <div class="trade-item-info">

            <strong>
              ${item.name}
            </strong>

            <small>
              Değer: ${Number(item.value).toFixed(1)}
            </small>

            <div class="item-chips">

              ${
                item.form !== "regular"
                  ? `
                    <span class="mini-chip ${item.form}">
                      ${item.form === "mega" ? "MEGA" : "NEON"}
                    </span>
                  `
                  : ""
              }


              ${
                item.isFly
                  ? `
                    <span class="mini-chip fly">
                      FLY
                    </span>
                  `
                  : ""
              }


              ${
                item.isRide
                  ? `
                    <span class="mini-chip ride">
                      RIDE
                    </span>
                  `
                  : ""
              }

            </div>

          </div>


          <button
            type="button"
            class="remove-item"
            onclick="removeItem('${side}', ${item.id})"
            aria-label="Pet kaldır"
          >
            &times;
          </button>

        </div>

      `;

    }).join("");

}


/* =========================================================
   REMOVE ITEM
   ========================================================= */

function removeItem(side, id) {

  if (side === "you") {

    youTrade =
      youTrade.filter(
        (item) => item.id !== id
      );

  } else {

    themTrade =
      themTrade.filter(
        (item) => item.id !== id
      );

  }


  updateTradeUI();

}


/* =========================================================
   CLEAR TRADE
   ========================================================= */

function clearTrade() {

  youTrade = [];

  themTrade = [];

  updateTradeUI();

}


/* =========================================================
   WFL CALCULATOR
   ========================================================= */

function calculateWFL(
  youTotal,
  themTotal
) {

  const card =
    document.getElementById("resultCard");


  const statusText =
    document.getElementById("resultStatusText");


  const diffEl =
    document.getElementById("resultDiffNumber");


  const heroRes =
    document.getElementById("heroResult");


  if (
    !card ||
    !statusText ||
    !diffEl
  ) {
    return;
  }


  card.classList.remove(
    "win",
    "lose",
    "fair"
  );


  if (
    youTotal === 0 &&
    themTotal === 0
  ) {

    statusText.textContent =
      "Pet ekleyerek başla";

    diffEl.textContent = "—";


    if (heroRes) {

      heroRes.textContent = "—";

      heroRes.className = "result";

    }

    return;

  }


  const diff =
    themTotal - youTotal;


  let label;

  let className;


  if (diff > 2) {

    label = "KAZANÇ (WIN)";

    className = "win";

  }

  else if (diff < -2) {

    label = "KAYIP (LOSE)";

    className = "lose";

  }

  else {

    label = "EŞİT (FAIR)";

    className = "fair";

  }


  card.classList.add(className);


  statusText.textContent =
    label;


  diffEl.textContent =
    (diff > 0 ? "+" : "") +
    diff.toFixed(1);


  if (heroRes) {

    heroRes.textContent =
      className.toUpperCase();

    heroRes.className =
      "result " + className;

  }

}


/* =========================================================
   VALUES
   ========================================================= */

function renderValues() {

  const grid =
    document.getElementById("valueGrid");


  if (!grid) {
    return;
  }


  const search =
    document.getElementById("search");


  const searchText =
    search?.value
      ?.trim()
      .toLowerCase() || "";


  const filtered =
    PET_DATABASE.filter(
      (pet) =>
        pet.name
          .toLowerCase()
          .includes(searchText)
    );


  if (filtered.length === 0) {

    grid.innerHTML = `
      <div class="empty-items value-empty">
        🔎 Sonuç bulunamadı
      </div>
    `;

    return;

  }


  grid.innerHTML =
    filtered.map((pet) => `

      <article class="value-card">

        <div class="value-image">

          <img
            src="${pet.image}"
            class="pet-photo"
            alt="${pet.name}"
            loading="lazy"
            onerror="handleImageError(this)"
          >

        </div>


        <div class="value-info">

          <h3>
            ${pet.name}
          </h3>

          <span class="rarity-small ${pet.rarity}">
            ${pet.rarity.toUpperCase()}
          </span>

          <strong>
            ${pet.value}
          </strong>

        </div>

      </article>

    `).join("");

}


/* =========================================================
   PROFILE
   ========================================================= */

function loadProfile() {

  return getStorageJSON(
    "zayagg_profile",
    {
      name: "Zayagg Kullanıcısı",
      username: "@kullanici",
      bio: "Henüz bir biyografi eklenmedi.",
      avatar: "🐉"
    }
  );

}


function saveProfile(profile) {

  try {

    localStorage.setItem(
      "zayagg_profile",
      JSON.stringify(profile)
    );

  } catch (error) {

    console.warn(
      "Profil kaydedilemedi:",
      error
    );

  }

}


function loadStats() {

  return getStorageJSON(
    "zayagg_stats",
    {
      trades: 0,
      win: 0,
      fair: 0,
      lose: 0
    }
  );

}


/* =========================================================
   RENDER PROFILE
   ========================================================= */

function renderProfile() {

  const profile =
    loadProfile();


  const stats =
    loadStats();


  const setText =
    (id, value) => {

      const element =
        document.getElementById(id);

      if (element) {

        element.textContent =
          value;

      }

    };


  setText(
    "profileAvatar",
    profile.avatar
  );


  setText(
    "profileName",
    profile.name
  );


  setText(
    "profileUsername",
    profile.username
  );


  setText(
    "profileBio",
    profile.bio
  );


  setText(
    "tradeCount",
    stats.trades
  );


  setText(
    "winCount",
    stats.win
  );


  setText(
    "fairCount",
    stats.fair
  );


  setText(
    "loseCount",
    stats.lose
  );

}


/* =========================================================
   OPEN PROFILE
   ========================================================= */

function openProfile() {

  renderProfile();

  closeEditProfile();


  const modal =
    document.getElementById("profileModal");


  if (modal) {

    modal.classList.add("show");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  document.body.classList.add(
    "profile-open"
  );

}


/* =========================================================
   CLOSE PROFILE
   ========================================================= */

function closeProfile() {

  const modal =
    document.getElementById("profileModal");


  if (modal) {

    modal.classList.remove("show");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

  }


  document.body.classList.remove(
    "profile-open"
  );

}


/* =========================================================
   EDIT PROFILE
   ========================================================= */

function openEditProfile() {

  const profile =
    loadProfile();


  const nameInput =
    document.getElementById("editName");


  const usernameInput =
    document.getElementById("editUsername");


  const bioInput =
    document.getElementById("editBio");


  if (nameInput) {

    nameInput.value =
      profile.name;

  }


  if (usernameInput) {

    usernameInput.value =
      profile.username.replace(
        /^@/,
        ""
      );

  }


  if (bioInput) {

    bioInput.value =
      profile.bio;

  }


  editingAvatar =
    profile.avatar;


  renderAvatarPicker();


  document
    .getElementById("profileEditForm")
    ?.classList.remove("hidden");


  document
    .getElementById("profileEditBtn")
    ?.classList.add("hidden");

}


/* =========================================================
   CLOSE EDIT
   ========================================================= */

function closeEditProfile() {

  document
    .getElementById("profileEditForm")
    ?.classList.add("hidden");


  document
    .getElementById("profileEditBtn")
    ?.classList.remove("hidden");

}


/* =========================================================
   AVATAR PICKER
   ========================================================= */

function renderAvatarPicker() {

  const wrapper =
    document.getElementById("avatarPick");


  if (!wrapper) {
    return;
  }


  wrapper.innerHTML =
    AVATAR_OPTIONS.map(
      (avatar) => `

        <button
          type="button"
          class="avatar-opt ${
            avatar === editingAvatar
              ? "active"
              : ""
          }"
          onclick="pickAvatar('${avatar}')"
        >
          ${avatar}
        </button>

      `
    ).join("");

}


/* =========================================================
   PICK AVATAR
   ========================================================= */

function pickAvatar(avatar) {

  editingAvatar =
    avatar;

  renderAvatarPicker();

}


/* =========================================================
   SAVE PROFILE
   ========================================================= */

function saveEditedProfile(event) {

  event.preventDefault();


  const name =
    document
      .getElementById("editName")
      ?.value
      .trim() ||
    "Zayagg Kullanıcısı";


  let username =
    document
      .getElementById("editUsername")
      ?.value
      .trim() ||
    "kullanici";


  if (!username.startsWith("@")) {

    username =
      "@" + username;

  }


  const bio =
    document
      .getElementById("editBio")
      ?.value
      .trim() ||
    "Henüz bir biyografi eklenmedi.";


  saveProfile({

    name,

    username,

    bio,

    avatar: editingAvatar

  });


  renderProfile();

  closeEditProfile();

}


/* =========================================================
   IMAGE ERROR
   ========================================================= */

function handleImageError(image) {

  if (!image) {
    return;
  }


  image.onerror = null;


  image.src =
    "https://via.placeholder.com/100x100/15182a/ffffff?text=Pet";

}
