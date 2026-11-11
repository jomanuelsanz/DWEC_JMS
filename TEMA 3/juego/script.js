
// Esperamos a que el HTML esté completamente cargado.
document.addEventListener("DOMContentLoaded", function () {

    // Seleccionamos los elementos del HTML.
    const formulario = document.getElementById("formulario-perfil");
    const nombre = document.getElementById("nombre");
    const fechaNacimiento = document.getElementById("fecha-nacimiento");
    const mensaje = document.getElementById("mensaje");
    const juego = document.getElementById("juego");
    const bienvenida = document.getElementById("bienvenida");

    const puntuacionHTML = document.getElementById("puntuacion");
    const mejorPuntuacionHTML = document.getElementById("mejor-puntuacion");
    const operacionHTML = document.getElementById("operacion");
    const respuestaHTML = document.getElementById("respuesta");
    const botonComprobar = document.getElementById("comprobar");
    const botonPista = document.getElementById("pista");
    const botonNuevaOperacion = document.getElementById("nueva-operacion");
    const botonAyuda = document.getElementById("ayuda");
    const resultadoHTML = document.getElementById("resultado");
    const textoPista = document.getElementById("texto-pista");

    // Variables principales del juego.
    const edadMinima = 18;
    let puntuacion = 0;
    let nombreJugador = "";
    let operacionActual;
    let pistaUtilizada = false;
    let respuestaCorrecta = false;

    // Array donde guardaremos las operaciones acertadas.
    let historial = [];
    // Recuperamos la mejor puntuación guardada en el navegador.
let mejorPuntuacion = Number(localStorage.getItem("mejorPuntuacion")) || 0;
mejorPuntuacionHTML.textContent = mejorPuntuacion;

// Recuperamos el nombre guardado en la cookie.
let nombreGuardado = leerCookie("nombreJugador");

if (nombreGuardado !== "") {
    nombre.value = nombreGuardado;
}

// Función para guardar el nombre en una cookie.
function guardarCookie(nombre) {
    document.cookie = "nombreJugador=" + encodeURIComponent(nombre) + "; max-age=2592000; path=/";
}

// Función para leer una cookie.
function leerCookie(nombre) {
    let cookies = document.cookie.split("; ");

    for (let cookie of cookies) {
        let partes = cookie.split("=");

        if (partes[0] === nombre) {
            return decodeURIComponent(partes[1]);
        }
    }

    return "";
}

    // Validamos el formulario del perfil.
    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        nombreJugador = nombre.value.trim();

        if (nombreJugador === "") {
            mensaje.textContent = "Acceso denegado: introduce tu nombre.";
            juego.hidden = true;
            return;
        }

        if (fechaNacimiento.value === "") {
            mensaje.textContent = "Acceso denegado: introduce tu fecha de nacimiento.";
            juego.hidden = true;
            return;
        }

        let fechaJugador = new Date(fechaNacimiento.value + "T00:00:00");
        let fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0);

        if (isNaN(fechaJugador.getTime())) {
            mensaje.textContent = "Acceso denegado: la fecha no es válida.";
            juego.hidden = true;
            return;
        }

        if (fechaJugador >= fechaActual) {
            mensaje.textContent = "Acceso denegado: la fecha debe ser anterior a hoy.";
            juego.hidden = true;
            return;
        }

        let edad = fechaActual.getFullYear() - fechaJugador.getFullYear();

        if (
            fechaActual.getMonth() < fechaJugador.getMonth() ||
            (
                fechaActual.getMonth() === fechaJugador.getMonth() &&
                fechaActual.getDate() < fechaJugador.getDate()
            )
        ) {
            edad--;
        }

        if (edad < edadMinima) {
            mensaje.textContent = "Acceso denegado: debes tener al menos " + edadMinima + " años.";
            juego.hidden = true;
            return;
        }

        // Formateamos el nombre utilizando métodos de String.
        nombreJugador = nombreJugador.slice(0, 1).toUpperCase() +
                        nombreJugador.slice(1).toLowerCase();
        // Guardamos el nombre del jugador en una cookie.
        guardarCookie(nombreJugador);

        mensaje.textContent = "Perfil creado correctamente.";

        bienvenida.textContent = "¡Bienvenido, " + nombreJugador + "! Tienes " + edad + " años.";

        // Cambiamos el estilo según la edad.
        bienvenida.classList.remove("color-joven");
        bienvenida.classList.remove("color-experimentado");

        if (edad < 30) {
            bienvenida.classList.add("color-joven");
        } else {
            bienvenida.classList.add("color-experimentado");
        }

        juego.hidden = false;

        // Comenzamos la partida y generamos la primera operación.
        puntuacion = 0;
        historial = [];
        puntuacionHTML.textContent = puntuacion;

        // Guardamos la puntuación actual de la sesión.
        sessionStorage.setItem("puntuacion", puntuacion);
        generarOperacion();
    });

    // Generamos una operación matemática aleatoria.
    function generarOperacion() {

        // Elegimos un tipo de operación aleatorio.
        let tipo = Math.floor(Math.random() * 4);

        // Generamos dos números entre 1 y 10.
        let numero1 = Math.round(Math.random() * 9) + 1;
        let numero2 = Math.round(Math.random() * 9) + 1;

        if (tipo === 0) {
            operacionActual = {
                texto: numero1 + " + " + numero2,
                respuesta: numero1 + numero2,
                pista: "Suma los dos números."
            };

        } else if (tipo === 1) {

            // Evitamos que la resta dé un resultado negativo.
            if (numero1 < numero2) {
                let temporal = numero1;
                numero1 = numero2;
                numero2 = temporal;
            }

            operacionActual = {
                texto: numero1 + " - " + numero2,
                respuesta: numero1 - numero2,
                pista: "Resta el número pequeño al número grande."
            };

        } else if (tipo === 2) {

            operacionActual = {
                texto: numero1 + " × " + numero2,
                respuesta: numero1 * numero2,
                pista: "Multiplica el primer número por el segundo."
            };

        } else {

            // Creamos una división cuyo resultado siempre sea exacto.
            let divisor = numero2;
            let cociente = Math.round(Math.random() * 9) + 1;
            let dividendo = divisor * cociente;

            operacionActual = {
                texto: dividendo + " ÷ " + divisor,
                respuesta: cociente,
                pista: "Piensa qué número multiplicado por el divisor da el dividendo."
            };
        }

        // Mostramos la operación y limpiamos los campos anteriores.
        operacionHTML.textContent = operacionActual.texto + " = ?";
        respuestaHTML.value = "";
        resultadoHTML.textContent = "";
        textoPista.textContent = "";

        pistaUtilizada = false;
        respuestaCorrecta = false;
    }

    // Comprobamos la respuesta introducida por el jugador.
    botonComprobar.addEventListener("click", function () {

        if (respuestaCorrecta) {
            resultadoHTML.textContent = "Ya has resuelto esta operación. Pulsa Nueva operación.";
            return;
        }

        if (respuestaHTML.value === "") {
            resultadoHTML.textContent = "Introduce una respuesta.";
            return;
        }

        let respuestaJugador = Number(respuestaHTML.value);

        if (respuestaJugador === operacionActual.respuesta) {

            if (pistaUtilizada) {
                puntuacion = puntuacion + 5;
                resultadoHTML.textContent = "¡Correcto! Has conseguido 5 puntos.";
            } else {
                puntuacion = puntuacion + 10;
                resultadoHTML.textContent = "¡Correcto! Has conseguido 10 puntos.";
            }

            puntuacionHTML.textContent = puntuacion;
            respuestaCorrecta = true;

            // Guardamos la puntuación actual en sessionStorage.
            sessionStorage.setItem("puntuacion", puntuacion);

            // Si superamos el récord, lo guardamos en localStorage.
            if (puntuacion > mejorPuntuacion) {
            mejorPuntuacion = puntuacion;
            localStorage.setItem("mejorPuntuacion", mejorPuntuacion);
            mejorPuntuacionHTML.textContent = mejorPuntuacion;
            }

            // Guardamos la operación acertada en el array.
            historial.push(operacionActual.texto + " = " + operacionActual.respuesta);

        } else {
            resultadoHTML.textContent = "Respuesta incorrecta. Puedes solicitar una pista.";
        }
    });

    // Mostramos una pista de la operación actual.
    botonPista.addEventListener("click", function () {

        if (respuestaCorrecta) {
            textoPista.textContent = "Ya has resuelto esta operación.";
            return;
        }

        textoPista.textContent = operacionActual.pista;
        pistaUtilizada = true;
    });

    // Generamos otra operación cuando se pulsa el botón.
    botonNuevaOperacion.addEventListener("click", function () {
        generarOperacion();
    });

    // Abrimos una ventana adicional con información del juego.
    botonAyuda.addEventListener("click", function () {

    let ventana = window.open("", "ventanaAyuda", "width=400,height=300");

    if (ventana) {
        ventana.document.write("<h1>Ayuda del juego</h1>");
        ventana.document.write("<p>Resuelve las operaciones matemáticas para conseguir puntos.</p>");
        ventana.document.write("<p>Respuesta correcta sin pista: 10 puntos.</p>");
        ventana.document.write("<p>Respuesta correcta con pista: 5 puntos.</p>");
        ventana.document.write("<p>Tu puntuación actual es: " + puntuacion + "</p>");
    }
    });
    
});
