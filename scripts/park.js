import { getParkInformation } from "./Database.js";

const parkInfo = getParkInformation()

export const parkHeader = () => {
    let parkHeaderHTML = ``
    for (const info of parkInfo) {
        parkHeaderHTML += `<img  class="park_logo image--card" src="images/${info.logo}" />`
        parkHeaderHTML += `<h1 class="park_name">${info.name}</h1>`
        parkHeaderHTML += `<img  class="park_logo image--card" src="images/${info.logo}" />`
    }
    return parkHeaderHTML
}

export const parkFooter = () => {
    let parkFooterHTML = ``
    for (const info of parkInfo) {
        parkFooterHTML += `<div class="park_phone">${info.phone}</div>`
        parkFooterHTML += `<div class="park_email">${info.email}</div>`
        parkFooterHTML += `<div class="park_address">${info.address}</div>`
    }
    return parkFooterHTML
}
