/* =========================================================
   ZAYAXRA — SCRIPT.JS
   FULL PET DATABASE + REAL IMAGES
   PREMIUM TRADE + PROFILE + WFL
========================================================= */

"use strict";


/* =========================================================
   DATABASE SOURCES
========================================================= */

const PET_DATA_URL =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/adoptme_values.json";

const PET_IMAGE_BASE =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main";


/* =========================================================
   ZAYAXRA CUSTOM VALUES
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
   DATABASE STATE
========================================================= */

let PET_DATABASE = [];

let databaseReady = false;


/* =========================================================
   GLOBAL STATE
========================================================= */

let youTrade = [];

let themTrade = [];

let pickerSide = null;

let selectedPet = null;

let selectedForm = "normal";

let selectedPotion = {
  fly: false,
  ride: false
};

let recordedTradeKey = "";

let selectedAvatar = "🐉";


/* =========================================================
   BASIC HELPER
========================================================= */

function $(id) {
  return document.getElementById(id);
}


/* =========================================================
   SLUG
========================================================= */

function slug(name) {

  const special = {

    "T-Rex":
      "t_rex",

    "Skele-Rex":
      "skele_rex",

    "S'mores Raccoon":
      "smores_raccoon",

    "Tió De Nadal":
      "tio_de_nadal",

    "Mr. Whiskerpips":
      "mr_whiskerpips",

    "Mrs. Whiskerpips":
      "mrs_whiskerpips",

    "Ms. Muffet":
      "ms_muffet",

    "Mecha R4BBIT":
      "mecha_r4bbit"

  };


  if (
    special[name]
  ) {

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


/* =========================================================
   EGG CHECK
========================================================= */

function isEgg(
  pet
) {

  if (!pet) {
    return false;
  }


  const type =
    String(
      pet.type || ""
    )
      .toLowerCase();


  const name =
    String(
      pet.name || ""
    );


  return (
    type.includes("egg") ||
    /\begg\b/i.test(name)
  );

}


/* =========================================================
   REAL IMAGE RESOLVER
========================================================= */

function resolveImage(
  imagePath,
  name
) {

  let path =
    String(
      imagePath || ""
    )
      .trim();


  /*
    JSON:
    /images/pets/Hedgehog.png

    GERÇEK DOSYA:
    /images/Hedgehog.png
  */

  if (path) {

    /*
      Tam URL
    */

    if (
      /^https?:\/\//i.test(
        path
      )
    ) {

      return path;

    }


    /*
      Sadece dosya adını al.
      Böylece /images/pets/
      veya başka klasör fark etmez.
    */

    const fileName =
      path
        .split("/")
        .pop();


    if (fileName) {

      return (
        PET_IMAGE_BASE +
        "/images/" +
        encodeURIComponent(
          fileName
        )
      );

    }

  }


  /*
    Fallback
  */

  return (
    PET_IMAGE_BASE +
    "/images/" +
    encodeURIComponent(
      String(name || "")
    ) +
    ".png"
  );

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
   FORMAT
========================================================= */

function formatValue(
  value
) {

  const number =
    Number(
      value || 0
    );


  if (
    !Number.isFinite(
      number
    )
  ) {

    return "0";

  }


  if (
    Number.isInteger(
      number
    )
  ) {

    return String(
      number
    );

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
   ESCAPE HTML
========================================================= */

function escapeHTML(
  value
) {

  return String(
    value ?? ""
  )

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   IMAGE HTML
========================================================= */

function imageHTML(
  pet,
  className = "pet-photo"
) {

  const image =
    resolveImage(
      pet?.image,
      pet?.name
    );


  return `

    <img

      src="${escapeHTML(
        image
      )}"

      alt="${escapeHTML(
        pet?.name ||
        "Pet"
      )}"

      class="${className}"

      loading="lazy"

      onerror="handleImageError(this)"

    >

  `;

}


/* =========================================================
   IMAGE ERROR
========================================================= */

function handleImageError(
  img
) {

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
   DATABASE LOADER
========================================================= */

async function loadFullPetDatabase() {

  try {

    console.log(
      "ZAYAXRA: FULL PET DATABASE yükleniyor..."
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
      !Array.isArray(
        raw
      )
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

        const rawType =
          String(
            item?.type ||
            ""
          )
            .toLowerCase();


        /*
          Sadece pet ve egg.
          "pets" de eşleşir.
        */

        const isPet =
          rawType.includes(
            "pet"
          );


        const isEggType =
          rawType.includes(
            "egg"
          );


        if (
          !isPet &&
          !isEggType
        ) {

          return;

        }


        const name =
          String(
            item?.name ||
            ""
          )
            .trim();


        if (
          !name
        ) {

          return;

        }


        let value =
          Number(
            item?.regular?.value
          );


        if (
          !Number.isFinite(
            value
          )
        ) {

          value =
            Number(
              item?.value
            );

        }


        if (
          !Number.isFinite(
            value
          )
        ) {

          value = 0;

        }


        /*
          Senin ZAYAXRA değerlerin
          öncelikli.
        */

        if (
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


        const pet = {

          id:
            `pet_${item?.id ?? index}_${slug(name)}`,

          name,

          rarity:
            normalizeRarity(
              item?.rarity
            ),

          value,

          image:
            resolveImage(
              item?.image,
              name
            ),

          type:
            isEggType ||
            /\begg\b/i.test(
              name
            )
              ? "egg"
              : "pet"

        };


        /*
          Aynı isimde kayıt varsa
          son kaydı tut.
        */

        unique.set(
          name.toLowerCase(),
          pet
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
      ) =>
        a.name.localeCompare(
          b.name,
          "en",
          {
            sensitivity:
              "base"
          }
        )
    );


    databaseReady =
      true;


    console.log(
      `ZAYAXRA: ${PET_DATABASE.length} PET + EGG yüklendi.`
    );


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
      Remote database açılmazsa
      en azından custom petler kaybolmasın.
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

          rarity:
            "unknown",

          value,

          image:
            resolveImage(
              "",
              name
            ),

          type:
            isEgg({
              name
            })
              ? "egg"
              : "pet"

        })
      );


    renderPickerPets();

  }

}


/* =========================================================
   STORAGE
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


function ensureStorageData() {

  if (
    !localStorage.getItem(
      "zayaggTradeStats"
    )
  ) {

    saveTradeStats({

      wins: 0,

      fair: 0,

      loses: 0

    });

  }

}


/* =========================================================
   PROFILE STORAGE
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


/* =========================================================
   PET PICKER
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


  selectedPet =
    null;


  selectedForm =
    "normal";


  selectedPotion = {

    fly: false,

    ride: false

  };


  const modal =
    $("petPicker");


  const search =
    $("petSearch");


  const title =
    $("petPickerTitle");


  if (
    title
  ) {

    title.textContent =

      side === "you"

        ? "Senin teklifine pet ekle"

        : "Karşı tarafın teklifine pet ekle";

  }


  if (
    search
  ) {

    search.value =
      "";

  }


  $("pickerBar")
    ?.classList.add(
      "hidden"
    );


  resetPickerButtons();


  renderPickerPets(
    PET_DATABASE
  );


  if (
    modal
  ) {

    modal.classList.add(
      "show"
    );

    modal.classList.add(
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


  setTimeout(
    () => {

      search?.focus();

    },
    50
  );

}


function closePetPicker() {

  const modal =
    $("petPicker");


  if (
    modal
  ) {

    modal.classList.remove(
      "show"
    );

    modal.classList.remove(
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
   RENDER PICKER
========================================================= */

function renderPickerPets(
  list = PET_DATABASE
) {

  const box =
    $("pickerPets");


  if (!box) {
    return;
  }


  box.innerHTML =
    "";


  if (
    !Array.isArray(
      list
    ) ||
    !list.length
  ) {

    box.innerHTML = `

      <div class="empty-picker">

        <span>🔎</span>

        <strong>
          Pet bulunamadı
        </strong>

        <small>
          Arama kelimesini değiştir.
        </small>

      </div>

    `;

    return;

  }


  const fragment =
    document.createDocumentFragment();


  list.forEach(
    pet => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        "pet-choice";


      button.innerHTML = `

        <div class="choice-image">

          ${imageHTML(
            pet
          )}

        </div>


        <strong>

          ${escapeHTML(
            pet.name
          )}

        </strong>


        <span
          class="rarity-tag ${escapeHTML(
            pet.rarity
          )}"
        >

          ${escapeHTML(
            rarityName(
              pet.rarity
            )
          )}

        </span>


        <small>

          ${formatValue(
            pet.value
          )}

        </small>

      `;


      button.addEventListener(
        "click",
        () => {

          selectPickerPet(
            pet
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

}


/* =========================================================
   SEARCH FILTER
========================================================= */

function filterPickerPets() {

  const query =
    String(
      $("petSearch")?.value ||
      ""
    )
      .trim()
      .toLowerCase();


  const filtered =
    PET_DATABASE.filter(
      pet => {

        const name =
          String(
            pet.name ||
            ""
          )
            .toLowerCase();


        const rarity =
          String(
            pet.rarity ||
            ""
          )
            .toLowerCase();


        const type =
          String(
            pet.type ||
            ""
          )
            .toLowerCase();


        return (

          name.includes(
            query
          )

          ||

          rarity.includes(
            query
          )

          ||

          type.includes(
            query
          )

        );

      }
    );


  renderPickerPets(
    filtered
  );

}


/* =========================================================
   SELECT PET
========================================================= */

function selectPickerPet(
  pet
) {

  if (!pet) {
    return;
  }


  selectedPet =
    pet;


  selectedForm =
    "normal";


  selectedPotion = {

    fly: false,

    ride: false

  };


  if (
    isEgg(
      pet
    )
  ) {

    selectedForm =
      "normal";


    selectedPotion = {

      fly: false,

      ride: false

    };

  }


  $("pickerBar")
    ?.classList.remove(
      "hidden"
    );


  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

  filterPickerPets();

}


/* =========================================================
   PICKER PREVIEW
========================================================= */

function renderPickerPreview() {

  const box =
    $("pickerPreview");


  if (
    !box ||
    !selectedPet
  ) {

    return;

  }


  const egg =
    isEgg(
      selectedPet
    );


  const chips = [];


  if (!egg) {

    if (
      selectedForm ===
      "neon"
    ) {

      chips.push(
        `<span class="vchip neon">NEON</span>`
      );

    }


    if (
      selectedForm ===
      "mega"
    ) {

      chips.push(
        `<span class="vchip mega">MEGA</span>`
      );

    }


    if (
      selectedPotion.fly
    ) {

      chips.push(
        `<span class="vchip fly">FLY</span>`
      );

    }


    if (
      selectedPotion.ride
    ) {

      chips.push(
        `<span class="vchip ride">RIDE</span>`
      );

    }

  }


  box.innerHTML = `

    <div class="pet-image-wrap">

      ${
        selectedForm === "neon" &&
        !egg

          ? `<div class="neon-effect"></div>`

          : ""
      }


      ${
        selectedForm === "mega" &&
        !egg

          ? `<div class="mega-effect"></div>`

          : ""
      }


      ${imageHTML(
        selectedPet
      )}


      <div class="pet-badges">

        ${
          selectedForm === "neon" &&
          !egg

            ? `<span class="mini-chip neon">N</span>`

            : ""
        }


        ${
          selectedForm === "mega" &&
          !egg

            ? `<span class="mini-chip mega">M</span>`

            : ""
        }


        ${
          selectedPotion.fly &&
          !egg

            ? `<span class="mini-chip fly">F</span>`

            : ""
        }


        ${
          selectedPotion.ride &&
          !egg

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
   PICKER BUTTONS
========================================================= */

function resetPickerButtons() {

  $("normalFormBtn")
    ?.classList.add(
      "active"
    );


  $("btnNeon")
    ?.classList.remove(
      "active"
    );


  $("btnMega")
    ?.classList.remove(
      "active"
    );


  $("noPotionBtn")
    ?.classList.add(
      "active"
    );


  $("btnFly")
    ?.classList.remove(
      "active"
    );


  $("btnRide")
    ?.classList.remove(
      "active"
    );


  $("flyRideBtn")
    ?.classList.remove(
      "active"
    );

}


function updatePickerButtons() {

  const egg =
    isEgg(
      selectedPet
    );


  $("normalFormBtn")
    ?.classList.toggle(
      "active",
      selectedForm ===
        "normal"
    );


  $("btnNeon")
    ?.classList.toggle(
      "active",
      !egg &&
      selectedForm ===
        "neon"
    );


  $("btnMega")
    ?.classList.toggle(
      "active",
      !egg &&
      selectedForm ===
        "mega"
    );


  $("noPotionBtn")
    ?.classList.toggle(

      "active",

      egg ||

      (
        !selectedPotion.fly &&
        !selectedPotion.ride
      )

    );


  $("btnFly")
    ?.classList.toggle(

      "active",

      !egg &&
      selectedPotion.fly &&
      !selectedPotion.ride

    );


  $("btnRide")
    ?.classList.toggle(

      "active",

      !egg &&
      selectedPotion.ride &&
      !selectedPotion.fly

    );


  $("flyRideBtn")
    ?.classList.toggle(

      "active",

      !egg &&
      selectedPotion.fly &&
      selectedPotion.ride

    );


  if (
    egg
  ) {

    $("btnNeon")
      ?.classList.remove(
        "active"
      );

    $("btnMega")
      ?.classList.remove(
        "active"
      );

    $("btnFly")
      ?.classList.remove(
        "active"
      );

    $("btnRide")
      ?.classList.remove(
        "active"
      );

    $("flyRideBtn")
      ?.classList.remove(
        "active"
      );

    $("noPotionBtn")
      ?.classList.add(
        "active"
      );

  }

}


/* =========================================================
   FORM
========================================================= */

function toggleForm(
  form
) {

  if (
    !selectedPet
  ) {

    return;

  }


  if (
    isEgg(
      selectedPet
    )
  ) {

    selectedForm =
      "normal";


    updatePickerButtons();

    renderPickerPreview();

    updatePickerValue();


    return;

  }


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


  selectedForm =

    selectedForm === form

      ? "normal"

      : form;


  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

}


/* =========================================================
   POTION
========================================================= */

function togglePotion(
  type
) {

  if (
    !selectedPet
  ) {

    return;

  }


  if (
    isEgg(
      selectedPet
    )
  ) {

    selectedPotion = {

      fly: false,

      ride: false

    };


    updatePickerButtons();

    renderPickerPreview();

    updatePickerValue();


    return;

  }


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
        !(
          selectedPotion.fly &&
          !selectedPotion.ride
        ),

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
        !(
          selectedPotion.ride &&
          !selectedPotion.fly
        )

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
  pet
) {

  if (!pet) {
    return 0;
  }


  let value =
    Number(
      pet.value || 0
    );


  if (
    !Number.isFinite(
      value
    )
  ) {

    value = 0;

  }


  if (
    isEgg(
      pet
    )
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
   ADD PET
========================================================= */

function confirmAddPet() {

  if (
    !selectedPet ||
    !pickerSide
  ) {

    return;

  }


  const egg =
    isEgg(
      selectedPet
    );


  if (egg) {

    selectedForm =
      "normal";


    selectedPotion = {

      fly: false,

      ride: false

    };

  }


  const item = {

    id:
      selectedPet.id,

    name:
      selectedPet.name,

    rarity:
      selectedPet.rarity,

    image:
      selectedPet.image,

    type:
      egg
        ? "egg"
        : "pet",

    baseValue:
      Number(
        selectedPet.value ||
        0
      ),

    value:
      getModifiedValue(
        selectedPet
      ),

    form:
      selectedForm,

    fly:
      egg
        ? false
        : Boolean(
            selectedPotion.fly
          ),

    ride:
      egg
        ? false
        : Boolean(
            selectedPotion.ride
          ),

    uniqueId:

      `${Date.now()}_${Math.random()
        .toString(36)
        .slice(2, 10)}`

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
   TOTAL
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
      pet
    ) => {

      const value =
        Number(
          pet?.value ||
          0
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
      pet => {

        const badges = [];


        if (
          pet.form ===
          "neon" &&
          !isEgg(pet)
        ) {

          badges.push(`

            <span class="trade-slot-badge neon">
              N
            </span>

          `);

        }


        if (
          pet.form ===
          "mega" &&
          !isEgg(pet)
        ) {

          badges.push(`

            <span class="trade-slot-badge mega">
              M
            </span>

          `);

        }


        if (
          pet.fly &&
          !isEgg(pet)
        ) {

          badges.push(`

            <span class="trade-slot-badge fly">
              F
            </span>

          `);

        }


        if (
          pet.ride &&
          !isEgg(pet)
        ) {

          badges.push(`

            <span class="trade-slot-badge ride">
              R
            </span>

          `);

        }


        return `

          <div

            class="trade-slot"

            data-trade-id="${escapeHTML(
              pet.uniqueId
            )}"

          >

            <div class="trade-slot-image">

              ${
                pet.form ===
                  "neon" &&
                !isEgg(pet)

                  ? `<div class="neon-effect"></div>`

                  : ""
              }


              ${
                pet.form ===
                  "mega" &&
                !isEgg(pet)

                  ? `<div class="mega-effect"></div>`

                  : ""
              }


              ${imageHTML(
                pet,
                "trade-slot-photo"
              )}


              <div class="trade-slot-badges">

                ${badges.join("")}

              </div>

            </div>


            <div

              class="trade-slot-name"

              title="${escapeHTML(
                pet.name
              )}"

            >

              ${escapeHTML(
                pet.name
              )}

            </div>


            <div class="trade-slot-value">

              ${formatValue(
                pet.value
              )}

            </div>


            <button

              type="button"

              class="remove-item"

              data-side="${side}"

              data-id="${escapeHTML(
                pet.uniqueId
              )}"

              aria-label="Pet sil"

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
   REMOVE
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
        pet =>
          pet.uniqueId !==
          uniqueId
      );

  }


  else if (
    side ===
    "them"
  ) {

    themTrade =
      themTrade.filter(
        pet =>
          pet.uniqueId !==
          uniqueId
      );

  }


  recordedTradeKey =
    "";


  updateTradeUI();

}


/* =========================================================
   CLEAR
========================================================= */

function clearTrade() {

  youTrade =
    [];

  themTrade =
    [];

  recordedTradeKey =
    "";


  updateTradeUI();

}


/* =========================================================
   TRADE UI
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
   RECORD RESULT
========================================================= */

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
          pet => ({

            id:
              pet.uniqueId,

            value:
              pet.value

          })
        ),


      them:
        themTrade.map(
          pet => ({

            id:
              pet.uniqueId,

            value:
              pet.value

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
   PROFILE STATS
========================================================= */

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


/* =========================================================
   PROFILE
========================================================= */

function renderProfile() {

  const profile =
    getProfileData();


  $("profileModal")
    ?.querySelectorAll(
      ".profile-eyebrow"
    )
    .forEach(
      element => {

        element.textContent =
          "PROFILE";

      }
    );


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


/* =========================================================
   OPEN PROFILE
========================================================= */

function openProfile() {

  const modal =
    $("profileModal");


  if (
    !modal
  ) {

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


/* =========================================================
   CLOSE PROFILE
========================================================= */

function closeProfile() {

  const modal =
    $("profileModal");


  if (
    !modal
  ) {

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


/* =========================================================
   EDIT PROFILE
========================================================= */

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


/* =========================================================
   AVATAR
========================================================= */

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


/* =========================================================
   SAVE PROFILE
========================================================= */

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


  const button =
    $("menuButton");


  if (
    button
  ) {

    button.setAttribute(

      "aria-expanded",

      document.body.classList.contains(
        "menu-open"
      )
        ? "true"
        : "false"

    );

  }

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


  if (
    !element
  ) {

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


/* =========================================================
   NAVBAR
========================================================= */

function initNavbar() {

  const navbar =
    document.querySelector(
      ".navbar"
    );


  if (
    !navbar
  ) {

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
   MAIN SEARCH
========================================================= */

function initSearch() {

  const search =
    $("search");


  if (
    !search
  ) {

    return;

  }


  if (
    typeof renderValues ===
    "function"
  ) {

    search.addEventListener(
      "input",
      renderValues
    );

  }

}


/* =========================================================
   PICKER SEARCH
========================================================= */

function initPickerSearch() {

  const search =
    $("petSearch");


  if (
    !search
  ) {

    return;

  }


  search.addEventListener(
    "input",
    filterPickerPets
  );

}


/* =========================================================
   REMOVE EVENT
========================================================= */

function initRemoveTradeEvents() {

  document.addEventListener(

    "click",

    event => {

      const button =
        event.target.closest(
          ".remove-item"
        );


      if (
        !button
      ) {

        return;

      }


      event.preventDefault();

      event.stopPropagation();


      removeTradePet(

        button.dataset.side,

        button.dataset.id

      );

    }

  );

}


/* =========================================================
   CLEAR EVENT
========================================================= */

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


/* =========================================================
   MODAL EVENTS
========================================================= */

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


/* =========================================================
   KEYBOARD
========================================================= */

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
   VISIBILITY
========================================================= */

function initVisibility() {

  document.addEventListener(

    "visibilitychange",

    () => {

      if (
        document.visibilityState ===
        "visible"
      ) {

        updateTradeUI();

        updateProfileStats();

      }

    }

  );

}


/* =========================================================
   INFO PANEL
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


/* =========================================================
   INFO MODAL
========================================================= */

function openInfo(
  event
) {

  event?.preventDefault();


  const modal =
    $("infoModal");


  if (
    !modal
  ) {

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


  if (
    !modal
  ) {

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
   DATABASE CHECK
========================================================= */

function validateDatabase() {

  console.log(

    `ZAYAXRA: ${PET_DATABASE.length} kayıt hazır.`

  );

}


/* =========================================================
   INIT
========================================================= */

function initZayaxra() {

  migrateLegacyProfile();

  ensureStorageData();

  validateDatabase();

  updateProfileStats();

  renderProfile();

  updateTradeUI();

  initSearch();

  initPickerSearch();

  initRemoveTradeEvents();

  initClearTrade();

  initNavigation();

  initNavbar();

  initModalEvents();

  initKeyboard();

  initVisibility();


  console.log(
    "ZAYAXRA başarıyla başlatıldı."
  );


  loadFullPetDatabase();

}


/* =========================================================
   GLOBAL FUNCTIONS
========================================================= */

window.openPetPicker =
  openPetPicker;

window.closePetPicker =
  closePetPicker;

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
/* =========================================================
   ZAYAXRA — ITEM CATEGORIES
   ALL / PETS / PET WEAR / EGGS / VEHICLES / TOYS / GIFTS
========================================================= */

let selectedCategory = "all";


/* =========================================================
   CATEGORY NORMALIZER
========================================================= */

function normalizeCategory(item) {

  const rawType = String(
    item?.type || ""
  )
    .toLowerCase()
    .trim()
    .replace(/[-\s]+/g, "_");


  const name = String(
    item?.name || ""
  ).toLowerCase();


  /* EGGS */

  if (
    rawType.includes("egg") ||
    /\begg\b/i.test(name)
  ) {
    return "eggs";
  }


  /* PET WEAR */

  if (
    rawType.includes("pet_wear") ||
    rawType.includes("petwear") ||
    rawType.includes("accessory") ||
    rawType.includes("wear")
  ) {
    return "petwear";
  }


  /* VEHICLES */

  if (
    rawType.includes("vehicle") ||
    rawType.includes("vehicles")
  ) {
    return "vehicles";
  }


  /* TOYS */

  if (
    rawType.includes("toy") ||
    rawType.includes("toys")
  ) {
    return "toys";
  }


  /* GIFTS */

  if (
    rawType.includes("gift") ||
    rawType.includes("gifts")
  ) {
    return "gifts";
  }


  /* PETS */

  if (
    rawType === "pet" ||
    rawType === "pets" ||
    rawType.includes("pet")
  ) {
    return "pets";
  }


  /*
    Kaynakta bazı kayıtların type değeri
    farklı olabilir. Böyle durumlarda
    bilinen pet rarity'lerini de kontrol et.
  */

  const rarity =
    String(
      item?.rarity || ""
    ).toLowerCase();


  if (
    [
      "common",
      "uncommon",
      "rare",
      "ultra rare",
      "ultra-rare",
      "legendary"
    ].includes(rarity)
  ) {

    return "pets";

  }


  return "other";

}


/* =========================================================
   CATEGORY DEFINITIONS
========================================================= */

const ZAYAXRA_CATEGORIES = [

  {
    id: "all",
    label: "ALL",
    icon: "✦"
  },

  {
    id: "pets",
    label: "PETS",
    icon: "🐾"
  },

  {
    id: "petwear",
    label: "PET WEAR",
    icon: "👕"
  },

  {
    id: "eggs",
    label: "EGGS",
    icon: "🥚"
  },

  {
    id: "vehicles",
    label: "VEHICLES",
    icon: "🚗"
  },

  {
    id: "toys",
    label: "TOYS",
    icon: "🧸"
  },

  {
    id: "gifts",
    label: "GIFTS",
    icon: "🎁"
  }

];


/* =========================================================
   CREATE CATEGORY BAR
========================================================= */

function createCategoryBar() {

  const picker =
    $("petPicker");


  if (!picker) {
    return;
  }


  /*
    Daha önce oluşturulduysa tekrar oluşturma.
  */

  if (
    $("zayaxraCategoryBar")
  ) {
    return;
  }


  const bar =
    document.createElement(
      "div"
    );


  bar.id =
    "zayaxraCategoryBar";


  bar.className =
    "zayaxra-category-bar";


  bar.innerHTML =

    ZAYAXRA_CATEGORIES
      .map(
        category => `

          <button

            type="button"

            class="
              zayaxra-category-btn
              ${
                category.id ===
                "all"
                  ? "active"
                  : ""
              }
            "

            data-category="${
              category.id
            }"

          >

            <span class="category-icon">

              ${
                category.icon
              }

            </span>

            <span class="category-label">

              ${
                category.label
              }

            </span>

          </button>

        `
      )
      .join("");


  /*
    Arama alanının olduğu barın
    önüne yerleştir.
  */

  const searchBar =
    $("pickerBar");


  if (
    searchBar
  ) {

    searchBar.before(
      bar
    );

  }

  else {

    const pets =
      $("pickerPets");


    if (
      pets
    ) {

      pets.before(
        bar
      );

    }

    else {

      picker.appendChild(
        bar
      );

    }

  }


  bar
    .querySelectorAll(
      ".zayaxra-category-btn"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            selectedCategory =
              button.dataset.category ||
              "all";


            bar
              .querySelectorAll(
                ".zayaxra-category-btn"
              )
              .forEach(
                item => {

                  item.classList.toggle(

                    "active",

                    item ===
                    button

                  );

                }
              );


            filterPickerPets();

          }
        );

      }
    );

}


/* =========================================================
   CATEGORY COUNTS
========================================================= */

function updateCategoryCounts() {

  const counts = {

    all: PET_DATABASE.length,

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
        normalizeCategory(
          item
        );


      if (
        counts[
          category
        ] !== undefined
      ) {

        counts[
          category
        ]++;

      }

    }
  );


  Object.keys(
    counts
  ).forEach(
    category => {

      const button =
        document.querySelector(
          `[data-category="${category}"]`
        );


      if (!button) {
        return;
      }


      let count =
        button.querySelector(
          ".category-count"
        );


      if (!count) {

        count =
          document.createElement(
            "span"
          );


        count.className =
          "category-count";


        button.appendChild(
          count
        );

      }


      count.textContent =
        counts[
          category
        ];

    }
  );

}


/* =========================================================
   GET CATEGORY DATA
========================================================= */

function getCategoryItems() {

  if (
    selectedCategory ===
    "all"
  ) {

    return PET_DATABASE;

  }


  return PET_DATABASE.filter(
    item =>
      normalizeCategory(
        item
      ) ===
      selectedCategory
  );

}


/* =========================================================
   CATEGORY + SEARCH
========================================================= */

function filterPickerPets() {

  const query =
    String(
      $("petSearch")?.value ||
      ""
    )
      .trim()
      .toLowerCase();


  const categoryItems =
    getCategoryItems();


  const filtered =
    categoryItems.filter(
      pet => {

        if (
          !query
        ) {

          return true;

        }


        const name =
          String(
            pet.name ||
            ""
          )
            .toLowerCase();


        const rarity =
          String(
            pet.rarity ||
            ""
          )
            .toLowerCase();


        const category =
          normalizeCategory(
            pet
          );


        return (

          name.includes(
            query
          )

          ||

          rarity.includes(
            query
          )

          ||

          category.includes(
            query
          )

        );

      }
    );


  renderPickerPets(
    filtered
  );

}


/* =========================================================
   OVERRIDE PICKER RENDER
========================================================= */

const originalRenderPickerPets =
  renderPickerPets;


renderPickerPets =
  function(list) {

    createCategoryBar();

    updateCategoryCounts();


    const items =
      Array.isArray(
        list
      )

        ? list

        : PET_DATABASE;


    /*
      Kategori seçimi.
    */

    const categoryFiltered =

      selectedCategory ===
      "all"

        ? items

        : items.filter(
            item =>
              normalizeCategory(
                item
              ) ===
              selectedCategory
          );


    /*
      Arama.
    */

    const query =
      String(
        $("petSearch")?.value ||
        ""
      )
        .trim()
        .toLowerCase();


    const finalItems =
      query

        ? categoryFiltered.filter(
            pet => {

              const name =
                String(
                  pet.name ||
                  ""
                )
                  .toLowerCase();


              const rarity =
                String(
                  pet.rarity ||
                  ""
                )
                  .toLowerCase();


              return (

                name.includes(
                  query
                )

                ||

                rarity.includes(
                  query
                )

              );

            }
          )

        : categoryFiltered;


    /*
      Orijinal render fonksiyonu
      bütün kart görünüşünü korusun.
    */

    originalRenderPickerPets(
      finalItems
    );

  };


/* =========================================================
   RESET CATEGORY WHEN PICKER OPENS
========================================================= */

const originalOpenPetPicker =
  openPetPicker;


openPetPicker =
  function(side) {

    selectedCategory =
      "all";


    originalOpenPetPicker(
      side
    );


    setTimeout(
      () => {

        createCategoryBar();

        updateCategoryCounts();


        document
          .querySelectorAll(
            ".zayaxra-category-btn"
          )
          .forEach(
            button => {

              button.classList.toggle(

                "active",

                button.dataset.category ===
                "all"

              );

            }
          );

      },
      0
    );

  };


/* =========================================================
   DATABASE LOAD CATEGORY FIX
========================================================= */

const originalLoadFullPetDatabase =
  loadFullPetDatabase;


loadFullPetDatabase =
  async function() {

    /*
      Orijinal loader'ın davranışını
      kullanmaya devam et.
    */

    await originalLoadFullPetDatabase();


    /*
      Loader'dan sonra her kayda
      category ekle.
    */

    PET_DATABASE =
      PET_DATABASE.map(
        item => ({

          ...item,

          category:
            normalizeCategory(
              item
            )

        })
      );


    updateCategoryCounts();


    renderPickerPets(
      PET_DATABASE
    );

  };


/* =========================================================
   CATEGORY CSS
========================================================= */

(function injectCategoryCSS() {

  if (
    document.getElementById(
      "zayaxraCategoryCSS"
    )
  ) {

    return;

  }


  const style =
    document.createElement(
      "style"
    );


  style.id =
    "zayaxraCategoryCSS";


  style.textContent = `

    .zayaxra-category-bar {

      display: flex;

      gap: 8px;

      width: 100%;

      overflow-x: auto;

      overflow-y: hidden;

      padding: 8px 2px 12px;

      margin-bottom: 6px;

      scrollbar-width: thin;

      -webkit-overflow-scrolling: touch;

    }


    .zayaxra-category-bar::-webkit-scrollbar {

      height: 4px;

    }


    .zayaxra-category-btn {

      flex: 0 0 auto;

      display: inline-flex;

      align-items: center;

      justify-content: center;

      gap: 7px;

      min-height: 40px;

      padding: 8px 13px;

      border: 1px solid rgba(255,255,255,.08);

      border-radius: 12px;

      background: rgba(255,255,255,.035);

      color: #9da5ba;

      font: inherit;

      font-size: 12px;

      font-weight: 700;

      letter-spacing: .04em;

      cursor: pointer;

      transition:

        .2s ease;

      white-space: nowrap;

    }


    .zayaxra-category-btn:hover {

      transform: translateY(-1px);

      background: rgba(255,255,255,.07);

      color: #fff;

      border-color: rgba(255,255,255,.14);

    }


    .zayaxra-category-btn.active {

      color: #fff;

      background:

        linear-gradient(

          135deg,

          rgba(110,90,255,.28),

          rgba(60,180,255,.16)

        );

      border-color:

        rgba(120,120,255,.45);

      box-shadow:

        0 8px 24px

        rgba(80,80,255,.12);

    }


    .category-icon {

      font-size: 15px;

      line-height: 1;

    }


    .category-count {

      min-width: 18px;

      height: 18px;

      padding: 0 5px;

      display: inline-flex;

      align-items: center;

      justify-content: center;

      border-radius: 999px;

      background: rgba(255,255,255,.08);

      color: #aeb6ca;

      font-size: 10px;

      font-weight: 800;

    }


    .zayaxra-category-btn.active
    .category-count {

      color: #fff;

      background:

        rgba(255,255,255,.15);

    }


    @media (max-width: 650px) {

      .zayaxra-category-bar {

        gap: 6px;

        padding-bottom: 9px;

      }


      .zayaxra-category-btn {

        min-height: 37px;

        padding: 7px 10px;

        font-size: 10px;

      }


      .category-icon {

        font-size: 13px;

      }

    }

  `;


  document.head.appendChild(
    style
  );

})();


/* =========================================================
   INITIAL CATEGORY SETUP
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setTimeout(
      () => {

        createCategoryBar();

        updateCategoryCounts();

      },
      50
    );

  }
);
/* =========================================================
   ZAYAXRA — FINAL CATEGORY SYSTEM
   ALL / PETS / PET WEAR / EGGS / VEHICLES / TOYS / GIFTS
========================================================= */

(function () {

  "use strict";


  /* =======================================================
     CATEGORY STATE
  ======================================================= */

  let zayaxraCategory = "all";


  const ZAYAXRA_CATEGORIES = [

    {
      id: "all",
      label: "ALL",
      icon: "✦"
    },

    {
      id: "pets",
      label: "PETS",
      icon: "🐾"
    },

    {
      id: "petwear",
      label: "PET WEAR",
      icon: "👕"
    },

    {
      id: "eggs",
      label: "EGGS",
      icon: "🥚"
    },

    {
      id: "vehicles",
      label: "VEHICLES",
      icon: "🚗"
    },

    {
      id: "toys",
      label: "TOYS",
      icon: "🧸"
    },

    {
      id: "gifts",
      label: "GIFTS",
      icon: "🎁"
    }

  ];


  /* =======================================================
     CATEGORY DETECTION
  ======================================================= */

  function getZayaxraCategory(item) {

    const raw =
      String(
        item?.type || ""
      )
        .toLowerCase()
        .trim();


    const name =
      String(
        item?.name || ""
      )
        .toLowerCase();


    /* EGG */

    if (
      raw.includes("egg") ||
      /\begg\b/.test(name)
    ) {

      return "eggs";

    }


    /* PET WEAR */

    if (
      raw.includes("pet_wear") ||
      raw.includes("petwear") ||
      raw.includes("pet wear") ||
      raw.includes("accessor") ||
      raw.includes("wear")
    ) {

      return "petwear";

    }


    /* VEHICLES */

    if (
      raw.includes("vehicle")
    ) {

      return "vehicles";

    }


    /* TOYS */

    if (
      raw.includes("toy")
    ) {

      return "toys";

    }


    /* GIFTS */

    if (
      raw.includes("gift")
    ) {

      return "gifts";

    }


    /* PETS */

    if (
      raw === "pet" ||
      raw === "pets" ||
      raw.includes("pet")
    ) {

      return "pets";

    }


    return null;

  }


  /* =======================================================
     IMAGE PATH
  ======================================================= */

  function getZayaxraImage(
    imagePath
  ) {

    if (!imagePath) {

      return "";

    }


    /*
      Kaynak JSON:

      /images/pets/Hedgehog.png

      Gerçek repository:

      /images/Hedgehog.png
    */

    const fileName =
      String(
        imagePath
      )
        .split("/")
        .pop();


    if (!fileName) {

      return "";

    }


    return (
      "https://raw.githubusercontent.com/" +
      "ironbabatekkral/adoptme-values/main/images/" +
      encodeURIComponent(
        fileName
      )
    );

  }


  /* =======================================================
     LOAD EVERYTHING
  ======================================================= */

  async function loadEverything() {

    try {

      console.log(
        "ZAYAXRA: tüm item kategorileri yükleniyor..."
      );


      const response =
        await fetch(

          "https://raw.githubusercontent.com/" +
          "ironbabatekkral/adoptme-values/main/" +
          "adoptme_values.json?v=" +
          Date.now(),

          {
            cache: "no-store"
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


      const raw =
        await response.json();


      if (
        !Array.isArray(
          raw
        )
      ) {

        throw new Error(
          "JSON array değil."
        );

      }


      const items = [];


      const seen =
        new Set();


      raw.forEach(
        (
          data,
          index
        ) => {

          const category =
            getZayaxraCategory(
              data
            );


          /*
            Bizim istediğimiz
            7 kategori dışındaki
            itemleri alma.
          */

          if (!category) {

            return;

          }


          const name =
            String(
              data?.name ||
              ""
            )
              .trim();


          if (!name) {

            return;

          }


          const key =
            category +
            "|" +
            name.toLowerCase();


          if (
            seen.has(
              key
            )
          ) {

            return;

          }


          seen.add(
            key
          );


          /*
            PET VALUE
          */

          let value =
            Number(
              data?.regular?.value
            );


          /*
            NORMAL ITEM VALUE
          */

          if (
            !Number.isFinite(
              value
            )
          ) {

            value =
              Number(
                data?.value
              );

          }


          if (
            !Number.isFinite(
              value
            )
          ) {

            value =
              0;

          }


          /*
            Senin özel değerlerin
            varsa onları kullan.
          */

          if (
            typeof CUSTOM_VALUE_OVERRIDES !==
              "undefined" &&

            Object.prototype.hasOwnProperty.call(
              CUSTOM_VALUE_OVERRIDES,
              name
            )
          ) {

            value =
              Number(
                CUSTOM_VALUE_OVERRIDES[
                  name
                ]
              );

          }


          /*
            TYPE
          */

          let finalType =
            category;


          if (
            category ===
            "pets"
          ) {

            finalType =
              "pets";

          }


          if (
            category ===
            "eggs"
          ) {

            finalType =
              "eggs";

          }


          if (
            category ===
            "petwear"
          ) {

            finalType =
              "pet_wear";

          }


          if (
            category ===
            "vehicles"
          ) {

            finalType =
              "vehicles";

          }


          if (
            category ===
            "toys"
          ) {

            finalType =
              "toys";

          }


          if (
            category ===
            "gifts"
          ) {

            finalType =
              "gifts";

          }


          items.push({

            id:
              "z_" +
              String(
                data?.id ??
                index
              ) +
              "_" +
              slugSafe(
                name
              ),

            name,

            rarity:
              typeof normalizeRarity ===
              "function"

                ? normalizeRarity(
                    data?.rarity
                  )

                : String(
                    data?.rarity ||
                    "unknown"
                  )
                    .toLowerCase(),

            value,

            image:
              getZayaxraImage(
                data?.image
              ),

            type:
              finalType,

            category,

            originalData:
              data

          });

        }
      );


      /*
        İsme göre sırala
      */

      items.sort(
        (
          a,
          b
        ) =>
          a.name.localeCompare(
            b.name,
            "en",
            {
              sensitivity:
                "base"
            }
          )
      );


      PET_DATABASE =
        items;


      databaseReady =
        true;


      console.log(
        "ZAYAXRA: " +
        PET_DATABASE.length +
        " item yüklendi."
      );


      /*
        Picker açıksa
        yeniden çiz.
      */

      renderZayaxraPicker();

      updateZayaxraCounts();

    }


    catch (
      error
    ) {

      console.error(
        "ZAYAXRA item database hatası:",
        error
      );

    }

  }


  /* =======================================================
     SAFE SLUG
  ======================================================= */

  function slugSafe(
    name
  ) {

    return String(
      name
    )

      .toLowerCase()

      .normalize(
        "NFD"
      )

      .replace(
        /[\u0300-\u036f]/g,
        ""
      )

      .replace(
        /[^a-z0-9]+/g,
        "_"
      )

      .replace(
        /^_+|_+$/g,
        ""
      );

  }


  /* =======================================================
     CATEGORY SIDEBAR
  ======================================================= */

  function createZayaxraSidebar() {

    const picker =
      $("petPicker");


    if (!picker) {

      return;

    }


    let sidebar =
      $("zayaxraCategorySidebar");


    if (
      sidebar
    ) {

      return;

    }


    sidebar =
      document.createElement(
        "aside"
      );


    sidebar.id =
      "zayaxraCategorySidebar";


    sidebar.className =
      "zayaxra-category-sidebar";


    sidebar.innerHTML = `

      <div class="zayaxra-category-title">

        CATEGORIES

      </div>


      <div class="zayaxra-category-list">

        ${ZAYAXRA_CATEGORIES
          .map(
            category => `

              <button

                type="button"

                class="
                  zayaxra-sidebar-btn
                  ${
                    category.id ===
                    "all"
                      ? "active"
                      : ""
                  }
                "

                data-zayaxra-category="${
                  category.id
                }"

              >

                <span class="zayaxra-sidebar-icon">

                  ${category.icon}

                </span>


                <span class="zayaxra-sidebar-label">

                  ${category.label}

                </span>


                <span class="zayaxra-sidebar-count">

                  0

                </span>

              </button>

            `
          )
          .join("")}

      </div>

    `;


    /*
      Pet listesinin olduğu ana bölümü bul.
    */

    const petsBox =
      $("pickerPets");


    if (
      petsBox
    ) {

      const wrapper =
        document.createElement(
          "div"
        );


      wrapper.className =
        "zayaxra-picker-layout";


      const parent =
        petsBox.parentElement;


      parent.insertBefore(
        wrapper,
        petsBox
      );


      wrapper.appendChild(
        sidebar
      );


      wrapper.appendChild(
        petsBox
      );

    }


    sidebar
      .querySelectorAll(
        ".zayaxra-sidebar-btn"
      )
      .forEach(
        button => {

          button.addEventListener(
            "click",
            () => {

              zayaxraCategory =
                button.dataset
                  .zayaxraCategory ||
                "all";


              sidebar
                .querySelectorAll(
                  ".zayaxra-sidebar-btn"
                )
                .forEach(
                  item => {

                    item.classList.toggle(
                      "active",

                      item ===
                      button
                    );

                  }
                );


              renderZayaxraPicker();

            }
          );

        }
      );

  }


  /* =======================================================
     CATEGORY COUNTS
  ======================================================= */

  function updateZayaxraCounts() {

    const counts = {

      all:
        PET_DATABASE.length,

      pets:
        0,

      petwear:
        0,

      eggs:
        0,

      vehicles:
        0,

      toys:
        0,

      gifts:
        0

    };


    PET_DATABASE.forEach(
      item => {

        const category =
          getZayaxraCategory(
            item
          );


        if (
          counts[
            category
          ] !== undefined
        ) {

          counts[
            category
          ]++;

        }

      }
    );


    Object.entries(
      counts
    ).forEach(
      (
        [
          category,
          count
        ]
      ) => {

        const element =
          document.querySelector(
            `[data-zayaxra-category="${category}"] .zayaxra-sidebar-count`
          );


        if (
          element
        ) {

          element.textContent =
            count;

        }

      }
    );

  }


  /* =======================================================
     RENDER PICKER
  ======================================================= */

  function renderZayaxraPicker() {

    const box =
      $("pickerPets");


    if (!box) {

      return;

    }


    let items;


    if (
      zayaxraCategory ===
      "all"
    ) {

      items =
        PET_DATABASE;

    }

    else {

      items =
        PET_DATABASE.filter(
          item =>
            getZayaxraCategory(
              item
            ) ===
            zayaxraCategory
        );

    }


    /*
      SEARCH
    */

    const query =
      String(
        $("petSearch")?.value ||
        ""
      )
        .trim()
        .toLowerCase();


    if (
      query
    ) {

      items =
        items.filter(
          item =>

            String(
              item.name ||
              ""
            )
              .toLowerCase()
              .includes(
                query
              )

        );

    }


    box.innerHTML =
      "";


    if (
      !items.length
    ) {

      box.innerHTML = `

        <div class="empty-picker">

          <span>
            🔎
          </span>

          <strong>
            Item bulunamadı
          </strong>

          <small>
            Bu kategoride sonuç yok.
          </small>

        </div>

      `;


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


        const category =
          getZayaxraCategory(
            item
          );


        /*
          Pet ise varyant sistemi.
          Diğer itemlerde sadece normal.
        */

        button.innerHTML = `

          <div class="choice-image">

            ${imageHTMLZayaxra(
              item
            )}

          </div>


          <strong>

            ${escapeHTML(
              item.name
            )}

          </strong>


          <span
            class="
              rarity-tag
              ${escapeHTML(
                item.rarity ||
                ""
              )}
            "
          >

            ${escapeHTML(
              typeof rarityName ===
              "function"

                ? rarityName(
                    item.rarity
                  )

                : item.rarity ||
                  ""
            )}

          </span>


          <small>

            ${formatValue(
              item.value
            )}

          </small>

        `;


        button.addEventListener(
          "click",
          () => {

            /*
              Mevcut pet picker sistemine
              selectedPet olarak aktar.
            */

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

  }


  /* =======================================================
     IMAGE HTML
  ======================================================= */

  function imageHTMLZayaxra(
    item
  ) {

    const src =
      item?.image ||
      "";


    return `

      <img

        src="${escapeHTML(
          src
        )}"

        alt="${escapeHTML(
          item?.name ||
          "Item"
        )}"

        class="pet-photo"

        loading="lazy"

        onerror="this.dataset.failed='1'; this.style.opacity='.15';"

      >

    `;

  }


  /* =======================================================
     SEARCH OVERRIDE
  ======================================================= */

  function initCategorySearch() {

    const search =
      $("petSearch");


    if (!search) {

      return;

    }


    /*
      Eski picker search listenerı
      çalışsa bile sonrasında bizim
      renderımız doğru kategoriyi gösterir.
    */

    search.addEventListener(
      "input",
      () => {

        setTimeout(
          () => {

            renderZayaxraPicker();

          },
          0
        );

      }
    );

  }


  /* =======================================================
     CSS
  ======================================================= */

  function injectZayaxraCategoryCSS() {

    if (
      $("zayaxraCategoryCSS")
    ) {

      return;

    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "zayaxraCategoryCSS";


    style.textContent = `

      .zayaxra-picker-layout {

        display: grid;

        grid-template-columns:
          185px
          minmax(0, 1fr);

        gap: 18px;

        width: 100%;

        align-items: start;

      }


      .zayaxra-category-sidebar {

        position: sticky;

        top: 16px;

        width: 185px;

        padding: 12px;

        border:

          1px solid
          rgba(255,255,255,.08);

        border-radius: 18px;

        background:

          linear-gradient(

            180deg,

            rgba(255,255,255,.055),

            rgba(255,255,255,.025)

          );

        backdrop-filter:
          blur(18px);

      }


      .zayaxra-category-title {

        padding:

          4px 8px
          11px;

        font-size: 10px;

        font-weight: 800;

        letter-spacing: .14em;

        color: #6f7890;

      }


      .zayaxra-category-list {

        display: flex;

        flex-direction: column;

        gap: 6px;

      }


      .zayaxra-sidebar-btn {

        width: 100%;

        min-height: 42px;

        display: grid;

        grid-template-columns:

          25px
          minmax(0,1fr)
          auto;

        align-items: center;

        gap: 8px;

        padding: 9px 10px;

        border:

          1px solid
          transparent;

        border-radius: 12px;

        background:

          transparent;

        color: #8f98ae;

        cursor: pointer;

        font: inherit;

        font-size: 11px;

        font-weight: 750;

        text-align: left;

        transition:

          transform .18s ease,

          background .18s ease,

          color .18s ease,

          border-color .18s ease;

      }


      .zayaxra-sidebar-btn:hover {

        transform:
          translateX(2px);

        background:

          rgba(255,255,255,.05);

        color: #fff;

      }


      .zayaxra-sidebar-btn.active {

        color: #fff;

        background:

          linear-gradient(

            135deg,

            rgba(111,84,255,.28),

            rgba(58,164,255,.13)

          );

        border-color:

          rgba(126,115,255,.35);

        box-shadow:

          0 8px 25px
          rgba(78,76,190,.12);

      }


      .zayaxra-sidebar-icon {

        width: 25px;

        display: flex;

        align-items: center;

        justify-content: center;

        font-size: 15px;

      }


      .zayaxra-sidebar-label {

        overflow: hidden;

        text-overflow: ellipsis;

        white-space: nowrap;

      }


      .zayaxra-sidebar-count {

        min-width: 21px;

        height: 20px;

        padding:
          0 5px;

        display: inline-flex;

        align-items: center;

        justify-content: center;

        border-radius: 999px;

        background:

          rgba(255,255,255,.065);

        color: #737d95;

        font-size: 9px;

        font-weight: 800;

      }


      .zayaxra-sidebar-btn.active
      .zayaxra-sidebar-count {

        background:

          rgba(255,255,255,.13);

        color: #fff;

      }


      @media (
        max-width: 800px
      ) {

        .zayaxra-picker-layout {

          grid-template-columns:
            1fr;

        }


        .zayaxra-category-sidebar {

          position:
            relative;

          top:
            auto;

          width:
            100%;

        }


        .zayaxra-category-list {

          display:

            grid;

          grid-template-columns:

            repeat(
              2,
              minmax(0,1fr)
            );

        }


        .zayaxra-sidebar-btn {

          min-height:
            40px;

        }

      }


      @media (
        max-width: 480px
      ) {

        .zayaxra-category-list {

          grid-template-columns:
            1fr;

        }

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* =======================================================
     START
  ======================================================= */

  function startCategorySystem() {

    injectZayaxraCategoryCSS();

    createZayaxraSidebar();

    initCategorySearch();

    updateZayaxraCounts();

    renderZayaxraPicker();

    /*
      Mevcut loader'ın yerine
      bütün itemleri getir.
    */

    loadEverything();

  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      startCategorySystem,
      {
        once:
          true
      }
    );

  }

  else {

    startCategorySystem();

  }

})();
/* =========================================================
   ZAYAXRA — CATEGORY SYSTEM
   ALL / PETS / PET WEAR / EGGS / VEHICLES / TOYS / GIFTS
========================================================= */

(function () {

  "use strict";

  let currentCategory = "all";

  const CATEGORIES = [
    {
      id: "all",
      name: "ALL",
      icon: "✦"
    },
    {
      id: "pets",
      name: "PETS",
      icon: "🐾"
    },
    {
      id: "petwear",
      name: "PET WEAR",
      icon: "👕"
    },
    {
      id: "eggs",
      name: "EGGS",
      icon: "🥚"
    },
    {
      id: "vehicles",
      name: "VEHICLES",
      icon: "🚗"
    },
    {
      id: "toys",
      name: "TOYS",
      icon: "🧸"
    },
    {
      id: "gifts",
      name: "GIFTS",
      icon: "🎁"
    }
  ];


  /* =======================================================
     CATEGORY DETECTION
  ======================================================= */

  function getCategory(item) {

    const type = String(
      item?.type || ""
    )
      .toLowerCase()
      .trim()
      .replace(/[-\s]+/g, "_");


    const name = String(
      item?.name || ""
    )
      .toLowerCase();


    if (
      type.includes("egg") ||
      /\begg\b/.test(name)
    ) {
      return "eggs";
    }


    if (
      type.includes("pet_wear") ||
      type.includes("petwear") ||
      type.includes("accessory") ||
      type.includes("wear")
    ) {
      return "petwear";
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
      type === "pet" ||
      type === "pets"
    ) {
      return "pets";
    }


    return "other";
  }


  /* =======================================================
     IMAGE
  ======================================================= */

  function getItemImage(item) {

    if (
      item?.image &&
      /^https?:\/\//i.test(
        String(item.image)
      )
    ) {
      return item.image;
    }


    if (
      item?.image
    ) {

      const fileName =
        String(item.image)
          .split("/")
          .pop();


      if (fileName) {

        return (
          "https://raw.githubusercontent.com/" +
          "ironbabatekkral/adoptme-values/main/images/" +
          encodeURIComponent(fileName)
        );

      }
    }


    return "";
  }


  /* =======================================================
     DATABASE'DAN TÜM ITEMLERİ YÜKLE
  ======================================================= */

  async function loadAllItems() {

    try {

      const response =
        await fetch(
          "https://raw.githubusercontent.com/" +
          "ironbabatekkral/adoptme-values/main/" +
          "adoptme_values.json?v=" +
          Date.now(),
          {
            cache: "no-store"
          }
        );


      if (!response.ok) {

        throw new Error(
          `HTTP ${response.status}`
        );

      }


      const data =
        await response.json();


      if (
        !Array.isArray(data)
      ) {

        throw new Error(
          "Veritabanı array değil."
        );

      }


      const unique =
        new Map();


      data.forEach(
        (
          item,
          index
        ) => {

          const category =
            getCategory(item);


          /*
            Bizim istediğimiz 7 kategori.
          */

          if (
            !CATEGORIES.some(
              c =>
                c.id ===
                category
            )
          ) {

            return;

          }


          const name =
            String(
              item?.name ||
              ""
            ).trim();


          if (!name) {
            return;
          }


          const key =
            category +
            "::" +
            name.toLowerCase();


          if (
            unique.has(key)
          ) {
            return;
          }


          /*
            NORMAL VALUE
          */

          let value =
            Number(
              item?.regular?.value
            );


          if (
            !Number.isFinite(
              value
            )
          ) {

            value =
              Number(
                item?.value
              );

          }


          if (
            !Number.isFinite(
              value
            )
          ) {

            value = 0;

          }


          /*
            ZAYAXRA ÖZEL DEĞERİ VARSA
            ONU KORU.
          */

          if (
            typeof CUSTOM_VALUE_OVERRIDES !==
              "undefined" &&

            Object.prototype.hasOwnProperty.call(
              CUSTOM_VALUE_OVERRIDES,
              name
            )
          ) {

            value =
              Number(
                CUSTOM_VALUE_OVERRIDES[
                  name
                ]
              );

          }


          unique.set(
            key,
            {

              id:
                `item_${item?.id ?? index}_${Date.now()}_${index}`,

              name,

              rarity:
                typeof normalizeRarity ===
                "function"

                  ? normalizeRarity(
                      item?.rarity
                    )

                  : "unknown",

              value,

              image:
                getItemImage(
                  item
                ),

              type:
                category,

              category,

              originalType:
                item?.type ||
                "",

              originalData:
                item

            }
          );

        }
      );


      /*
        TÜM KAYITLARI DATABASE'E KOY
      */

      PET_DATABASE =
        Array.from(
          unique.values()
        );


      PET_DATABASE.sort(
        (
          a,
          b
        ) =>
          a.name.localeCompare(
            b.name,
            "en",
            {
              sensitivity:
                "base"
            }
          )
      );


      databaseReady =
        true;


      console.log(
        `ZAYAXRA: ${PET_DATABASE.length} item yüklendi.`
      );


      updateCounts();

      renderCategoryItems();

    }

    catch (
      error
    ) {

      console.error(
        "ZAYAXRA item database hatası:",
        error
      );

    }

  }


  /* =======================================================
     CATEGORY SIDEBAR
  ======================================================= */

  function createSidebar() {

    const picker =
      $("petPicker");


    if (!picker) {
      return;
    }


    if (
      $("zayaxraCategorySidebar")
    ) {
      return;
    }


    const layout =
      document.createElement(
        "div"
      );


    layout.id =
      "zayaxraCategoryLayout";


    layout.className =
      "zayaxra-category-layout";


    const sidebar =
      document.createElement(
        "aside"
      );


    sidebar.id =
      "zayaxraCategorySidebar";


    sidebar.className =
      "zayaxra-category-sidebar";


    sidebar.innerHTML = `

      <div class="zayaxra-category-heading">
        CATEGORIES
      </div>

      <div class="zayaxra-category-list">

        ${CATEGORIES
          .map(
            category => `

              <button
                type="button"
                class="
                  zayaxra-category-button
                  ${
                    category.id ===
                    "all"
                      ? "active"
                      : ""
                  }
                "
                data-zayaxra-category="${category.id}"
              >

                <span class="zayaxra-category-icon">
                  ${category.icon}
                </span>

                <span class="zayaxra-category-name">
                  ${category.name}
                </span>

                <span class="zayaxra-category-count">
                  0
                </span>

              </button>

            `
          )
          .join("")}

      </div>
    `;


    const petsBox =
      $("pickerPets");


    if (!petsBox) {
      return;
    }


    /*
      pickerPets'i yeni layout'un içine taşı.
    */

    const parent =
      petsBox.parentElement;


    parent.insertBefore(
      layout,
      petsBox
    );


    layout.appendChild(
      sidebar
    );


    layout.appendChild(
      petsBox
    );


    /*
      Kategori butonları
    */

    sidebar
      .querySelectorAll(
        ".zayaxra-category-button"
      )
      .forEach(
        button => {

          button.addEventListener(
            "click",
            () => {

              currentCategory =
                button.dataset
                  .zayaxraCategory ||
                "all";


              sidebar
                .querySelectorAll(
                  ".zayaxra-category-button"
                )
                .forEach(
                  item => {

                    item.classList.toggle(
                      "active",
                      item ===
                      button
                    );

                  }
                );


              renderCategoryItems();

            }
          );

        }
      );

  }


  /* =======================================================
     COUNTS
  ======================================================= */

  function updateCounts() {

    const counts = {

      all:
        PET_DATABASE.length,

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
          item.category ||
          getCategory(
            item
          );


        if (
          counts[
            category
          ] !== undefined
        ) {

          counts[
            category
          ]++;

        }

      }
    );


    Object.entries(
      counts
    ).forEach(
      (
        [
          category,
          count
        ]
      ) => {

        const element =
          document.querySelector(
            `[data-zayaxra-category="${category}"] .zayaxra-category-count`
          );


        if (
          element
        ) {

          element.textContent =
            count;

        }

      }
    );

  }


  /* =======================================================
     SEARCH
  ======================================================= */

  function getSearchResults(
    items
  ) {

    const search =
      String(
        $("petSearch")?.value ||
        ""
      )
        .trim()
        .toLowerCase();


    if (!search) {
      return items;
    }


    return items.filter(
      item => {

        const name =
          String(
            item?.name ||
            ""
          )
            .toLowerCase();


        const rarity =
          String(
            item?.rarity ||
            ""
          )
            .toLowerCase();


        return (
          name.includes(
            search
          ) ||
          rarity.includes(
            search
          )
        );

      }
    );

  }


  /* =======================================================
     RENDER
  ======================================================= */

  function renderCategoryItems() {

    const box =
      $("pickerPets");


    if (!box) {
      return;
    }


    let items;


    if (
      currentCategory ===
      "all"
    ) {

      items =
        PET_DATABASE;

    }

    else {

      items =
        PET_DATABASE.filter(
          item =>
            (
              item.category ||
              getCategory(item)
            ) ===
            currentCategory
        );

    }


    items =
      getSearchResults(
        items
      );


    box.innerHTML =
      "";


    if (!items.length) {

      box.innerHTML = `

        <div class="empty-picker">

          <span>
            🔎
          </span>

          <strong>
            Item bulunamadı
          </strong>

          <small>
            Bu kategoride sonuç yok.
          </small>

        </div>

      `;


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


        const image =
          getItemImage(
            item
          );


        button.innerHTML = `

          <div class="choice-image">

            ${
              image

                ? `

                  <img

                    src="${escapeHTML(
                      image
                    )}"

                    alt="${escapeHTML(
                      item.name
                    )}"

                    class="pet-photo"

                    loading="lazy"

                    onerror="
                      this.style.opacity='0.12';
                    "

                  >

                `

                : `

                  <div class="choice-no-image">
                    NO IMAGE
                  </div>

                `
            }

          </div>


          <strong>

            ${escapeHTML(
              item.name
            )}

          </strong>


          <span
            class="
              rarity-tag
              ${escapeHTML(
                item.rarity ||
                ""
              )}
            "
          >

            ${escapeHTML(
              typeof rarityName ===
              "function"

                ? rarityName(
                    item.rarity
                  )

                : ""
            )}

          </span>


          <small>

            ${formatValue(
              item.value
            )}

          </small>

        `;


        button.addEventListener(
          "click",
          () => {

            selectItem(
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

  }


  /* =======================================================
     SELECT ITEM
  ======================================================= */

  function selectItem(
    item
  ) {

    selectedPet =
      item;


    const category =
      item.category ||
      getCategory(
        item
      );


    /*
      Sadece PETS'te
      Neon/Mega/Fly/Ride var.
    */

    if (
      category !==
        "pets"
    ) {

      selectedForm =
        "normal";


      selectedPotion = {

        fly:
          false,

        ride:
          false

      };

    }


    /*
      Egglerde de aynı.
    */

    if (
      category ===
      "eggs"
    ) {

      selectedForm =
        "normal";


      selectedPotion = {

        fly:
          false,

        ride:
          false

      };

    }


    $("pickerBar")
      ?.classList.remove(
        "hidden"
      );


    renderPickerPreview();

    updatePickerButtons();

    updatePickerValue();

  }


  /* =======================================================
     PICKER BUTTONS
  ======================================================= */

  function updatePickerButtonsFixed() {

    const category =
      selectedPet?.category ||
      getCategory(
        selectedPet
      );


    const canVariant =
      category ===
      "pets";


    const egg =
      category ===
      "eggs";


    $("normalFormBtn")
      ?.classList.toggle(
        "active",
        selectedForm ===
          "normal"
      );


    $("btnNeon")
      ?.classList.toggle(
        "active",
        canVariant &&
        !egg &&
        selectedForm ===
          "neon"
      );


    $("btnMega")
      ?.classList.toggle(
        "active",
        canVariant &&
        !egg &&
        selectedForm ===
          "mega"
      );


    $("noPotionBtn")
      ?.classList.toggle(
        "active",

        !canVariant ||
        egg ||
        (
          !selectedPotion.fly &&
          !selectedPotion.ride
        )

      );


    $("btnFly")
      ?.classList.toggle(
        "active",

        canVariant &&
        !egg &&
        selectedPotion.fly &&
        !selectedPotion.ride

      );


    $("btnRide")
      ?.classList.toggle(
        "active",

        canVariant &&
        !egg &&
        selectedPotion.ride &&
        !selectedPotion.fly

      );


    $("flyRideBtn")
      ?.classList.toggle(
        "active",

        canVariant &&
        !egg &&
        selectedPotion.fly &&
        selectedPotion.ride

      );


    /*
      Variant butonlarını gizle/pasifleştir.
    */

    [
      "btnNeon",
      "btnMega",
      "btnFly",
      "btnRide",
      "flyRideBtn"
    ]
      .forEach(
        id => {

          const element =
            $(id);


          if (!element) {
            return;
          }


          element.style.opacity =
            canVariant &&
            !egg
              ? ""
              : "0.35";


          element.style.pointerEvents =
            canVariant &&
            !egg
              ? ""
              : "none";

        }
      );

  }


  /*
    Mevcut fonksiyonu ez.
  */

  if (
    typeof updatePickerButtons ===
    "function"
  ) {

    updatePickerButtons =
      updatePickerButtonsFixed;

  }


  /* =======================================================
     FIX SEARCH
  ======================================================= */

  function fixSearch() {

    const search =
      $("petSearch");


    if (!search) {
      return;
    }


    search.addEventListener(
      "input",
      () => {

        renderCategoryItems();

      }
    );

  }


  /* =======================================================
     FIX CONFIRM
  ======================================================= */

  function fixConfirm() {

    const originalConfirm =
      confirmAddPet;


    confirmAddPet =
      function () {

        if (
          !selectedPet ||
          !pickerSide
        ) {

          return;

        }


        const category =
          selectedPet.category ||
          getCategory(
            selectedPet
          );


        /*
          PET dışındakiler normal item.
        */

        if (
          category !==
            "pets"
        ) {

          selectedForm =
            "normal";


          selectedPotion = {

            fly:
              false,

            ride:
              false

          };

        }


        originalConfirm();

      };

  }


  /* =======================================================
     CSS
  ======================================================= */

  function injectCSS() {

    if (
      $("zayaxraCategoryCSS")
    ) {

      return;

    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "zayaxraCategoryCSS";


    style.textContent = `

      #zayaxraCategoryLayout {

        display:
          grid;

        grid-template-columns:
          190px
          minmax(0, 1fr);

        gap:
          18px;

        width:
          100%;

        align-items:
          start;

      }


      .zayaxra-category-sidebar {

        position:
          sticky;

        top:
          15px;

        padding:
          12px;

        width:
          190px;

        box-sizing:
          border-box;

        border:
          1px solid
          rgba(255,255,255,.08);

        border-radius:
          18px;

        background:
          rgba(255,255,255,.035);

        backdrop-filter:
          blur(18px);

      }


      .zayaxra-category-heading {

        padding:
          5px 8px 12px;

        color:
          #707990;

        font-size:
          10px;

        font-weight:
          800;

        letter-spacing:
          .14em;

      }


      .zayaxra-category-list {

        display:
          flex;

        flex-direction:
          column;

        gap:
          6px;

      }


      .zayaxra-category-button {

        width:
          100%;

        min-height:
          42px;

        padding:
          9px 10px;

        display:
          grid;

        grid-template-columns:
          26px
          minmax(0,1fr)
          auto;

        align-items:
          center;

        gap:
          7px;

        border:
          1px solid transparent;

        border-radius:
          12px;

        background:
          transparent;

        color:
          #8e97aa;

        cursor:
          pointer;

        font:
          inherit;

        font-size:
          11px;

        font-weight:
          750;

        text-align:
          left;

        transition:
          .18s ease;

      }


      .zayaxra-category-button:hover {

        background:
          rgba(255,255,255,.05);

        color:
          #fff;

      }


      .zayaxra-category-button.active {

        background:
          linear-gradient(
            135deg,
            rgba(110,84,255,.28),
            rgba(59,158,255,.12)
          );

        border-color:
          rgba(124,111,255,.38);

        color:
          #fff;

        box-shadow:
          0 8px 26px
          rgba(70,70,180,.12);

      }


      .zayaxra-category-icon {

        display:
          flex;

        align-items:
          center;

        justify-content:
          center;

        font-size:
          15px;

      }


      .zayaxra-category-name {

        overflow:
          hidden;

        text-overflow:
          ellipsis;

        white-space:
          nowrap;

      }


      .zayaxra-category-count {

        min-width:
          21px;

        height:
          20px;

        padding:
          0 5px;

        display:
          inline-flex;

        align-items:
          center;

        justify-content:
          center;

        border-radius:
          999px;

        background:
          rgba(255,255,255,.06);

        color:
          #747e94;

        font-size:
          9px;

        font-weight:
          800;

      }


      .zayaxra-category-button.active
      .zayaxra-category-count {

        background:
          rgba(255,255,255,.13);

        color:
          #fff;

      }


      .choice-no-image {

        width:
          100%;

        height:
          100%;

        display:
          flex;

        align-items:
          center;

        justify-content:
          center;

        color:
          #596176;

        font-size:
          9px;

        font-weight:
          800;

      }


      @media (
        max-width: 800px
      ) {

        #zayaxraCategoryLayout {

          grid-template-columns:
            1fr;

        }


        .zayaxra-category-sidebar {

          position:
            relative;

          top:
            auto;

          width:
            100%;

        }


        .zayaxra-category-list {

          display:
            grid;

          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );

        }

      }


      @media (
        max-width: 480px
      ) {

        .zayaxra-category-list {

          grid-template-columns:
            1fr;

        }

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* =======================================================
     START
  ======================================================= */

  function start() {

    injectCSS();

    createSidebar();

    fixSearch();

    fixConfirm();

    loadAllItems();

  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start,
      {
        once:
          true
      }
    );

  }

  else {

    start();

  }

})();
/* =========================================
   ZAYAXRA — SINGLE LEFT CATEGORY SIDEBAR
   Eski kategori sistemlerini temizler
========================================= */

(function () {

  const CATEGORY_LIST = [
    { id: "all",       name: "ALL" },
    { id: "pets",      name: "PETS" },
    { id: "petwear",   name: "PET WEAR" },
    { id: "eggs",      name: "EGGS" },
    { id: "vehicles",  name: "VEHICLES" },
    { id: "toys",      name: "TOYS" },
    { id: "gifts",     name: "GIFTS" }
  ];

  let currentCategory = "all";


  /* -----------------------------------------
     ESKİ KATEGORİ SİSTEMLERİNİ TEMİZLE
  ----------------------------------------- */

  function removeOldCategories() {

    const selectors = [
      ".category-bar",
      ".category-tabs",
      ".category-sidebar",
      ".zayaxra-category-bar",
      ".zayaxra-category-sidebar",
      ".item-category-bar",
      ".item-categories",
      "#categoryBar",
      "#categorySidebar",
      "#zayaxraCategoryBar",
      "#zayaxraCategorySidebar"
    ];

    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.remove();
      });
    });


    // Eski sistemlerin oluşturduğu butonları
    // metinlerinden de temizle
    document.querySelectorAll("button").forEach(btn => {

      const text = btn.textContent
        .trim()
        .replace(/\s+/g, " ")
        .toUpperCase();

      const names = [
        "ALL",
        "PETS",
        "PET WEAR",
        "EGGS",
        "VEHICLES",
        "TOYS",
        "GIFTS"
      ];

      if (names.includes(text)) {
        btn.remove();
      }

    });

  }


  /* -----------------------------------------
     SIDEBAR OLUŞTUR
  ----------------------------------------- */

  function createCategorySidebar() {

    const pickerWindow =
      document.querySelector(".pet-modal-window");

    if (!pickerWindow) return;


    // Daha önce bizim sidebar varsa kaldır
    const old =
      document.getElementById("zayaxraLeftCategory");

    if (old) old.remove();


    const sidebar =
      document.createElement("aside");

    sidebar.id = "zayaxraLeftCategory";
    sidebar.className = "zayaxra-left-category";


    const title =
      document.createElement("div");

    title.className = "zayaxra-category-title";
    title.textContent = "CATEGORIES";

    sidebar.appendChild(title);


    CATEGORY_LIST.forEach(category => {

      const button =
        document.createElement("button");

      button.type = "button";
      button.className = "zayaxra-category-btn";

      button.dataset.category =
        category.id;

      button.innerHTML = `
        <span class="category-name">
          ${category.name}
        </span>

        <span
          class="category-count"
          id="count-${category.id}"
        >
          0
        </span>
      `;


      button.addEventListener("click", () => {

        currentCategory =
          category.id;

        document
          .querySelectorAll(
            ".zayaxra-category-btn"
          )
          .forEach(btn => {

            btn.classList.toggle(
              "active",
              btn.dataset.category ===
              currentCategory
            );

          });


        renderCurrentCategory();

      });


      sidebar.appendChild(button);

    });


    pickerWindow.insertBefore(
      sidebar,
      pickerWindow.firstChild
    );


    updateCategoryActive();

  }


  /* -----------------------------------------
     KATEGORİ SAYILARI
  ----------------------------------------- */

  function updateCategoryCounts() {

    if (
      typeof PET_DATABASE === "undefined" ||
      !Array.isArray(PET_DATABASE)
    ) {
      return;
    }


    const counts = {
      all: 0,
      pets: 0,
      petwear: 0,
      eggs: 0,
      vehicles: 0,
      toys: 0,
      gifts: 0
    };


    PET_DATABASE.forEach(item => {

      const category =
        detectCategory(item);

      if (
        counts[category] !== undefined
      ) {
        counts[category]++;
        counts.all++;
      }

    });


    Object.keys(counts).forEach(key => {

      const el =
        document.getElementById(
          `count-${key}`
        );

      if (el) {
        el.textContent =
          counts[key];
      }

    });

  }


  /* -----------------------------------------
     ITEM KATEGORİSİ BUL
  ----------------------------------------- */

  function detectCategory(item) {

    const type =
      String(
        item?.type ||
        item?.category ||
        ""
      )
      .toLowerCase()
      .replace(/[_-]/g, " ");


    if (
      type.includes("pet wear") ||
      type.includes("petwear") ||
      type.includes("accessor")
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
      type.includes("vehicles")
    ) {
      return "vehicles";
    }


    if (
      type.includes("toy") ||
      type.includes("toys")
    ) {
      return "toys";
    }


    if (
      type.includes("gift") ||
      type.includes("gifts")
    ) {
      return "gifts";
    }


    if (
      type.includes("pet") ||
      type.includes("pets")
    ) {
      return "pets";
    }


    return null;

  }


  /* -----------------------------------------
     FİLTRELENMİŞ LİSTE
  ----------------------------------------- */

  function getCategoryItems() {

    if (
      typeof PET_DATABASE === "undefined" ||
      !Array.isArray(PET_DATABASE)
    ) {
      return [];
    }


    if (currentCategory === "all") {

      return PET_DATABASE.filter(item => {

        const category =
          detectCategory(item);

        return [
          "pets",
          "petwear",
          "eggs",
          "vehicles",
          "toys",
          "gifts"
        ].includes(category);

      });

    }


    return PET_DATABASE.filter(item => {

      return (
        detectCategory(item) ===
        currentCategory
      );

    });

  }


  /* -----------------------------------------
     ARAMA + KATEGORİ RENDER
  ----------------------------------------- */

  function renderCurrentCategory() {

    const grid =
      document.getElementById(
        "pickerPets"
      );

    if (!grid) return;


    let items =
      getCategoryItems();


    const search =
      document.getElementById(
        "petSearch"
      );


    const query =
      search
        ? search.value
            .trim()
            .toLowerCase()
        : "";


    if (query) {

      items =
        items.filter(item => {

          return String(
            item.name || ""
          )
          .toLowerCase()
          .includes(query);

        });

    }


    grid.innerHTML = "";


    if (!items.length) {

      grid.innerHTML = `
        <div class="zayaxra-no-items">
          <div>🔎</div>
          <strong>Eşya bulunamadı</strong>
          <span>Başka bir arama veya kategori dene.</span>
        </div>
      `;

      updateCategoryCounts();

      return;

    }


    items.forEach(item => {

      const card =
        document.createElement("button");

      card.type = "button";
      card.className = "pet-choice";


      const image =
        item.image ||
        item.img ||
        "";


      card.innerHTML = `
        <div class="pet-choice-image">
          ${
            image
              ? `<img
                  src="${image}"
                  alt="${escapeCategoryHTML(
                    item.name || ""
                  )}"
                  loading="lazy"
                >`
              : `<span>🐾</span>`
          }
        </div>

        <div class="pet-choice-name">
          ${escapeCategoryHTML(
            item.name || "Unknown"
          )}
        </div>

        <div class="pet-choice-value">
          ${formatCategoryValue(item)}
        </div>
      `;


      card.addEventListener(
        "click",
        () => {

          if (
            typeof selectPickerPet ===
            "function"
          ) {
            selectPickerPet(item);
          }

        }
      );


      grid.appendChild(card);

    });


    updateCategoryCounts();

  }


  /* -----------------------------------------
     VALUE FORMAT
  ----------------------------------------- */

  function formatCategoryValue(item) {

    const value =
      item?.value ??
      item?.regular?.value ??
      0;


    const number =
      Number(value);


    if (!Number.isFinite(number)) {
      return "0";
    }


    return number % 1 === 0
      ? number.toString()
      : number.toFixed(1);

  }


  /* -----------------------------------------
     HTML GÜVENLİĞİ
  ----------------------------------------- */

  function escapeCategoryHTML(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* -----------------------------------------
     ACTIVE CATEGORY
  ----------------------------------------- */

  function updateCategoryActive() {

    document
      .querySelectorAll(
        ".zayaxra-category-btn"
      )
      .forEach(btn => {

        btn.classList.toggle(
          "active",
          btn.dataset.category ===
          currentCategory
        );

      });

  }


  /* -----------------------------------------
     ARAMA DEĞİŞİNCE
  ----------------------------------------- */

  function hookSearch() {

    const search =
      document.getElementById(
        "petSearch"
      );

    if (!search) return;


    search.addEventListener(
      "input",
      () => {

        renderCurrentCategory();

      }
    );

  }


  /* -----------------------------------------
     CSS
  ----------------------------------------- */

  function addCategoryCSS() {

    if (
      document.getElementById(
        "zayaxra-category-style"
      )
    ) {
      return;
    }


    const style =
      document.createElement("style");

    style.id =
      "zayaxra-category-style";


    style.textContent = `

      /* PICKER ANA YAPI */

      .pet-modal-window {
        position: relative;
      }


      .zayaxra-left-category {

        position: absolute;

        left: 24px;
        top: 112px;
        bottom: 24px;

        width: 185px;

        display: flex;
        flex-direction: column;

        gap: 7px;

        padding: 14px;

        border: 1px solid rgba(255,255,255,.07);

        border-radius: 18px;

        background:
          rgba(12,14,22,.88);

        backdrop-filter:
          blur(18px);

        z-index: 30;

        overflow-y: auto;

      }


      .zayaxra-category-title {

        padding:
          3px
          10px
          10px;

        font-size: 10px;

        font-weight: 800;

        letter-spacing: .18em;

        color:
          rgba(255,255,255,.35);

      }


      .zayaxra-category-btn {

        width: 100%;

        min-height: 42px;

        padding:
          0 12px;

        border: 1px solid
          transparent;

        border-radius: 11px;

        background:
          transparent;

        color:
          rgba(255,255,255,.62);

        cursor: pointer;

        display:
          flex;

        align-items:
          center;

        justify-content:
          space-between;

        gap: 10px;

        font-family:
          inherit;

        font-size: 12px;

        font-weight: 800;

        letter-spacing:
          .04em;

        transition:
          .18s ease;

      }


      .zayaxra-category-btn:hover {

        background:
          rgba(255,255,255,.05);

        color:
          #fff;

      }


      .zayaxra-category-btn.active {

        background:
          linear-gradient(
            135deg,
            rgba(130,95,255,.22),
            rgba(72,125,255,.13)
          );

        border-color:
          rgba(130,95,255,.35);

        color:
          #fff;

        box-shadow:
          0 8px 25px
          rgba(73,48,180,.16);

      }


      .category-count {

        min-width:
          27px;

        height:
          22px;

        padding:
          0 6px;

        display:
          flex;

        align-items:
          center;

        justify-content:
          center;

        border-radius:
          7px;

        background:
          rgba(255,255,255,.055);

        color:
          rgba(255,255,255,.4);

        font-size:
          10px;

        font-weight:
          800;

      }


      .zayaxra-category-btn.active
      .category-count {

        background:
          rgba(255,255,255,.1);

        color:
          rgba(255,255,255,.8);

      }


      /* SAĞ TARAF */

      .pet-modal-window
      #petSearch {

        margin-left:
          230px;

        width:
          calc(100% - 230px);

      }


      .pet-modal-window
      #pickerPets {

        margin-left:
          230px;

        width:
          calc(100% - 230px);

        min-height:
          330px;

        max-height:
          510px;

        overflow-y:
          auto;

      }


      .pet-modal-window
      .picker-settings {

        margin-left:
          230px;

      }


      .zayaxra-no-items {

        min-height:
          260px;

        display:
          flex;

        flex-direction:
          column;

        align-items:
          center;

        justify-content:
          center;

        gap: 7px;

        color:
          rgba(255,255,255,.4);

        text-align:
          center;

        font-size:
          12px;

      }


      .zayaxra-no-items div {

        font-size:
          30px;

        opacity:
          .6;

      }


      .zayaxra-no-items strong {

        color:
          rgba(255,255,255,.75);

        font-size:
          14px;

      }


      .zayaxra-no-items span {

        font-size:
          11px;

      }


      /* MOBİL */

      @media (max-width: 800px) {

        .zayaxra-left-category {

          position:
            relative;

          left:
            auto;

          top:
            auto;

          bottom:
            auto;

          width:
            auto;

          margin:
            0 15px 14px;

          display:
            grid;

          grid-template-columns:
            repeat(2, 1fr);

          max-height:
            none;

        }


        .zayaxra-category-title {

          grid-column:
            1 / -1;

        }


        .pet-modal-window
        #petSearch {

          margin-left:
            15px;

          width:
            calc(100% - 30px);

        }


        .pet-modal-window
        #pickerPets {

          margin-left:
            15px;

          width:
            calc(100% - 30px);

        }


        .pet-modal-window
        .picker-settings {

          margin-left:
            0;

        }

      }

    `;


    document.head.appendChild(style);

  }


  /* -----------------------------------------
     BAŞLAT
  ----------------------------------------- */

  function initCategorySystem() {

    addCategoryCSS();

    removeOldCategories();

    setTimeout(() => {

      createCategorySidebar();

      hookSearch();

      updateCategoryCounts();

      renderCurrentCategory();

    }, 100);

  }


  /* -----------------------------------------
     PICKER AÇILINCA TEKRAR KONTROL
  ----------------------------------------- */

  const originalOpenPicker =
    window.openPetPicker;


  if (
    typeof originalOpenPicker ===
    "function"
  ) {

    window.openPetPicker =
      function (side) {

        originalOpenPicker(side);


        setTimeout(() => {

          initCategorySystem();

        }, 120);

      };

  }


  /* -----------------------------------------
     SAYFA YÜKLENDİ
  ----------------------------------------- */

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      setTimeout(
        initCategorySystem,
        300
      );

    }
  );

})();
/* =========================================
   ZAYAXRA — PICKER SPACE + VALUE TOGGLE
========================================= */

(function () {

  let showPickerValues = false;


  /* -----------------------------------------
     CSS
  ----------------------------------------- */

  const style = document.createElement("style");
  style.id = "zayaxra-picker-improvements";

  style.textContent = `

    /* DAHA GENİŞ PICKER */

    .pet-modal-window {
      width: min(1180px, 96vw) !important;
      max-width: 1180px !important;
      padding: 26px !important;
    }


    /* SOL MENÜ */

    .zayaxra-left-category {
      width: 195px !important;
      left: 22px !important;
      top: 108px !important;
      bottom: 22px !important;
      padding: 12px !important;
    }


    /* SAĞ ALAN */

    .pet-modal-window #petSearch {
      margin-left: 220px !important;
      width: calc(100% - 220px) !important;
      box-sizing: border-box;
    }


    .pet-modal-window #pickerPets {
      margin-left: 220px !important;
      width: calc(100% - 220px) !important;
      box-sizing: border-box;

      padding: 8px 4px 12px !important;

      display: grid !important;

      grid-template-columns:
        repeat(auto-fill, minmax(145px, 1fr)) !important;

      gap: 12px !important;
    }


    /* PET KARTLARI */

    .pet-modal-window
    .pet-choice {

      min-width: 0 !important;
      min-height: 168px !important;

      padding: 12px !important;

    }


    .pet-modal-window
    .pet-choice-image {

      height: 92px !important;

    }


    .pet-modal-window
    .pet-choice-name {

      margin-top: 9px !important;

      font-size: 12px !important;

      line-height: 1.25 !important;

    }


    /* DEĞER */

    .pet-choice-value {

      transition:
        opacity .2s ease,
        filter .2s ease;

    }


    .zayaxra-values-hidden
    .pet-choice-value {

      opacity: 0 !important;

      filter: blur(7px) !important;

      user-select: none !important;

    }


    /* SAĞ ÜST ARAÇ ÇUBUĞU */

    .zayaxra-picker-tools {

      margin-left: 220px;

      width: calc(100% - 220px);

      display: flex;

      justify-content: flex-end;

      margin-bottom: 10px;

    }


    .zayaxra-value-toggle {

      display: inline-flex;

      align-items: center;

      gap: 8px;

      height: 38px;

      padding: 0 14px;

      border-radius: 10px;

      border: 1px solid rgba(255,255,255,.08);

      background:
        rgba(255,255,255,.045);

      color:
        rgba(255,255,255,.72);

      font-family: inherit;

      font-size: 11px;

      font-weight: 800;

      letter-spacing: .03em;

      cursor: pointer;

      transition: .18s ease;

    }


    .zayaxra-value-toggle:hover {

      background:
        rgba(255,255,255,.08);

      color: #fff;

      transform: translateY(-1px);

    }


    .zayaxra-value-toggle.active {

      background:
        rgba(120,95,255,.16);

      border-color:
        rgba(120,95,255,.35);

      color: #fff;

    }


    /* PICKER AYARLARI */

    .pet-modal-window .picker-settings {

      margin-left: 220px !important;

    }


    /* MOBİL */

    @media (max-width: 800px) {

      .pet-modal-window {
        width: 96vw !important;
        padding: 18px !important;
      }


      .zayaxra-left-category {

        position: relative !important;

        left: auto !important;
        top: auto !important;
        bottom: auto !important;

        width: 100% !important;

        margin: 0 0 14px !important;

      }


      .pet-modal-window #petSearch {

        margin-left: 0 !important;

        width: 100% !important;

      }


      .zayaxra-picker-tools {

        margin-left: 0 !important;

        width: 100% !important;

      }


      .pet-modal-window #pickerPets {

        margin-left: 0 !important;

        width: 100% !important;

        grid-template-columns:
          repeat(2, minmax(0, 1fr)) !important;

      }


      .pet-modal-window .picker-settings {

        margin-left: 0 !important;

      }

    }

  `;

  document.head.appendChild(style);


  /* -----------------------------------------
     VALUE BUTTON
  ----------------------------------------- */

  function createValueButton() {

    const pickerWindow =
      document.querySelector(".pet-modal-window");

    const search =
      document.getElementById("petSearch");

    if (!pickerWindow || !search) return;


    // Varsa tekrar oluşturma
    if (
      document.getElementById(
        "zayaxraValueToggle"
      )
    ) {
      return;
    }


    const tools =
      document.createElement("div");

    tools.className =
      "zayaxra-picker-tools";


    const button =
      document.createElement("button");

    button.type = "button";

    button.id =
      "zayaxraValueToggle";

    button.className =
      "zayaxra-value-toggle";


    button.innerHTML =
      "👁 Show Values";


    button.addEventListener(
      "click",
      () => {

        showPickerValues =
          !showPickerValues;


        pickerWindow.classList.toggle(
          "zayaxra-values-hidden",
          !showPickerValues
        );


        button.classList.toggle(
          "active",
          showPickerValues
        );


        button.innerHTML =
          showPickerValues
            ? "👁 Hide Values"
            : "👁 Show Values";

      }
    );


    tools.appendChild(button);


    search.parentNode.insertBefore(
      tools,
      search
    );


    // Başlangıçta gizli
    pickerWindow.classList.add(
      "zayaxra-values-hidden"
    );

  }


  /* -----------------------------------------
     PICKER AÇILINCA BUTONU EKLE
  ----------------------------------------- */

  function setupValueToggle() {

    setTimeout(() => {

      createValueButton();

    }, 80);

  }


  const oldOpen =
    window.openPetPicker;


  if (
    typeof oldOpen === "function"
  ) {

    window.openPetPicker =
      function (side) {

        oldOpen(side);

        setupValueToggle();

      };

  }


  document.addEventListener(
    "DOMContentLoaded",
    () => {

      setTimeout(
        setupValueToggle,
        400
      );

    }
  );


})();
/* =========================================
   ZAYAXRA — PREMIUM PICKER POLISH
========================================= */

(function () {

  const style = document.createElement("style");

  style.id = "zayaxra-premium-picker";

  style.textContent = `

    /* =====================================
       PICKER BACKGROUND
    ===================================== */

    .pet-modal-window {

      background:
        radial-gradient(
          circle at 80% 10%,
          rgba(118,86,255,.08),
          transparent 35%
        ),
        radial-gradient(
          circle at 20% 90%,
          rgba(66,110,255,.05),
          transparent 35%
        ),
        rgba(10,12,20,.96) !important;

    }


    /* =====================================
       SEARCH
    ===================================== */

    .pet-modal-window #petSearch {

      height: 46px !important;

      padding:
        0 16px 0 17px !important;

      border-radius: 13px !important;

      border:
        1px solid
        rgba(255,255,255,.08) !important;

      background:
        rgba(255,255,255,.035) !important;

      color: #fff !important;

      box-shadow:
        inset 0 1px 0
        rgba(255,255,255,.025),
        0 8px 28px
        rgba(0,0,0,.12) !important;

      transition:
        border-color .2s ease,
        background .2s ease,
        box-shadow .2s ease !important;

    }


    .pet-modal-window #petSearch:focus {

      outline: none !important;

      border-color:
        rgba(135,105,255,.55) !important;

      background:
        rgba(255,255,255,.055) !important;

      box-shadow:
        0 0 0 3px
        rgba(120,90,255,.08),
        0 12px 30px
        rgba(0,0,0,.18) !important;

    }


    /* =====================================
       GRID
    ===================================== */

    .pet-modal-window #pickerPets {

      padding:
        12px 5px 18px !important;

      scrollbar-width:
        thin;

      scrollbar-color:
        rgba(255,255,255,.12)
        transparent;

    }


    .pet-modal-window
    #pickerPets::-webkit-scrollbar {

      width: 7px;

    }


    .pet-modal-window
    #pickerPets::-webkit-scrollbar-track {

      background: transparent;

    }


    .pet-modal-window
    #pickerPets::-webkit-scrollbar-thumb {

      background:
        rgba(255,255,255,.10);

      border-radius: 99px;

    }


    .pet-modal-window
    #pickerPets::-webkit-scrollbar-thumb:hover {

      background:
        rgba(255,255,255,.18);

    }


    /* =====================================
       PET CARDS
    ===================================== */

    .pet-modal-window
    .pet-choice {

      position: relative;

      overflow: hidden;

      border:
        1px solid
        rgba(255,255,255,.06) !important;

      background:
        linear-gradient(
          145deg,
          rgba(255,255,255,.055),
          rgba(255,255,255,.022)
        ) !important;

      box-shadow:
        0 8px 25px
        rgba(0,0,0,.14) !important;

      transition:
        transform .2s ease,
        border-color .2s ease,
        background .2s ease,
        box-shadow .2s ease !important;

      transform:
        translateZ(0);

    }


    .pet-modal-window
    .pet-choice::before {

      content: "";

      position: absolute;

      top: -80px;
      right: -60px;

      width: 150px;
      height: 150px;

      border-radius: 50%;

      background:
        rgba(130,100,255,.09);

      filter:
        blur(35px);

      pointer-events:
        none;

      opacity: .5;

      transition:
        opacity .2s ease;

    }


    .pet-modal-window
    .pet-choice:hover {

      transform:
        translateY(-5px);

      border-color:
        rgba(138,112,255,.38) !important;

      background:
        linear-gradient(
          145deg,
          rgba(130,100,255,.11),
          rgba(255,255,255,.04)
        ) !important;

      box-shadow:
        0 14px 35px
        rgba(0,0,0,.25),
        0 0 0 1px
        rgba(130,100,255,.05) !important;

    }


    .pet-modal-window
    .pet-choice:hover::before {

      opacity:
        1;

    }


    /* =====================================
       IMAGE
    ===================================== */

    .pet-modal-window
    .pet-choice-image {

      position: relative;

      display: flex;

      align-items:
        center;

      justify-content:
        center;

    }


    .pet-modal-window
    .pet-choice-image img {

      max-width: 92px;

      max-height: 92px;

      object-fit: contain;

      filter:
        drop-shadow(
          0 8px 14px
          rgba(0,0,0,.28)
        );

      transition:
        transform .22s ease,
        filter .22s ease;

    }


    .pet-modal-window
    .pet-choice:hover
    .pet-choice-image img {

      transform:
        scale(1.08)
        translateY(-2px);

      filter:
        drop-shadow(
          0 11px 18px
          rgba(0,0,0,.35)
        );

    }


    /* =====================================
       NAME
    ===================================== */

    .pet-modal-window
    .pet-choice-name {

      color:
        rgba(255,255,255,.88) !important;

      font-weight:
        800 !important;

      letter-spacing:
        -.01em;

      transition:
        color .18s ease;

    }


    .pet-modal-window
    .pet-choice:hover
    .pet-choice-name {

      color:
        #fff !important;

    }


    /* =====================================
       VALUE
    ===================================== */

    .pet-modal-window
    .pet-choice-value {

      color:
        rgba(173,155,255,.9) !important;

      font-weight:
        900 !important;

      letter-spacing:
        .02em;

    }


    .zayaxra-values-hidden
    .pet-choice-value {

      opacity:
        0 !important;

      filter:
        blur(8px) !important;

      transform:
        scale(.96);

    }


    /* =====================================
       CATEGORY BUTTONS
    ===================================== */

    .zayaxra-category-btn {

      position:
        relative;

      overflow:
        hidden;

      transition:
        transform .18s ease,
        background .18s ease,
        border-color .18s ease,
        color .18s ease !important;

    }


    .zayaxra-category-btn:hover {

      transform:
        translateX(3px);

    }


    .zayaxra-category-btn.active {

      box-shadow:
        0 8px 25px
        rgba(90,65,210,.17),
        inset 0 1px 0
        rgba(255,255,255,.04) !important;

    }


    .zayaxra-category-btn.active::after {

      content: "";

      position: absolute;

      left: 0;
      top: 8px;
      bottom: 8px;

      width: 3px;

      border-radius:
        99px;

      background:
        rgba(170,145,255,.95);

      box-shadow:
        0 0 14px
        rgba(140,110,255,.65);

    }


    /* =====================================
       SHOW VALUES BUTTON
    ===================================== */

    .zayaxra-value-toggle {

      position:
        relative;

      overflow:
        hidden;

      border:
        1px solid
        rgba(255,255,255,.08) !important;

      background:
        rgba(255,255,255,.045) !important;

      box-shadow:
        inset 0 1px 0
        rgba(255,255,255,.03),
        0 8px 20px
        rgba(0,0,0,.12);

      transition:
        transform .18s ease,
        background .18s ease,
        border-color .18s ease,
        box-shadow .18s ease !important;

    }


    .zayaxra-value-toggle:hover {

      transform:
        translateY(-2px);

      border-color:
        rgba(135,110,255,.35) !important;

      box-shadow:
        0 10px 26px
        rgba(60,40,150,.16);

    }


    .zayaxra-value-toggle.active {

      background:
        linear-gradient(
          135deg,
          rgba(128,100,255,.22),
          rgba(75,110,255,.10)
        ) !important;

      border-color:
        rgba(140,115,255,.48) !important;

      box-shadow:
        0 0 20px
        rgba(110,85,255,.13);

    }


    /* =====================================
       VALUE SMOOTH REVEAL
    ===================================== */

    .pet-choice-value {

      transition:
        opacity .22s ease,
        filter .22s ease,
        transform .22s ease !important;

    }


    /* =====================================
       EMPTY STATE
    ===================================== */

    .zayaxra-no-items {

      border:
        1px dashed
        rgba(255,255,255,.08);

      border-radius:
        16px;

      background:
        rgba(255,255,255,.02);

      margin:
        10px 3px;

    }


    /* =====================================
       MOBILE
    ===================================== */

    @media (max-width: 800px) {

      .pet-modal-window
      .pet-choice {

        min-height:
          155px !important;

      }

      .pet-modal-window
      .pet-choice-image img {

        max-width:
          76px;

        max-height:
          76px;

      }

    }

  `;

  document.head.appendChild(style);

})();
/* =========================================
   ZAYAXRA — FINAL ELVEBREDD STYLE PICKER
========================================= */

(function () {

  /* =====================================
     STYLE
  ===================================== */

  const style = document.createElement("style");

  style.id = "zayaxra-elvebredd-picker";

  style.textContent = `

    /* ===================================
       ALT PANEL — TEK SIRA
    =================================== */

    .pet-modal-window #pickerBar {

      display: flex !important;

      flex-direction: row !important;

      align-items: center !important;

      gap: 14px !important;

      width: 100% !important;

      min-height: 78px !important;

      padding: 10px 14px !important;

      box-sizing: border-box !important;

    }


    /* ===================================
       ÖNİZLEME
    =================================== */

    .pet-modal-window .picker-preview {

      flex: 0 0 150px !important;

      width: 150px !important;

      height: 58px !important;

      min-height: 58px !important;

      display: flex !important;

      align-items: center !important;

      justify-content: center !important;

    }


    /* ===================================
       BUTONLAR TEK YATAY SATIR
    =================================== */

    .pet-modal-window .picker-options {

      flex: 1 !important;

      min-width: 0 !important;

      display: flex !important;

      align-items: center !important;

      justify-content: center !important;

    }


    .pet-modal-window .form-toggles,
    .pet-modal-window .potion-toggles {

      display: contents !important;

    }


    .pet-modal-window .form-btn,
    .pet-modal-window .potion-btn {

      flex: 0 0 52px !important;

      width: 52px !important;

      height: 38px !important;

      padding: 0 !important;

      display: flex !important;

      align-items: center !important;

      justify-content: center !important;

      border-radius: 10px !important;

      font-size: 12px !important;

      font-weight: 900 !important;

      margin: 0 4px !important;

    }


    /* NORMAL POTION + F/R KOMBOSU YOK */

    #noPotionBtn,
    #flyRideBtn {

      display: none !important;

    }


    /* ===================================
       D / N / M / F / R
    =================================== */

    #normalFormBtn {

      font-size: 0 !important;

    }

    #normalFormBtn::before {

      content: "D";

      font-size: 12px;

    }


    #btnNeon {

      font-size: 0 !important;

    }

    #btnNeon::before {

      content: "N";

      font-size: 12px;

    }


    #btnMega {

      font-size: 0 !important;

    }

    #btnMega::before {

      content: "M";

      font-size: 12px;

    }


    #btnFly {

      font-size: 0 !important;

    }

    #btnFly::before {

      content: "F";

      font-size: 12px;

    }


    #btnRide {

      font-size: 0 !important;

    }

    #btnRide::before {

      content: "R";

      font-size: 12px;

    }


    /* ===================================
       DEĞER + EKLE
    =================================== */

    .pet-modal-window .picker-add {

      flex: 0 0 auto !important;

      display: flex !important;

      align-items: center !important;

      gap: 8px !important;

      flex-direction: row !important;

    }


    .pet-modal-window .picker-value {

      min-width: 52px !important;

      height: 38px !important;

      display: flex !important;

      align-items: center !important;

      justify-content: center !important;

    }


    .pet-modal-window .add-confirm {

      height: 38px !important;

    }


    /* ===================================
       PET KARTLARI
    =================================== */

    .pet-modal-window .pet-choice {

      position: relative !important;

      cursor: default !important;

    }


    /* ===================================
       + BUTONU
    =================================== */

    .zayaxra-add-item {

      position: absolute !important;

      right: 8px !important;

      bottom: 8px !important;

      width: 28px !important;

      height: 28px !important;

      display: flex !important;

      align-items: center !important;

      justify-content: center !important;

      border-radius: 8px !important;

      border:
        1px solid
        rgba(255,255,255,.12) !important;

      background:
        rgba(120,95,255,.12) !important;

      color: rgba(255,255,255,.65) !important;

      font-size: 18px !important;

      font-weight: 900 !important;

      line-height: 1 !important;

      cursor: pointer !important;

      opacity: .65 !important;

      transform: scale(.92) !important;

      transition:
        .18s ease !important;

      z-index: 10 !important;

    }


    .pet-modal-window .pet-choice:hover
    .zayaxra-add-item {

      opacity: 1 !important;

      transform: scale(1) !important;

      color: #fff !important;

      border-color:
        rgba(155,130,255,.65) !important;

      background:
        rgba(125,95,255,.28) !important;

      box-shadow:
        0 0 16px
        rgba(125,95,255,.35) !important;

    }


    .zayaxra-add-item:hover {

      transform:
        scale(1.08) !important;

      box-shadow:
        0 0 22px
        rgba(125,95,255,.5) !important;

    }


    .zayaxra-add-item:active {

      transform:
        scale(.94) !important;

    }


    /* ===================================
       PET KARTI ARTIK SEÇİLEMEZ
    =================================== */

    .pet-modal-window .pet-choice {

      -webkit-user-select: none;

      user-select: none;

    }


    /* ===================================
       MOBİL
    =================================== */

    @media (max-width: 800px) {

      .pet-modal-window #pickerBar {

        flex-direction: column !important;

        align-items: stretch !important;

      }


      .pet-modal-window .picker-preview {

        width: 100% !important;

        flex: none !important;

      }


      .pet-modal-window .picker-options {

        width: 100% !important;

        justify-content: center !important;

      }


      .pet-modal-window .picker-add {

        justify-content: flex-end !important;

      }

    }

  `;

  document.head.appendChild(style);


  /* =====================================
     KARTLARA + EKLE
  ===================================== */

  function addPlusButtons() {

    const cards =
      document.querySelectorAll(
        "#pickerPets .pet-choice"
      );


    cards.forEach(card => {

      if (
        card.querySelector(
          ".zayaxra-add-item"
        )
      ) {
        return;
      }


      const plus =
        document.createElement("button");

      plus.type = "button";

      plus.className =
        "zayaxra-add-item";

      plus.innerHTML = "+";

      plus.title = "Ekle";


      plus.addEventListener(
        "click",
        function (event) {

          event.preventDefault();

          event.stopPropagation();

          event.stopImmediatePropagation();


          /*
           * Kartın içindeki veriyi
           * mevcut seçim sisteminden al.
           */

          const nameEl =
            card.querySelector(
              ".pet-choice-name"
            );


          if (!nameEl) return;


          const name =
            nameEl.textContent.trim();


          const database =
            window.PET_DATABASE;


          if (
            !Array.isArray(database)
          ) {
            return;
          }


          const item =
            database.find(
              pet =>
                String(
                  pet.name || ""
                ).trim() === name
            );


          if (
            item &&
            typeof window.selectPickerPet ===
              "function"
          ) {

            window.selectPickerPet(item);

          }

        }
      );


      card.appendChild(plus);

    });

  }


  /* =====================================
     PET KARTINA TIKLAMAYI ENGELLE
  ===================================== */

  const grid =
    document.getElementById(
      "pickerPets"
    );


  if (grid) {

    grid.addEventListener(
      "click",
      function (event) {

        const plus =
          event.target.closest(
            ".zayaxra-add-item"
          );


        /*
         * + değilse kart seçimi engellenir.
         */

        if (!plus) {

          const card =
            event.target.closest(
              ".pet-choice"
            );


          if (card) {

            event.preventDefault();

            event.stopPropagation();

            event.stopImmediatePropagation();

          }

        }

      },
      true
    );


    const observer =
      new MutationObserver(() => {

        addPlusButtons();

      });


    observer.observe(
      grid,
      {
        childList: true,
        subtree: true
      }
    );


    addPlusButtons();

  }


})();
/* =========================================
   ZAYAXRA — FINAL FIX
   HORIZONTAL FORMS + ALL ITEM CATEGORIES
========================================= */

(function () {

  /* =====================================
     YATAY D / N / M / F / R
  ===================================== */

  const style = document.createElement("style");
  style.id = "zayaxra-final-fix";

  style.textContent = `

    /* ALT PANEL */
    #pickerBar {
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      width: 100% !important;
      gap: 14px !important;
    }

    #pickerBar.hidden {
      display: flex !important;
    }


    /* ÖNİZLEME */
    #pickerPreview {
      flex: 0 0 145px !important;
      width: 145px !important;
    }


    /* SEÇİM ALANI */
    #pickerBar .picker-options {
      flex: 1 1 auto !important;
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      justify-content: center !important;
      gap: 8px !important;
      min-width: 0 !important;
    }


    /*
      Eski iki ayrı satırı tamamen kaldırıp
      butonları tek satırda birleştir.
    */

    #pickerBar .form-toggles,
    #pickerBar .potion-toggles {
      display: contents !important;
    }


    #pickerBar .form-btn,
    #pickerBar .potion-btn {
      flex: 0 0 52px !important;
      width: 52px !important;
      height: 38px !important;

      margin: 0 !important;
      padding: 0 !important;

      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      border-radius: 10px !important;

      font-size: 0 !important;
      font-weight: 900 !important;
    }


    /* NORMAL FORM = D */
    #normalFormBtn::before {
      content: "D";
      font-size: 12px;
    }


    /* NEON = N */
    #btnNeon::before {
      content: "N";
      font-size: 12px;
    }


    /* MEGA = M */
    #btnMega::before {
      content: "M";
      font-size: 12px;
    }


    /* FLY = F */
    #btnFly::before {
      content: "F";
      font-size: 12px;
    }


    /* RIDE = R */
    #btnRide::before {
      content: "R";
      font-size: 12px;
    }


    /* NORMAL POTION VE F/R KAPALI */
    #noPotionBtn,
    #flyRideBtn {
      display: none !important;
    }


    /* EKLE */
    #pickerBar .picker-add {
      flex: 0 0 auto !important;
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      gap: 8px !important;
    }


    /* AKTİF BUTON */
    #pickerBar .form-btn.active,
    #pickerBar .potion-btn.active {
      color: #fff !important;

      background:
        linear-gradient(
          135deg,
          rgba(140,110,255,.30),
          rgba(80,110,255,.16)
        ) !important;

      border-color:
        rgba(165,140,255,.72) !important;

      box-shadow:
        0 0 0 1px rgba(145,115,255,.12),
        0 0 20px rgba(125,95,255,.38),
        0 7px 22px rgba(90,65,220,.24) !important;
    }


    /* =================================
       PET KARTLARI + BUTON
    ================================= */

    #pickerPets .pet-choice {
      position: relative !important;
    }


    .zayaxra-add-item {
      position: absolute !important;

      right: 8px !important;
      bottom: 8px !important;

      width: 28px !important;
      height: 28px !important;

      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      border-radius: 8px !important;

      border: 1px solid rgba(255,255,255,.12) !important;

      background:
        rgba(120,95,255,.16) !important;

      color: #fff !important;

      font-size: 18px !important;
      font-weight: 900 !important;

      cursor: pointer !important;

      opacity: .75 !important;

      transition: .18s ease !important;

      z-index: 20 !important;
    }


    #pickerPets .pet-choice:hover
    .zayaxra-add-item {
      opacity: 1 !important;

      box-shadow:
        0 0 18px
        rgba(125,95,255,.45) !important;

      transform:
        scale(1.06);
    }


    /* =================================
       MOBİL
    ================================= */

    @media (max-width: 800px) {

      #pickerBar {
        flex-direction: column !important;
      }

      #pickerPreview {
        width: 100% !important;
        flex: none !important;
      }

      #pickerBar .picker-options {
        width: 100% !important;
        flex-wrap: nowrap !important;
        overflow-x: auto !important;
      }

    }

  `;

  document.head.appendChild(style);


  /* =====================================
     TÜM JSON KAYITLARINI AL
     PET / EGG FİLTRESİ YOK
  ===================================== */

  async function loadZayaxraAllItems() {

    try {

      const response =
        await fetch(
          "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/adoptme_values.json"
        );

      if (!response.ok) {
        throw new Error("JSON yüklenemedi");
      }

      const raw =
        await response.json();


      if (!Array.isArray(raw)) {
        throw new Error("JSON formatı hatalı");
      }


      const items =
        raw
          .map(item => {

            const filename =
              String(
                item.image || ""
              )
              .split("/")
              .pop();


            const image =
              filename
                ? `https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/images/${filename}`
                : "";


            const regularValue =
              Number(
                item?.regular?.value ??
                item?.value ??
                0
              );


            return {

              ...item,

              image,

              value:
                Number.isFinite(
                  regularValue
                )
                  ? regularValue
                  : 0

            };

          })
          .filter(item => {

            const type =
              String(
                item.type ||
                item.category ||
                ""
              )
              .toLowerCase();


            return (

              type.includes("pet") ||

              type.includes("egg") ||

              type.includes("wear") ||

              type.includes("vehicle") ||

              type.includes("toy") ||

              type.includes("gift")

            );

          });


      /*
       * Küresel veritabanını güncelle.
       */

      window.ZAYAXRA_ALL_ITEMS =
        items;


      /*
       * Mevcut kod PET_DATABASE'i
       * global olarak kullanıyorsa bunu da güncelle.
       */

      if (
        typeof window.PET_DATABASE !==
        "undefined"
      ) {

        window.PET_DATABASE =
          items;

      }


      /*
       * Sayfa açıkken picker varsa
       * yeniden çiz.
       */

      if (
        typeof renderCurrentCategory ===
        "function"
      ) {

        renderCurrentCategory();

      }

      return items;

    } catch (error) {

      console.error(
        "ZAYAXRA database error:",
        error
      );

      return [];

    }

  }


  /* =====================================
     BAŞLAT
  ===================================== */

  window.ZAYAXRA_ALL_ITEMS = [];

  loadZayaxraAllItems();


})();
