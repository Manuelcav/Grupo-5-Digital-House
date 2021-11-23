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
        let img = document.querySelector('.fotoJoker');
        let generos = document.querySelector('.generos');

        nombre.style.fontWeight = 'bold';

        detalleDe.innerText = `Detalle de ${data.title}`;
        nombre.innerText = data.title;
        calificacion.innerHTML = `<strong>Calificación: </strong>${data.vote_average}`;
        fecha.innerHTML = `<strong>Fecha de estreno: </strong>${data.release_date}`;
        duracion.innerHTML = `<strong>Duración: </strong>${data.runtime} minutos`;
        sinopsis.innerHTML = ` <strong>Sinópsis: </strong> ${data.overview}`;
       
        img.src = `https://image.tmdb.org/t/p/w342/${data.poster_path}`;

        let genero = '';
        for(let i=0; i<data.genres.length; i++){
            genero += `<a href='detail-genres.html?id=${data.genres[i].id}' target='blank'><p class=genero>${data.genres[i].name}</p></a>`;
            console.log(genero);
        };

        generos.innerHTML += genero;

    })
    .catch(function(error){
        console.log(error);
    })

let fav = [];

let recuperarStorage = localStorage.getItem('favPeli');

if(recuperarStorage != null){
    fav = JSON.parse(recuperarStorage);
}

let favoritos = document.querySelector('.favoritos');

let botonFavoritos = document.querySelector('.botonFavoritos');

if(fav.includes(id)){
    botonFavoritos.innerText = 'Quitar de favoritos';
}

favoritos.addEventListener('click', function(evento){
    evento.preventDefault();

    if(fav.includes(id)){
        let indice = fav.indexOf(id);
        fav.splice(indice, 1);
        botonFavoritos.innerText = 'Agregar a favoritos';
    } else {
        fav.push(id);
        botonFavoritos.innerHTML = 'Quitar de favoritos';
    }

    console.log(fav);

    let favAString = JSON.stringify(fav);
    localStorage.setItem('favPeli', favAString);

    console.log(localStorage);

})

