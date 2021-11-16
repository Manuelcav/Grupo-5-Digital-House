let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get ('id');

let url = `https://api.themoviedb.org/3/movie/popular?api_key=6c457fc9dfa8d0a4c7572bd5162907c9/${id}`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let peliculaTitulo = document.querySelector('.Peliculas h3.PeliculasTexto');
        let peliculaImagen = document.querySelector('.Peliculas img');
        let peliculaEstreno = document.querySelector('.Peliculas h4.PeliculasTexto');

       /* for (let i=0; i<5; i++) {
            peliculaTitulo= 
            peliculaImagen=
            peliculaEstreno=
        } */

        //actualizar datos
        peliculaTitulo.innerText = data.original_title;
        peliculaImagen.src = data.poster_path;
        peliculaEstreno.innerText = data.release_date;

    })
    .catch(function(error){
        console.log(error);
    })