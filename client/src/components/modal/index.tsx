import React, {Dispatch, FC, HTMLProps} from "react";

import styles from "./styles.scss";
import clsx from "clsx";

interface IModalProps extends HTMLProps<HTMLElement> {
    isActive: boolean;
    setIsActive: Dispatch<boolean>;
}

const Modal: FC<IModalProps> = ({isActive, setIsActive, children}) => {
    return (
        <div onClick={() => {setIsActive(false)}} className={clsx([styles.modal], {
            [styles.active]: isActive,
        })}>
            <div onClick={(e) => e.stopPropagation()} className={clsx([styles.body], {
                [styles.active]: isActive,
            })}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
