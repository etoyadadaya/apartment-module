import React, {Dispatch, FC, HTMLProps} from "react";

import clsx from "clsx";
import styles from "./styles.scss";

interface IModalProps extends HTMLProps<HTMLElement> {
  isActive: boolean;
  setIsActive: Dispatch<boolean>;
}

const Modal: FC<IModalProps> = ({isActive, setIsActive, children}) => (
  <div
    onClick={() => {
      setIsActive(false);
    }}
    className={clsx([styles.modal], {
      [styles.active]: isActive,
    })}
  >
    <div
      onClick={e => e.stopPropagation()}
      className={clsx([styles.body], {
        [styles.active]: isActive,
      })}
    >
      {children}
    </div>
  </div>
);

export default Modal;
