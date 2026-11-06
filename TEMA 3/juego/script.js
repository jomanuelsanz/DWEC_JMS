
// Esperamos a que el HTML esté completamente cargado.
document.addEventListener("DOMContentLoaded", function () {

    // Seleccionamos los elementos del HTML que necesitamos.
    const formulario = document.getElementById("formulario-perfil");
    const nombre = document.getElementById("nombre");
    const fechaNacimiento = document.getElementById("fecha-nacimiento");
    const mensaje = document.getElementById("mensaje");
    const juego = document.getElementById("juego");
    const bienvenida = document.getElementById("bienvenida");

    // Establecemos la edad mínima para poder jugar.
    const edadMinima = 18;

    // Escuchamos el envío del formulario.
    formulario.addEventListener("submit", function (evento) {

        // Evitamos que el formulario recargue la página.
        evento.preventDefault();

        // Obtenemos el nombre eliminando los espacios sobrantes.
        let nombreJugador = nombre.value.trim();

        // Comprobamos que el nombre no esté vacío.
        if (nombreJugador === "") {
            mensaje.textContent = "Acceso denegado: introduce tu nombre.";
            juego.hidden = true;
            return;
        }

        // Comprobamos que se haya introducido una fecha.
        if (fechaNacimiento.value === "") {
            mensaje.textContent = "Acceso denegado: introduce tu fecha de nacimiento.";
            juego.hidden = true;
            return;
        }

        // Convertimos la fecha introducida en un objeto Date.
        let fechaJugador = new Date(fechaNacimiento.value + "T00:00:00");

        // Obtenemos la fecha actual.
        let fechaActual = new Date();

        // Ponemos las horas, minutos, segundos y milisegundos a cero.
        // Así comparamos solamente el día, mes y año.
        fechaActual.setHours(0, 0, 0, 0);

        // Comprobamos que la fecha sea válida.
        if (isNaN(fechaJugador.getTime())) {
            mensaje.textContent = "Acceso denegado: la fecha no es válida.";
            juego.hidden = true;
            return;
        }

        // Comprobamos que la fecha de nacimiento sea anterior a hoy.
        if (fechaJugador >= fechaActual) {
            mensaje.textContent = "Acceso denegado: la fecha debe ser anterior a hoy.";
            juego.hidden = true;
            return;
        }

        // Calculamos la edad restando los años.
        let edad = fechaActual.getFullYear() - fechaJugador.getFullYear();

        // Comprobamos si todavía no ha cumplido años este año.
        if (
            fechaActual.getMonth() < fechaJugador.getMonth() ||
            (
                fechaActual.getMonth() === fechaJugador.getMonth() &&
                fechaActual.getDate() < fechaJugador.getDate()
            )
        ) {
            // Si todavía no ha cumplido años, restamos uno.
            edad--;
        }

        // Comprobamos que el jugador tenga la edad mínima.
        if (edad < edadMinima) {
            mensaje.textContent = "Acceso denegado: debes tener al menos " + edadMinima + " años.";
            juego.hidden = true;
            return;
        }

        // Formateamos el nombre:
        // Primera letra en mayúscula y el resto en minúsculas.
        nombreJugador = nombreJugador.slice(0, 1).toUpperCase() +
                        nombreJugador.slice(1).toLowerCase();

        // Mostramos el mensaje de bienvenida.
        mensaje.textContent = "Perfil creado correctamente.";

        // Mostramos el nombre y la edad del jugador.
        bienvenida.textContent = "¡Bienvenido, " + nombreJugador + "! Tienes " + edad + " años.";

        // Eliminamos las clases anteriores por si se vuelve a enviar el formulario.
        bienvenida.classList.remove("color-joven");
        bienvenida.classList.remove("color-experimentado");

        // Personalizamos el color del mensaje según la edad.
        if (edad < 30) {
            // Los jugadores de 18 a 29 años tendrán este estilo.
            bienvenida.classList.add("color-joven");
        } else {
            // Los jugadores de 30 años o más tendrán este otro estilo.
            bienvenida.classList.add("color-experimentado");
        }

        // Mostramos la zona de juego.
        juego.hidden = false;

    });

});
