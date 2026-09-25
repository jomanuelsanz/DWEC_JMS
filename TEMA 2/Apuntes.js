- CREAR Y MODIFICAR VARIABLES -

// Creamos una variable llamada nombre
let nombre = "Juan";

// Mostramos el contenido de la variable
alert(nombre);

// Cambiamos el valor de la variable
nombre = "Pedro";

// Volvemos a mostrar el nuevo valor
alert(nombre);

// --------------------------------------------------------------------------------------------------

- PEDIR INFO CON PROMT -

// Pedimos al usuario su nombre
let nombre = prompt("Introduce tu nombre");

// Mostramos el nombre introducido
alert(nombre);

// --------------------------------------------------------------------------------------------------

- PEDIR UN NÚMERO - 

// Aunque se introduzca un número, esto devolverá String
let numero = prompt("Introduce un número");

// - - - - - - - - - - 

// Para convertirlo a número directamente al pedirlo:
let numero = Number(prompt("Introduce un número"));

// Mostramos el número
alert(numero);

// - - - - - - - - - - 

// También se puede hacer en dos pasos:
// Pedimos el dato
let numero = prompt("Introduce un número");

// Convertimos el String a Number
numero = Number(numero);

// Mostramos el resultado
alert(numero);

// --------------------------------------------------------------------------------------------------

- COMPROBAR EL TIPO CON TYPE OF - 

// Creamos una variable
let variable;

// Comprobamos su tipo
alert(typeof variable);  // Como todavía no tiene valor devolverá "undefined"

// - - - - - - - - - - 

// Si escribimos un texto:
variable = "Hola";

// Comprobamos el tipo
alert(typeof variable);   // Devolverá "string"

// - - - - - - - - - - 

// Si después escribimos un número
variable = 25;

// Comprobamos el tipo
alert(typeof variable);   // Devolverá number

// --------------------------------------------------------------------------------------------------

- CONVERTIR STRING -> NUMBER -

// Guardamos un texto
let numero = "25";

// Actualmente es String
alert(typeof numero);

// Convertimos el texto a Number
numero = Number(numero);

// Ahora es Number
alert(typeof numero);

// Si el usuario introduce algo que no es un número, se obtiene NaN (Not a Number)

// --------------------------------------------------------------------------------------------------

- CONVERSIÓN A BOOLEAN - 

// Creamos una variable con valor 10
let numero = 10;

// Convertimos el número a Boolean
let resultado = Boolean(numero);

// Mostramos el resultado
alert(resultado);

// Regla de los booleanos:
Boolean(0)       → false
Boolean(1)       → true
Boolean(10)      → true
Boolean(-5)      → true
Boolean("Hola")  → true
Boolean("")      → false

// --------------------------------------------------------------------------------------------------

- OPERACIONES MATEMÁTICAS -

// Creamos dos números
let num1 = 10;
let num2 = 5;

// Realizamos las operaciones
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

// Mostramos los resultados
alert(suma);
alert(resta);
alert(multiplicacion);
alert(division);

// Operadores:
+   suma
-   resta
*   multiplicación
/   división
**  potencia
%   resto

// EJEMPLO POTENCIAS:
let resultado = 5 ** 2;
// 5 elevado a 2 = 25
alert(resultado);

// EJEMPLO RESTO:
let resultado = 10 % 3;
// El resto de dividir 10 entre 3 es 1
alert(resultado);

// --------------------------------------------------------------------------------------------------

- DOCUMENT.WRITE() -

let nombre = "Juan";

// Escribimos el resultado directamente en la página
document.write("Hola " + nombre);

// Se puede utilizar <br> para saltar de línea
document.write("Hola<br>");
document.write("¿Qué tal?");

// --------------------------------------------------------------------------------------------------

- CONCATENAR TEXTOS - 

let nombre = "Juan";
let edad = 20;

// Unimos diferentes textos y variables
document.write("Me llamo " + nombre + " y tengo " + edad + " años.");

// --------------------------------------------------------------------------------------------------

- EJERCICIO DEL CÍRCULO MODIFICADO -

let radio = Number(prompt("Introduce el radio del círculo: "));
const pi = 3.14;

let area = pi * (radio ** 2);

document.write("El area es: " + area);

- - - - - - - - - -

// Ahora modifica el programa para calcular también el perímetro:
// Pedimos el radio al usuario
let radio = Number(prompt("Introduce el radio del círculo: "));

// Creamos la constante PI
const pi = 3.14;

// Calculamos el área
let area = pi * (radio ** 2);

// Calculamos el perímetro
let perimetro = 2 * pi * radio;

// Mostramos el área
document.write("El área es: " + area + "<br>");

// Mostramos el perímetro
document.write("El perímetro es: " + perimetro);

// --------------------------------------------------------------------------------------------------

- IF - 

// Pedimos la edad
let edad = Number(prompt("Introduce tu edad"));

// Comprobamos si tiene 18 años o más
if (edad >= 18) {

    // Esto ocurre si la condición es verdadera
    alert("Eres mayor de edad");

}

// --------------------------------------------------------------------------------------------------

- IF ELSE - 

// Pedimos un número
let numero = Number(prompt("Introduce un número"));

// Comprobamos si es positivo
if (numero > 0) {
    // Si la condición se cumple
    alert("El número es positivo");

} else {
    // Si la condición NO se cumple
    alert("El número no es positivo");

}

// --------------------------------------------------------------------------------------------------

- ELSE IF -

// Pedimos una nota
let nota = Number(prompt("Introduce tu nota"));

// Comprobamos diferentes situaciones
if (nota >= 9) {
    alert("Sobresaliente");

} else if (nota >= 5) {
    alert("Aprobado");

} else {
    alert("Suspenso");

}

// --------------------------------------------------------------------------------------------------

- COMPROBAR SI UN NÚMERO ES PAR - 

// Pedimos un número
let numero = Number(prompt("Introduce un número"));

// Calculamos el resto de dividir entre 2
if (numero % 2 == 0) {

    // Si el resto es 0, es par
    alert("El número es par");

} else {

    // Si el resto no es 0, es impar
    alert("El número es impar");

}

// --------------------------------------------------------------------------------------------------

- OPERADORES DE COMPARACIÓN -

>    // mayor que
<    // menor que
>=   // mayor o igual
<=   // menor o igual
==   // igual
!=   // diferente
===  // exactamente igual
!==  // exactamente diferente

// --------------------------------------------------------------------------------------------------

- MODIFICACIÓN TÍPICA - CAMBIAR alert POR document.write

// Si me dan
let nombre = prompt("Introduce tu nombre");
alert(nombre);

// y me piden, muestra el resultado en página, sería:
// Pedimos el nombre
let nombre = prompt("Introduce tu nombre");

// Mostramos el nombre en la página
document.write(nombre);

// --------------------------------------------------------------------------------------------------

- MATH -

// EJEMPLO 
// Pedimos un número
let numero = Number(prompt("Introduce un número"));

// Calculamos su raíz cuadrada
let resultado = Math.sqrt(numero);

// Mostramos el resultado
document.write("La raíz cuadrada es: " + resultado);

- - - - - - - - - -

// FUNCIONES BÁSICAS MATH:
Math.sqrt(25)     // raíz cuadrada → 5
Math.pow(2, 3)    // 2 elevado a 3 → 8
Math.round(4.6)   // redondear → 5
Math.floor(4.9)   // redondear hacia abajo → 4
Math.ceil(4.1)    // redondear hacia arriba → 5

// --------------------------------------------------------------------------------------------------

- EJERCICIO COMPLETO CON UN POCO DE TODO -

// Pedimos el nombre al usuario
let nombre = prompt("Introduce tu nombre");

// Pedimos la edad y la convertimos a Number
let edad = Number(prompt("Introduce tu edad"));

// Comprobamos si la edad introducida es un número válido
if (isNaN(edad)) {

    // Si no es un número mostramos un mensaje
    document.write("La edad introducida no es válida.");

} else {

    // Mostramos el nombre
    document.write("Hola " + nombre + "<br>");

    // Mostramos la edad
    document.write("Tienes " + edad + " años.<br>");

    // Comprobamos si es mayor de edad
    if (edad >= 18) {
        // Si tiene 18 o más
        document.write("Eres mayor de edad.");

    } else {
        // Si tiene menos de 18
        document.write("Eres menor de edad.");

    }

}
