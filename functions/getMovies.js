import { errosLog } from "./baseVariables.js";
import getGenreSelected from "./getGenreSelected.js";


const getMovies = async (page) => {

    const selectedGenre = getGenreSelected();
    const params = { page: page, genre: selectedGenre };

    const urlToFetch = new URL('http://filmrandomizerserver-env.eba-rdgduyps.us-east-1.elasticbeanstalk.com/movies');
    urlToFetch.search = new URLSearchParams(params).toString();

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const responseJson = await response.json();
            const movies = responseJson.results;
            return movies;
        }
    } catch (err) {
        errosLog.innerHTML = `Error fetching movies list: ${err}`;
    }

}

export default getMovies;