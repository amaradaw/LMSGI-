const tareas = document.getElementById("tareas");
const button = document.getElementById("agregar");
const entrada = document.getElementById("entrada");

button.addEventListener("click", agregar);

function agregar() {
    const ptarea = document.createElement("p");
    const node = document.createTextNode(entrada.value);

    ptarea.appendChild(node);
    tareas.appendChild(ptarea);
    
    const enlace = document.createElement("a");
    const node2 = document.createTextNode("Enlace a..");
    enlace.appendChild(node2);
    enlace.setAttribute("href", "https://www.google.com");
    ptarea.appendChild(enlace);
}