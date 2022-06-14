const database = {
    areas: [
        { id: 1, name: `Lodge`, location: `Northwest` },
        { id: 2, name: `Lost Wolf Hiking Trail`, location: `North` },
        { id: 3, name: `Chamfort River`, location: `Northeast` },
        { id: 4, name: `Gander River`, location: `Southwest` },
        { id: 5, name: `Campgrounds`, location: `South` },
        { id: 6, name: `Pine Bluff Trails`, location: `Southeast` }
    ],
    services: [
        { id: 1, name: `canoeing` },
        { id: 2, name: `fishing` },
        { id: 3, name: `hiking` },
        { id: 4, name: `information` },
        { id: 5, name: `lodging` },
        { id: 6, name: `parking` },
        { id: 7, name: `picnicking` },
        { id: 8, name: `rafting` },
        { id: 9, name: `rock climbing` },
        { id: 10, name: `zip lines` }
    ],
    areaServices: [
        { id: 1, areaId: 1, servicesId: 5 },
        { id: 2, areaId: 1, servicesId: 6 },
        { id: 3, areaId: 1, servicesId: 4 },
        { id: 4, areaId: 1, servicesId: 7 },
        { id: 5, areaId: 2, servicesId: 3 },
        { id: 6, areaId: 2, servicesId: 7 },
        { id: 7, areaId: 2, servicesId: 9 },
        { id: 8, areaId: 3, servicesId: 8 },
        { id: 9, areaId: 3, servicesId: 1 },
        { id: 10, areaId: 3, servicesId: 2 },
        { id: 11, areaId: 4, servicesId: 2 },
        { id: 12, areaId: 4, servicesId: 3 },
        { id: 13, areaId: 5, servicesId: 4 },
        { id: 14, areaId: 5, servicesId: 5 },
        { id: 15, areaId: 5, servicesId: 6 },
        { id: 16, areaId: 6, servicesId: 3 },
        { id: 17, areaId: 6, servicesId: 7 },
        { id: 18, areaId: 6, servicesId: 10 }
    ],
    guests: [
        { id: 1, firstName: `Alphonse`, lastName: `Meron`, areaId: 1 },
        { id: 2, firstName: `Damara`, lastName: `Pentecust`, areaId: 2 },
        { id: 3, firstName: `Anna`, lastName: `Bowton`, areaId: 3 },
        { id: 4, firstName: `Hunfredo`, lastName: `Drynan`, areaId: 4 },
        { id: 5, firstName: `Elmira`, lastName: `Bick`, areaId: 5 },
        { id: 6, firstName: `Bernie`, lastName: `Dreger`, areaId: 6 },
        { id: 7, firstName: `Rolando`, lastName: `Gault`, areaId: 1 },
        { id: 8, firstName: `Tiffanie`, lastName: `Tubby`, areaId: 2 },
        { id: 9, firstName: `Tomlin`, lastName: `Cutill`, areaId: 3 },
        { id: 10, firstName: `Arv`, lastName: `Biddle`, areaId: 4 },
        { id: 11, firstName: `Tom`, lastName: `Riddle`, areaId: 5 },
        { id: 12, firstName: `Tom`, lastName: `Bombadill`, areaId: 6 }
    ],
    information: [
        { 
        id: 1, 
        name: `Cider Falls Park`,
        email: `ciderfallspark@emailaddress.com`, 
        phone: `1-800-555-2468`,
        logo: `NPS-Logo.png`,
        address: `135 Cider Falls Park Lane`}
    ]
}

export const getAreas = () => {
    return database.areas.map(area => ({ ...area }))
}

export const getServices = () => {
    return database.services.map(service => ({ ...service }))
}

export const getGuests = () => {
    return database.guests.map(guest => ({ ...guest }))
}

export const getAreaServices = () => {
    return database.areaServices.map(areaService => ({ ...areaService }))
}

export const getParkInformation = () => {
    return database.information.map(info => ({ ...info}))
}
