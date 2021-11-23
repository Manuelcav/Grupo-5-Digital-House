let recuperarStorage = localStorage.getItem('fav');

let favoritos = JSON.parse(recuperarStorage);

console.log(favoritos);

let main = document.querySelector('.main');
let fav = '';

if(favoritos == null || favoritos.length == 0){
    main.innerHTML = '<h3>No hay favoritos</h3>'
} else {
    for(let i=0; i<favoritos.length; i++){
        buscarYMostrarFav(favoritos[i]);
    }

}

function buscarYMostrarFav(id){

    let urlPelis = `https://api.themoviedb.org/3/movie/${id}?api_key=03a55d296e4c1e472b75453d21cefd67`;


    fetch(urlPelis)
        .then(function(response){
          return response.json();
        })

        .then(function(data){
            console.log(data);
            fav += `<article>
            <a href='detallepelicula.html?id=${data.id}' target="blanck">
                <img src='https://image.tmdb.org/t/p/w342/${data.poster_path}' alt="${data.original_title}">
                <h3 class="PeliculasTexto"> ${data.original_title}</h3>
                <h4 class="PeliculasTexto">${data.release_date}</h4>
            </a>
                 </article>`;

        main.innerHTML = fav
            
        })

        .catch(function(error){
            console.log(error);
        })

};



let recuperarStoragee = localStorage.getItem('fav');

let favoritoss = JSON.parse(recuperarStoragee);

console.log(favoritoss);

let mainn = document.querySelector('.main');
let favv = '';

if(favoritoss == null || favoritoss.length == 0){
    mainn.innerHTML = '<h3>No hay favoritos</h3>'
} else {
    for(let i=0; i<favoritoss.length; i++){
        buscarYMostrarFavv(favoritoss[i]);
    }

}

function buscarYMostrarFavv(id){

    let urlSeries = `https://api.themoviedb.org/3/tv/${id}?api_key=03a55d296e4c1e472b75453d21cefd67`;


    fetch(urlSeries)
        .then(function(response){
          return response.json();
        })

        .then(function(data){
            console.log(data);
            favv += `<article>
            <a href='detalleserie.html?id=${data.id}' target="blanck">
                                <img src='https://image.tmdb.org/t/p/w342/${data.poster_path}' alt="${data.original_name}">
                                <h3 class="PeliculasTexto"> ${data.original_name}</h3>
                                <h4 class="PeliculasTexto">${data.first_air_date}</h4>
                            </a>
                    </article>`;

        mainn.innerHTML = favv
            
        })

        .catch(function(error){
            console.log(error);
        })

}







