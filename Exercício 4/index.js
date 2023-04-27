window.addEventListener("load", function(){

let converterFahrenheit = function(celsius){
    let tempfahrenheit = celsius * 1.8 + 32;
    return tempfahrenheit;
}
let converterKelvin = function(celsius){
    let tempkelvin = celsius*1 + 273;
    return tempkelvin;
}
let keyupEvent = function(){
    document.addEventListener("keyup", function(){
        let celsius = celsiusInput.value;
        
        if(!isNaN(celsius)){
            if(aux>0){alerta.removeChild(paragrafo3);}    
            fahrenheit = converterFahrenheit(celsius);
            kelvin = converterKelvin(celsius);
            console.log(celsius);   
            paragrafo1.textContent = `A temperatura em Fahrenheit é ${fahrenheit}`;
            paragrafo2.textContent = `A temperatura em Kelvin é ${kelvin}`;
        }
        else{
            let fahrenheit = "---";
            let kelvin = "---"       
            paragrafo1.textContent = `A temperatura em Fahrenheit é ${fahrenheit}`;
            paragrafo2.textContent = `A temperatura em Kelvin é ${kelvin}`; 
            alerta.appendChild(paragrafo3);
            paragrafo3.textContent = "Digite um valor válido para a conversão!!"
            aux++;
        }
    
    })  

}
let aux=0
let fahrenheit = "---";
let kelvin = "---"
let spanFahrenheit = document.querySelector("#temp-Fahrenheit");
let spanKelvin = document.querySelector("#temp-Kelvin");
let alerta = document.querySelector("#alerta");
let paragrafo1 = document.createElement("p");
let paragrafo2 = document.createElement("p");
let paragrafo3 = document.createElement("p");
let celsiusInput = document.querySelector("#celsius-input");
spanFahrenheit.appendChild(paragrafo1);
paragrafo1.textContent = `A temperatura em Fahrenheit é ${fahrenheit}`;
spanKelvin.appendChild(paragrafo2);
paragrafo2.textContent = `A temperatura em Kelvin é ${kelvin}`;


keyupEvent();


})