 const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

        document.getElementById("formulario").addEventListener("submit", function(event) {
            event.preventDefault();

            const numeroUsuario = parseInt(document.getElementById("numero").value);
            const resultado = document.getElementById("resultado");
            const intentoS = document.getElementById("intentos");

            if (numeroUsuario === numeroSecreto) {
                resultado.textContent = "Lo has acertado!";
            } else if (numeroUsuario < numeroSecreto) {
                resultado.textContent = "No es correcto. El número secreto es mayor.";
                intentos++;
                intentoS.textContent = "LLevas " + intentos + " intentos.";
            } else {
                resultado.textContent = "No es correcto. El número secreto es menor.";
                intentos++;
                intentoS.textContent = "LLevas " + intentos + " intentos.";
            }
        }
    );