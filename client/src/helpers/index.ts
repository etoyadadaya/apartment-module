import {Sort, filter} from "../types/types";

export const parseSort = (sort: string): Sort => <Sort>sort;

export const urlBuilder = (offset: number, sort: Sort, filter: filter): string => {
    let url = `/apartments?offset=${offset}&sort=${sort}`;
    if (filter) {
        if (filter.rooms > 0) {
            url+=`&rooms=${filter.rooms}`;
        }
        if (filter.area.from > 0) {
            url+=`&area_from=${filter.area.from}`;
        }
        if (filter.area.to > 0) {
            url+=`&area_to=${filter.area.to}`;
        }
        if (filter.kitchen_area.from > 0) {
            url+=`&kitchen_from=${filter.kitchen_area.from}`;
        }
        if (filter.kitchen_area.to > 0) {
            url+=`&kitchen_to=${filter.kitchen_area.to}`;
        }
        if (filter.live_area.from > 0) {
            url+=`&live_from=${filter.live_area.from}`;
        }
        if (filter.live_area.to > 0) {
            url+=`&live_to=${filter.live_area.to}`;
        }
        if (filter.price.from > 0) {
            url+=`&price_from=${filter.price.from}`;
        }
        if (filter.price.to > 0) {
            url+=`&price_to=${filter.price.to}`;
        }
    }
    return url;
}
