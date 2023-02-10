import React from "react";
import { Hamburger } from "../../../components/Hamburger";

export const NavBtn = (props) => {
    return (
        <Hamburger
            fill={props.fill}
            width="24px"
            height="18px"
            onClick={() => {
                props.setShowMenu(!props.showMenu);
            }}
            className={
                props.showMenu == false
                    ? "nav__hamburger"
                    : "nav__hamburger--active"
            }
        />
    );
};
