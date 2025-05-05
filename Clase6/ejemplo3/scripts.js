let boton = document.getElementById("cambiarTexto");

boton.addEventListener("click", function(){
    this.innerText = "¡Texto cambiado!";
    this.style.backgroundColor = "lightblue";
    this.style.color ="black";
})