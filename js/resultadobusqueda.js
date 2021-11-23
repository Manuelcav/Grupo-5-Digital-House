let qs = location.search;
let qsto = new URLSearchParams(qs);
let query = qsto.get('search');

let tituloResultadoBusqueda = document.querySelector('h1.tituloResultadoBusqueda');
tituloResultadoBusqueda.innerText = `Estás buscando: ${query}`

let urlPeliculas = `https://api.themoviedb.org/3/search/movie?api_key=6c457fc9dfa8d0a4c7572bd5162907c9&query=${query}`

fetch(urlPeliculas)
.then(function(response){
    return response.json();
})
.then (function(data){

})
.catch(function(error){
    console.log(error);
})