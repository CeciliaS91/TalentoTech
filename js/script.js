function mostrarMensaje() {
    alert('¡Hola! Ante cualquier duda, completa nuestro formulario de contacto.');
}

function mensajeClubes() {
    alert('¡Lo sentimos! Página en mantenimiento.');
}


const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedorCarrito");
const body = document.querySelector("body");

window.addEventListener("scroll",function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})

