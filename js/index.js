let urlPopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=6c457fc9dfa8d0a4c7572bd5162907c9';

fetch(urlPopulares)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let peliculasPopulares = document.querySelector('ul.Peliculas');
        let peliculas = '';
        
        for (let i=0; i<5; i++) {
            console.log(data.results[i]);
           peliculas += `<li>
                            <a href='detallepelicula.html?id=${data.results[i].id}' target="blanck">
                                <img src='https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}' alt="${data.results[i].original_title}" >
                                <h3 class="PeliculasTexto"> ${data.results[i].original_title}</h3>
                                <h4 class="PeliculasTexto">${data.results[i].release_date}</h4>
                            </a>
                        </li>`;
        }

        peliculasPopulares.innerHTML = peliculas
    })
    .catch(function(error){
        console.log(error);
    })
/*
let urlMasValoradas = 'https://api.themoviedb.org/3/movie/top_rated?api_key=6c457fc9dfa8d0a4c7572bd5162907c9'

fetch(urlMasValoradas)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let peliculasPopulares = document.querySelector('ul.Peliculas');
        let peliculas = '';
        
        for (let i=0; i<5; i++) {
            console.log(data.results[i]);
           peliculas += `<li>
                            <a href='detallepelicula.html?id=${data.results[i].id}' target="blanck">
                                <img src='https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}' alt="${data.results[i].original_title}" >
                                <h3 class="PeliculasTexto"> ${data.results[i].original_title}</h3>
                                <h4 class="PeliculasTexto">${data.results[i].release_date}</h4>
                            </a>
                        </li>`;
        }

        peliculasPopulares.innerHTML = peliculas
    })
    .catch(function(error){
        console.log(error);
    })
    */ 