let actual = 0;
const carrosel = document.getElementsByClassName("imagen");
mostrar();

function mostrar(){
    // Ocultar todas las imágenes
    for (let i = 0; i < carrosel.length; i++){
        carrosel[i].style.display = "none";
    }

    // Mostrar la siguiente imagen
    carrosel[actual].style.display = "block";
    actual++;
    if (actual >= carrosel.length) {
        actual = 0; // Reiniciar al inicio del carrusel
    }
    setTimeout(mostrar, 2000); // Cambia la imagen cada 2 segundos
}