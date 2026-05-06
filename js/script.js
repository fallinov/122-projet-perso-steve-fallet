"use strict";
// "use strict" : active le mode strict de JavaScript
// — interdit les variables non déclarées, signale plus d'erreurs → bon réflexe à prendre

// ─── Données ────────────────────────────────────────────────────────────────
// Tableau d'objets représentant la collection de jeux-vidéos
// Chaque objet a les mêmes propriétés : id, name, category, platform, rating, year, image
const data = [
  {
    id: 35,          // Identifiant unique du jeu (nombre entier)
    name: "The Witcher 3",
    category: "RPG",
    platform: "PC",
    rating: 9.5,     // Note sur 10 (nombre décimal autorisé)
    year: 2015,      // Année de sortie
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

// ─── Affichage ───────────────────────────────────────────────────────────────

/**
 * Affiche les jeux dans la page
 * @param {Array} tabJeux - Tableau d'objets jeu à afficher
 */
function afficherJeux(tabJeux) {
  // Récupère l'élément <ul id="list"> dans le HTML
  const ulList = document.getElementById("list");

  // Vide la liste avant de la reconstruire
  // (sinon les anciens éléments restent à chaque appel)
  ulList.innerHTML = "";

  // Parcourt chaque jeu du tableau et construit une carte HTML
  tabJeux.forEach(jeu => {
    // Pour chaque jeu, on ajoute une carte au contenu existant de la liste
    // ⚠️ innerHTML += reconstruit tout le DOM à chaque itération
    //    → avec 10 jeux : 10 reconstructions complètes du DOM
    //    → à optimiser à la séance 11
    ulList.innerHTML += `
      <article class="card">
        <img src="${jeu.image}" alt="${jeu.name}">
        <div class="card-body">
          <h2>${jeu.name}</h2>
          <p>${jeu.category} — ${jeu.year}</p>
          <span class="rating">${jeu.rating}</span>
        </div>
      </article>
    `;
  });
}

// Affichage initial au chargement de la page
afficherJeux(data);
