const carrosel = document.getElementsByClassName("imagen");
const boton1 = document.getElementById("btn1")
const boton2 = document.getElementById("btn2")
const boton3 = document.getElementById("btn3")

boton1.addEventListener("click", function(){cambiar(0)});
boton2.addEventListener('click', function(){cambiar(1)});
boton3.addEventListener("click", function(){cambiar(2)});

function cambiar(index){
    for (let i = 0; i < carrosel.length; i++){
        carrosel[i].style.display = "none";
    }
    carrosel[index].style.display = "block";
}