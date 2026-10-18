/*
(Bucle while o do while) 

Crea un script que simule el acceso a un cajero automático. 
El sistema tiene un PIN correcto almacenado en una constante (por ejemplo, 1234). 

El usuario tiene hasta 3 intentos para introducir el PIN correcto usando prompt(). 
Si acierta, se muestra un mensaje de bienvenida. 
Si falla los 3 intentos, se bloquea el acceso con un mensaje de "Tarjeta bloqueada". 

El script debe usar un bucle “while” o “do while” para controlar los intentos. 

Cambia el tipo de bucle. Si has usado “while” por “do while”, o viceversa.


-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
EJERCICIO UTILIZANDO "WHILE"
(lo dejamos comentado para que no interfiera con el nuevo "DO WHILE" de abajo)
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------

// Almacenamos el PIN en una constante.
const PIN = "1234";  // Lo guardamos como texto porque promt() devuelve texto
let i = 0;
let acierto = false;  // Este es el estado inicial. Es falso por defecto, cambia a TRUE solo si el PIN es correcto 


// El bucle se ejecuta MIENTRAS(WHILE) los intentos sean <3 y no se haya acertado

while (i < 3 && !acierto) {  
    let value = prompt("Introduce el PIN: ");

    if (value === PIN) { // Si el valor introducido es EXACTAMENTE (===) el PIN 
        acierto = true;  // Acierto cambia a true y deja acceder
    } else {
        i++; // Si falla, sumamos un intento
        alert("PIN incorrecto"); // y mostramos un msg 
    }
}

// Cuando sale del bucle comprobamos si salió por haber acertado o por gastar los intentos
if (acierto) {  
    alert("PIN correcto. Bienvenido al sistema")
} else {
    alert("Tarjeta bloqueada. Has utilizado 3 intentos.")
}

*/


/* 
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
EJERCICIO UTILIZANDO "DO WHILE"
-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
*/

// Igual que antes, almacenamos el PIN en una constante.
const PIN = "1234";

let intentos = 0;
let acierto = false;
// Igual que antes, este es el estado inicial. 
// Es falso por defecto, cambia a TRUE solo si el PIN es correcto

// Creamos el "DO WHILE" que significa:

// Hazlo...
do {

    let valor = prompt("Introduce el PIN:");   // Solicitamos el PIN e incrementamos los intentos
    intentos++;

    if (valor === PIN) {   // Si el PIN es correcto, "acierto" cambia a true.
        acierto = true;  

    } else {               // Si no es correcto, mostramos el mensaje con un alert
        alert("PIN incorrecto");

    }

    // ... hasta que los intentos sean menores de 3 y !acierto, es decir, que "acierto" sea true"
} while (intentos < 3 && !acierto);


// Cremos un "IF" para mostrar si ha podido acceder o no

// Si en los anteriores tres intentos acierta, puede acceder
if (acierto) {
    alert("PIN correcto. Bienvenido al sistema");

// Si en esos tres intentos falla, la tarjeta queda bloqueada
} else {
    alert("Tarjeta bloqueada. Has utilizado 3 intentos.");

}
