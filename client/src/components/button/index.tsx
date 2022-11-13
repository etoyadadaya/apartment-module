import React, {FC, HTMLProps} from "react";

import clsx from "clsx";
import styles from "./styles.scss";

type IButtonProps = HTMLProps<HTMLButtonElement>;

const Button: FC<IButtonProps> = ({children, disabled, onClick, className}) => (
  <button
    className={clsx([styles.button], [className])}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
