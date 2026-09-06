/* =========================================================
   ZAYAXRA — FULL ITEM / W-F/L SYSTEM
   ========================================================= */

const DATA_URL =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/adoptme_values.json";

const IMAGE_BASE =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main";


/* =========================================================
   GLOBAL DATA
   ========================================================= */

let pets = [];
let allItems = [];

let youTrade = [];
let themTrade = [];

let pickerSide = null;
let selectedPet = null;

let selectedForm = "normal";

let selectedPotion = {
  fly: false,
  ride: false
};

let selectedValueCategory = "all";
let selectedPickerCategory = "all";

let visibleValueItems = 60;

let recordedTradeKey = "";

let selectedAvatar = "🐉";


/* =========================================================
   HELPERS
   ========================================================= */

function $(id) {
  return document.getElementById(id);
}


function formatValue(value) {

  const n = Number(value || 0);

  if (!Number.isFinite(n)) {
    return "0";
  }

  return Number.isInteger(n)
    ? String(n)
    : n.toFixed(2).replace(/\.?0+$/, "");

}


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
    .trim();

}


function normalizeImage(url) {

  if (!url) {
    return "";
  }

  url = String(url);

  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("data:")
  ) {
    return url;
  }

  if (url.startsWith("//")) {
    return "https:" + url;
  }

  if (!url.startsWith("/")) {
    url = "/" + url;
  }

  return IMAGE_BASE + url;

}


function imageHTML(item, className = "pet-photo") {

  const image =
    normalizeImage(item?.image);

  if (!image) {

    return `
      <div class="${className} image-fallback">
        📦
      </div>
    `;

  }

  return `
    <img
      src="${escapeHTML(image)}"
      alt="${escapeHTML(item?.name || "Item")}"
      class="${className}"
      loading="lazy"
      onerror="
        this.style.display='none';
        if(this.nextElementSibling)
          this.nextElementSibling.style.display='flex';
      "
    >

    <div
      class="${className} image-fallback"
      style="display:none;"
    >
      📦
    </div>
  `;

}


/* =========================================================
   RARITY
   ========================================================= */

function rarityName(rarity) {

  const r =
    normalizeText(rarity)
      .replace(/_/g, " ")
      .replace(/-/g, " ");

  const names = {

    legendary: "Legendary",

    "ultra rare": "Ultra-Rare",
    ultra: "Ultra-Rare",

    rare: "Rare",

    uncommon: "Uncommon",

    common: "Common",

    "super rare": "Super-Rare",

    unknown: "Unknown"

  };

  return names[r] || rarity || "Unknown";

}


/* =========================================================
   CATEGORY
   ========================================================= */

function normalizeCategory(type, name = "") {

  const t =
    normalizeText(type)
      .replace(/[_-]/g, "")
      .replace(/\s+/g, "");

  const n =
    normalizeText(name);

  if (
    t === "pets" ||
    t === "pet"
  ) {
    return "pets";
  }

  if (
    t === "petwear" ||
    t === "petwears" ||
    t === "petaccessories" ||
    t === "accessories" ||
    t === "wearables"
  ) {
    return "petwear";
  }

  if (
    t === "eggs" ||
    t === "egg"
  ) {
    return "eggs";
  }

  if (
    t === "vehicles" ||
    t === "vehicle" ||
    t === "cars"
  ) {
    return "vehicles";
  }

  if (
    t === "toys" ||
    t === "toy"
  ) {
    return "toys";
  }

  if (
    t === "strollers" ||
    t === "stroller"
  ) {
    return "strollers";
  }

  if (
    t === "food" ||
    t === "foods"
  ) {
    return "food";
  }

  if (
    t === "gifts" ||
    t === "gift"
  ) {
    return "gifts";
  }

  if (
    t === "stickers" ||
    t === "sticker"
  ) {
    return "stickers";
  }

  if (
    t === "other" ||
    t === "others" ||
    t === "potions" ||
    t === "potion"
  ) {
    return "other";
  }


  /* İsimden tahmin */

  if (
    n.includes("egg")
  ) {
    return "eggs";
  }

  if (
    n.includes("stroller")
  ) {
    return "strollers";
  }

  return "other";

}


function categoryName(category) {

  const names = {

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

  return names[category] || "Other";

}


function categoryIcon(category) {

  const icons = {

    pets: "🐾",
    petwear: "👕",
    eggs: "🥚",
    vehicles: "🚗",
    toys: "🧸",
    strollers: "🛒",
    food: "🍎",
    gifts: "🎁",
    stickers: "🏷️",
    other: "📦"

  };

  return icons[category] || "📦";

}


/* =========================================================
   ITEM NORMALIZATION
   ========================================================= */

function getBaseValue(item) {

  if (
    item?.regular &&
    typeof item.regular === "object"
  ) {

    return Number(
      item.regular.value ??
      item.regular.no_potion ??
      0
    );

  }

  return Number(
    item?.value ??
    0
  );

}


function normalizeItem(item, index) {

  const category =
    normalizeCategory(
      item?.type,
      item?.name
    );

  const isPet =
    category === "pets";

  return {

    id:
      item?.id ??
      `item_${index}`,

    name:
      item?.name ||
      "Unknown Item",

    type:
      item?.type ||
      "other",

    category,

    categoryLabel:
      categoryName(category),

    rarity:
      normalizeText(
        item?.rarity || "unknown"
      ),

    image:
      normalizeImage(
        item?.image
      ),

    value:
      getBaseValue(item),

    pet:
      isPet,

    raw:
      item

  };

}


/* =========================================================
   DATA LOADING
   ========================================================= */

async function loadPets() {

  const grid =
    $("valueGrid");

  if (grid) {

    grid.innerHTML = `
      <div class="empty-picker">

        <span>⏳</span>

        <strong>
          Zayaxra itemleri yükleniyor...
        </strong>

        <small>
          Veritabanındaki itemler hazırlanıyor.
        </small>

      </div>
    `;

  }


  try {

    const response =
      await fetch(
        DATA_URL + "?v=" + Date.now()
      );

    if (!response.ok) {
      throw new Error(
        "Veri yüklenemedi"
      );
    }


    const data =
      await response.json();


    if (!Array.isArray(data)) {
      throw new Error(
        "Geçersiz veri formatı"
      );
    }


    allItems =
      data
        .map(
          (item, index) =>
            normalizeItem(
              item,
              index
            )
        )
        .filter(
          item =>
            item.name
        );


    pets =
      allItems.filter(
        item =>
          item.category === "pets"
      );


    console.log(
      `Zayaxra: ${allItems.length} item yüklendi.`
    );

    console.log(
      "Kategoriler:",
      countCategories()
    );


    renderValues();

    renderPickerPets();

    updateItemCount();

    updateCalculatorStatus(
      `${allItems.length.toLocaleString("tr-TR")} item yüklendi`
    );


  } catch (error) {

    console.error(
      "ZAYAXRA DATA ERROR:",
      error
    );

    allItems = [];
    pets = [];


    if (grid) {

      grid.innerHTML = `
        <div class="empty-picker">

          <span>⚠️</span>

          <strong>
            Item verileri yüklenemedi
          </strong>

          <small>
            İnternet bağlantısını veya veri kaynağını kontrol et.
          </small>

        </div>
      `;

    }

    updateCalculatorStatus(
      "Veri yüklenemedi"
    );

  }

}


function countCategories() {

  const counts = {};

  allItems.forEach(item => {

    counts[item.category] =
      (counts[item.category] || 0) + 1;

  });

  return counts;

}


/* =========================================================
   VALUE FILTERS
   ========================================================= */

function getFilteredValues() {

  const search =
    normalizeText(
      $("search")?.value
    );

  const rarity =
    normalizeText(
      $("rarityFilter")?.value || "all"
    );


  let list =
    allItems.filter(item => {

      if (
        selectedValueCategory !== "all" &&
        item.category !== selectedValueCategory
      ) {
        return false;
      }


      if (
        rarity !== "all" &&
        item.rarity !== rarity
      ) {
        return false;
      }


      if (!search) {
        return true;
      }


      return (

        normalizeText(item.name)
          .includes(search)

        ||

        normalizeText(item.categoryLabel)
          .includes(search)

        ||

        normalizeText(item.rarity)
          .includes(search)

      );

    });


  const sort =
    $("sortSelect")?.value ||
    "value-desc";


  if (sort === "value-desc") {

    list.sort(
      (a, b) =>
        b.value - a.value
    );

  }

  else if (sort === "value-asc") {

    list.sort(
      (a, b) =>
        a.value - b.value
    );

  }

  else if (sort === "name-asc") {

    list.sort(
      (a, b) =>
        a.name.localeCompare(
          b.name
        )
    );

  }

  else if (sort === "name-desc") {

    list.sort(
      (a, b) =>
        b.name.localeCompare(
          a.name
        )
    );

  }


  return list;

}


function renderValues() {

  const grid =
    $("valueGrid");

  if (!grid) {
    return;
  }


  const list =
    getFilteredValues();


  updateItemCount(
    list.length
  );


  grid.innerHTML = "";


  if (!list.length) {

    grid.innerHTML = `
      <div class="empty-picker">

        <span>🔎</span>

        <strong>
          Item bulunamadı
        </strong>

        <small>
          Arama veya filtreleri değiştir.
        </small>

      </div>
    `;

    $("loadMoreWrapper")
      ?.style
      && (
        $("loadMoreWrapper").style.display =
          "none"
      );

    return;

  }


  const visible =
    list.slice(
      0,
      visibleValueItems
    );


  visible.forEach(
    item => {

      const card =
        document.createElement(
          "div"
        );


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


          <div class="item-category-small">

            ${categoryIcon(item.category)}

            ${escapeHTML(
              item.categoryLabel
            )}

          </div>


          <span
            class="rarity-small ${escapeHTML(item.rarity)}"
          >
            ${escapeHTML(
              rarityName(item.rarity)
            )}
          </span>


          <strong>
            Value: ${formatValue(item.value)}
          </strong>

        </div>

      `;


      grid.appendChild(
        card
      );

    }
  );


  const wrapper =
    $("loadMoreWrapper");

  const button =
    $("loadMoreBtn");


  if (wrapper) {

    wrapper.style.display =
      list.length > visibleValueItems
        ? "flex"
        : "none";

  }


  if (button) {

    button.textContent =
      list.length > visibleValueItems
        ? `Daha Fazla Göster (${Math.min(
            list.length - visibleValueItems,
            100
          )})`
        : "Daha Fazla";

  }

}


function loadMoreItems() {

  visibleValueItems += 60;

  renderValues();

}


function setValueCategory(category) {

  selectedValueCategory =
    category || "all";

  visibleValueItems = 60;


  document
    .querySelectorAll(
      ".category-btn"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.category ===
          selectedValueCategory
      );

    });


  renderValues();

}


function applyValueFilters() {

  visibleValueItems = 60;

  renderValues();

}


function updateItemCount(customCount) {

  const element =
    $("itemCount");

  if (!element) {
    return;
  }


  const count =
    customCount ??
    (
      selectedValueCategory === "all"
        ? allItems.length
        : allItems.filter(
            item =>
              item.category ===
              selectedValueCategory
          ).length
    );


  element.textContent =
    `${count.toLocaleString("tr-TR")} item`;

}


/* =========================================================
   SEARCH CLEAR
   ========================================================= */

function clearSearchInput() {

  const search =
    $("search");

  if (!search) {
    return;
  }

  search.value = "";

  visibleValueItems = 60;

  renderValues();

  search.focus();

}


/* =========================================================
   PICKER
   ========================================================= */

function resetPickerSettings() {

  selectedForm =
    "normal";

  selectedPotion = {
    fly: false,
    ride: false
  };


  selectedPickerCategory =
    "all";


  document
    .querySelectorAll(
      ".picker-category-btn"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.pickerCategory ===
          "all"
      );

    });


  updatePickerButtons();

}


function openPetPicker(side) {

  pickerSide =
    side;

  selectedPet =
    null;


  resetPickerSettings();


  const title =
    $("petPickerTitle");


  if (title) {

    title.textContent =
      side === "you"
        ? "Senin teklifine item ekle"
        : "Karşı tarafın teklifine item ekle";

  }


  const search =
    $("pickerSearch");


  if (search) {
    search.value = "";
  }


  const bar =
    $("pickerBar");


  if (bar) {
    bar.classList.add(
      "hidden"
    );
  }


  renderPickerPets();


  const modal =
    $("petPickerModal");


  if (modal) {

    modal.classList.add(
      "show"
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
    () => {
      search?.focus();
    },
    100
  );

}


function closePetPicker() {

  const modal =
    $("petPickerModal");


  if (!modal) {
    return;
  }


  modal.classList.remove(
    "show"
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

}


function setPickerCategory(category) {

  selectedPickerCategory =
    category || "all";


  document
    .querySelectorAll(
      ".picker-category-btn"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.pickerCategory ===
          selectedPickerCategory
      );

    });


  renderPickerPets();

}


function renderPickerPets() {

  const box =
    $("pickerPetList");


  if (!box) {
    return;
  }


  const query =
    normalizeText(
      $("pickerSearch")?.value
    );


  let list =
    allItems.filter(item => {

      if (
        selectedPickerCategory !== "all" &&
        item.category !==
          selectedPickerCategory
      ) {
        return false;
      }


      if (!query) {
        return true;
      }


      return (

        normalizeText(item.name)
          .includes(query)

        ||

        normalizeText(item.categoryLabel)
          .includes(query)

        ||

        normalizeText(item.rarity)
          .includes(query)

      );

    });


  list =
    list.slice(
      0,
      150
    );


  box.innerHTML = "";


  if (!list.length) {

    box.innerHTML = `
      <div class="empty-picker">

        <span>🔎</span>

        <strong>
          Item bulunamadı
        </strong>

        <small>
          Başka bir isim veya kategori dene.
        </small>

      </div>
    `;

    return;

  }


  list.forEach(
    item => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "pet-choice";


      if (
        selectedPet &&
        selectedPet.id === item.id
      ) {

        button.classList.add(
          "selected"
        );

      }


      button.innerHTML = `

        <div class="choice-image">

          ${imageHTML(item)}

        </div>


        <strong>
          ${escapeHTML(item.name)}
        </strong>


        <span
          class="rarity-tag ${escapeHTML(item.rarity)}"
        >
          ${escapeHTML(
            rarityName(item.rarity)
          )}
        </span>


        <span class="choice-category">

          ${categoryIcon(item.category)}
          ${escapeHTML(item.categoryLabel)}

        </span>


        <small>
          ${formatValue(item.value)}
        </small>

      `;


      button.addEventListener(
        "click",
        () => {

          selectPickerPet(item);

          box
            .querySelectorAll(
              ".pet-choice"
            )
            .forEach(
              element =>
                element.classList.remove(
                  "selected"
                )
            );


          button.classList.add(
            "selected"
          );

        }
      );


      box.appendChild(
        button
      );

    }
  );

}


function selectPickerPet(item) {

  if (!item) {
    return;
  }


  selectedPet =
    item;


  const bar =
    $("pickerBar");


  /*
   * Sadece PETS için
   * Normal / Neon / Mega / Fly / Ride
   */

  if (item.pet) {

    bar?.classList.remove(
      "hidden"
    );

  } else {

    bar?.classList.add(
      "hidden"
    );

    selectedForm =
      "normal";

    selectedPotion = {
      fly: false,
      ride: false
    };

  }


  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

}


/* =========================================================
   PICKER PREVIEW
   ========================================================= */

function renderPickerPreview() {

  const box =
    $("pickerPreview");


  if (!box) {
    return;
  }


  if (!selectedPet) {

    box.innerHTML = `
      <div class="preview-empty">

        <span>👆</span>

        Bir item seç

      </div>
    `;

    return;

  }


  const isPet =
    selectedPet.pet;


  box.innerHTML = `

    <div class="pet-image-wrap">

      ${
        isPet && selectedForm === "neon"
          ? `<div class="neon-effect"></div>`
          : ""
      }


      ${
        isPet && selectedForm === "mega"
          ? `<div class="mega-effect"></div>`
          : ""
      }


      ${imageHTML(selectedPet)}


      <div class="pet-badges">

        ${
          isPet && selectedForm === "neon"
            ? `<span class="mini-chip neon">N</span>`
            : ""
        }


        ${
          isPet && selectedForm === "mega"
            ? `<span class="mini-chip mega">M</span>`
            : ""
        }


        ${
          isPet && selectedPotion.fly
            ? `<span class="mini-chip fly">F</span>`
            : ""
        }


        ${
          isPet && selectedPotion.ride
            ? `<span class="mini-chip ride">R</span>`
            : ""
        }

      </div>

    </div>


    <div class="preview-info">

      <strong>
        ${escapeHTML(selectedPet.name)}
      </strong>


      <span>

        ${categoryIcon(selectedPet.category)}

        ${escapeHTML(
          selectedPet.categoryLabel
        )}

      </span>


      <small>

        ${escapeHTML(
          rarityName(selectedPet.rarity)
        )}

      </small>

    </div>

  `;

}


/* =========================================================
   PET FORM
   ========================================================= */

function toggleForm(form) {

  if (
    ![
      "normal",
      "neon",
      "mega"
    ].includes(form)
  ) {
    return;
  }


  if (
    !selectedPet ||
    !selectedPet.pet
  ) {
    return;
  }


  selectedForm =
    form;


  updatePickerButtons();

  renderPickerPreview();

  updatePickerValue();

}


function togglePotion(type) {

  if (
    ![
      "fly",
      "ride"
    ].includes(type)
  ) {
    return;
  }


  if (
    !selectedPet ||
    !selectedPet.pet
  ) {
    return;
  }


  selectedPotion[type] =
    !selectedPotion[type];


  updatePickerButtons();

  renderPickerPreview();

  updatePickerValue();

}


function updatePickerButtons() {

  document
    .querySelectorAll(
      "[data-form]"
    )
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.form ===
          selectedForm
      );

    });


  document
    .querySelectorAll(
      "[data-potion]"
    )
    .forEach(button => {

      const potion =
        button.dataset.potion;

      button.classList.toggle(
        "active",
        !!selectedPotion[potion]
      );

    });

}


/* =========================================================
   REAL PET VALUE CALCULATION
   ========================================================= */

function getPetValue(item) {

  if (!item) {
    return 0;
  }


  const raw =
    item.raw || {};


  const form =
    selectedForm;


  let variant =
    raw.regular || {};


  if (
    form === "neon" &&
    raw.neon
  ) {

    variant =
      raw.neon;

  }


  if (
    form === "mega" &&
    raw.mega
  ) {

    variant =
      raw.mega;

  }


  let key =
    "no_potion";


  if (
    selectedPotion.fly &&
    selectedPotion.ride
  ) {

    key =
      "fly_ride";

  }

  else if (
    selectedPotion.fly
  ) {

    key =
      "fly";

  }

  else if (
    selectedPotion.ride
  ) {

    key =
      "ride";

  }


  /*
   * Öncelik:
   * JSON'daki gerçek değer
   */

  if (
    variant &&
    variant[key] !== undefined
  ) {

    return Number(
      variant[key]
    ) || 0;

  }


  if (
    variant &&
    variant.value !== undefined
  ) {

    let value =
      Number(
        variant.value
      ) || 0;


    /*
     * Eski veri setlerinde potion
     * alanı yoksa küçük fallback.
     */

    if (
      key === "fly" ||
      key === "ride"
    ) {

      value += 0.25;

    }

    else if (
      key === "fly_ride"
    ) {

      value += 0.5;

    }


    return value;

  }


  return Number(
    item.value || 0
  );

}


function getModifiedValue() {

  if (!selectedPet) {
    return 0;
  }


  if (!selectedPet.pet) {

    return Number(
      selectedPet.value || 0
    );

  }


  return getPetValue(
    selectedPet
  );

}


function updatePickerValue() {

  const value =
    selectedPet
      ? getModifiedValue()
      : 0;


  if ($("pickerValue")) {

    $("pickerValue")
      .textContent =
      formatValue(value);

  }

}


/* =========================================================
   ADD ITEM
   ========================================================= */

function confirmAddPet() {

  if (
    !selectedPet ||
    !pickerSide
  ) {
    return;
  }


  const isPet =
    selectedPet.pet;


  const item = {

    ...selectedPet,

    baseValue:
      Number(
        selectedPet.value || 0
      ),

    value:
      getModifiedValue(),

    form:
      isPet
        ? selectedForm
        : "normal",

    fly:
      isPet
        ? !!selectedPotion.fly
        : false,

    ride:
      isPet
        ? !!selectedPotion.ride
        : false,

    uniqueId:
      Date.now() +
      "_" +
      Math.random()
        .toString(36)
        .slice(2)

  };


  if (
    pickerSide === "you"
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
   TRADE CALCULATION
   ========================================================= */

function calculateTotal(trade) {

  return trade.reduce(
    (total, item) =>
      total +
      Number(
        item.value || 0
      ),
    0
  );

}


/* =========================================================
   TRADE ITEM HTML
   ========================================================= */

function tradeItemHTML(
  item,
  side
) {

  const isPet =
    item.pet;


  return `

    <div class="trade-item">


      <div class="pet-image-wrap">

        ${
          isPet &&
          item.form === "neon"
            ? `<div class="neon-effect"></div>`
            : ""
        }


        ${
          isPet &&
          item.form === "mega"
            ? `<div class="mega-effect"></div>`
            : ""
        }


        ${imageHTML(item)}


        <div class="pet-badges">

          ${
            isPet &&
            item.form === "neon"
              ? `<span class="mini-chip neon">N</span>`
              : ""
          }


          ${
            isPet &&
            item.form === "mega"
              ? `<span class="mini-chip mega">M</span>`
              : ""
          }


          ${
            isPet &&
            item.fly
              ? `<span class="mini-chip fly">F</span>`
              : ""
          }


          ${
            isPet &&
            item.ride
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

          ${categoryIcon(item.category)}

          ${escapeHTML(
            item.categoryLabel
          )}

        </small>


        <div class="item-chips">

          ${
            isPet &&
            item.form === "neon"
              ? `<span class="mini-chip neon">Neon</span>`
              : ""
          }


          ${
            isPet &&
            item.form === "mega"
              ? `<span class="mini-chip mega">Mega</span>`
              : ""
          }


          ${
            isPet &&
            item.fly
              ? `<span class="mini-chip fly">Fly</span>`
              : ""
          }


          ${
            isPet &&
            item.ride
              ? `<span class="mini-chip ride">Ride</span>`
              : ""
          }

        </div>

      </div>


      <strong>
        ${formatValue(item.value)}
      </strong>


      <button
        type="button"
        class="remove-item"
        onclick="removeTradePet(
          '${escapeHTML(side)}',
          '${escapeHTML(item.uniqueId)}'
        )"
      >
        ×
      </button>

    </div>

  `;

}


/* =========================================================
   TRADE SIDES
   ========================================================= */

function renderTradeSide(
  id,
  trade,
  side
) {

  const element =
    $(id);


  if (!element) {
    return;
  }


  if (!trade.length) {

    element.innerHTML = `

      <div class="empty-items">

        <span class="empty-plus">
          ＋
        </span>

        <strong>
          Henüz item eklenmedi
        </strong>

        <small>
          Item eklemek için aşağıdaki butonu kullan
        </small>

      </div>

    `;

    return;

  }


  element.innerHTML =
    trade
      .map(
        item =>
          tradeItemHTML(
            item,
            side
          )
      )
      .join("");

}


function removeTradePet(
  side,
  uniqueId
) {

  if (
    side === "you"
  ) {

    youTrade =
      youTrade.filter(
        item =>
          item.uniqueId !==
          uniqueId
      );

  } else {

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


function clearTrade() {

  youTrade = [];

  themTrade = [];

  recordedTradeKey =
    "";

  updateTradeUI();

}


function updateTradeUI() {

  const you =
    calculateTotal(
      youTrade
    );


  const them =
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
      formatValue(you);

  }


  if ($("themTotal")) {

    $("themTotal")
      .textContent =
      formatValue(them);

  }


  updateResult(
    you,
    them
  );

}


/* =========================================================
   RESULT
   ========================================================= */

function updateResult(
  you,
  them
) {

  const card =
    $("resultCard");


  if (!card) {
    return;
  }


  card.classList.remove(
    "fair",
    "small-win",
    "big-win",
    "small-lose",
    "big-lose"
  );


  const title =
    $("resultTitle");


  const text =
    $("resultText");


  const difference =
    $("resultDifference");


  if (
    you === 0 &&
    them === 0
  ) {

    if (title) {
      title.textContent =
        "Item ekleyerek başla";
    }


    if (text) {
      text.textContent =
        "İki tarafa da item eklediğinde trade sonucu burada görünecek.";
    }


    if (difference) {
      difference.textContent =
        "—";
    }


    return;

  }


  if (
    you === 0 ||
    them === 0
  ) {

    if (title) {
      title.textContent =
        "İki tarafa da item ekle";
    }


    if (text) {
      text.textContent =
        "Sonucu görmek için iki tarafa da item ekle.";
    }


    if (difference) {
      difference.textContent =
        "—";
    }


    return;

  }


  const diff =
    them - you;


  const percent =
    (diff / you) * 100;


  let result =
    "fair";


  let label =
    "FAIR";


  let message =
    "Değerler birbirine çok yakın.";


  if (percent >= 10) {

    result =
      "big-win";

    label =
      "BIG WIN";

    message =
      "Bu trade senin için oldukça avantajlı.";

  }

  else if (percent > 3) {

    result =
      "small-win";

    label =
      "SMALL WIN";

    message =
      "Trade senin lehine.";

  }

  else if (percent <= -10) {

    result =
      "big-lose";

    label =
      "BIG LOSE";

    message =
      "Bu trade senin için ciddi şekilde dezavantajlı.";

  }

  else if (percent < -3) {

    result =
      "small-lose";

    label =
      "SMALL LOSE";

    message =
      "Trade karşı tarafın lehine.";

  }


  card.classList.add(
    result
  );


  if (title) {
    title.textContent =
      label;
  }


  if (text) {

    text.textContent =
      `${message} Sen: ${formatValue(you)} • Karşı taraf: ${formatValue(them)}.`;

  }


  if (difference) {

    difference.textContent =
      diff > 0
        ? "+" + formatValue(diff)
        : formatValue(diff);

  }


  recordTradeResult(
    result
  );

}


/* =========================================================
   CALCULATOR STATUS
   ========================================================= */

function updateCalculatorStatus(
  message
) {

  const element =
    $("calculatorStatus");

  if (!element) {
    return;
  }


  element.textContent =
    "● " + message;

}


/* =========================================================
   PROFILE
   ========================================================= */

const DEFAULT_PROFILE = {

  name:
    "Zayaxra Kullanıcısı",

  username:
    "@kullanici",

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


function loadProfile() {

  try {

    const raw =
      localStorage.getItem(
        "zayaxra_profile"
      );


    if (!raw) {

      return {
        ...DEFAULT_PROFILE,

        stats: {
          ...DEFAULT_PROFILE.stats
        }

      };

    }


    const saved =
      JSON.parse(raw);


    return {

      ...DEFAULT_PROFILE,

      ...saved,

      stats: {

        ...DEFAULT_PROFILE.stats,

        ...(saved.stats || {})

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


let profileData =
  loadProfile();


function saveProfile() {

  localStorage.setItem(
    "zayaxra_profile",
    JSON.stringify(
      profileData
    )
  );

}


function openProfile() {

  renderProfile();


  const modal =
    $("profileModal");


  modal?.classList.add(
    "show"
  );


  modal?.setAttribute(
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


  modal?.classList.remove(
    "show"
  );


  modal?.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "profile-open"
  );


  closeEditProfile();

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
      profileData.username;

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


  if ($("navAvatar")) {

    $("navAvatar")
      .textContent =
      profileData.avatar;

  }


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


  if ($("profileLosses")) {

    $("profileLosses")
      .textContent =
      profileData.stats.loses;

  }

}


/* =========================================================
   PROFILE EDIT
   ========================================================= */

function openEditProfile() {

  const form =
    $("profileEditForm");


  /*
   * Senin gönderdiğin HTML'de eski/yeni
   * profil yapısı farklı olabildiği için
   * iki sistemi de destekliyoruz.
   */

  if (
    $("editName") &&
    $("editUsername")
  ) {

    $("editName").value =
      profileData.name;

    $("editUsername").value =
      profileData.username;

    if ($("editBio")) {

      $("editBio").value =
        profileData.bio;

    }


    renderAvatars();

    form?.classList.remove(
      "hidden"
    );

    $("profileEditBtn")
      ?.classList.add(
        "hidden"
      );

    return;

  }


  if (
    $("editProfileName") &&
    $("editProfileUsername")
  ) {

    $("editProfileName").value =
      profileData.name;

    $("editProfileUsername").value =
      profileData.username;

    selectedAvatar =
      profileData.avatar;

    $("profileView")
      ?.style
      && (
        $("profileView").style.display =
          "none"
      );

    $("profileEdit")
      ?.style
      && (
        $("profileEdit").style.display =
          "block"
      );

    return;

  }

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


  if ($("profileView")) {

    $("profileView").style.display =
      "";

  }


  if ($("profileEdit")) {

    $("profileEdit").style.display =
      "none";

  }

}


function renderAvatars() {

  const box =
    $("avatarPick");


  if (!box) {
    return;
  }


  box.innerHTML =
    "";


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

  ].forEach(
    avatar => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


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


      button.onclick =
        () => {

          profileData.avatar =
            avatar;


          box
            .querySelectorAll(
              ".avatar-opt"
            )
            .forEach(
              item =>
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

    }
  );

}


function selectAvatar(avatar) {

  selectedAvatar =
    avatar;


  profileData.avatar =
    avatar;


  document
    .querySelectorAll(
      ".avatar-picker button"
    )
    .forEach(
      button => {

        button.classList.toggle(
          "active",
          button.textContent ===
            avatar
        );

      }
    );

}


function saveEditedProfile(event) {

  if (event) {
    event.preventDefault();
  }


  let name =
    $("editName")?.value?.trim();


  let username =
    $("editUsername")?.value?.trim();


  let bio =
    $("editBio")?.value?.trim();


  /*
   * Yeni HTML yapısı
   */

  if (!name) {

    name =
      $("editProfileName")
        ?.value
        ?.trim();

  }


  if (!username) {

    username =
      $("editProfileUsername")
        ?.value
        ?.trim();

  }


  if (!bio) {

    bio =
      profileData.bio;

  }


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


  if (selectedAvatar) {

    profileData.avatar =
      selectedAvatar;

  }


  saveProfile();

  renderProfile();

  closeEditProfile();

}


/* =========================================================
   TRADE HISTORY
   ========================================================= */

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
        item =>
          item.uniqueId
      )
      .join(",") +

    "|" +

    themTrade
      .map(
        item =>
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
   MODAL EVENTS
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

      closeMenu();

    }

  }
);


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    $("search")
      ?.addEventListener(
        "input",
        () => {

          visibleValueItems =
            60;

          renderValues();

        }
      );


    $("pickerSearch")
      ?.addEventListener(
        "input",
        renderPickerPets
      );


    $("rarityFilter")
      ?.addEventListener(
        "change",
        applyValueFilters
      );


    $("sortSelect")
      ?.addEventListener(
        "change",
        applyValueFilters
      );


    updatePickerButtons();

    updateTradeUI();

    renderProfile();

    await loadPets();

  }
);


/* =========================================================
   GLOBALS
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

window.toggleMenu =
  toggleMenu;

window.closeMenu =
  closeMenu;

window.setValueCategory =
  setValueCategory;

window.setPickerCategory =
  setPickerCategory;

window.applyValueFilters =
  applyValueFilters;

window.loadMoreItems =
  loadMoreItems;

window.clearSearchInput =
  clearSearchInput;

window.selectAvatar =
  selectAvatar;
