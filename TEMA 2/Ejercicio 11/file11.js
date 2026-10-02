/* (Bucle for) 

Tabla de multiplicar especial. 
Crea un script que genere una tabla de multiplicar del 1 al 10, usando dos bucles for anidados:

• La tabla actual se detiene y pasa a la siguiente cuando el producto sea múltiplo de
una constante almacenada en el script (por ejemplo, múltiplos de 3).

• Antes de cada tabla, aparecerá un confirm que pregunta si queremos mostrar la
siguiente tabla y permite al usuario finalizar el bucle y el script antes de tiempo.

Muestra los resultados válidos con document.write(). */

// ---------------------------------------------------------------------------------------------------

// Constante que indica el múltiplo que detiene la tabla
const MULTIPLO = 5;


// Primer bucle for
// i representa el número de la tabla
for (let i = 1; i <= 10; i++) {

    // Preguntamos antes de mostrar cada tabla
    let continuar = confirm(
        "¿Quieres mostrar la tabla del " + i + "?"
    );

    // Si pulsa Cancelar, terminamos el bucle
    if (!continuar) {
        break;
    }


    // Mostramos el título de la tabla
    document.write("<h2>Tabla del " + i + "</h2>");


    // Segundo bucle for
    // j representa el número por el que multiplicamos
    for (let j = 1; j <= 10; j++) {

        // Calculamos el producto
        let producto = i * j;


        // Comprobamos si el producto es múltiplo de 3
        // Si el resto es 0, significa que es múltiplo
        if (producto % MULTIPLO === 0) {

            // Terminamos la tabla actual
            break;
        }


        // Mostramos el resultado
        document.write(
            i + " x " + j + " = " + producto + "<br>"
        );
    }
}

// ----------------------------------------------------------------------------------------

/* MODIFICACIÓN: CAMBIAR BREAK POR "CONTINUE"
Ahora la tabla no debe detenerse cuando el producto sea múltiplo de MULTIPLO
En lugar de detenerse, debe saltar ese resultado y continuar con el siguiente */

const MULTIPLO = 5;


Primer bucle
for (let i = 1; i <= 10; i++) {

    let continuar = confirm(
        "¿Quieres mostrar la tabla del " + i + "?"
    );

    if (!continuar) {
        break;
    }

    document.write("<h2>Tabla del " + i + "</h2>");


    Segundo bucle
    for (let j = 1; j <= 10; j++) {

        let producto = i * j;

        // Si es múltiplo, saltamos esta vuelta
        if (producto % MULTIPLO === 0) {
            continue;
        }

        // Solo se muestran los que NO son múltiplos
        document.write(
            i + " x " + j + " = " + producto + "<br>"
        );
    }
}

// ----------------------------------------------------------------------------------------

// BREAK significa "salgo inmediatamente del bucle"
// CONTINUE "me salto esta vuelta y sigo con el bucle"

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------


/* MODIFICACIÓN: MOSTRAR SÓLO LOS MÚLTIPLOS
Modifica el programa para que únicamente se muestren los productos que sean múltiplos de MULTIPLO
*/

const MULTIPLO = 3;


for (let i = 1; i <= 10; i++) {

    let continuar = confirm(
        "¿Quieres mostrar la tabla del " + i + "?"
    );

    if (!continuar) {
        break;
    }

    document.write("<h2>Tabla del " + i + "</h2>");


    for (let j = 1; j <= 10; j++) {

        let producto = i * j;

        // Si NO es múltiplo, saltamos esta vuelta
        if (producto % MULTIPLO !== 0) {
            continue;
        }

        // Aquí solo llegan los múltiplos
        document.write(
            i + " x " + j + " = " + producto + "<br>"
        );
    }
}


// ----------------------------------------------------------------------------------------

/* MODIFICACIÓN: Cambiar el rango.
Modifica el programa para que genere las tablas del 1 al 5 y cada tabla llegue hasta el multiplicador 20*/
const MULTIPLO = 5;


// Tablas del 1 al 5
for (let i = 1; i <= 5; i++) {

    let continuar = confirm(
        "¿Quieres mostrar la tabla del " + i + "?"
    );

    if (!continuar) {
        break;
    }

    document.write("<h2>Tabla del " + i + "</h2>");


    // Multiplicamos hasta 20
    for (let j = 1; j <= 20; j++) {

        let producto = i * j;

        if (producto % MULTIPLO === 0) {
            break;
        }

        document.write(
            i + " x " + j + " = " + producto + "<br>"
        );
    }
}

// ----------------------------------------------------------------------------------------

/* MODIFICACIÓN: EMPEZAR DESDE 10 y BAJAR HASTA 1:
Modifica el programa para mostrar las tablas del 10 al 1, en orden descendente. */

const MULTIPLO = 5;


// Empezamos en 10 y vamos bajando
for (let i = 10; i >= 1; i--) {

    let continuar = confirm(
        "¿Quieres mostrar la tabla del " + i + "?"
    );

    if (!continuar) {
        break;
    }

    document.write("<h2>Tabla del " + i + "</h2>");


    for (let j = 1; j <= 10; j++) {

        let producto = i * j;

        if (producto % MULTIPLO === 0) {
            break;
        }

        document.write(
            i + " x " + j + " = " + producto + "<br>"
        );
    }
}

// ----------------------------------------------------------------------------------------

/* MODIFICACIÓN: SALTOS DE 2 EN 2:
Haz que solamente se generen las tablas: 2, 4, 6, 8 ,10 */
const MULTIPLO = 5;


// i aumenta de 2 en 2
for (let i = 2; i <= 10; i += 2) {

    let continuar = confirm(
        "¿Quieres mostrar la tabla del " + i + "?"
    );

    if (!continuar) {
        break;
    }

    document.write("<h2>Tabla del " + i + "</h2>");


    for (let j = 1; j <= 10; j++) {

        let producto = i * j;

        if (producto % MULTIPLO === 0) {
            break;
        }

        document.write(
            i + " x " + j + " = " + producto + "<br>"
        );
    }
}

// ----------------------------------------------------------------------------------------

/* MODIFICACIÓN: No mostrar la tabla 5
Genera las tablas del 1 al 10, pero no muestres la tabla del 5.
El resto debe funcionar normalmente
*/

const MULTIPLO = 5;


for (let i = 1; i <= 10; i++) {

    // Si i es 5, saltamos esta vuelta
    if (i === 5) {
        continue;
    }

    let continuar = confirm(
        "¿Quieres mostrar la tabla del " + i + "?"
    );

    if (!continuar) {
        break;
    }

    document.write("<h2>Tabla del " + i + "</h2>");


    for (let j = 1; j <= 10; j++) {

        let producto = i * j;

        if (producto % MULTIPLO === 0) {
            break;
        }

        document.write(
            i + " x " + j + " = " + producto + "<br>"
        );
    }
}

// ----------------------------------------------------------------------------------------

/* MODIFICACIÓN: NO MOSTRAR PRODUCTOS PARES
Modifica el código para que solamente aparezcan los productos impares */
const MULTIPLO = 5;


for (let i = 1; i <= 10; i++) {

    let continuar = confirm(
        "¿Quieres mostrar la tabla del " + i + "?"
    );

    if (!continuar) {
        break;
    }

    document.write("<h2>Tabla del " + i + "</h2>");


    for (let j = 1; j <= 10; j++) {

        let producto = i * j;

        // Si es par, lo saltamos
        if (producto % 2 === 0) {
            continue;
        }

        // Si es múltiplo de 5, terminamos la tabla
        if (producto % MULTIPLO === 0) {
            break;
        }

        document.write(
            i + " x " + j + " = " + producto + "<br>"
        );
    }
}

// ----------------------------------------------------------------------------------------

/* MODIFICACIÓN: NO MOSTRAR PRODUCTOS IMPARES
Modifica el código para que solamente aparezcan los productos pares */

const MULTIPLO = 5;


// Primer bucle
for (let i = 1; i <= 10; i++) {

    // Preguntamos si queremos mostrar la tabla
    let continuar = confirm(
        "¿Quieres mostrar la tabla del " + i + "?"
    );

    // Si pulsa Cancelar, terminamos el bucle
    if (!continuar) {
        break;
    }

    // Mostramos el título
    document.write("<h2>Tabla del " + i + "</h2>");


    // Segundo bucle
    for (let j = 1; j <= 10; j++) {

        // Calculamos el producto
        let producto = i * j;


        // Si el producto es impar, lo saltamos
        if (producto % 2 !== 0) {
            continue;
        }


        // Si el producto es múltiplo de 5,
        // terminamos la tabla
        if (producto % MULTIPLO === 0) {
            break;
        }


        // Mostramos el resultado
        document.write(
            i + " x " + j + " = " + producto + "<br>"
        );
    }
}

