import React, {FC, HTMLProps} from "react";

import styles from "./styles.scss";
import clsx from "clsx";

type IButtonProps = HTMLProps<HTMLButtonElement>;

const Button: FC<IButtonProps> = ({children, disabled, onClick, className}) => {
    return (
        <>
            <button className={clsx([styles.button], [className])} disabled={disabled} onClick={onClick}>{children}</button>
        </>
    );
};

export default Button;
