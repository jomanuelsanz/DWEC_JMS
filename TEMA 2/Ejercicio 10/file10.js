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



// ------------------------------------------------------------------------------------------------


// MODIFICACIÓN: Haz el mismo ejercicio utilizando do...while.
const PIN = "1234";

let intentos = 0;
let acierto = false;

do {

    let valor = prompt("Introduce el PIN:");

    intentos++;

    if (valor === PIN) {

        acierto = true;

    } else {

        alert("PIN incorrecto");

    }

} while (intentos < 3 && !acierto);


if (acierto) {

    alert("PIN correcto. Bienvenido al sistema");

} else {

    alert("Tarjeta bloqueada.");

}


// ------------------------------------------------------------------------------------------------


// MODIFICACIÓN: MOSTRAR CUÁNTOS INTENTOS QUEDAN

const PIN = "1234";

let intentos = 0;
let acierto = false;

while (intentos < 3 && !acierto) {

    let valor = prompt("Introduce el PIN:");

    intentos++;

    if (valor === PIN) {

        acierto = true;

    } else {

        let restantes = 3 - intentos;

        alert("PIN incorrecto. Te quedan " + restantes + " intentos.");

    }
}

if (acierto) {

    alert("Bienvenido");

} else {

    alert("Tarjeta bloqueada.");

}

// ------------------------------------------------------------------------------------------------

// MODIFICACIÓN: Utilizar break para salir del bucle aunque la condición siga siendo verdadera.

const PIN = "1234";

let intentos = 0;

while (true) {

    let valor = prompt("Introduce el PIN:");

    intentos++;

    if (valor === PIN) {

        alert("PIN correcto");
        break;

    }

    alert("PIN incorrecto");

    if (intentos === 3) {

        alert("Tarjeta bloqueada");
        break;

    }
}


// ------------------------------------------------------------------------------------------------

// MODIFICACIÓN: Permitir cancelar 

const PIN = "1234";

let intentos = 0;
let acierto = false;

while (intentos < 3 && !acierto) {

    let valor = prompt("Introduce el PIN:");

    // Si pulsa Cancelar
    if (valor === null) {
        break;
    }

    intentos++;

    if (valor === PIN) {

        acierto = true;

    } else {

        alert("PIN incorrecto");

    }
}

if (acierto) {

    alert("Bienvenido");

} else if (intentos === 3) {

    alert("Tarjeta bloqueada");

}

// ------------------------------------------------------------------------------------------------

// MODIFICACIÓN: Mostrar el número de intentos 

const PIN = "1234";

let intentos = 0;
let acierto = false;

while (intentos < 3 && !acierto) {

    intentos++;

    let valor = prompt("Intento " + intentos + "/3. Introduce el PIN:");

    if (valor === PIN) {

        acierto = true;

    } else {

        alert("PIN incorrecto");

    }
}

if (acierto) {

    alert("PIN correcto. Bienvenido");

} else {

    alert("Tarjeta bloqueada");

}

// ------------------------------------------------------------------------------------------------

// MODIFICACIÓN: Utilizar continue 

let intentos = 0;

while (intentos < 3) {

    intentos++;

    let valor = prompt("Introduce el PIN:");

    if (valor === null) {
        continue;
    }

    if (valor === "1234") {
        alert("PIN correcto");
        break;
    }

    alert("PIN incorrecto");
}

// ------------------------------------------------------------------------------------------------

// MODIFICACIÓN: típico ejercicio de While: "Pedir un número hasta que sea mayor que 100."

let numero;

do {

    numero = prompt("Introduce un número mayor que 100:");

} while (numero <= 100 && numero);

alert("Número correcto: " + numero);