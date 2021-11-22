console.log('favoritos');

let recuperarStorage = localStorage.getItem('favoritos');

let favoritos = JSON.parse(recuperarStorage);

console.log(favoritos);

let main = document.querySelector('.main');
let fav = '';

if(favoritos == null || favoritos.length == 0){
    main.innerHTML = '<h3>No hay favoritos</h3>';
} else {
    for(let i=0; i<favoritos.length; i++){
        buscarYMostrarFav(favoritos[i]);
    }

}

function buscarYMostrarFav(id){

    let url = ``

for(let i=0; i<favoritos.length; i++){
    let urlPelis = `https://api.themoviedb.org/3/movie/${id}?api_key=03a55d296e4c1e472b75453d21cefd67`;  

    fetch(urlPelis)
        .then(function(response){
          return response.json();
        })

        .then(function(data){
            console.log(data);
            fav += `<li>
            <a href='detallepelicula.html?id=${data.id}' target="blanck">
                <img src='https://image.tmdb.org/t/p/w342/${data.poster_path}' alt="${data.results[i].original_title}" >
                <h3 class="PeliculasTexto"> ${data.original_title}</h3>
                <h4 class="PeliculasTexto">${data.release_date}</h4>
            </a>
        </li>`

        main.innerHTML = fav;
            
        })
        
        .catch(function(error){
            console.log(error);
        })
}

}