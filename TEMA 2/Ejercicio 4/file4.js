// Script que pide el radio del círculo
let radio = Number (prompt("Introduce el radio del círculo: "));
const pi = 3.14;  // PI definido como constante

// Calcula el área con la fórmula y lo muestra con "document.write"
let area = pi * (radio ** 2) ;
document.write("El area es: " + area + "<br>"); // Salto de línea con br


// Aumentamos el radio un 25% y calculamos de nuevo el área
// He definido nueva variable "areaconaumento" y añadido el Operador de decremento *=
let areaconaumento = (area *= 1.25);   
// Mostramos de nuevo el resultado con "document.write"
document.write("El area con aumento del radio de 25% es: " + areaconaumento);