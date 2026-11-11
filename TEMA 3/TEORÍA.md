# TeorIA y supuestos cambios para el examen práctico 
## Proyecto: Juego de matemáticas JMS

Esta guía recoge posibles modificaciones que podrían solicitarse durante el examen práctico de DWEC.

Esta es documentación complementaria para preparar el examen práctico generada con ayuda de IA. 
No forma parte de los requisitos obligatorios del enunciado de la práctica.

Los ejemplos utilizan como referencia la estructura del proyecto:

- `index.html`: estructura HTML.
- `script.js`: funcionamiento y lógica JavaScript.
- `styles.css`: estilos CSS.

**IMPORTANTE:** las ubicaciones indicadas se basan en la versión del proyecto desarrollada durante la práctica. Si se han cambiado nombres de variables o identificadores, habrá que adaptarlos.

---

# 1. Mostrar información por consola

**Posible enunciado:** Mostrar por consola el nombre del jugador, su edad y su puntuación.

**Archivo:** `script.js`

**Dónde buscarlo:**
- Dentro del evento `submit` del formulario, después de calcular la edad y validar el perfil.
- Para mostrar la puntuación, dentro del evento `click` del botón `botonComprobar`.

**Código para mostrar los datos del perfil:**

```javascript
// Mostrar información por consola.
console.log("Nombre: " + nombreJugador);
console.log("Edad: " + edad);
console.log("Puntuación: " + puntuacion);
```

Para mostrar información de una operación, dentro del evento `botonComprobar`:

```javascript
console.log("Operación: " + operacionActual.texto);
console.log("Respuesta correcta: " + operacionActual.respuesta);
console.log("Respuesta introducida: " + respuestaJugador);
```

**Recordatorio:**
- `console.log()`: muestra información.
- `console.warn()`: muestra una advertencia.
- `console.error()`: muestra un error.

La consola del navegador se abre pulsando F12 y seleccionando Console.

---

# 2. Redondear números (Math)

**Posible enunciado:** Modificar el cálculo de una operación para redondear su resultado.

**Archivo:** `script.js`

**Dónde buscarlo:**
- Dentro de la función `generarOperacion()`.
- Busca las líneas donde se calculan los números aleatorios.
- También puedes localizar el cálculo de la propiedad `respuesta` de `operacionActual`.

### Math.round()

Redondea al entero más cercano:

```javascript
let resultado = Math.round(4.6);

// Resultado: 5
```

### Math.floor()

Redondea hacia abajo:

```javascript
let resultado = Math.floor(4.9);

// Resultado: 4
```

### Math.ceil()

Redondea hacia arriba:

```javascript
let resultado = Math.ceil(4.1);

// Resultado: 5
```

### Diferencias

| Método | Ejemplo | Resultado |
|---|---:|---:|
| `Math.round()` | 4.6 | 5 |
| `Math.floor()` | 4.9 | 4 |
| `Math.ceil()` | 4.1 | 5 |

### Aplicación al juego

En `generarOperacion()`, actualmente utilizamos:

```javascript
let numero1 = Math.round(Math.random() * 9) + 1;
```

Podríamos sustituir `Math.round()` por `Math.floor()`:

```javascript
let numero1 = Math.floor(Math.random() * 10) + 1;
```

El resultado seguirá siendo un número entero entre 1 y 10.

**Otros métodos:**

```javascript
Math.max(5, 8, 3); // Devuelve 8.
Math.min(5, 8, 3); // Devuelve 3.
Math.abs(-10);     // Devuelve 10.
```

---

# 3. Cambiar el fondo según la edad

**Posible enunciado:** Si el jugador es menor de edad, cambiar el fondo a rojo. Si es mayor de edad, cambiarlo a verde.

**Archivo:** `script.js`

**Dónde buscarlo:**
- Dentro del evento `submit` del formulario.
- Localiza el bloque que comprueba:

```javascript
if (edad < edadMinima)
```

**Importante:** en el juego actual, si el jugador es menor de 18 años, se deniega el acceso mediante `return`. Por eso, para cambiar el fondo de los menores, hay que introducir el cambio dentro de ese bloque, antes del `return`.

```javascript
if (edad < edadMinima) {

    // Cambiamos el fondo si es menor de edad.
    document.body.style.backgroundColor = "red";

    mensaje.textContent = "Acceso denegado: debes tener al menos " + edadMinima + " años.";
    juego.hidden = true;
    return;
}
```

Para los jugadores que sí pueden acceder, busca el bloque que calcula los colores de bienvenida:

```javascript
if (edad < 30) {
    bienvenida.classList.add("color-joven");
} else {
    bienvenida.classList.add("color-experimentado");
}
```

Debajo puedes añadir:

```javascript
// Cambiamos el fondo para los jugadores mayores de edad.
document.body.style.backgroundColor = "green";
```

Otros ejemplos:

```javascript
document.body.style.backgroundColor = "lightblue";
document.body.style.color = "black";
```

---

# 4. Cambiar el color cuando acierta o falla

**Posible enunciado:** Si el jugador acierta, mostrar el mensaje en verde. Si falla, mostrarlo en rojo.

**Archivo:** `script.js`

**Dónde buscarlo:**
- Dentro del evento `click` de `botonComprobar`.
- Busca la condición:

```javascript
if (respuestaJugador === operacionActual.respuesta)
```

**Modificación:** dentro del `if`, después de mostrar el mensaje correcto:

```javascript
resultadoHTML.textContent = "¡Correcto! Has conseguido 10 puntos.";
resultadoHTML.style.color = "green";
```

Dentro del `else`, después de mostrar el mensaje de error:

```javascript
resultadoHTML.textContent = "Respuesta incorrecta. Puedes solicitar una pista.";
resultadoHTML.style.color = "red";
```

También podemos cambiar el fondo:

```javascript
// Si acierta.
resultadoHTML.style.backgroundColor = "lightgreen";

// Si falla.
resultadoHTML.style.backgroundColor = "lightcoral";
```

---

# 5. Cambiar estilos según la puntuación

**Posible enunciado:** Si el jugador consigue más de 50 puntos, cambiar el color del mensaje.

**Archivo:** `script.js`

**Dónde buscarlo:**
- Dentro del evento `click` de `botonComprobar`.
- Localiza el lugar donde se actualiza la puntuación:

```javascript
puntuacionHTML.textContent = puntuacion;
```

**Debajo, añadir:**

```javascript
if (puntuacion > 50) {
    puntuacionHTML.style.color = "green";
} else {
    puntuacionHTML.style.color = "black";
}
```

Podemos modificar también el tamaño:

```javascript
puntuacionHTML.style.fontSize = "20px";
```

---

# 6. Añadir, eliminar y comprobar clases CSS

**Posible enunciado:** Añadir una clase al mensaje de bienvenida dependiendo de la edad.

**Archivo:** `script.js`

**Dónde buscarlo:**
- Dentro del evento `submit`.
- Localiza el bloque donde se comprueba la edad y se añaden las clases `color-joven` y `color-experimentado`.

Añadir una clase:

```javascript
bienvenida.classList.add("color-joven");
```

Eliminar una clase:

```javascript
bienvenida.classList.remove("color-joven");
```

Comprobar si existe:

```javascript
if (bienvenida.classList.contains("color-joven")) {
    console.log("Tiene la clase color-joven.");
}
```

Alternar una clase:

```javascript
bienvenida.classList.toggle("resaltado");
```

**Archivo:** `styles.css`

**Dónde añadirlo:** al final del archivo.

```css
.resaltado {
    background-color: yellow;
    color: black;
}
```

---

# 7. Mostrar y ocultar elementos HTML

**Posible enunciado:** Ocultar la zona de juego cuando el acceso sea denegado.

**Archivo:** `script.js`

**Dónde buscarlo:**
- Dentro del evento `submit` del formulario.
- Busca las instrucciones `juego.hidden = true` y `juego.hidden = false`.

Ocultar:

```javascript
juego.hidden = true;
```

Mostrar:

```javascript
juego.hidden = false;
```

Otra posibilidad:

```javascript
// Ocultar.
juego.style.display = "none";

// Mostrar.
juego.style.display = "block";
```

---

# 8. Obtener y modificar elementos del DOM

**Posible enunciado:** Mostrar un mensaje personalizado en un párrafo.

**Archivo:** `script.js`

**Dónde buscarlo:**
- Al principio del evento `DOMContentLoaded`, en el bloque donde seleccionamos los elementos HTML.

Actualmente utilizamos:

```javascript
const mensaje = document.getElementById("mensaje");
```

Para seleccionar otro elemento:

```javascript
const miElemento = document.getElementById("mi-id");
```

Para modificar su texto:

```javascript
miElemento.textContent = "¡Bienvenido al juego!";
```

Otras propiedades:

```javascript
// Obtener el valor de un input.
let nombre = document.getElementById("nombre").value;

// Cambiar el texto de un elemento.
mensaje.textContent = "Perfil creado correctamente.";

// Insertar contenido HTML.
mensaje.innerHTML = "<strong>Perfil creado</strong>";
```

**Diferencias:**

- `value`: valor de un input.
- `textContent`: texto de un elemento.
- `innerHTML`: permite insertar contenido HTML.

---

# 9. Añadir eventos a los botones

**Posible enunciado:** Crear un botón que muestre un mensaje cuando el usuario haga clic.

**Archivo:** `index.html`

**Dónde añadirlo:**
- Dentro de la sección `<section id="juego">`.
- Junto a los demás botones del juego.

```html
<button type="button" id="boton-mensaje">Mostrar mensaje</button>
```

**Archivo:** `script.js`

**Dónde añadirlo:**
- Primero, en el bloque inicial donde seleccionamos elementos HTML:

```javascript
const botonMensaje = document.getElementById("boton-mensaje");
```

- Después, al final de `DOMContentLoaded`, junto a los demás eventos de los botones:

```javascript
botonMensaje.addEventListener("click", function () {
    alert("¡Bienvenido al juego!");
});
```

Otros eventos:

```javascript
// Cuando el usuario escribe.
input.addEventListener("input", function () {
    console.log(input.value);
});

// Cuando cambia el valor.
input.addEventListener("change", function () {
    console.log("El valor ha cambiado.");
});
```

---

# 10. Validar un formulario

**Posible enunciado:** Evitar que el formulario se envíe si el nombre está vacío.

**Archivo:** `script.js`

**Dónde buscarlo:**
- Dentro del evento `submit` de `formulario`.
- Al principio del evento, donde ya utilizamos `evento.preventDefault()`.

Ejemplo:

```javascript
formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    let nombreJugador = nombre.value.trim();

    if (nombreJugador === "") {
        mensaje.textContent = "Debes introducir un nombre.";
    } else {
        mensaje.textContent = "Nombre correcto.";
    }

});
```

**Importante:** no sustituyas todo el evento `submit` del juego por este ejemplo. Es una plantilla para adaptar a la validación existente.

---

# 11. Trabajar con Strings

**Posible enunciado:** Mostrar el nombre del jugador en mayúsculas.

**Archivo:** `script.js`

**Dónde buscarlo:**
- Dentro del evento `submit`.
- Localiza el bloque donde formateamos el nombre del jugador:

```javascript
nombreJugador = nombreJugador.slice(0, 1).toUpperCase() +
                nombreJugador.slice(1).toLowerCase();
```

Otros métodos:

```javascript
// Convertir a mayúsculas.
nombreJugador.toUpperCase();

// Convertir a minúsculas.
nombreJugador.toLowerCase();

// Eliminar espacios al principio y al final.
nombreJugador.trim();

// Obtener la longitud.
nombreJugador.length;

// Obtener una parte del texto.
nombreJugador.slice(0, 3);
```

---

# 12. Trabajar con fechas (Date)

**Posible enunciado:** Mostrar el año actual.

**Archivo:** `script.js`

**Dónde buscarlo:**
- Dentro del evento `submit`.
- Localiza las instrucciones donde creamos `fechaActual`:

```javascript
let fechaActual = new Date();
```

Añadir:

```javascript
let anio = fechaActual.getFullYear();

console.log("Año actual: " + anio);
```

Otros métodos:

```javascript
fechaActual.getMonth(); // Mes (enero = 0).
fechaActual.getDate();  // Día del mes.
fechaActual.getDay();   // Día de la semana (domingo = 0).
```

Para eliminar la hora al comparar fechas:

```javascript
fechaActual.setHours(0, 0, 0, 0);
```

---

# 13. Trabajar con Arrays

**Posible enunciado:** Guardar las respuestas correctas del jugador.

**Archivo:** `script.js`

**Dónde buscarlo:**
- En el bloque inicial de variables del juego.
- Actualmente tenemos:

```javascript
let historial = [];
```

Añadir elementos:

```javascript
historial.push(24);
```

Consultar el primer elemento:

```javascript
console.log(historial[0]);
```

Consultar el número de elementos:

```javascript
console.log(historial.length);
```

Recorrer el array:

```javascript
for (let i = 0; i < historial.length; i++) {
    console.log(historial[i]);
}
```

En el juego, las operaciones acertadas se guardan dentro del evento `botonComprobar`, en el bloque de respuesta correcta:

```javascript
historial.push(operacionActual.texto + " = " + operacionActual.respuesta);
```

---

# 14. Cambiar entre localStorage y sessionStorage

**Posible enunciado:** Cambiar el almacenamiento de la puntuación para que solo se conserve durante la sesión de la pestaña.

**Archivo:** `script.js`

**Dónde buscarlo:**
- En el evento `submit`, donde se inicializa la puntuación.
- En el evento `click` de `botonComprobar`, donde se actualiza la puntuación.
- En el bloque inicial de variables, donde se recupera la mejor puntuación.

### Guardar con localStorage

```javascript
localStorage.setItem("puntuacion", puntuacion);
```

Recuperar:

```javascript
let puntuacionGuardada = Number(localStorage.getItem("puntuacion"));
```

### Guardar con sessionStorage

```javascript
sessionStorage.setItem("puntuacion", puntuacion);
```

Recuperar:

```javascript
let puntuacionGuardada = Number(sessionStorage.getItem("puntuacion"));
```

### Diferencias

| localStorage | sessionStorage |
|---|---|
| Conserva los datos después de cerrar el navegador. | Conserva los datos durante la sesión de la pestaña. |
| Los datos permanecen hasta que se eliminan. | Los datos desaparecen al finalizar la sesión de la pestaña. |
| Útil para guardar récords. | Útil para guardar datos de la partida. |

**Para cambiar de uno a otro:** sustituir `localStorage` por `sessionStorage` tanto al guardar como al recuperar los datos.

Eliminar un dato:

```javascript
localStorage.removeItem("puntuacion");

// O:
sessionStorage.removeItem("puntuacion");
```

---

# 15. Trabajar con Cookies

**Posible enunciado:** Guardar el nombre del jugador en una cookie.

**Archivo:** `script.js`

**Dónde buscarlo:**
- En el bloque inicial de funciones, donde tenemos `guardarCookie()` y `leerCookie()`.
- En el evento `submit`, donde se llama a `guardarCookie(nombreJugador)`.

Guardar una cookie:

```javascript
document.cookie = "nombre=Juan; max-age=3600; path=/";
```

Consultar las cookies:

```javascript
console.log(document.cookie);
```

`max-age=3600` indica que la cookie caduca en 3600 segundos.

---

# 16. Abrir una ventana adicional

**Posible enunciado:** Abrir una ventana con información del juego.

**Archivo:** `script.js`

**Dónde buscarlo:**
- En la selección de elementos HTML, donde seleccionamos `botonAyuda`.
- Al final del archivo, donde está su evento `click`.

Ejemplo:

```javascript
let ventana = window.open("", "ayuda", "width=400,height=300");

if (ventana) {
    ventana.document.write("<h1>Ayuda del juego</h1>");
    ventana.document.write("<p>Resuelve las operaciones para conseguir puntos.</p>");
}
```

El navegador puede bloquear ventanas emergentes si no se abren como consecuencia de una acción del usuario.

---

# 17. Cargar correctamente JavaScript

**Posible enunciado:** Incluir el archivo JavaScript en el encabezado HTML.

**Archivo:** `index.html`

**Dónde buscarlo:**
- Dentro de la etiqueta `<head>`.

```html
<script src="script.js" defer></script>
```

También podemos esperar a que el DOM esté cargado.

**Archivo:** `script.js`

**Dónde buscarlo:**
- En la primera línea del archivo, donde comienza el evento `DOMContentLoaded`.

```javascript
document.addEventListener("DOMContentLoaded", function () {
    // Código que necesita acceder al HTML.
});
```

---

# 18. Ejercicios rápidos de examen

| Posible petición | Dónde buscar |
|---|---|
| Mostrar nombre y edad por consola | `submit` del formulario |
| Mostrar la puntuación por consola | `click` de `botonComprobar` |
| Cambiar el fondo según la edad | Validación de edad en `submit` |
| Cambiar el color si acierta o falla | Condición de respuesta en `botonComprobar` |
| Cambiar el color según la puntuación | Actualización de puntuación |
| Redondear un resultado | Función `generarOperacion()` |
| Cambiar el nombre a mayúsculas | Formateo del nombre en `submit` |
| Mostrar el año actual | Bloque donde se crea `fechaActual` |
| Añadir una operación al historial | Bloque de respuesta correcta |
| Cambiar localStorage por sessionStorage | Bloques de almacenamiento |
| Crear un botón nuevo | HTML y selección de elementos en JS |
| Mostrar una ventana adicional | Evento `click` de `botonAyuda` |

---

# Consejos

1. Lee el enunciado y localiza el archivo que necesitas modificar.
2. Si necesitas un elemento nuevo, añádelo en `index.html`.
3. Si necesitas seleccionar un elemento, hazlo al principio de `DOMContentLoaded`.
4. Si necesitas ejecutar algo al pulsar un botón, localiza o crea su evento `click`.
5. Si necesitas modificar una validación, busca el `if` correspondiente.
6. Si necesitas cambiar un estilo, localiza el elemento y utiliza `style` o `classList`.
7. Comprueba los valores con `console.log()`.
8. Prueba los cambios en el navegador.

**No memorices todo el código. Aprende a localizar cada parte y a identificar qué propiedad o método necesitas.**

---

# Referencias de estudio

Los ejemplos toman como referencia los contenidos de JavaScript.info utilizados durante el curso:

- [Estilo de código](https://es.javascript.info/coding-style)
- [Comentarios](https://es.javascript.info/comments)
- [Métodos de primitivas](https://es.javascript.info/primitives-methods)
- [Números](https://es.javascript.info/number)
- [Strings](https://es.javascript.info/string)
- [Arrays](https://es.javascript.info/array)
- [Fecha y hora](https://es.javascript.info/date)
- [Entorno del navegador](https://es.javascript.info/browser-environment)
- [Nodos DOM](https://es.javascript.info/dom-nodes)
- [Buscar elementos del DOM](https://es.javascript.info/searching-elements-dom)
- [Propiedades de los nodos DOM](https://es.javascript.info/basic-dom-node-properties)
- [Estilos y clases](https://es.javascript.info/styles-and-classes)
- [Eventos del navegador](https://es.javascript.info/introduction-browser-events)
- [DOMContentLoaded y load](https://es.javascript.info/onload-ondomcontentloaded)
- [Carga de scripts: async y defer](https://es.javascript.info/script-async-defer)
- [Ventanas emergentes](https://es.javascript.info/popup-windows)
- [Cookies](https://es.javascript.info/cookie)
- [localStorage y sessionStorage](https://es.javascript.info/localstorage)
