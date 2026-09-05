/* =========================================================
   ZAYAGG — COMPLETE SCRIPT
   ========================================================= */


/* =========================================================
   PET DATABASE
   ========================================================= */

const pets = [

  // LEGENDARY
  { name: "Shadow Dragon", value: 950, rarity: "Legendary", icon: "🐉" },
  { name: "Bat Dragon", value: 900, rarity: "Legendary", icon: "🦇" },
  { name: "Giraffe", value: 850, rarity: "Legendary", icon: "🦒" },
  { name: "Frost Dragon", value: 800, rarity: "Legendary", icon: "🐉" },
  { name: "Owl", value: 760, rarity: "Legendary", icon: "🦉" },
  { name: "Parrot", value: 720, rarity: "Legendary", icon: "🦜" },
  { name: "Evil Unicorn", value: 680, rarity: "Legendary", icon: "🦄" },
  { name: "Crow", value: 650, rarity: "Legendary", icon: "🐦" },
  { name: "Arctic Reindeer", value: 580, rarity: "Legendary", icon: "🦌" },
  { name: "Albino Monkey", value: 500, rarity: "Legendary", icon: "🐒" },
  { name: "Turtle", value: 450, rarity: "Legendary", icon: "🐢" },
  { name: "Kangaroo", value: 400, rarity: "Legendary", icon: "🦘" },
  { name: "Diamond Butterfly", value: 350, rarity: "Legendary", icon: "🦋" },

  // ULTRA-RARE
  { name: "Dalmatian", value: 320, rarity: "Ultra-Rare", icon: "🐶" },
  { name: "Flamingo", value: 300, rarity: "Ultra-Rare", icon: "🦩" },
  { name: "Lion", value: 280, rarity: "Ultra-Rare", icon: "🦁" },
  { name: "Cow", value: 260, rarity: "Ultra-Rare", icon: "🐄" },
  { name: "Hedgehog", value: 250, rarity: "Ultra-Rare", icon: "🦔" },
  { name: "Elephant", value: 230, rarity: "Ultra-Rare", icon: "🐘" },
  { name: "Hyena", value: 210, rarity: "Ultra-Rare", icon: "🐕" },
  { name: "Pig", value: 190, rarity: "Ultra-Rare", icon: "🐷" },

  // RARE
  { name: "Platypus", value: 170, rarity: "Rare", icon: "🦆" },
  { name: "Polar Bear", value: 150, rarity: "Rare", icon: "🐻‍❄️" },
  { name: "Swan", value: 140, rarity: "Rare", icon: "🦢" },
  { name: "Reindeer", value: 130, rarity: "Rare", icon: "🦌" },
  { name: "Rabbit", value: 80, rarity: "Rare", icon: "🐰" },

  // UNCOMMON
  { name: "Silly Duck", value: 70, rarity: "Uncommon", icon: "🦆" },
  { name: "Capybara", value: 65, rarity: "Uncommon", icon: "🐹" },
  { name: "Meerkat", value: 60, rarity: "Uncommon", icon: "🦦" },
  { name: "Snow Cat", value: 35, rarity: "Uncommon", icon: "🐱" },

  // COMMON
  { name: "Dog", value: 20, rarity: "Common", icon: "🐶" },
  { name: "Cat", value: 20, rarity: "Common", icon: "🐱" },
  { name: "Mouse", value: 15, rarity: "Common", icon: "🐭" },
  { name: "Otter", value: 15, rarity: "Common", icon: "🦦" }

];


/* =========================================================
   EXTRA ITEMS
   ========================================================= */

const extraItems = [
  { name: "Starter Egg", value: 10, rarity: "Common", icon: "🥚" },
  { name: "Pet Egg", value: 25, rarity: "Rare", icon: "🥚" },
  { name: "Royal Egg", value: 40, rarity: "Rare", icon: "🥚" },
  { name: "Basic Car", value: 20, rarity: "Common", icon: "🚗" },
  { name: "Hoverboard", value: 50, rarity: "Rare", icon: "🛹" },
  { name: "Rocket Racer", value: 80, rarity: "Ultra-Rare", icon: "🚀" },
  { name: "Magic Wand", value: 100, rarity: "Rare", icon: "🪄" },
  { name: "Teddy Bear", value: 30, rarity: "Uncommon", icon: "🧸" }
];


/* =========================================================
   TRADE STATE
   ========================================================= */

let tradeState = {
  you: [],
  them: []
};

let currentSide = "you";
let currentCategory = "Pets";
let currentRarity = "All";
let currentSearch = "";
let selectedPet = null;


/* =========================================================
   FAVORITES
   ========================================================= */

let favorites = [];

try {

  const savedFavorites =
    localStorage.getItem("zayaggFavorites");

  favorites = savedFavorites
    ? JSON.parse(savedFavorites)
    : [];

  if (!Array.isArray(favorites)) {
    favorites = [];
  }

} catch (error) {

  console.warn("Favoriler sıfırlandı.");
  favorites = [];

}


/* =========================================================
   PET IMAGE
   ========================================================= */

function getPetImage(pet) {
  const images = {
    "Shadow Dragon": "https://cdn.playadopt.me/items/shadow_dragon.png",
    "Bat Dragon": "https://cdn.playadopt.me/items/bat_dragon.png",
    "Giraffe": "https://cdn.playadopt.me/items/giraffe.png",
    "Frost Dragon": "https://cdn.playadopt.me/items/frost_dragon.png",
    "Owl": "https://cdn.playadopt.me/items/owl.png",
    "Parrot": "https://cdn.playadopt.me/items/parrot.png",
    "Evil Unicorn": "https://cdn.playadopt.me/items/evil_unicorn.png",
    "Crow": "https://cdn.playadopt.me/items/crow.png",
    "Arctic Reindeer": "https://cdn.playadopt.me/items/arctic_reindeer.png",
    "Albino Monkey": "https://cdn.playadopt.me/items/albino_monkey.png",
    "Turtle": "https://cdn.playadopt.me/items/turtle.png",
    "Kangaroo": "https://cdn.playadopt.me/items/kangaroo.png",
    "Diamond Butterfly": "https://cdn.playadopt.me/items/sanctuary_2022_diamond_premium_butterfly.png",

    "Dalmatian": "https://cdn.playadopt.me/items/santa_dog.png",
    "Flamingo": "https://cdn.playadopt.me/items/flamingo.png",
    "Lion": "https://cdn.playadopt.me/items/lion.png",
    "Cow": "https://cdn.playadopt.me/items/cow.png",
    "Hedgehog": "https://cdn.playadopt.me/items/elf_hedgehog.png",
    "Elephant": "https://cdn.playadopt.me/items/elephant.png",
    "Hyena": "https://cdn.playadopt.me/items/hyena.png",
    "Pig": "https://cdn.playadopt.me/items/pig.png",

    "Platypus": "https://cdn.playadopt.me/items/platypus.png",
    "Polar Bear": "https://cdn.playadopt.me/items/polar_bear.png",
    "Swan": "https://cdn.playadopt.me/items/swan.png",
    "Reindeer": "https://cdn.playadopt.me/items/reindeer.png",
    "Rabbit": "https://cdn.playadopt.me/items/rabbit.png",

    "Silly Duck": "https://cdn.playadopt.me/items/silly_duck.png",
    "Capybara": "https://cdn.playadopt.me/items/capybara.png",
    "Meerkat": "https://cdn.playadopt.me/items/meerkat.png",
    "Snow Cat": "https://cdn.playadopt.me/items/snow_cat.png",

    "Dog": "https://cdn.playadopt.me/items/dog.png",
    "Cat": "https://cdn.playadopt.me/items/cat.png",
    "Mouse": "https://cdn.playadopt.me/items/basic_egg_2022_mouse.png",
    "Otter": "https://cdn.playadopt.me/items/otter.png"
  };

  return images[pet.name] || "";
}

/* =========================================================
   IMAGE HTML
   ========================================================= */

function petImageHTML(pet, size = 50) {

  const image = getPetImage(pet);

  return `

    <div
      style="
        width:${size}px;
        height:${size}px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-shrink:0;
      "
    >

      <img
        src="${image}"
        alt="${pet.name}"
        style="
          width:100%;
          height:100%;
          object-fit:contain;
        "
        onerror="
          this.style.display='none';
          this.nextElementSibling.style.display='flex';
        "
      >

      <span
        style="
          display:none;
          align-items:center;
          justify-content:center;
          font-size:${Math.round(size * 0.55)}px;
        "
      >
        ${pet.icon || "🐾"}
      </span>

    </div>

  `;

}


/* =========================================================
   VALUE LIST
   ========================================================= */

function renderValues() {

  const grid =
    document.getElementById("valueGrid");

  if (!grid) return;


  const searchInput =
    document.getElementById("search");

  const search =
    searchInput?.value
      ?.toLowerCase()
      .trim() || "";


  const filtered =
    pets.filter(pet =>
      pet.name
        .toLowerCase()
        .includes(search)
    );


  grid.innerHTML =
    filtered.map(pet => `

      <div class="value-card">

        ${petImageHTML(pet, 65)}

        <div>

          <h3>
            ${pet.name}
          </h3>

          <small>
            ${pet.rarity}
          </small>

          <strong>
            ${pet.value.toLocaleString()}
          </strong>

        </div>

      </div>

    `).join("");

}


/* =========================================================
   CREATE MODAL IF MISSING
   ========================================================= */

function ensurePetModal() {

  let modal =
    document.getElementById("petModal");


  if (!modal) {

    modal =
      document.createElement("div");

    modal.id =
      "petModal";

    modal.className =
      "pet-modal";


    modal.innerHTML = `

      <div class="pet-modal-box"></div>

    `;


    document.body.appendChild(modal);

  }


  return modal;

}


/* =========================================================
   OPEN PET MODAL
   ========================================================= */

function openPetModal(side = currentSide) {

  currentSide = side;

  const modal =
    ensurePetModal();


  modal.classList.add("show");

  renderPetModal();

}


/* =========================================================
   RENDER PET MODAL
   ========================================================= */

function renderPetModal() {

  const modal =
    ensurePetModal();

  const box =
    modal.querySelector(".pet-modal-box");

  if (!box) return;


  let list =
    currentCategory === "Pets"
      ? [...pets]
      : [...extraItems];


  if (currentRarity !== "All") {

    list =
      list.filter(
        item =>
          item.rarity === currentRarity
      );

  }


  if (currentSearch) {

    list =
      list.filter(item =>
        item.name
          .toLowerCase()
          .includes(
            currentSearch.toLowerCase()
          )
      );

  }


  box.innerHTML = `

    <div class="modal-header">

      <h2>
        🐾 Pet / Item Seç
      </h2>

      <button
        class="modal-close"
        onclick="closePetModal()"
      >
        ×
      </button>

    </div>


    <div class="pet-filters">

      <button
        class="${
          currentCategory === "Pets"
            ? "active"
            : ""
        }"
        onclick="setCategory('Pets')"
      >
        🐾 Pets
      </button>


      <button
        class="${
          currentCategory === "Items"
            ? "active"
            : ""
        }"
        onclick="setCategory('Items')"
      >
        🎒 Items
      </button>

    </div>


    <input
      class="pet-search"
      placeholder="🔎 Pet ara..."
      value="${currentSearch}"
      oninput="updatePetSearch(this.value)"
    >


    <div class="rarity-filters">

      ${[
        "All",
        "Common",
        "Uncommon",
        "Rare",
        "Ultra-Rare",
        "Legendary"
      ].map(rarity => `

        <button
          class="${
            currentRarity === rarity
              ? "active"
              : ""
          }"
          onclick="setRarity('${rarity}')"
        >
          ${rarity}
        </button>

      `).join("")}

    </div>


    <div class="pet-list">

      ${
        list.length
          ? list.map(item => {

              const favorite =
                favorites.includes(
                  item.name
                );


              const safeName =
                item.name
                  .replace(/\\/g, "\\\\")
                  .replace(/'/g, "\\'");


              return `

                <div class="pet-option">

                  ${petImageHTML(item, 55)}


                  <div
                    class="pet-option-info"
                    onclick="selectPet('${safeName}')"
                  >

                    <strong>
                      ${item.name}
                    </strong>

                    <small>
                      ${item.rarity}
                      ·
                      ${item.value.toLocaleString()}
                    </small>

                  </div>


                  <button
                    class="favorite-button"
                    onclick="
                      event.stopPropagation();
                      toggleFavorite('${safeName}')
                    "
                  >
                    ${favorite ? "★" : "☆"}
                  </button>

                </div>

              `;

            }).join("")

          : `

            <div class="empty">
              Pet bulunamadı.
            </div>

          `
      }

    </div>

  `;

}


/* =========================================================
   CATEGORY
   ========================================================= */

function setCategory(category) {

  currentCategory =
    category;

  currentSearch =
    "";

  currentRarity =
    "All";

  renderPetModal();

}


/* =========================================================
   RARITY
   ========================================================= */

function setRarity(rarity) {

  currentRarity =
    rarity;

  renderPetModal();

}


/* =========================================================
   SEARCH
   ========================================================= */

function updatePetSearch(value) {

  currentSearch =
    value;

  renderPetModal();

}


/* =========================================================
   SELECT PET
   ========================================================= */

function selectPet(name) {

  const list =
    currentCategory === "Pets"
      ? pets
      : extraItems;


  selectedPet =
    list.find(
      item =>
        item.name === name
    );


  if (!selectedPet) return;


  if (
    currentCategory === "Pets"
  ) {

    showVariantSelector(
      selectedPet
    );

  } else {

    addSelectedItem();

  }

}


/* =========================================================
   ADD NORMAL ITEM
   ========================================================= */

function addSelectedItem() {

  if (!selectedPet) return;


  const item = {

    ...selectedPet,

    variant: "Normal",

    quantity: 1

  };


  addToTrade(item);

  closePetModal();

}


/* =========================================================
   ADD TO TRADE
   ========================================================= */

function addToTrade(item) {

  if (!tradeState[currentSide]) {

    tradeState[currentSide] =
      [];

  }


  const existing =
    tradeState[currentSide].find(
      existingItem =>
        existingItem.name ===
          item.name &&
        existingItem.variant ===
          item.variant
    );


  if (existing) {

    existing.quantity =
      (existing.quantity || 1) + 1;

  } else {

    tradeState[currentSide].push(
      {
        ...item,
        quantity:
          item.quantity || 1
      }
    );

  }


  renderTrade();

}


/* =========================================================
   ADD ITEM BUTTON
   ========================================================= */

function addItem(side) {

  currentSide =
    side;

  openPetModal(side);

}


/* =========================================================
   REMOVE ITEM
   ========================================================= */

function removeItem(side, index) {

  if (!tradeState[side]) return;

  tradeState[side].splice(
    index,
    1
  );

  renderTrade();

}


/* =========================================================
   QUANTITY
   ========================================================= */

function changeQuantity(
  side,
  index,
  amount
) {

  const item =
    tradeState[side]?.[index];

  if (!item) return;


  item.quantity =
    (item.quantity || 1)
    + amount;


  if (item.quantity <= 0) {

    tradeState[side].splice(
      index,
      1
    );

  }


  renderTrade();

}


/* =========================================================
   TRADE TOTAL
   ========================================================= */

function getTradeTotal(side) {

  return (
    tradeState[side] || []
  ).reduce(
    (total, item) =>
      total +
      (
        item.value *
        (item.quantity || 1)
      ),
    0
  );

}


/* =========================================================
   RENDER TRADE
   ========================================================= */

function renderTrade() {

  const youBox =
    document.getElementById(
      "youItems"
    );

  const themBox =
    document.getElementById(
      "themItems"
    );


  if (youBox) {

    youBox.innerHTML =
      renderTradeItems("you");

  }


  if (themBox) {

    themBox.innerHTML =
      renderTradeItems("them");

  }


  const youTotal =
    getTradeTotal("you");

  const themTotal =
    getTradeTotal("them");


  const youTotalElement =
    document.getElementById(
      "youTotal"
    );

  const themTotalElement =
    document.getElementById(
      "themTotal"
    );


  if (youTotalElement) {

    youTotalElement.textContent =
      youTotal.toLocaleString();

  }


  if (themTotalElement) {

    themTotalElement.textContent =
      themTotal.toLocaleString();

  }


  updateResult();

}


/* =========================================================
   TRADE ITEMS
   ========================================================= */

function renderTradeItems(side) {

  const items =
    tradeState[side] || [];


  if (!items.length) {

    return `

      <div class="empty">
        Henüz pet eklenmedi.
      </div>

    `;

  }


  return items.map(
    (item, index) => `

      <div class="trade-item">

        ${petImageHTML(item, 55)}


        <div class="trade-item-info">

          <strong>
            ${item.name}
          </strong>

          <small>
            ${item.variant || "Normal"}
          </small>

          <span>
            ${item.value.toLocaleString()}
            ×
            ${item.quantity || 1}
          </span>

        </div>


        <div class="quantity-controls">

          <button
            onclick="
              changeQuantity(
                '${side}',
                ${index},
                -1
              )
            "
          >
            −
          </button>


          <span>
            ${item.quantity || 1}
          </span>


          <button
            onclick="
              changeQuantity(
                '${side}',
                ${index},
                1
              )
            "
          >
            +
          </button>

        </div>


        <button
          class="remove"
          onclick="
            removeItem(
              '${side}',
              ${index}
            )
          "
        >
          ×
        </button>

      </div>

    `
  ).join("");

}


/* =========================================================
   W / F / L
   ========================================================= */

function updateResult() {

  const card =
    document.getElementById(
      "resultCard"
    );

  if (!card) return;


  const you =
    getTradeTotal("you");

  const them =
    getTradeTotal("them");


  if (
    you === 0 &&
    them === 0
  ) {

    card.className =
      "result-card neutral";


    card.innerHTML = `

      <div>

        <small>
          TRADE SONUCU
        </small>

        <h3>
          Pet ekleyerek başla
        </h3>

      </div>


      <div class="result-number">
        —
      </div>

    `;

    return;

  }


  if (
    you === 0 ||
    them === 0
  ) {

    card.className =
      "result-card neutral";


    card.innerHTML = `

      <div>

        <small>
          TRADE SONUCU
        </small>

        <h3>
          İki tarafa da pet ekle
        </h3>

      </div>


      <div class="result-number">
        —
      </div>

    `;

    return;

  }


  const difference =
    them - you;


  const percentage =
    (
      Math.abs(difference)
      / you
    ) * 100;


  let result;
  let title;


  if (
    percentage <= 10
  ) {

    result =
      "FAIR";

    title =
      "Adil Trade";

  }

  else if (
    difference > 0
  ) {

    result =
      "WIN";

    title =
      `WIN +${difference.toLocaleString()}`;

  }

  else {

    result =
      "LOSE";

    title =
      `LOSE ${difference.toLocaleString()}`;

  }


  card.className =
    `result-card ${result.toLowerCase()}`;


  card.innerHTML = `

    <div>

      <small>
        TRADE SONUCU
      </small>

      <h3>
        ${title}
      </h3>

    </div>


    <div class="result-number">
      ${result}
    </div>

  `;

}


/* =========================================================
   CLEAR
   ========================================================= */

function clearTrade() {

  tradeState = {
    you: [],
    them: []
  };

  renderTrade();

}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(name) {

  if (
    favorites.includes(name)
  ) {

    favorites =
      favorites.filter(
        item =>
          item !== name
      );

  } else {

    favorites.push(name);

  }


  try {

    localStorage.setItem(
      "zayaggFavorites",
      JSON.stringify(
        favorites
      )
    );

  } catch (error) {

    console.warn(
      "Favoriler kaydedilemedi."
    );

  }


  renderPetModal();

}


/* =========================================================
   VARIANT SELECTOR
   ========================================================= */

function showVariantSelector(pet) {

  const modal =
    ensurePetModal();

  const box =
    modal.querySelector(
      ".pet-modal-box"
    );

  if (!box) return;


  const base =
    pet.value;

  const image =
    getPetImage(pet);


  const variants = [

    {
      name: "Normal",
      value: base,
      className: ""
    },

    {
      name: "Fly",
      value: Math.round(
        base * 1.1
      ),
      className: ""
    },

    {
      name: "Ride",
      value: Math.round(
        base * 1.1
      ),
      className: ""
    },

    {
      name: "Fly Ride",
      value: Math.round(
        base * 1.2
      ),
      className: ""
    },

    {
      name: "Neon",
      value: Math.round(
        base * 4
      ),
      className: "neon"
    },

    {
      name: "Neon Fly",
      value: Math.round(
        base * 4.1
      ),
      className: "neon"
    },

    {
      name: "Neon Ride",
      value: Math.round(
        base * 4.1
      ),
      className: "neon"
    },

    {
      name: "Neon Fly Ride",
      value: Math.round(
        base * 4.2
      ),
      className: "neon"
    },

    {
      name: "Mega Neon",
      value: Math.round(
        base * 16
      ),
      className: "mega"
    },

    {
      name: "Mega Fly Ride",
      value: Math.round(
        base * 16.2
      ),
      className: "mega"
    }

  ];


  box.innerHTML = `

    <div class="modal-header">

      <h2>

        <img
          src="${image}"
          alt="${pet.name}"
          style="
            width:42px;
            height:42px;
            object-fit:contain;
            vertical-align:middle;
          "
          onerror="
            this.style.display='none';
          "
        >

        ${pet.name}

      </h2>


      <button
        class="modal-close"
        onclick="closePetModal()"
      >
        ×
      </button>

    </div>


    <div class="variant-title">

      ${pet.name}
      için istediğin versiyonu seç

    </div>


    <div class="variant-grid">

      ${variants.map(
        v => `

          <button
            class="
              variant-card
              ${v.className}
            "
            onclick="
              chooseVariant(
                '${v.name}'
              )
            "
          >

            <div class="variant-image">

              <img
                src="${image}"
                alt="${pet.name}"
                onerror="
                  this.style.display='none';
                  this.nextElementSibling.style.display='flex';
                "
              >


              <span
                style="
                  display:none;
                  font-size:30px;
                "
              >
                ${pet.icon || "🐾"}
              </span>

            </div>


            <strong>
              ${v.name}
            </strong>


            <small>
              ${v.value.toLocaleString()}
              Value
            </small>

          </button>

        `
      ).join("")}

    </div>


    <button
      class="variant-back"
      onclick="
        openPetModal()
      "
    >
      ← Petlere dön
    </button>

  `;

}


/* =========================================================
   CHOOSE VARIANT
   ========================================================= */

function chooseVariant(variant) {

  if (!selectedPet) return;


  const multipliers = {

    "Normal": 1,
    "Fly": 1.1,
    "Ride": 1.1,
    "Fly Ride": 1.2,
    "Neon": 4,
    "Neon Fly": 4.1,
    "Neon Ride": 4.1,
    "Neon Fly Ride": 4.2,
    "Mega Neon": 16,
    "Mega Fly Ride": 16.2

  };


  const multiplier =
    multipliers[variant] || 1;


  const newItem = {

    name:
      selectedPet.name,

    value:
      Math.round(
        selectedPet.value *
        multiplier
      ),

    rarity:
      selectedPet.rarity,

    icon:
      selectedPet.icon,

    variant:
      variant,

    image:
      getPetImage(
        selectedPet
      ),

    quantity:
      1

  };


  addToTrade(
    newItem
  );

  closePetModal();

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closePetModal() {

  const modal =
    document.getElementById(
      "petModal"
    );

  if (modal) {

    modal.classList.remove(
      "show"
    );

  }

}


/* =========================================================
   CLEAR BUTTON
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderValues();

    renderTrade();


    const clearButton =
      document.getElementById(
        "clearBtn"
      );


    if (clearButton) {

      clearButton.addEventListener(
        "click",
        clearTrade
      );

    }

  }
);
