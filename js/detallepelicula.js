let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let url = 'https://api.themoviedb.org/3/movie/{movie_id}';


