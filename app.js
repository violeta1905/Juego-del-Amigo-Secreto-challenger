// Declaramos el arreglo para almacenar los nombres
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() 
{
    // Capturar el valor del input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombre);

    // Limpiar campo de entrada
    input.value = "";

    // Actualizar la lista en pantalla
    mostrarLista();
}

// Función para mostrar los amigos en la lista 
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar lista antes de mostrar
    lista.innerHTML = "";

    // Recorrer el array y agregar elementos <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() 
{
    // Validar que haya nombres en la lista
    if (amigos.length === 0) {
        alert("Por favor, agregue al menos un nombre antes de sortear.");
        return;
    }

    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    //console.log (amigoSecreto);

    // Mostrar resultado en la lista "resultado"
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
