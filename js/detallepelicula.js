let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=03a55d296e4c1e472b75453d21cefd67`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let detalleDe = document.querySelector('.detalleDeJoker');
        let nombre = document.querySelector('.nombre');
        let calificacion = document.querySelector('.calificacion');
        let fecha = document.querySelector('.fecha');
        let duracion = document.querySelector('.duracion');
        let sinopsis = document.querySelector('.sinopsis');

        detalleDe.innerText = `Detalle de ${data.title}`;
        nombre.innerText = data.title;
        calificacion.innerText += data.vote_average;
        fecha.innerText += data.release_date;
        duracion.innerText += `${data.runtime} minutos`;
        sinopsis.innerText += data.overview;


    })
    .catch(function(error){
        console.log(error);
    })
