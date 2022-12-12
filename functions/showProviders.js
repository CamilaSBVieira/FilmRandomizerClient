import { imgsLink, whereToWatch } from "./baseVariables.js";

function showProviders(providers) {

    if (providers) {
        let list = [];
        if (providers.buy) {
            let providersBuy = providers.buy;
            list.push(`<div><h3>Buy</h3><ul>`);
            for (let buy of providersBuy) {
                list.push(`<li><a href=${providers.link} target="_blank"><img src="${imgsLink}${buy.logo_path}" title="${buy.provider_name}"/></a></li>`);
            }
            list.push(`</ul></div>`);
        }

        if (providers.flatrate) {
            let providersFlatrate = providers.flatrate;
            list.push('<div><h3>Stream</h3><ul>');
            for (let flat of providersFlatrate) {
                list.push(`<li><a href=${providers.link} target="_blank"><img src="${imgsLink}${flat.logo_path}" title="${flat.provider_name}"/></a></li>`);
            }
            list.push('</ul></div>');
        }

        if (providers.rent) {
            let providersRent = providers.rent;
            list.push('<div><h3>Rent</h3><ul>');
            for (let rent of providersRent) {
                list.push(`<li><a href=${providers.link} target="_blank"><img src="${imgsLink}${rent.logo_path}" title="${rent.provider_name}"/></a></li>`);
            }
            list.push('</ul></div>')
        }

        whereToWatch.innerHTML = list.join('');
    }
    
}

export default showProviders;