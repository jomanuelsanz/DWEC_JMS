/* (Comprobación null y undefined) 

Crea un script que simule la carga de configuración de un usuario. 

Tendrás tres posibles fuentes para obtener un nombre de usuario:
    • Un valor introducido por el usuario con prompt().
    • Una constante en el código. Por defecto será “Invitado” aunque para hacer pruebas
sería recomendable modificarla a null, undefined o una cadena vacía.
    • Un valor de respaldo ("Anónimo") 
    
Usando el operador ??, selecciona el primer valor que no sea null ni undefined. 
Luego, repite usando || para ver la diferencia con valores como una cadena vacía ("") o 0. 

Muestra los valores elegidos en cada caso por consola. Se recomienda probar a introducir cadenas
vacías en el prompt a ver qué ocurre. */

// ------------------------------------------------------------------------------------------------------
// RESUMEN:
// ?? -> Evita "null" y "undefined". 
// Es decir, "Dame el primer valor que NO sea null ni undefined"

// || -> No sólo evita "null" y "undefined", sino que también evita valores falsos como "", 0, false o NaN. 
// Es decir, "Dame el primer valor verdadero".
// ------------------------------------------------------------------------------------------------------



let nombre1 = prompt("Introduce el nombre 1");
let nombre2 = null;
let nombre3 = "Anónimo";

// Muestra el primer valor definido: 
 alert(nombre1 ?? nombre2 ?? nombre3 ?? "Jose"); 
// Si pulsamos cancelar en el nombre 1, mostrará anónimo
// Si cambiamos el nombre3 por null y pulsamos cancelar en el nombre1, mostrará "Jose"

alert(nombre1 || nombre2 || nombre3 || "Jose"); 





// -----------------------------------------------------------------------------------------------------------------------


// ==================================================
// PRÁCTICA: COMPROBACIÓN NULL Y UNDEFINED
// Operadores ?? y ||
// ==================================================


// --------------------------------------------------
// MODIFICACIÓN 1
// Cambiar null por undefined
// --------------------------------------------------

//let nombre1 = "Carlos";
// let nombre2 = undefined;
// let nombre3 = "Anónimo";S

console.log("MODIFICACIÓN 1");
console.log(nombre1 ?? nombre2 ?? nombre3);


// --------------------------------------------------
// MODIFICACIÓN 2
// Cambiar nombre3 por null
// --------------------------------------------------

nombre1 = null;
nombre2 = null;
nombre3 = null;

console.log("MODIFICACIÓN 2");
console.log(nombre1 ?? nombre2 ?? nombre3 ?? "Jose");


// --------------------------------------------------
// MODIFICACIÓN 3
// Cambiar nombre3 por una cadena vacía ""
// --------------------------------------------------

nombre1 = null;
nombre2 = null;
nombre3 = "";

console.log("MODIFICACIÓN 3");

// ?? acepta "" porque NO es null ni undefined
console.log("Con ??: " + (nombre1 ?? nombre2 ?? nombre3 ?? "Jose"));

// || NO acepta "" porque es un valor falso
console.log("Con ||: " + (nombre1 || nombre2 || nombre3 || "Jose"));


// --------------------------------------------------
// MODIFICACIÓN 4
// Hacer que nombre1 sea directamente ""
// en lugar de utilizar prompt()
// --------------------------------------------------

nombre1 = "";
nombre2 = null;
nombre3 = "Anónimo";

console.log("MODIFICACIÓN 4");

console.log("Con ??: " + (nombre1 ?? nombre2 ?? nombre3));
console.log("Con ||: " + (nombre1 || nombre2 || nombre3));


// --------------------------------------------------
// MODIFICACIÓN 5
// Probar con el número 0
// --------------------------------------------------

let edad = 0;

console.log("MODIFICACIÓN 5");

// 0 NO es null ni undefined
console.log("Con ??: " + (edad ?? 18));

// 0 es un valor falso
console.log("Con ||: " + (edad || 18));


// --------------------------------------------------
// MODIFICACIÓN 6
// Probar con false
// --------------------------------------------------

let usuarioActivo = false;

console.log("MODIFICACIÓN 6");

// false NO es null ni undefined
console.log("Con ??: " + (usuarioActivo ?? true));

// false es un valor falso
console.log("Con ||: " + (usuarioActivo || true));


// --------------------------------------------------
// MODIFICACIÓN 7
// Añadir un cuarto nombre
// --------------------------------------------------

nombre1 = null;
nombre2 = undefined;
nombre3 = null;

let nombre4 = "Anónimo";

console.log("MODIFICACIÓN 7");

console.log(
    nombre1 ?? nombre2 ?? nombre3 ?? nombre4
);


// --------------------------------------------------
// MODIFICACIÓN 8
// Cambiar el orden de comprobación
// --------------------------------------------------

nombre1 = "Carlos";
nombre2 = "Pedro";
nombre3 = "Anónimo";

console.log("MODIFICACIÓN 8");

// Primero comprueba nombre3
let resultado = nombre3 ?? nombre1 ?? nombre2;

console.log(resultado);


// --------------------------------------------------
// MODIFICACIÓN 9
// Guardar el resultado en una variable
// --------------------------------------------------

nombre1 = null;
nombre2 = undefined;
nombre3 = "Anónimo";

console.log("MODIFICACIÓN 9");

let resultadoNullish = nombre1 ?? nombre2 ?? nombre3;

console.log(resultadoNullish);


// --------------------------------------------------
// MODIFICACIÓN 10
// Usar ?? para establecer un valor por defecto
// --------------------------------------------------

let nombre = null;

console.log("MODIFICACIÓN 10");

nombre = nombre ?? "Anónimo";

console.log(nombre);


// --------------------------------------------------
// MODIFICACIÓN 11
// Probar prompt()
// --------------------------------------------------

let nombreUsuario = prompt("Introduce tu nombre:");

console.log("MODIFICACIÓN 11");

// Si pulsamos CANCELAR:
// prompt() devuelve null
console.log("Con ??: " + (nombreUsuario ?? "Anónimo"));

// Si pulsamos ACEPTAR sin escribir nada:
// prompt() devuelve ""
// ?? mantiene ""
// || utiliza "Anónimo"
console.log("Con ||: " + (nombreUsuario || "Anónimo"));


// --------------------------------------------------
// MODIFICACIÓN 12
// Probar todos los valores importantes
// --------------------------------------------------

console.log("MODIFICACIÓN 12");

console.log("Texto:");
console.log("Hola" ?? "Valor por defecto");
console.log("Hola" || "Valor por defecto");

console.log("");

console.log("Cadena vacía:");
console.log("" ?? "Valor por defecto");
console.log("" || "Valor por defecto");

console.log("");

console.log("Cero:");
console.log(0 ?? 100);
console.log(0 || 100);

console.log("");

console.log("False:");
console.log(false ?? true);
console.log(false || true);

console.log("");

console.log("Null:");
console.log(null ?? "Valor por defecto");
console.log(null || "Valor por defecto");

console.log("");

console.log("Undefined:");
console.log(undefined ?? "Valor por defecto");
console.log(undefined || "Valor por defecto");


// ==================================================
// RESUMEN
// ==================================================

// ??
// Devuelve el primer valor que NO sea null ni undefined.
//
// ||
// Devuelve el primer valor verdadero.
//
// Valores que ?? ACEPTA pero || RECHAZA:
//
// ""       -> cadena vacía
// 0        -> cero
// false    -> falso
//
// Ambos rechazan:
//
// null
// undefined