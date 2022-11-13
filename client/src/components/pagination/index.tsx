import React, {FC, HTMLProps} from "react";

import styles from "./styles.scss";

interface IPaginationProps extends HTMLProps<HTMLElement> {
  nextPage: () => void;
  prevPage: () => void;
  current: number;
  maxPage: number;
}

const Pagination: FC<IPaginationProps> = ({
  nextPage,
  prevPage,
  current,
  maxPage,
}) => (
  <div className={styles.pagination}>
    <button
      className={styles.button}
      onClick={prevPage}
      disabled={current - 1 === 0}
    >
      Prev
    </button>
    <div className={styles.counter}>{current}</div>
    <button
      className={styles.button}
      onClick={nextPage}
      disabled={current + 1 > maxPage}
    >
      Next
    </button>
  </div>
);

export default Pagination;
