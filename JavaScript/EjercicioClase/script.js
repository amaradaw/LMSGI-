const tareas = document.getElementById("tareas");
const botonAgregar = document.getElementById("agregar");
const entrada = document.getElementById("entrada");
const botonBorrar = document.getElementById("borrar");

botonAgregar.addEventListener("click", agregar);
botonBorrar.addEventListener("click", borrar);

function agregar() {
    const ptarea = document.createElement("p");
    ptarea.textContent = entrada.value;

    const enlace = document.createElement("a");
    enlace.textContent = " Enlace a..";
    enlace.href = "https://www.google.com";

    const img = document.createElement("img");
    img.src = "https://www.florespedia.com/Imagenes/flores-bonitas.jpg";

    enlace.appendChild(img);
    ptarea.appendChild(enlace);
    tareas.appendChild(ptarea);
}

function borrar() {
    if (tareas.lastChild) {
        tareas.removeChild(tareas.lastChild);
    }
}
