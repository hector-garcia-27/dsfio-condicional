var borde = document.querySelector("#imagen")

function aparecer() {
    if (borde.style.border) {
        borde.style.border = ""
    } else {
        borde.style.border = "solid 2px red"
    }
}

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


