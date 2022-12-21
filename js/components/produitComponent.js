/**
 * 
 * @param produit : un objet Javascript {"id":"1","nom":"jusorange","prix":"2.5","imageSrc":"jusorange.png"} 
 * @returns 
 */
export default function produitComponent(produit){
    // article > h2, p, img
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    h2.textContent = produit.nom;
    const p = document.createElement('p');
    p.textContent = produit.prix;
    const img = document.createElement('img');
    img.src = "images/" + produit.imageSrc;
    
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(img);

    return article;
}