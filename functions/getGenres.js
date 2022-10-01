import { errosLog } from './baseVariables.js';

const getGenres = async () => {

    const urlToFetch = `https://warm-woodland-45897.herokuapp.com/genres`;

    try {
        const response = await fetch(urlToFetch);
        if(response.ok) {
            const responseJson = await response.json();
            const genres = responseJson.genres;
            return genres;
        }
    } catch(err) {
        errosLog.innerHTML = `Error fetching genres: ${err}`;
    }
    
}

export default getGenres;