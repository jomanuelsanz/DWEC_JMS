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
const MULTIPLO = 3;


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

