let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let urlDetalleGenerosPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=6c457fc9dfa8d0a4c7572bd5162907c9&with_genres=${id}`;
let urlDetalleGenerosSeries = `https://api.themoviedb.org/3/discover/tv?api_key=6c457fc9dfa8d0a4c7572bd5162907c9&with_genres=${id}`;

fetch(urlDetalleGenerosPeliculas)
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){
        console.log(data);
        let detalleGenerosPeliculas = document.querySelector('ul.detalleGenerosPeliculas');
        let tituloGenero = document.querySelector('.tituloGeneros')
        let generosPeliculas = '';

        for (let i=0; i<3; i++) {
            console.log([i]);
            generosPeliculas += `<li class='detalleGenerosItem' >
                                    <a href="detallepelicula.html?id=${data.results[i].id}">
                                        <img src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="${data.results[i].title}" ><h3 class="PeliculasTexto">${data.results[i].original_title}</h3>
                                    </a>
                                </li>`;
        }

        
        detalleGenerosPeliculas.innerHTML = generosPeliculas 
        tituloGenero.innerText = data.results.name

    })
    .catch(function(error){
        console.log(error);
    })

    
