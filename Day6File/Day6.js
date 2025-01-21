// ¿Recuerdas el pequeño programa que creaste ayer para hacer tu propia lista de compras? ¡Hoy tu desafío es hacerlo aún más interesante!
// Ya viste cómo trabajar con arrays de forma sencilla, añadiendo elementos a tu lista de compras.
// Otra operación muy común es la eliminación de elementos de la lista, y por eso es muy importante que sepas cómo hacerlo.
// Pensándolo bien, existen muchas maneras de eliminar un elemento de una lista. Puedes eliminar el primer elemento, el último, o cualquier otro del medio de la lista. Cada una de estas operaciones tiene su propio método en la documentación de arrays de Javascript. Vamos a hablar más sobre estos métodos en la sección de "Consejos".

//-----------------
// Deberás crear la opción de eliminar algún elemento de la lista, que se mostrará junto con la pregunta: “¿deseas añadir un alimento a la lista de compras?”.

// A partir de ahí, si la persona elige esa opción, el programa imprimirá los elementos presentes en la lista actual, y la persona deberá escribir cuál de ellos desea eliminar.
// Después de eso, el programa eliminará el elemento de la lista e imprimirá la confirmación de que el elemento realmente ya no está allí.

// Finalmente, el programa volverá al ciclo inicial de preguntas.
// Si, al intentar eliminar el elemento, este no se encuentra en la lista, deberás mostrar un mensaje advirtiendo de ello.
// Por ejemplo: “¡No fue posible encontrar el elemento en la lista!”.

// Recuerda que la opción de eliminar un elemento solo deberá estar disponible a partir del momento en que exista al menos un elemento en la lista de compras. !!!


///--------

let productos_ya_agregrados=[];
let frutas_y_verduras=[],lacteos=[],congelados=[],dulces=[],limpieza=[],almacen=[];


///----- control boton eliminar

const botonDel=document.querySelector("#del");
const inputBorrado = document.querySelector("#borrado");


function actualizar_del_boton(){
if (productos_ya_agregrados.length > 0) {
    botonDel.removeAttribute("disabled");
    inputBorrado.removeAttribute("hidden");
    botonDel.style.backgroundColor="white";
    inputBorrado.classList.add("active");
} else {
    botonDel.setAttribute("disabled", "true");
    inputBorrado.setAttribute("hidden","true");
    inputBorrado.classList.remove("active");
    botonDel.style.backgroundColor="rgba(111, 111, 119, 0.512)";
}}


actualizar_del_boton();

//----------------- VALIDACIONES

function is_name_valid(nombre){
    return nombre.trim().length > 0; //no vacío
}

function is_category_invalid(cateogoria){
    return isNaN(cateogoria) || cateogoria < 1 || cateogoria > 6;
}

function show_message(mensaje,tipo="info"){
    const txt=document.querySelector("#parrafo");
    txt.textContent=mensaje;
    txt.style.color=tipo === "error" ? "red" : "green";
}



//--- style:

function marcarInputInvalido(input) {
    input.style.border = "2px dashed red";
}

function marcarInputValido(input) {
    input.style.border = "2px dashed green";
}

//-------

function agregarElemento(){
    const rta_usu = document.querySelector("#ingreso_n").value.trim(); //para borrar espacios
    const rta_usu_categoria = parseInt(document.querySelector("#ingreso_c").value); 

    const inputNombre = document.querySelector("#ingreso_n");
    const inputCategoria = document.querySelector("#ingreso_c");


    //----- VALIDAR ENTRADAS:

    if (!is_name_valid(rta_usu)) {
        show_message("ERROR. Debes ingresar un nombre válido para el producto.", "error");
        marcarInputInvalido(inputNombre);
        return;
    } else {
        marcarInputValido(inputNombre);
    }

    if (is_category_invalid(rta_usu_categoria)) {
        show_message("ERROR. No has ingresado una categoría válida (1-6).", "error");
        marcarInputInvalido(inputCategoria);
        return;
    } else {
        marcarInputValido(inputCategoria);
    }
    

    //---- Manejo de categorias:

    if (productos_ya_agregrados.includes(rta_usu)) {
        show_message(`ERROR. El producto "${rta_usu}" ya fue agregado anteriormente.`, "error");
        marcarInputInvalido(inputNombre);
        return;
    } else {
        productos_ya_agregrados.push(rta_usu);
    }


    switch(rta_usu_categoria){
            case 1:
            frutas_y_verduras.push(rta_usu);
            show_message(`Producto "${rta_usu}" agregado a la categoría Frutas y Verduras.`, "ok");
            break;
        case 2:
            lacteos.push(rta_usu);
            show_message(`Producto "${rta_usu}" agregado a la categoría "Lácteos".`,"ok");
            break;
        case 3:
            congelados.push(rta_usu);
            show_message(`Producto "${rta_usu}" agregado a la categoría "Congelados".`,"ok");
            break;
        case 4:
            dulces.push(rta_usu);
            show_message(`Producto "${rta_usu}" agregado a la categoría "Dulces".`,"ok");
            break;
        case 5:
            limpieza.push(rta_usu);
            show_message (`Producto "${rta_usu}" agregado a la categoría "Limpieza".`,"ok");
            break;
        case 6:
            almacen.push(rta_usu);
            show_message (`Producto "${rta_usu}" agregado a la categoría "Almacén".`,"ok");
            break;
        default:
            show_message("ERROR. Ocurrió un error inesperado.","error")
            return;
    }

    //---- Limpiar input
    inputNombre.value="";
    inputCategoria.value="";
    
    actualizar_del_boton();
}


function eliminarElemento(){
    const elemento=inputBorrado.value.trim();

    if(!is_name_valid(elemento)){
        show_message("ERROR. Debes ingresar un nombre válido para el producto.", "error");
        marcarInputInvalido(inputBorrado); 
        return;
    }
    else{
        marcarInputValido(inputBorrado);
    }

    if(productos_ya_agregrados.includes(elemento)){
    const indice=productos_ya_agregrados.indexOf(elemento);

    productos_ya_agregrados.splice(indice,1); //elimina "1" elemnto en "indice"

    //eliminar elemento de la categoria correspondiente
    const listas=[frutas_y_verduras,congelados,dulces,almacen,lacteos,limpieza];

    listas.forEach(  (sublista) => {
        const indice_indv= sublista.indexOf(elemento); 
        if (indice_indv !== -1) {sublista.splice(indice_indv, 1);}
    }   );


    show_message("El elemento fue eliminado correctamente.","ok");

    }
    else{
        show_message("El elemento NO existe en tu lista.","error");
        marcarInputInvalido(inputBorrado); 

    }

    ejecutarPrograma(); //mostrar la lista

    actualizar_del_boton();
}

function ejecutarPrograma(){
    const texto = document.getElementById("resultados");
    
    texto.innerHTML = `
    <strong>Lista de compras:</strong><br>
    Frutas y verduras: ${frutas_y_verduras.join(", ")}<br>
    Lácteos: ${lacteos.join(", ")}<br>
    Congelados: ${congelados.join(", ")}<br>
    Dulces: ${dulces.join(", ")}<br>
    Limpieza: ${limpieza.join(", ")}<br>
    Almacén: ${almacen.join(", ")} `;

}


// console.log("Estado de productos_ya_agregados:", productos_ya_agregrados);
// console.log("Estado del botón de eliminar:", botonDel.disabled ? "Deshabilitado" : "Habilitado");
// console.log("Estado del input de eliminación:", inputBorrado.hidden ? "Oculto" : "Visible");
