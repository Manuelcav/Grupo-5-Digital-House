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
        console.log(data);
        let resultadoPeliculasEncontradas = document.querySelector('ul.detalleGenerosPeliculas');
        let resultadoPeliculas = '';
        
        for (let i=0; i<5; i++) {
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

let urlSeries = `https://api.themoviedb.org/3/search/tv?api_key=6c457fc9dfa8d0a4c7572bd5162907c9&query=${query}`

fetch(urlSeries)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);
        let resultadoSeriesEncontradas = document.querySelector('ul.detalleGenerosSeries');
        let resultadoSeries = '';
        
        for (let i=0; i<5; i++) {
            console.log(data.results[i]);
            resultadoSeries += `<li class='detalleGenerosItem'>
                                    <a href="detalleserie.html?id=${data.results[i].id}">
                                    <img src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="${data.results[i].name}" ><h3 class="PeliculasTexto">${data.results[i].original_name}</h3>
                                    </a>
                                </li>`;
        }
        resultadoSeriesEncontradas.innerHTML = resultadoSeries;
        
    })
    .catch(function(error){
        console.log(error);
    })