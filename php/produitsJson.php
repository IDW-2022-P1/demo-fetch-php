<?php
require_once 'bdd/bdd.php';

// récupération des données
$req = $conn->prepare("SELECT * FROM produits");
$req->execute();
$produits = $req->fetchAll(PDO::FETCH_ASSOC);

// encodage des données au format json (chaîne de caratères)
$produitsJson = json_encode($produits);

// on renvoie du texte au format json
echo $produitsJson;