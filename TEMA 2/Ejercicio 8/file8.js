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
        alert ("Two)")
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