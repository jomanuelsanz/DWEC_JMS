/* (Bucle while o do while) 

Crea un script que simule el acceso a un cajero automático.

El sistema tiene un PIN correcto almacenado en una constante (por ejemplo, 1234). 
El usuario tiene hasta 3 intentos para introducir el PIN correcto usando prompt(). 
Si acierta, se muestra un mensaje de bienvenida. 
Si falla los 3 intentos, se bloquea el acceso con un mensaje de "Tarjeta bloqueada". 
El script debe usar un bucle “while” o “do while” para controlar los intentos.
*/

const PIN = "1234";  //Lo guardamos como texto porque promt() devuelve texto
let i = 0;
let acierto = false;  // Estado inicial. Es falso por defecto, cambia a TRUE solo si el PIN es correcto 

// El bucle se ejecuta MIENTRAS(WHILE) los intentos sean <3 y no se haya acertado
while (i < 3 && !acierto) {  
    let value = prompt("Introduce el PIN: ");

    if (value === PIN) { // Si el valor introducido es EXACTAMENTE (===) el PIN 
        acierto = true;  // Acierto cambia a true
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

