// ¿Alguna vez has jugado a adivinar el número en el que tu amigo o amiga estaba pensando? Hoy volverás a tu infancia y harás exactamente eso. ¡Pero ahora, el juego será contra la propia computadora!
//----------------------------------------------
// Debes crear un pequeño programa que comience con un valor aleatorio entre 0 y 10 para el número que vas a adivinar.

// A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.

// Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.

function generarNroRandom(max,min){
    return Math.ceil(Math.random()*(max-min+1)+min);
}


function game(intentos_max){
    const num=generarNroRandom(10,0);
    let intentos=1;

    console.log("¡Bienvenido al juego de adivinar el número!");
    console.log(`Tienes ${intentos_max} intentos para adivinar el número secreto (entre 0 y 10).`);

    while(intentos<=intentos_max){
        let numero_usuario=parseInt(prompt("Ingrese un nro: "));

        if (numero_usuario===num){
            console.log("Felicidades,acertaste.");
            console.log(`Te tomo: ${intentos} ${(intentos===1)? "intento" : "intentos"}`);
            return;
        }

        intentos++;

        (numero_usuario>num) ? console.log("El nro es más pequeño") : console.log("El nro es más grande");
    }

    console.log(`❌ Se te acabaron los intentos. El número secreto era: ${num}`);


}   


do {
    game(3); // Llamar al juego con un máximo de 3 intentos
    var answer = prompt("¿Deseas seguir jugando? Responde con '1' para sí o cualquier otra tecla para salir:");
} while (parseInt(answer, 10) === 1);

console.log("¡Gracias por jugar! 😄");