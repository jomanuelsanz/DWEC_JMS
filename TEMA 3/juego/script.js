
// Esperamos a que el HTML esté cargado.
// El atributo defer también permite que el script se ejecute
// después de analizar el documento HTML.

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos los elementos que utilizaremos.
    const formulario = document.getElementById("formulario-perfil");
    const mensaje = document.getElementById("mensaje");

    // Por ahora, solo comprobamos que el formulario responde.
    formulario.addEventListener("submit", function (evento) {
        // Evitamos que el formulario recargue la página.
        evento.preventDefault();

        mensaje.textContent = "Formulario preparado. La validación se añadirá después.";
    });
});
