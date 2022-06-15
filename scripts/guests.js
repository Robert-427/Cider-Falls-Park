import { getGuests } from "./Database.js";

const parkGuests = getGuests()

export const guestsPerArea = (area) => {
    let guestCounter = 0
    for (const guest of parkGuests) {
        if (guest.areaId === area.id) {
            guestCounter++
        }
    }
    return guestCounter
}

export const GuestsHTML = () => {
    let guestList = `<div class="guestlist">`
    for (const parkGuest of parkGuests) {
        guestList += `<ol id="guest--${parkGuest.id}">${parkGuest.firstName} ${parkGuest.lastName}</ol>\n`
    }
    guestList += `</div>`
    return guestList
}
