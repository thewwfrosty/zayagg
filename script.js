/* =========================================================
   ZAYAXRA — SCRIPT.JS
   PREMIUM TRADE + PROFILE + FULL PET DATABASE + IMAGES
========================================================= */

"use strict";


/* =========================================================
   DATABASE
========================================================= */

const PET_DATA_URL =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/adoptme_values.json";

const PET_IMAGE_BASE =
  "https://ironbabatekkral.github.io/adoptme-values";


/* =========================================================
   ZAYAXRA CUSTOM VALUES
   Bunlar öncelikli kullanılır.
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
   DATABASE BAŞLANGIÇ
========================================================= */

let PET_DATABASE = [];


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

let databaseReady = false;


/* =========================================================
   HELPERS
========================================================= */

function $(id) {
  return document.getElementById(id);
}


/* =========================================================
   SLUG
========================================================= */

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
      ""
    );

}


/* =========================================================
   EGG CHECK
========================================================= */

function isEgg(pet) {

  if (!pet) {
    return false;
  }


  return (

    String(
      pet.type || ""
    )
      .toLowerCase()
      .includes("egg")

    ||

    /\begg\b/i.test(
      String(
        pet.name || ""
      )
    )

  );

}


/* =========================================================
   IMAGE URL
   VERİTABANINDAKİ GERÇEK IMAGE PATH'İ KULLANILIR
========================================================= */

function resolveImage(
  imagePath,
  name
) {

  if (
    imagePath
  ) {

    if (
      /^https?:\/\//i.test(
        imagePath
      )
    ) {

      return imagePath;

    }


    return (

      PET_IMAGE_BASE +

      (
        imagePath.startsWith("/")
          ? ""
          : "/"
      ) +

      imagePath

    );

  }


  /*
    Sadece son çare.
  */

  return (

    PET_IMAGE_BASE +

    "/images/pets/" +

    encodeURIComponent(
      name
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
    value === "rare" ||
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
   FORMAT VALUE
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
   HTML ESCAPE
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
   IMAGE HTML
========================================================= */

function imageHTML(
  pet,
  className = "pet-photo"
) {

  return `

    <img

      src="${escapeHTML(
        pet?.image ||
        resolveImage(
          "",
          pet?.name ||
          "Pet"
        )
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
   FULL DATABASE LOAD
========================================================= */

async function loadFullPetDatabase() {

  try {

    console.log(
      "ZAYAXRA: Pet veritabanı yükleniyor..."
    );


    const response =
      await fetch(
        PET_DATA_URL,
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
        "JSON array değil."
      );

    }


    /*
      Pet + egg kayıtları
    */

    const remotePets =
      raw

        .filter(
          item => {

            const type =
              String(
                item?.type ||
                ""
              )
                .toLowerCase();


            return (

              type.includes(
                "pet"
              )

              ||

              type.includes(
                "egg"
              )

            );

          }
        )


        .map(
          (
            item,
            index
          ) => {

            const name =
              String(
                item?.name ||
                ""
              )
                .trim();


            const regularValue =
              Number(
                item?.regular?.value
              );


            const fallbackValue =
              Number(
                item?.value
              );


            const customValue =
              CUSTOM_VALUE_OVERRIDES[
                name
              ];


            let value;


            if (
              customValue !==
              undefined
            ) {

              value =
                customValue;

            }

            else if (
              Number.isFinite(
                regularValue
              )
            ) {

              value =
                regularValue;

            }

            else if (
              Number.isFinite(
                fallbackValue
              )
            ) {

              value =
                fallbackValue;

            }

            else {

              value = 0;

            }


            const type =
              String(
                item?.type ||
                ""
              )
                .toLowerCase();


            return {

              id:
                `pet_${item?.id ?? index}_${slug(name)}`,

              name,

              rarity:
                normalizeRarity(
                  item?.rarity
                ),

              value:

                Number.isFinite(
                  Number(value)
                )

                  ? Number(value)

                  : 0,


              /*
                EN ÖNEMLİ KISIM:
                JSON'daki GERÇEK IMAGE PATH
              */

              image:
                resolveImage(
                  item?.image,
                  name
                ),


              type:
                type.includes(
                  "egg"
                ) ||
                isEgg({
                  name,
                  type
                })
                  ? "egg"
                  : "pet"

            };

          }
        )


        .filter(
          item =>
            item.name
        );


    /*
      Duplicate temizleme
    */

    const unique =
      new Map();


    remotePets.forEach(
      pet => {

        unique.set(
          pet.name
            .toLowerCase(),
          pet
        );

      }
    );


    PET_DATABASE =
      Array.from(
        unique.values()
      );


    /*
      İsme göre sırala
    */

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
      `ZAYAXRA: ${PET_DATABASE.length} pet/egg yüklendi.`
    );


    /*
      Liste açıksa yenile
    */

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
      En azından özel değerleri
      kaybetme.
    */

    PET_DATABASE = Object.entries(
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


    const isOldZayagg =
      name.includes(
        "zayagg"
      ) ||

      username.includes(
        "zayagg"
      ) ||

      bio.includes(
        "adm"
      );


    if (
      isOldZayagg
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
   PET PICKER OPEN
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

    search.value = "";

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


/* =========================================================
   CLOSE PET PICKER
========================================================= */

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
   PICKER LIST
========================================================= */

function renderPickerPets(
  list = PET_DATABASE
) {

  const box =
    $("pickerPets");


  if (!box) {
    return;
  }


  box.innerHTML = "";


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
   SEARCH
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


  const chips = [];


  if (
    !isEgg(
      selectedPet
    )
  ) {

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
        !isEgg(selectedPet)

          ? `<div class="neon-effect"></div>`

          : ""
      }


      ${
        selectedForm === "mega" &&
        !isEgg(selectedPet)

          ? `<div class="mega-effect"></div>`

          : ""
      }


      ${imageHTML(
        selectedPet
      )}


      <div class="pet-badges">

        ${
          selectedForm === "neon" &&
          !isEgg(selectedPet)

            ? `<span class="mini-chip neon">N</span>`

            : ""
        }


        ${
          selectedForm === "mega" &&
          !isEgg(selectedPet)

            ? `<span class="mini-chip mega">M</span>`

            : ""
        }


        ${
          selectedPotion.fly &&
          !isEgg(selectedPet)

            ? `<span class="mini-chip fly">F</span>`

            : ""
        }


        ${
          selectedPotion.ride &&
          !isEgg(selectedPet)

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

      ride: false

    };

  }


  else if (
    type ===
    "ride"
  ) {

    selectedPotion = {

      fly: false,

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
      pet.value ||
      0
    );


  if (
    !Number.isFinite(
      value
    )
  ) {

    value = 0;

  }


  /*
    Egg = sadece normal
  */

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


  if (
    isEgg(
      selectedPet
    )
  ) {

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
      isEgg(
        selectedPet
      )
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
      isEgg(selectedPet)
        ? false
        : Boolean(
            selectedPotion.fly
          ),

    ride:
      isEgg(selectedPet)
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
   TRADE SIDE
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
   REMOVE PET
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

  youTrade = [];

  themTrade = [];

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
   RESULT
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
    status === "BIG WIN" ||
    status === "SMALL WIN"
  ) {

    stats.wins++;

  }


  else if (
    status === "FAIR"
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


/* =========================================================
   CLOSE PROFILE
========================================================= */

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
              selectedAvatar === avatar
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


/* =========================================================
   NAVBAR
========================================================= */

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
   SEARCH
========================================================= */

function initSearch() {

  const search =
    $("search");


  if (!search) {
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


  if (!search) {
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


      if (!button) {
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
   DATABASE CHECK
========================================================= */

function validateDatabase() {

  if (
    !Array.isArray(
      PET_DATABASE
    )
  ) {

    console.error(
      "ZAYAXRA: PET_DATABASE bulunamadı."
    );

    return;

  }


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


  /*
    Gerçek pet + gerçek image verilerini yükle.
  */

  loadFullPetDatabase();

}


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
   HTML'DEN ÇAĞRILABİLSİN
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
