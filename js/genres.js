let urlGenerosPeliculas = 'https://api.themoviedb.org/3/genre/movie/list?api_key=6c457fc9dfa8d0a4c7572bd5162907c9';

fetch(urlGenerosPeliculas)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let listaGenerosPeliculas = document.querySelector('ul.listaGenerosPeliculas');
        let generosPeliculas = '';
        
        for (let i=0; i<19; i++) {
            console.log(data.genres[i]);
            generosPeliculas += `<li>
                                    <a href="detail-genres.html?id=${data.genres[i].id}"><h3>${data.genres[i].name}</h3></a>
                                </li>`;
        }

        listaGenerosPeliculas.innerHTML = generosPeliculas
    })
    .catch(function(error){
        console.log(error);
    })

let urlGenerosSeries = 'https://api.themoviedb.org/3/genre/tv/list?api_key=6c457fc9dfa8d0a4c7572bd5162907c9';

fetch(urlGenerosSeries)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    
        let listaGenerosSeries = document.querySelector('ul.listaGenerosSeries');
        let generosSeries = '';
            
        for (let i=0; i<16; i++) {
            console.log(data.genres[i]);
            generosSeries += `<li>
                                    <a href="detail-genres.html?id=${data.genres[i].id}"><h3>${data.genres[i].name}</h3></a>
                                </li>`;
        }
    
        listaGenerosSeries.innerHTML = generosSeries
    })
    .catch(function(error){
        console.log(error);
    })