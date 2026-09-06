/* =====================================================
   ZAYAXRA - ADOPT ME VALUES
   ===================================================== */


/* =========================
   ITEM DATABASE
   ========================= */

const items = [

    /* PETS */

    {
        id: "shadow-dragon",
        name: "Shadow Dragon",
        category: "pets",
        rarity: "Legendary",
        value: 100,
        emoji: "🐉",
        image: "https://cdn.playadopt.me/items/shadow_dragon.png"
    },

    {
        id: "frost-dragon",
        name: "Frost Dragon",
        category: "pets",
        rarity: "Legendary",
        value: 85,
        emoji: "🐲",
        image: "https://cdn.playadopt.me/items/frost_dragon.png"
    },

    {
        id: "bat-dragon",
        name: "Bat Dragon",
        category: "pets",
        rarity: "Legendary",
        value: 120,
        emoji: "🦇",
        image: "https://cdn.playadopt.me/items/bat_dragon.png"
    },

    {
        id: "giraffe",
        name: "Giraffe",
        category: "pets",
        rarity: "Legendary",
        value: 90,
        emoji: "🦒",
        image: "https://cdn.playadopt.me/items/giraffe.png"
    },

    {
        id: "parrot",
        name: "Parrot",
        category: "pets",
        rarity: "Legendary",
        value: 48,
        emoji: "🦜",
        image: "https://cdn.playadopt.me/items/parrot.png"
    },

    {
        id: "owl",
        name: "Owl",
        category: "pets",
        rarity: "Legendary",
        value: 55,
        emoji: "🦉",
        image: "https://cdn.playadopt.me/items/owl.png"
    },

    {
        id: "crow",
        name: "Crow",
        category: "pets",
        rarity: "Legendary",
        value: 45,
        emoji: "🐦",
        image: "https://cdn.playadopt.me/items/crow.png"
    },

    {
        id: "evil-unicorn",
        name: "Evil Unicorn",
        category: "pets",
        rarity: "Legendary",
        value: 42,
        emoji: "🦄",
        image: "https://cdn.playadopt.me/items/evil_unicorn.png"
    },

    {
        id: "arctic-reindeer",
        name: "Arctic Reindeer",
        category: "pets",
        rarity: "Legendary",
        value: 24,
        emoji: "🦌",
        image: "https://cdn.playadopt.me/items/arctic_reindeer.png"
    },

    {
        id: "turtle",
        name: "Turtle",
        category: "pets",
        rarity: "Legendary",
        value: 16,
        emoji: "🐢",
        image: "https://cdn.playadopt.me/items/turtle.png"
    },

    {
        id: "kangaroo",
        name: "Kangaroo",
        category: "pets",
        rarity: "Legendary",
        value: 13,
        emoji: "🦘",
        image: "https://cdn.playadopt.me/items/kangaroo.png"
    },

    {
        id: "mega-neon-cat",
        name: "Mega Neon Cat",
        category: "pets",
        rarity: "Rare",
        value: 4,
        emoji: "🐱",
        image: ""
    },

    {
        id: "neon-dog",
        name: "Neon Dog",
        category: "pets",
        rarity: "Common",
        value: 0.4,
        emoji: "🐶",
        image: ""
    },

    {
        id: "unicorn",
        name: "Unicorn",
        category: "pets",
        rarity: "Legendary",
        value: 3,
        emoji: "🦄",
        image: ""
    },

    {
        id: "dragon",
        name: "Dragon",
        category: "pets",
        rarity: "Legendary",
        value: 2,
        emoji: "🐲",
        image: ""
    },


    /* VEHICLES */

    {
        id: "batmobile",
        name: "Batmobile",
        category: "vehicles",
        rarity: "Legendary",
        value: 15,
        emoji: "🏎️",
        image: ""
    },

    {
        id: "cloud-car",
        name: "Cloud Car",
        category: "vehicles",
        rarity: "Legendary",
        value: 11,
        emoji: "☁️",
        image: ""
    },

    {
        id: "rocket-sled",
        name: "Rocket Sled",
        category: "vehicles",
        rarity: "Legendary",
        value: 8,
        emoji: "🚀",
        image: ""
    },

    {
        id: "neon-black-scooter",
        name: "Neon Black Scooter",
        category: "vehicles",
        rarity: "Rare",
        value: 7,
        emoji: "🛴",
        image: ""
    },

    {
        id: "pink-cat",
        name: "Pink Cat Car",
        category: "vehicles",
        rarity: "Rare",
        value: 4,
        emoji: "🚙",
        image: ""
    },

    {
        id: "banana-car",
        name: "Banana Car",
        category: "vehicles",
        rarity: "Ultra Rare",
        value: 1.5,
        emoji: "🍌",
        image: ""
    },


    /* TOYS */

    {
        id: "marsh-balloon",
        name: "Marsh Balloon",
        category: "toys",
        rarity: "Rare",
        value: 3,
        emoji: "🎈",
        image: ""
    },

    {
        id: "candy-cannon",
        name: "Candy Cannon",
        category: "toys",
        rarity: "Legendary",
        value: 30,
        emoji: "🍭",
        image: ""
    },

    {
        id: "christmas-push-toy",
        name: "Christmas Push Toy",
        category: "toys",
        rarity: "Rare",
        value: 1,
        emoji: "🎄",
        image: ""
    },

    {
        id: "anna-rattle",
        name: "Anna Rattle",
        category: "toys",
        rarity: "Rare",
        value: 2,
        emoji: "🪇",
        image: ""
    },

    {
        id: "ice-pick",
        name: "Ice Pick Grappling Hook",
        category: "toys",
        rarity: "Ultra Rare",
        value: 1.2,
        emoji: "🪝",
        image: ""
    },


    /* GIFTS */

    {
        id: "small-gift",
        name: "Small Gift",
        category: "gifts",
        rarity: "Common",
        value: 0.1,
        emoji: "🎁",
        image: ""
    },

    {
        id: "big-gift",
        name: "Big Gift",
        category: "gifts",
        rarity: "Rare",
        value: 0.4,
        emoji: "🎁",
        image: ""
    },

    {
        id: "massive-gift",
        name: "Massive Gift",
        category: "gifts",
        rarity: "Ultra Rare",
        value: 0.8,
        emoji: "🎁",
        image: ""
    }

];


/* =========================
   STATE
   ========================= */

let favorites =
    JSON.parse(localStorage.getItem("zayaxraFavorites")) || [];

let myTrade = [];
let theirTrade = [];
let currentTradeSide = "my";

let currentPage = "home";
let currentSearch = "";
let currentRarity = "all";


/* =========================
   ELEMENTS
   ========================= */

const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");
const globalSearch = document.getElementById("globalSearch");

const itemModal = document.getElementById("itemModal");
const modalList = document.getElementById("modalList");
const modalSearch = document.getElementById("modalSearch");


/* =========================
   NAVIGATION
   ========================= */

function openPage(page) {

    currentPage = page;

    pages.forEach(p => {
        p.classList.remove("active");
    });

    const target = document.getElementById("page-" + page);

    if (target) {
        target.classList.add("active");
    }

    navButtons.forEach(btn => {
        btn.classList.toggle(
            "active",
            btn.dataset.page === page
        );
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (page === "favorites") {
        renderFavorites();
    }
}

navButtons.forEach(btn => {

    btn.addEventListener("click", () => {
        openPage(btn.dataset.page);
    });

});


document.addEventListener("click", e => {

    const button = e.target.closest("[data-go]");

    if (button) {
        openPage(button.dataset.go);
    }

});


/* =========================
   ITEM CARD
   ========================= */

function createImage(item) {

    if (item.image) {

        return `
            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
                onerror="this.style.display='none';this.nextElementSibling.style.display='block';"
            >
            <span
                class="emoji-image"
                style="display:none"
            >
                ${item.emoji}
            </span>
        `;

    }

    return `
        <span class="emoji-image">
            ${item.emoji}
        </span>
    `;
}


function createCard(item) {

    const isFavorite = favorites.includes(item.id);

    return `
        <article class="item-card">

            <button
                class="favorite ${isFavorite ? "active" : ""}"
                data-favorite="${item.id}"
                title="Favorilere ekle"
            >
                ${isFavorite ? "♥" : "♡"}
            </button>

            <div class="item-image">
                ${createImage(item)}
            </div>

            <div class="item-name">
                ${item.name}
            </div>

            <div class="item-meta">
                <span class="rarity">
                    ${item.rarity}
                </span>

                <span class="value">
                    ${formatValue(item.value)}
                </span>
            </div>

        </article>
    `;
}


function formatValue(value) {

    return Number(value).toLocaleString("en-US", {
        maximumFractionDigits: 2
    });
}


/* =========================
   RENDER ITEMS
   ========================= */

function filteredItems(category) {

    return items.filter(item => {

        const categoryMatch =
            item.category === category;

        const searchMatch =
            item.name
                .toLowerCase()
                .includes(currentSearch.toLowerCase());

        const rarityMatch =
            currentRarity === "all" ||
            item.rarity === currentRarity;

        return categoryMatch &&
               searchMatch &&
               rarityMatch;
    });

}


function renderCategory(category) {

    const grid =
        document.getElementById(category + "Grid");

    if (!grid) return;

    const data = filteredItems(category);

    if (!data.length) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                padding:50px;
                text-align:center;
                color:#8993a5;
            ">
                Bu aramaya uygun eşya bulunamadı.
            </div>
        `;

        return;
    }

    grid.innerHTML =
        data.map(createCard).join("");
}


/* =========================
   POPULAR
   ========================= */

function renderPopular() {

    const grid =
        document.getElementById("popularGrid");

    const popular = [
        "shadow-dragon",
        "bat-dragon",
        "frost-dragon",
        "giraffe"
    ];

    grid.innerHTML = popular
        .map(id => items.find(item => item.id === id))
        .filter(Boolean)
        .map(createCard)
        .join("");
}


/* =========================
   FAVORITES
   ========================= */

function renderFavorites() {

    const grid =
        document.getElementById("favoritesGrid");

    const data =
        items.filter(item => favorites.includes(item.id));

    document.getElementById("favStat").textContent =
        data.length;

    if (!data.length) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                padding:70px 20px;
                text-align:center;
                color:#8993a5;
            ">
                <div style="font-size:45px;margin-bottom:10px;">
                    ♡
                </div>
                Henüz favori eşyan yok.
            </div>
        `;

        return;
    }

    grid.innerHTML =
        data.map(createCard).join("");
}


/* =========================
   FAVORITE BUTTON
   ========================= */

document.addEventListener("click", e => {

    const button =
        e.target.closest("[data-favorite]");

    if (!button) return;

    const id = button.dataset.favorite;

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(x => x !== id);

    } else {

        favorites.push(id);
    }

    localStorage.setItem(
        "zayaxraFavorites",
        JSON.stringify(favorites)
    );

    renderAll();
});


/* =========================
   SEARCH
   ========================= */

globalSearch.addEventListener("input", e => {

    currentSearch = e.target.value;

    if (
        currentPage === "pets" ||
        currentPage === "vehicles" ||
        currentPage === "toys" ||
        currentPage === "gifts"
    ) {
        renderCategory(currentPage);
    }

});


/* =========================
   RARITY FILTER
   ========================= */

document.addEventListener("click", e => {

    const filter =
        e.target.closest(".filter");

    if (!filter) return;

    currentRarity =
        filter.dataset.rarity;

    document
        .querySelectorAll(".filter")
        .forEach(btn =>
            btn.classList.remove("active")
        );

    filter.classList.add("active");

    renderCategory("pets");
});


/* =========================
   TRADE
   ========================= */

function calculateTrade() {

    const myValue =
        myTrade.reduce(
            (sum, item) => sum + item.value,
            0
        );

    const theirValue =
        theirTrade.reduce(
            (sum, item) => sum + item.value,
            0
        );

    document.getElementById("myValue")
        .textContent = formatValue(myValue);

    document.getElementById("theirValue")
        .textContent = formatValue(theirValue);

    const result =
        document.getElementById("tradeResult");

    result.className =
        "trade-result neutral";

    if (!myValue && !theirValue) {

        result.textContent = "Eşya ekle";
        return;
    }

    if (!myValue) {

        result.textContent = "Senin taraf boş";
        return;
    }

    if (!theirValue) {

        result.textContent = "Karşı taraf boş";
        return;
    }

    const difference =
        theirValue - myValue;

    const percentage =
        Math.abs(difference) /
        Math.max(myValue, theirValue) * 100;

    if (percentage <= 5) {

        result.className =
            "trade-result fair";

        result.textContent =
            "FAIR TRADE";

    } else if (theirValue > myValue) {

        result.className =
            "trade-result win";

        result.textContent =
            "WIN +" + formatValue(difference);

    } else {

        result.className =
            "trade-result loss";

        result.textContent =
            "LOSS " + formatValue(Math.abs(difference));
    }

}


function renderTrade() {

    renderTradeSide(
        "myTradeItems",
        myTrade,
        "my"
    );

    renderTradeSide(
        "theirTradeItems",
        theirTrade,
        "their"
    );

    calculateTrade();
}


function renderTradeSide(elementId, data, side) {

    const element =
        document.getElementById(elementId);

    if (!data.length) {

        element.innerHTML = `
            <div class="empty-trade">
                <div>
                    <div style="font-size:35px;margin-bottom:8px;">
                        ${side === "my" ? "📦" : "🎁"}
                    </div>
                    Henüz eşya eklenmedi.
                </div>
            </div>
        `;

        return;
    }

    element.innerHTML =
        data.map((item,index) => `

            <div class="trade-item">

                <div class="trade-item-img">
                    ${item.emoji}
                </div>

                <div class="trade-item-info">
                    <b>${item.name}</b>
                    <small>${item.rarity}</small>
                </div>

                <strong class="value">
                    ${formatValue(item.value)}
                </strong>

                <button
                    class="remove-trade"
                    data-remove="${side}"
                    data-index="${index}"
                >
                    ×
                </button>

            </div>

        `).join("");
}


/* =========================
   ADD TRADE ITEM
   ========================= */

document.addEventListener("click", e => {

    const button =
        e.target.closest(".add-item-btn");

    if (!button) return;

    currentTradeSide =
        button.dataset.side;

    modalSearch.value = "";

    renderModal();

    itemModal.classList.add("open");

});


/* =========================
   MODAL
   ========================= */

function renderModal() {

    const search =
        modalSearch.value.toLowerCase();

    const data =
        items.filter(item =>
            item.name
                .toLowerCase()
                .includes(search)
        );

    modalList.innerHTML =
        data.map(item => `

            <div
                class="modal-item"
                data-add-item="${item.id}"
            >

                <div class="modal-item-img">
                    ${item.emoji}
                </div>

                <div class="modal-item-info">
                    <b>${item.name}</b>
                    <small>${item.rarity}</small>
                </div>

                <span class="modal-value">
                    ${formatValue(item.value)}
                </span>

            </div>

        `).join("");
}


modalSearch.addEventListener(
    "input",
    renderModal
);


document.addEventListener("click", e => {

    const item =
        e.target.closest("[data-add-item]");

    if (!item) return;

    const id =
        item.dataset.addItem;

    const selected =
        items.find(x => x.id === id);

    if (!selected) return;

    if (currentTradeSide === "my") {

        myTrade.push(selected);

    } else {

        theirTrade.push(selected);
    }

    itemModal.classList.remove("open");

    renderTrade();
});


/* =========================
   REMOVE TRADE ITEM
   ========================= */

document.addEventListener("click", e => {

    const button =
        e.target.closest("[data-remove]");

    if (!button) return;

    const side =
        button.dataset.remove;

    const index =
        Number(button.dataset.index);

    if (side === "my") {

        myTrade.splice(index,1);

    } else {

        theirTrade.splice(index,1);
    }

    renderTrade();
});


/* =========================
   CLOSE MODAL
   ========================= */

document.getElementById("closeModal")
    .addEventListener("click", () => {

        itemModal.classList.remove("open");

    });


itemModal.addEventListener("click", e => {

    if (e.target === itemModal) {

        itemModal.classList.remove("open");

    }

});


/* =========================
   NOTIFICATION
   ========================= */

document.getElementById("notificationBtn")
    .addEventListener("click", () => {

        alert(
            "🔔 ZAYAXRA\n\n" +
            "Bildirim sistemi yakında aktif olacak."
        );

    });


/* =========================
   COUNTERS
   ========================= */

function updateStats() {

    document.getElementById("petCount")
        .textContent =
        items.filter(x => x.category === "pets").length;

    document.getElementById("vehicleCount")
        .textContent =
        items.filter(x => x.category === "vehicles").length;

    document.getElementById("toyCount")
        .textContent =
        items.filter(x => x.category === "toys").length;

    document.getElementById("giftCount")
        .textContent =
        items.filter(x => x.category === "gifts").length;

}


/* =========================
   RENDER ALL
   ========================= */

function renderAll() {

    renderPopular();

    renderCategory("pets");
    renderCategory("vehicles");
    renderCategory("toys");
    renderCategory("gifts");

    renderFavorites();

    renderTrade();

    updateStats();
}


/* =========================
   START
   ========================= */

renderAll();

console.log(
    "%c ZAYAXRA ",
    "background:#7c4dff;color:white;font-size:20px;font-weight:bold;padding:8px"
);

console.log(
    "ZAYAXRA Adopt Me Values sistemi aktif."
);
