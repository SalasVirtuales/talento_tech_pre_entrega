/*Esta Parte se realizo a modo de prueba
const btnEnviar= document.getElementById("enviar")
btnEnviar.addEventListener('click',verificarFormulario);

//funcionalidad 1
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
*/


/*funcionalidad 2
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
*/

//funcionalidad 3
// Array de productos Dragon Ball
const productosDBZ = [
    { nombre: "Figura de Goku", precio: 15000, descripcion: "Figura de acción de Goku en su forma Super Saiyan." },
    { nombre: "Figura de Vegeta", precio: 14000, descripcion: "Figura de acción de Vegeta en su forma Super Saiyan Blue." },
    { nombre: "Figura de Piccolo", precio: 20000, descripcion: "Figura de acción de Piccolo en su forma Super Saiyan Blue." },
    { nombre: "Figura de Bulma", precio: 25000, descripcion: "Figura de acción de Piccolo en su forma Super Saiyan Blue." }
];

// Función para mostrar la descripción amplidad del producto
const mostrarDescripcion = (index) => {
    const descripcionProducto = document.getElementById('descripcionProducto');
    const producto = productosDBZ[index];
    descripcionProducto.innerHTML = `<h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p> $ ${producto.precio}</p>`;
};

 // Agregar evento de clic a cada producto en la lista
 document.addEventListener('click', (event) => {
    if (event.target && event.target.matches('.btn')) {
        const index = event.target.getAttribute('data-index');
        mostrarDescripcion(index);
    }
});
