import React, {FC, HTMLProps} from "react";

import styles from "./styles.scss";

interface ICardProps extends HTMLProps<HTMLElement> {
    layout_image: string;
    price: number;
    rooms: number;
}

const Card: FC<ICardProps> = ({layout_image, price, rooms}) => {
    return (
        <>
            <div className={styles.card}>
                <img width={300} src={layout_image} alt=""/>
                <div className={styles.info}>
                    <h1>Price: {price}</h1>
                    <h3>Rooms: {rooms}</h3>
                </div>
            </div>
        </>
    );
};

export default Card;
