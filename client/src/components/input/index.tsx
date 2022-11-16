import React, {FC, HTMLProps} from "react";
import clsx from "clsx";
import styles from "./styles.scss";

type IInputProps = HTMLProps<HTMLInputElement>;

const Input: FC<IInputProps> = ({
    children,
    className,
    onInput,
}) => {
    return (
        <div className={clsx(className, [styles.inputWrap])}>
            <label>
                <input onInput={onInput} className={styles.input} placeholder=" "/>
                <div className={styles.placeholder}>
                    {children}
                </div>
            </label>
        </div>
    );
};

export default Input;
