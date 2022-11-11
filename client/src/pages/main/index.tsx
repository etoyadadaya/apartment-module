import React, {FC, useState} from "react";

import styles from "./styles.scss";
import Card from "../../components/card";
import Pagination from "../../components/pagination";
import usePagination from "../../hooks/usePagination";
import Modal from "../../components/modal";
import {Apartment} from "../../types/types";
import Details from "../../components/details";

const Main: FC = () => {
    const {data, maxPage, page, prevPage, nextPage} = usePagination();
    const [isModalActive, setIsModalActive] = useState<boolean>(false);
    const [apartment, setApartment] = useState<Apartment>(undefined);

    return (
        <>
            <Modal isActive={isModalActive} setIsActive={setIsModalActive}>
                <Details apartment={apartment}/>
            </Modal>
            <div className={styles.wrapper}>
                <div className={styles.cards}>
                    {data.map((el, key) => {
                        return <Card onClick={() => {
                            setApartment(el);
                            setIsModalActive(true);
                        }} layout_image={el.layout_image} price={el.price} rooms={el.rooms} key={key}/>
                    })}
                </div>
                <Pagination nextPage={nextPage} prevPage={prevPage} current={page} maxPage={maxPage}/>
            </div>
        </>
    );
}

export default Main;
