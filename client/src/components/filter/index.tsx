import React, {Dispatch, FC, FormEvent, HTMLProps, useCallback} from "react";

import styles from "./styles.scss";
import Input from "../input";
import {filter} from "../../types/types";
import clsx from "clsx";

interface IFilterProps extends HTMLProps<HTMLElement> {
    callback: Dispatch<filter>;
    current: filter;
    setCtx: Dispatch<boolean>;
    ctx: boolean;
}

const Filter: FC<IFilterProps> = ({callback, className, current, setCtx, ctx}) => {
    const roomChange = useCallback(
        (e: FormEvent<HTMLSelectElement>) => {
            callback({
                area: current.area,
                kitchen_area: current.kitchen_area,
                live_area: current.live_area,
                price: current.price,
                rooms: Number(e.currentTarget.value),
            });
        },
        [callback, current]
    );

    const setPriceFrom = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            callback({
                area: current.area,
                kitchen_area: current.kitchen_area,
                live_area: current.live_area,
                price: {
                    from: Number(e.currentTarget.value),
                    to: current.price.to,
                },
                rooms: current.rooms,
            });
        },
        [callback, current]
    );

    const setPriceTo = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            callback({
                area: current.area,
                kitchen_area: current.kitchen_area,
                live_area: current.live_area,
                price: {
                    from: current.price.from,
                    to: Number(e.currentTarget.value),
                },
                rooms: current.rooms,
            });
        },
        [callback, current]
    );

    const setAreaFrom = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            callback({
                area: {
                    from: Number(e.currentTarget.value),
                    to: current.area.to,
                },
                kitchen_area: current.kitchen_area,
                live_area: current.live_area,
                price: current.price,
                rooms: current.rooms,
            });
        },
        [callback, current]
    );

    const setAreaTo = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            callback({
                area: {
                    from: current.area.from,
                    to: Number(e.currentTarget.value),
                },
                kitchen_area: current.kitchen_area,
                live_area: current.live_area,
                price: current.price,
                rooms: current.rooms,
            });
        },
        [callback, current]
    );

    const setLiveAreaFrom = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            callback({
                area: current.area,
                kitchen_area: current.kitchen_area,
                live_area: {
                    from: Number(e.currentTarget.value),
                    to: current.live_area.to,
                },
                price: current.price,
                rooms: current.rooms,
            });
        },
        [callback, current]
    );

    const setLiveAreaTo = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            callback({
                area: current.area,
                kitchen_area: current.kitchen_area,
                live_area: {
                    from: current.live_area.from,
                    to: Number(e.currentTarget.value),
                },
                price: current.price,
                rooms: current.rooms,
            });
        },
        [callback, current]
    );

    const setKitchenAreaFrom = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            callback({
                area: current.area,
                kitchen_area: {
                    from: Number(e.currentTarget.value),
                    to: current.kitchen_area.to,
                },
                live_area: current.live_area,
                price: current.price,
                rooms: current.rooms,
            });
        },
        [callback, current]
    );

    const setKitchenAreaTo = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            callback({
                area: current.area,
                kitchen_area: {
                    from: current.kitchen_area.from,
                    to: Number(e.currentTarget.value),
                },
                live_area: current.live_area,
                price: current.price,
                rooms: current.rooms,
            });
        },
        [callback, current]
    );

    const apply = useCallback(
        () => {
            setCtx(!ctx);
        },
        [ctx]
    );

    return (
        <div className={clsx([styles.wrapper], [className])}>
            <div className={styles.wrap}>
                <div className={styles.column}>
                    <h3>Room</h3>
                    <button className={styles.button}>
                        <select
                            onChange={roomChange}
                            className={styles.select}
                        >
                            <option value={0}>Room</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3+</option>
                        </select>
                    </button>
                </div>
                <div className={styles.column}>
                    <h3>Price, $</h3>
                    <div className={styles.inputs}>
                        <Input onInput={setPriceFrom}>From</Input>
                        <Input onInput={setPriceTo}>To</Input>
                    </div>
                </div>
                <div className={styles.column}>
                    <h3>Area, м²</h3>
                    <div className={styles.inputs}>
                        <Input onInput={setAreaFrom}>From</Input>
                        <Input onInput={setAreaTo}>To</Input>
                    </div>
                </div>
                <div className={styles.column}>
                    <h3>Kitchen Area, м²</h3>
                    <div className={styles.inputs}>
                        <Input onInput={setKitchenAreaFrom}>From</Input>
                        <Input onInput={setKitchenAreaTo}>To</Input>
                    </div>
                </div>
                <div className={styles.column}>
                    <h3>Live Area, м²</h3>
                    <div className={styles.inputs}>
                        <Input onInput={setLiveAreaFrom}>From</Input>
                        <Input onInput={setLiveAreaTo}>To</Input>
                    </div>
                </div>
            </div>
            <div className={styles.wrap}>
                <div/>
                <button className={styles.apply} onClick={apply}>Apply</button>
            </div>
        </div>
    );
};

export default Filter;
