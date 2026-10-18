/*
(Bucle for) 
Tabla de multiplicar especial. 
Crea un script que genere una tabla de multiplicar del 1 al 10, usando dos bucles for anidados.
La tabla actual se detiene y pasa a la siguiente cuando el producto sea múltiplo de una constante almacenada en el script (por ejemplo, múltiplos de 3). 


Ahora solo permitimos que se muestren los productos con un resultado par. 
Esto no detiene la tabla actual. 
Solamente se ignora la operación con resultado “impar” y pasamos a la siguiente iteración del bucle interno hasta que se alcance el múltiplo deseado, o finalicen todas las operaciones. 
Es obligatorio usar break o continue en este apartado.

Antes de cada tabla, aparecerá un confirm que permite al usuario finalizar el bucle y el script antes de tiempo.
*/

// Definimos la constante. En mi caso: 5.
const MULTIPLO = 5;


// Creamos el primer bucle "for"
// Empieza en 1, hasta <= 10 y va incrementando
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


    // Creamos el segundo bucle "for"
    // Igual que el anterior, empieza en 1, hasta <= 10 y va incrementando
    for (let j = 1; j <= 10; j++) {

        // Calculamos el producto, multiplicación de "i" * "j"
        let producto = i * j;


        // LO MODIFICACIÓN QUE SE SOLICITA EN EL EJERCICIO:
        // Si el producto es impar, lo saltamos. 
        // Es decir, si el resto (%) de dividir el producto entre 2, es distinto de cero (!== 0), lo saltamos pero utilizando el "continue".
        // Con el "continue", en lugar de detenerse, debe saltar ese resultado y continuar con el siguiente
        if (producto % 2 !== 0) {
            continue;
        }


        // Si el producto es múltiplo de 5 terminamos la tabla con "break"
        if (producto % MULTIPLO === 0) {
            break;
        }


        // Mostramos el resultado con "document.write" y con un "<br> para saltar línea"
        document.write(
            i + " x " + j + " = " + producto + "<br>"
        );
    }
}