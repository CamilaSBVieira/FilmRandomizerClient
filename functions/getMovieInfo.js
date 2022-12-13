import { errosLog } from "./baseVariables.js";

const getMovieInfo = async movie => {

    const movieId = movie.id;
    const params = { id: movieId };
    
    const urlToFetch = new URL(`https://film-randomizer-server-camilasbvieira.vercel.app/info}`);
    urlToFetch.search = new URLSearchParams(params).toString();
    
    try {
        const response = await fetch(urlToFetch);
        if(response.ok) {
            const movieInfo = await response.json();
            return movieInfo;
        }
    } catch (err) {
        errosLog.innerHTML = `Error fetching movie info: ${err}`;
    }

}

export default getMovieInfo;