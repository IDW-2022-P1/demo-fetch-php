import produitsComponent from "./components/produitsComponent.js";

// on récupère les produits sur le serveur au format json
const response = await fetch("./php/produitsJson.php");
const produits = await response.json();

// on cible la balise main et on injecte les produits sous la forme de balises article
const main = document.querySelector('main');
main.appendChild(produitsComponent(produits)); // produitsComponent renvoie des balises article pour chaque produit
