import { GuestsHTML } from "./guests.js"
import { parkFooter, parkHeader } from "./park.js"
import { areaList } from "./areas.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<div class="park_header">
    ${parkHeader()}
</div>
<article class="details">
    <section class="detail_column">
        <h2 class="area_list">Park Areas</h2>
        ${areaList()}
    </section>
    <section class="detail_aside">
        <h2 class="guest_list">Guest List</h2>
        ${GuestsHTML()}
    </section>
</article>
<div class="park_footer">
    ${parkFooter()}
</div>
`

mainContainer.innerHTML = applicationHTML