
const getRandomMovie = (movies) => {

    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    return randomMovie;
    
}

export default getRandomMovie;