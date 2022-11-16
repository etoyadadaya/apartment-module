import {RefObject, useEffect, useState} from "react";
import {Apartment, Sort, filter} from "../../types/types";
import useApiCall from "../useApiCall";
import {urlBuilder} from "../../helpers";

function useInfiniteScroll<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  sort: Sort,
  filter: filter,
  ctx: boolean,
) {
  const host = useApiCall();
  const elementsPerPage = 6;

  const [data, setData] = useState<Apartment[]>([]);
  const [page, setPage] = useState<number>(0);
  const [queryEnd, setQueryEnd] = useState<boolean>(false);
  const [current, setCurrent] = useState<Sort>(sort);
  const [currentFilter, setCurrentFilter] = useState<filter>(filter);

  useEffect(() => {
    if (current !== sort || currentFilter !== filter) {
      setData([]);
      setQueryEnd(false);
      setPage(0);
    }
    if (!queryEnd) {
      host.get<Apartment[]>(urlBuilder(page * elementsPerPage, sort, filter)).then(res => {
        if (res.status === 200) {
          if (current !== sort || currentFilter !== filter) {
            setData(res.data);
            setCurrent(sort);
            setCurrentFilter(filter);
          } else {
            setData([...data, ...res.data]);
          }
        }
      }).catch(err => {
        if (err.response.status === 404) {
          setQueryEnd(true);
        }
      });
    }
  }, [page, sort, ctx]);

  const onScroll = () => {
    if (ref.current) {
      const {scrollTop, scrollHeight, clientHeight} = ref.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setPage(page + 1);
      }
    }
  };
  return {data, onScroll};
}

export default useInfiniteScroll;
