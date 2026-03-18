const carrosel = document.getElementsByClassName("imagen");
const boton1 = document.getElementById("btn1")
const boton2 = document.getElementById("btn2")
const boton3 = document.getElementById("btn3")

boton1.addEventListener("click", cambiar1);
boton2.addEventListener('click', cambiar2);
boton3.addEventListener("click", cambiar3);

function cambiar1(){
    for (let i = 0; i < carrosel.length; i++){
        carrosel[i].style.display = "none";
    }
    carrosel[0].style.display = "block";
}

function cambiar2(){
    for (let i = 0; i < carrosel.length; i++){
        carrosel[i].style.display = "none";
    }
    carrosel[1].style.display = "block";
}

function cambiar3(){
    for (let i = 0; i < carrosel.length; i++){
        carrosel[i].style.display = "none";
    }
    carrosel[2].style.display = "block";    
}