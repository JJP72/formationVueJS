
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("set");
            resolve(42+1); // ok
            resolve(-42);// Erreur
        }, 5000);
    });
};

console.log("debut");
//sleep().then((res) => ...); .....////
console.log("fin");

const asyncFonction = async() => {

}


console.log("debut");

console.log("fin");


module.exports = {sleep};