const nameEntry = document.querySelector("#name");
const salaryEntry = document.querySelector("#salary");
const addButton = document.querySelector("#AddButton");
const Lista = document.querySelector("#list");
const div = document.querySelector("#div");
let array = [20]
aux = 0;
maior = 0;
let maiorSalario;
let somaSalario = 0;
addButton.addEventListener("click", AddEmployee = function(){
    if(aux<20){
    console.log("Passou aqui");
    console.log(aux);
    
    if(aux==0){
        maiorSalario = document.createElement("p");
        totalSalario = document.createElement("p");   
    }   
    let nome = nameEntry.value;
    let salario = parseInt(salaryEntry.value);
    let func = {nome, salario}
    somaSalario = somaSalario + func.salario;
    array[aux] = func;
    console.log(array[aux]);
    if(func.salario>maior){
            maior = func.salario;            
            maiorSalario.textContent = `${func.nome} ganha o maior salário: ${maior}`
    }
    totalSalario.textContent = `A folha salarial é ${somaSalario}`;
    div.appendChild(totalSalario);        
    div.appendChild(maiorSalario);
    nameEntry.value = '';
    salaryEntry.value = '';
    const novoItemLista = document.createElement("li");
    Lista.appendChild(novoItemLista);
    novoItemLista.textContent = (`${func.nome}, ${func.salario}`);
    aux++;
}
    else{
        alert("Empresa completa!");
    }
});

