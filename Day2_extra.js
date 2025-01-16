//  EXTRA  
// Tanto alert() como prompt() se utilizan para crear cuadros de diálogo e interactuar con el usuario, pero son diferentes entre sí.

// El alert() se utiliza para mostrar un mensaje simple al usuario.

// Ejemplo:
// alert("¡Hola, todos!");
// El prompt() requiere que el usuario ingrese algún valor, que podrás manipular.

// Ejemplo:
// const ciudad = prompt("Escribe tu ciudad:");
// const msg = `¡Eres de ${ciudad}!`;
// alert(msg);

// Prueba los códigos anteriores e intenta adaptarlos a tu programa.

// Vas a complementar el código para que, después de mostrar el mensaje anterior, el programa pregunte:


// ¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.


// Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:


// 1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.

// 2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?

var nombre,edad,lenguaje,op;

nombre=prompt("Ingresé su nombre: ");
edad=prompt("Ingrese su edad: ");
lenguaje=prompt("¿Qué lenguaje de programación estás estudiando?: ");

alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

op=prompt(`¿Te gusta estudiar ${lenguaje}? SI/NO`);

if(op=="SI"){
    console.log("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}else{
    console.log("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}