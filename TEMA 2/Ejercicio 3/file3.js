// Crea una variable inicial de tipo BigInt
let variable = BigInt; 
// Muestra un alert con la función typeof de la variable inicial vacía con BigInt
alert(typeof variable);

// Pide un número por el prompt y guárdalo en esta misma variable
let numero = prompt("Introduce un número: ");

// Actualmente es String
alert(typeof numero);

// Convertimos el texto a Number
numero = Number(numero);
// Ahora es Number
alert(typeof numero);
// Si el usuario introduce algo que no es un número, se obtiene NaN (Not a Number)

// Constructor de boolean 
// Valores mayores que 0 son true o ver qué ocurre con NaN.
numero = Boolean(numero);
alert(numero);