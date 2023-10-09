
/**
 * utilisez les nouveau guillets ` (alt gr + 7) pour concaténer le nom et le prénom passé en paramètre
 * Renvoi le résultat
 * 
 * exemple: "John", "Doe" => "John Doe"
 * 
 * contrainte:
 *  - ne pas utiliser l'opérateur +
 *  - ne pas utiliser la fonction concat de String
 */

const concat = (firstName, lastName) => `$firstName $lastName`

console.log("John", "Doe");
console.log(`${1+2}`); // syntaxe pour info

module.exports = {concat};