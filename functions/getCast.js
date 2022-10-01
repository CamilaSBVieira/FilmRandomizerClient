import { errosLog } from "./baseVariables.js";

const getCast = async id => {

    const params = { id: id };

    const urlToFetch = new URL(`https://warm-woodland-45897.herokuapp.com/cast`);
    urlToFetch.search = new URLSearchParams(params).toString();

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const responseJson = response.json();
            return responseJson;
        }
    } catch (err) {
        errosLog.innerHTML = `Error fetching cast: ${err}`;
    }
    
}

export default getCast;