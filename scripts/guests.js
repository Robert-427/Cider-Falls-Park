import { getGuests } from "./Database.js";

const parkGuests = getGuests()

export const guestsPerArea = () => {

}

export const GuestsHTML = () => {
    let guestList = `<div class="guestlist">`
    for (const parkGuest of parkGuests) {
        guestList += `<ol id="guest--${parkGuest.id}">${parkGuest.firstName} ${parkGuest.lastName}</ol>\n`        
    }
    guestList += `</div>`
    return guestList
}