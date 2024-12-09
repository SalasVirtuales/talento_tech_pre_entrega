/**
 * Implementar una función que verifique si todos los
 * campos del formulario de contacto están
 * completos, mostrando un mensaje en la consola.
 */


//funcionalidad 
//Esta Parte se realizo a modo de prueba
const btnEnviar= document.getElementById("enviar")
btnEnviar.addEventListener('click',verificarFormulario);

function verificarFormulario(){
    //Asigno los datos de cada input a una constante
    const nombre = document.getElementById("name").value;
    const correo = document.getElementById("email").value;
    const comentario= document.getElementById("comments").value;
    //Llamo a la funcion hayCampos vacios enviando datos de argumentos
    let respuesta = hayCamposVacio(nombre, correo, comentario);
    imprimirConsola(respuesta);

}

function hayCamposVacio(name, email, coments){
let respuesta= false;
if (name ==="" || email ==="" || coments === "") {
    respuesta = true;
}
return respuesta
}

function imprimirConsola(dato){
    if(dato)
    {
        console.log("Por Favor completa los datos de los campos de este formulario")
    }else
    {
    console.log("Campos del formulario completados correctamente")
    }
}

/************************************************* */

//funcionalidad
/**
 * Crear un ciclo que genere dinámicamente una
 * lista de productos disponibles y los muestre 
 * en la consola
 */
const productos = 
[
    { nombre: "Esfera del Dragon", precio: 1500 },
     { nombre: "Arroz", precio: 2500 },
     { nombre: "dragon", precio: 800 },
     { nombre: "nube", precio: 100 },
     { nombre: "kit", precio: 50 }
];

function mostrarProductos(productos) 
{ 
    for (let i = 0; i < productos.length; i++)
        { 
            console.log(`Articulo: ${productos[i].nombre}, Precio: $${productos[i].precio}`); 
        } 
    }

mostrarProductos(productos)

/*************************************************/
//funcionalidad 
/**
 * Implementar un evento click que muestra la
 * descripción ampliada del producto que clickeamos.
 */
// Array de productos Dragon Ball
const productosDBZ = [
    { nombre: "Figura de Goku", precio: 15000, descripcion: "Figura de acción de Goku en su forma Super Saiyan." },
    { nombre: "Figura de Vegeta", precio: 14000, descripcion: "Figura de acción de Vegeta en su forma Super Saiyan Blue." },
    { nombre: "Figura de Piccolo", precio: 20000, descripcion: "Figura de acción de Piccolo en su forma Super Saiyan Blue." },
    { nombre: "Figura de Bulma", precio: 25000, descripcion: "Figura de acción de Piccolo en su forma Super Saiyan Blue." },
    { nombre: "Mochila de Dragon Ball Z", precio: 8000, descripcion: "Mochila con estampado de Dragon Ball Z y múltiples compartimentos." },
    { nombre: "Poster de Dragon Ball Z", precio: 3000, descripcion: "Poster con una ilustración épica de los personajes principales de Dragon Ball Z." },
    { nombre: "Taza de Dragon Ball Z", precio: 2500, descripcion: "Taza con el diseño de los personajes de Dragon Ball Z." },
    { nombre: "Funko Pop de Piccolo", precio: 3500, descripcion: "Figura Funko Pop de Piccolo en su forma clásica." },
    { nombre: "Réplica del Bastón Mágico de Goku", precio: 1200, descripcion: "Réplica del bastón mágico que utiliza Goku en sus aventuras." },
    { nombre: "Llavero de Shenlong", precio: 1500, descripcion: "Llavero con la forma del dragón Shenlong." }
];

// Función para mostrar la descripción amplidad del producto
const mostrarDescripcion = (index) => {
    const descripcionProducto = document.getElementById('descripcionProducto');
    const producto = productosDBZ[index];
    descripcionProducto.innerHTML = `<h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p> $ ${producto.precio}</p>`;
};

 // Agregar evento de clic a cada producto en la tarjeta
 document.addEventListener('click', (event) => {
    if (event.target && event.target.matches('.btn')) {
        const index = event.target.getAttribute('data-index');
        mostrarDescripcion(index);
    }
});

/*************************************************/
//funcionalidad

/**
 * Crear de una función que cree un array de
 * productos y los muestre en la página utilizando
 * una plantilla HTML dinámica.
 */

 // Seleccionar el cuerpo de la tabla
 const tableBody = document.getElementById('productosTableBody');

 // Crear las filas de la tabla dinámicamente
 productosDBZ.forEach(producto => {
     const row = document.createElement('tr');
     row.innerHTML = `
         <td>${producto.nombre}</td>
         <td>$${producto.precio}</td>
         <td>${producto.descripcion}</td>
     `;
     tableBody.appendChild(row);
 });


/*************************************************/

//funcionalidad
/**
 * 
 */