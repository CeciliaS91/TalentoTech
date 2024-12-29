function mostrarMensaje() {
    alert('¡Hola! Ante cualquier duda, completa nuestro formulario de contacto.');
}

function mensajeClubes() {
    alert('¡Lo sentimos! Página en mantenimiento.');
}


function mostrarMensaje() {
    alert('¡Hola! Ante cualquier duda, completa nuestro formulario de contacto.');
}

window.onscroll = function(){
    if(document.documentElement.scrollTop>100){
        document.querySelector('.go-top-container')
        .classList.add('show');
    } else{
        document.querySelector(".go-top-container")
        .classList.remove("show");
    }
}
document.querySelector('.go-top-container')
.addEventListener('click',()=>{
    window.scrollTo({
        behavior:'smooth',
        top:0,
    });
});


