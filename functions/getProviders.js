import { errosLog } from "./baseVariables.js";


const getProviders = async id => {

    const params = { id: id };

    const urlToFetch = new URL(`https://warm-woodland-45897.herokuapp.com/providers`);
    urlToFetch.search = new URLSearchParams(params).toString();

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const responseJson = await response.json();
            const providers = responseJson.results;
            if(providers.BR) {
                const providersBR = providers.BR;
                return providersBR;
            }
        }
    }
    catch (err) {
        errosLog.innerHTML = `Error fetching providers list: ${err}`;
    }

}

export default getProviders;