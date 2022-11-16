import React, {
  Dispatch,
  FC,
  FormEvent,
  HTMLProps,
  useCallback,
  useRef,
} from "react";

import styles from "./styles.scss";
import Button from "../button";
import {Sort} from "../../types/types";
import {parseSort} from "../../helpers";

interface IHeaderProps extends HTMLProps<HTMLElement> {
  callback: Dispatch<Sort>;
  setIsActive: Dispatch<boolean>;
  setIsMenuActive: Dispatch<boolean>;
}

const Header: FC<IHeaderProps> = ({callback, setIsActive, setIsMenuActive}) => {
  const mainRef = useRef<HTMLSelectElement>();
  const additionalRef = useRef<HTMLSelectElement>();

  const mainHandleChange = useCallback(
    (e: FormEvent<HTMLSelectElement>) => {
      callback(parseSort(e.currentTarget.value));
      additionalRef.current.value = "id";
    },
    [callback]
  );

  const additionalHandleChange = useCallback(
    (e: FormEvent<HTMLSelectElement>) => {
      callback(parseSort(e.currentTarget.value));
      mainRef.current.value = "id";
    },
    [callback]
  );

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.buttons}>
          <Button onClick={() => setIsActive(false)}>
            <svg
              height="24"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47 23H23V47H47V23Z"
                fill="black"
              />
              <path
                d="M77 23H53V47H77V23Z"
                fill="black"
              />
              <path
                d="M47 53H23V77H47V53Z"
                fill="black"
              />
              <path
                d="M77 53H53V77H77V53Z"
                fill="black"
              />
            </svg>
          </Button>
          <Button onClick={() => setIsActive(true)}>
            <svg
              height="24"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="23"
                y="23"
                width="24"
                height="24"
                fill="black"
              />
              <rect
                x="53"
                y="31"
                width="24"
                height="8"
                fill="black"
              />
              <rect
                x="23"
                y="53"
                width="24"
                height="24"
                fill="black"
              />
              <rect
                x="53"
                y="61"
                width="24"
                height="8"
                fill="black"
              />
            </svg>
          </Button>
          <Button onClick={() => setIsMenuActive(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12.9975V11.0024H4V12.9975H20Z" fill="black"/>
              <path d="M20 7.99503V6H4V7.99503H20Z" fill="black"/>
              <path d="M20 18V16.005H4V18H20Z" fill="black"/>
            </svg>
          </Button>
        </div>
        <div className={styles.buttons}>
          <Button>
            <select
              ref={mainRef}
              onChange={mainHandleChange}
              className={styles.select}
            >
              <option value="id">Main settings</option>
              <option value="price">Price</option>
              <option value="rooms">Rooms</option>
              <option value="floor">Floor</option>
              <option value="area_total">Total area</option>
            </select>
          </Button>
          <Button>
            <select
              ref={additionalRef}
              onChange={additionalHandleChange}
              className={styles.select}
            >
              <option value="id">Additional settings</option>
              <option value="pos_on_floor">Position on floor</option>
              <option value="area_kitchen">Kitchen area</option>
              <option value="area_live">Live area</option>
            </select>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
