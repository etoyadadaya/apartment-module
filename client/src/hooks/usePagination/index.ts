import {useEffect, useState} from "react";
import useApiCall from "../useApiCall";
import {Apartment} from "../../types/types";

const usePagination = () => {
    const host = useApiCall();

    const elementsPerPage = 6;
    const [data, setData] = useState<Apartment[]>([]);
    const [page, setPage] = useState<number>(1);
    const [maxPage, setMaxPage] = useState<number>(1);

    useEffect(() => {
        host.get('/apartments/count').then(res => {
            if (res.status === 200) {
                setMaxPage(Math.ceil(res.data / elementsPerPage));
            }
        });
    }, []);

    useEffect(() => {
        host.get<Apartment[]>(`/apartments?offset=${(page - 1) * elementsPerPage}`).then(res => {
            if (res.status === 200) {
                setData(res.data);
            }
        })
    }, [page]);

    const prevPage = () => {
        setPage(page - 1);
    }

    const nextPage = () => {
        setPage(page + 1);
    }

    return {data, maxPage, page, prevPage, nextPage};
}

export default usePagination;
