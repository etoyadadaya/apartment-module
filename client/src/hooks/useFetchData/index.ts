import axios from "axios";
import {useEffect, useState} from "react";
import {Apartment} from "./types";

const useFetchData = (offset: number) => {
    const [queryEnd, setQueryEnd] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<Apartment[]>([]);

    useEffect(() => {
        axios.get<Apartment[]>(`http://127.0.0.1:666/apartments?offset=${offset}`).then(res => {
            if (res.status === 200) {
                setData(res.data);
            }
        }).catch(err => {
            if (err.response.status === 404) {
                setQueryEnd(true);
            }
            setError(true);
        });
    }, []);
    return {data, queryEnd, error};
}


export default useFetchData;
