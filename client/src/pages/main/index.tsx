import React, {FC} from "react";

import styles from "./styles.scss";
import Card from "../../components/card";
import Pagination from "../../components/pagination";
import usePagination from "../../hooks/usePagination";

const Main: FC = () => {
    const {data, page, queryEndPage, prevPage, nextPage, loading} = usePagination();
    return (
        <>
            <div className={styles.wrapper}>
                {data.map((el, key) => {
                    return <Card layout_image={el.layout_image} price={el.price} rooms={el.rooms} key={key}/>
                })}
            </div>
            <Pagination nextPage={nextPage} prevPage={prevPage} current={page} end={queryEndPage} isLoading={loading}/>
        </>
    );
}

export default Main;
