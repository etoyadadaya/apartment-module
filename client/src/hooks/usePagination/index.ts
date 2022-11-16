import {useCallback, useEffect, useState} from "react";
import useApiCall from "../useApiCall";
import {Apartment, Sort, filter} from "../../types/types";
import {urlBuilder} from "../../helpers";

const usePagination = (sort: Sort, filter: filter, ctx: boolean) => {
  const host = useApiCall();

  const elementsPerPage = 6;
  const [data, setData] = useState<Apartment[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  useEffect(() => {
    host.get(urlShortBuilder(sort, filter)).then(res => {
      if (res.status === 200) {
        setMaxPage(Math.ceil(res.data / elementsPerPage));
        setData([]);
      }
    });
  }, [ctx]);

  useEffect(() => {
    host.get<Apartment[]>(urlBuilder((page - 1) * elementsPerPage, sort, filter)).then(res => {
      if (res.status === 200) {
        setData(res.data);
      }
    });
  }, [page, sort, ctx]);

  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const urlShortBuilder = useCallback((sort: Sort, filter: filter): string => {
    let url = `/apartments/count?sort=${sort}`;
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
  }, []);

  return {data, maxPage, page, prevPage, nextPage};
};

export default usePagination;
