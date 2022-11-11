import {useEffect, useState} from "react";
import axios from "axios";
import {Apartment} from "./types";

const usePagination = () => {
    const elementsPerPage = 6;
    const [page, setPage] = useState<number>(1);
    const [data, setData] = useState<Apartment[]>([]);
    const [queryEndPage, setQueryEndPage] = useState<number>(6);
    const [loading, setLoading] = useState<boolean>(false);

    console.log(queryEndPage);
    console.log(loading);


    const prevPage = () => {
        if (page - 1 > 0) {
            setPage(page - 1);
            setLoading(true);
            axios.get<Apartment[]>(`http://127.0.0.1:666/apartments?offset=${page * elementsPerPage}`).then(res => {
                if (res.status === 200) {
                    setData(res.data);
                }
                setLoading(false);
            });
        }
    }

    const nextPage = () => {
        if (page + 1 < queryEndPage) {
            setPage(page + 1);
            setLoading(true);
            axios.get<Apartment[]>(`http://127.0.0.1:666/apartments?offset=${page * elementsPerPage}`).then(res => {
                if (res.status === 200) {
                    setData(res.data);
                    axios.get<Apartment[]>(`http://127.0.0.1:666/apartments?offset=${page + elementsPerPage}`).catch(err => {
                        if (err.response.status === 404) {
                            setQueryEndPage(page + 1);
                        }
                        setLoading(false);
                    });
                }
            }).catch(err => {
                if (err.response.status === 404) {
                    setQueryEndPage(page);
                }
            });
        }
    }

    useEffect(() => {
        axios.get<Apartment[]>(`http://127.0.0.1:666/apartments?offset=${0}`).then(res => {
            if (res.status === 200) {
                setData(res.data);
                axios.get<Apartment[]>(`http://127.0.0.1:666/apartments?offset=${elementsPerPage}`).catch(err => {
                    if (err.response.status === 404) {
                        setQueryEndPage(2);
                    }
                });
            }
        }).catch(err => {
            if (err.response.status === 404) {
                setQueryEndPage(1);
            }
        });
    }, []);

    return {data, page, queryEndPage, prevPage, nextPage, loading};
}

export default usePagination;
