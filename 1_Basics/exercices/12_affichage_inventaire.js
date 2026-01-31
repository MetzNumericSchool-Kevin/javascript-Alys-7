// Aventurier, regarde tout ce que je vends !

// Variable de l'exercice précédent (modifie selon tes valeurs)
const inventaire = [];

const potion_soin = {
  nom_potion: "Potion de soin",
  prix_potion: 50,
  stock_potion: 10,
};
const potion_mana = {
  nom_potion: "Potion de mana",
  prix_potion: 40,
  stock_potion: 15,
};
const potion_endurance = {
  nom_potion: "Potion d'endurance",
  prix_potion: 20,
  stock_potion: 30,
};
inventaire.push(potion_soin, potion_mana, potion_endurance);
inventaire.forEach(potion => {
    console.log(`- Nom: ${potion.nom_potion}\n- Prix: ${potion.prix_potion}\n- Stock: ${potion.stock_potion}`);
});
inventaire.forEach(potion => {
    for (let [caracteristique,valeur] of Object.entries(potion)) {
        console.log(`- ${caracteristique}: ${valeur}`);
    }
});