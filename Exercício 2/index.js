const input = document.querySelector("#input");
const adicionarTarefa = function(){
    const tarefa = input.value;
    const lista = document.querySelector("#lista");
    let novoItemLista = document.createElement("li");
    lista.appendChild(novoItemLista);
    novoItemLista.textContent = tarefa;
}
const retirarTarefa = function(){
    
}
input.addEventListener("keydown", function(e){
    if(e.which === 13){
        console.log("Passou aqui")
        adicionarTarefa();
    }
})




