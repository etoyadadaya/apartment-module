import React, {FC, HTMLProps} from "react";

import styles from "./styles.scss";
import {Apartment} from "../../types/types";

interface IDetailsProps extends HTMLProps<HTMLElement> {
    apartment: Apartment;
}

const Details: FC<IDetailsProps> = ({apartment}) => {
    return (
        <>
            {apartment && <div className={styles.card}>
                <img className={styles.img} height={600} src={apartment.layout_image} alt=""/>
                <div className={styles.info}>
                    <h3>Price: {apartment.price}</h3>
                    <h3>Rooms: {apartment.rooms}</h3>
                    <h3>Floor: {apartment.floor}</h3>
                    <h3>Floor Position: {apartment.pos_on_floor}</h3>
                    <h3>Kitchen Area: {apartment.area_kitchen}</h3>
                    <h3>Live Area: {apartment.area_live}</h3>
                    <h3>Total Area: {apartment.area_total}</h3>
                </div>
            </div>}
        </>
    );
};

export default Details;
