"use strict";

// Tableau de données — à générer avec Copilot / une IA
let data = [
  {
    id: 35,
    name: "The Witcher 3",
    category: "RPG",
    platform: "PC",
    rating: 9.5,
    year: 2015,
    image: "https://placehold.co/400x300/4a90d9/white?text=The+Witcher+3"
  },
  {
    id: 36,
    name: "Call of Duty Black Ops",
    category: "FPS",
    platform: "Xbox 360",
    rating: 8.7,
    year: 2010,
    image: "https://placehold.co/400x300/e74c3c/white?text=Call+of+Duty+Black+Ops"
  },
  {
    id: 37,
    name: "The Legend of Zelda Breath of the Wild",
    category: "Aventure",
    platform: "Nintendo Switch",
    rating: 9.2,
    year: 2017,
    image: "https://placehold.co/400x300/27ae60/white?text=Zelda+Breath+of+the+Wild"
  },
  {
    id: 38,
    name: "Starcraft II",
    category: "Stratégie",
    platform: "PC",
    rating: 8.5,
    year: 2010,
    image: "https://placehold.co/400x300/f39c12/white?text=Starcraft+II"
  },
  {
    id: 39,
    name: "Elden Ring",
    category: "RPG",
    platform: "PS5",
    rating: 9.0,
    year: 2022,
    image: "https://placehold.co/400x300/4a90d9/white?text=Elden+Ring"
  },
  {
    id: 40,
    name: "Counter Strike 2",
    category: "FPS",
    platform: "PC",
    rating: 8.9,
    year: 2023,
    image: "https://placehold.co/400x300/e74c3c/white?text=Counter+Strike+2"
  },
  {
    id: 41,
    name: "Uncharted 4",
    category: "Aventure",
    platform: "PS4",
    rating: 8.8,
    year: 2016,
    image: "https://placehold.co/400x300/27ae60/white?text=Uncharted+4"
  },
  {
    id: 42,
    name: "Civilization VI",
    category: "Stratégie",
    platform: "PC",
    rating: 8.4,
    year: 2016,
    image: "https://placehold.co/400x300/f39c12/white?text=Civilization+VI"
  },
  {
    id: 43,
    name: "Dark Souls III",
    category: "RPG",
    platform: "PS4",
    rating: 8.6,
    year: 2016,
    image: "https://placehold.co/400x300/4a90d9/white?text=Dark+Souls+III"
  },
  {
    id: 44,
    name: "Valorant",
    category: "FPS",
    platform: "PC",
    rating: 8.3,
    year: 2020,
    image: "https://placehold.co/400x300/e74c3c/white?text=Valorant"
  }
];

// Éléments du DOM
const btnSort = document.getElementById("btn-sort");
const searchInput = document.getElementById("search");

// Sens du tri : false = DESC (notes élevées en premier)
let sortAsc = false;

/**
 * Rafraîchit l'affichage en combinant filtre + tri
 */
function refresh() {
  const query = searchInput.value.toLowerCase();

  // 1. Filtrer selon le champ de recherche
  let result = data.filter(jeu =>
    jeu.name.toLowerCase().includes(query)
  );

  // 2. Trier selon l'état du bouton
  result = [...result].sort((a, b) =>
    sortAsc ? a.rating - b.rating : b.rating - a.rating
  );

  // 3. Afficher
  afficherJeux(result);
}

// Tri : inverser l'état, mettre à jour le bouton, rafraîchir
btnSort.addEventListener("click", function () {
  sortAsc = !sortAsc;
  btnSort.textContent = sortAsc ? "Trier par note ↑ (ASC)" : "Trier par note ↓ (DESC)";
  refresh();
});

// Recherche : à chaque frappe, rafraîchir
searchInput.addEventListener("input", refresh);

/**
 * Affiche les jeux dans la page
 * @param {Array} tabJeux - Tableau d'objets jeu à afficher
 */
function afficherJeux(tabJeux) {
  const ulList = document.getElementById("list");
  let html = "";

  tabJeux.forEach(jeu => {
    html += `
    <article class="card" data-id="${jeu.id}">
      <img src="${jeu.image}" alt="${jeu.name}">
      <div class="card-body">
        <h2>${jeu.name}</h2>
        <p>${jeu.category} — ${jeu.year}</p>
        <span class="rating">${jeu.rating}</span>
      </div>
    </article>
  `;
  });

  ulList.innerHTML = html;
}

// Affichage initial
refresh();