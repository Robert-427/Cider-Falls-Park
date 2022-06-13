import { getGuests } from "./Database.js";

const parkGuests = getGuests()

export const GuestsHTML = () => {
    let guestList = `<div class="guest_aside"><h1 class="guest_list">Guest List</h1>`
    for (const parkGuest of parkGuest) {
        guestList += `<ol class="guest">${parkGuest.firstName} ${parkGuest.lastName}</ol>\n`        
    }
    guestList += `</div>`
    return guestList
}