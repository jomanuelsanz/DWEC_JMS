/*
(Funciones) 

Crea un script para realizar un saludo personalizado.

Para ello crearemos una función que recibe dos parámetros:
    • Nombre.
    • Es un parámetro opcional que puede recibir en minúsculas masculino o femenino.
    Si no recibe nada, se indica el valor por defecto “no especificado”.

El script pedirá por el prompt el nombre de la persona y el género. Vamos a crear otra
función que valida si hay cadenas en blanco. En función de los parámetros recibidos
tendremos el siguiente resultado:

    • Si el nombre está en blanco, directamente se muestra un mensaje de error antes de
llamar a la función con el saludo.


    • Si el nombre no está en blanco. En función del género tendremos el siguiente
resultado en la función con dos parámetros que se explicaba al comienzo del
enunciado.

        o Si el género no está en blanco, se llama a la función con el saludo con dos
        parámetros (nombre y género). El resultado será:
            ▪ "Bienvenido, NOMBRE" si el género es "masculino".
            ▪ "Bienvenida, NOMBRE" si el género es "femenino".

        o Si el género está en blanco, se llama a la función con el saludo con un
        parámetro (nombre). “Bienvenid@, NOMBRE"

------------------------------------------------------------------------------------------------

*/

// --------------------------------------------------
// 1. FUNCIÓN PARA VALIDAR CADENAS EN BLANCO
// --------------------------------------------------
// Esta función recibe un texto como parámetro.
// Devuelve true si el texto está vacío o solo contiene espacios.
// Devuelve false si contiene algún carácter.

function estaEnBlanco(texto) {
    return texto.trim() ==="";  // Trim elimina los espaciones del principio y del final
}


// --------------------------------------------------
// 2. FUNCIÓN PARA CREAR EL SALUDO
// --------------------------------------------------
// Esta función recibe 2 parámetros:
//    - nombre:  nombre de la persona
//    - genero:  puede ser "masculino" o "femenino"
// El segundo parámetro es opcional, si no se recibe, su valor será "no especificado"

function saludar(nombre, genero = "no especificado") {
    // Comprobamos el género recibido
    if (genero === "masculino") {
        
        // Si es masculino, mostramos "Bienvenido"
        return "Bienvenido, " + nombre;

    } else if (genero === "femenino") {

        // Si es femenino, mostramos "Bienvenida"
        return "Bienvenida, " + nombre

    } else {
        
        // Si no se ha especificado, mostramos "Bienvenid@"
        return "Bienvenid@, " + nombre;
    }
}


// --------------------------------------------------
// 3. PEDIMOS LOS DATOS AL USUARIO
// --------------------------------------------------

// Pedimos el nombre al usuario con promt:
let nombre = prompt("Introduce tu nombre: ");

// Pedimos el género con otro promt. Puede responder (masculino, femenino ó dejarlo en blanco)
let genero = prompt("Introduce tu género (masculino, femenino o dejarlo en blanco") 


// --------------------------------------------------
// 4. COMPROBAMOS SI EL NOMBRE ESTÁ EN BLANCO
// --------------------------------------------------
// Primero comprobamos el nombre. 
// Si está en blanco, mostramos mensaje de error y NO llamamos a la función saludar()

if (estaEnBlanco(nombre)) {
    alert("Error: el nombre no puede estar en blanco");

} else {
    
    // --------------------------------------------------
    // 5. COMPROBAMOS SI EL GÉNERO ESTÁ EN BLANCO
    // --------------------------------------------------

    if (estaEnBlanco(genero)) {
        // Si el género está en blanco, llamamos a saludar() sólo con el nombre
        // Como no hay un segundo parámetro, cogerá por defecto "no especificado"
        alert(saludar(nombre));

    } else {
        // Si el género no está en blanco, llamamos a saludar() con nombre y género
        alert(saludar(nombre, genero));
    }

}




// -------------------------------------------------------------------------------------------
// MODIFICACIÓN // Misma lógica pero cambiando las funciones (function) por funciones flecha
// -------------------------------------------------------------------------------------------

```javascript
// Ejercicio 13 - Funciones
// Saludo personalizado utilizando funciones flecha


// --------------------------------------------------
// 1. FUNCIÓN PARA VALIDAR CADENAS EN BLANCO
// --------------------------------------------------

// Creamos una función flecha llamada estaEnBlanco.
// Recibe un parámetro llamado "texto".
//
// Como la función solo tiene una instrucción que devuelve
// un resultado, podemos escribirla sin llaves ni return.
//
// texto.trim() elimina los espacios del principio y del final.
// Después comprobamos si el resultado es igual a "".

const estaEnBlanco = texto => texto.trim() === "";


// --------------------------------------------------
// 2. FUNCIÓN PARA CREAR EL SALUDO
// --------------------------------------------------

// Creamos una función flecha llamada "saludar".
//
// Recibe dos parámetros:
// - nombre
// - genero
//
// El parámetro "genero" es opcional.
// Si no se proporciona, tendrá el valor "no especificado".

const saludar = (nombre, genero = "no especificado") => {

    // Comprobamos si el género es masculino.
    if (genero === "masculino") {

        // Si es masculino, devolvemos "Bienvenido".
        return "Bienvenido, " + nombre;

    } else if (genero === "femenino") {

        // Si es femenino, devolvemos "Bienvenida".
        return "Bienvenida, " + nombre;

    } else {

        // Si no se ha especificado el género,
        // devolvemos "Bienvenid@".
        return "Bienvenid@, " + nombre;
    }
};


// --------------------------------------------------
// 3. PEDIMOS LOS DATOS AL USUARIO
// --------------------------------------------------

// Pedimos el nombre mediante un prompt.
let nombre = prompt("Introduce tu nombre:");


// Pedimos el género mediante otro prompt.
//
// El usuario puede escribir:
// - masculino
// - femenino
// - dejarlo en blanco
let genero = prompt("Introduce tu género (masculino/femenino):");


// --------------------------------------------------
// 4. COMPROBAMOS SI EL NOMBRE ESTÁ EN BLANCO
// --------------------------------------------------

// Primero comprobamos si el nombre está vacío.
//
// Si está en blanco, mostramos un mensaje de error.
// En este caso NO llamamos a la función saludar().

if (estaEnBlanco(nombre)) {

    alert("Error: el nombre no puede estar en blanco.");

} else {

    // --------------------------------------------------
    // 5. COMPROBAMOS SI EL GÉNERO ESTÁ EN BLANCO
    // --------------------------------------------------

    if (estaEnBlanco(genero)) {

        // Si el género está en blanco,
        // llamamos a saludar() solamente con el nombre.
        //
        // Al no pasar el segundo parámetro,
        // se utiliza automáticamente el valor por defecto:
        // "no especificado".

        alert(saludar(nombre));

    } else {

        // Si el género NO está en blanco,
        // llamamos a saludar() pasando los dos parámetros:
        // nombre y género.

        alert(saludar(nombre, genero));
    }
}
```
