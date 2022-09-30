import { castAndCrew, hideShow, movieDate, movieDescription, movieDuration, movieGenres, moviePoster, movieRating, movieTagline, movieTitle, posterImg, whereToWatch } from "./baseVariables.js";

function load() {
    
    posterImg.setAttribute('src', '');
    movieTitle.innerHTML = '';
    movieTagline.innerHTML = '';
    movieDescription.innerHTML = 'Loading...';
    movieDuration.innerHTML = '';
    movieDate.innerHTML = '';
    movieRating.innerHTML = '';
    movieRating.style.backgroundColor = 'transparent';
    movieDuration.setAttribute('class', 'none');
    movieDate.setAttribute('class', 'none');
    movieGenres.setAttribute('class', 'none');
    movieGenres.innerHTML = '';
    whereToWatch.innerHTML = '';
    castAndCrew.innerHTML = '';
    hideShow.innerHTML = '';
    castAndCrew.classList.replace('visible', 'invisible');

}

export default load;