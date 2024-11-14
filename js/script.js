function mostrarMensaje() {
    alert('¡Hola! Por favor completa el formulario de Contacto.');
}

function confirmacion(){
    var respuesta = confirm ("¿Deseas enviar esta informacion?");
    if (respuesta==true){
        return true;
    }else {
        return false;
    }
}