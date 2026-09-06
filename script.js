/* =========================================================
   ZAYAXRA — KATEGORİSİZ W/F/L SÜRÜMÜ
   ========================================================= */

const DATA_URL =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main/adoptme_values.json";

const IMAGE_BASE =
  "https://raw.githubusercontent.com/ironbabatekkral/adoptme-values/main";


let pets = [];

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


/* =========================================================
   HELPERS
   ========================================================= */

function $(id){
  return document.getElementById(id);
}


function formatValue(value){

  const n = Number(value || 0);

  if(!Number.isFinite(n)){
    return "0";
  }

  return Number.isInteger(n)
    ? String(n)
    : n.toFixed(2).replace(/\.?0+$/,"");

}


function escapeHTML(value){

  return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}


function rarityName(rarity){

  return {
    legendary:"Legendary",
    ultra:"Ultra-Rare",
    rare:"Rare",
    uncommon:"Uncommon",
    common:"Common"
  }[rarity] || rarity || "Pet";

}


function normalizeImage(url){

  if(!url){
    return "";
  }

  if(url.startsWith("http")){
    return url;
  }

  return IMAGE_BASE + url;

}


function imageHTML(pet,className = "pet-photo"){

  return `
    <img
      src="${escapeHTML(normalizeImage(pet.image))}"
      alt="${escapeHTML(pet.name)}"
      class="${className}"
      loading="lazy"
      onerror="this.style.opacity='.25'"
    >
  `;

}


/* =========================================================
   DATA
   ========================================================= */

async function loadPets(){

  const grid = $("valueGrid");

  if(grid){

    grid.innerHTML = `
      <div class="empty-picker">
        <span>⏳</span>
        <strong>Petler yükleniyor...</strong>
        <small>Veritabanı hazırlanıyor.</small>
      </div>
    `;

  }

  try{

    const response = await fetch(
      DATA_URL + "?v=" + Date.now()
    );

    if(!response.ok){
      throw new Error("Veri yüklenemedi");
    }

    const data = await response.json();

    if(!Array.isArray(data)){
      throw new Error("Geçersiz veri");
    }

    pets = data.map(item => {

      const regular =
        item.regular || {};

      const baseValue =
        Number(
          regular.value ??
          item.value ??
          0
        );

      return {

        id:
          item.id ||
          crypto.randomUUID(),

        name:
          item.name ||
          "Unknown Pet",

        rarity:
          item.rarity ||
          "unknown",

        value:
          baseValue,

        image:
          normalizeImage(item.image),

        raw:
          item

      };

    });

    renderValues();
    renderPickerPets();

  }catch(error){

    console.error(error);

    pets = [];

    if(grid){

      grid.innerHTML = `
        <div class="empty-picker">

          <span>⚠️</span>

          <strong>
            Pet verileri yüklenemedi
          </strong>

          <small>
            İnternet bağlantısını veya konsolu kontrol et.
          </small>

        </div>
      `;

    }

  }

}


/* =========================================================
   VALUE LIST
   ========================================================= */

function renderValues(){

  const grid = $("valueGrid");

  if(!grid){
    return;
  }

  const search =
    ($("search")?.value || "")
      .trim()
      .toLowerCase();

  const list =
    pets.filter(pet => {

      return (
        pet.name
          .toLowerCase()
          .includes(search)
        ||
        String(pet.rarity)
          .toLowerCase()
          .includes(search)
      );

    });

  grid.innerHTML = "";

  if(!list.length){

    grid.innerHTML = `
      <div class="empty-picker">

        <span>🔎</span>

        <strong>
          Pet bulunamadı
        </strong>

        <small>
          Başka bir isim dene.
        </small>

      </div>
    `;

    return;

  }

  list.slice(0,60).forEach(pet => {

    const card =
      document.createElement("div");

    card.className =
      "value-card";

    card.innerHTML = `

      <div class="value-image">
        ${imageHTML(pet)}
      </div>

      <div class="value-info">

        <h3>
          ${escapeHTML(pet.name)}
        </h3>

        <span
          class="rarity-small ${escapeHTML(pet.rarity)}"
        >
          ${escapeHTML(
            rarityName(pet.rarity)
          )}
        </span>

        <strong>
          Value: ${formatValue(pet.value)}
        </strong>

      </div>

    `;

    grid.appendChild(card);

  });

}


/* =========================================================
   PET PICKER
   ========================================================= */

function openPetPicker(side){

  pickerSide = side;

  selectedPet = null;

  const title =
    $("petPickerTitle");

  if(title){

    title.textContent =
      side === "you"
        ? "Senin teklifine pet ekle"
        : "Karşı tarafın teklifine pet ekle";

  }

  const search =
    $("pickerSearch");

  if(search){
    search.value = "";
  }

  $("pickerBar")
    ?.classList.add("hidden");

  renderPickerPets();

  const modal =
    $("petPickerModal");

  if(modal){

    modal.classList.add("show");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

  }

  document.body.classList.add(
    "profile-open"
  );

  setTimeout(() => {
    search?.focus();
  },100);

}


function closePetPicker(){

  const modal =
    $("petPickerModal");

  if(!modal){
    return;
  }

  modal.classList.remove("show");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "profile-open"
  );

  pickerSide = null;

  selectedPet = null;

}


function renderPickerPets(){

  const box =
    $("pickerPetList");

  if(!box){
    return;
  }

  const query =
    ($("pickerSearch")?.value || "")
      .trim()
      .toLowerCase();

  const list =
    pets.filter(pet => {

      return (
        !query
        ||
        pet.name
          .toLowerCase()
          .includes(query)
        ||
        String(pet.rarity)
          .toLowerCase()
          .includes(query)
      );

    });

  box.innerHTML = "";

  if(!list.length){

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

  list.forEach(pet => {

    const button =
      document.createElement("button");

    button.type =
      "button";

    button.className =
      "pet-choice";

    if(
      selectedPet &&
      selectedPet.id === pet.id
    ){

      button.classList.add(
        "selected"
      );

    }

    button.innerHTML = `

      <div class="choice-image">

        ${imageHTML(pet)}

      </div>

      <strong>
        ${escapeHTML(pet.name)}
      </strong>

      <span
        class="rarity-tag ${escapeHTML(pet.rarity)}"
      >
        ${escapeHTML(
          rarityName(pet.rarity)
        )}
      </span>

      <small>
        ${formatValue(pet.value)}
      </small>

    `;

    button.addEventListener(
      "click",
      () => {

        selectPickerPet(pet);

        box
          .querySelectorAll(
            ".pet-choice"
          )
          .forEach(item =>
            item.classList.remove(
              "selected"
            )
          );

        button.classList.add(
          "selected"
        );

      }
    );

    box.appendChild(button);

  });

}


function selectPickerPet(pet){

  if(!pet){
    return;
  }

  selectedPet = pet;

  $("pickerBar")
    ?.classList.remove("hidden");

  renderPickerPreview();

  updatePickerButtons();

  updatePickerValue();

}


function renderPickerPreview(){

  const box =
    $("pickerPreview");

  if(!box){
    return;
  }

  if(!selectedPet){

    box.innerHTML = "";

    return;

  }

  box.innerHTML = `

    <div class="pet-image-wrap">

      ${
        selectedForm === "neon"
          ? `<div class="neon-effect"></div>`
          : ""
      }

      ${
        selectedForm === "mega"
          ? `<div class="mega-effect"></div>`
          : ""
      }

      ${imageHTML(selectedPet)}

      <div class="pet-badges">

        ${
          selectedForm === "neon"
            ? `<span class="mini-chip neon">N</span>`
            : ""
        }

        ${
          selectedForm === "mega"
            ? `<span class="mini-chip mega">M</span>`
            : ""
        }

        ${
          selectedPotion.fly
            ? `<span class="mini-chip fly">F</span>`
            : ""
        }

        ${
          selectedPotion.ride
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
        ${escapeHTML(
          rarityName(selectedPet.rarity)
        )}
      </span>

    </div>

  `;

}


/* =========================================================
   D / N / M
   ========================================================= */

function toggleForm(form){

  if(
    ![
      "normal",
      "neon",
      "mega"
    ].includes(form)
  ){

    return;

  }

  selectedForm = form;

  updatePickerButtons();

  renderPickerPreview();

  updatePickerValue();

}


function togglePotion(type){

  if(
    ![
      "fly",
      "ride"
    ].includes(type)
  ){

    return;

  }

  selectedPotion[type] =
    !selectedPotion[type];

  updatePickerButtons();

  renderPickerPreview();

  updatePickerValue();

}


function updatePickerButtons(){

  $("btnNormal")
    ?.classList.toggle(
      "active",
      selectedForm === "normal"
    );

  $("btnNeon")
    ?.classList.toggle(
      "active",
      selectedForm === "neon"
    );

  $("btnMega")
    ?.classList.toggle(
      "active",
      selectedForm === "mega"
    );

  $("btnFly")
    ?.classList.toggle(
      "active",
      selectedPotion.fly
    );

  $("btnRide")
    ?.classList.toggle(
      "active",
      selectedPotion.ride
    );

}


/* =========================================================
   VALUE CALCULATION
   ========================================================= */

function getModifiedValue(){

  if(!selectedPet){
    return 0;
  }

  let value =
    Number(
      selectedPet.value || 0
    );

  if(
    selectedForm === "neon"
  ){

    value *= 4;

  }

  if(
    selectedForm === "mega"
  ){

    value *= 16;

  }

  if(selectedPotion.fly){

    value += 0.25;

  }

  if(selectedPotion.ride){

    value += 0.25;

  }

  return value;

}


function updatePickerValue(){

  const value =
    selectedPet
      ? getModifiedValue()
      : 0;

  if($("pickerValue")){

    $("pickerValue").textContent =
      formatValue(value);

  }

}


/* =========================================================
   ADD PET
   ========================================================= */

function confirmAddPet(){

  if(
    !selectedPet ||
    !pickerSide
  ){

    return;

  }

  const item = {

    ...selectedPet,

    baseValue:
      Number(selectedPet.value || 0),

    value:
      getModifiedValue(),

    form:
      selectedForm,

    fly:
      !!selectedPotion.fly,

    ride:
      !!selectedPotion.ride,

    uniqueId:
      Date.now() +
      "_" +
      Math.random()
        .toString(36)
        .slice(2)

  };


  if(
    pickerSide === "you"
  ){

    youTrade.push(item);

  }else{

    themTrade.push(item);

  }


  closePetPicker();

  updateTradeUI();

}


/* =========================================================
   TRADE
   ========================================================= */

function calculateTotal(trade){

  return trade.reduce(
    (total,item) =>
      total +
      Number(item.value || 0),
    0
  );

}


function tradeItemHTML(
  item,
  side
){

  return `

    <div class="trade-item">

      <div class="pet-image-wrap">

        ${
          item.form === "neon"
            ? `<div class="neon-effect"></div>`
            : ""
        }

        ${
          item.form === "mega"
            ? `<div class="mega-effect"></div>`
            : ""
        }

        ${imageHTML(item)}

        <div class="pet-badges">

          ${
            item.form === "neon"
              ? `<span class="mini-chip neon">N</span>`
              : ""
          }

          ${
            item.form === "mega"
              ? `<span class="mini-chip mega">M</span>`
              : ""
          }

          ${
            item.fly
              ? `<span class="mini-chip fly">F</span>`
              : ""
          }

          ${
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
          ${escapeHTML(
            rarityName(item.rarity)
          )}
        </small>

        <div class="item-chips">

          ${
            item.form === "neon"
              ? `<span class="mini-chip neon">Neon</span>`
              : ""
          }

          ${
            item.form === "mega"
              ? `<span class="mini-chip mega">Mega</span>`
              : ""
          }

          ${
            item.fly
              ? `<span class="mini-chip fly">Fly</span>`
              : ""
          }

          ${
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
          '${side}',
          '${item.uniqueId}'
        )"
      >
        ×
      </button>

    </div>

  `;

}


function renderTradeSide(
  id,
  trade,
  side
){

  const element =
    $(id);

  if(!element){
    return;
  }

  if(!trade.length){

    element.innerHTML = `

      <div class="empty-items">

        <span class="empty-plus">
          ＋
        </span>

        <strong>
          Henüz pet eklenmedi
        </strong>

        <small>
          Pet eklemek için aşağıdaki butonu kullan
        </small>

      </div>

    `;

    return;

  }

  element.innerHTML =
    trade
      .map(item =>
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
){

  if(side === "you"){

    youTrade =
      youTrade.filter(
        item =>
          item.uniqueId !== uniqueId
      );

  }else{

    themTrade =
      themTrade.filter(
        item =>
          item.uniqueId !== uniqueId
      );

  }

  recordedTradeKey = "";

  updateTradeUI();

}


function clearTrade(){

  youTrade = [];

  themTrade = [];

  recordedTradeKey = "";

  updateTradeUI();

}


function updateTradeUI(){

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

  if($("youTotal")){

    $("youTotal")
      .textContent =
      formatValue(you);

  }

  if($("themTotal")){

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
){

  const card =
    $("resultCard");

  const status =
    $("resultStatusText");

  const hint =
    $("resultHint");

  const diff =
    $("resultDiffNumber");

  const diffDisplay =
    $("resultDiffDisplay");

  const statusLabel =
    $("tradeStatusLabel");


  card?.classList.remove(
    "fair",
    "small-win",
    "big-win",
    "small-lose",
    "big-lose"
  );


  if(
    you === 0 &&
    them === 0
  ){

    status.textContent =
      "Pet ekleyerek başla";

    hint.textContent =
      "İki tarafa da pet eklediğinde avantajı burada göreceksin.";

    diff.textContent =
      "—";

    diffDisplay.textContent =
      "—";

    statusLabel.textContent =
      "TRADE HAZIR";

    return;

  }


  if(
    you === 0 ||
    them === 0
  ){

    status.textContent =
      "İki tarafa da pet ekle";

    hint.textContent =
      "Sonucu görmek için iki tarafa da pet ekle.";

    diff.textContent =
      "—";

    diffDisplay.textContent =
      "—";

    statusLabel.textContent =
      "TRADE BEKLENİYOR";

    return;

  }


  const difference =
    them - you;

  const percent =
    (difference / you) * 100;


  let result =
    "fair";

  let label =
    "FAIR";

  let message =
    "Değerler birbirine çok yakın.";


  if(percent >= 10){

    result =
      "big-win";

    label =
      "BIG WIN";

    message =
      "Bu trade senin için oldukça avantajlı.";

  }
  else if(percent > 3){

    result =
      "small-win";

    label =
      "SMALL WIN";

    message =
      "Trade senin lehine.";

  }
  else if(percent <= -10){

    result =
      "big-lose";

    label =
      "BIG LOSE";

    message =
      "Bu trade senin için ciddi şekilde dezavantajlı.";

  }
  else if(percent < -3){

    result =
      "small-lose";

    label =
      "SMALL LOSE";

    message =
      "Trade karşı tarafın lehine.";

  }


  card?.classList.add(
    result
  );


  status.textContent =
    label;

  statusLabel.textContent =
    label;

  hint.textContent =
    message;


  const shown =
    difference > 0
      ? "+" + formatValue(difference)
      : formatValue(difference);


  diff.textContent =
    shown;

  diffDisplay.textContent =
    shown;


  recordTradeResult(
    result
  );

}


/* =========================================================
   PROFILE
   ========================================================= */

const DEFAULT_PROFILE = {

  name:
    "Zayagg Kullanıcısı",

  username:
    "@kullanici",

  bio:
    "Henüz bir biyografi eklenmedi.",

  avatar:
    "🐉",

  stats:{
    trades:0,
    wins:0,
    fairs:0,
    loses:0
  }

};


function loadProfile(){

  try{

    const raw =
      localStorage.getItem(
        "zayagg_profile"
      );

    if(!raw){

      return {
        ...DEFAULT_PROFILE,
        stats:{
          ...DEFAULT_PROFILE.stats
        }
      };

    }

    const saved =
      JSON.parse(raw);

    return {

      ...DEFAULT_PROFILE,

      ...saved,

      stats:{
        ...DEFAULT_PROFILE.stats,
        ...(saved.stats || {})
      }

    };

  }catch{

    return {
      ...DEFAULT_PROFILE,
      stats:{
        ...DEFAULT_PROFILE.stats
      }
    };

  }

}


let profileData =
  loadProfile();


function saveProfile(){

  localStorage.setItem(
    "zayagg_profile",
    JSON.stringify(profileData)
  );

}


function openProfile(){

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


function closeProfile(){

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


function renderProfile(){

  if($("profileName")){

    $("profileName")
      .textContent =
      profileData.name;

  }

  if($("profileUsername")){

    $("profileUsername")
      .textContent =
      profileData.username;

  }

  if($("profileBio")){

    $("profileBio")
      .textContent =
      profileData.bio;

  }

  if($("profileAvatar")){

    $("profileAvatar")
      .textContent =
      profileData.avatar;

  }

  if($("profileTrades")){

    $("profileTrades")
      .textContent =
      profileData.stats.trades;

  }

  if($("profileWins")){

    $("profileWins")
      .textContent =
      profileData.stats.wins;

  }

  if($("profileFair")){

    $("profileFair")
      .textContent =
      profileData.stats.fairs;

  }

  if($("profileLoses")){

    $("profileLoses")
      .textContent =
      profileData.stats.loses;

  }

}


function openEditProfile(){

  const form =
    $("profileEditForm");

  if(!form){
    return;
  }

  $("editName").value =
    profileData.name;

  $("editUsername").value =
    profileData.username;

  $("editBio").value =
    profileData.bio;

  renderAvatars();

  form.classList.remove(
    "hidden"
  );

  $("profileEditBtn")
    ?.classList.add(
      "hidden"
    );

}


function closeEditProfile(){

  $("profileEditForm")
    ?.classList.add(
      "hidden"
    );

  $("profileEditBtn")
    ?.classList.remove(
      "hidden"
    );

}


function renderAvatars(){

  const box =
    $("avatarPick");

  if(!box){
    return;
  }

  box.innerHTML = "";

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
          avatar === profileData.avatar
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
            .forEach(item =>
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


function saveEditedProfile(event){

  event.preventDefault();

  const name =
    $("editName")
      .value
      .trim();

  const username =
    $("editUsername")
      .value
      .trim();

  const bio =
    $("editBio")
      .value
      .trim();


  if(!name || !username){
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


  saveProfile();

  renderProfile();

  closeEditProfile();

}


/* =========================================================
   TRADE HISTORY
   ========================================================= */

function recordTradeResult(status){

  if(
    !youTrade.length ||
    !themTrade.length
  ){

    return;

  }


  const key =
    youTrade
      .map(item => item.uniqueId)
      .join(",") +
    "|" +
    themTrade
      .map(item => item.uniqueId)
      .join(",") +
    "|" +
    status;


  if(
    key === recordedTradeKey
  ){

    return;

  }


  recordedTradeKey =
    key;


  profileData.stats.trades++;


  if(
    status === "big-win" ||
    status === "small-win"
  ){

    profileData.stats.wins++;

  }


  if(
    status === "fair"
  ){

    profileData.stats.fairs++;

  }


  if(
    status === "big-lose" ||
    status === "small-lose"
  ){

    profileData.stats.loses++;

  }


  saveProfile();

  renderProfile();

}


/* =========================================================
   MENU
   ========================================================= */

function toggleMenu(){

  document.body.classList.toggle(
    "menu-open"
  );

}


function closeMenu(){

  document.body.classList.remove(
    "menu-open"
  );

}


/* =========================================================
   EVENTS
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    if(
      event.target ===
      $("profileModal")
    ){

      closeProfile();

    }

    if(
      event.target ===
      $("petPickerModal")
    ){

      closePetPicker();

    }

  }
);


document.addEventListener(
  "keydown",
  event => {

    if(event.key === "Escape"){

      closeProfile();

      closePetPicker();

      closeMenu();

    }

  }
);


document.addEventListener(
  "DOMContentLoaded",
  async () => {

    $("search")
      ?.addEventListener(
        "input",
        renderValues
      );


    $("pickerSearch")
      ?.addEventListener(
        "input",
        renderPickerPets
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
