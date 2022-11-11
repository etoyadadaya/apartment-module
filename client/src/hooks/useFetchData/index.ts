import {useEffect, useState} from "react";
import useApiCall from "../useApiCall";
import {Apartment} from "../../types/types";

const useFetchData = (offset: number) => {
    const host = useApiCall();
    const [queryEnd, setQueryEnd] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<Apartment[]>([]);

    useEffect(() => {
        host.get<Apartment[]>(`/apartments?offset=${offset}`).then(res => {
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
