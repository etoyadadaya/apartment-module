import React, {Dispatch, FC, HTMLProps} from "react";
import clsx from "clsx";
import styles from "./styles.scss";

interface IMenuProps extends HTMLProps<HTMLDivElement> {
  active: boolean;
  setActive: Dispatch<boolean>;
}

const Menu: FC<IMenuProps> = ({active, setActive, children}) => {

  return (
      <>
        <div
            className={clsx([styles.menu], {
              [styles.active]: active,
            })}
            onClick={() => {
              document.body.style.overflow = "auto";
              setActive(false);
            }}
        />
        <div className={styles.menuBody}>
          <div
              className={clsx([styles.body], {
                [styles.active]: active,
              })}
              onClick={e => e.stopPropagation()}
          >
            <nav className={styles.wrap}>{children}</nav>
            <button
                tabIndex={!active ? -1 : 0}
                className={styles.closeButton}
                onClick={() => {
                  document.body.style.overflow = "auto";
                  setActive(false);
                }}
            >
              <svg
                  className={styles.closeIcon}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
              >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34 8.82L31.18 6L20 17.18L8.82 6L6 8.82L17.18 20L6 31.18L8.82 34L20 22.82L31.18 34L34 31.18L22.82 20"
                    fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </>
  );
};

export default Menu;
