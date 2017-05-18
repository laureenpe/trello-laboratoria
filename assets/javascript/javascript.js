//alert("hola mundo");

//Defino el evento


window.onload = function() { //este evento hace que cuando la pagina se cargue se llamen las funciones
    document.getElementById("list-input-box").addEventListener("click", mostrarLista); //para interactuar los listeners
    document.getElementById("la-x").addEventListener("click", ocultarLista);
    document.getElementById("save-btn").addEventListener("click", nombrarLista);

}


function mostrarLista() {
    console.log('works!');
    document.getElementById("new-text-gray").classList.remove('ocultar'); //busco en el html lo que esta oculto para que aparezca

}

function ocultarLista() {
    document.getElementById("new-text-gray").classList.add('ocultar'); //con este busco nuevamente agregarle la propiedad para que se oculte 

}

function nombrarLista() {
    document.getElementById("list-input-box").classList.add('ocultar');
    document.getElementById("button-close").classList.add('ocultar');
    document.getElementById("input-box").classList.add('ocultar');
    document.getElementById("list-name").innerHTML = document.getElementById("input-box").value;
    document.getElementById("button-tarea").classList.remove('ocultar');
    document.getElementById("x-tarea").classList.add('ocultar');
    document.getElementById("text-tarea").classList.add('ocultar');
    document.getElementById("save-tarea").addEventListener("click", addTarea);


}

//necesito agregar la tarea
function addTarea() {
    document.getElementById("save-tarea").classList.add('btn');
    document.getElementById("save-tarea").classList.add('btn-success');
    document.getElementById("x-tarea").classList.remove('ocultar');
    document.getElementById("text-tarea").classList.remove('ocultar');
}