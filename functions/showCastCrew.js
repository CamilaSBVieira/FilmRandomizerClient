import { castAndCrew, hideShow } from "./baseVariables.js";

function showCastCrew(castCrew) {

    hideShow.innerHTML = "Cast and Crew";

    let castList = [];
    let crewList = [];

    if (castCrew.cast) {
        let cast = castCrew.cast;
        for (let i = 0; i < Math.min(cast.length, 4); i++) {
            castList.push(`<li>${cast[i].name}</li>`);
        }
    }

    if (castCrew.crew) {
        let crew = castCrew.crew;
        for (let i = 0; i < crew.length; i++) {
            if (crew[i].department === "Directing" && crew[i].job === "Director") {
                crewList.push(`<li>${crew[i].name}</li>`);
            }
        }
    }
    
    castAndCrew.innerHTML = `${
        crewList && `<div><span class="cast-crew_title">Cast:</span><ul>${castList.join(' ')}</ul></div>`
    }
    ${crewList && `<div><span class="cast-crew_title">Director:</span><ul>${crewList.join(' ')}</ul></div>`}`;

}

export default showCastCrew;