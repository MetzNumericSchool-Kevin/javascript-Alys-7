// Définition de variables

const nom_boutique = "Boutique d'Archibald";
let nb_potions_soin = 4;
let prix_potion_soin = 8;
let est_ouvert = true;

if (est_ouvert) {
    console.log("La " + nom_boutique + " est ouverte!\nNous vous proposons:\n- " + nb_potions_soin + " potions de soin à " + prix_potion_soin + " 🪙 chacune");
} else {
    console.log("La " + nom_boutique + " est fermée!\nRevenez plus tard")
}