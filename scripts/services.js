import { getAreaServices, getServices } from "./Database.js";

const areaServices = getAreaServices()
const services = getServices()

export const servicesByAreas = (area) => {
    let filteredAreaServices = []
    for (const areaService of areaServices) {
        if (area.id === areaService.areaId) {
            filteredAreaServices.push(areaService.servicesId)
        }
    }
    return filteredAreaServices
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