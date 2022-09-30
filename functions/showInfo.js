import { movieDate, movieDescription, movieDuration, movieGenres, movieRating, movieTagline, movieTitle, posterImg, separate } from "./baseVariables.js";

function showInfo(info) {

    posterImg.setAttribute('src', `https://image.tmdb.org/t/p/original/${info.poster_path}`);

    movieTitle.innerHTML = info.title;
    movieTagline.innerHTML = info.tagline;
    movieDescription.innerHTML = info.overview;
    movieDuration.innerHTML = `${info.runtime}m`;
    movieDuration.setAttribute('class', 'separate');
    movieDate.innerHTML = info.release_date.substring(0, 4);
    movieDate.setAttribute('class', 'separate');
    movieRating.innerHTML = info.vote_average;

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
    
    movieGenres.innerHTML = genres.join(', ');
    movieGenres.setAttribute('class', 'separate');

    // GET IMDB RATING WITH IMDB API
    // CHOOSE SERIES OR MOVIES
}

export default showInfo;