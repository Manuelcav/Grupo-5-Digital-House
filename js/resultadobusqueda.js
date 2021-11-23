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
    console.log(data.results);
    let resultadoPeliculasEncontradas = document.querySelector('ul.detalleGenerosPeliculas');
    let resultadoPeliculas = '';
    /*
    if(data.results.length == 0){
        document.querySelector('h1.subtituloDetalleGenero').innerText += `No se encontraron peliculas con ${query}`;
    } else (data.results.length > 0) */
        for(let i=0; i>5; i++ ){
            console.log(data.results[i]);
            resultadoPeliculas += `<li class='detalleGenerosItem'>
                                    <a href="detallepelicula.html?id=${data.results[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="${data.results[i].title}" ><h3 class="PeliculasTexto">${data.results[i].original_title}</h3>
                                    </a>
                                </li>`;
    }
    resultadoPeliculasEncontradas.innerHTML = resultadoPeliculas;
})
.catch(function(error){
    console.log(error);
})