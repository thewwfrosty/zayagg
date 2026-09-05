const pets = [
  {
    name: "Shadow Dragon",
    icon: "🐉",
    value: 100,
    demand: "High",
    trend: "↑",
    image: "https://cdn.playadopt.me/items/shadow_dragon.png"
  },
  {
    name: "Frost Dragon",
    icon: "🐲",
    value: 85,
    demand: "High",
    trend: "↑",
    image: "https://cdn.playadopt.me/items/frost_dragon.png"
  },
  {
    name: "Bat Dragon",
    icon: "🦇",
    value: 120,
    demand: "High",
    trend: "→",
    image: "https://cdn.playadopt.me/items/bat_dragon.png"
  },
  {
    name: "Turtle",
    icon: "🐢",
    value: 8,
    demand: "Good",
    trend: "↑",
    image: "https://cdn.playadopt.me/items/turtle.png"
  },
  {
    name: "Crow",
    icon: "🐦‍⬛",
    value: 22,
    demand: "High",
    trend: "→",
    image: "https://cdn.playadopt.me/items/crow.png"
  },
  {
    name: "Arctic Reindeer",
    icon: "🦌",
    value: 14,
    demand: "Good",
    trend: "↑",
    image: "https://cdn.playadopt.me/items/arctic_reindeer.png"
  },
  {
    name: "Kangaroo",
    icon: "🦘",
    value: 7,
    demand: "Good",
    trend: "→",
    image: "https://cdn.playadopt.me/items/kangaroo.png"
  }
];

const variants = [
  { name: "Normal", multiplier: 1, type: "normal" },
  { name: "Fly", multiplier: 1.1, type: "fly" },
  { name: "Ride", multiplier: 1.1, type: "ride" },
  { name: "Fly Ride", multiplier: 1.2, type: "flyride" },
  { name: "Neon", multiplier: 4, type: "neon" },
  { name: "Neon Fly", multiplier: 4.1, type: "neonfly" },
  { name: "Neon Ride", multiplier: 4.1, type: "neonride" },
  { name: "Neon Fly Ride", multiplier: 4.2, type: "neonflyride" },
  { name: "Mega Neon", multiplier: 16, type: "mega" },
  { name: "Mega Fly Ride", multiplier: 16.2, type: "megaflyride" }
];

const state = {
  you: [],
  them: []
};

let currentSide = "you";
let currentPet = null;

function getPetImage(pet) {
  return pet.image || "";
}

function formatValue(value) {
  return Number(value).toFixed(1).replace(".0", "");
}

function getVariantValue(pet, variant) {
  return pet.value * variant.multiplier;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   PET GÖRSELİ
========================================================= */

function petImageHTML(pet, size = 64, variant = "Normal") {
  const v = String(variant).toLowerCase();

  const isFly = v.includes("fly");
  const isRide = v.includes("ride");
  const isNeon = v.includes("neon");
  const isMega = v.includes("mega");

  let filter = "none";

  if (isNeon) {
    filter =
      "drop-shadow(0 0 5px #00ffff) drop-shadow(0 0 10px #7b61ff)";
  }

  if (isMega) {
    filter =
      "drop-shadow(0 0 5px #ff4dff) drop-shadow(0 0 10px #00ffff) drop-shadow(0 0 15px #ffe600)";
  }

  return `
    <div
      class="zayagg-pet-visual ${isNeon ? "zayagg-neon" : ""} ${isMega ? "zayagg-mega" : ""}"
      style="
        width:${size}px;
        height:${size}px;
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-shrink:0;
      "
    >

      ${
        isNeon
          ? `<span class="zayagg-neon-ring"></span>`
          : ""
      }

      ${
        isMega
          ? `
            <span class="zayagg-mega-ring"></span>
            <span class="zayagg-spark spark-one">✦</span>
            <span class="zayagg-spark spark-two">✦</span>
          `
          : ""
      }

      <img
        src="${escapeHTML(getPetImage(pet))}"
        alt="${escapeHTML(pet.name)}"
        style="
          width:100%;
          height:100%;
          object-fit:contain;
          position:relative;
          z-index:4;
          filter:${filter};
        "
        onerror="
          this.style.display='none';
          this.nextElementSibling.style.display='flex';
        "
      >

      <span
        style="
          display:none;
          position:relative;
          z-index:4;
          align-items:center;
          justify-content:center;
          width:100%;
          height:100%;
          font-size:${Math.round(size * 0.55)}px;
        "
      >${pet.icon || "🐾"}</span>

      ${
        isFly
          ? `<span class="zayagg-variant-badge zayagg-fly">F</span>`
          : ""
      }

      ${
        isRide
          ? `<span class="zayagg-variant-badge zayagg-ride">R</span>`
          : ""
      }

    </div>
  `;
}

/* =========================================================
   POPÜLER PET DEĞERLERİ
========================================================= */

function renderValues() {
  const search = document.getElementById("search");
  const grid = document.getElementById("valueGrid");

  if (!grid) return;

  const q = (search?.value || "").toLowerCase().trim();

  grid.innerHTML = pets
    .filter(p => p.name.toLowerCase().includes(q))
    .map(p => `
      <div
        class="value-card"
        onclick="openPetModal('you', '${escapeHTML(p.name)}')"
        style="cursor:pointer;"
      >

        <div class="pet-icon">
          ${petImageHTML(p, 70, "Normal")}
        </div>

        <h3>${escapeHTML(p.name)}</h3>

        <div class="value-meta">
          <span>Demand: ${escapeHTML(p.demand)}</span>
          <span class="trend">${escapeHTML(p.trend)}</span>
        </div>

        <div style="margin-top:12px">
          <span class="value">${formatValue(p.value)}</span> Value
        </div>

      </div>
    `)
    .join("");
}

/* =========================================================
   MODAL OLUŞTUR
========================================================= */

function ensurePetModal() {
  let modal = document.getElementById("petModal");

  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "petModal";
  modal.className = "pet-modal";

  modal.innerHTML = `
    <div class="pet-modal-box" onclick="event.stopPropagation()"></div>
  `;

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      closePetModal();
    }
  });

  document.body.appendChild(modal);

  return modal;
}

/* =========================================================
   PET MODAL
========================================================= */

function openPetModal(side = currentSide, petName = null) {
  currentSide = side || currentSide;

  const modal = ensurePetModal();

  if (petName) {
    const pet = pets.find(
      p => p.name.toLowerCase() === String(petName).toLowerCase()
    );

    if (pet) {
      currentPet = pet;
      showVariantSelector(pet);
      modal.classList.add("show");
      return;
    }
  }

  currentPet = null;
  window.petModalSearch = "";

  renderPetModal();
  modal.classList.add("show");
}

function renderPetModal() {
  const modal = ensurePetModal();
  const box = modal.querySelector(".pet-modal-box");

  const q = window.petModalSearch || "";

  const filtered = pets.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase())
  );

  box.innerHTML = `
    <div class="modal-header">

      <div>
        <div style="
          font-size:12px;
          color:#8e97ad;
          margin-bottom:4px;
        ">
          ${currentSide === "you" ? "Senin teklifin" : "Karşı taraf"}
        </div>

        <h2>Pet / Item Seç</h2>
      </div>

      <button
        class="modal-close"
        onclick="closePetModal()"
      >
        ✕
      </button>

    </div>

    <div style="padding:18px 22px 0;">

      <input
        class="pet-search"
        id="petModalSearch"
        placeholder="🔎 Pet ara..."
        value="${escapeHTML(q)}"
        oninput="updatePetModalSearch(this.value)"
      >

    </div>

    <div
      class="pet-list"
      style="padding:18px 22px 22px;"
    >

      ${
        filtered.length
          ? filtered.map(p => `
              <button
                class="pet-option"
                onclick="selectPet('${escapeHTML(p.name)}')"
              >

                ${petImageHTML(p, 58, "Normal")}

                <span>
                  <b>${escapeHTML(p.name)}</b>
                  <small>
                    ${escapeHTML(p.demand)}
                    •
                    ${formatValue(p.value)} Value
                  </small>
                </span>

              </button>
            `).join("")
          : `
            <div style="
              padding:30px;
              text-align:center;
              color:#8e97ad;
            ">
              Pet bulunamadı.
            </div>
          `
      }

    </div>
  `;

  const input = document.getElementById("petModalSearch");

  if (input) {
    input.focus();
    input.setSelectionRange(
      input.value.length,
      input.value.length
    );
  }
}

function updatePetModalSearch(value) {
  window.petModalSearch = value;
  renderPetModal();
}

function selectPet(petName) {
  const pet = pets.find(
    p => p.name.toLowerCase() === String(petName).toLowerCase()
  );

  if (!pet) return;

  currentPet = pet;

  showVariantSelector(pet);
}

/* =========================================================
   VARIANT SEÇİMİ
========================================================= */

function showVariantSelector(pet) {
  const modal = ensurePetModal();
  const box = modal.querySelector(".pet-modal-box");

  box.innerHTML = `

    <div class="modal-header">

      <div style="
        display:flex;
        align-items:center;
        gap:12px;
      ">

        ${petImageHTML(pet, 48, "Normal")}

        <h2>${escapeHTML(pet.name)}</h2>

      </div>

      <button
        class="modal-close"
        onclick="closePetModal()"
      >
        ✕
      </button>

    </div>


    <div style="
      padding:18px 22px 4px;
    ">

      <p style="
        margin:0;
        color:#9da5b8;
        font-size:13px;
      ">
        ${escapeHTML(pet.name)} için istediğin versiyonu seç
      </p>

    </div>


    <div class="variant-grid">

      ${variants.map(v => {

        const isNeon =
          v.type.includes("neon");

        const isMega =
          v.type.includes("mega");

        return `

          <button
            class="
              variant-card
              ${isNeon ? "neon" : ""}
              ${isMega ? "mega" : ""}
            "
            onclick="chooseVariant('${escapeHTML(v.name)}')"
            type="button"
          >

            <div class="variant-card-image">

              ${petImageHTML(
                pet,
                76,
                v.name
              )}

            </div>

            <strong>
              ${escapeHTML(v.name)}
            </strong>

            <small>
              ${formatValue(
                getVariantValue(pet, v)
              )} Value
            </small>

          </button>

        `;

      }).join("")}

    </div>


    <button
      class="ghost"
      style="
        width:calc(100% - 44px);
        margin:0 22px 22px;
      "
      onclick="renderPetModal()"
      type="button"
    >
      ← Petlere dön
    </button>

  `;

  modal.classList.add("show");
}

function chooseVariant(variantName) {
  if (!currentPet) return;

  const variant = variants.find(
    v => v.name === variantName
  );

  if (!variant) return;

  addTradePet(
    currentSide,
    currentPet,
    variant
  );

  closePetModal();
}

function addTradePet(side, pet, variant) {
  const item = {
    ...pet,
    variant: variant.name,
    value: getVariantValue(
      pet,
      variant
    )
  };

  state[side].push(item);

  renderTrade(side);
  updateResult();
}

/* =========================================================
   TRADE
========================================================= */

function addItem(side) {
  currentSide = side;

  window.petModalSearch = "";

  openPetModal(side);
}

function removeItem(side, index) {
  state[side].splice(index, 1);

  renderTrade(side);
  updateResult();
}

function renderTrade(side) {
  const box =
    document.getElementById(
      side + "Items"
    );

  const total =
    document.getElementById(
      side + "Total"
    );

  if (!box || !total) return;

  box.innerHTML = state[side]
    .map((p, i) => `

      <div
        class="item trade-item"
        style="
          display:flex;
          align-items:center;
          gap:10px;
        "
      >

        ${petImageHTML(
          p,
          42,
          p.variant || "Normal"
        )}

        <span style="flex:1;">

          ${escapeHTML(p.name)}

          ${
            p.variant &&
            p.variant !== "Normal"
              ? `
                <small style="
                  display:block;
                  color:#8e97ad;
                ">
                  ${escapeHTML(p.variant)}
                </small>
              `
              : ""
          }

          <small>
            (${formatValue(p.value)})
          </small>

        </span>

        <button
          onclick="removeItem('${side}',${i})"
        >
          ✕
        </button>

      </div>

    `)
    .join("");

  total.textContent =
    state[side]
      .reduce(
        (sum, p) =>
          sum + Number(p.value || 0),
        0
      )
      .toFixed(1);
}

/* =========================================================
   W / F / L
========================================================= */

function updateResult() {
  const a =
    state.you.reduce(
      (sum, p) =>
        sum + Number(p.value || 0),
      0
    );

  const b =
    state.them.reduce(
      (sum, p) =>
        sum + Number(p.value || 0),
      0
    );

  const card =
    document.getElementById(
      "resultCard"
    );

  if (!card) return;

  if (!a && !b) {

    card.className =
      "result-card neutral";

    card.querySelector("h3")
      .textContent =
      "Pet ekleyerek başla";

    card.querySelector(
      ".result-number"
    ).textContent = "—";

    return;
  }

  if (!a || !b) {

    card.className =
      "result-card neutral";

    card.querySelector("h3")
      .textContent =
      "İki tarafa da pet ekle";

    card.querySelector(
      ".result-number"
    ).textContent = "—";

    return;
  }

  const ratio = b / a;

  const difference = b - a;

  let label;
  let cls;

  if (ratio >= 1.10) {

    label = "WIN";
    cls = "win";

  } else if (ratio <= 0.90) {

    label = "LOSE";
    cls = "lose";

  } else {

    label = "FAIR";
    cls = "fair";

  }

  card.className =
    "result-card " + cls;

  card.querySelector("h3")
    .textContent = label;

  const sign =
    difference > 0
      ? "+"
      : "";

  card.querySelector(
    ".result-number"
  ).textContent =
    sign +
    formatValue(difference);
}

/* =========================================================
   TEMİZLE
========================================================= */

function clearTrade() {

  state.you = [];
  state.them = [];

  renderTrade("you");
  renderTrade("them");

  updateResult();
}

function closePetModal() {

  const modal =
    document.getElementById(
      "petModal"
    );

  if (modal) {
    modal.classList.remove("show");
  }

  currentPet = null;
}

/* =========================================================
   VARIANT GÖRSELLERİ / EFEKTLER
========================================================= */

function addVariantStyles() {

  if (
    document.getElementById(
      "zayaggVariantStyles"
    )
  ) {
    return;
  }

  const style =
    document.createElement("style");

  style.id =
    "zayaggVariantStyles";

  style.textContent = `

    .zayagg-pet-visual {
      overflow:visible;
    }


    .variant-card-image {

      height:92px;

      display:flex;

      align-items:center;

      justify-content:center;

      position:relative;

    }


    /* FLY / RIDE */

    .zayagg-variant-badge {

      position:absolute;

      z-index:10;

      width:20px;

      height:20px;

      border-radius:50%;

      display:flex;

      align-items:center;

      justify-content:center;

      font-size:10px;

      font-weight:900;

      color:#fff;

      border:2px solid
        rgba(255,255,255,.8);

      box-shadow:
        0 3px 8px
        rgba(0,0,0,.5);

    }


    .zayagg-fly {

      left:-4px;

      top:0;

      background:
        linear-gradient(
          135deg,
          #31a9ff,
          #2468ff
        );

    }


    .zayagg-ride {

      right:-4px;

      top:0;

      background:
        linear-gradient(
          135deg,
          #ffb03a,
          #ff5a18
        );

    }


    /* NEON */

    .zayagg-neon {

      animation:
        zayaggNeonPulse
        1.8s
        ease-in-out
        infinite;

    }


    .zayagg-neon-ring {

      position:absolute;

      width:74%;

      height:74%;

      border-radius:50%;

      z-index:1;

      background:
        conic-gradient(
          #ff35e6,
          #735cff,
          #00d9ff,
          #00ff9d,
          #fff000,
          #ff7b00,
          #ff35e6
        );

      filter:blur(7px);

      opacity:.85;

      animation:
        zayaggRotate
        2.6s
        linear
        infinite;

    }


    .zayagg-neon-ring::after {

      content:"";

      position:absolute;

      inset:7px;

      border-radius:50%;

      background:#111421;

    }


    /* MEGA */

    .zayagg-mega {

      animation:
        zayaggMegaPulse
        1.5s
        ease-in-out
        infinite;

    }


    .zayagg-mega-ring {

      position:absolute;

      width:88%;

      height:88%;

      border-radius:50%;

      z-index:1;

      background:
        conic-gradient(
          #ff0055,
          #ff8a00,
          #fff000,
          #00ff66,
          #00d9ff,
          #4d55ff,
          #d13cff,
          #ff0055
        );

      filter:blur(8px);

      opacity:.95;

      animation:
        zayaggRotate
        2s
        linear
        infinite;

    }


    .zayagg-mega-ring::after {

      content:"";

      position:absolute;

      inset:8px;

      border-radius:50%;

      background:#111421;

    }


    .zayagg-spark {

      position:absolute;

      z-index:12;

      color:#fff;

      font-size:13px;

      text-shadow:
        0 0 5px #fff,
        0 0 12px #ff4dff;

      animation:
        zayaggSpark
        1.1s
        ease-in-out
        infinite;

    }


    .spark-one {

      top:-4px;

      right:0;

    }


    .spark-two {

      bottom:-4px;

      left:0;

      animation-delay:.5s;

    }


    @keyframes zayaggRotate {

      from {
        transform:rotate(0deg);
      }

      to {
        transform:rotate(360deg);
      }

    }


    @keyframes zayaggNeonPulse {

      0%,100% {
        transform:scale(1);
      }

      50% {
        transform:scale(1.035);
      }

    }


    @keyframes zayaggMegaPulse {

      0%,100% {
        transform:scale(1);
      }

      50% {
        transform:scale(1.06);
      }

    }


    @keyframes zayaggSpark {

      0%,100% {

        opacity:.35;

        transform:
          scale(.8)
          rotate(0deg);

      }

      50% {

        opacity:1;

        transform:
          scale(1.3)
          rotate(18deg);

      }

    }


    .value-card
    .zayagg-pet-visual {

      margin:auto;

    }

  `;

  document.head.appendChild(style);
}

/* =========================================================
   BAŞLAT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    addVariantStyles();

    const clearBtn =
      document.getElementById(
        "clearBtn"
      );

    if (clearBtn) {
      clearBtn.onclick =
        clearTrade;
    }

    const search =
      document.getElementById(
        "search"
      );

    if (search) {
      search.addEventListener(
        "input",
        renderValues
      );
    }

    renderValues();

    renderTrade("you");

    renderTrade("them");

    updateResult();

  }
);
