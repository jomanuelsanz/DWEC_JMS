/*
(Estructura switch) 

Crea un script que solicite un valor entre 1 y 5. 

Luego muestra en inglés el valor ingresado con alert usando un switch. 
Mostrar un mensaje de error en caso de que el valor esté fuera del rango establecido o no sea numérico. 

Añade un único case para los números 6 o 7 que muestre “¡Six Seven!”.
*/

// ---------------------------------------------------------------------------------------

// Solitamos al usuario el número del uno al siete
let valor1 = Number(prompt("Dame un valor del 1 al 7: "))

// Creamos el "switch" indicando en inglés el valor mediante un "alert"
switch(valor1) {
    case 1:  
        alert ("One");
    break;

    case 2: 
        alert ("Two")
    break;

    case 3: 
        alert ("Three")
    break;

    case 4: 
        alert ("Four")
    break;

    case 5: 
        alert ("Five")
    break;

    // Añadimos los casos 6 y 7 sin "break" para que muestre "¡Six Seven!” 

    // Para esto hemos utilizado para esto el mismo "switch".
    // Es por eso que al solicitar el número le indicamos al usuario que seleccione un número del 1 al 7, en vez del 1 al 5.

    case 6:
    case 7: // Agrupados sin break
        alert("¡Six Seven!");
        break;

    // Mostramos el mensaje de error mediante "alert" cuando el usuario se salga fuera del rango establecido
    default:
        alert("Error: El valor está fuera del rango establecido o no es numérico.")

}