//Esta Parte se realizo a modo de prueba
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
