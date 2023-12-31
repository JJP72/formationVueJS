
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const multiplyByTwo = (array) => array.map((x) => x * 2);

const arr = [5, 10, 20]; 
console.log(multiplyByTwo(arr));

/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const filterNameStartByA = (array) => array.filter((word) => word[0] === 'A');
// ==> word.startsWith("A") mieux que la case 0 (si elle est vide)

const arr2 = ["Orange", "Aigre Yellow", "Green", "abcdef"]; 
console.log(filterNameStartByA( arr2 ));


/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const sum = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//const sum = (array) => array.reduce((acc, i) => acc + i, 0);

console.log(sum(arr));

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

//const findUserById = (array, id) => array.find((element) => element.id === id ).name;
// (array.find(i => i.id === id)?? {}).name ?? null;
const findUserById = (array, id) => array.find((element) => element.id === id ).name;

// gestion d'erreur
const findUserByIdErr = (array, id) => array.find(element => element.id === id )?.name ?? "404";

const array2 = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Doe'},
  {id: 3, name: 'Foo'},
  {id: 4, name: 'Bar'}
 ];
 console.log(findUserById(array2, 2) );
 console.log(findUserByIdErr(array2, 5) );
 console.log(findUserByIdErr(array2, 2) );

module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};