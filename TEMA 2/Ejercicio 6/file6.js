/* (Estructuras de control y comparaciones) 

Un viajero llega a una puerta custodiada por un sabio. 

El sabio le hace tres preguntas:
• ¿Cuánto llevas contigo?
• ¿Eres sincero? (una ventana confirm).
• ¿Qué responderías si te pregunto si puedes entrar en mayúsculas?

Las respuestas para poder entrar son:
• ¿Cuánto llevas contigo? Valor mayor de 50
• ¿Eres sincero? Aceptar en la ventana confirm
• ¿Qué responderías si te pregunto si puedes entrar en mayúsculas? SÍ

Se mostrará un alert indicando si el viajero puede entrar o no si se cumplen las 3 condiciones.
*/ 

let pregunta1 = Number(prompt("¿Cuánto llevas contigo?"));
let pregunta2 = confirm("¿Eres sincero?");
let pregunta3 = prompt("¿Qué responderías si te pregunto si puedes entrar en mayúsculas?")

if (pregunta1 >= 50 && pregunta2 == true && pregunta3 == "SÍ"){
    alert("Puedes entrar")
}
else {
    alert("No puedes entrar. Inténtalo de nuevo")
}


/*
Con "OR" se devuelve el primero que sea verdadero. 
Si no hay ninguno verdadero, devuelve "Anonymous"(porque es el primero verdadero)

Hay dos casos en los que se utiliza OR:

1er CASO: 
alert(firstName || lastName || nickName || "Anonymous");
- El operador || considera falso: 0, vacío, null, NaN y undefined.

2º CASO:
alert(firstName ?? lastName ?? nickName ?? "Anonymous")
- El operador ?? considera falso: null y undefined
*/


// -------------------------------------------------------------------------------------------------


/* Otro ejercicio: 
Modificame el código para que el viajero pueda entrar SI SE CUMPLEN DOS de las TRES condiciones */

let pregunta4 = Number(prompt("¿Cuánto llevas contigo?"));
let pregunta5 = confirm("¿Eres sincero?");
let pregunta6 = prompt("¿Qué responderías si te pregunto si puedes entrar en mayúsculas?");

// Guardamos cada condición en una variable
let cumple4 = pregunta4 >= 50;
let cumple5 = pregunta5; // confirm ya devuelve true o false
let cumple6 = pregunta6 === "SÍ";

// Comprobamos si se cumplen al menos dos de las tres combinaciones posibles
if ((cumple4 && cumple5) || (cumple4 && cumple6) || (cumple5 && cumple6)) {
    alert("Puedes entrar");
} else {
    alert("No puedes entrar. Inténtalo de nuevo");
}
