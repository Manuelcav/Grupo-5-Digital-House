let qs = location.search;
let qsto = new URLSearchParams(qs);
let query = qsto.get('search');

let tituloResultadoBusqueda = document.querySelector('h1.tituloResultadoBusqueda');
tituloResultadoBusqueda.innerText = `Estás buscando: ${query}`

