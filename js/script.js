const formulario = document.querySelector('.barra--items');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(e);

    console.log('Di click y la página ya no recarga');

    console.log(opcion);

    // Validar el Formulario...

    mostrarError('Todos los campos son obligatorios');
    if(opcion === '') {
        console.log('Al menos un campo esta vacio');
        return; // Detiene la ejecución de esta función
    }

    console.log('Todo bien...')

    // mostrarMensaje('Mensaje enviado correctamente');
});
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('formulario--opcion nav-item nav-titulo');

    formulario.appendChild(formulario);
function mostrarError() {

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}