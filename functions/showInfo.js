import { movieDate, movieDescription, movieDuration, movieGenres, movieRating, movieTagline, movieTitle, posterImg, imgsLink } from "./baseVariables.js";

function showInfo(info) {

    posterImg.setAttribute('src', `${imgsLink}${info.poster_path}`);

    movieTitle.innerText = info.title;
    movieTagline.innerText = info.tagline;
    movieDescription.innerText = info.overview;
    movieDuration.innerText = `${info.runtime}m`;
    movieDuration.setAttribute('class', 'separate');
    movieDate.innerText = info.release_date.substring(0, 4);
    movieDate.setAttribute('class', 'separate');
    movieRating.innerText = info.vote_average;

    if (info.vote_average < 5) {
        movieRating.style.backgroundColor = 'red';
    } else if (info.vote_average < 7 && info.vote_average >= 5) {
        movieRating.style.backgroundColor = 'orange';
    } else if (info.vote_average >= 7) {
        movieRating.style.backgroundColor = 'green';
    }

    let genres = [];

    for (let genre of info.genres) {
        genres.push(genre.name);
    }
    
    movieGenres.innerText = genres.join(', ');
    movieGenres.setAttribute('class', 'separate');

    // GET IMDB RATING WITH IMDB API
    // CHOOSE SERIES OR MOVIES
}

export default showInfo;