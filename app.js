//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Declaração do array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigos() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    if (nome === ""){
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = "";
} 

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo =>{
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}