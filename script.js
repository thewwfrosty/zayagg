/* =========================================================
   ZAYAGG — ADOPT ME TRADE CALCULATOR
   ========================================================= */


/* =========================================================
   BADGES
   ========================================================= */

const BADGES = {

  fly:
    "https://static.wikia.nocookie.net/adoptme/images/1/1a/Fly_Potion.png",

  ride:
    "https://static.wikia.nocookie.net/adoptme/images/a/a3/Ride_Potion.png",

  neon:
    "https://static.wikia.nocookie.net/adoptme/images/7/77/Neon_Icon.png",

  mega:
    "https://static.wikia.nocookie.net/adoptme/images/3/30/Mega_Neon_Icon.png"

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
    image:
      "https://static.wikia.nocookie.net/adoptme/images/a/a6/Shadow_Dragon.png"
  },

  {
    id: "bat_dragon",
    name: "Bat Dragon",
    rarity: "legendary",
    value: 110,
    image:
      "https://static.wikia.nocookie.net/adoptme/images/8/87/Bat_Dragon.png"
  },

  {
    id: "frost_dragon",
    name: "Frost Dragon",
    rarity: "legendary",
    value: 58,
    image:
      "https://static.wikia.nocookie.net/adoptme/images/3/36/Frost_Dragon.png"
  },

  {
    id: "giraffe",
    name: "Giraffe",
    rarity: "legendary",
    value: 70,
    image:
      "https://static.wikia.nocookie.net/adoptme/images/e/e0/Giraffe.png"
  },

  {
    id: "crow",
    name: "Crow",
    rarity: "legendary",
    value: 28,
    image:
      "https://static.wikia.nocookie.net/adoptme/images/a/a3/Crow.png"
  },

  {
    id: "turtle",
    name: "Turtle",
    rarity: "ultra",
    value: 12,
    image:
      "https://static.wikia.nocookie.net/adoptme/images/0/0a/Turtle.png"
  }

];


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
   START
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderValues();

    updateTradeUI();

    renderProfile();

  }
);


/* =========================================================
   MOBILE MENU
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
   MODAL BACKGROUND
   ========================================================= */

function handleModalBackgroundClick(
  event,
  modalId
) {

  if (
    event.target.id === modalId
  ) {

    if (
      modalId === "profileModal"
    ) {

      closeProfile();

    } else {

      closePetPicker();

    }

  }

}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") {
      return;
    }

    closeProfile();

    closePetPicker();

  }
);


/* =========================================================
   VALUE CALCULATION
   ========================================================= */

function calculatePetValue(
  baseVal,
  form,
  fly,
  ride
) {

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
    (
      baseVal * multiplier +
      extra
    ).toFixed(1)
  );

}


/* =========================================================
   PET PICKER
   ========================================================= */

function openPetPicker(side) {

  activeSide = side;

  resetPickerState();

  renderPickerList();

  const modal =
    document.getElementById(
      "petPickerModal"
    );

  if (modal) {
    modal.classList.add("show");
  }

  document.body.classList.add(
    "profile-open"
  );

}


function closePetPicker() {

  const modal =
    document.getElementById(
      "petPickerModal"
    );

  if (modal) {
    modal.classList.remove("show");
  }

  document.body.classList.remove(
    "profile-open"
  );

  activeSide = null;

}


function resetPickerState() {

  selectedPet = null;

  isFly = false;

  isRide = false;

  petForm = "regular";


  document
    .getElementById("btnFly")
    ?.classList.remove("active");

  document
    .getElementById("btnRide")
    ?.classList.remove("active");

  document
    .getElementById("btnNeon")
    ?.classList.remove("active");

  document
    .getElementById("btnMega")
    ?.classList.remove("active");


  document
    .getElementById("pickerBar")
    ?.classList.add("hidden");


  const search =
    document.getElementById(
      "pickerSearch"
    );

  if (search) {
    search.value = "";
  }

}


function filterPickerPets() {

  const input =
    document.getElementById(
      "pickerSearch"
    );

  const value =
    input?.value || "";

  renderPickerList(value);

}


function renderPickerList(
  filterText = ""
) {

  const grid =
    document.getElementById(
      "pickerPetList"
    );

  if (!grid) {
    return;
  }


  const search =
    filterText
      .toLowerCase()
      .trim();


  const filtered =
    PET_DATABASE.filter(
      pet =>
        pet.name
          .toLowerCase()
          .includes(search)
    );


  if (
    filtered.length === 0
  ) {

    grid.innerHTML = `
      <div class="empty-items">
        Sonuç bulunamadı
      </div>
    `;

    return;

  }


  grid.innerHTML =
    filtered
      .map(
        pet => `

          <div
            class="pet-choice ${
              selectedPet?.id === pet.id
                ? "selected"
                : ""
            }"
            onclick="
              selectPickerPet('${pet.id}')
            "
          >

            <img
              src="${pet.image}"
              alt="${pet.name}"
              class="pet-photo"
              onerror="
                this.src='https://via.placeholder.com/80?text=Pet'
              "
            >

            <strong>
              ${pet.name}
            </strong>

            <span
              class="rarity-tag ${pet.rarity}"
            >
              ${pet.rarity.toUpperCase()}
            </span>

          </div>

        `
      )
      .join("");

}


function selectPickerPet(id) {

  selectedPet =
    PET_DATABASE.find(
      pet => pet.id === id
    ) || null;


  renderPickerList(
    document
      .getElementById("pickerSearch")
      ?.value || ""
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

  petForm =
    petForm === type
      ? "regular"
      : type;


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
   PICKER BAR
   ========================================================= */

function updatePickerBar() {

  if (!selectedPet) {
    return;
  }


  const value =
    calculatePetValue(
      selectedPet.value,
      petForm,
      isFly,
      isRide
    );


  const preview =
    document.getElementById(
      "pickerPreview"
    );


  if (preview) {

    let glow = "";

    if (petForm === "neon") {

      glow =
        '<div class="neon-effect"></div>';

    }

    if (petForm === "mega") {

      glow =
        '<div class="mega-effect"></div>';

    }


    preview.innerHTML = `

      <div class="pet-image-wrap">

        ${glow}

        <img
          src="${selectedPet.image}"
          class="pet-photo"
          alt="${selectedPet.name}"
          onerror="
            this.src='https://via.placeholder.com/80?text=Pet'
          "
        >

        <div class="pet-badges">

          ${
            isFly
              ? `
                <img
                  src="${BADGES.fly}"
                  class="badge-img"
                  title="Fly"
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
                >
              `
              : ""
          }

        </div>

      </div>


      <div>

        <strong>
          ${selectedPet.name}
        </strong>

        <div class="vchip-row">

          ${
            petForm !== "regular"
              ? `
                <span
                  class="vchip ${petForm}"
                >
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
    document.getElementById(
      "pickerValue"
    );

  if (valueElement) {

    valueElement.textContent =
      value;

  }

}


/* =========================================================
   ADD PET
   ========================================================= */

function confirmAddPet() {

  if (
    !selectedPet ||
    !activeSide
  ) {
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
      Math.random(),

    name:
      selectedPet.name,

    image:
      selectedPet.image,

    value:
      finalValue,

    isFly:
      isFly,

    isRide:
      isRide,

    form:
      petForm

  };


  if (
    activeSide === "you"
  ) {

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
        total + item.value,
      0
    );


  const themTotal =
    themTrade.reduce(
      (total, item) =>
        total + item.value,
      0
    );


  const youTotalEl =
    document.getElementById(
      "youTotal"
    );

  const themTotalEl =
    document.getElementById(
      "themTotal"
    );


  if (youTotalEl) {

    youTotalEl.textContent =
      youTotal.toFixed(1);

  }


  if (themTotalEl) {

    themTotalEl.textContent =
      themTotal.toFixed(1);

  }


  const heroYou =
    document.getElementById(
      "heroYouValue"
    );

  const heroThem =
    document.getElementById(
      "heroThemValue"
    );


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
    document.getElementById(
      elementId
    );

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
    list
      .map(
        item => {

          let glow = "";

          if (
            item.form === "neon"
          ) {

            glow =
              '<div class="neon-effect"></div>';

          }

          if (
            item.form === "mega"
          ) {

            glow =
              '<div class="mega-effect"></div>';

          }


          return `

            <div class="trade-item">

              <div class="pet-image-wrap">

                ${glow}

                <img
                  src="${item.image}"
                  class="pet-photo"
                  alt="${item.name}"
                  onerror="
                    this.src='https://via.placeholder.com/80?text=Pet'
                  "
                >

                <div class="pet-badges">

                  ${
                    item.isFly
                      ? `
                        <img
                          src="${BADGES.fly}"
                          class="badge-img"
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
                  Değer: ${item.value}
                </small>

              </div>


              <button
                class="remove-item"
                type="button"
                onclick="
                  removeItem(
                    '${side}',
                    ${item.id}
                  )
                "
              >
                &times;
              </button>

            </div>

          `;

        }
      )
      .join("");

}


/* =========================================================
   REMOVE
   ========================================================= */

function removeItem(
  side,
  id
) {

  if (
    side === "you"
  ) {

    youTrade =
      youTrade.filter(
        item =>
          item.id !== id
      );

  } else {

    themTrade =
      themTrade.filter(
        item =>
          item.id !== id
      );

  }


  updateTradeUI();

}


/* =========================================================
   CLEAR
   ========================================================= */

function clearTrade() {

  youTrade = [];

  themTrade = [];

  updateTradeUI();

}


/* =========================================================
   WFL
   ========================================================= */

function calculateWFL(
  youTotal,
  themTotal
) {

  const card =
    document.getElementById(
      "resultCard"
    );

  const statusText =
    document.getElementById(
      "resultStatusText"
    );

  const diffEl =
    document.getElementById(
      "resultDiffNumber"
    );

  const heroRes =
    document.getElementById(
      "heroResult"
    );


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

    diffEl.textContent =
      "—";


    if (heroRes) {

      heroRes.textContent =
        "—";

      heroRes.className =
        "result";

    }

    return;

  }


  const diff =
    themTotal - youTotal;


  let label;

  let cls;


  if (diff > 2) {

    label =
      "KAZANÇ (WIN)";

    cls =
      "win";

  }

  else if (diff < -2) {

    label =
      "KAYIP (LOSE)";

    cls =
      "lose";

  }

  else {

    label =
      "EŞİT (FAIR)";

    cls =
      "fair";

  }


  card.classList.add(cls);

  statusText.textContent =
    label;

  diffEl.textContent =
    (diff > 0 ? "+" : "") +
    diff.toFixed(1);


  if (heroRes) {

    heroRes.textContent =
      cls.toUpperCase();

    heroRes.className =
      "result " + cls;

  }

}


/* =========================================================
   VALUES
   ========================================================= */

function renderValues() {

  const grid =
    document.getElementById(
      "valueGrid"
    );

  if (!grid) {
    return;
  }


  const search =
    document.getElementById(
      "search"
    );


  const filterText =
    search?.value
      .toLowerCase()
      .trim() || "";


  const filtered =
    PET_DATABASE.filter(
      pet =>
        pet.name
          .toLowerCase()
          .includes(filterText)
    );


  if (
    filtered.length === 0
  ) {

    grid.innerHTML = `
      <div class="empty-items">
        Sonuç bulunamadı
      </div>
    `;

    return;

  }


  grid.innerHTML =
    filtered
      .map(
        pet => `

          <div class="value-card">

            <img
              src="${pet.image}"
              class="pet-photo"
              alt="${pet.name}"
              onerror="
                this.src='https://via.placeholder.com/80?text=Pet'
              "
            >

            <div>

              <h3>
                ${pet.name}
              </h3>

              <span>
                ${pet.rarity.toUpperCase()}
              </span>

              <strong>
                Değer: ${pet.value}
              </strong>

            </div>

          </div>

        `
      )
      .join("");

}


/* =========================================================
   PROFILE
   ========================================================= */

function loadProfile() {

  const saved =
    JSON.parse(
      localStorage.getItem(
        "zayagg_profile"
      ) || "null"
    );


  return (
    saved || {

      name:
        "Zayagg Kullanıcısı",

      username:
        "@kullanici",

      bio:
        "Henüz bir biyografi eklenmedi.",

      avatar:
        "🐉"

    }
  );

}


/* =========================================================
   SAVE PROFILE
   ========================================================= */

function saveProfile(
  profile
) {

  localStorage.setItem(
    "zayagg_profile",
    JSON.stringify(profile)
  );

}


/* =========================================================
   STATS
   ========================================================= */

function loadStats() {

  return (
    JSON.parse(
      localStorage.getItem(
        "zayagg_stats"
      ) || "null"
    ) || {

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
    (
      id,
      value
    ) => {

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
    document.getElementById(
      "profileModal"
    );


  if (modal) {

    modal.classList.add(
      "show"
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
    document.getElementById(
      "profileModal"
    );


  if (modal) {

    modal.classList.remove(
      "show"
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
    document.getElementById(
      "editName"
    );

  const usernameInput =
    document.getElementById(
      "editUsername"
    );

  const bioInput =
    document.getElementById(
      "editBio"
    );


  if (nameInput) {

    nameInput.value =
      profile.name;

  }


  if (usernameInput) {

    usernameInput.value =
      profile.username
        .replace(/^@/, "");

  }


  if (bioInput) {

    bioInput.value =
      profile.bio;

  }


  editingAvatar =
    profile.avatar;


  renderAvatarPicker();


  document
    .getElementById(
      "profileEditForm"
    )
    ?.classList.remove(
      "hidden"
    );


  document
    .getElementById(
      "profileEditBtn"
    )
    ?.classList.add(
      "hidden"
    );

}


/* =========================================================
   CLOSE EDIT
   ========================================================= */

function closeEditProfile() {

  document
    .getElementById(
      "profileEditForm"
    )
    ?.classList.add(
      "hidden"
    );


  document
    .getElementById(
      "profileEditBtn"
    )
    ?.classList.remove(
      "hidden"
    );

}


/* =========================================================
   AVATAR PICKER
   ========================================================= */

function renderAvatarPicker() {

  const wrap =
    document.getElementById(
      "avatarPick"
    );

  if (!wrap) {
    return;
  }


  wrap.innerHTML =
    AVATAR_OPTIONS
      .map(
        avatar => `

          <button
            type="button"
            class="
              avatar-opt
              ${
                avatar === editingAvatar
                  ? "active"
                  : ""
              }
            "
            onclick="
              pickAvatar('${avatar}')
            "
          >
            ${avatar}
          </button>

        `
      )
      .join("");

}


/* =========================================================
   PICK AVATAR
   ========================================================= */

function pickAvatar(
  avatar
) {

  editingAvatar =
    avatar;

  renderAvatarPicker();

}


/* =========================================================
   SAVE EDITED PROFILE
   ========================================================= */

function saveEditedProfile(
  event
) {

  event.preventDefault();


  const nameInput =
    document.getElementById(
      "editName"
    );

  const usernameInput =
    document.getElementById(
      "editUsername"
    );

  const bioInput =
    document.getElementById(
      "editBio"
    );


  const name =
    nameInput?.value.trim() ||
    "Zayagg Kullanıcısı";


  let username =
    usernameInput?.value.trim() ||
    "kullanici";


  if (
    !username.startsWith("@")
  ) {

    username =
      "@" + username;

  }


  const bio =
    bioInput?.value.trim() ||
    "Henüz bir biyografi eklenmedi.";


  saveProfile({

    name:
      name,

    username:
      username,

    bio:
      bio,

    avatar:
      editingAvatar

  });


  renderProfile();

  closeEditProfile();

}
