function agregarItem(){
    const texto = document.getElementById("nuevoItem").value;
    if (texto.trim() === "") return; //Evitar agregar elementos vacios

    const lista = document.getElementById("lista");

    const li = document.createElement("li");

    li.textContent = texto;

    const btnBorrar = document.createElement("span");

    btnBorrar.textContent = "❌";
    btnBorrar.className = "borrar";

    btnBorrar.onclick = function(){
        lista.removeChild(li);
        actualizarContador();
    }

    li.appendChild(btnBorrar);

    lista.appendChild(li);
    actualizarContador();
    document.getElementById("nuevoItem").value = "";

}

function actualizarContador(){
    const elementos = document.querySelectorAll("#lista li");
    const total = elementos.length;
    document.getElementById("contador").textContent = total;
}