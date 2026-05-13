# Les Jeux-Vidéos

Catalogue interactif de jeux vidéo en HTML/CSS/JavaScript natif — projet du cours C122 (ESIG).

## Description

Application web pour gérer une collection de jeux vidéo. L'utilisateur peut consulter la liste, rechercher par nom, trier par note, ajouter un nouveau jeu via un formulaire et supprimer un jeu avec confirmation. Tous les composants sont en JavaScript natif (sans framework).

J'ai choisi cette thématique parce que c'est un domaine qui me passionne et qui se prête bien à un affichage en cartes avec note, catégorie et année.

## Lien GitHub Pages

https://fallinov.github.io/122-projet-perso-steve-fallet/

## Fonctionnalités

- [x] Affichage dynamique de la liste (cartes avec image, nom, catégorie, année, note)
- [x] Tri par note (ASC / DESC inversable)
- [x] Recherche en temps réel par nom
- [x] Ajout d'un jeu via formulaire avec validation (nom requis, note entre 1 et 10)
- [x] Suppression d'un jeu avec confirmation
- [x] Message "Aucun résultat" quand la recherche ne retourne rien
- [x] Responsive (mobile + desktop) avec media query à 600px

## Technologies

- HTML5
- CSS3 (Grid + Flexbox + media queries)
- JavaScript ES6+ (sans framework)

## Captures d'écran

![Aperçu desktop](https://placehold.co/800x500/4a90d9/white?text=Capture+desktop)
![Aperçu mobile](https://placehold.co/375x600/4a90d9/white?text=Capture+mobile)

## Transparence IA

### Outils utilisés
- GitHub Copilot (WebStorm) pour l'autocomplétion et la génération du tableau initial
- ChatGPT pour comprendre les guard clauses et les media queries

### Prompts utilisés
- « Génère un tableau de 10 jeux vidéo avec id, name, category, platform, rating, year, image »
- « Comment afficher un message quand le résultat d'un filter est vide en JavaScript ? »

### Ce que j'ai appris vs ce que l'IA a généré
- **Généré par l'IA** : le tableau de données initial (10 objets)
- **Écrit par moi** : la fonction `refresh()`, le tri inversable, la validation du formulaire, la suppression par délégation
- **Appris grâce à l'IA** : le pattern guard clause (`if (... ) return;` en début de fonction) et la syntaxe `@media (max-width: ...)` pour le responsive
