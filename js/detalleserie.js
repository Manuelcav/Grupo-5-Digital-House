let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=03a55d296e4c1e472b75453d21cefd67`;

fetch (url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let detalleDe = document.querySelector('.detalleDeJoker');
        let nombre = document.querySelector('.nombre2');
        let calificacion = document.querySelector('.calificacion2');
        let fecha = document.querySelector('.fecha2');
        let cantidad = document.querySelector('.cantidad');
        let sinopsis = document.querySelector('.sinopsis2');
        let img = document.querySelector('.fotoBreakingBad');

        detalleDe.innerText = `Detalle de ${data.name}`;
        nombre.innerText = data.name;
        calificacion.innerText += data.vote_average;
        fecha.innerText += data.first_air_date;
        cantidad.innerText += data.number_of_episodes;
        sinopsis.innerText += data.overview;
        img.src = `https://image.tmdb.org/t/p/w342/${data.poster_path}`;

    })