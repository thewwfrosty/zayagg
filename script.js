const pets = [
  { name: "Bat Dragon", icon: "🦇", value: 1000, demand: "Very High", trend: "↑" },
  { name: "Shadow Dragon", icon: "🐉", value: 850, demand: "Very High", trend: "↑" },
  { name: "Frost Dragon", icon: "🐲", value: 700, demand: "Very High", trend: "↑" },
  { name: "Giraffe", icon: "🦒", value: 580, demand: "Very High", trend: "↑" },
  { name: "Owl", icon: "🦉", value: 400, demand: "Very High", trend: "→" },
  { name: "Parrot", icon: "🦜", value: 320, demand: "High", trend: "↑" },
  { name: "Crow", icon: "🐦‍⬛", value: 250, demand: "High", trend: "→" },
  { name: "Evil Unicorn", icon: "🦄", value: 220, demand: "High", trend: "↑" },
  { name: "Arctic Reindeer", icon: "🦌", value: 150, demand: "High", trend: "↑" },
  { name: "Turtle", icon: "🐢", value: 100, demand: "Good", trend: "↑" },
  { name: "Kangaroo", icon: "🦘", value: 85, demand: "Good", trend: "→" },
  { name: "Cow", icon: "🐮", value: 70, demand: "High", trend: "↑" },
  { name: "Unicorn", icon: "🦄", value: 25, demand: "Good", trend: "→" },
  { name: "Dragon", icon: "🐉", value: 10, demand: "Normal", trend: "→" }
];

const state = {
  you: [],
  them: []
};

let currentSide = null;


// =========================
// PET SEÇME
// =========================

function addItem(side) {
  currentSide = side;
  openPetSelector();
}


function openPetSelector() {

  const old = document.getElementById("petModal");

  if (old) old.remove();

  const modal = document.createElement("div");

  modal.id = "petModal";
  modal.className = "pet-modal";

  modal.innerHTML = `
    <div class="pet-modal-box">

      <div class="modal-header">

        <div>
          <small>PET SEÇ</small>
          <h2>Pet / Item Ekle</h2>
        </div>

        <button onclick="closePetSelector()">✕</button>

      </div>

      <input
        id="petSearch"
        class="pet-search"
        placeholder="🔎 Pet ara..."
        oninput="searchPets()"
        autofocus
      >

      <div id="petList" class="pet-list"></div>

    </div>
  `;

  document.body.appendChild(modal);

  renderPetSelector(pets);
}


function closePetSelector() {

  const modal = document.getElementById("petModal");

  if (modal) {
    modal.remove();
  }

}


// =========================
// PET LİSTESİ
// =========================

function renderPetSelector(list) {

  const container = document.getElementById("petList");

  if (!container) return;

  if (list.length === 0) {

    container.innerHTML = `
      <div class="no-results">
        😕 Pet bulunamadı
      </div>
    `;

    return;
  }


  container.innerHTML = list.map(pet => `

    <button
      class="pet-option"
      onclick="selectPet(${pets.indexOf(pet)})"
    >

      <div class="pet-option-icon">
        ${pet.icon}
      </div>

      <div class="pet-option-info">

        <strong>${pet.name}</strong>

        <span>
          Demand: ${pet.demand}
        </span>

      </div>

      <div class="pet-option-value">
        ${pet.value}
      </div>

    </button>

  `).join("");

}


function searchPets() {

  const input = document.getElementById("petSearch");

  if (!input) return;

  const query = input.value
    .toLowerCase()
    .trim();


  const results = pets.filter(pet =>
    pet.name.toLowerCase().includes(query)
  );


  renderPetSelector(results);
}


// =========================
// PET EKLE
// =========================

function selectPet(index) {

  const pet = pets[index];

  if (!pet || !currentSide) return;


  state[currentSide].push({
    ...pet
  });


  renderTrade(currentSide);

  updateResult();

  closePetSelector();
}


// =========================
// PET SİL
// =========================

function removeItem(side, index) {

  state[side].splice(index, 1);

  renderTrade(side);

  updateResult();
}


// =========================
// TRADE GÖRÜNÜMÜ
// =========================

function renderTrade(side) {

  const box = document.getElementById(side + "Items");

  const totalElement =
    document.getElementById(side + "Total");


  if (!box || !totalElement) return;


  if (state[side].length === 0) {

    box.innerHTML = `
      <div class="empty-trade">
        Henüz pet eklenmedi
      </div>
    `;

  } else {

    box.innerHTML = state[side].map((pet, index) => `

      <div class="item">

        <div class="item-left">

          <div class="item-icon">
            ${pet.icon}
          </div>

          <div>

            <strong>
              ${pet.name}
            </strong>

            <small>
              Value: ${pet.value}
            </small>

          </div>

        </div>


        <button
          class="remove-item"
          onclick="removeItem('${side}', ${index})"
        >
          ✕
        </button>

      </div>

    `).join("");

  }


  const total = state[side].reduce(
    (sum, pet) => sum + pet.value,
    0
  );


  totalElement.textContent =
    Math.round(total);
}


// =========================
// W / F / L HESAPLAMA
// =========================

function updateResult() {

  const youTotal = state.you.reduce(
    (sum, pet) => sum + pet.value,
    0
  );


  const themTotal = state.them.reduce(
    (sum, pet) => sum + pet.value,
    0
  );


  const card =
    document.getElementById("resultCard");


  if (!card) return;


  const title =
    card.querySelector("h3");

  const number =
    card.querySelector(".result-number");


  // Hiçbir şey yoksa
  if (youTotal === 0 && themTotal === 0) {

    card.className =
      "result-card neutral";

    title.textContent =
      "Pet ekleyerek başla";

    number.textContent =
      "—";

    return;
  }


  // Bir taraf boşsa
  if (youTotal === 0 || themTotal === 0) {

    card.className =
      "result-card neutral";

    title.textContent =
      "İki tarafa da pet ekle";

    number.textContent =
      "—";

    return;
  }


  /*
    ÖNEMLİ:

    Karşı tarafın verdiği değer
    seninkinden yüksekse WIN.

    Örnek:

    Sen = 700
    Karşı = 850

    850 - 700 = +150

    SONUÇ = WIN
  */

  const difference =
    themTotal - youTotal;


  /*
    Fair sınırı %10.

    Örnek:

    Sen 700
    Karşı 750

    Fark yaklaşık %7

    = FAIR
  */

  const percentage =
    Math.abs(difference / youTotal) * 100;


  let result;
  let className;


  if (percentage <= 10) {

    result = "FAIR";
    className = "fair";

  }

  else if (difference > 0) {

    result = "WIN";
    className = "win";

  }

  else {

    result = "LOSE";
    className = "lose";

  }


  card.className =
    "result-card " + className;


  title.textContent =
    result;


  number.textContent =
    (difference >= 0 ? "+" : "") +
    Math.round(difference);
}


// =========================
// DEĞER LİSTESİ
// =========================

function renderValues() {

  const input =
    document.getElementById("search");


  if (!input) return;


  const query =
    input.value.toLowerCase().trim();


  const results =
    pets.filter(pet =>
      pet.name.toLowerCase().includes(query)
    );


  const grid =
    document.getElementById("valueGrid");


  if (!grid) return;


  grid.innerHTML =
    results.map(pet => `

      <div class="value-card">

        <div class="pet-icon">
          ${pet.icon}
        </div>

        <h3>
          ${pet.name}
        </h3>

        <div class="value-meta">

          <span>
            Demand: ${pet.demand}
          </span>

          <span class="trend">
            ${pet.trend}
          </span>

        </div>

        <div style="margin-top:12px">

          <span class="value">
            ${pet.value}
          </span>

          / 1000 Value

        </div>

      </div>

    `).join("");
}


// =========================
// TEMİZLE
// =========================

const clearBtn =
  document.getElementById("clearBtn");


if (clearBtn) {

  clearBtn.onclick = function () {

    state.you = [];
    state.them = [];

    renderTrade("you");
    renderTrade("them");

    updateResult();

  };

}


// =========================
// BAŞLANGIÇ
// =========================

renderValues();

renderTrade("you");

renderTrade("them");

updateResult();
/* PET SEÇME PENCERESİ */

.pet-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.pet-modal-box {
  width: 520px;
  max-width: 100%;
  max-height: 80vh;
  overflow: hidden;
  background: #10141f;
  border: 1px solid #303747;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.7);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.modal-header small {
  color: #9b8fff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.modal-header h2 {
  margin: 5px 0 0;
}

.modal-header button {
  background: #191e2b;
  border: 0;
  color: #aaa;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
}

.modal-header button:hover {
  color: white;
}

.pet-search {
  width: 100%;
  box-sizing: border-box;
  padding: 14px;
  background: #171c29;
  border: 1px solid #303747;
  border-radius: 12px;
  color: white;
  outline: none;
  margin-bottom: 15px;
}

.pet-search:focus {
  border-color: #8b7cff;
}

.pet-list {
  max-height: 48vh;
  overflow-y: auto;
}

.pet-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 12px;
  margin-bottom: 8px;
  border: 1px solid transparent;
  border-radius: 12px;
  background: #171c29;
  color: white;
  text-align: left;
  cursor: pointer;
}

.pet-option:hover {
  border-color: #8b7cff;
  transform: translateY(-1px);
}

.pet-option-icon {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  background: #202637;
  border-radius: 10px;
  font-size: 23px;
}

.pet-option-info {
  flex: 1;
}

.pet-option-info strong {
  display: block;
}

.pet-option-info span {
  display: block;
  color: #858c9d;
  font-size: 12px;
  margin-top: 4px;
}

.pet-option-value {
  color: #9b8fff;
  font-weight: 900;
}

.empty-trade,
.no-results {
  color: #71798a;
  text-align: center;
  padding: 50px 10px;
}

.item-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  background: #202637;
  border-radius: 9px;
  font-size: 20px;
}

.item-left small {
  display: block;
  color: #777f91;
  font-size: 11px;
  margin-top: 3px;
}

.remove-item {
  background: none;
  border: 0;
  color: #777f91;
  cursor: pointer;
}

.remove-item:hover {
  color: #ff6b7a;
}
