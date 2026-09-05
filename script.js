/* =========================================================
   ZAYAGG — COMPLETE SCRIPT
   ========================================================= */

const PET_DATABASE = [
  {id:'shadow_dragon',name:'Shadow Dragon',rarity:'legendary',value:125,image:'https://cdn.playadopt.me/items/shadow_dragon.png'},
  {id:'bat_dragon',name:'Bat Dragon',rarity:'legendary',value:110,image:'https://cdn.playadopt.me/items/bat_dragon.png'},
  {id:'giraffe',name:'Giraffe',rarity:'legendary',value:70,image:'https://cdn.playadopt.me/items/giraffe.png'},
  {id:'frost_dragon',name:'Frost Dragon',rarity:'legendary',value:58,image:'https://cdn.playadopt.me/items/frost_dragon.png'},
  {id:'owl',name:'Owl',rarity:'legendary',value:42,image:'https://cdn.playadopt.me/items/owl.png'},
  {id:'parrot',name:'Parrot',rarity:'legendary',value:38,image:'https://cdn.playadopt.me/items/parrot.png'},
  {id:'evil_unicorn',name:'Evil Unicorn',rarity:'legendary',value:32,image:'https://cdn.playadopt.me/items/evil_unicorn.png'},
  {id:'crow',name:'Crow',rarity:'legendary',value:28,image:'https://cdn.playadopt.me/items/crow.png'},
  {id:'frost_fury',name:'Frost Fury',rarity:'legendary',value:16,image:'https://cdn.playadopt.me/items/frost_fury.png'},
  {id:'arctic_reindeer',name:'Arctic Reindeer',rarity:'legendary',value:15,image:'https://cdn.playadopt.me/items/arctic_reindeer.png'},
  {id:'diamond_butterfly',name:'Diamond Butterfly',rarity:'legendary',value:15,image:'https://cdn.playadopt.me/items/diamond_butterfly.png'},
  {id:'turtle',name:'Turtle',rarity:'ultra',value:12,image:'https://cdn.playadopt.me/items/turtle.png'},
  {id:'kangaroo',name:'Kangaroo',rarity:'legendary',value:11,image:'https://cdn.playadopt.me/items/kangaroo.png'},
  {id:'albino_monkey',name:'Albino Monkey',rarity:'legendary',value:10,image:'https://cdn.playadopt.me/items/albino_monkey.png'},
  {id:'lion',name:'Lion',rarity:'ultra',value:9,image:'https://cdn.playadopt.me/items/lion.png'},
  {id:'hedgehog',name:'Hedgehog',rarity:'ultra',value:9,image:'https://cdn.playadopt.me/items/hedgehog.png'},
  {id:'flamingo',name:'Flamingo',rarity:'ultra',value:8,image:'https://cdn.playadopt.me/items/flamingo.png'},
  {id:'dalmatian',name:'Dalmatian',rarity:'ultra',value:8,image:'https://cdn.playadopt.me/items/dalmatian.png'},
  {id:'crocodile',name:'Crocodile',rarity:'ultra',value:7,image:'https://cdn.playadopt.me/items/crocodile.png'},
  {id:'elephant',name:'Elephant',rarity:'ultra',value:7,image:'https://cdn.playadopt.me/items/elephant.png'},
  {id:'cow',name:'Cow',rarity:'ultra',value:7,image:'https://cdn.playadopt.me/items/cow.png'},
  {id:'brown_bear',name:'Brown Bear',rarity:'rare',value:6,image:'https://cdn.playadopt.me/items/brown_bear.png'},
  {id:'pink_cat',name:'Pink Cat',rarity:'rare',value:6,image:'https://cdn.playadopt.me/items/pink_cat.png'},
  {id:'blue_dog',name:'Blue Dog',rarity:'rare',value:6,image:'https://cdn.playadopt.me/items/blue_dog.png'},
  {id:'meerkat',name:'Meerkat',rarity:'rare',value:5,image:'https://cdn.playadopt.me/items/meerkat.png'},
  {id:'rhino',name:'Rhino',rarity:'rare',value:5,image:'https://cdn.playadopt.me/items/rhino.png'},
  {id:'hyena',name:'Hyena',rarity:'rare',value:5,image:'https://cdn.playadopt.me/items/hyena.png'},
  {id:'black_panther',name:'Black Panther',rarity:'uncommon',value:5,image:'https://cdn.playadopt.me/items/black_panther.png'},
  {id:'platypus',name:'Platypus',rarity:'ultra',value:4.5,image:'https://cdn.playadopt.me/items/platypus.png'},
  {id:'goat',name:'Goat',rarity:'ultra',value:4.5,image:'https://cdn.playadopt.me/items/goat.png'},
  {id:'swan',name:'Swan',rarity:'rare',value:4,image:'https://cdn.playadopt.me/items/swan.png'},
  {id:'ancient_dragon',name:'Ancient Dragon',rarity:'legendary',value:4,image:'https://cdn.playadopt.me/items/ancient_dragon.png'},
  {id:'unicorn',name:'Unicorn',rarity:'legendary',value:3.5,image:'https://cdn.playadopt.me/items/unicorn.png'},
  {id:'dragon',name:'Dragon',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/dragon.png'},
  {id:'golden_dragon',name:'Golden Dragon',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/golden_dragon.png'},
  {id:'golden_unicorn',name:'Golden Unicorn',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/golden_unicorn.png'},
  {id:'golden_penguin',name:'Golden Penguin',rarity:'legendary',value:2.8,image:'https://cdn.playadopt.me/items/golden_penguin.png'},
  {id:'king_bee',name:'King Bee',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/king_bee.png'},
  {id:'queen_bee',name:'Queen Bee',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/queen_bee.png'},
  {id:'kitsune',name:'Kitsune',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/kitsune.png'},
  {id:'octopus',name:'Octopus',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/octopus.png'},
  {id:'shark',name:'Shark',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/shark.png'},
  {id:'dodo',name:'Dodo',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/dodo.png'},
  {id:'trex',name:'T-Rex',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/t_rex.png'},
  {id:'skele_rex',name:'Skele-Rex',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/skele_rex.png'},
  {id:'lavender_dragon',name:'Lavender Dragon',rarity:'legendary',value:2.5,image:'https://cdn.playadopt.me/items/lavender_dragon.png'},
  {id:'lava_dragon',name:'Lava Dragon',rarity:'legendary',value:3,image:'https://cdn.playadopt.me/items/lava_dragon.png'},
  {id:'phoenix',name:'Phoenix',rarity:'legendary',value:2,image:'https://cdn.playadopt.me/items/phoenix.png'},
  {id:'golden_rat',name:'Golden Rat',rarity:'legendary',value:2,image:'https://cdn.playadopt.me/items/golden_rat.png'},
  {id:'metal_ox',name:'Metal Ox',rarity:'legendary',value:1.5,image:'https://cdn.playadopt.me/items/metal_ox.png'},
  {id:'king_penguin',name:'King Penguin',rarity:'legendary',value:1.8,image:'https://cdn.playadopt.me/items/king_penguin.png'},
  {id:'snow_owl',name:'Snow Owl',rarity:'legendary',value:2,image:'https://cdn.playadopt.me/items/snow_owl.png'},
  {id:'goldhorn',name:'Goldhorn',rarity:'legendary',value:1.8,image:'https://cdn.playadopt.me/items/goldhorn.png'},
  {id:'griffin',name:'Griffin',rarity:'legendary',value:1.2,image:'https://cdn.playadopt.me/items/griffin.png'},
  {id:'albino_bat',name:'Albino Bat',rarity:'ultra',value:3,image:'https://cdn.playadopt.me/items/albino_bat.png'},
  {id:'business_monkey',name:'Business Monkey',rarity:'ultra',value:2,image:'https://cdn.playadopt.me/items/business_monkey.png'},
  {id:'ghost_bunny',name:'Ghost Bunny',rarity:'ultra',value:2,image:'https://cdn.playadopt.me/items/ghost_bunny.png'},
  {id:'ginger_cat',name:'Ginger Cat',rarity:'ultra',value:1.2,image:'https://cdn.playadopt.me/items/ginger_cat.png'},
  {id:'panda',name:'Panda',rarity:'ultra',value:1.2,image:'https://cdn.playadopt.me/items/panda.png'},
  {id:'red_panda',name:'Red Panda',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/red_panda.png'},
  {id:'bee',name:'Bee',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/bee.png'},
  {id:'penguin',name:'Penguin',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/penguin.png'},
  {id:'toucan',name:'Toucan',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/toucan.png'},
  {id:'starfish',name:'Starfish',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/starfish.png'},
  {id:'koala',name:'Koala',rarity:'ultra',value:1.5,image:'https://cdn.playadopt.me/items/koala.png'},
  {id:'frog',name:'Frog',rarity:'ultra',value:1,image:'https://cdn.playadopt.me/items/frog.png'},
  {id:'sloth',name:'Sloth',rarity:'ultra',value:.8,image:'https://cdn.playadopt.me/items/sloth.png'},
  {id:'polar_bear',name:'Polar Bear',rarity:'rare',value:3.5,image:'https://cdn.playadopt.me/items/polar_bear.png'},
  {id:'reindeer',name:'Reindeer',rarity:'rare',value:3,image:'https://cdn.playadopt.me/items/reindeer.png'},
  {id:'rabbit',name:'Rabbit',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/rabbit.png'},
  {id:'monkey',name:'Monkey',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/monkey.png'},
  {id:'bunny',name:'Bunny',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/bunny.png'},
  {id:'emu',name:'Emu',rarity:'rare',value:.8,image:'https://cdn.playadopt.me/items/emu.png'},
  {id:'beaver',name:'Beaver',rarity:'rare',value:.6,image:'https://cdn.playadopt.me/items/beaver.png'},
  {id:'musk_ox',name:'Musk Ox',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/musk_ox.png'},
  {id:'woolly_mammoth',name:'Woolly Mammoth',rarity:'rare',value:.8,image:'https://cdn.playadopt.me/items/woolly_mammoth.png'},
  {id:'dilophosaurus',name:'Dilophosaurus',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/dilophosaurus.png'},
  {id:'stegosaurus',name:'Stegosaurus',rarity:'rare',value:.7,image:'https://cdn.playadopt.me/items/stegosaurus.png'},
  {id:'triceratops',name:'Triceratops',rarity:'rare',value:.6,image:'https://cdn.playadopt.me/items/triceratops.png'},
  {id:'shrew',name:'Shrew',rarity:'uncommon',value:3,image:'https://cdn.playadopt.me/items/shrew.png'},
  {id:'megalodon',name:'Megalodon',rarity:'uncommon',value:1,image:'https://cdn.playadopt.me/items/megalodon.png'},
  {id:'bat',name:'Bat',rarity:'uncommon',value:.5,image:'https://cdn.playadopt.me/items/bat.png'},
  {id:'snow_cat',name:'Snow Cat',rarity:'uncommon',value:.3,image:'https://cdn.playadopt.me/items/snow_cat.png'},
  {id:'fennec_fox',name:'Fennec Fox',rarity:'uncommon',value:.3,image:'https://cdn.playadopt.me/items/fennec_fox.png'},
  {id:'red_fox',name:'Red Fox',rarity:'uncommon',value:.4,image:'https://cdn.playadopt.me/items/red_fox.png'},
  {id:'shiba_inu',name:'Shiba Inu',rarity:'uncommon',value:.3,image:'https://cdn.playadopt.me/items/shiba_inu.png'},
  {id:'dingo',name:'Dingo',rarity:'uncommon',value:.3,image:'https://cdn.playadopt.me/items/dingo.png'},
  {id:'snow_puma',name:'Snow Puma',rarity:'uncommon',value:.3,image:'https://cdn.playadopt.me/items/snow_puma.png'},
  {id:'puma',name:'Puma',rarity:'uncommon',value:.2,image:'https://cdn.playadopt.me/items/puma.png'},
  {id:'cat',name:'Cat',rarity:'common',value:.1,image:'https://cdn.playadopt.me/items/cat.png'},
  {id:'dog',name:'Dog',rarity:'common',value:.1,image:'https://cdn.playadopt.me/items/dog.png'},
  {id:'mouse',name:'Mouse',rarity:'common',value:.1,image:'https://cdn.playadopt.me/items/mouse.png'},
  {id:'chick',name:'Chick',rarity:'common',value:.15,image:'https://cdn.playadopt.me/items/chick.png'},
  {id:'robin',name:'Robin',rarity:'common',value:.2,image:'https://cdn.playadopt.me/items/robin.png'},
  {id:'chicken',name:'Chicken',rarity:'common',value:.3,image:'https://cdn.playadopt.me/items/chicken.png'},
  {id:'bandicoot',name:'Bandicoot',rarity:'common',value:.2,image:'https://cdn.playadopt.me/items/bandicoot.png'},
  {id:'ground_sloth',name:'Ground Sloth',rarity:'common',value:.2,image:'https://cdn.playadopt.me/items/ground_sloth.png'},
  {id:'wolpertinger',name:'Wolpertinger',rarity:'common',value:.2,image:'https://cdn.playadopt.me/items/wolpertinger.png'},
  {id:'otter',name:'Otter',rarity:'common',value:.2,image:'https://cdn.playadopt.me/items/otter.png'},
  {id:'buffalo',name:'Buffalo',rarity:'common',value:.15,image:'https://cdn.playadopt.me/items/buffalo.png'},
  {id:'cracked_egg',name:'Cracked Egg',rarity:'common',value:.1,image:'https://cdn.playadopt.me/items/cracked_egg.png'}
];

const pets = PET_DATABASE;

let youTrade = [];
let themTrade = [];

let pickerSide = null;
let selectedPet = null;

let selectedForm = 'normal';

let selectedPotion = {
  fly: false,
  ride: false
};

let recordedTradeKey = '';

const $ = id => document.getElementById(id);


/* =========================================================
   HELPERS
   ========================================================= */

function formatValue(v) {
  const n = Number(v || 0);
  return Number.isInteger(n)
    ? String(n)
    : n.toFixed(1);
}

function rarityName(r) {
  return {
    legendary: 'Legendary',
    ultra: 'Ultra-Rare',
    rare: 'Rare',
    uncommon: 'Uncommon',
    common: 'Common'
  }[r] || r || '';
}

function escapeHTML(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function handleImageError(img) {
  if (!img || img.dataset.failed) return;

  img.dataset.failed = '1';

  img.src =
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">' +
      '<rect width="160" height="160" rx="20" fill="#15182a"/>' +
      '<text x="80" y="85" text-anchor="middle" fill="#8b93a7" font-size="13" font-family="Arial">NO IMAGE</text>' +
      '</svg>'
    );
}

function imageHTML(pet, cls = 'pet-photo') {
  return `
    <img
      src="${escapeHTML(pet.image || '')}"
      alt="${escapeHTML(pet.name)}"
      class="${cls}"
      loading="lazy"
      onerror="handleImageError(this)"
    >
  `;
}


/* =========================================================
   VALUES
   ========================================================= */

function renderValues() {
  const grid = $('valueGrid');

  if (!grid) return;

  const q =
    ($('search')?.value || '')
      .trim()
      .toLowerCase();

  const list = pets.filter(p =>
    p.name.toLowerCase().includes(q) ||
    String(p.rarity).toLowerCase().includes(q)
  );

  grid.innerHTML = '';

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-picker">
        <span>🔎</span>
        <strong>Pet bulunamadı</strong>
        <small>Başka bir isim dene.</small>
      </div>
    `;
    return;
  }

  list.forEach(p => {

    const card = document.createElement('div');

    card.className = 'value-card';

    card.innerHTML = `
      <div class="value-image">
        ${imageHTML(p)}
      </div>

      <div class="value-info">

        <h3>
          ${escapeHTML(p.name)}
        </h3>

        <span class="rarity-small ${p.rarity}">
          ${escapeHTML(rarityName(p.rarity))}
        </span>

        <strong>
          Value: ${formatValue(p.value)}
        </strong>

      </div>
    `;

    grid.appendChild(card);

  });
}


/* =========================================================
   PET PICKER
   ========================================================= */

function openPetPicker(side) {

  if (side !== 'you' && side !== 'them') return;

  pickerSide = side;

  selectedPet = null;
  selectedForm = 'normal';

  selectedPotion = {
    fly: false,
    ride: false
  };

  const title = $('petPickerTitle');
  const search = $('pickerSearch');
  const bar = $('pickerBar');
  const modal = $('petPickerModal');

  if (title) {
    title.textContent =
      side === 'you'
        ? 'Senin teklifine pet ekle'
        : 'Karşı tarafın teklifine pet ekle';
  }

  if (search) {
    search.value = '';
  }

  bar?.classList.add('hidden');

  resetPickerButtons();

  renderPickerPets(pets);

  modal?.classList.add('show');
  modal?.setAttribute('aria-hidden', 'false');

  document.body.classList.add('profile-open');

  setTimeout(() => {
    search?.focus();
  }, 50);
}


function closePetPicker() {

  const modal = $('petPickerModal');

  if (!modal) return;

  modal.classList.remove('show');

  modal.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.classList.remove(
    'profile-open'
  );

  pickerSide = null;
  selectedPet = null;
}


/* =========================================================
   PICKER LIST
   ========================================================= */

function renderPickerPets(list) {

  const box = $('pickerPetList');

  if (!box) return;

  box.innerHTML = '';

  if (!list.length) {

    box.innerHTML = `
      <div class="empty-picker">
        <span>🔎</span>
        <strong>Pet bulunamadı</strong>
        <small>Arama kelimesini değiştir.</small>
      </div>
    `;

    return;
  }

  list.forEach(p => {

    const button =
      document.createElement('button');

    button.type = 'button';

    button.className =
      'pet-choice' +
      (
        selectedPet?.id === p.id
          ? ' selected'
          : ''
      );

    button.innerHTML = `
      <div class="choice-image">
        ${imageHTML(p)}
      </div>

      <strong>
        ${escapeHTML(p.name)}
      </strong>

      <span class="rarity-tag ${p.rarity}">
        ${escapeHTML(rarityName(p.rarity))}
      </span>

      <small>
        ${formatValue(p.value)}
      </small>
    `;

    button.onclick = () =>
      selectPickerPet(p);

    box.appendChild(button);

  });
}


function filterPickerPets() {

  const q =
    ($('pickerSearch')?.value || '')
      .trim()
      .toLowerCase();

  renderPickerPets(
    pets.filter(p =>
      p.name.toLowerCase().includes(q) ||
      String(p.rarity).toLowerCase().includes(q)
    )
  );
}


function selectPickerPet(p) {

  selectedPet = p;

  selectedForm = 'normal';

  selectedPotion = {
    fly: false,
    ride: false
  };

  $('pickerBar')?.classList.remove(
    'hidden'
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

  const box = $('pickerPreview');

  if (!box || !selectedPet) return;

  box.innerHTML = `
    <div class="pet-image-wrap">

      ${
        selectedForm === 'neon'
          ? '<div class="neon-effect"></div>'
          : ''
      }

      ${
        selectedForm === 'mega'
          ? '<div class="mega-effect"></div>'
          : ''
      }

      ${imageHTML(selectedPet)}

      <div class="pet-badges">

        ${
          selectedForm === 'neon'
            ? '<span class="mini-chip neon">N</span>'
            : ''
        }

        ${
          selectedForm === 'mega'
            ? '<span class="mini-chip mega">M</span>'
            : ''
        }

        ${
          selectedPotion.fly
            ? '<span class="mini-chip fly">F</span>'
            : ''
        }

        ${
          selectedPotion.ride
            ? '<span class="mini-chip ride">R</span>'
            : ''
        }

      </div>

    </div>

    <div class="preview-info">

      <strong>
        ${escapeHTML(selectedPet.name)}
      </strong>

      <span>
        ${escapeHTML(rarityName(selectedPet.rarity))}
      </span>

      <div class="vchip-row">

        ${
          selectedForm === 'neon'
            ? '<span class="vchip neon">NEON</span>'
            : ''
        }

        ${
          selectedForm === 'mega'
            ? '<span class="vchip mega">MEGA</span>'
            : ''
        }

        ${
          selectedPotion.fly
            ? '<span class="vchip fly">FLY</span>'
            : ''
        }

        ${
          selectedPotion.ride
            ? '<span class="vchip ride">RIDE</span>'
            : ''
        }

      </div>

    </div>
  `;
}


/* =========================================================
   PICKER BUTTONS
   ========================================================= */

function resetPickerButtons() {

  [
    'btnNeon',
    'btnMega',
    'btnFly',
    'btnRide'
  ].forEach(id => {

    $(id)?.classList.remove(
      'active'
    );

  });
}


function updatePickerButtons() {

  $('btnNeon')?.classList.toggle(
    'active',
    selectedForm === 'neon'
  );

  $('btnMega')?.classList.toggle(
    'active',
    selectedForm === 'mega'
  );

  $('btnFly')?.classList.toggle(
    'active',
    selectedPotion.fly
  );

  $('btnRide')?.classList.toggle(
    'active',
    selectedPotion.ride
  );
}


function toggleForm(form) {

  if (!selectedPet) return;

  selectedForm =
    selectedForm === form
      ? 'normal'
      : form;

  renderPickerPreview();
  updatePickerButtons();
  updatePickerValue();
}


function togglePotion(type) {

  if (!selectedPet) return;

  selectedPotion[type] =
    !selectedPotion[type];

  renderPickerPreview();
  updatePickerButtons();
  updatePickerValue();
}


/* =========================================================
   VALUE MODIFIER
   ========================================================= */

function getModifiedValue(p) {

  let v =
    Number(p?.value || 0);

  if (selectedForm === 'neon') {
    v *= 4;
  }

  if (selectedForm === 'mega') {
    v *= 16;
  }

  if (selectedPotion.fly) {
    v += 0.25;
  }

  if (selectedPotion.ride) {
    v += 0.25;
  }

  return v;
}


function updatePickerValue() {

  const el =
    $('pickerValue');

  if (!el) return;

  el.textContent =
    selectedPet
      ? formatValue(
          getModifiedValue(selectedPet)
        )
      : '0';
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

  const item = {

    ...selectedPet,

    baseValue:
      Number(selectedPet.value),

    value:
      getModifiedValue(selectedPet),

    form:
      selectedForm,

    fly:
      selectedPotion.fly,

    ride:
      selectedPotion.ride,

    uniqueId:
      `${Date.now()}_${Math.random()
        .toString(36)
        .slice(2)}`
  };

  if (pickerSide === 'you') {
    youTrade.push(item);
  } else {
    themTrade.push(item);
  }

  closePetPicker();
  updateTradeUI();
}


/* =========================================================
   TRADE
   ========================================================= */

function calculateTotal(trade) {

  return trade.reduce(
    (sum, p) =>
      sum + Number(p.value || 0),
    0
  );
}


function tradeItemHTML(p, side) {

  return `

    <div class="trade-item">

      <div class="pet-image-wrap">

        ${
          p.form === 'neon'
            ? '<div class="neon-effect"></div>'
            : ''
        }

        ${
          p.form === 'mega'
            ? '<div class="mega-effect"></div>'
            : ''
        }

        ${imageHTML(p)}

        <div class="pet-badges">

          ${
            p.form === 'neon'
              ? '<span class="mini-chip neon">N</span>'
              : ''
          }

          ${
            p.form === 'mega'
              ? '<span class="mini-chip mega">M</span>'
              : ''
          }

          ${
            p.fly
              ? '<span class="mini-chip fly">F</span>'
              : ''
          }

          ${
            p.ride
              ? '<span class="mini-chip ride">R</span>'
              : ''
          }

        </div>

      </div>


      <div class="trade-item-info">

        <strong>
          ${escapeHTML(p.name)}
        </strong>

        <small>
          ${escapeHTML(
            rarityName(p.rarity)
          )}
        </small>

        <div class="item-chips">

          ${
            p.form === 'neon'
              ? '<span class="mini-chip neon">Neon</span>'
              : ''
          }

          ${
            p.form === 'mega'
              ? '<span class="mini-chip mega">Mega</span>'
              : ''
          }

          ${
            p.fly
              ? '<span class="mini-chip fly">Fly</span>'
              : ''
          }

          ${
            p.ride
              ? '<span class="mini-chip ride">Ride</span>'
              : ''
          }

        </div>

      </div>


      <strong>
        ${formatValue(p.value)}
      </strong>


      <button
        type="button"
        class="remove-item"
        onclick="removeTradePet('${side}','${p.uniqueId}')"
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
) {

  const el = $(id);

  if (!el) return;

  el.innerHTML =
    trade.length
      ? trade
          .map(p =>
            tradeItemHTML(
              p,
              side
            )
          )
          .join('')
      : `
        <div class="empty-items">
          Henüz pet eklenmedi
        </div>
      `;
}


function removeTradePet(
  side,
  id
) {

  if (side === 'you') {

    youTrade =
      youTrade.filter(
        p => p.uniqueId !== id
      );

  } else {

    themTrade =
      themTrade.filter(
        p => p.uniqueId !== id
      );

  }

  recordedTradeKey = '';

  updateTradeUI();
}


function clearTrade() {

  youTrade = [];
  themTrade = [];

  recordedTradeKey = '';

  updateTradeUI();
}


/* =========================================================
   RESULT
   ========================================================= */

function updateTradeUI() {

  const y =
    calculateTotal(youTrade);

  const t =
    calculateTotal(themTrade);

  renderTradeSide(
    'youItems',
    youTrade,
    'you'
  );

  renderTradeSide(
    'themItems',
    themTrade,
    'them'
  );

  if ($('youTotal')) {
    $('youTotal').textContent =
      formatValue(y);
  }

  if ($('themTotal')) {
    $('themTotal').textContent =
      formatValue(t);
  }

  updateResult(y, t);
}


function updateResult(y, t) {

  const card =
    $('resultCard');

  const status =
    $('resultStatusText');

  const diff =
    $('resultDiffNumber');

  card?.classList.remove(
    'win',
    'lose',
    'fair'
  );

  const d = y - t;

  if (y === 0 && t === 0) {

    if (status) {
      status.textContent =
        'Pet ekleyerek başla';
    }

    if (diff) {
      diff.textContent =
        '—';
    }

    return;
  }

  let s;

  if (Math.abs(d) <= 0.05) {
    s = 'fair';
  } else if (d > 0) {
    s = 'win';
  } else {
    s = 'lose';
  }

  card?.classList.add(s);

  if (status) {
    status.textContent =
      s === 'win'
        ? 'WIN'
        : s === 'lose'
        ? 'LOSE'
        : 'FAIR';
  }

  if (diff) {
    diff.textContent =
      d > 0
        ? `+${formatValue(d)}`
        : formatValue(d);
  }

  recordTradeResult(s);
}


/* =========================================================
   PROFILE
   ========================================================= */

const DEFAULT_PROFILE = {

  name:
    'Zayagg Kullanıcısı',

  username:
    '@kullanici',

  bio:
    'Henüz bir biyografi eklenmedi.',

  avatar:
    '🐉',

  stats: {
    trades: 0,
    wins: 0,
    fairs: 0,
    loses: 0
  }

};


let profileData =
  loadProfile();


function loadProfile() {

  try {

    const raw =
      localStorage.getItem(
        'zayagg_profile'
      );

    if (!raw) {
      return JSON.parse(
        JSON.stringify(
          DEFAULT_PROFILE
        )
      );
    }

    const p =
      JSON.parse(raw);

    return {

      ...JSON.parse(
        JSON.stringify(
          DEFAULT_PROFILE
        )
      ),

      ...p,

      stats: {
        ...DEFAULT_PROFILE.stats,
        ...(p.stats || {})
      }

    };

  } catch {

    return JSON.parse(
      JSON.stringify(
        DEFAULT_PROFILE
      )
    );

  }
}


function saveProfile() {

  localStorage.setItem(
    'zayagg_profile',
    JSON.stringify(
      profileData
    )
  );

}


function renderProfile() {

  if ($('profileName')) {
    $('profileName').textContent =
      profileData.name;
  }

  if ($('profileUsername')) {
    $('profileUsername').textContent =
      profileData.username;
  }

  if ($('profileBio')) {
    $('profileBio').textContent =
      profileData.bio;
  }

  if ($('profileAvatar')) {
    $('profileAvatar').textContent =
      profileData.avatar;
  }

  if ($('tradeCount')) {
    $('tradeCount').textContent =
      profileData.stats.trades;
  }

  if ($('winCount')) {
    $('winCount').textContent =
      profileData.stats.wins;
  }

  if ($('fairCount')) {
    $('fairCount').textContent =
      profileData.stats.fairs;
  }

  if ($('loseCount')) {
    $('loseCount').textContent =
      profileData.stats.loses;
  }

}


function openProfile() {

  renderProfile();

  const modal =
    $('profileModal');

  if (!modal) return;

  modal.classList.add(
    'show'
  );

  modal.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.classList.add(
    'profile-open'
  );

}


function closeProfile() {

  const modal =
    $('profileModal');

  if (!modal) return;

  modal.classList.remove(
    'show'
  );

  modal.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.classList.remove(
    'profile-open'
  );

  closeEditProfile();

}


function openEditProfile() {

  const form =
    $('profileEditForm');

  if (!form) return;

  $('editName').value =
    profileData.name;

  $('editUsername').value =
    profileData.username;

  $('editBio').value =
    profileData.bio;

  renderAvatars();

  form.classList.remove(
    'hidden'
  );

  $('profileEditBtn')?.classList.add(
    'hidden'
  );

}


function closeEditProfile() {

  $('profileEditForm')?.classList.add(
    'hidden'
  );

  $('profileEditBtn')?.classList.remove(
    'hidden'
  );

}


function renderAvatars() {

  const box =
    $('avatarPick');

  if (!box) return;

  box.innerHTML = '';

  [
    '🐉',
    '🐲',
    '🦊',
    '🐺',
    '🦁',
    '🐯',
    '🐻',
    '🐼',
    '🦄',
    '🐸',
    '🦋',
    '🌙'
  ].forEach(a => {

    const b =
      document.createElement(
        'button'
      );

    b.type = 'button';

    b.className =
      'avatar-opt' +
      (
        a === profileData.avatar
          ? ' active'
          : ''
      );

    b.textContent = a;

    b.onclick = () => {

      profileData.avatar = a;

      box
        .querySelectorAll(
          '.avatar-opt'
        )
        .forEach(x =>
          x.classList.remove(
            'active'
          )
        );

      b.classList.add(
        'active'
      );

    };

    box.appendChild(b);

  });

}


function saveEditedProfile(e) {

  e.preventDefault();

  const n =
    $('editName')
      .value
      .trim();

  const u =
    $('editUsername')
      .value
      .trim();

  const b =
    $('editBio')
      .value
      .trim();

  if (!n || !u) {
    return;
  }

  profileData.name =
    n;

  profileData.username =
    u.startsWith('@')
      ? u
      : '@' + u;

  profileData.bio =
    b ||
    DEFAULT_PROFILE.bio;

  saveProfile();

  renderProfile();

  closeEditProfile();

}


/* =========================================================
   RECORD TRADE
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
      .map(p => p.uniqueId)
      .join(',') +
    '|' +
    themTrade
      .map(p => p.uniqueId)
      .join(',') +
    '|' +
    status;

  if (
    key === recordedTradeKey
  ) {
    return;
  }

  recordedTradeKey = key;

  profileData.stats.trades++;

  if (status === 'win') {
    profileData.stats.wins++;
  }

  if (status === 'fair') {
    profileData.stats.fairs++;
  }

  if (status === 'lose') {
    profileData.stats.loses++;
  }

  saveProfile();
}


/* =========================================================
   MENU
   ========================================================= */

function toggleMenu() {

  document.body.classList.toggle(
    'menu-open'
  );

}

function closeMenu() {

  document.body.classList.remove(
    'menu-open'
  );

}


/* =========================================================
   EVENTS
   ========================================================= */

document.addEventListener(
  'click',
  e => {

    if (
      e.target ===
      $('profileModal')
    ) {
      closeProfile();
    }

    if (
      e.target ===
      $('petPickerModal')
    ) {
      closePetPicker();
    }

  }
);


document.addEventListener(
  'keydown',
  e => {

    if (e.key === 'Escape') {

      closeProfile();
      closePetPicker();
      closeMenu();

    }

  }
);


/* =========================================================
   INIT
   ========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  () => {

    renderValues();

    updateTradeUI();

    renderProfile();

    $('search')?.addEventListener(
      'input',
      renderValues
    );

    $('pickerSearch')?.addEventListener(
      'input',
      filterPickerPets
    );

  }
);
