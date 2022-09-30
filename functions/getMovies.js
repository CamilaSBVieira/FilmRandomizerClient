import { errosLog } from "./baseVariables.js";
import getGenreSelected from "./getGenreSelected.js";


const getMovies = async (page) => {

    const selectedGenre = getGenreSelected();
    const params = { page: page, genre: selectedGenre };

    const urlToFetch = new URL('http://localhost:5000/movies');
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