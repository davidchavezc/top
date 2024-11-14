let myFruits = "Platano, Kiwi, Mango";
let firstFruit = myFruits.slice(0, 7);
console.log(firstFruit);
// El método slice, toma dos paramétros, una posición inicial
// y una posición final, pero la final no se toma en cuenta.
let secondFruit = myFruits.substring(9);
console.log(secondFruit);
// Substring funciona de manera similar, si omitimos el segundo
// parámetro, tomará en cuenta el resto del string.
 let thirdFruit = myFruits.substr(15, 5);
 console.log(thirdFruit);
//  substr ya no es soportada, pero el segundo parámetro especifica
// cuantas posiciones se va a extender el string, incluyendo el final.
let myPoem = "Roses are red, Violets are blue";
let myLowerPoem = myPoem.toLowerCase();
console.log(myLowerPoem);
let myUpperPoem = myPoem.toUpperCase();
console.log(myUpperPoem);
// Considero que se explican solas estas funciones.
let greeting = "Regards";
let userName = "David";
let greetUser = greeting.concat(" ", userName);
console.log(greetUser);
//  Concat permite concatenar strings, notese las comillas que fungen
// como separador entre estas dos.
let myEmptyString = "          Hello, Wolr!      ";
console.log(myEmptyString.trimEnd());
console.log(myEmptyString.trimStart());
// trimStart o trimEnd respectivamente permiten eliminar espacio
// en blanco a ambos lados del string. trim lo remueve de ambos.
let sampleNum = "24";
let paddedNum = sampleNum.padStart(10, "1");
console.log(paddedNum);
// pad pads a string until it reaches the lenght of the desired
// parameter, the second parameter tells the function what to pad it
// with
let anotherSampleNum = "12";
let endPaddedNum = anotherSampleNum.padEnd(10, "hello");
console.log(endPaddedNum);
// padEnd funciona similar pero al final del string
