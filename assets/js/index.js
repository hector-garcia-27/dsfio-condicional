var borde = document.querySelector("#imagen")

function aparecer(){
    if(borde.style.border){
        borde.style.border = "none"
    } else{
        borde.style.border = "solid 2px red"
    }
}