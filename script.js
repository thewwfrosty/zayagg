/* =========================================================
   ZAYAGG — TRADE CALCULATOR & PET SYSTEM
   ========================================================= */

// 1. ÖRNEK PET VERİ TABANI (Tüm Görsel ve Rozet Desteği)
const PET_DATABASE = [
  {
    id: "shadow_dragon",
    name: "Shadow Dragon",
    rarity: "legendary",
    value: 125,
    image: "https://images.wikia.com/adoptme/images/a/a6/Shadow_Dragon.png"
  },
  {
    id: "bat_dragon",
    name: "Bat Dragon",
    rarity: "legendary",
    value: 110,
    image: "https://images.wikia.com/adoptme/images/8/87/Bat_Dragon.png"
  },
  {
    id: "frost_dragon",
    name: "Frost Dragon",
    rarity: "legendary",
    value: 58,
    image: "https://images.wikia.com/adoptme/images/3/36/Frost_Dragon.png"
  },
  {
    id: "giraffe",
    name: "Giraffe",
    rarity: "legendary",
    value: 70,
    image: "https://images.wikia.com/adoptme/images/e/e0/Giraffe.png"
  },
  {
    id: "crow",
    name: "Crow",
    rarity: "legendary",
    value: 28,
    image: "https://images.wikia.com/adoptme/images/a/a3/Crow.png"
  },
  {
    id: "turtle",
    name: "Turtle",
    rarity: "ultra",
    value: 12,
    image: "https://images.wikia.com/adoptme/images/0/0a/Turtle.png"
  }
];

// Takas Durum Verileri
let leftTrade = [];
let rightTrade = [];
let activeSide = null; // 'left' veya 'right'
let selectedPet = null;

// Seçenek Durumları (Modal İçi)
let isFly = false;
let isRide = false;
let petForm = "regular"; // 'regular', 'neon', 'mega'

// DOM Yükleme Sonrası Başlatma
document.addEventListener("DOMContentLoaded", () => {
  renderValueList();
  updateTradeUI();
  setupEventListeners();
});

// Event Listener'lar
function setupEventListeners() {
  // Modal Kapatma
  document.querySelectorAll(".pet-modal-close").forEach(btn => {
    btn.addEventListener("click", closeModal);
  });

  // Arama Girişi
  const searchInput = document.getElementById("petSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderPetModalList(e.target.value);
    });
  }

  // Potion ve Form Butonları
  document.getElementById("btnFly")?.addEventListener("click", () => {
    isFly = !isFly;
    document.getElementById("btnFly").classList.toggle("active", isFly);
    updatePickerBar();
  });

  document.getElementById("btnRide")?.addEventListener("click", () => {
    isRide = !isRide;
    document.getElementById("btnRide").classList.toggle("active", isRide);
    updatePickerBar();
  });

  document.getElementById("btnNeon")?.addEventListener("click", () => {
    petForm = petForm === "neon" ? "regular" : "neon";
    updateFormButtons();
    updatePickerBar();
  });

  document.getElementById("btnMega")?.addEventListener("click", () => {
    petForm = petForm === "mega" ? "regular" : "mega";
    updateFormButtons();
    updatePickerBar();
  });

  // Pet Ekleme Onayı
  document.getElementById("confirmAddPet")?.addEventListener("click", confirmAddPet);
}

function updateFormButtons() {
  document.getElementById("btnNeon")?.classList.toggle("active", petForm === "neon");
  document.getElementById("btnMega")?.classList.toggle("active", petForm === "mega");
}

// Modal Açma Fonksiyonu (Sol veya Sağ Kutu için)
function openPetModal(side) {
  activeSide = side;
  resetPickerState();
  
  const modal = document.getElementById("petModal");
  if (modal) {
    modal.classList.remove("hidden");
    document.body.classList.add("profile-open");
    renderPetModalList();
  }
}

function closeModal() {
  const modal = document.getElementById("petModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("profile-open");
  }
}

function resetPickerState() {
  selectedPet = null;
  isFly = false;
  isRide = false;
  petForm = "regular";
  
  document.getElementById("btnFly")?.classList.remove("active");
  document.getElementById("btnRide")?.classList.remove("active");
  updateFormButtons();
  
  const pickerBar = document.getElementById("pickerBar");
  if (pickerBar) pickerBar.classList.add("hidden");
}

// Modal İçindeki Pet Listesini Oluşturma
function renderPetModalList(filterText = "") {
  const grid = document.getElementById("petChoiceGrid");
  if (!grid) return;

  grid.innerHTML = "";
  const filtered = PET_DATABASE.filter(p => 
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );

  filtered.forEach(pet => {
    const card = document.createElement("div");
    card.className = `pet-choice ${selectedPet?.id === pet.id ? 'selected' : ''}`;
    card.onclick = () => selectPetInModal(pet);

    card.innerHTML = `
      <div class="pet-image-wrap">
        <img src="${pet.image}" alt="${pet.name}" class="pet-photo" onerror="this.src='https://via.placeholder.com/80?text=Pet'">
      </div>
      <strong>${pet.name}</strong>
      <span class="rarity-tag ${pet.rarity}">${pet.rarity.toUpperCase()}</span>
    `;
    grid.appendChild(card);
  });
}

// Modalda Pet Seçildiğinde
function selectPetInModal(pet) {
  selectedPet = pet;
  renderPetModalList(document.getElementById("petSearchInput")?.value || "");
  
  const pickerBar = document.getElementById("pickerBar");
  if (pickerBar) pickerBar.classList.remove("hidden");
  
  updatePickerBar();
}

// Seçili Pet Hesaplaması ve Alt Bar Güncellemesi
function calculatePetValue(baseVal, form, fly, ride) {
  let multiplier = 1;
  if (form === "neon") multiplier = 4;
  if (form === "mega") multiplier = 16;
  
  let extra = 0;
  if (fly) extra += 1.5;
  if (ride) extra += 1;

  return Number(((baseVal * multiplier) + extra).toFixed(1));
}

function updatePickerBar() {
  if (!selectedPet) return;

  const calculatedVal = calculatePetValue(selectedPet.value, petForm, isFly, isRide);
  
  // Önizleme Alanı ve Görsel Efektleri
  const previewWrap = document.getElementById("pickerPreview");
  if (previewWrap) {
    let effectClass = "";
    if (petForm === "neon") effectClass = '<div class="neon-effect"></div>';
    if (petForm === "mega") effectClass = '<div class="mega-effect"></div>';

    previewWrap.innerHTML = `
      <div class="pet-image-wrap">
        ${effectClass}
        <img src="${selectedPet.image}" class="pet-photo" alt="${selectedPet.name}">
        <div class="pet-badges">
          ${isFly ? '<span class="pet-badge fly">F</span>' : ''}
          ${isRide ? '<span class="pet-badge ride">R</span>' : ''}
          ${petForm === "neon" ? '<span class="pet-badge neon">N</span>' : ''}
          ${petForm === "mega" ? '<span class="pet-badge mega">M</span>' : ''}
        </div>
      </div>
      <div>
        <strong>${selectedPet.name}</strong>
        <div class="vchip-row">
          ${petForm !== 'regular' ? `<span class="vchip ${petForm}">${petForm.toUpperCase()}</span>` : ''}
          ${isFly ? '<span class="vchip fly">Fly</span>' : ''}
          ${isRide ? '<span class="vchip ride">Ride</span>' : ''}
        </div>
      </div>
    `;
  }

  const valDisplay = document.getElementById("pickerValue");
  if (valDisplay) valDisplay.textContent = calculatedVal;
}

// Takasa Pet Ekleme Onayı
function confirmAddPet() {
  if (!selectedPet || !activeSide) return;

  const finalValue = calculatePetValue(selectedPet.value, petForm, isFly, isRide);
  const itemData = {
    id: Date.now(),
    petId: selectedPet.id,
    name: selectedPet.name,
    image: selectedPet.image,
    value: finalValue,
    isFly: isFly,
    isRide: isRide,
    form: petForm
  };

  if (activeSide === "left") {
    leftTrade.push(itemData);
  } else {
    rightTrade.push(itemData);
  }

  updateTradeUI();
  closeModal();
}

// Takas Ekranını / Listeleri Güncelleme
function updateTradeUI() {
  renderTradeList("leftItems", leftTrade, "left");
  renderTradeList("rightItems", rightTrade, "right");
  
  const leftTotal = leftTrade.reduce((acc, i) => acc + i.value, 0);
  const rightTotal = rightTrade.reduce((acc, i) => acc + i.value, 0);

  const leftValEl = document.getElementById("leftTotalVal");
  const rightValEl = document.getElementById("rightTotalVal");
  
  if (leftValEl) leftValEl.textContent = leftTotal.toFixed(1);
  if (rightValEl) rightValEl.textContent = rightTotal.toFixed(1);

  calculateWFL(leftTotal, rightTotal);
}

function renderTradeList(elementId, list, side) {
  const container = document.getElementById(elementId);
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-items">Henüz pet eklenmedi</div>`;
    return;
  }

  container.innerHTML = list.map(item => {
    let effectClass = "";
    if (item.form === "neon") effectClass = '<div class="neon-effect"></div>';
    if (item.form === "mega") effectClass = '<div class="mega-effect"></div>';

    return `
      <div class="trade-item">
        <div class="pet-image-wrap">
          ${effectClass}
          <img src="${item.image}" class="pet-photo" alt="${item.name}">
          <div class="pet-badges">
            ${item.isFly ? '<span class="pet-badge fly">F</span>' : ''}
            ${item.isRide ? '<span class="pet-badge ride">R</span>' : ''}
            ${item.form === "neon" ? '<span class="pet-badge neon">N</span>' : ''}
            ${item.form === "mega" ? '<span class="pet-badge mega">M</span>' : ''}
          </div>
        </div>
        <div class="trade-item-info">
          <strong>${item.name}</strong>
          <small>Değer: ${item.value}</small>
        </div>
        <button class="remove-item" onclick="removePet('${side}', ${item.id})">&times;</button>
      </div>
    `;
  }).join("");
}

function removePet(side, id) {
  if (side === "left") {
    leftTrade = leftTrade.filter(i => i.id !== id);
  } else {
    rightTrade = rightTrade.filter(i => i.id !== id);
  }
  updateTradeUI();
}

// WFL (Win / Fair / Lose) Mantığı
function calculateWFL(left, right) {
  const resCard = document.getElementById("resultCard");
  const resText = document.getElementById("resultStatus");
  if (!resCard || !resText) return;

  if (left === 0 && right === 0) {
    resCard.className = "result-card";
    resText.textContent = "Pet Ekleyin";
    return;
  }

  const diff = right - left;
  resCard.classList.remove("win", "lose", "fair");

  if (diff > 2) {
    resCard.classList.add("win");
    resText.textContent = "KAZANÇ (WIN)";
  } else if (diff < -2) {
    resCard.classList.add("lose");
    resText.textContent = "KAYIP (LOSE)";
  } else {
    resCard.classList.add("fair");
    resText.textContent = "EŞİT (FAIR)";
  }
}

// Alt Sayfa Değer Listesini Render Etme
function renderValueList() {
  const grid = document.getElementById("valueGrid");
  if (!grid) return;

  grid.innerHTML = PET_DATABASE.map(pet => `
    <div class="value-card">
      <img src="${pet.image}" class="pet-photo" alt="${pet.name}">
      <div>
        <h3>${pet.name}</h3>
        <span>${pet.rarity.toUpperCase()}</span>
        <strong>Değer: ${pet.value}</strong>
      </div>
    </div>
  `).join("");
}
