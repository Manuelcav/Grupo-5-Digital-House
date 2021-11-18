let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let urlDetalleGenerosPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=6c457fc9dfa8d0a4c7572bd5162907c9`;
let urlDetalleGenerosSeries = `https://api.themoviedb.org/3/discover/tv/${id}?api_key=6c457fc9dfa8d0a4c7572bd5162907c9`;

fetch(urlDetalleGenerosPeliculas)
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){
        console.log(data);
        let genreTitle = document.querySelector('.tituloGeneros');
        let detalleGeneros = document.querySelector('ul.detalleGenerosPeliculas')

        genreTitle.innerText = `${data.results.title}`


    })
    .catch(function(error){
        console.log(error);
    })

    
