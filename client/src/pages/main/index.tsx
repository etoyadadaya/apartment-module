import React, {FC, useEffect, useRef, useState} from "react";

import styles from "./styles.scss";
import Card from "../../components/card";
import Pagination from "../../components/pagination";
import usePagination from "../../hooks/usePagination";
import Modal from "../../components/modal";
import {Apartment, Sort} from "../../types/types";
import Details from "../../components/details";
import Header from "../../components/header";
import useInfiniteScroll from "../../hooks/useInfinityScroll";

//TODO: фильтрация квартир (сортировка по разным параметрам),
// разделить на важные и допы, прикрутить свитч, инфинити скроллинг,
// перерубить карточки на скроллинг списком, доп кнопочки в пагинации.

const Main: FC = () => {
    const ref = useRef();

    const [isModalActive, setIsModalActive] = useState<boolean>(false);
    const [apartment, setApartment] = useState<Apartment>(undefined);
    const [sort, setSort] = useState<Sort>("id");
    const {data, maxPage, page, prevPage, nextPage} = usePagination(sort);
    const [isColumn, setIsColumn] = useState<boolean>(false);
    const infiniteScroll = useInfiniteScroll(ref, sort);

    useEffect(() => {
        if (isColumn) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isColumn]);

    return (
        <>
            <Modal isActive={isModalActive} setIsActive={setIsModalActive}>
                <Details apartment={apartment}/>
            </Modal>
            <div className={styles.wrapper}>
                <Header callback={setSort} setIsActive={setIsColumn}/>
                {isColumn ? <div className={styles.infinity} onScroll={infiniteScroll.onScroll} ref={ref}>
                        {infiniteScroll.data.map((el, key) => {
                            return <Card onClick={() => {
                                setApartment(el);
                                setIsModalActive(true);
                            }} layout_image={el.layout_image} price={el.price} rooms={el.rooms} key={key}/>
                        })}
                    </div>
                    :
                    <div className={styles.cards}>
                    {data.map((el, key) => {
                        return <Card onClick={() => {
                            setApartment(el);
                            setIsModalActive(true);
                        }} layout_image={el.layout_image} price={el.price} rooms={el.rooms} key={key}/>
                    })}
                </div>}
                {!isColumn && <Pagination nextPage={nextPage} prevPage={prevPage} current={page} maxPage={maxPage}/>}
            </div>
        </>
    );
}

export default Main;
