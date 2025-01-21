// ¿Sabes cuando vas al supermercado con una lista de compras y terminas yendo y volviendo por los mismos pasillos hasta completar la lista?
// Necesitas una manzana y vas al área de frutas. El siguiente ítem es una leche y te diriges a los lácteos. Pero luego anotaste una pera, y necesitas regresar de nuevo al área de frutas.

// ¡Después de resolver el desafío de hoy, con certeza no harás más eso!
// Al igual que nuestra lista de compras, es muy común que los programas trabajen con listas de string, números y objetos.
// Piensa en cada catálogo de e-commerce que has visto, en la lista de eventos de tu Google Calendar, o incluso en tu bandeja de entrada de correos electrónicos. Todos estos sitios utilizan listas para mostrar información de una manera simple y fácil de entender.
// Además, puedes aprovechar las listas para hacer filtros, ordenaciones y otras funcionalidades muy útiles.
// En este punto, ya debes haber notado que trabajar con estas colecciones es algo que necesitarás dominar, ¿verdad?


// Entonces hoy, para facilitar tu visita al supermercado, debes crear un programa en Javascript que pregunte si deseas agregar un alimento a tu lista de compras, y debes poder responder con "sí" o "no".
// A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".

// Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, como frutas, lácteos, congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.

//--------------------------------

// Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:

// Si añades a tu lista:
// banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.
// El programa debería imprimir, por ejemplo:

// Lista de compras:
// Frutas: banana, tomate, manzana, uva, aguacate
// Lácteos: leche vegetal, leche de vaca, leche en polvo
// Congelados: 
// Dulces: chicle y gominola

//--------------------------------


let productos_ya_agregrados=[];
let frutas_y_verduras=[],lacteos=[],congelados=[],dulces=[],limpieza=[],almacen=[];


function agregarElemento(){
    const rta_usu=document.querySelector("#ingreso_n").value.trim(); //para borar espacios
    const rta_usu_categoria=parseInt(document.querySelector("#ingreso_c").value);
    const mensaje=document.querySelector("#parrafo"); //por si hay que avisar errores/validar entrada.

    //----- VALIDAR ENTRADAS:

    if(!rta_usu){ mensaje.textContent = "ERROR. Debes ingresar un nombre válido para el producto.";
        return;}

    if (isNaN(rta_usu_categoria) || rta_usu_categoria < 1 || rta_usu_categoria > 6) { //si esta vacio el input o !e [1,6] de las categorias disponibles
        mensaje.textContent = "ERROR. No has ingresado una categoría válida (1-6).";
        return;
    }

    if(productos_ya_agregrados.includes(rta_usu)){
        mensaje.textContent=`ERROR. El producto "${rta_usu}" ya fue agregado anteriormente.`;
        return;
    }
    

    //---- Manejo de categorias:

    productos_ya_agregrados.push(rta_usu);

    switch(rta_usu_categoria){
            case 1:
            frutas_y_verduras.push(rta_usu);
            mensaje.textContent = `Producto "${rta_usu}" agregado a la categoría "Frutas y Verduras".`;
            break;
        case 2:
            lacteos.push(rta_usu);
            mensaje.textContent = `Producto "${rta_usu}" agregado a la categoría "Lácteos".`;
            break;
        case 3:
            congelados.push(rta_usu);
            mensaje.textContent = `Producto "${rta_usu}" agregado a la categoría "Congelados".`;
            break;
        case 4:
            dulces.push(rta_usu);
            mensaje.textContent = `Producto "${rta_usu}" agregado a la categoría "Dulces".`;
            break;
        case 5:
            limpieza.push(rta_usu);
            mensaje.textContent = `Producto "${rta_usu}" agregado a la categoría "Limpieza".`;
            break;
        case 6:
            almacen.push(rta_usu);
            mensaje.textContent = `Producto "${rta_usu}" agregado a la categoría "Almacén".`;
            break;
        default:
            mensaje.textContent = "ERROR. Ocurrió un error inesperado.";
    }
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








/* con diccionarios:

let productos_ya_agregados = [];
const categorias = {
    1: "frutas_y_verduras",
    2: "lacteos",
    3: "congelados",
    4: "dulces",
    5: "limpieza",
    6: "almacen"
};
let inventario = {
    frutas_y_verduras: [],
    lacteos: [],
    congelados: [],
    dulces: [],
    limpieza: [],
    almacen: []
};

function agregarElemento() {
    
    if (!categorias[rta_usu_categoria]) {
        mensaje.textContent = "ERROR. No has ingresado una categoría válida.";
        return;
    }

    // Verificar si el producto ya fue agregado
    if (productos_ya_agregados.includes(rta_usu)) {
        mensaje.textContent = "ERROR. Ya ingresaste ese producto.";
        return;
    }

    // Agregar producto al inventario
    productos_ya_agregados.push(rta_usu);
    const categoriaNombre = categorias[rta_usu_categoria];
    inventario[categoriaNombre].push(rta_usu);

    // Confirmar éxito
    mensaje.textContent = `Producto "${rta_usu}" agregado a la categoría "${categoriaNombre}".`;
}






*/
