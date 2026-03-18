const entrada = document.getElementById('nombre');
const mensaje = document.getElementById('boton');

buton = addEventListener('click', alertar);

function alertar() {
    if (entrada.value === '') {
        alert('El campo no puede estar vacio');
    } else {
        alert('El nombre es: ' + entrada.value);
    } 
}