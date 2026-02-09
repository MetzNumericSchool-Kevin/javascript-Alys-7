// ============================================
// EXERCICE 1 : Quel est le titre de la boutique ?
// ============================================
// 🎯 Objectif : Apprendre à sélectionner un élément HTML et récupérer son contenu
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne le <h1> et affiche son texte dans la console
const titre = document.querySelector('h1');
console.log(titre.textContent);


// ============================================
// EXERCICE 2 : Des informations manquent !
// ============================================
// 🎯 Objectif : Créer et ajouter un nouvel élément HTML dans le DOM
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée un nouveau paragraphe et ajoute-le dans #description_boutique
const description_boutique = document.querySelector('#description_boutique');
const nouveau_paragraphe = document.createElement('p');
nouveau_paragraphe.textContent = "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";
description_boutique.appendChild(nouveau_paragraphe);


// ============================================
// EXERCICE 3 : Roger, enfoiré !
// ============================================
// 🎯 Objectif : Supprimer un élément HTML du DOM
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Supprime le <span id="blague_de_roger_le_sorcier">
const a_supprimer = document.getElementById("blague_de_roger_le_sorcier");
a_supprimer.remove();


// ============================================
// EXERCICE 4 : Archibald n'est pas là, appelons-le !
// ============================================
// 🎯 Objectif : Gérer les événements de clic
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Ajoute un événement 'click' sur le bouton #call_archibald
call = document.querySelector('#call_archibald');
call.addEventListener('click', function () {
  alert( `🧙‍♂️ J'arrive, j'arrive Aventurier !`);
})


// ============================================
// EXERCICE 5 : Faisons un peu de magie 🪄
// ============================================
// 🎯 Objectif : Sélectionner plusieurs éléments et modifier leurs styles
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Récupère toutes les boîtes et les boutons de couleur
// Ajoute des événements pour changer les couleurs
const boutons = document.querySelectorAll('.boite');
const rouge = document.querySelector('#btn_change_red');
const bleu = document.querySelector('#btn_change_blue');
const vert = document.querySelector('#btn_change_green');
rouge.addEventListener('click', () => {
  boutons[0].style.backgroundColor = 'red';
});
bleu.addEventListener('click', () => {
  boutons[0].style.backgroundColor = 'blue';
  boutons[1].style.backgroundColor = 'blue';
});
vert.addEventListener('click', () => {
  boutons[0].style.backgroundColor = 'green';
  boutons[1].style.backgroundColor = 'green';
  boutons[2].style.backgroundColor = 'green';
});


// ============================================
// EXERCICE 6 : Aventurier, voici ma boutique !
// ============================================
// 🎯 Objectif : Utiliser les templates HTML pour créer des éléments complexes
// 📖 Consignes : Consulte le README pour les détails

// 📦 Données des potions
const potions = [
  {
    nom: "Potion de soin",
    description:
      "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
    prix: 10,
  },
  {
    nom: "Potion de sommeil",
    description:
      "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
    prix: 50,
  },
];

// ✍️ TON CODE ICI
// Crée une fonction pour afficher une potion à partir du template
// Parcours le tableau potions et affiche chaque potion
const liste_potions = document.querySelector('#liste_potions');
const template_potion = document.querySelector('#template_potion');
potions.forEach(potion => {
  const template_potion_n = template_potion.content.cloneNode(true);
  template_potion_n.querySelector('.nom_potion').innerHTML = potion.nom;
  template_potion_n.querySelector('.prix_potion').innerHTML = potion.prix;
  template_potion_n.querySelector('.description_potion').innerHTML = potion.description;
  liste_potions.appendChild(template_potion_n);
})

// ============================================
// EXERCICE 7 : Plus de potions, nous avons besoin de plus de potions !
// ============================================
// 🎯 Objectif : Gérer les formulaires et réutiliser du code
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Récupère le formulaire et gère l'événement 'submit'
// Utilise FormData pour extraire les valeurs
// Réutilise la fonction de l'exercice 6 pour ajouter la nouvelle potion
formulaire = document.querySelector('#liste_potions ~ section > .form');
formulaire.addEventListener("submit", (event) => {
  event.preventDefault(); // IMPORTANT !

  const formData = new FormData(formulaire);
  const nouvellePotion = {
    nom: formData.get("nom"),
    description: formData.get("description"),
    prix: formData.get("prix"),
  };

  afficherPotion(nouvellePotion);
});

function afficherPotion(potion) {
  const conteneur = document.querySelector("#liste_potions");
  const template = document.querySelector("#template_potion");
  const clone = template.content.cloneNode(true);

  clone.querySelector(".nom_potion").textContent = potion.nom;
  clone.querySelector(".prix_potion").textContent = potion.prix;
  clone.querySelector(".description_potion").textContent = potion.description;

  conteneur.appendChild(clone);
}

// ============================================
// EXERCICE 8 : Le Miroir Magique 🪞
// ============================================
// 🎯 Objectif : Utiliser classList pour ajouter/retirer des classes CSS
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne le miroir et les éléments à afficher/cacher
// Utilise mouseenter et mouseleave pour détecter le survol
// Utilise classList.remove() et classList.add() pour afficher le reflet
const miroir = document.querySelector('#magic-mirror');
const miroirContour = miroir.querySelector('.mirror-surface');
const miroirReflexion = miroir.querySelector('.mirror-reflection');
miroir.addEventListener('mouseenter', (event) => {
  miroirContour.classList.add('hidden');
  miroirReflexion.classList.remove('hidden');
});
miroir.addEventListener('mouseleave', (event) => {
  miroirContour.classList.remove('.hidden');
  miroirReflexion.classList.add('hidden');
});


// ============================================
// EXERCICE 9 : L'Arbre Généalogique des Potions 🌳
// ============================================
// 🎯 Objectif : Naviguer dans le DOM avec parentElement, children, etc.
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne toutes les catégories de potions
// Pour chaque catégorie, trouve la liste (children)
// Ajoute la classe 'first' au premier item et 'last' au dernier item
const potionCategorie = document.querySelectorAll('.potion-category');
potionCategorie.forEach((categorie => {
  const listeCategorie = categorie.querySelector('.potion-list');
  const items = listeCategorie.querySelectorAll('.potion-item');
  items[0].classList.add('first');
  items[items.length - 1].classList.add('last');
}));


// ============================================
// EXERCICE 10 : Les Étiquettes Magiques 🏷️
// ============================================
// 🎯 Objectif : Utiliser les attributs data-* et dataset
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne tous les boutons "Plus d'infos"
// Pour chaque bouton, ajoute un événement click
// Récupère les data attributes de la potion parente
// Affiche les infos dans la div .potion-info
const infos = document.querySelectorAll('.show-info');
infos.forEach(bouton => {
  bouton.addEventListener('click', () => {
    carte = bouton.closest('.labeled-potion');
    const rarete = carte.dataset.rarete;
    const effetSecondaire = carte.dataset.effetSecondaire
    const duree = carte.dataset.duree;
    const info = carte.querySelector('.potion-info');
    info.innerHTML = "Rareté: " + rarete + "<br>" + "Effets secondaires: " + effetSecondaire + "<br>" + "Durée: " + duree;
    info.classList.toggle('hidden');
  })
});


// ============================================
// EXERCICE 11 : Validation Magique en Temps Réel ✨
// ============================================
// 🎯 Objectif : Valider un formulaire en temps réel avec les événements input
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne tous les champs du formulaire
// Ajoute un événement 'input' sur chaque champ
// Valide le champ (min 3 caractères pour texte, > 0 pour prix)
// Ajoute les classes 'valid' ou 'invalid' et affiche un message
// Active/désactive le bouton submit selon la validité globale
const nomPotion = document.querySelector('#potion-name');
const ingredientPotion = document.querySelector('#potion-ingredient');
const prixPotion = document.querySelector('#potion-price');
const formulaire2 = document.querySelector('#custom-potion-form');
formulaire2.addEventListener('input', () => {
  const nom = nomPotion.value;
  const ingredient = ingredientPotion.value;
  const prix = prixPotion.value;
  nomPotion.classList.toggle('valid', nom.length >= 3);
  if (nom.length >= 3) {
    nomPotion.nextElementSibling.innerHTML = "OK";
  } else {
    nomPotion.nextElementSibling.innerHTML = "Pas OK";
  }
  ingredientPotion.classList.toggle('valid', ingredient.length >= 3);
  if (ingredient.length >= 3) {
    ingredientPotion.nextElementSibling.innerHTML = "OK";
  } else {
    ingredientPotion.nextElementSibling.innerHTML = "Pas OK";
  }
  prixPotion.classList.toggle('valid', parseInt(prix) > 0);
  if (parseInt(prix) > 0) {
    prixPotion.nextElementSibling.innerHTML = "OK";
  } else {
    prixPotion.nextElementSibling.innerHTML = "Pas OK";
  }
  if (nom.length >= 3 && ingredient.length >= 3 && parseInt(prix) > 0) {
    formulaire2.querySelector('button').disabled = false;
  } else {
    formulaire2.querySelector('button').disabled = true;
  }
});


// ============================================
// EXERCICE 12 : Calculateur de Commande 🧮
// ============================================
// 🎯 Objectif : Calculer automatiquement le total d'une commande
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne tous les inputs de quantité
// Pour chaque input, ajoute un événement 'input' ou 'change'
// Calcule le total de la ligne (quantité × prix)
// Affiche le total de la ligne
// Calcule et affiche le total général
const tousLesInputs = document.querySelectorAll('.quantity-input');
const grandTotal = document.querySelector('#grand-total');
tousLesInputs.forEach(input => {
  input.addEventListener('input', () => {
    const quantite = input.value || 0;
    const prixUnitaire = input.dataset.price;
    const totalDeLaLigne = parseInt(quantite) * parseInt(prixUnitaire);
    const totalPrice = input.nextElementSibling.querySelector('.total-price');
    totalPrice.innerHTML = totalDeLaLigne;
    if (input.dataset.valeur) {
      grandTotal.innerHTML = parseInt(grandTotal.textContent) - input.dataset.valeur + totalDeLaLigne;
    } else {
      grandTotal.innerHTML = parseInt(grandTotal.textContent) - 0 + totalDeLaLigne;
    }
    input.setAttribute("data-valeur", totalDeLaLigne);
  });
});


// ============================================
// EXERCICE 13 : Recherche de Potions 🔍
// ============================================
// 🎯 Objectif : Filtrer des éléments en temps réel avec une barre de recherche
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne le champ de recherche et toutes les cartes de potions
// Ajoute un événement 'input' sur le champ de recherche
// Pour chaque potion, vérifie si le nom ou la description contient le texte recherché
// Affiche/cache les potions avec classList.add/remove('hidden')
// Affiche le nombre de résultats et le message "Aucune potion trouvée" si besoin
const champDeRecherche = document.querySelector('#search-input');
const cartes = document.querySelectorAll('.searchable-potion');
const compteur = document.querySelector('#search-results-count');
const message = document.querySelector('#no-results');
cartes.forEach(carte => {
  carte.classList.add('hidden');
});
message.classList.remove('hidden');
let nombreCarteAffichee = 0;
champDeRecherche.addEventListener('input', () => {
  const texte = champDeRecherche.value;
  nombreCarteAffichee = 0;
  cartes.forEach(carte => {
    const titre = carte.querySelector('.card-title').textContent;
    const description = carte.querySelector('.card-text').textContent;
    carte.classList.toggle('hidden', !titre.toLowerCase().includes(texte.toLowerCase()) && !description.toLowerCase().includes(texte.toLowerCase()) || !texte);
    if (!carte.classList.contains('hidden')) {
      nombreCarteAffichee += 1;
    }
  });
  if (nombreCarteAffichee === 0) {
    message.classList.remove('hidden');
    compteur.innerHTML = "";
  } else {
    message.classList.add('hidden');
    if (nombreCarteAffichee === 1) {
      compteur.innerHTML = "1 potion trouvée"
    } else {
      compteur.innerHTML = nombreCarteAffichee + " potions trouvées";
    }
  }
});