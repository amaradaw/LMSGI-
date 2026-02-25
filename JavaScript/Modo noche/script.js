function cambiarColor() {
            const cuadrado = document.getElementById("cuadrado");
            cuadrado.style.backgroundColor = "blue";
            cuadrado.style.width = "300px";
            cuadrado.style.height = "300px";
            document.body.style.backgroundColor = "yellow";

            // Para ocultar un elemento, se usa display none
            // cuadrado.style.display= "none";
        }

        function modoNoche() {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }   