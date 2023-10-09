
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

const multiplyByTwo = (array) => { return array.map((x) => x * 2) }

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

const filterNameStartByA = (array) => {return array.filter((word) => word[0] == 'A')}

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

const initialValue = 0;
const sum = (array) => {return array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue) };

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

const findUserById = (array, id) => { return array.find((element) => element.id == id ).name };

const array2 = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Doe'},
  {id: 3, name: 'Foo'},
  {id: 4, name: 'Bar'}
 ];
 console.log(findUserById(array2, 2) );

module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};