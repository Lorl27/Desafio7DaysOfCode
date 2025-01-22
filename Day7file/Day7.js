// Esta ha sido una semana y tanto, ¿verdad?
// Has practicado muchas cosas sobre lógica de programación con Javascript, pero aún falta algo muy importante: organizar tu código.
// Y sí, esto es algo obligatorio para aprender como desarrollador, pues tarde o temprano en tu carrera necesitarás dar mantenimiento al código que creaste, o incluso arreglar algo en el código que escribió otra persona.
// ¿Te imaginas si ese código estuviera todo desordenado?
// Una excelente práctica es siempre separar cada sección de tu código que realice una función específica en bloques de código aún más pequeños, que podrán ser reutilizados y llamados en cualquier otro momento a lo largo de tu programa. Son las llamadas funciones.
//---------------------------------
// Para el ejercicio de hoy: ¿te has detenido a pensar cómo funciona una calculadora?

// Te pide que ingreses un número, luego seleccionas un tipo de operación, otro número, y ella sola realiza el cálculo para mostrarte el resultado. ¡Increíble, verdad?

// En este último desafío, mi propuesta para ti es: crea tu propia calculadora, pero con un detalle muy importante: cada operación debe ser una función diferente en tu código.

// Primero, la persona debe elegir una opción de operación impresa por el programa en la pantalla.
// Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el resultado de la operación en cuestión.
// Las opciones disponibles deben ser: suma, resta, multiplicación, división, y salir. En esta última, el programa debe detenerse y mostrar un mensaje "Hasta la próxima".

//-----------------------------------

const txt=document.querySelector("#resultados");

function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function dividir(a,b){
    return b!=0? a/b : "Error. No se puede dividir por 0.";
}

function multiplicar(a,b){
    return a*b;
}

function is_nro_valid(number){ 
        return isNaN(number);
}

function ejecutarPrograma(){
    const rta_usuario_op= parseInt(document.querySelector("#ingreso_c").value);
    const nro1=parseFloat(document.querySelector("#ingreso_n").value);
    const nro2=parseFloat(document.querySelector("#ingreso_n2").value);

    // if(!is_nro_valid(nro1)||!is_nro_valid(nro2)|| !is_nro_valid(rta_usuario_op)){
    //     txt.textContent = "Por favor, ingresa números válidos en todos los campos.";
    //     return;}


    switch(rta_usuario_op){
        case 1:
            txt.textContent=`La suma del nro ${nro1} con ${nro2} es: ${sumar(nro1,nro2)}`;
            break;
        case 2:
            txt.textContent=`La resta del nro ${nro1} con ${nro2} es: ${restar(nro1,nro2)}`;
            break;
        case 3:
            txt.textContent=`La multiplicación del nro ${nro1} con ${nro2} es: ${multiplicar(nro1,nro2)}`;
            break;
        case 4:
            txt.textContent=`La división del nro ${nro1} con ${nro2} es: ${dividir(nro1,nro2)}`;
            break;
        default:
            txt.textContent="Ocurrio un error :(";
    }

}
