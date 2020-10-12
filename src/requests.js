
const APIKEY = "3bc96cc719c43e116585565cc54c4cc8";
const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMoives: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_generes=9648`,
    fetchSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_generes=878`,
    fetchAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_generes=16`,
    fetchTV: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_generes=10770`,
    fetchWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&with_generes=37`,

}

export default requests;