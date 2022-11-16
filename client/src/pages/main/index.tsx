import React, {FC, useEffect, useRef, useState} from "react";

import styles from "./styles.scss";
import Card from "../../components/card";
import Pagination from "../../components/pagination";
import usePagination from "../../hooks/usePagination";
import Modal from "../../components/modal";
import {Apartment, Sort, filter} from "../../types/types";
import Details from "../../components/details";
import Header from "../../components/header";
import useInfiniteScroll from "../../hooks/useInfinityScroll";
import Filter from "../../components/filter";

const Main: FC = () => {
    const ref = useRef();

    const [filter, setFilter] = useState<filter>({
        area: {from: 0, to: 0},
        kitchen_area: {from: 0, to: 0},
        live_area: {from: 0, to: 0},
        price: {from: 0, to: 0},
        rooms: 0,
    });
    const [ctx, setCtx] = useState<boolean>(false);
    const [isModalActive, setIsModalActive] = useState<boolean>(false);
    const [apartment, setApartment] = useState<Apartment>(undefined);
    const [sort, setSort] = useState<Sort>("id");
    const {data, maxPage, page, prevPage, nextPage} = usePagination(sort, filter, ctx);
    const [isColumn, setIsColumn] = useState<boolean>(false);
    const infiniteScroll = useInfiniteScroll(ref, sort, filter, ctx);

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
                <Details callback={setIsModalActive} apartment={apartment}/>
            </Modal>
            <div className={styles.wrapper}>
                <Header callback={setSort} setIsActive={setIsColumn}/>
                <Filter callback={setFilter} current={filter} setCtx={setCtx} ctx={ctx}/>
                {isColumn ? <div className={styles.infinity} onScroll={infiniteScroll.onScroll} ref={ref}>
                        {infiniteScroll.data.map((el, key) => {
                            return <Card onClick={() => {
                                setApartment(el);
                                setIsModalActive(true);
                            }} layout_image={el.layout_image} price={el.price} rooms={el.rooms} key={key} area_total={el.area_total} floor={el.floor} max_floor={4}/>
                        })}
                    </div>
                    :
                    <div className={styles.cards}>
                    {data.map((el, key) => {
                        return <Card onClick={() => {
                            setApartment(el);
                            setIsModalActive(true);
                        }} layout_image={el.layout_image} price={el.price} rooms={el.rooms} area_total={el.area_total} floor={el.floor} key={key} max_floor={4}/>
                    })}
                </div>}
                {!isColumn && <Pagination nextPage={nextPage} prevPage={prevPage} current={page} maxPage={maxPage}/>}
            </div>
        </>
    );
}

export default Main;
