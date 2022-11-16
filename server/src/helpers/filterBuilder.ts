export const FilterBuilder = (
    rooms: number,
    area_from: number,
    area_to: number,
    kitchen_from: number,
    kitchen_to: number,
    live_from: number,
    live_to: number,
    price_from: number,
    price_to: number,
) => {
    let allRooms;

    if (!rooms) {
        allRooms = [1,2,3,4];
    } else {
        allRooms = [rooms];
    }

    if (!price_from) {
        price_from = -1;
    }
    if (!price_to) {
        price_to = 1000000000;
    }

    if (!area_from) {
        area_from = -1;
    }
    if (!area_to) {
        area_to = 1000000000;
    }

    if (!kitchen_from) {
        kitchen_from = -1;
    }
    if (!kitchen_to) {
        kitchen_to = 1000000000;
    }

    if (!live_from) {
        live_from = -1;
    }
    if (!live_to) {
        live_to = 1000000000;
    }

    return {
        rooms: allRooms,
        price: {
            from: price_from,
            to: price_to,
        },
        area: {
            from: area_from,
            to: area_to,
        },
        kitchen_area: {
            from: kitchen_from,
            to: kitchen_to,
        },
        live_area: {
            from: live_from,
            to: live_to,
        },
    };
}
