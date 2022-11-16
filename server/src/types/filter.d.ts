export type Filter = {
    rooms: number[],
    price: {
        from: number,
        to: number,
    },
    area: {
        from: number,
        to: number,
    },
    kitchen_area: {
        from: number,
        to: number,
    },
    live_area: {
        from: number,
        to: number,
    },
};
