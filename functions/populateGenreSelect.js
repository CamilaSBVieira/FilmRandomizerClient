function populateGenreSelect(genres) {

    const select = document.getElementById('genres');

    for (let genre of genres) {
        let option = document.createElement('option');
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }

}

export default populateGenreSelect;