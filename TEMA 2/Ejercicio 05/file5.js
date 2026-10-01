// Como hemos puesto que sea "Number"
// Si el usuario introduce letras o algo que no sea un Number, 
// devolverá automáticamente 'NaN' (Not a Number).

let num1 = Number (prompt("Introduce el número 1: "))
let num2 = Number (prompt("Introduce el número 2: "))

// Operaciones básicas
// Son Const porque no van a cambiar a lo largo del script
const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num1 / num2;

// Mostramos los resultados en el HTML
// Añadimos "<br>" al final, para forzar un salto de línea
document.write("Suma: " + suma + "<br>");
document.write("Resta: " + resta + "<br>");
document.write("Multiplicación " + multiplicacion + "<br>");
document.write("División " + division + "<br>");