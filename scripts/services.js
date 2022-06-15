import { getAreaServices, getServices, getAreas } from "./Database.js";

const areaServices = getAreaServices()
const services = getServices()
const areas = getAreas()

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("services")) {
        const [, serviceId] = itemClicked.id.split("--")

        for (const service of services) {
            if (service.id === parseInt(serviceId)) {
                const filteredAreas = servicePerArea(service)
                const areaNames = filteredNames(filteredAreas)          
                window.alert(`${service.name} is available in the following areas: ${areaNames}.`)
            }
        }
    }
}
)

const servicePerArea = (service) => {
    const filteredAreas = []
    for (const areaService of areaServices) {
        if (areaService.servicesId === service.id) {
            filteredAreas.push(areaService)
        }
    }
    return filteredAreas
}

const filteredNames = (filteredAreas) => {
    let areaString = ``
    for (const area of areas) {
        for (const filteredArea of filteredAreas) {
            if (area.id === filteredArea.areaId) {
            areaString += `-${area.name}`
            }
        }
    }
    return areaString
}

export const servicesByAreas = (area) => {
    let filteredAreaServices = []
    for (const areaService of areaServices) {
        if (area.id === areaService.areaId) {
            filteredAreaServices.push(areaService.servicesId)
        }
    }
    return filteredAreaServices
}



export const serviceList = () => {
    let serviceListHTML = `<div class="services_list">Park Services: `
    for (const service of services) {
        serviceListHTML += `<div id=services--${service.id} class="services_list"> ${service.name} </div>`
    }
    serviceListHTML += `</div>`
    return serviceListHTML
}

export const serviceNames = (filteredServices) => {
    let offeredServices = `<ul>`
    for (const serviceId of filteredServices) {
        for (const service of services) {
            if (serviceId === service.id) {
                offeredServices += `<li class="service--${service.id} service_list">${service.name}</li>`
            }
        }
    }
    offeredServices += `</ul>`
    return offeredServices
}