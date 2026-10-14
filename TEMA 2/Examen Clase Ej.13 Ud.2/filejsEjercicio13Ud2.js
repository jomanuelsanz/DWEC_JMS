/* (Funciones) 

Crea un script para realizar un saludo personalizado.

Para ello crearemos una función que recibe dos parámetros:
    • Nombre.
    • Es un parámetro opcional que puede recibir en minúsculas masculino o femenino.
    Si no recibe nada, se indica el valor por defecto “no especificado”.

El script pedirá por el prompt el nombre de la persona y el género. Vamos a crear otra
función que valida si hay cadenas en blanco. 

Ahora esta función que valida las cadenas en blanco tendrá el formato de expresión de función.

En función de los parámetros recibidos
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


Ahora crea una función flecha con el saludo personalizado que obtenga el texto correspondiente de “Bienvenido”, “Bienvenida” o “Bienvenid@” en función del género. 
Ahora la función con dos parámetros llama a esta función para generar el tratamiento según el género.

*/

// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------


/*
------------------------------------------------------------------------------------------
FUNCIÓN PARA VALIDAR CADENAS EN BLANCO (Expresión de función como solicita el ejercicio)
-----------------------------------------------------------------------------------------
Esta función recibe un texto como parámetro.
Devuelve true si el texto está vacío o solo contiene espacios.
Devuelve false si contiene algún carácter.
*/

function estaEnBlanco(texto) {
    return texto.trim() ==="";  // Trim elimina los espaciones del principio y del final
}

/*
-------------------------------------------------------------------------------------------
FUNCIÓN PARA CREAR EL SALUDO (FORMATO FUNCIÓN - 
La hicimos para el ejercicicio en clase. La dejamos comentada y abajo la escribimos en formato flecha como solicita el ejercicio)
-------------------------------------------------------------------------------------------

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
*/

/*
------------------------------------------------------------------------------
FUNCIÓN PARA CREAR EL SALUDO (FORMATO FLECHA, como solicita el ejercicio)
------------------------------------------------------------------------------
Creamos la función flecha llamada "saludar".

Recibe dos parámetros:
    - nombre
    - genero

El parámetro "genero" es opcional. Si no se proporciona, tendrá el valor "no especificado".
*/

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

/*
--------------------------------------------------
PEDIMOS LOS DATOS AL USUARIO
--------------------------------------------------
*/

// Pedimos el nombre al usuario con promt:
let nombre = prompt("Introduce tu nombre: ");

// Pedimos el género con otro promt. Puede responder (masculino, femenino ó dejarlo en blanco)
let genero = prompt("Introduce tu género (masculino, femenino ó 'dejarlo en blanco' y pulsar aceptar)") 

/*
--------------------------------------------------
COMPROBAMOS SI EL NOMBRE ESTÁ EN BLANCO
--------------------------------------------------
Primero comprobamos el nombre. 
Si está en blanco, mostramos mensaje de error y NO llamamos a la función saludar()
*/

if (estaEnBlanco(nombre)) {
    alert("Error: el nombre no puede estar en blanco");

} else {
    
    // --------------------------------------------------
    // COMPROBAMOS SI EL GÉNERO ESTÁ EN BLANCO
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
