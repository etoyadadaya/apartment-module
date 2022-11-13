import {RefObject, useEffect, useState} from "react";
import {Apartment, Sort} from "../../types/types";
import useApiCall from "../useApiCall";

function useInfiniteScroll<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  sort: Sort
) {
  const host = useApiCall();
  const elementsPerPage = 6;

  const [data, setData] = useState<Apartment[]>([]);
  const [page, setPage] = useState<number>(0);
  const [queryEnd, setQueryEnd] = useState<boolean>(false);
  const [current, setCurrent] = useState<Sort>(sort);

  useEffect(() => {
    if (current !== sort) {
      setData([]);
      setQueryEnd(false);
      setPage(0);
    }
    if (!queryEnd) {
      host
        .get<Apartment[]>(
          `/apartments?offset=${page * elementsPerPage}&sort=${sort}`
        )
        .then(res => {
          if (res.status === 200) {
            if (current !== sort) {
              setData(res.data);
              setCurrent(sort);
            } else {
              setData([...data, ...res.data]);
            }
          }
        })
        .catch(err => {
          if (err.response.status === 404) {
            setQueryEnd(true);
          }
        });
    }
  }, [page, sort]);

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
