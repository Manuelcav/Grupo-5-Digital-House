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

        let detalleDe = document.querySelector('detalleDeJoker');
        let nombre = document.querySelector('nombre');
        
        nombre.innerText = data.title;
    })