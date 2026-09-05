/* =========================================================
   PET VARIANTS + REAL PET IMAGES
   ========================================================= */

function getPetImage(pet) {
  const fileName = pet.name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `images/pets/${fileName}.png`;
}


/* =========================================================
   VARIANT SELECTOR
   ========================================================= */

function showVariantSelector(pet) {

  const box = document.querySelector(".pet-modal-box");

  if (!box) return;

  const base = pet.value;
  const image = getPetImage(pet);

  const variants = [

    {
      name: "Normal",
      value: base,
      className: ""
    },

    {
      name: "Fly",
      value: Math.round(base * 1.1),
      className: ""
    },

    {
      name: "Ride",
      value: Math.round(base * 1.1),
      className: ""
    },

    {
      name: "Fly Ride",
      value: Math.round(base * 1.2),
      className: ""
    },

    {
      name: "Neon",
      value: base * 4,
      className: "neon"
    },

    {
      name: "Neon Fly",
      value: Math.round(base * 4.1),
      className: "neon"
    },

    {
      name: "Neon Ride",
      value: Math.round(base * 4.1),
      className: "neon"
    },

    {
      name: "Neon Fly Ride",
      value: Math.round(base * 4.2),
      className: "neon"
    },

    {
      name: "Mega Neon",
      value: base * 16,
      className: "mega"
    },

    {
      name: "Mega Fly Ride",
      value: Math.round(base * 16.2),
      className: "mega"
    }

  ];


  box.innerHTML = `

    <div class="modal-header">

      <h2>

        <img
          src="${image}"
          style="
            width:42px;
            height:42px;
            object-fit:contain;
            vertical-align:middle;
          "
          onerror="this.style.display='none'"
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

      ${pet.name} için istediğin versiyonu seç

    </div>


    <div class="variant-grid">

      ${variants.map(v => `

        <button
          class="variant-card ${v.className}"
          onclick="chooseVariant('${v.name}')"
        >

          <div class="variant-image">

            <img
              src="${image}"
              alt="${pet.name}"
              onerror="
                this.style.display='none';
                this.nextElementSibling.style.display='block';
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

            ${v.value.toLocaleString()} Value

          </small>

        </button>

      `).join("")}

    </div>


    <button
      class="variant-back"
      onclick="openPetModal()"
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

  const base = selectedPet.value;

  let multiplier = 1;


  switch (variant) {

    case "Normal":
      multiplier = 1;
      break;

    case "Fly":
      multiplier = 1.1;
      break;

    case "Ride":
      multiplier = 1.1;
      break;

    case "Fly Ride":
      multiplier = 1.2;
      break;

    case "Neon":
      multiplier = 4;
      break;

    case "Neon Fly":
      multiplier = 4.1;
      break;

    case "Neon Ride":
      multiplier = 4.1;
      break;

    case "Neon Fly Ride":
      multiplier = 4.2;
      break;

    case "Mega Neon":
      multiplier = 16;
      break;

    case "Mega Fly Ride":
      multiplier = 16.2;
      break;

  }


  const newItem = {

    name: selectedPet.name,

    value: Math.round(
      base * multiplier
    ),

    rarity: selectedPet.rarity,

    icon: selectedPet.icon,

    variant: variant,

    image: getPetImage(selectedPet)

  };


  /*
    Burada mevcut addItem fonksiyonunun
    iki farklı yapısından dolayı doğrudan
    eski fonksiyona güvenmek yerine,
    tradeState'e ekliyoruz.
  */

  if (!tradeState[currentSide]) {
    tradeState[currentSide] = [];
  }


  const existing =
    tradeState[currentSide].find(item =>
      item.name === newItem.name &&
      item.variant === newItem.variant
    );


  if (existing) {

    existing.quantity =
      (existing.quantity || 1) + 1;

  } else {

    tradeState[currentSide].push({

      ...newItem,

      quantity: 1

    });

  }


  if (typeof renderTrade === "function") {
    renderTrade();
  }


  closePetModal();

}


/* =========================================================
   PET IMAGE HELPER
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
