
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    return ((a > b) ? a : b);
}

console.log(ternaire(11, 54));

module.exports = ternaire;