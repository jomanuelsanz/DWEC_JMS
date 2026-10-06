/*
(Estructuras de control y comparaciones) 
Un viajero llega a una puerta custodiada por un sabio. 

El sabio le hace tres preguntas:
• ¿Cuánto llevas contigo?
• ¿Eres sincero? (una ventana confirm).
• ¿Qué responderías si te pregunto si puedes entrar en mayúsculas?

Las respuestas para poder entrar son:
• ¿Cuánto llevas contigo? Valor mayor de 50
• ¿Eres sincero? Aceptar en la ventana confirm
• ¿Qué responderías si te pregunto si puedes entrar en mayúsculas? SÍ

Se mostrará un alert indicando si el viajero puede entrar o no si se cumplen las 3 condiciones. 
Modifica el programa para que solo se muestren las nuevas preguntas si has ido acertando la anterior. 

*/

// El sabio hace las 3 preguntas:
let pregunta1 = Number(prompt("¿Cuánto llevas contigo?"));  // Pedimos un number 
let pregunta2 = confirm("¿Eres sincero?");  // Con confirm debe aceptar o no aceptar
let pregunta3 = prompt("¿Qué responderías si te pregunto si puedes entrar en mayúsculas?");  // Aquí escribirá un texto

// Evaluamos que se cumplan las tres condiciones con "if" y "&&":
if (pregunta1 >= 50 && pregunta2 == true && pregunta3 == "SÍ"){  
    alert("Puedes entrar")  // Si se cumplen las tres condiciones, puede entrar
}
else {
    alert("No puedes entrar. Inténtalo de nuevo")  // Si no, no puede entrar
}



// Ahora modificamos el programa para que se muestren las nuevas preguntas, si se ha ido acertando la anterior
alert("Comenzamos de nuevo con la primera pregunta, si aciertas, pasarás a la segunda, y así sucesivamente")

// Vuelvo a preguntar para guardar las nuevas variables. Creo que esto no es del todo necesario
let pregunta4 = Number(prompt("¿Cuánto llevas contigo?"));   
let pregunta5 = confirm("¿Eres sincero?");  
let pregunta6 = prompt("¿Qué responderías si te pregunto si puedes entrar en mayúsculas?");


// Creo bucle "if", pero esta vez con || para evaluar que todas las condiciones se cumplen. 
// Si no se cumplen, no puede entrar. 

if (pregunta4 >= 50 || pregunta5 == true || pregunta6 == "SÍ"){
    alert("Puedes entrar")
}
else {
    alert("No puedes entrar. Inténtalo de nuevo")
}
// No funciona. Si contestas mal, te indica al final que no puedes pasar, pero sí que avanzas a la siguiente pregunta
// Creo que tendría que concatenar bucles "if" o utilizar alguna estructura del estilo pero desconozco cómo hacerlo