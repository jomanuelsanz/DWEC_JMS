/*
(Math y datos numéricos) 

Crea un script que simule el análisis de precios de productos en una tienda. 

El usuario debe introducir: 

    a) Un precio base en euros (por prompt).
    b) Un número con decimales para representar un porcentaje de descuento.

El script debe:
    - Validar que los dos valores sean números válidos.
    - Convertir los valores a tipo numérico real.
    - Calcular el precio final aplicando el descuento.
    - Redondear el resultado final a 2 decimales (con la función que automáticamente calcula el valor más cercano).
    - Mostrar los errores o el resultado final con alert.
    - Si el cálculo es correcto, se muestra el alert con el resultado del precio final.
    Si el resultado fuese muy alto y supera el rango permitido por JavaScript, se validará 
    y se mostrará un alert indicado que es “infinito”. Si quieres probar un número infinito, 
    prueba a poner en notación científica un número más alto que 1.7976931348623157e+308 (es el máximo valor que admite JavaScript).
    Si la validación es correcta debería admitir este formato.

*/

let precioBase = Number(promt("Introduce un precio base"));
let descuento = Number(prompt("Introduce un número con decimales, para representar un descuento"));

if (isNaN(precioBase) || isNaN(descuento)) {   // Comprueba si precioBase y descuento son números
    alert ("Deben ser números validos")

}

