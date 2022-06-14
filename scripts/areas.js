import { getAreas } from "./Database.js";
import { guestsPerArea } from "./guests.js";
import { serviceNames, servicesByAreas } from "./services.js";

const parkAreas = getAreas()

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("area")) {
        const [, areaId] = itemClicked.id.split("--")

        for (const area of parkAreas) {
            if (area.id === parseInt(areaId)) {
                const currentGuests = guestsPerArea(area)           
                window.alert(`There are ${currentGuests} guests in ${area.name}.`)
            }
        }
    }
}
)

export const areaList = () => {
    let areaHTML = '<div class="areaList">'
    for (const area of parkAreas) {
        const serviceAreas = servicesByAreas(area)
        areaHTML += `<article class="area_card"><h3 id="area--${area.id}">${area.name}</h3>
            ${serviceNames(serviceAreas)}
            </article>`
    }
    areaHTML += `</div>`

    return areaHTML
}
