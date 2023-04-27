const div = document.querySelector("#div");
let novoItem = document.createElement("p");
let inputArray = document.querySelector("#array");
let inputSeparador = document.querySelector("#sep");
let achar = document.querySelector("#botao");
achar.addEventListener("click", function(){
let arrayEntry = inputArray.value;
let separador = inputSeparador.value;
let array = Array.from(arrayEntry);
let i;
let tam = array.length;

console.log(tam);
let p = 0;
let l = 1000000000000000;
for(i=0; i<tam; i++){
    if(isNaN(array[i])){
        array.splice(i, 1);
    }
console.log(array);
}
for(i=0; i<tam; i++){
        if(array[i]!=separador){
        if(array[i]>p){
           p=array[i];
           console.log(array[i]);
        }
        if(array[i]<l){
           l=array[i];
        }
   
    }
    console.log(`O maior é ${p}, e o menor é ${l}`);
}
div.appendChild(novoItem);
novoItem.textContent = `O maior é ${p}, e o menor é ${l}`
}
)