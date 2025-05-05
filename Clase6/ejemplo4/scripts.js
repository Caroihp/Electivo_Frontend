const boton = document.getElementById("miBoton");
boton.addEventListener("mouseover", function(){
    console.log("El raton esta sobre el boton");
})

boton.addEventListener("mouseout", function(){
    console.log("El raton ha salido del boton");
})