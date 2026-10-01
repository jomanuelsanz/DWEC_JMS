/*  (Estructura switch) 
Crea un script que solicite un valor entre 1 y 5. 
Luego muestra en inglés el valor ingresado con alert usando un switch. 
Mostrar un mensaje de error en caso de que el valor esté fuera del rango establecido o no sea numérico.
*/

let valor1 = Number(prompt("Dame un valor del 1 al 5: "))

switch(valor1) {
    case 1:  
        alert ("One");
    break;

    case 2: 
        alert ("Two")
    break;

    case 3: 
        alert ("Three)")
    break;

    case 4: 
        alert ("Four)")
    break;

    case 5: 
        alert ("Five)")
    break;

}

/* MODIFICACIÓN 1: EVALUAR SIN USAR SWITCH*/

let valor2 = Number(prompt("Dame un valor del 1 al 5: "))

if (valor2 === 1) {
    alert("One");
} else if (valor2 === 2) {
    alert("Two");
} else if (valor2 === 3) {
    alert("Three");
} else if (valor2 === 4) {
    alert("Four");
} else if (valor2 === 5) {
    alert("Five");
} else {
    alert("Error: El valor está fuera del rango establecido o no es numérico.");
}



/* MODIFICACIÓN 2: QUITA LA CONVERSIÓN A NÚMERO, HAZLO FUNCIONAR EVALUANDO TEXTO PURO */

let valor3 = prompt("Dame un valor del 1 al 5: ", ""); // Devuelve un String

switch(valor3) {
    case "1":  // Ahora los casos deben ir entre comillas
        alert("One");
        break;
    case "2": 
        alert("Two");
        break;
    // ... (seguir igual con los demás números entre comillas)
    default:
        alert("Error: El valor está fuera del rango establecido o no es numérico.");
        break;
}



/* MODIFICACIÓN 3: Agrupamiento de casos (Casos compartidos)
El libro enseña que puedes agrupar variantes que comparten el mismo código eliminando sus break.
"Modifica el script para que si ingresa 1 o 2 diga 'Pequeño', si ingresa 3 diga 'Medio' y si ingresa 4 o 5 diga 'Grande'". */

let valor4 = +prompt("Dame un valor del 1 al 5: ", "");

switch(valor4) {
    case 1:
    case 2: // Agrupados sin break
        alert("Small / Pequeño");
        break;
    case 3:
        alert("Medium / Medio");
        break;
    case 4:
    case 5: // Agrupados sin break
        alert("Large / Grande");
        break;
    default:
        alert("Error");
        break;
}

