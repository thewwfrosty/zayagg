,/* =========================================================
   NORMAL / FLY / RIDE / NEON / MEGA VARIANTS
   ========================================================= */

function showVariantSelector(pet) {

  const box = document.querySelector(".pet-modal-box");

  if (!box) return;

  const base = pet.value;

  const variants = [
    {
      name: "Normal",
      value: base,
      icon: pet.icon,
      className: ""
    },
    {
      name: "Fly",
      value: Math.round(base * 1.1),
      icon: "🪽" + pet.icon,
      className: ""
    },
    {
      name: "Ride",
      value: Math.round(base * 1.1),
      icon: "🛼" + pet.icon,
      className: ""
    },
    {
      name: "Fly Ride",
      value: Math.round(base * 1.2),
      icon: "🪽🛼" + pet.icon,
      className: ""
    },
    {
      name: "Neon",
      value: base * 4,
      icon: "✨" + pet.icon,
      className: "neon"
    },
    {
      name: "Neon Fly",
      value: Math.round(base * 4.1),
      icon: "✨🪽" + pet.icon,
      className: "neon"
    },
    {
      name: "Neon Ride",
      value: Math.round(base * 4.1),
      icon: "✨🛼" + pet.icon,
      className: "neon"
    },
    {
      name: "Neon Fly Ride",
      value: Math.round(base * 4.2),
      icon: "✨🪽🛼" + pet.icon,
      className: "neon"
    },
    {
      name: "Mega Neon",
      value: base * 16,
      icon: "🌈" + pet.icon,
      className: "mega"
    },
    {
      name: "Mega Fly Ride",
      value: Math.round(base * 16.2),
      icon: "🌈🪽🛼" + pet.icon,
      className: "mega"
    }
  ];

  box.innerHTML = `

    <div class="modal-header">

      <h2>${pet.icon} ${pet.name}</h2>

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

          <div style="
            font-size:30px;
            min-height:45px;
            display:flex;
            align-items:center;
            justify-content:center;
          ">
            ${v.icon}
          </div>

          <strong>${v.name}</strong>

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


function chooseVariant(variant) {

  if (!selectedPet) return;

  const base = selectedPet.value;

  let multiplier = 1;

  switch (variant) {

    case "Normal":
      multiplier = 1;
      break;

    case "Fly":
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

  let icon = selectedPet.icon;

  if (variant.includes("Mega")) {
    icon = "🌈" + icon;
  } else if (variant.includes("Neon")) {
    icon = "✨" + icon;
  }

  if (variant.includes("Fly")) {
    icon = "🪽" + icon;
  }

  if (variant.includes("Ride")) {
    icon = "🛼" + icon;
  }

  addItem(currentSide, {

    name: selectedPet.name,

    value: Math.round(base * multiplier),

    rarity: selectedPet.rarity,

    icon: icon,

    variant: variant

  });

  closePetModal();
}
