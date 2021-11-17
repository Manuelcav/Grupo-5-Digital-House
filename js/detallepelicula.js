let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let url = 'https://api.themoviedb.org/3/movie/{movie_id}';

fetch(url)
    .then(function(response){
        return response.json;
    })
    .then(function(data){
        console.log(data);
        let detalleDe = document.querySelector('.detalleDeJoker');
        let nombre = document.querySelector('.nombre')
        let calificacion = document.querySelector('.calificacion');
        
    })
    .catch(function(error){
        console.log(error);
    })
