//Parte 1
var borde = document.querySelector("#imagen")

function aparecer() {
    if (borde.style.border) {
        borde.style.border = ""
    } else {
        borde.style.border = "solid 2px red"
    }
}

//Parte 2
var stk1 = document.querySelector("#luffy1").value
var stk2 = document.querySelector("#zoro1").value
var stk3 = document.querySelector("#sanji1").value
var texto = document.querySelector("#parrafo")
valor1 = parseInt(stk1)
valor2 = parseInt(stk2)
valor3 = parseInt(stk3)
valortotal = valor1 + valor2 + valor3
function sumar() {

    if (valortotal <= 10) {
        texto.innerHTML = "Usted lleva " + valortotal + " Stickers";
    } else if (valortotal > 10){
        texto.innerHTML = "Usted lleva demasiados Stickers"
    }else{
        texto.innerHTML = "Debe ingresar un numero en cada campo"
    }
}

//Parte 3

var aviso = document.querySelector("#txt")
var numero1 = document.querySelector("#numb1").value
var numero2 = document.querySelector("#numb2").value
var numero3 = document.querySelector("#numb3").value
var password = numero1 + numero2 + numero3

function comprobar(){
    if (numero1 == 9 && numero2 == 1 && numero3 == 1) {
        aviso.innerHTML = "password 1 correcto"
    }else if (password == 714) {
        aviso.innerHTML = "password 2 correcto"
    }else{
        aviso.innerHTML = "password incorrecto"
    }
}
