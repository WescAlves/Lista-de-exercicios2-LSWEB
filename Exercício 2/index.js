const inputTarefa = document.getElementById("inputTarefa");
const listaTarefas = document.getElementById("listaTarefas");

inputTarefa.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		adicionarTarefa();
	}
});

function adicionarTarefa() {
	const tarefa = inputTarefa.value;
	if (tarefa !== "") {
		const item = document.createElement("li");
		item.innerHTML = tarefa + "<button>Remover</button>";
		listaTarefas.appendChild(item);
		inputTarefa.value = "";
        let botao = document.querySelector("button");
		botao.addEventListener("click", removerTarefa);
	}
}

function removerTarefa() {
	this.parentNode.remove();
}