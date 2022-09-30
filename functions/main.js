import { button, hideShow, castAndCrew } from "./baseVariables.js";
import getGenres from "./getGenres.js";
import populateGenreSelect from "./populateGenreSelect.js";
import showRandomMovie from "./showRandomMovie.js";

getGenres().then(populateGenreSelect);

button.onclick =  showRandomMovie;

hideShow.onclick = () => {
    castAndCrew.classList.toggle('visible');
    hideShow.classList.toggle('visible');
}
