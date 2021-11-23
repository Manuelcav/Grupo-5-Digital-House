let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');
let title = qsto.get('title');

let urlDetalleGenerosPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=6c457fc9dfa8d0a4c7572bd5162907c9&with_genres=${id}`;
let urlDetalleGenerosSeries = `https://api.themoviedb.org/3/discover/tv?api_key=6c457fc9dfa8d0a4c7572bd5162907c9&with_genres=${id}`;

fetch(urlDetalleGenerosPeliculas)
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){
        console.log(data);
        let detalleGenerosPeliculas = document.querySelector('ul.detalleGenerosPeliculas');
        let generosPeliculas = '';
        let tituloGenero = document.querySelector('.tituloGeneros');

        for (let i=0; i<5; i++) {
            console.log([i]);
            generosPeliculas += `<li class='detalleGenerosItem' >
                                    <a href="detallepelicula.html?id=${data.results[i].id}">
                                        <img src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="${data.results[i].title}" ><h3 class="PeliculasTexto">${data.results[i].original_title}</h3>
                                    </a>
                                </li>`;
        }

        detalleGenerosPeliculas.innerHTML = generosPeliculas 
        tituloGenero.innerText = `Genero: ${title}`

    })
    .catch(function(error){
        console.log(error);
    })

    fetch(urlDetalleGenerosSeries)
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){
        console.log(data);
        let detalleGenerosPeliculas = document.querySelector('ul.detalleGenerosSeries');
        let generosPeliculas = '';
        let tituloGenero = document.querySelector('.tituloGeneros');

        for (let i=0; i<5; i++) {
            console.log([i]);
            generosPeliculas += `<li class='detalleGenerosItem' >
                                    <a href="detalleserie.html?id=${data.results[i].id}">
                                        <img src="https://image.tmdb.org/t/p/w342/${data.results[i].poster_path}" alt="${data.results[i].name}" ><h3 class="PeliculasTexto">${data.results[i].name}</h3>
                                    </a>
                                </li>`;
        }

        tituloGenero.innerText = `Genero: ${title}`
        detalleGenerosPeliculas.innerHTML = generosPeliculas 

    })
    .catch(function(error){
        console.log(error);
    })

let formulario = document.querySelector('form');
let campoBuscar = document.querySelector('.Searchbar');

formulario.addEventListener('submit',function(event){
    event.preventDefault();
    if (campoBuscar.value == ''){
        alert("La búsqueda está vacía");
    } else if (campoBuscar.value.length < 3){
        alert('la búsqueda debe tener al menos 3 caracteres');
    } else {
        formulario.submit();
    }
})
    
