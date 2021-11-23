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
        let generos = document.querySelector('.generos2');

        nombre.style.fontWeight = 'bold';

        let genero = ''
        for(let i=0; i<data.genres.length; i++){
            genero += `<a href='detail-genres.html?id=${data.genres[i].id}' target='blank'><p class=genero>${data.genres[i].name}</p></a>`;
            console.log(genero);
        };

        detalleDe.innerText = `Detalle de ${data.name}`;
        nombre.innerText = data.name;
        calificacion.innerHTML = `<strong>Calificación: </strong>${data.vote_average}`;
        fecha.innerHTML = `<strong>Fecha de estreno: </strong> ${data.first_air_date}`;
        cantidad.innerHTML = ` <strong>Cantidad de episodios: </strong> ${data.number_of_episodes}`;
        sinopsis.innerHTML = ` <strong>Sinópsis: </strong>${data.overview}`;
        img.src = `https://image.tmdb.org/t/p/w342/${data.poster_path}`;
        generos.innerHTML += genero;

    })

let fav = [];

let recuperarStorage = localStorage.getItem('favSerie');

if(recuperarStorage != null){
    fav = JSON.parse(recuperarStorage);
}

let favoritos = document.querySelector('.favoritos2');

let botonFavoritos = document.querySelector('.botonFavoritos2');

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
    localStorage.setItem('favSerie', favAString);

    console.log(localStorage);

})
