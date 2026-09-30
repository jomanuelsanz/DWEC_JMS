/* (Comprobación null y undefined) 

Crea un script que simule la carga de configuración de un usuario. 

Tendrás tres posibles fuentes para obtener un nombre de usuario:
    • Un valor introducido por el usuario con prompt().
    • Una constante en el código. Por defecto será “Invitado” aunque para hacer pruebas
sería recomendable modificarla a null, undefined o una cadena vacía.
    • Un valor de respaldo ("Anónimo") 
    
Usando el operador ??, selecciona el primer valor que no sea null ni undefined. Luego,
repite usando || para ver la diferencia con valores como una cadena vacía ("") o 0. Muestra
los valores elegidos en cada caso por consola. Se recomienda probar a introducir cadenas
vacías en el prompt a ver qué ocurre. */

let nombre1 = prompt("Introduce el nombre 1");
let nombre2 = null;
let nombre3 = "Anónimo";

// Muestra el primer valor definido: 
alert(nombre1 ?? nombre2 ?? nombre3 ?? "Jose"); 
// Si pulsamos cancelar en el nombre 1, mostrará anónimo
// Si cambiamos el nombre3 por null y pulsamos cancelar en el nombre1, mostrará "Jose"

alert(nombre1 || nombre2 || nombre3 || "Jose"); 