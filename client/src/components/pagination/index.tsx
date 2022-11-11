import React, {FC, HTMLProps} from "react";

import styles from "./styles.scss";

interface IPaginationProps extends HTMLProps<HTMLElement> {
    nextPage: () => void;
    prevPage: () => void;
    isLoading: boolean;
    current: number;
    end: number;
}

const Pagination: FC<IPaginationProps> = ({nextPage, prevPage, current, end, isLoading}) => {
    return (
        <>
            <div className={styles.pagination}>
                <button onClick={prevPage} disabled={current - 1 === 0 || isLoading}>Prev</button>
                <div>{current}</div>
                <button onClick={nextPage} disabled={current + 1 === end || isLoading}>Next</button>
            </div>
        </>
    );
};

export default Pagination;
