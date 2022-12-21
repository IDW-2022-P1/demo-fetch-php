import produitComponent from "./produitComponent.js";

/**
 * 
 * @param produits : un tableau d'objets Javascript [{"id":"1","nom":"jusorange","prix":"2.5","imageSrc":"jusorange.png"}] 
 * @returns 
 */
export default function produitsComponent(produits){
    const section = document.createElement('section');
    for(let produit of produits){
        const articleProduit = produitComponent(produit);// crée un élément article avec une h2, une p, une img
        section.appendChild(articleProduit);
    }
    return section;
}