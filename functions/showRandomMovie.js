import getMovieInfo from "./getMovieInfo.js";
import getMovies from "./getMovies.js"
import getRandomMovie from "./getRandomMovie.js";
import getRandomPage from "./getRandomPage.js";
import showInfo from "./showInfo.js";
import getProviders from "./getProviders.js";
import getCast from "./getCast.js";
import showProviders from "./showProviders.js";
import showCastCrew from "./showCastCrew.js";
import load from "./load.js";


const showRandomMovie = async () => {

    load();

    const randomPage = getRandomPage();

    const movies = await getMovies(randomPage);

    const randomMovie = getRandomMovie(movies);

    const info = await getMovieInfo(randomMovie);

    const providers = await getProviders(info.id);
    
    const cast = await getCast(info.id);

    showInfo(info);
    showProviders(providers);
    showCastCrew(cast);
    
}

export default showRandomMovie;