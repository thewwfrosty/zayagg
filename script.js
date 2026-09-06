/* =========================================================
   ZAYAXRA — SCRIPT.JS
   FINAL CLEAN VERSION
   PETS + PET WEAR + EGGS + VEHICLES + TOYS + GIFTS
   W/F/L + PROFILE + PREMIUM PICKER
========================================================= */

"use strict";


/* =========================================================
   DATABASE
========================================================= */

const PET_DATA_URL =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/adoptme_values.json";

const PET_IMAGE_BASE =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main";


/* =========================================================
   CUSTOM PET VALUES
========================================================= */

const CUSTOM_VALUE_OVERRIDES = {

  "Shadow Dragon": 125,
  "Bat Dragon": 110,
  "Giraffe": 70,
  "Frost Dragon": 58,
  "Owl": 42,
  "Parrot": 38,
  "Evil Unicorn": 32,
  "Crow": 28,
  "Frost Fury": 16,
  "Arctic Reindeer": 15,
  "Diamond Butterfly": 14,
  "Turtle": 12,
  "Kangaroo": 11,
  "Albino Monkey": 10,
  "Hedgehog": 9,
  "Lion": 9,
  "Flamingo": 8,
  "Dalmatian": 8,
  "Crocodile": 7,
  "Elephant": 7,
  "Cow": 7,
  "Brown Bear": 6,
  "Pink Cat": 6,
  "Blue Dog": 6,
  "Meerkat": 5,
  "Rhino": 5,
  "Hyena": 5,
  "Black Panther": 5,
  "Platypus": 4.5,
  "Goat": 4.5,
  "Swan": 4,
  "Ancient Dragon": 4,
  "Unicorn": 3.5,
  "Dragon": 3,
  "Golden Dragon": 3,
  "Golden Unicorn": 3,
  "Golden Penguin": 2.8,
  "King Bee": 2.5,
  "Queen Bee": 3,
  "Kitsune": 2.5,
  "Octopus": 2.5,
  "Shark": 2.5,
  "Dodo": 2.5,
  "T-Rex": 2.5,
  "Skele-Rex": 3,
  "Lavender Dragon": 2.5,
  "Lava Dragon": 3,
  "Phoenix": 2,
  "Golden Rat": 2,
  "Metal Ox": 1.5,
  "Snow Owl": 2,
  "Goldhorn": 1.8,
  "Griffin": 1.2,
  "Albino Bat": 3,
  "Business Monkey": 2,
  "Ghost Bunny": 2,
  "Ginger Cat": 1.2,
  "Panda": 1.2,
  "Red Panda": 1,
  "Bee": 1,
  "Penguin": 1,
  "Toucan": 1,
  "Starfish": 1,
  "Koala": 1.5,
  "Frog": 1,
  "Sloth": 0.8,
  "Polar Bear": 3.5,
  "Reindeer": 3,
  "Rabbit": 0.7,
  "Monkey": 0.7,
  "Bunny": 0.7,
  "Emu": 0.8,
  "Beaver": 0.6,
  "Musk Ox": 0.7,
  "Woolly Mammoth": 0.8,
  "Dilophosaurus": 0.7,
  "Stegosaurus": 0.7,
  "Triceratops": 0.6,
  "Shrew": 3,
  "Megalodon": 1,
  "Bat": 0.5,
  "Snow Cat": 0.3,
  "Fennec Fox": 0.3,
  "Red Fox": 0.4,
  "Shiba Inu": 0.3,
  "Dingo": 0.3,
  "Snow Puma": 0.3,
  "Puma": 0.2,
  "Cat": 0.1,
  "Dog": 0.1,
  "Mouse": 0.1,
  "Chick": 0.15,
  "Robin": 0.2,
  "Chicken": 0.3,
  "Bandicoot": 0.2,
  "Ground Sloth": 0.2,
  "Wolpertinger": 0.2,
  "Otter": 0.2,
  "Buffalo": 0.15,
  "Cracked Egg": 0.1

};


/* =========================================================
   STATE
========================================================= */

let PET_DATABASE = [];
let databaseReady = false;

let youTrade = [];
let themTrade = [];

let pickerSide = null;
let selectedPet = null;

/*
 * ÖNEMLİ:
 * Bunlar pet seçilmeden de değiştirilebilir.
 */
let selectedForm = "normal";

let selectedPotion = {
  fly: false,
  ride: false
};

let recordedTradeKey = "";

let selectedAvatar = "🐉";

let currentCategory = "all";

let showPickerValues = false;


/* =========================================================
   HELPERS
========================================================= */

function $(id) {
  return document.getElementById(id);
}


function escapeHTML(value) {

  return String(value ?? "")

    .replace(/&/g, "&amp;")

    .replace(/</g, "&lt;")

    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;")

    .replace(/'/g, "&#039;");

}


function slug(name) {

  const special = {

    "T-Rex": "t_rex",
    "Skele-Rex": "skele_rex",
    "S'mores Raccoon": "smores_raccoon",
    "Tió De Nadal": "tio_de_nadal",
    "Mr. Whiskerpips": "mr_whiskerpips",
    "Mrs. Whiskerpips": "mrs_whiskerpips",
    "Ms. Muffet": "ms_muffet",
    "Mecha R4BBIT": "mecha_r4bbit"

  };


  if (special[name]) {
    return special[name];
  }


  return String(name)

    .toLowerCase()

    .normalize("NFD")

    .replace(
      /[\u0300-\u036f]/g,
      ""
    )

    .replace(
      /[’']/g,
      ""
    )

    .replace(
      /[^a-z0-9]+/g,
      "_"
    )

    .replace(
      /^_+|_+$/g,
      "");

}


function formatValue(value) {

  const number =
    Number(value || 0);


  if (
    !Number.isFinite(number)
  ) {

    return "0";

  }


  if (
    Number.isInteger(number)
  ) {

    return String(number);

  }


  return number

    .toFixed(2)

    .replace(
      /0+$/,
      ""
    )

    .replace(
      /\.$/,
      ""
    );

}


/* =========================================================
   CATEGORIES
========================================================= */

const CATEGORY_NAMES = {

  all: "ALL",
  pets: "PETS",
  petwear: "PET WEAR",
  eggs: "EGGS",
  vehicles: "VEHICLES",
  toys: "TOYS",
  gifts: "GIFTS"

};


const VALID_CATEGORIES = [

  "pets",
  "petwear",
  "eggs",
  "vehicles",
  "toys",
  "gifts"

];


function normalizeType(value) {

  return String(value || "")

    .toLowerCase()

    .replace(
      /[_-]/g,
      " "
    )

    .replace(
      /\s+/g,
      " "
    )

    .trim();

}


function getItemCategory(item) {

  const type =
    normalizeType(

      item?.type ||

      item?.category ||

      ""

    );


  if (
    type.includes("pet wear") ||
    type.includes("petwear") ||
    type.includes("accessor") ||
    type.includes("wearable")
  ) {

    return "petwear";

  }


  if (
    type.includes("egg")
  ) {

    return "eggs";

  }


  if (
    type.includes("vehicle")
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


  if (
    type.includes("pet")
  ) {

    return "pets";

  }


  return null;

}


function isPet(item) {

  return (
    getItemCategory(item) ===
    "pets"
  );

}


function isEgg(item) {

  return (
    getItemCategory(item) ===
    "eggs"
  );

}


/* =========================================================
   IMAGES
========================================================= */

function resolveImage(
  imagePath,
  name
) {

  const path =
    String(
      imagePath || ""
    ).trim();


  if (
    /^https?:\/\//i.test(path)
  ) {

    return path;

  }


  const fileName =
    path

      ? path
          .split("/")
          .pop()

      : `${String(name || "")}.png`;


  return (

    PET_IMAGE_BASE +
    "/images/" +
    encodeURIComponent(
      fileName
    )

  );

}


function imageHTML(
  item,
  className = "pet-photo"
) {

  const image =
    resolveImage(
      item?.image,
      item?.name
    );


  return `

    <img

      src="${escapeHTML(
        image
      )}"

      alt="${escapeHTML(
        item?.name ||
        "Item"
      )}"

      class="${className}"

      loading="lazy"

      onerror="handleImageError(this)"

    >

  `;

}


function handleImageError(img) {

  if (
    !img ||
    img.dataset.failed === "1"
  ) {

    return;

  }


  img.dataset.failed =
    "1";


  img.src =
    "data:image/svg+xml;charset=UTF-8," +

    encodeURIComponent(`

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="160"
        height="160"
      >

        <rect
          width="160"
          height="160"
          rx="20"
          fill="#15182a"
        />

        <text
          x="80"
          y="86"
          text-anchor="middle"
          fill="#8b93a7"
          font-size="13"
          font-family="Arial"
        >
          NO IMAGE
        </text>

      </svg>

    `);

}


/* =========================================================
   RARITY
========================================================= */

function normalizeRarity(
  rarity
) {

  const value =
    String(
      rarity || ""
    )

    .toLowerCase()

    .trim();


  if (
    value.includes(
      "legendary"
    )
  ) {

    return "legendary";

  }


  if (
    value.includes(
      "ultra"
    )
  ) {

    return "ultra";

  }


  if (
    value.includes(
      "rare"
    )
  ) {

    return "rare";

  }


  if (
    value.includes(
      "uncommon"
    )
  ) {

    return "uncommon";

  }


  if (
    value.includes(
      "common"
    )
  ) {

    return "common";

  }


  return "unknown";

}


function rarityName(
  rarity
) {

  const names = {

    legendary:
      "Legendary",

    ultra:
      "Ultra-Rare",

    rare:
      "Rare",

    uncommon:
      "Uncommon",

    common:
      "Common",

    unknown:
      ""

  };


  return (
    names[rarity] ||
    ""
  );

}


/* =========================================================
   DATABASE LOADER
========================================================= */

async function loadFullPetDatabase() {

  try {

    console.log(
      "ZAYAXRA: veritabanı yükleniyor..."
    );


    const response =
      await fetch(

        PET_DATA_URL +
        "?v=" +
        Date.now(),

        {
          cache:
            "no-store"
        }

      );


    if (
      !response.ok
    ) {

      throw new Error(
        `HTTP ${response.status}`
      );

    }


    const raw =
      await response.json();


    if (
      !Array.isArray(raw)
    ) {

      throw new Error(
        "Veritabanı array değil."
      );

    }


    const unique =
      new Map();


    raw.forEach(
      (
        item,
        index
      ) => {

        const category =
          getItemCategory(
            item
          );


        /*
         * 7 KATEGORİNİN TAMAMI.
         */

        if (
          !VALID_CATEGORIES.includes(
            category
          )
        ) {

          return;

        }


        const name =
          String(
            item?.name || ""
          ).trim();


        if (!name) {
          return;
        }


        let value =
          Number(

            item?.regular?.value ??

            item?.value ??

            0

          );


        if (
          !Number.isFinite(value)
        ) {

          value = 0;

        }


        /*
         * Custom değerler yalnızca Pets.
         */

        if (

          category === "pets" &&

          Object.prototype.hasOwnProperty.call(
            CUSTOM_VALUE_OVERRIDES,
            name
          )

        ) {

          value =
            CUSTOM_VALUE_OVERRIDES[
              name
            ];

        }


        const cleanItem = {

          id:
            `item_${index}_${slug(name)}`,

          name,

          category,

          type:
            category,

          rarity:
            normalizeRarity(
              item?.rarity
            ),

          value,

          image:
            resolveImage(
              item?.image,
              name
            )

        };


        unique.set(

          `${category}:${name.toLowerCase()}`,

          cleanItem

        );

      }
    );


    PET_DATABASE =
      Array.from(
        unique.values()
      );


    PET_DATABASE.sort(
      (
        a,
        b
      ) => {

        return a.name.localeCompare(
          b.name,
          "en",
          {
            sensitivity:
              "base"
          }
        );

      }
    );


    databaseReady =
      true;


    window.PET_DATABASE =
      PET_DATABASE;


    window.ZAYAXRA_ALL_ITEMS =
      PET_DATABASE;


    console.log(

      `ZAYAXRA: ${PET_DATABASE.length} item yüklendi.`

    );


    updateCategoryCounts();

    renderPickerPets();

  }

  catch (
    error
  ) {

    databaseReady =
      false;


    console.error(
      "ZAYAXRA DATABASE HATASI:",
      error
    );


    /*
     * Database açılmazsa custom pets.
     */

    PET_DATABASE =
      Object.entries(
        CUSTOM_VALUE_OVERRIDES
      )
      .map(
        (
          [name, value],
          index
        ) => ({

          id:
            `fallback_${index}_${slug(name)}`,

          name,

          category:
            "pets",

          type:
            "pets",

          rarity:
            "unknown",

          value,

          image:
            resolveImage(
              "",
              name
            )

        })
      );


    window.PET_DATABASE =
      PET_DATABASE;


    window.ZAYAXRA_ALL_ITEMS =
      PET_DATABASE;


    updateCategoryCounts();

    renderPickerPets();

  }

}


/* =========================================================
   CATEGORY COUNTS
========================================================= */

function updateCategoryCounts() {

  const counts = {

    all: 0,
    pets: 0,
    petwear: 0,
    eggs: 0,
    vehicles: 0,
    toys: 0,
    gifts: 0

  };


  PET_DATABASE.forEach(
    item => {

      const category =
        getItemCategory(
          item
        );


      if (
        Object.prototype.hasOwnProperty.call(
          counts,
          category
        )
      ) {

        counts[category]++;

        counts.all++;

      }

    }
  );


  Object.keys(
    counts
  )
  .forEach(
    key => {

      const element =
        $(
          `zayaxra-count-${key}`
        );


      if (element) {

        element.textContent =
          counts[key];

      }

    }
  );

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function getCategoryItems() {

  if (
    currentCategory ===
    "all"
  ) {

    return PET_DATABASE.filter(
      item =>
        VALID_CATEGORIES.includes(
          getItemCategory(
            item
          )
        )
    );

  }


  return PET_DATABASE.filter(
    item =>
      getItemCategory(
        item
      ) ===
      currentCategory
  );

}


/* =========================================================
   SIDEBAR
========================================================= */

function createCategorySidebar() {

  const modalWindow =
    document.querySelector(
      ".pet-modal-window"
    );


  if (!modalWindow) {
    return;
  }


  const old =
    $("zayaxraCategorySidebar");


  if (old) {
    old.remove();
  }


  const sidebar =
    document.createElement(
      "aside"
    );


  sidebar.id =
    "zayaxraCategorySidebar";


  sidebar.className =
    "zayaxra-left-category";


  sidebar.innerHTML = `

    <div class="zayaxra-category-title">
      CATEGORIES
    </div>


    <button
      type="button"
      class="zayaxra-category-btn active"
      data-category="all"
    >
      <span>ALL</span>
      <b id="zayaxra-count-all">0</b>
    </button>


    <button
      type="button"
      class="zayaxra-category-btn"
      data-category="pets"
    >
      <span>PETS</span>
      <b id="zayaxra-count-pets">0</b>
    </button>


    <button
      type="button"
      class="zayaxra-category-btn"
      data-category="petwear"
    >
      <span>PET WEAR</span>
      <b id="zayaxra-count-petwear">0</b>
    </button>


    <button
      type="button"
      class="zayaxra-category-btn"
      data-category="eggs"
    >
      <span>EGGS</span>
      <b id="zayaxra-count-eggs">0</b>
    </button>


    <button
      type="button"
      class="zayaxra-category-btn"
      data-category="vehicles"
    >
      <span>VEHICLES</span>
      <b id="zayaxra-count-vehicles">0</b>
    </button>


    <button
      type="button"
      class="zayaxra-category-btn"
      data-category="toys"
    >
      <span>TOYS</span>
      <b id="zayaxra-count-toys">0</b>
    </button>


    <button
      type="button"
      class="zayaxra-category-btn"
      data-category="gifts"
    >
      <span>GIFTS</span>
      <b id="zayaxra-count-gifts">0</b>
    </button>

  `;


  const header =
    modalWindow.querySelector(
      ".profile-header"
    );


  if (header) {

    header.insertAdjacentElement(
      "afterend",
      sidebar
    );

  }

  else {

    modalWindow.prepend(
      sidebar
    );

  }


  sidebar
    .querySelectorAll(
      ".zayaxra-category-btn"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            currentCategory =
              button.dataset.category ||
              "all";


            sidebar
              .querySelectorAll(
                ".zayaxra-category-btn"
              )
              .forEach(
                item => {

                  item.classList.toggle(
                    "active",
                    item === button
                  );

                }
              );


            /*
             * Kategori değişince sadece arama temizlenir.
             * Pet durumu değişmez.
             */

            const search =
              $("petSearch");


            if (search) {

              search.value =
                "";

            }


            renderPickerPets();

          }
        );

      }
    );


  updateCategoryCounts();

}


/* =========================================================
   PICKER CSS
========================================================= */

function addPickerStyles() {

  if (
    $("zayaxra-final-picker-css")
  ) {

    return;

  }


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "zayaxra-final-picker-css";


  style.textContent = `

    /* ===================================
       MODAL
    =================================== */

    .pet-modal-window {

      width:
        min(1180px, 96vw) !important;

      max-width:
        1180px !important;

      position:
        relative !important;

    }


    /* ===================================
       LEFT CATEGORY
    =================================== */

    #zayaxraCategorySidebar {

      position:
        absolute !important;

      left:
        22px !important;

      top:
        104px !important;

      bottom:
        22px !important;

      width:
        190px !important;

      padding:
        12px !important;

      box-sizing:
        border-box !important;

      border:
        1px solid
        rgba(255,255,255,.07) !important;

      border-radius:
        17px !important;

      background:
        rgba(10,12,20,.82) !important;

      backdrop-filter:
        blur(18px) !important;

      display:
        flex !important;

      flex-direction:
        column !important;

      gap:
        6px !important;

      overflow-y:
        auto !important;

      z-index:
        40 !important;

    }


    .zayaxra-category-title {

      padding:
        5px 9px 9px !important;

      color:
        rgba(255,255,255,.35) !important;

      font-size:
        10px !important;

      font-weight:
        900 !important;

      letter-spacing:
        .16em !important;

    }


    .zayaxra-category-btn {

      width:
        100% !important;

      height:
        42px !important;

      flex:
        0 0 42px !important;

      padding:
        0 11px !important;

      border:
        1px solid
        transparent !important;

      border-radius:
        10px !important;

      background:
        transparent !important;

      color:
        rgba(255,255,255,.58) !important;

      display:
        flex !important;

      align-items:
        center !important;

      justify-content:
        space-between !important;

      font-family:
        inherit !important;

      font-size:
        11px !important;

      font-weight:
        900 !important;

      cursor:
        pointer !important;

      transition:
        .18s ease !important;

    }


    .zayaxra-category-btn:hover {

      background:
        rgba(255,255,255,.05) !important;

      color:
        #fff !important;

      transform:
        translateX(2px);

    }


    .zayaxra-category-btn.active {

      color:
        #fff !important;

      background:
        linear-gradient(
          135deg,
          rgba(130,100,255,.24),
          rgba(70,110,255,.12)
        ) !important;

      border-color:
        rgba(145,120,255,.34) !important;

      box-shadow:
        0 0 18px
        rgba(100,75,220,.12) !important;

    }


    .zayaxra-category-btn b {

      min-width:
        27px !important;

      height:
        21px !important;

      display:
        flex !important;

      align-items:
        center !important;

      justify-content:
        center !important;

      border-radius:
        7px !important;

      background:
        rgba(255,255,255,.055) !important;

      color:
        rgba(255,255,255,.42) !important;

      font-size:
        9px !important;

    }


    /* ===================================
       SEARCH
    =================================== */

    .pet-modal-window #petSearch {

      margin-left:
        220px !important;

      width:
        calc(100% - 220px) !important;

      height:
        46px !important;

      box-sizing:
        border-box !important;

      border-radius:
        13px !important;

    }


    /* ===================================
       VALUE TOGGLE
    =================================== */

    .zayaxra-picker-tools {

      margin-left:
        220px !important;

      width:
        calc(100% - 220px) !important;

      display:
        flex !important;

      justify-content:
        flex-end !important;

      margin-bottom:
        9px !important;

    }


    .zayaxra-value-toggle {

      height:
        36px !important;

      padding:
        0 14px !important;

      border-radius:
        10px !important;

      border:
        1px solid
        rgba(255,255,255,.08) !important;

      background:
        rgba(255,255,255,.045) !important;

      color:
        rgba(255,255,255,.72) !important;

      font-family:
        inherit !important;

      font-size:
        10px !important;

      font-weight:
        900 !important;

      cursor:
        pointer !important;

      transition:
        .18s ease !important;

    }


    .zayaxra-value-toggle:hover,
    .zayaxra-value-toggle.active {

      color:
        #fff !important;

      border-color:
        rgba(145,120,255,.42) !important;

      background:
        rgba(120,95,255,.16) !important;

      box-shadow:
        0 0 18px
        rgba(110,85,255,.16) !important;

    }


    /* ===================================
       ITEM GRID
    =================================== */

    .pet-modal-window #pickerPets {

      margin-left:
        220px !important;

      width:
        calc(100% - 220px) !important;

      display:
        grid !important;

      grid-template-columns:
        repeat(
          auto-fill,
          minmax(145px, 1fr)
        ) !important;

      gap:
        12px !important;

      max-height:
        490px !important;

      overflow-y:
        auto !important;

      padding:
        5px 5px 13px !important;

      box-sizing:
        border-box !important;

    }


    /* ===================================
       ITEM CARD
    =================================== */

    .pet-choice {

      position:
        relative !important;

      min-width:
        0 !important;

      min-height:
        168px !important;

      padding:
        12px !important;

      border:
        1px solid
        rgba(255,255,255,.06) !important;

      border-radius:
        14px !important;

      background:
        linear-gradient(
          145deg,
          rgba(255,255,255,.05),
          rgba(255,255,255,.018)
        ) !important;

      color:
        #fff !important;

      cursor:
        pointer !important;

      font-family:
        inherit !important;

      text-align:
        left !important;

      transition:
        transform .18s ease,
        border-color .18s ease,
        box-shadow .18s ease,
        background .18s ease !important;

      overflow:
        hidden !important;

      box-sizing:
        border-box !important;

    }


    .pet-choice:hover {

      transform:
        translateY(-4px) !important;

      border-color:
        rgba(145,120,255,.40) !important;

      background:
        linear-gradient(
          145deg,
          rgba(125,95,255,.12),
          rgba(255,255,255,.03)
        ) !important;

      box-shadow:
        0 12px 28px
        rgba(0,0,0,.24),
        0 0 18px
        rgba(105,80,230,.11) !important;

    }


    .choice-image {

      height:
        92px !important;

      display:
        flex !important;

      align-items:
        center !important;

      justify-content:
        center !important;

    }


    .choice-image img {

      max-width:
        92px !important;

      max-height:
        92px !important;

      object-fit:
        contain !important;

      filter:
        drop-shadow(
          0 8px 14px
          rgba(0,0,0,.30)
        );

      transition:
        .20s ease !important;

    }


    .pet-choice:hover
    .choice-image img {

      transform:
        scale(1.08)
        translateY(-2px) !important;

    }


    .pet-choice strong {

      display:
        block !important;

      margin-top:
        7px !important;

      color:
        rgba(255,255,255,.88) !important;

      font-size:
        11px !important;

      font-weight:
        850 !important;

      line-height:
        1.25 !important;

    }


    .rarity-tag {

      display:
        block !important;

      margin-top:
        4px !important;

      min-height:
        13px !important;

      color:
        rgba(255,255,255,.34) !important;

      font-size:
        9px !important;

    }


    .pet-choice small {

      display:
        block !important;

      margin-top:
        3px !important;

      color:
        rgba(175,155,255,.90) !important;

      font-size:
        10px !important;

      font-weight:
        900 !important;

      transition:
        opacity .2s ease,
        filter .2s ease !important;

    }


    .zayaxra-values-hidden
    .pet-choice small {

      opacity:
        0 !important;

      filter:
        blur(7px) !important;

    }


    /* ===================================
       BOTTOM CONTROL PANEL
    =================================== */

    .pet-modal-window .picker-settings {

      margin-left:
        220px !important;

      width:
        calc(100% - 220px) !important;

      box-sizing:
        border-box !important;

      margin-top:
        10px !important;

    }


    #pickerBar {

      display:
        flex !important;

      flex-direction:
        row !important;

      align-items:
        center !important;

      gap:
        12px !important;

      width:
        100% !important;

      min-height:
        76px !important;

      padding:
        9px 12px !important;

      box-sizing:
        border-box !important;

      border-radius:
        15px !important;

      border:
        1px solid
        rgba(255,255,255,.07) !important;

      background:
        linear-gradient(
          145deg,
          rgba(255,255,255,.045),
          rgba(255,255,255,.018)
        ) !important;

      box-shadow:
        0 10px 30px
        rgba(0,0,0,.15) !important;

    }


    #pickerBar.hidden {

      display:
        flex !important;

    }


    /* ===================================
       PREVIEW
    =================================== */

    #pickerPreview {

      flex:
        0 0 150px !important;

      width:
        150px !important;

      min-width:
        150px !important;

      min-height:
        54px !important;

      display:
        flex !important;

      align-items:
        center !important;

      justify-content:
        center !important;

    }


    /* ===================================
       D N M F R — TEK YATAY SATIR
    =================================== */

    #pickerBar .picker-options {

      flex:
        1 1 auto !important;

      min-width:
        0 !important;

      display:
        flex !important;

      flex-direction:
        row !important;

      align-items:
        center !important;

      justify-content:
        center !important;

      gap:
        8px !important;

      flex-wrap:
        nowrap !important;

    }


    /*
     * Eski iki grubun dikey yapısını
     * tamamen kaldırıyoruz.
     */

    #pickerBar .form-toggles,
    #pickerBar .potion-toggles {

      display:
        contents !important;

    }


    /* ===================================
       BUTONLAR
    =================================== */

    #pickerBar .form-btn,
    #pickerBar .potion-btn {

      flex:
        0 0 52px !important;

      width:
        52px !important;

      min-width:
        52px !important;

      max-width:
        52px !important;

      height:
        38px !important;

      margin:
        0 !important;

      padding:
        0 !important;

      display:
        flex !important;

      align-items:
        center !important;

      justify-content:
        center !important;

      border-radius:
        10px !important;

      font-size:
        0 !important;

      font-weight:
        900 !important;

      color:
        rgba(255,255,255,.55) !important;

      background:
        rgba(255,255,255,.035) !important;

      border:
        1px solid
        rgba(255,255,255,.07) !important;

      cursor:
        pointer !important;

      box-sizing:
        border-box !important;

      transition:
        .18s ease !important;

    }


    /* D */

    #normalFormBtn::before {

      content:
        "D";

      font-size:
        12px;

      font-weight:
        900;

    }


    /* N */

    #btnNeon::before {

      content:
        "N";

      font-size:
        12px;

      font-weight:
        900;

    }


    /* M */

    #btnMega::before {

      content:
        "M";

      font-size:
        12px;

      font-weight:
        900;

    }


    /* F */

    #btnFly::before {

      content:
        "F";

      font-size:
        12px;

      font-weight:
        900;

    }


    /* R */

    #btnRide::before {

      content:
        "R";

      font-size:
        12px;

      font-weight:
        900;

    }


    /* ===================================
       GEREKSİZ ESKİ BUTONLAR
    =================================== */

    #noPotionBtn,
    #flyRideBtn {

      display:
        none !important;

    }


    /* ===================================
       ACTIVE GLOW
    =================================== */

    #pickerBar .form-btn.active,
    #pickerBar .potion-btn.active {

      color:
        #fff !important;

      background:
        linear-gradient(
          135deg,
          rgba(140,110,255,.30),
          rgba(75,105,255,.15)
        ) !important;

      border-color:
        rgba(165,140,255,.74) !important;

      box-shadow:

        0 0 0 1px
        rgba(150,125,255,.10),

        0 0 20px
        rgba(125,95,255,.38),

        0 8px 25px
        rgba(90,65,220,.22) !important;

    }


    #pickerBar .form-btn:hover,
    #pickerBar .potion-btn:hover {

      color:
        #fff !important;

      border-color:
        rgba(145,120,255,.42) !important;

      transform:
        translateY(-2px) !important;

    }


    /* ===================================
       ADD
    =================================== */

    #pickerBar .picker-add {

      flex:
        0 0 auto !important;

      display:
        flex !important;

      flex-direction:
        row !important;

      align-items:
        center !important;

      gap:
        8px !important;

    }


    #pickerBar .picker-value {

      min-width:
        50px !important;

      height:
        38px !important;

      display:
        flex !important;

      align-items:
        center !important;

      justify-content:
        center !important;

      border-radius:
        9px !important;

    }


    #pickerBar .add-confirm {

      height:
        38px !important;

      border-radius:
        9px !important;

    }


    /* ===================================
       MOBILE
    =================================== */

    @media (max-width: 800px) {

      #zayaxraCategorySidebar {

        position:
          relative !important;

        left:
          auto !important;

        top:
          auto !important;

        bottom:
          auto !important;

        width:
          auto !important;

        margin:
          0 0 12px !important;

        display:
          grid !important;

        grid-template-columns:
          repeat(
            2,
            minmax(0,1fr)
          ) !important;

      }


      .zayaxra-category-title {

        grid-column:
          1 / -1 !important;

      }


      .pet-modal-window #petSearch,
      .zayaxra-picker-tools,
      .pet-modal-window #pickerPets,
      .pet-modal-window .picker-settings {

        margin-left:
          0 !important;

        width:
          100% !important;

      }


      #pickerBar {

        flex-direction:
          column !important;

      }


      #pickerPreview {

        width:
          100% !important;

        min-width:
          0 !important;

        flex:
          none !important;

      }


      #pickerBar .picker-options {

        width:
          100% !important;

        overflow-x:
          auto !important;

        justify-content:
          flex-start !important;

      }

    }

  `;


  document.head.appendChild(
    style
  );

}


/* =========================================================
   VALUE TOGGLE
========================================================= */

function createValueToggle() {

  const search =
    $("petSearch");


  if (
    !search ||
    $("zayaxraValueToggle")
  ) {

    return;

  }


  const tools =
    document.createElement(
      "div"
    );


  tools.className =
    "zayaxra-picker-tools";


  const button =
    document.createElement(
      "button"
    );


  button.type =
    "button";


  button.id =
    "zayaxraValueToggle";


  button.className =
    "zayaxra-value-toggle";


  button.textContent =
    "SHOW VALUES";


  button.addEventListener(
    "click",
    () => {

      showPickerValues =
        !showPickerValues;


      updateValueVisibility();

    }
  );


  tools.appendChild(
    button
  );


  search.parentNode.insertBefore(
    tools,
    search
  );


  updateValueVisibility();

}


function updateValueVisibility() {

  const modal =
    $("petPicker");


  const button =
    $("zayaxraValueToggle");


  if (modal) {

    modal.classList.toggle(

      "zayaxra-values-hidden",

      !showPickerValues

    );

  }


  if (button) {

    button.textContent =

      showPickerValues

        ? "HIDE VALUES"

        : "SHOW VALUES";


    button.classList.toggle(
      "active",
      showPickerValues
    );

  }

}


/* =========================================================
   PICKER SEARCH
========================================================= */

function filterPickerPets() {

  renderPickerPets();

}


/* =========================================================
   PICKER RENDER
========================================================= */

function renderPickerPets() {

  const box =
    $("pickerPets");


  if (!box) {
    return;
  }


  const query =
    String(
      $("petSearch")?.value ||
      ""
    )
    .trim()
    .toLowerCase();


  let items =
    getCategoryItems();


  if (query) {

    items =
      items.filter(
        item => {

          const name =
            String(
              item.name || ""
            )
            .toLowerCase();


          const category =
            String(
              CATEGORY_NAMES[
                getItemCategory(
                  item
                )
              ] || ""
            )
            .toLowerCase();


          const rarity =
            String(
              rarityName(
                item.rarity
              )
            )
            .toLowerCase();


          return (

            name.includes(
              query
            )

            ||

            category.includes(
              query
            )

            ||

            rarity.includes(
              query
            )

          );

        }
      );

  }


  box.innerHTML =
    "";


  if (!items.length) {

    box.innerHTML = `

      <div class="empty-picker">

        <span>SEARCH</span>

        <strong>
          Eşya bulunamadı
        </strong>

        <small>
          Başka bir arama veya kategori dene.
        </small>

      </div>

    `;

    updateValueVisibility();

    return;

  }


  const fragment =
    document.createDocumentFragment();


  items.forEach(
    item => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "pet-choice";


      button.dataset.itemId =
        item.id;


      button.innerHTML = `

        <div class="choice-image">

          ${imageHTML(
            item
          )}

        </div>


        <strong>

          ${escapeHTML(
            item.name
          )}

        </strong>


        <span class="rarity-tag">

          ${escapeHTML(
            rarityName(
              item.rarity
            )
          )}

        </span>


        <small>

          ${formatValue(
            item.value
          )}

        </small>

      `;


      /*
       * Karta basınca direkt seç.
       */

      button.addEventListener(
        "click",
        () => {

          selectPickerPet(
            item
          );

        }
      );


      fragment.appendChild(
        button
      );

    }
  );


  box.appendChild(
    fragment
  );


  updateValueVisibility();

}


/* =========================================================
   OPEN PICKER
========================================================= */

function openPetPicker(
  side
) {

  if (
    side !== "you" &&
    side !== "them"
  ) {

    return;

  }


  pickerSide =
    side;


  /*
   * ÖNEMLİ:
   *
   * Burada selectedForm ve
   * selectedPotion sıfırlanmıyor.
   *
   * Böylece kullanıcı önce
   * D/N/M/F/R seçebilir.
   */

  selectedPet =
    null;


  const modal =
    $("petPicker");


  const title =
    $("petPickerTitle");


  const search =
    $("petSearch");


  if (title) {

    title.textContent =

      side === "you"

        ? "Senin teklifine pet veya eşya ekle"

        : "Karşı tarafın teklifine pet veya eşya ekle";

  }


  if (search) {

    search.value =
      "";

  }


  /*
   * Panel her zaman açık.
   */

  $("pickerBar")
    ?.classList.remove(
      "hidden"
    );


  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

  renderPickerPets();


  if (modal) {

    modal.classList.add(
      "show",
      "active"
    );


    modal.setAttribute(
      "aria-hidden",
      "false"
    );

  }


  document.body.classList.add(
    "modal-open"
  );


  document.body.classList.add(
    "profile-open"
  );


  updateValueVisibility();


  setTimeout(
    () => {

      search?.focus();

    },
    50
  );

}


/* =========================================================
   CLOSE PICKER
========================================================= */

function closePetPicker() {

  const modal =
    $("petPicker");


  if (modal) {

    modal.classList.remove(
      "show",
      "active"
    );


    modal.setAttribute(
      "aria-hidden",
      "true"
    );

  }


  document.body.classList.remove(
    "profile-open"
  );


  if (
    !$("profileModal")
      ?.classList.contains(
        "active"
      )
  ) {

    document.body.classList.remove(
      "modal-open"
    );

  }


  pickerSide =
    null;

  selectedPet =
    null;

}


/* =========================================================
   SELECT PET
========================================================= */

function selectPickerPet(
  item
) {

  if (!item) {
    return;
  }


  /*
   * SADECE PET DEĞİŞİYOR.
   *
   * D/N/M/F/R DURUMU
   * SIFIRLANMIYOR.
   */

  selectedPet =
    item;


  /*
   * Egg veya diğer eşya seçildiyse
   * mevcut seçimler görünmez.
   *
   * Fakat pet seçildiğinde tekrar
   * kullanılabilir.
   */

  $("pickerBar")
    ?.classList.remove(
      "hidden"
    );


  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

}


/* =========================================================
   PREVIEW
========================================================= */

function renderPickerPreview() {

  const box =
    $("pickerPreview");


  if (!box) {
    return;
  }


  if (!selectedPet) {

    box.innerHTML = `

      <div class="preview-info">

        <strong>
          Select an item
        </strong>

        <span>
          Önce D / N / M / F / R seçebilir,
          sonra item seçebilirsin.
        </span>

      </div>

    `;

    return;

  }


  const pet =
    isPet(
      selectedPet
    );


  const chips = [];


  if (
    pet &&
    selectedForm ===
    "neon"
  ) {

    chips.push(
      `<span class="vchip neon">N</span>`
    );

  }


  if (
    pet &&
    selectedForm ===
    "mega"
  ) {

    chips.push(
      `<span class="vchip mega">M</span>`
    );

  }


  if (
    pet &&
    selectedPotion.fly
  ) {

    chips.push(
      `<span class="vchip fly">F</span>`
    );

  }


  if (
    pet &&
    selectedPotion.ride
  ) {

    chips.push(
      `<span class="vchip ride">R</span>`
    );

  }


  box.innerHTML = `

    <div class="pet-image-wrap">

      ${
        selectedForm ===
          "neon" &&
        pet

          ? `<div class="neon-effect"></div>`

          : ""
      }


      ${
        selectedForm ===
          "mega" &&
        pet

          ? `<div class="mega-effect"></div>`

          : ""
      }


      ${imageHTML(
        selectedPet
      )}


      <div class="pet-badges">

        ${
          pet &&
          selectedForm ===
            "neon"

            ? `<span class="mini-chip neon">N</span>`

            : ""
        }


        ${
          pet &&
          selectedForm ===
            "mega"

            ? `<span class="mini-chip mega">M</span>`

            : ""
        }


        ${
          pet &&
          selectedPotion.fly

            ? `<span class="mini-chip fly">F</span>`

            : ""
        }


        ${
          pet &&
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

        ${chips.join("")}

      </div>

    </div>

  `;

}


/* =========================================================
   PICKER BUTTON STATE
========================================================= */

function resetPickerButtons() {

  /*
   * D seçili başlangıç.
   */

  selectedForm =
    "normal";


  selectedPotion = {

    fly: false,

    ride: false

  };


  updatePickerButtons();

}


function updatePickerButtons() {

  const pet =
    isPet(
      selectedPet
    );


  /*
   * D
   */

  $("normalFormBtn")
    ?.classList.toggle(

      "active",

      selectedForm ===
      "normal"

    );


  /*
   * N
   */

  $("btnNeon")
    ?.classList.toggle(

      "active",

      pet &&
      selectedForm ===
      "neon"

    );


  /*
   * M
   */

  $("btnMega")
    ?.classList.toggle(

      "active",

      pet &&
      selectedForm ===
      "mega"

    );


  /*
   * F
   */

  $("btnFly")
    ?.classList.toggle(

      "active",

      pet &&
      selectedPotion.fly

    );


  /*
   * R
   */

  $("btnRide")
    ?.classList.toggle(

      "active",

      pet &&
      selectedPotion.ride

    );

}


/* =========================================================
   FORM SELECTION
========================================================= */

function toggleForm(
  form
) {

  if (

    ![
      "normal",
      "neon",
      "mega"
    ].includes(
      form
    )

  ) {

    return;

  }


  /*
   * Pet seçilmeden de
   * D/N/M değiştirilebilir.
   */

  selectedForm =
    form;


  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

}


/* =========================================================
   POTION SELECTION
========================================================= */

function togglePotion(
  type
) {

  /*
   * Pet seçilmeden de F/R seçilebilir.
   */

  if (
    type ===
    "none"
  ) {

    selectedPotion = {

      fly: false,

      ride: false

    };

  }


  else if (
    type ===
    "fly"
  ) {

    selectedPotion = {

      fly:
        !selectedPotion.fly,

      ride:
        false

    };

  }


  else if (
    type ===
    "ride"
  ) {

    selectedPotion = {

      fly:
        false,

      ride:
        !selectedPotion.ride

    };

  }


  else if (
    type ===
    "flyride"
  ) {

    const active =

      selectedPotion.fly &&
      selectedPotion.ride;


    selectedPotion = {

      fly:
        !active,

      ride:
        !active

    };

  }


  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

}


/* =========================================================
   MODIFIED VALUE
========================================================= */

function getModifiedValue(
  item
) {

  if (!item) {
    return 0;
  }


  let value =
    Number(
      item.value || 0
    );


  if (
    !Number.isFinite(value)
  ) {

    value = 0;

  }


  /*
   * Sadece PETLER:
   */

  if (
    !isPet(item)
  ) {

    return value;

  }


  if (
    selectedForm ===
    "neon"
  ) {

    value *= 4;

  }


  else if (
    selectedForm ===
    "mega"
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


/* =========================================================
   PICKER VALUE
========================================================= */

function updatePickerValue() {

  const element =
    $("pickerValue");


  if (!element) {
    return;
  }


  if (!selectedPet) {

    element.textContent =
      "0";

    return;

  }


  element.textContent =
    formatValue(
      getModifiedValue(
        selectedPet
      )
    );

}


/* =========================================================
   ADD TO TRADE
========================================================= */

function confirmAddPet() {

  if (
    !selectedPet ||
    !pickerSide
  ) {

    return;

  }


  const category =
    getItemCategory(
      selectedPet
    );


  /*
   * Pet olmayan hiçbir itemde
   * D/N/M/F/R uygulanmaz.
   */

  const itemIsPet =
    category ===
    "pets";


  const finalForm =
    itemIsPet
      ? selectedForm
      : "normal";


  const finalFly =
    itemIsPet
      ? Boolean(
          selectedPotion.fly
        )
      : false;


  const finalRide =
    itemIsPet
      ? Boolean(
          selectedPotion.ride
        )
      : false;


  let finalValue =
    Number(
      selectedPet.value || 0
    );


  if (
    !Number.isFinite(
      finalValue
    )
  ) {

    finalValue = 0;

  }


  if (itemIsPet) {

    if (
      finalForm ===
      "neon"
    ) {

      finalValue *= 4;

    }


    else if (
      finalForm ===
      "mega"
    ) {

      finalValue *= 16;

    }


    if (finalFly) {

      finalValue += 0.25;

    }


    if (finalRide) {

      finalValue += 0.25;

    }

  }


  const item = {

    id:
      selectedPet.id,

    uniqueId:

      `${Date.now()}_${Math.random()
        .toString(36)
        .slice(2, 10)}`,

    name:
      selectedPet.name,

    category,

    type:
      category,

    rarity:
      selectedPet.rarity,

    image:
      selectedPet.image,

    baseValue:
      Number(
        selectedPet.value || 0
      ),

    value:
      finalValue,

    form:
      finalForm,

    fly:
      finalFly,

    ride:
      finalRide

  };


  if (
    pickerSide ===
    "you"
  ) {

    youTrade.push(
      item
    );

  }

  else {

    themTrade.push(
      item
    );

  }


  recordedTradeKey =
    "";


  closePetPicker();

  updateTradeUI();

}


/* =========================================================
   TRADE TOTAL
========================================================= */

function calculateTotal(
  trade
) {

  if (
    !Array.isArray(
      trade
    )
  ) {

    return 0;

  }


  return trade.reduce(

    (
      total,
      item
    ) => {

      const value =
        Number(
          item?.value || 0
        );


      return (

        total +

        (
          Number.isFinite(
            value
          )
            ? value
            : 0
        )

      );

    },

    0

  );

}


/* =========================================================
   TRADE RENDER
========================================================= */

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


  if (
    !trade.length
  ) {

    element.innerHTML = `

      <div class="empty-items trade-empty">

        <span class="empty-plus">
          ＋
        </span>


        <strong>
          Henüz pet eklenmedi
        </strong>


        <small>

          ${
            side ===
            "you"

              ? "Teklifini oluşturmak için pet ekle"

              : "Karşı tarafın teklifini oluştur"

          }

        </small>

      </div>

    `;

    return;

  }


  element.innerHTML =

    trade.map(
      item => {

        const badges = [];


        if (
          item.category ===
            "pets" &&
          item.form ===
            "neon"
        ) {

          badges.push(

            `<span class="trade-slot-badge neon">N</span>`

          );

        }


        if (
          item.category ===
            "pets" &&
          item.form ===
            "mega"
        ) {

          badges.push(

            `<span class="trade-slot-badge mega">M</span>`

          );

        }


        if (
          item.category ===
            "pets" &&
          item.fly
        ) {

          badges.push(

            `<span class="trade-slot-badge fly">F</span>`

          );

        }


        if (
          item.category ===
            "pets" &&
          item.ride
        ) {

          badges.push(

            `<span class="trade-slot-badge ride">R</span>`

          );

        }


        return `

          <div

            class="trade-slot"

            data-trade-id="${escapeHTML(
              item.uniqueId
            )}"

            data-side="${side}"

            title="Kaldırmak için tıkla"

          >

            <div class="trade-slot-image">

              ${
                item.form ===
                  "neon" &&
                item.category ===
                  "pets"

                  ? `<div class="neon-effect"></div>`

                  : ""
              }


              ${
                item.form ===
                  "mega" &&
                item.category ===
                  "pets"

                  ? `<div class="mega-effect"></div>`

                  : ""
              }


              ${imageHTML(
                item,
                "trade-slot-photo"
              )}


              <div class="trade-slot-badges">

                ${badges.join("")}

              </div>

            </div>


            <div

              class="trade-slot-name"

              title="${escapeHTML(
                item.name
              )}"

            >

              ${escapeHTML(
                item.name
              )}

            </div>


            <div class="trade-slot-value">

              ${formatValue(
                item.value
              )}

            </div>


            <button

              type="button"

              class="remove-item"

              data-side="${side}"

              data-id="${escapeHTML(
                item.uniqueId
              )}"

              aria-label="Kaldır"

            >

              ×

            </button>

          </div>

        `;

      }
    )
    .join("");

}


/* =========================================================
   REMOVE TRADE ITEM
========================================================= */

function removeTradePet(
  side,
  uniqueId
) {

  if (
    side ===
    "you"
  ) {

    youTrade =
      youTrade.filter(
        item =>
          item.uniqueId !==
          uniqueId
      );

  }


  else if (
    side ===
    "them"
  ) {

    themTrade =
      themTrade.filter(
        item =>
          item.uniqueId !==
          uniqueId
      );

  }


  recordedTradeKey =
    "";


  updateTradeUI();

}


/* =========================================================
   TRADE CARD REMOVE
========================================================= */

function initTradeCardRemove() {

  [
    "youItems",
    "themItems"
  ]
  .forEach(
    id => {

      const container =
        $(id);


      if (!container) {
        return;
      }


      container.addEventListener(
        "click",
        event => {

          const removeButton =
            event.target.closest(
              ".remove-item"
            );


          if (
            removeButton
          ) {

            event.preventDefault();

            event.stopPropagation();


            removeTradePet(

              removeButton.dataset.side,

              removeButton.dataset.id

            );


            return;

          }


          const slot =
            event.target.closest(
              ".trade-slot"
            );


          if (!slot) {
            return;
          }


          removeTradePet(

            slot.dataset.side,

            slot.dataset.tradeId

          );

        }
      );

    }
  );

}


/* =========================================================
   UPDATE TRADE
========================================================= */

function updateTradeUI() {

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


  const youTotal =
    calculateTotal(
      youTrade
    );


  const themTotal =
    calculateTotal(
      themTrade
    );


  if (
    $("youTotal")
  ) {

    $("youTotal").textContent =
      formatValue(
        youTotal
      );

  }


  if (
    $("themTotal")
  ) {

    $("themTotal").textContent =
      formatValue(
        themTotal
      );

  }


  updateResult();

}


/* =========================================================
   WFL RESULT
========================================================= */

function updateResult() {

  const resultCard =
    $("resultCard");


  const resultText =
    $("resultStatusText");


  const resultHint =
    $("resultHint");


  const diffNumber =
    $("resultDiffNumber");


  const diffDisplay =
    $("resultDiffDisplay");


  const statusBar =
    $("tradeStatusBar");


  const statusLabel =
    $("tradeStatusLabel");


  const youTotal =
    calculateTotal(
      youTrade
    );


  const themTotal =
    calculateTotal(
      themTrade
    );


  if (
    !youTrade.length ||
    !themTrade.length
  ) {

    if (
      resultText
    ) {

      resultText.textContent =
        "Pet ekleyerek başla";

    }


    if (
      resultHint
    ) {

      resultHint.textContent =
        "İki tarafa da pet eklediğinde avantajı burada göreceksin.";

    }


    if (
      diffNumber
    ) {

      diffNumber.textContent =
        "—";

    }


    if (
      diffDisplay
    ) {

      diffDisplay.textContent =
        "—";

    }


    if (
      statusLabel
    ) {

      statusLabel.textContent =
        "TRADE HAZIR";

    }


    if (
      resultCard
    ) {

      resultCard.className =
        "result-card trade-result-card";

    }


    if (
      statusBar
    ) {

      statusBar.className =
        "trade-status-bar";

    }


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


  const roundedPercent =
    Math.round(
      percent * 10
    ) / 10;


  let diffText =
    "0%";


  if (
    roundedPercent > 0
  ) {

    diffText =
      `+${roundedPercent.toFixed(
        1
      )}%`;

  }


  else if (
    roundedPercent < 0
  ) {

    diffText =
      `${roundedPercent.toFixed(
        1
      )}%`;

  }


  if (
    diffNumber
  ) {

    diffNumber.textContent =
      diffText;

  }


  if (
    diffDisplay
  ) {

    diffDisplay.textContent =
      diffText;

  }


  let status =
    "FAIR";


  let title =
    "Adil Takas";


  let hint =
    "İki tarafın verdiği değerler neredeyse eşit.";


  let resultClass =
    "fair";


  let statusClass =
    "fair";


  if (
    Math.abs(
      percent
    ) <= 3
  ) {

    status =
      "FAIR";

    title =
      "Adil Takas";

    hint =
      "İki tarafın verdiği değerler neredeyse eşit.";

    resultClass =
      "fair";

    statusClass =
      "fair";

  }


  else if (
    percent > 0
  ) {

    if (
      percent >= 10
    ) {

      status =
        "BIG WIN";

      title =
        "Büyük Win!";

      hint =
        "Karşı taraf belirgin şekilde daha fazla değer veriyor.";

      resultClass =
        "big-win";

      statusClass =
        "big-win";

    }

    else {

      status =
        "SMALL WIN";

      title =
        "Küçük Win";

      hint =
        "Karşı taraf biraz daha fazla değer veriyor.";

      resultClass =
        "small-win";

      statusClass =
        "small-win";

    }

  }


  else {

    if (
      Math.abs(
        percent
      ) >= 10
    ) {

      status =
        "BIG LOSE";

      title =
        "Büyük Lose";

      hint =
        "Sen belirgin şekilde daha fazla değer veriyorsun.";

      resultClass =
        "big-lose";

      statusClass =
        "big-lose";

    }

    else {

      status =
        "SMALL LOSE";

      title =
        "Küçük Lose";

      hint =
        "Sen biraz daha fazla değer veriyorsun.";

      resultClass =
        "small-lose";

      statusClass =
        "small-lose";

    }

  }


  if (
    resultText
  ) {

    resultText.textContent =
      title;

  }


  if (
    resultHint
  ) {

    resultHint.textContent =
      hint;

  }


  if (
    statusLabel
  ) {

    statusLabel.textContent =
      status;

  }


  if (
    resultCard
  ) {

    resultCard.className =
      `result-card trade-result-card ${resultClass}`;

  }


  if (
    statusBar
  ) {

    statusBar.className =
      `trade-status-bar ${statusClass}`;

  }


  recordTradeResult(
    status
  );

}


/* =========================================================
   STATS
========================================================= */

function getTradeStats() {

  try {

    const data =
      JSON.parse(

        localStorage.getItem(
          "zayaggTradeStats"
        ) || "{}"

      );


    return {

      wins:
        Number(
          data.wins
        ) || 0,

      fair:
        Number(
          data.fair
        ) || 0,

      loses:
        Number(
          data.loses
        ) || 0

    };

  }

  catch {

    return {

      wins: 0,

      fair: 0,

      loses: 0

    };

  }

}


function saveTradeStats(
  stats
) {

  localStorage.setItem(

    "zayaggTradeStats",

    JSON.stringify({

      wins:
        Number(
          stats.wins
        ) || 0,

      fair:
        Number(
          stats.fair
        ) || 0,

      loses:
        Number(
          stats.loses
        ) || 0

    })

  );

}


function recordTradeResult(
  status
) {

  const youTotal =
    calculateTotal(
      youTrade
    );


  if (
    !youTrade.length ||
    !themTrade.length ||
    youTotal <= 0
  ) {

    return;

  }


  const key =
    JSON.stringify({

      you:
        youTrade.map(
          item => ({

            id:
              item.uniqueId,

            value:
              item.value

          })
        ),


      them:
        themTrade.map(
          item => ({

            id:
              item.uniqueId,

            value:
              item.value

          })
        ),


      status

    });


  if (
    recordedTradeKey ===
    key
  ) {

    return;

  }


  recordedTradeKey =
    key;


  const stats =
    getTradeStats();


  if (

    status ===
      "BIG WIN" ||

    status ===
      "SMALL WIN"

  ) {

    stats.wins++;

  }

  else if (
    status ===
    "FAIR"
  ) {

    stats.fair++;

  }

  else {

    stats.loses++;

  }


  saveTradeStats(
    stats
  );


  updateProfileStats();

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
   PROFILE
========================================================= */

function getProfileData() {

  try {

    const data =
      JSON.parse(

        localStorage.getItem(
          "zayaggProfile"
        ) || "{}"

      );


    return {

      name:
        data.name ||
        "Zayaxra Kullanıcısı",

      username:
        data.username ||
        "@kullanici",

      bio:
        data.bio ||
        "Henüz bir biyografi eklenmedi.",

      avatar:
        data.avatar ||
        "🐉"

    };

  }

  catch {

    return {

      name:
        "Zayaxra Kullanıcısı",

      username:
        "@kullanici",

      bio:
        "Henüz bir biyografi eklenmedi.",

      avatar:
        "🐉"

    };

  }

}


function saveProfileData(
  data
) {

  localStorage.setItem(

    "zayaggProfile",

    JSON.stringify(
      data
    )

  );

}


function migrateLegacyProfile() {

  const migrationKey =
    "zayaxraProfileMigrationV1";


  if (
    localStorage.getItem(
      migrationKey
    ) === "1"
  ) {

    return;

  }


  try {

    const raw =
      localStorage.getItem(
        "zayaggProfile"
      );


    if (!raw) {

      localStorage.setItem(
        migrationKey,
        "1"
      );

      return;

    }


    const data =
      JSON.parse(
        raw
      );


    const name =
      String(
        data?.name ||
        ""
      )
      .toLowerCase();


    const username =
      String(
        data?.username ||
        ""
      )
      .toLowerCase();


    const bio =
      String(
        data?.bio ||
        ""
      )
      .toLowerCase();


    const oldProfile =

      name.includes(
        "zayagg"
      )

      ||

      username.includes(
        "zayagg"
      )

      ||

      bio.includes(
        "adm"
      );


    if (
      oldProfile
    ) {

      saveProfileData({

        name:
          "Zayaxra Kullanıcısı",

        username:
          "@kullanici",

        bio:
          "Henüz bir biyografi eklenmedi.",

        avatar:
          data?.avatar ||
          "🐉"

      });

    }


    localStorage.setItem(
      migrationKey,
      "1"
    );

  }

  catch {

    saveProfileData({

      name:
        "Zayaxra Kullanıcısı",

      username:
        "@kullanici",

      bio:
        "Henüz bir biyografi eklenmedi.",

      avatar:
        "🐉"

    });


    localStorage.setItem(
      migrationKey,
      "1"
    );

  }

}


function updateProfileStats() {

  const stats =
    getTradeStats();


  const total =
    stats.wins +
    stats.fair +
    stats.loses;


  if (
    $("profileWins")
  ) {

    $("profileWins").textContent =
      stats.wins;

  }


  if (
    $("profileFair")
  ) {

    $("profileFair").textContent =
      stats.fair;

  }


  if (
    $("profileLoses")
  ) {

    $("profileLoses").textContent =
      stats.loses;

  }


  if (
    $("profileTrades")
  ) {

    $("profileTrades").textContent =
      total;

  }

}


function renderProfile() {

  const profile =
    getProfileData();


  if (
    $("profileName")
  ) {

    $("profileName").textContent =
      profile.name;

  }


  if (
    $("profileUsername")
  ) {

    $("profileUsername").textContent =
      profile.username;

  }


  if (
    $("profileBio")
  ) {

    $("profileBio").textContent =
      profile.bio;

  }


  if (
    $("profileAvatar")
  ) {

    $("profileAvatar").textContent =
      profile.avatar;

  }


  if (
    $("editName")
  ) {

    $("editName").value =
      profile.name;

  }


  if (
    $("editUsername")
  ) {

    $("editUsername").value =
      profile.username;

  }


  if (
    $("editBio")
  ) {

    $("editBio").value =
      profile.bio;

  }


  selectedAvatar =
    profile.avatar;


  renderAvatarPicker();

  updateProfileStats();

}


function openProfile() {

  const modal =
    $("profileModal");


  if (!modal) {
    return;
  }


  renderProfile();


  modal.classList.add(
    "show",
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );

}


function closeProfile() {

  const modal =
    $("profileModal");


  if (!modal) {
    return;
  }


  modal.classList.remove(
    "show",
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "modal-open"
  );

}


function openEditProfile() {

  renderProfile();


  $("profileEditForm")
    ?.classList.remove(
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


function renderAvatarPicker() {

  const box =
    $("avatarPick");


  if (!box) {
    return;
  }


  const avatars = [

    "🐉",
    "🐲",
    "🦊",
    "🐺",
    "🦁",
    "🐯",
    "🦄",
    "🐸",
    "🐼",
    "🐵",
    "🐨",
    "🐰"

  ];


  box.innerHTML =
    avatars
      .map(
        avatar => `

          <button

            type="button"

            class="avatar-opt ${
              selectedAvatar ===
              avatar
                ? "active"
                : ""
            }"

            data-avatar="${avatar}"

          >

            ${avatar}

          </button>

        `
      )
      .join("");


  box
    .querySelectorAll(
      ".avatar-opt"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            selectedAvatar =
              button.dataset.avatar ||
              "🐉";


            box
              .querySelectorAll(
                ".avatar-opt"
              )
              .forEach(
                item => {

                  item.classList.remove(
                    "active"
                  );

                }
              );


            button.classList.add(
              "active"
            );

          }
        );

      }
    );

}


function saveEditedProfile(
  event
) {

  event.preventDefault();


  const name =
    $("editName")
      ?.value
      .trim() ||

    "Zayaxra Kullanıcısı";


  let username =
    $("editUsername")
      ?.value
      .trim() ||

    "@kullanici";


  if (
    !username.startsWith(
      "@"
    )
  ) {

    username =
      "@" +
      username;

  }


  const bio =
    $("editBio")
      ?.value
      .trim() ||

    "Henüz bir biyografi eklenmedi.";


  saveProfileData({

    name,

    username,

    bio,

    avatar:
      selectedAvatar ||
      "🐉"

  });


  renderProfile();

  closeEditProfile();

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

  document.body.classList.toggle(
    "menu-open"
  );


  $("menuButton")
    ?.setAttribute(

      "aria-expanded",

      document.body.classList.contains(
        "menu-open"
      )
        ? "true"
        : "false"

    );

}


function closeMenu() {

  document.body.classList.remove(
    "menu-open"
  );

}


/* =========================================================
   NAVIGATION
========================================================= */

function scrollToSection(
  id
) {

  const element =
    $(id);


  if (!element) {
    return;
  }


  element.scrollIntoView({

    behavior:
      "smooth",

    block:
      "start"

  });


  closeMenu();

}


function initNavigation() {

  document
    .querySelectorAll(
      "[data-scroll]"
    )
    .forEach(
      link => {

        link.addEventListener(
          "click",
          event => {

            event.preventDefault();


            const target =
              link.dataset.scroll;


            if (
              target ===
              "top"
            ) {

              window.scrollTo({

                top:
                  0,

                behavior:
                  "smooth"

              });


              closeMenu();

              return;

            }


            scrollToSection(
              target
            );

          }
        );

      }
    );


  document
    .querySelector(
      ".logo"
    )
    ?.addEventListener(
      "click",
      event => {

        event.preventDefault();


        window.scrollTo({

          top:
            0,

          behavior:
            "smooth"

        });


        closeMenu();

      }
    );

}


function initNavbar() {

  const navbar =
    document.querySelector(
      ".navbar"
    );


  if (!navbar) {
    return;
  }


  const update =
    () => {

      navbar.classList.toggle(

        "scrolled",

        window.scrollY >
          30

      );

    };


  update();


  window.addEventListener(

    "scroll",

    update,

    {
      passive:
        true
    }

  );

}


/* =========================================================
   EVENTS
========================================================= */

function initPickerSearch() {

  $("petSearch")
    ?.addEventListener(
      "input",
      filterPickerPets
    );

}


function initClearTrade() {

  $("clearBtn")
    ?.addEventListener(
      "click",
      event => {

        event.preventDefault();

        clearTrade();

      }
    );

}


function initModalEvents() {

  const picker =
    $("petPicker");


  const profile =
    $("profileModal");


  const info =
    $("infoModal");


  picker?.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        picker
      ) {

        closePetPicker();

      }

    }
  );


  profile?.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        profile
      ) {

        closeProfile();

      }

    }
  );


  info?.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        info
      ) {

        closeInfo();

      }

    }
  );

}


function initKeyboard() {

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key !==
        "Escape"
      ) {

        return;

      }


      closePetPicker();

      closeProfile();

      closeInfo();

      closeMenu();

      closeEditProfile();

    }
  );

}


/* =========================================================
   INFO
========================================================= */

function toggleZayaxraInfo() {

  const button =
    document.querySelector(
      ".info-toggle"
    );


  const panel =
    $("zayaxraInfoPanel");


  if (
    !button ||
    !panel
  ) {

    return;

  }


  const isOpen =
    panel.classList.toggle(
      "open"
    );


  button.classList.toggle(
    "active",
    isOpen
  );


  button.setAttribute(

    "aria-expanded",

    isOpen
      ? "true"
      : "false"

  );

}


function openInfo(
  event
) {

  event?.preventDefault();


  const modal =
    $("infoModal");


  if (!modal) {
    return;
  }


  modal.classList.add(
    "show",
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "modal-open"
  );

}


function closeInfo() {

  const modal =
    $("infoModal");


  if (!modal) {
    return;
  }


  modal.classList.remove(
    "show",
    "active"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  if (

    !$("profileModal")
      ?.classList.contains(
        "active"
      )

    &&

    !$("petPicker")
      ?.classList.contains(
        "active"
      )

  ) {

    document.body.classList.remove(
      "modal-open"
    );

  }

}


/* =========================================================
   INIT PICKER
========================================================= */

function initPicker() {

  addPickerStyles();

  createCategorySidebar();

  createValueToggle();

  renderPickerPreview();

  updatePickerButtons();

  updateValueVisibility();

}


/* =========================================================
   INIT
========================================================= */

function initZayaxra() {

  migrateLegacyProfile();


  initPickerSearch();

  initTradeCardRemove();

  initClearTrade();

  initNavigation();

  initNavbar();

  initModalEvents();

  initKeyboard();


  renderProfile();

  updateTradeUI();

  initPicker();


  loadFullPetDatabase();


  console.log(
    "ZAYAXRA başarıyla başlatıldı."
  );

}


/* =========================================================
   GLOBAL FUNCTIONS
========================================================= */

window.PET_DATABASE =
  PET_DATABASE;

window.ZAYAXRA_ALL_ITEMS =
  PET_DATABASE;

window.openPetPicker =
  openPetPicker;

window.closePetPicker =
  closePetPicker;

window.selectPickerPet =
  selectPickerPet;

window.confirmAddPet =
  confirmAddPet;

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

window.toggleMenu =
  toggleMenu;

window.closeMenu =
  closeMenu;

window.openInfo =
  openInfo;

window.closeInfo =
  closeInfo;

window.toggleZayaxraInfo =
  toggleZayaxraInfo;

window.clearTrade =
  clearTrade;


/* =========================================================
   START
========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(

    "DOMContentLoaded",

    initZayaxra,

    {
      once:
        true
    }

  );

}

else {

  initZayaxra();

}


/* =========================================================
   ERROR HANDLERS
========================================================= */

window.addEventListener(

  "error",

  event => {

    console.error(

      "ZAYAXRA JavaScript hatası:",

      event.error ||
      event.message

    );

  }

);


window.addEventListener(

  "unhandledrejection",

  event => {

    console.error(

      "ZAYAXRA Promise hatası:",

      event.reason

    );

  }

);
