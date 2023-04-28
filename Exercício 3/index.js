const filmes = [{
    "titulo": "Dawn of the Planet of the Apes",
    "lancamento": 2014,
},
{
    "titulo": "District 9",
    "lancamento": 2009,
},
{
    "titulo": "Transformers: Age of Extinction",
    "lancamento": 2014,
},
{
    "titulo": "X-Men: Days of Future Past",
    "lancamento": 2014,
},
{
    "titulo": "The Machinist",
    "lancamento": 2004,
},
{
    "titulo": "The Last Samurai",
    "lancamento": 2003,
},
{
    "titulo": "The Amazing Spider-Man 2",
    "lancamento": 2014,
},
{
    "titulo": "Tangled",
    "lancamento": 2010,
},
{
    "titulo": "Rush",
    "lancamento": 2013,
},
{
    "titulo": "Drag Me to Hell",
    "lancamento": 2009,
},
{
    "titulo": "Despicable Me 2",
    "lancamento": 2013,
},
{
    "titulo": "Kill Bill: Vol. 1",
    "lancamento": 2003,
},
{
    "titulo": "A Bug's Life",
    "lancamento": 1998,
},
{
    "titulo": "Life of Brian",
    "lancamento": 1972,
},
{
    "titulo": "How to Train Your Dragon",
    "lancamento": 2010,
}];


const input = document.querySelector("#input");
const inputFilme = input.value;
const lista = document.querySelector("#listaFilmes")
filmes.forEach(filme => {
    console.log("Passou aqui")
    let mostrarFilme = document.createElement("li");
    let titulo = filme.titulo;
    let lancamento = filme.lancamento;
    mostrarFilme.textContent = `${titulo} -- ${lancamento}`;
    lista.appendChild(mostrarFilme);
});
input.addEventListener("keyup", function(){
    const input = document.querySelector("#input");
    const inputFilme = input.value;
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
        }
    if(inputFilme === '' ){
        filmes.forEach(filme => {
            console.log("Passou aqui")
            let mostrarFilme = document.createElement("li");
            let titulo = filme.titulo;
            let lancamento = filme.lancamento;
            mostrarFilme.textContent = `${titulo} -- ${lancamento}`;
            lista.appendChild(mostrarFilme);
        })
    }
    const filmesFiltrado = filmes.filter(filme => {
        return filme.titulo.includes(inputFilme)
    })
    console.log("Digitado");
    console.log(inputFilme);
    if(inputFilme!== ''){
    filmesFiltrado.forEach(filme => {
            let mostrarFilme = document.createElement("li");
            let titulo = filme.titulo;
            let lancamento = filme.lancamento;
            console.log(titulo);
            mostrarFilme.textContent = `${titulo} -- ${lancamento}`;
            lista.appendChild(mostrarFilme);
            
        }) 
    }  
    })



    

