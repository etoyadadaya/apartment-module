import React, {FC, HTMLProps} from "react";

import styles from "./styles.scss";

interface ICardProps extends HTMLProps<HTMLElement> {
    layout_image: string;
    price: number;
    rooms: number;
    floor: number;
    area_total: number;
    max_floor: number;
}

const Card: FC<ICardProps> = ({layout_image, price, rooms, floor, area_total, max_floor, onClick}) => {
    return (
        <>
            <div className={styles.card} onClick={onClick}>
                <img className={styles.img} width={300} src={layout_image} alt=""/>
                <div className={styles.info}>
                    <h1>{price}₽</h1>
                    <h3>{rooms}-комн. квартира</h3>
                    <h3>{floor}/{max_floor}</h3>
                    <h3>{area_total}м²</h3>

                </div>
            </div>
        </>
    );
};

export default Card;
