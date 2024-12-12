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
/*
// Función para mostrar la descripción amplidad del producto
const mostrarDescripcion = (index) => {
    const descripcionProducto = document.getElementById('descripcionProductos');
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
*/
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
 * Utilización de fetch para obtener datos de una API
 * pública y mostrarlos en la sección main del HTML.
 * Procesar los datos obtenidos de la API para
 * organizarlos en cards, aplicando Flexbox o Grid para
 * mantener la coherencia en el diseño.
 */

/*
  fetch('https://dragonball-api.com/api/characters?limit=12')
  .then((response) => response.json())
  .then((data) => {
  
  const productosContainer = document.getElementById("productos-container");
  data.items.forEach((productos) => {
  productosContainer.innerHTML += `
  
   <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false " tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-dark fs-xxl" id="staticBackdropLabel">

            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div id="descripcionProducto" class="modal-body">
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary">Agregar Carrito</button>
          </div>
        </div>
      </div>
    </div>
  
    <!--Tarjeta-->
  <div class="card--1 col-12 col-sm-6 col-lg-3">
              <div class="row">
                    <img src="${productos.image}" height="300px" class="card-img-top col-6 col-sm-12" alt="">
      
                    <div class="card-body col-6 col-sm-12">
                        <h5 class="card-title">Figura ${productos.name}</h5>
                        <p class="card-text">Articulo ${productos.id}.</p>
                        <p class="card-text">Precio $${productos.id*10000-productos.id*200}.</p>
                        <p class="card-text">Stock ${productos.ki}.</p>
                    <div class="card-body">
                        <a href="#" type="button" class="btn btn-warning" data-index="${productos.id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop">descripcion</a>
                    </div>
                    </div>
                  </div>
           </div>
   </div>`;
  });
  // Agregar evento de clic a los botones  descripción
  document.querySelectorAll('.btn-warning').forEach(button => {
    button.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        mostrarDescripcion2(data.items[index-1]);
    });
});
  })
  .catch((error) => console.error("Error al obtener productos:", error));

  // Función para mostrar la descripción del personaje en el modal
  const mostrarDescripcion2 = (character) => {
    console.log(character)
    const modalBody = document.getElementById('descripcionProducto');
    const modalTitle = document.getElementById('staticBackdropLabel');

    modalTitle.textContent = character.name;
    modalBody.innerHTML = `
        <p>${character.description || 'Descripción no disponible'}</p>

    `;
};
*/
/***********************************************************/
/**
 * CARRITO DE COMPRAS
 */
 // URL de la API pública de Dragon Ball
 const apiURL = 'https://dragonball-api.com/api/characters?limit=24';

 // Función para obtener datos de la API y mostrarlos en tarjetas
 const obteneRDatos = async () => {
     try {
         const response = await fetch(apiURL);
         const articulos = await response.json();
         const cardContainer = document.getElementById('cardContainer');

         articulos.items.forEach(articulo => {
             const card = document.createElement('div');
             card.className = 'card';

             card.innerHTML = `
                 <img src="${articulo.image}" class="card-img-top img-fluid" alt="${articulo.name}">
                 <div class="card-body">
                     <h5 class="card-title">Figura  ${articulo.name}</h5>
                     <p class="card-text">Codigo : ${articulo.id}</p>
                      <p class="card-text">Raza:  ${articulo.race}</p>
                     <p class="card-text">Precio:  $${15000} </p>
                     <button class="btn btn-primary" onclick="agregarCarrito('${articulo.name}', 15000)">Añadir al Carrito</button>
                 </div>
             `;
             cardContainer.appendChild(card);
         });
     } catch (error) {
         console.error('Error al obtener los personajes de Dragon Ball Z:', error);
     }
 };

 // Función para añadir productos al carrito
 const agregarCarrito = (productName, price) => {
     let cart = JSON.parse(localStorage.getItem('cart')) || [];
     const productIndex = cart.findIndex(product => product.name === productName);

     if (productIndex > -1) {
         cart[productIndex].quantity += 1;
     } else {
         cart.push({ name: productName, price: price, quantity: 1 });
     }

     localStorage.setItem('cart', JSON.stringify(cart));
     actualizarCarrito();
     mostrarCarrito();
 };

 // Función para mostrar los productos del carrito
 const mostrarCarrito = () => {
     const cart = JSON.parse(localStorage.getItem('cart')) || [];
     const carritoContainer = document.getElementById('carritoContainer');
     const cartTotal = document.getElementById('cart-total');
     let total = 0;
     
     carritoContainer.innerHTML = '';

     cart.forEach(product => {
         total += product.price * product.quantity;
         const productDiv = document.createElement('div');
         productDiv.className = 'row mb-3';
         productDiv.innerHTML = `
             <div class="col-md-6">
                 <h5>${product.name}</h5>
             </div>
             <div class="col-md-2">
                 <input type="number" class="form-control" value="${product.quantity}" min="1" onchange="actualizarCantidad('${product.name}', this.value)">
             </div>
             <div class="col-md-2">
                 <button class="btn btn-danger" onclick="removerArticulo('${product.name}')">Eliminar</button>
             </div>
         `;
         carritoContainer.appendChild(productDiv);
     });

     cartTotal.textContent = total;
 };

 // Función para actualizar la cantidad de un producto en el carrito
 const actualizarCantidad = (productName, quantity) => {
     let cart = JSON.parse(localStorage.getItem('cart')) || [];
     const productIndex = cart.findIndex(product => product.name === productName);

     if (productIndex > -1) {
         cart[productIndex].quantity = parseInt(quantity);
     }

     localStorage.setItem('cart', JSON.stringify(cart));
     mostrarCarrito();
 };

 // Función para eliminar productos del carrito
 const removerArticulo = (productName) => {
     let cart = JSON.parse(localStorage.getItem('cart')) || [];
     cart = cart.filter(product => product.name !== productName);

     localStorage.setItem('cart', JSON.stringify(cart));
     actualizarCarrito();
     mostrarCarrito();
 };

 // Función para actualizar el ícono del carrito
 const actualizarCarrito = () => {
     const cart = JSON.parse(localStorage.getItem('cart')) || [];
     const cartCount = cart.reduce((acc, product) => acc + product.quantity, 0);
     document.getElementById('cart-count').textContent = cartCount;
 };

 // Llamar a la función al cargar la página
 window.onload = () => {
     obteneRDatos();
     actualizarCarrito();
     mostrarCarrito();
 };

 // Mostrar el carrito en el modal
 document.querySelector('.cart-icon').addEventListener('click', () => {
     $('#cartModal').modal('show');
 });

 /**
  * TRABAJO FINALIZADO
  * MARCELO PERALTA
  */