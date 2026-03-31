// Contador de cliques
let contador = 0;

const Contador = document.getElementById("contador");
const Incrementar = document.getElementById("incrementar");
const Decrementar = document.getElementById("decrementar");

Incrementar.onclick = function () {
    contador++;
    Contador.textContent = contador;
};

Decrementar.onclick = function () {
    if (contador > 0) {
        contador--;
        Contador.textContent = contador;
    } else {
        alert("O contador não pode ser negativo!");
    }
};


// Criar Texto Dinâmico 
const input = document.getElementById("inputTexto");
const Paragrafos = document.getElementById("paragrafos");
const contadorCaracteres = document.getElementById("contadorCaracteres");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let p = document.createElement("p");
        p.textContent = input.value;
        Paragrafos.appendChild(p);

        input.value = "";
        contadorCaracteres.textContent = 0;
    }
});

// Contador de Caracteres (sem espaço)
input.addEventListener("input", function () {
    let texto = input.value.replace(/\s/g, "");
    contadorCaracteres.textContent = texto.length;
});



// Listas
const AddLista = document.getElementById("addLista");
const Listas = document.getElementById("listas");

AddLista.onclick = function () {
    let tipo = document.getElementById("tipoLista").value;
    let lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        let item = document.createElement("li");
        item.textContent = "Item " + i;
        lista.appendChild(item);
    }

    Listas.appendChild(lista);
};


// Reset
const Resetar = document.getElementById("resetar");

Resetar.onclick = function () {
    contador = 0;
    Contador.textContent = 0;

    Paragrafos.innerHTML = "";
    Listas.innerHTML = "";

    input.value = "";
    contadorCaracteres.textContent = 0;
};