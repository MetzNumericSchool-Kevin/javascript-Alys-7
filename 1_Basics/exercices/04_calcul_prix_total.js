// Calcul du prix total d'une commande de potion 🪙

// Variables des exercices précédents (modifie selon tes valeurs)
let prix_potion_soin = 50;

const quantite_potion = Number.parseInt(prompt("Nombre de potions de soin souhaitées: "))
const prix_total = prix_potion_soin * quantite_potion;
console.log(`Prix de ${quantite_potion} potions de soins : ${prix_total} 🪙 mon cher Aventurier. 💸`)